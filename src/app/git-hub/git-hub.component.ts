import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent {
  public repos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer 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' });
    this.http.get<any[]>('https://api.github.com/user/repos', { headers }).subscribe(
      (repos) => {
        console.log(repos); // Log the response to the console
        this.repos = repos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
