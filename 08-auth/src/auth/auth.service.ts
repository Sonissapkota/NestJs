import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/auth.entity';
import { AuthRepository } from './repository/auth.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly authRepository: AuthRepository,
        private readonly jwtService: JwtService){}

    async validateUser(email: string, password: string): Promise<{access_token:string}>{
        const user = await this.authRepository.findOne({where: {email}});

        if(user?.password !== password){
            throw new UnauthorizedException("Incorrect email or password")
        }

        const payload = {sub:user.id, username: user.email};
        return{
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
