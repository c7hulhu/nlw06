import { Request, Response } from "express";
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";

class ListUserSenderComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUSCService = new ListUserSenderComplimentsService();
    const list = await listUSCService.execute(user_id);

    return response.json(list);
  }
}

export { ListUserSenderComplimentsController };
