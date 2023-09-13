import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/criaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{

    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    criarUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO){
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }

    @Get()
    listUsuarios(){
        return this.usuarioRepository.listar();
    }
}