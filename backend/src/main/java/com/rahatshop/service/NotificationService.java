package com.rahatshop.service;

import com.rahatshop.entity.Notification;
import com.rahatshop.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public void createNotification(Long userId, String type, String content, String link) {
        Notification n = new Notification();
        n.setType(type);
        n.setContent(content);
        n.setLink(link);
        n.setCreatedAt(Instant.now());
        notificationRepository.save(n);
    }

    public List<Notification> getUserNotifications(String userEmail) {
        return List.of();
    }

    public void markAsRead(Long notificationId) {
        Notification n = notificationRepository.findById(notificationId).orElseThrow();
        n.setRead(true);
        notificationRepository.save(n);
    }

    public long getUnreadCount(String userEmail) {
        return 0L;
    }
}
