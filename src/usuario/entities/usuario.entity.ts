import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Postagem } from "../../postagem/entities/postagem.entity"
import { Transform, TransformFnParams } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    id: number

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    @ApiProperty()
    nome: string

    @IsEmail() // Força o usuário a digitar no formato de email
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty({example: "email@email.com.br"})
    usuario: string

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @MinLength(8) // Tamanho mínimo de 8 caracteres
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    @ApiProperty()
    senha: string

    @Column({length: 5000 }) 
    @ApiProperty()
    foto: string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    @ApiProperty()
    postagem: Postagem[]

}