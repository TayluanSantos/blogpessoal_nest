import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemController } from "./controllers/postagem.controller";
import { TemaModule } from "../tema/tema.module";
import { TemaService } from "../tema/services/tema.service";
import { PostagemService } from "./services/Postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]),TemaModule],
    providers: [PostagemService,TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})

export class PostagemModule {

}