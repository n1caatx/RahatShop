package com.rahatshop.controller;

import com.rahatshop.entity.Conversation;
import com.rahatshop.entity.Message;
import com.rahatshop.service.MessagingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/conversations")
public class MessagingController {

    @Autowired
    private MessagingService messagingService;

    @GetMapping("/")
    public List<Conversation> getUserConversations(Authentication auth) {
        return messagingService.getUserConversations(auth.getName());
    }

    @PostMapping("/")
    public Conversation startConversation(@RequestParam Long productId, Authentication auth) {
        return messagingService.startConversation(productId, auth.getName());
    }

    @GetMapping("/{id}/messages")
    public List<Message> getMessages(@PathVariable Long id) {
        return messagingService.getMessages(id);
    }

    @PostMapping("/{id}/messages")
    public Message sendMessage(@PathVariable Long id, @RequestBody String content, Authentication auth) {
        return messagingService.sendMessage(id, auth.getName(), content);
    }
}
