import { Router } from "express";

const router = Router();

router.post("/registration" , registration , registrationMiddleware);


export default router;
