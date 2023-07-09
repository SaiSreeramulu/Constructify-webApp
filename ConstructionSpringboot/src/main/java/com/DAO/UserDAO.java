package com.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.User;

@Service
public class UserDAO {
	
	@Autowired
	UserRepository userRepo;
	
	public List<User> getAllUsers(){
		return userRepo.findAll();
	}
	
	public User getUserById(int id){
		return userRepo.findById(id).orElse(null);
	}
	
	public User getUserByName(String name){
		return userRepo.findByName(name);
	}
	
	public User registerUser(User user){
		return userRepo.save(user);
	}
	
	public User userLogin(String emailId, String password) {
		return userRepo.userLogin(emailId, password);
	}
}
