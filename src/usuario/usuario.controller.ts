import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController{

    private usuarioRepository = new UsuarioRepository();

    @Post()
    criarUsuario(@Body() dadosDoUsuario){
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }

    @Get()
    listUsuarios(){
        return this.usuarioRepository.listar();
    }
}