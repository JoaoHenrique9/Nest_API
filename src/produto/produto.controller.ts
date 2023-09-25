import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/criaProduto.dto";

@Controller('/produtos')
export class ProdutoController{

    constructor(private produtoRepository:ProdutoRepository){}

    @Post()
    criarProduto(@Body() dadosProduto: CriaProdutoDTO){
        this.produtoRepository.salvar(dadosProduto)    
    }

    @Get()
    listProdutos(){
        return this.produtoRepository.listaTodos();
    }
}