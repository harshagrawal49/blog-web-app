import { Router } from "express";
import signup from "../controllers/user.controller.js";

const router  = Router()

router.post('/signup',signup)
router.get('/test',(req,res)=>{res.send("hello")})

export default router