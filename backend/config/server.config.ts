import dotenv from 'dotenv'
dotenv.config()

const SERVER_CFG = {
  ALLOWED_ORIGINS: [
    process.env.ALLOWED_ORIGINS,
    process.env.ALLOWED_ORIGINS_ALTER,
    process.env.ALLOWED_ORIGINS_TESTING,
    process.env.ALLOWED_ORIGINS_TESTING_ALTER
  ],
  HOST: process.env.HOST,
  PORT: Number(process.env.PORT),
  MODE: process.env.MODE
}

export default SERVER_CFG
