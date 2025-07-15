package com.example.account.controller;

import com.example.account.model.User;
import com.example.account.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        Optional<User> found = userService.findByUsername(user.getUsername());
        if (found.isPresent() && found.get().getPassword().equals(user.getPassword())) {
            return "Login successful";
        }
        return "Invalid username or password";
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userService.findByUsername(user.getUsername()).isPresent()) {
            return "Username already exists";
        }
        userService.saveUser(user);
        return "Register successful";
    }

    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestBody User user) {
        Optional<User> found = userService.findByEmail(user.getEmail());
        if (found.isPresent()) {
            // Demo: trả về mật khẩu luôn (thực tế nên gửi email)
            return "Your password is: " + found.get().getPassword();
        }
        return "Email not found";
    }
} 