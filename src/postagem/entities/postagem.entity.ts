import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Transform, TransformFnParams } from "class-transformer";

@Entity({name:"tb_postagens"})
export class Postagem {

    @PrimaryGeneratedColumn()
    id:number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) // Bloquear apenas espaços em branco
    @IsNotEmpty() // Não aceitar titulo vazio
    @Column({length: 100, nullable: false}) // Definir o tamanho e não aceitar valor nulo
    titulo: string;
 
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // Preenche a data e a hora automaticamente
    data: Date;
}