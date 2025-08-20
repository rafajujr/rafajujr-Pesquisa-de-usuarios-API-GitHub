import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Github } from '../../serve/github';
import { UserGithub } from '../../interface/gitUser';
import { GitRepos } from '../../interface/gitRepos';




@Component({
  selector: 'app-perfil',
  imports: [ ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss'
})
export class Perfil implements OnInit {

  faConfig = { prefix: 'fas', iconPack: 'fab' };

 todos: UserGithub[] = [];
 all: UserGithub[] = [];
 usuario: UserGithub[] = [];
 repos: GitRepos[] = [];
 logo: string = 'Pesquisa de Perfil do gitHub';






  constructor(private route: ActivatedRoute, private githubService: Github, private router : Router) { }



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const username = params.get('username');

      if(username) {
        this.fetchUser(username);
        this.fetchRepos(username);

      } else if(username === '') {
        this.fetchAll();
      }
    });
  }

  fetchAll() {
    this.githubService.getAllUsers().subscribe(users => {

     this.todos = [...users];

     //console.log(this.todos);
    });
  }



  fetchUser(username: string) {
    this.githubService.getUser(username).subscribe({
      next: (data) => {
        //this.todos = [data];
        //this.all = [data];
        this.usuario = [data]
        console.log(this.usuario);
      }
    })
/*
    */
  }

  fetchRepos(username: string) {
    this.githubService.getRpos(username).subscribe({
      next: (data) => {
        this.repos = [...data];
        console.log(this.repos.sort((a, b) => b.stargazers_count - a.stargazers_count));
      }
    })
  }



  goBack() {
    this.router.navigate(['/']);
  }

  atualizado(data: string) {
    console.log(data);
    let atualização = new Date(data);
    const hoje = new Date();
    const diferenca = Math.floor((hoje.getTime() - new Date(data).getTime()) / 86400000);
    return 'atualizados em ' + diferenca + ' dias atrás';
  }

  Urlgithub(username: string) {
    return 'https://github.com/' + username;
  }


}

