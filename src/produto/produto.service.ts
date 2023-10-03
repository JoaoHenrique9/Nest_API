import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProdutoEntity } from "./produto.entity";
import { ListaProdutoDTO } from "./dto/listaProduto.dto";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";


@Injectable()
export class ProdutoService {
        constructor(
                @InjectRepository(ProdutoEntity)
                private readonly produtoRepository: Repository<ProdutoEntity>
        ) { }

        async criaProduto(produtoEntity: ProdutoEntity) {
                await this.produtoRepository.save(produtoEntity)
        }

        async listaProduto() {
                const produtosSalvos = await this.produtoRepository.find();

                const produtosLista = produtosSalvos.map(
                        (produto) => new ListaProdutoDTO(
                                produto.id,
                                produto.usuarioId,
                                produto.nome,
                                produto.valor,
                                produto.quantidade,
                                produto.descricao,
                                produto.categoria)
                );

                return produtosLista;
        }

        async atualizaProduto(id: string, usuarioEntity: AtualizaProdutoDTO) {
                await this.produtoRepository.update(id, usuarioEntity);
        }

        async deletaProduto(id: string) {
                await this.produtoRepository.delete(id);
        }
}