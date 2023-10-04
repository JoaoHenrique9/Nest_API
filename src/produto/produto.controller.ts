import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/criaProduto.dto";
import { v4 as uuid } from "uuid";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";
import { ProdutoEntity } from "./produto.entity";
import { ProdutoService } from "./produto.service";

@Controller('/produtos')
export class ProdutoController {

    constructor(
        private produtoService: ProdutoService
    ) { }

    @Post()
    criarProduto(@Body() dadosProduto: CriaProdutoDTO) {
        const produto = new ProdutoEntity();

        produto.id = uuid();
        produto.nome = dadosProduto.nome;
        produto.usuarioId = dadosProduto.usuarioId;
        produto.valor = dadosProduto.valor;
        produto.quantidade = dadosProduto.quantidade;
        produto.descricao = dadosProduto.descricao;
        produto.categoria = dadosProduto.categoria;
        produto.caracteristicas = dadosProduto.caracteristicas;
        produto.imagens = dadosProduto.imagens;

        const produtoCadastrado = this.produtoService.criaProduto(produto);
        return produtoCadastrado;
    }

    @Get()
    listProdutos() {
        return this.produtoService.listaProduto();
    }

    @Put('/:id')
    async atualiza(
        @Param('id') id: string,
        @Body() dadosProduto: AtualizaProdutoDTO,
    ) {
        const produtoAlterado = await this.produtoService.atualizaProduto(
            id,
            dadosProduto,
        );

        return {
            mensagem: 'produto atualizado com sucesso',
            produto: produtoAlterado,
        };
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        const produtoRemovido = await this.produtoService.deletaProduto(id);

        return {
            mensagem: 'produto removido com sucesso',
            produto: produtoRemovido,
        };
    }
}