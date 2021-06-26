import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";

class ListUserReceiverComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listURCService = new ListUserReceiverComplimentsService();
    const list = await listURCService.execute(user_id);

    return response.json(list);
  }
}

export { ListUserReceiverComplimentsController };
