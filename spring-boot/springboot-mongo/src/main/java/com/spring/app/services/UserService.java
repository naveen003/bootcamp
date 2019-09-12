package com.spring.app.services;

import java.util.Collection;
import java.util.List;

import org.springframework.stereotype.Service;

import com.spring.app.dto.LoginPinRequest;
import com.spring.app.models.User;

@Service
public interface UserService {
	public Collection<User> getAllUser();
	public void  createUser(List<User> users);
	public void updatePin(LoginPinRequest loginPinRequest);
	public boolean validateUser(LoginPinRequest loginPinRequest);

}
