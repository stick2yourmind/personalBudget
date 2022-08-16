/* -------------------------------------------------------------------------- */
/*                                MODEL'S TYPES                               */
/* -------------------------------------------------------------------------- */

export type EmailType = string
export type PasswordType = string
export type NameType = string

export interface CreateUser {
  email: EmailType
  name: NameType
  password: PasswordType
}

export interface GetUser {
  email: EmailType
}
