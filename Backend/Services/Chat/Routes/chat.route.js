import express from "express";
import { createConversation, getConversation, getMessages, messageConversion, updateConversion } from "../Controllers/Chat.controller.js";
const router = express.Router();    

router.post("/create-conversation", createConversation);
router.get("/get-conversation", getConversation);
router.post("/update-conversation", updateConversion);
router.post("/save-message", messageConversion);
router.get("/get-messages/:conversationId", getMessages);

export default router