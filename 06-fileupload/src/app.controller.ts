import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AppService } from "./app.service";
import { diskStorage } from "multer";
import { extname } from "path";

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
        console.log('file', file);
        return "File uplaod section"
    }
}