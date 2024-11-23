import { Controller, Get, Param } from "@nestjs/common";

@Controller("/users")
export class usersController{

    @Get('/account/:id/:name')
    getAccount(@Param() params: Record<number,string>){
        console.log(params)
        return 'success'
    }
}