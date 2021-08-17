import { ProdutosService } from './../../../services/produtos.service';
import { Iproduto } from './../../../model/Iproduto.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

      produto : Iproduto = {
      name: null,
      price:null,
      sku:null,

  };

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {

  }
  salvarProduto():void{
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
        this.produto = retorno;
        this.produtosService.exibirMensagem(
          'SISTEMA',
          `${this.produto.name} foi cadastrado com sucesso. ID: ${this.produto.id}`,
           'toast-success'
        );
          this.router.navigate(['/listar-produtos']);
    });
  }


}
