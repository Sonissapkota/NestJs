import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Crud{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item: string;

    @Column()
    remarks: string;

    @Column({default: false})
    isActive: boolean;
}