import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/auth.entity';
import { AuthRepository } from './repository/auth.repository';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly authRepository: AuthRepository,
        private readonly jwtService: JwtService
    ){}
    async validateUser(authDto: AuthDto){
        const new_email = authDto.email;
        const user = await this.authRepository.findOne({where: {email: new_email}});

        if(user?.password !== authDto.password){
            throw new UnauthorizedException("Incorrect email or password")
        }

        const payload = {email: user.email, sub: user.id};
        return{
            access_token: await this.jwtService.signAsync(payload)
        };
    }
    async register(authDto: AuthDto){
        const newUser =  this.authRepository.create(authDto)
        return await this.authRepository.save(newUser);
    }
}
