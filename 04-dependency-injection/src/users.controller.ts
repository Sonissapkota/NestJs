import { Controller, Get } from "@nestjs/common";
import { AppService } from "./users.service";

@Controller("/users")
export class usersController{
    constructor(private readonly appService: AppService){}

    // We can also declare or inject the services using the decorator as shown below
    // constructor(@Inject(AppService) private appService: any){}

    @Get("hello")
    getHello(): String{
        return this.appService.getHello();
    }
}