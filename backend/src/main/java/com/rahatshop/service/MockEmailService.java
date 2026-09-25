package com.rahatshop.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
public class MockEmailService implements EmailService {
    private static final Logger logger = LoggerFactory.getLogger(MockEmailService.class);

    @Override
    public void sendEmail(String to, String subject, String body) {
        logger.info("E-poçt göndərildi: KİMƏ: {}, MÖVZU: {}, MƏTN: {}", to, subject, body);
    }
}
