import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';

interface Character {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture:{
    medium: string;
  };
  id: {
    value: string;
  };
  email: string;
  login:{
    uuid: string;
  };
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  alumnos: Character[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>('https://randomuser.me/api/?results=50')
    .subscribe((res: any) => {
      console.log(res);
      this.alumnos = res.results as Character[];
    });
  }

}
