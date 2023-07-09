package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DAO.UserDAO;
import com.model.User;

@RestController
public class UserController {

	@Autowired
	UserDAO userDAO;
	
	@GetMapping("getAllUsers")
	public List<User> getAllUsers(){
		return userDAO.getAllUsers();
	}
	
	@GetMapping("getUserById/{userId}")
	public User getUserById(@PathVariable("userId") int id){
		return userDAO.getUserById(id);
	}
	
	@GetMapping("getUserByName/{userName}")
	public User getUserByName(@PathVariable("userName") String name){
		return userDAO.getUserByName(name);
	}
	
	@PostMapping("registerUser")
	public User registerUser(@RequestBody User user){
		return userDAO.registerUser(user);
	}
	
	@GetMapping("userLogin/{emailId}/{password}")
	public User userLogin(@PathVariable("emailId") String emailId, @PathVariable("password") String password) {
		return userDAO.userLogin(emailId, password);
	}
	
}
