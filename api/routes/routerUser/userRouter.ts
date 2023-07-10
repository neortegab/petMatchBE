import { Router } from "express";
import { userHandler } from "../../handlers/user/handleUser";

const userRouter = Router();

userRouter.get("/", userHandler.handleAllUsers);
userRouter.get("/:id", userHandler.handleUserById);
userRouter.post("/", userHandler.handleCreateUser);
userRouter.put("/:id/suspender", userHandler.handleSuspendUser)
userRouter.delete("/:id", userHandler.handleDeleteUser);

export default userRouter;