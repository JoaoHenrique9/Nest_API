import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController{

    constructor(private produtoRepository:ProdutoRepository){}

    @Post()
    criarProduto(@Body() dadosProduto){
        this.produtoRepository.salvar(dadosProduto)    
    }

    @Get()
    listProdutos(){
        return this.produtoRepository.listaTodos();
    }
}