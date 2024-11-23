import { Controller, Get, Param } from "@nestjs/common";

@Controller("/users")
export class usersController{

    @Get('/account/:id/:name')
    getAccount(@Param('name') param: string){
        console.log(param)
        return 'success'
    }
}