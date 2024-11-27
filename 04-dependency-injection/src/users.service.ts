import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{
    getHello(): String{
        return "Hello this is sonis from appservice"
    }
}