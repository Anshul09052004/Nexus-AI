import Conversation from '../Models/Conversation.model.js';
import Message from '../Models/Message.model.js';

export const createConversation = async (req, res) => {
    try {
        const userId = req.headers['x-user-id'];
        console.log(userId);
        const conversation = await Conversation.create({
            userId: userId
        });
        return res.status(200).json(conversation);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });

    }
}

export const getConversation = async (req, res) => {
    try {
        const userId = req.headers['x-user-id'];
        console.log(userId);
        const conversation = await Conversation.create({
            userId: userId
        }).sort({ updatedAt: -1 });
        return res.status(200).json(conversation);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });

    }
}

export const messageConversion = async (req, res) => {
    try {
        const { conversationId, role, content } = req.body;
        const message = await Message.create({
            COnversationId: conversationId,
            role: role,
            content: content
        });
        return res.status(200).json(message);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });

    }
}

export const getMessages = async (req, res) => {
    try {
        const { conversationId } = req.params;
        const messages = await Message.find({ COnversationId: conversationId }).sort({ createdAt: 1 });
        return res.status(200).json(messages);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
export const updateConversion = async (req, res) => {
    try {
        const { id, title } = req.body;
        const conversation = await Conversation.findByIdAndUpdate(id, { title });
        return res.status(200).json(conversation);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });

    }
}