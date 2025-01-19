import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AppService } from "./app.service";

@Controller("user")
export class AppController{
    constructor(private readonly appService: AppService){}

    @Get()
    displayUser(){
        return this.appService.displayuser()
    }

    @Post("upload")
    @UseInterceptors(FileInterceptor('file', ))
    uploadfile(@UploadedFile() file: Express.Multer.File){
        return "File uplaod section"
    }
}