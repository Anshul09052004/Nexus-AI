import mongoose from "mongoose";

const MessageShchema = new mongoose.Schema({
    COnversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    },
    role: {
        type: String,
        enum: ["user", "assistant"]
    },
    content: {
        type: String
    }
}, { timestamps: true })
const Message = mongoose.model('Message', MessageShchema)
export default Message
