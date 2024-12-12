import { DataSource, Repository } from "typeorm";
import { User } from "../entity/auth.entity";

export class AuthRepository extends Repository<User>{
    constructor(dataSource: DataSource){
        super(User, dataSource.createEntityManager())
    }
}