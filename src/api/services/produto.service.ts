import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from 'src/common/models/produto.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class ProdutoService {

    constructor(
        private connection: Connection,
        @InjectRepository(Produto)
        private readonly produtoRepository: Repository<Produto>,
    ){}

    async findAll(): Promise<Produto[]>{
        return this.produtoRepository.find();
    }

    async findOne(id: string){
        return this.produtoRepository.findOne(id);
    }

    async create(produtoNew: ProdutoInterface):Promise<any>{
        return this.produtoRepository.save(produtoNew);
    }

    // update(produto: Produto){
    //     const produtoArray = this.getById(produto.id);
    //     if (produtoArray) {
    //         produtoArray.description = produto.description;
    //         produtoArray.cod = produto.cod;
    //         produtoArray.status = produto.status;
    //     }

    //     return produtoArray;
    // }

    delete(id: string){
        return this.produtoRepository.delete(id);
    }
}
