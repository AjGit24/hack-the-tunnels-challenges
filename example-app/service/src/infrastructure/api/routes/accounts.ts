import express, { Request, Response } from "express";
import {
  AccountService,
  AuthenticationService,
  ProductService,
} from "../../../services";
import { success, error } from "../utils";

const router = express.Router();

const signUp = async (request: Request, response: Response) => {
  const result = await AccountService.createAccount(
    request.body.email,
    request.body.password,
    request.body.role,
  );

  if (result.err) {
    return error(response, {
      error: result.val.message,
      statusCode: 400,
    });
  }

  return success(response, {
    data: {
      account: result.val,
    },
    statusCode: 200,
  });
};

const login = async (request: Request, response: Response) => {
  const result = await AuthenticationService.login(
    request.body.email,
    request.body.password,
  );

  if (result.err) {
    return error(response, {
      error: result.val.message,
      statusCode: 400,
    });
  }

  return success(response, {
    data: {
      token: result.val,
    },
    statusCode: 200,
  });
};

router.post("/signup", signUp);
router.post("/login", login);

export default router;
