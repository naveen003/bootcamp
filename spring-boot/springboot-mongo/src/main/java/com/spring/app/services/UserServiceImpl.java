package com.spring.app.services;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.app.models.User;
import com.spring.app.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Collection<User> getAllUser() {
		return userRepository.findAll();
	}

	@Override
	public void createUser(List<User> users) {
		userRepository.saveAll(users);
		
	}

}
