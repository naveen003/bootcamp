package com.spring.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


public class User {
	@Id
	private Integer id;
	private String firstName;
	private String lastName;
	private String email;
	private String dob;
	private String mobile;
	
	private Integer loginPin;
	private Integer transactionPin;

	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	
	
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public Integer getLoginPin() {
		return loginPin;
	}
	public void setLoginPin(Integer loginPin) {
		this.loginPin = loginPin;
	}
	public Integer getTransactionPin() {
		return transactionPin;
	}
	public void setTransactionPin(Integer transactionPin) {
		this.transactionPin = transactionPin;
	}

	
}
