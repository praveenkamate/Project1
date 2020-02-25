package com.homefood.homemadefood.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homefood.homemadefood.model.User;
import com.homefood.homemadefood.service.UserService;


@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserService userService;

	@PostMapping("/user")
	public User save(@RequestBody User userObj) {
		userService.save(userObj);
		return userObj;
	}
}
