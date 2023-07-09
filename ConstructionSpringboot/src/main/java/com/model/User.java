package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

	@Id@GeneratedValue
	private int userId;
	private String userName;
	private String address;
	private long contactNo;
	private String country;
	private String emailId;
	private String password;
	
	public User(){
		
	}

	public User(int userId, String userName, String address, long contactNo, String country, String emailId,
			String password) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.address = address;
		this.contactNo = contactNo;
		this.country = country;
		this.emailId = emailId;
		this.password = password;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getaddress() {
		return address;
	}

	public void setaddress(String address) {
		this.address = address;
	}

	public long getContactNo() {
		return contactNo;
	}

	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", address=" + address + ", contactNo=" + contactNo
				+ ", country=" + country + ", emailId=" + emailId + ", password=" + password + "]";
	}
	
	
}
