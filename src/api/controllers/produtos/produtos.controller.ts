import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutoService } from 'src/api/services/produto.service';
import { Produto } from 'src/common/models/produto.entity';

@Controller('produtos')
export class ProdutosController {
    constructor(
        private readonly produtoService: ProdutoService
    ){}

    @Get()
    findAll(): Promise<Produto[]>{
        return this.produtoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Produto>{
        return this.produtoService.findOne(id);
    }

    @Post()
    create(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.create(produto);
    }

    // @Put(':id')
    // async update(@Param('id') id: number,@Body() produto: Produto): Promise<Produto>{
    //     produto.id = id;
    //     return this.produtoService.update(produto);
    // }

    @Delete(':id')
    delete(@Param('id') id: string){
        this.produtoService.delete(id);
    }
}
