import { NextFunction, Request, Response } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  //VERIFICAR ADMIN
  const admin = false;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}