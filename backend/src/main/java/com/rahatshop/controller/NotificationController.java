package com.rahatshop.controller;

import com.rahatshop.entity.Notification;
import com.rahatshop.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/")
    public List<Notification> getNotifications(Authentication auth) {
        return notificationService.getUserNotifications(auth.getName());
    }

    @PutMapping("/{id}/read")
    public void markAsRead(@PathVariable Long id) {
        notificationService.markAsRead(id);
    }

    @GetMapping("/unread-count")
    public long getUnreadCount(Authentication auth) {
        return notificationService.getUnreadCount(auth.getName());
    }
}
