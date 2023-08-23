package com.rhestIA.demo.controllers;

import com.rhestIA.demo.Service.UserService;
import com.rhestIA.demo.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/emails")
public class EmailNotificationScheduler {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private UserService userService;

    @Scheduled(fixedRate = 1200000)// Run every 20 minutes
    @PostMapping("/sendEmailNotifications")
    public void sendEmailNotifications() {
        // Retrieve the list of users to send notifications
        List<User> users = userService.getAllUser();

        for (User user : users) {
            // Customize the email message for each user
            String message = "Come to our website RHestIA! Plenty of homes are available.";

            // Construct the email
            SimpleMailMessage email = new SimpleMailMessage();
            email.setTo(user.getEmail());
            email.setSubject("Notification from RHestIA");
            email.setText(message);

            // Send the email
            javaMailSender.send(email);
        }
    }
}
