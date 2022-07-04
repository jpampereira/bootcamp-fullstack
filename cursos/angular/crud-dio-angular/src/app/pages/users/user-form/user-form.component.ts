import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users: Array<User> = [];
  userId: any = '';

  constructor(private fb: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: ''
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      
      if (this.userId !== null) {
        this.userService.getUser(this.userId).subscribe(res => {
          this.userForm.patchValue({
            id: res[0].id,
            nome: res[0].nome,
            sobrenome: res[0].sobrenome,
            idade: res[0].idade,
            profissao: res[0].profissao
          })
        });
      }
    });

    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  createUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.postUser(this.userForm.value).subscribe(() => {
      console.log(`Usuário cadastrado com sucesso!`);
    }, err => {
      console.log(err);
    }, () => {
      this.router.navigate(['/']);
    });
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe({
      next: res => console.log('Usuário atualizado!', res),
      error: err => console.log(err), 
      complete: () => this.router.navigate(['/'])
    });
  }

  actionButton() {
    if (this.userId !== null) {
      this.updateUser();
    } else{
      this.createUser();
    }
  }

}