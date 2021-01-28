import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from 'src/common/models/produto.entity';
import { ProdutosController } from './controllers/produtos/produtos.controller';
import { ProdutoService } from './services/produto.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Produto])
    ],
    controllers: [
        ProdutosController
    ],
    providers: [
        ProdutoService
    ],
    exports: [
        TypeOrmModule
    ]
})
export class ApiModule {}
