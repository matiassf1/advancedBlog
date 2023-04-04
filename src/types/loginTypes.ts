export type typeInitialValue = {
  email: string;
  password: string;
};

type typeUser = {
  email: string;
  password: string;
  subject: string;
};

export interface IUsers {
    admin: typeUser,
    author: typeUser,
    reader: typeUser
}