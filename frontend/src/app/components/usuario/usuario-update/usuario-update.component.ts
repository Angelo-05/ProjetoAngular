import { Usuario } from "./../usuario.model";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioService } from "./../usuario.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {
  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.usuario = { nome: "", aniversario: "", email: "", telefone: 0 }
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id") || 0;
    id = +id;
    this.usuarioService.readById(id).subscribe((this.usuario) => {
      this.usuario = this.usuario;
    });
  }

  updateUsuario(): void {
    this.usuarioService.update(this.usuario).subscribe(() => {
      this.usuarioService.showMessage("Cadastro atualizado com sucesso!");
      this.router.navigate(["/usuarios"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/usuarios"]);
  }
}
