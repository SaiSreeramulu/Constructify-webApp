package com.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("from User u where u.userName = :uname")
	User findByName(@Param("uname") String name);

	@Query("from User u where u.emailId = :emailId and u.password = :password")
	User userLogin(@Param("emailId") String emailId, @Param("password") String password);
}
