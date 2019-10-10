import {Component, OnInit} from '@angular/core';
import {GithubService} from './services/github.service';
import {Observable} from 'rxjs';
import {GithubUser} from './domains/github.user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  $githubUsers: Observable<GithubUser[]>;

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {
    this.$githubUsers = this.githubService.findAllGithubUsers();
  }


  goToDevApp(login: string) {
    window.open(`https://${login}.github.io/conference-ionic`, '_blank');
  }
}
