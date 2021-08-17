import { Iproduto } from './../model/Iproduto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';ng

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly URL = ' http://angular-test.blabs.us';

  constructor(private http: HttpClient, private toast: ToastrService) { }

    buscarTodos():  Observable<Iproduto[]>{
      return this.http.get<Iproduto[]>(this.URL)
      .pipe(
        map(retorno => retorno ),
        catchError(erro => this.exibeErro(erro) ),
        tap(console.log)
      );
    }

    exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
      this.toast.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo)
    }

    exibeErro(e: any): Observable<any>{
      this.exibirMensagem('ERRO!!','Não foi possivel realizar a operação!', 'toast-error');
      return EMPTY;
    }

    cadastrar(produto: Iproduto):  Observable<Iproduto>{
      return this.http.post<Iproduto>(this.URL, produto)
      .pipe(
        map((retorno: Iproduto) => retorno),
        catchError(erro => this.exibeErro(erro)),
        tap(console.log)
      );

    }

    excluir(id: number):  Observable<any>{
      return this.http.delete<any>(`${this.URL}/${id}`)
      .pipe(
        map((retorno: Iproduto) => retorno),
        catchError(erro => this.exibeErro(erro)),
        tap(console.log)
      );
    }
}
