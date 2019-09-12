package com.spring.app.dto;

public class LoginPinRequest 
{
	private int loginPin;
	
	private Integer userId;
	
	private String userName;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public int getLoginPin() {
		return loginPin;
	}

	public void setLoginPin(int loginPin) {
		this.loginPin = loginPin;
	}
	
	
}
