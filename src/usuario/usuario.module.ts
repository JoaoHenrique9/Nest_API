import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailEhUnicoValidator } from "./validacao/email-eh-unico.validator";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuarioModule { }