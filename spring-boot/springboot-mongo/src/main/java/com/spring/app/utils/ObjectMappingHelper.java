package com.spring.app.utils;

import com.spring.app.dto.SignUpRequest;
import com.spring.app.models.User;

public class ObjectMappingHelper {

	public static User getUserObject(SignUpRequest signupRequest) 
	{
		
		User user=new User();
		user.setId(signupRequest.getId()); 
		user.setFirstName(signupRequest.getFirstName()); 
		user.setLastName(signupRequest.getLastName()); 
		user.setDob(signupRequest.getDob()); 
		user.setMobile(signupRequest.getMobile()); 
		user.setEmail(signupRequest.getEmail()); 

		return user;
	}
	
}
