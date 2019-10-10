import {Component, OnInit} from '@angular/core';
import {GithubService} from './services/github.service';
import {Observable} from 'rxjs';
import {GithubUser} from './domains/github.user';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    $githubUsers: Observable<GithubUser[]>;

    constructor(private githubService: GithubService, public loadingController: LoadingController) {
    }

    ngOnInit(): void {
        this.init();
    }

    async init() {
        const loading = await this.loadingController.create({
          message: 'Récupération des informations Github'
        });

        await loading.present();


        this.$githubUsers = this.githubService.findAllGithubUsers()
            .pipe(
                finalize(() => loading.dismiss())
            );
    }


    goToDevApp(login: string) {
        window.open(`https://${login}.github.io/conference-ionic`, '_blank');
    }
}
