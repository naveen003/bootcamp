package com.spring.app.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.app.dto.LoginPinRequest;
import com.spring.app.dto.SignUpRequest;
import com.spring.app.models.User;
import com.spring.app.services.UserService;
import com.spring.app.utils.ObjectMappingHelper;

@RestController
@RequestMapping(value = "/api/auth")
public class AuthController {

	@Autowired private UserService userService;
	
	@GetMapping(value = "/getall")
	public ResponseEntity<Collection<User>> getAllUser()
	{
		return new ResponseEntity<>(userService.getAllUser(),HttpStatus.OK);
	}
	
	@PostMapping(value = "/addUser")
	public ResponseEntity<String> createUser(@RequestBody SignUpRequest signupRequest)
	{
		//This goes in service layer
		User user = ObjectMappingHelper.getUserObject(signupRequest);
		List<User> users=new ArrayList<User>();
		users.add(user);
		userService.createUser(users);
		return new ResponseEntity<>("Sucess", HttpStatus.OK);
	}
	
	@PostMapping(value = "/setPin")
	public ResponseEntity<String> setLoginPin(@RequestBody LoginPinRequest loginPinRequest)
	{
		userService.updatePin(loginPinRequest);
		
		return new ResponseEntity<>("Sucess", HttpStatus.OK);
	}
	
	@PostMapping(value = "/verifyPin")
	public ResponseEntity<String> verifyLoginPin(@RequestBody LoginPinRequest loginPinRequest)
	{
		if(userService.validateUser(loginPinRequest))
		{
			return new ResponseEntity<>("Sucess", HttpStatus.OK);

		}
		

		return new ResponseEntity<>("Invalid Pin", HttpStatus.OK);
	}
	
}
