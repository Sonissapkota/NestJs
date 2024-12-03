import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{
    displayuser(): string{
        return "Hello sonis how are you doing"
    }
}