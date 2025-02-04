import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // private readonly adminCode = process.env.ADMIN_CODE;
  private readonly adminCode = 'Mega2024!@#';

  constructor(private readonly jwtService: JwtService) {}

  validateAdminCode(code: string): boolean {
    return code === this.adminCode;
  }

  generateJwtToken(payload: any) {
    return this.jwtService.sign(payload);
  }
}
