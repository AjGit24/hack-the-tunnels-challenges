import { AccountService } from ".";
import { Ok, Err, Result } from "ts-results";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (
  email: string,
  password: string,
): Promise<Result<string, Error>> => {
  const account = await AccountService.findAccountByEmail(email);

  if (!account) {
    return Err(new Error("Account not found"));
  }

  const match = await bcrypt.compare(password, account.password);

  if (!match) {
    return Err(new Error("Incorrect password"));
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return Err(new Error("JWT_SECRET not set"));
  }

  const token = jwt.sign({ data: account.email }, secret);

  return Ok(`Bearer ${token}`);
};
