import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository{
    private produtos = [];

    async salvar(produtos){
        this.produtos.push(produtos);
    }
    
    async listaTodos(){
        return this.produtos;
    }
}