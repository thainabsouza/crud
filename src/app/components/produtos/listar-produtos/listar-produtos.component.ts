import { Iproduto } from './../../../model/Iproduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
  preserveWhitespaces: true
})

export class ListarProdutosComponent implements OnInit {


  listaProdutos: Iproduto[]=[];

  constructor(private produtosService:ProdutosService) {
  {

  }
  }


  ngOnInit(): void {
    this.carregarProdutos();

  }

  carregarProdutos(): void{
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno})
  }

  deletar(produto: Iproduto): void{
    this.produtosService.excluir(produto.id).subscribe(()=> {
      this.produtosService.exibirMensagem(
        'SISTEMA',
        `${produto.name} foi ecluido com sucesso`,
        'toast-error'
      );
      this.carregarProdutos()
    });
  }

}




/*export class ListarProdutosComponent implements OnInit {


  listar: Listar[];

  constructor(private service:ListarProdutosService) {}


  ngOnInit(): void {
    this.service.list()
    .subscribe(dados => this.listar = dados);
  }

}

/*listarProdutos: any[] = [
    {"id":1,"name":"Notebook Dell Inspiron i14-7460-A10S","price":3429.99,"sku":"131501024"},
    {"id":2,"name":"Notebook Acer A515-51G-72DB","price":2749.99,"sku":"132620885"},
    {"id":3,"name":"Notebook Ideapad 320","price":2599.99,"sku":"133252826"},
    {"id":5,"name":"Notebook A515-51-51UX","price":2198.99,"sku":"133459747"}];*/

  //constructor() {
   /// for(let item of this.listaStrings){
    //  console.log(item)
  //  }
  // }
