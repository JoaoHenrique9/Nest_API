import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/product.module';

@Module({
  imports: [UsuarioModule, ProdutoModule]
})
export class AppModule {}
