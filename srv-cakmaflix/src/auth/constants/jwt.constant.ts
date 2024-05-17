import { JwtSignOptions } from "@nestjs/jwt";

const expireTime = '99y'; // TODO: change to '60s' for production
const refreshTokenExpireTime = '12d';

export const jwtSignOptions: JwtSignOptions = { secret: process.env.JWT_SECRET, expiresIn: process.env.JWT_EXPIRE_TIME || expireTime };
export const jwtRefreshSignOptions: JwtSignOptions = { secret: process.env.JWT_REFRESH_SECRET, expiresIn: process.env.JWT_REFRESH_EXPIRE_TIME || refreshTokenExpireTime };
