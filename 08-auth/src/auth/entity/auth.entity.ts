import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    @Column('uuid')
    id: string;

    @Column()
    username?: string

    @Column({unique: true})
    email?: string;

    @Column()
    password?: string;
}