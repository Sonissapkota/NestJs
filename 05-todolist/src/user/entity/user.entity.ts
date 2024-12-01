import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: String;

    @Column()
    email: String;

    @Column()
    password: String;
}