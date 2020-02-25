package com.homefood.homemadefood.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.homefood.homemadefood.dao.UserDAO;
import com.homefood.homemadefood.model.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDAO userDAO;

	@Transactional
	@Override
	public void save(User user) {
		userDAO.save(user);
	}

}
