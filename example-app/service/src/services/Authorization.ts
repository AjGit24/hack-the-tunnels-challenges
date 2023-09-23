import jwt from "jsonwebtoken";
import { Err, Ok, Result } from "ts-results";
import { AccountService } from "../services";

export const verify = async (
  token: string,
): Promise<Result<boolean, Error>> => {
  const secret = process.env.JWT_SECRET as string;

  try {
    const result = jwt.verify(token, secret) as { data: string };
    const email = result.data;

    if (email === undefined || null) {
      return Err(new Error("Invalid Authorization header"));
    }

    const account = await AccountService.findAccountByEmail(email);

    if (!account) {
      return Err(new Error("Invalid Authorization header"));
    }

    if (account.role !== "ADMIN") {
      return Err(new Error("Account is not authorized."));
    }
  } catch (error) {
    return Err(new Error("Invalid Authorization header"));
  }

  return Ok(true);
};
