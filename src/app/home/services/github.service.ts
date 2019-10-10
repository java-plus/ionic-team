import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {developers, githubApi} from '../../../environments/configuration';
import {GithubUser} from '../domains/github.user';
import {forkJoin, of, zip} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    private githubUsers: GithubUser[];

    constructor(private http: HttpClient) {
        this.init();
    }

    init() {
        const localSessionString = localStorage.getItem('sessions');

        if (localSessionString) {
            this.githubUsers = JSON.parse(localSessionString);
        }
    }

    findAllGithubUsers() {
      return this.githubUsers ?
          of(this.githubUsers) :
          zip(...developers.map(dev => this.http.get<GithubUser>(`${githubApi.userUrl}/${dev.github}`)))
            .pipe(
                tap(users => {
                  localStorage.setItem('sessions', JSON.stringify(users));
                  this.init();
                })
            );
    }
}



