import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/criaUsuario.dto";
import { v4 as uuid } from "uuid";
import { UsuarioEntity } from "./usuario.entity";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/atualizaUsuario.dto";
import { UsuarioService } from "./usuario.service";

@Controller('/usuarios')
export class UsuarioController {

    constructor(
        private usuarioRepository: UsuarioRepository,
        private usuarioService: UsuarioService
    ) { }

    @Post()
    criarUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);

        return {
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            mensagem: 'usuário criado com sucesso',
        };
    }

    @Get()
    async listUsuarios() {
        const usuariosSalvos = await this.usuarioService.listaUsuarios();

        return usuariosSalvos;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO) {
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return {
            usuario: usuarioAtualizado,
            mensagem: 'usuário atualizado com sucesso',
        }

    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        const usuarioRemovido = await this.usuarioRepository.remove(id);

        return {
            usuario: usuarioRemovido,
            mensagem: 'usuário removido com sucesso'
        }
    }

}