
export class UsuarioRepository{
    private usuarios = [];

    async salvar(usuarios){
        this.usuarios.push(usuarios);
    }
    
    async listar(){
        return this.usuarios;
    }
}