package com.spring.app.services;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.app.dto.LoginPinRequest;
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

	@Override
	public void updatePin(LoginPinRequest loginPinRequest) {
		User user=userRepository.findById(loginPinRequest.getUserId()).orElse(new User());
		if(user.getId()!=null)
		{
			user.setLoginPin(loginPinRequest.getLoginPin());
			userRepository.save(user);
		}
		
	}

	@Override
	public boolean validateUser(LoginPinRequest loginPinRequest) {

		User user=userRepository.findById(loginPinRequest.getUserId()).orElse(new User());
		if(user.getId()!=null)
		{
			if(user.getLoginPin() == loginPinRequest.getLoginPin())
			{
				return true;
			}
		}
		
		return false;
	}

}
