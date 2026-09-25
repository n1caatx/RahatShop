package com.rahatshop.service;

import com.rahatshop.entity.Conversation;
import com.rahatshop.entity.Message;
import com.rahatshop.repository.ConversationRepository;
import com.rahatshop.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class MessagingService {

    @Autowired
    private ConversationRepository conversationRepository;

    @Autowired
    private MessageRepository messageRepository;

    public Conversation startConversation(Long productId, String buyerEmail) {
        Conversation c = new Conversation();
        c.setCreatedAt(Instant.now());
        return conversationRepository.save(c);
    }

    public Message sendMessage(Long conversationId, String senderEmail, String content) {
        Message m = new Message();
        m.setContent(content);
        m.setTimestamp(Instant.now());
        return messageRepository.save(m);
    }

    public List<Conversation> getUserConversations(String userEmail) {
        return List.of();
    }

    public List<Message> getMessages(Long conversationId) {
        return messageRepository.findByConversationIdOrderByTimestampAsc(conversationId);
    }
}
