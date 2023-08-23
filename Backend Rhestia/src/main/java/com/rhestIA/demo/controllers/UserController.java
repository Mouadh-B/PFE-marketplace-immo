package com.rhestIA.demo.controllers;


import java.util.List;
import java.util.Optional;

import com.rhestIA.demo.Repository.UserRepository;
import com.rhestIA.demo.models.PasswordUpdateRequest;
import com.rhestIA.demo.payload.request.SignupRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


import com.rhestIA.demo.models.Annonce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.rhestIA.demo.Service.UserService;
import com.rhestIA.demo.models.Publicite;
import com.rhestIA.demo.models.User;




@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	@Autowired
	private UserService us;
	@Autowired
	private UserRepository ur;
	
	@GetMapping("/all")
	public List<User> getAllUsers()
	{
		return us.getAllUser();

	}
	 @GetMapping("/deleteuser/{id}")
	  public String deleteUser(@PathVariable int id){
		 us.deleteUser(id);
		 return "utilisateur a été supprimé avec succès";
	        
	    
	    }
	 

		@PutMapping("/edituser/{id}")
		public ResponseEntity<?> UpdateUser (@PathVariable int id, @RequestBody User user) {
			User UserExist=us.getUser(id);
			System.out.println(UserExist.getId());

			UserExist.setFull_name(user.getFull_name());
			UserExist.setNum_tel(user.getNum_tel());
			UserExist.setEmail(user.getEmail());
			UserExist.setRoles(user.getRoles());
			String encodedPassword = passwordEncoder.encode(user.getPassword());

			UserExist.setPassword(encodedPassword);

			User savedUser=us.saveUser(UserExist);
			return ResponseEntity.ok().body(savedUser);


		}
		/***
	@PutMapping("/editpass/{id}")
	public ResponseEntity<?> UpdatePassword (@PathVariable int id, @RequestBody User user) {
		User UserExist=us.getUser(id);
		System.out.println(UserExist.getId());

		String encodedPassword = passwordEncoder.encode(user.getPassword());
		UserExist.setPassword(encodedPassword);
		User savedUser=us.saveUser(UserExist);
		return ResponseEntity.ok().body(savedUser);


	}
**/


		@PutMapping("/updatepassword")
	public ResponseEntity<String> updatePassword(@RequestBody PasswordUpdateRequest request) {
		boolean isOldPasswordCorrect = verifyOldPassword(request.getId(), request.getOldPassword());

		if (!isOldPasswordCorrect) {
			return ResponseEntity.badRequest().body("Incorrect old password");
		}

		String encodedPassword = passwordEncoder.encode(request.getNewPassword());

		boolean isPasswordUpdated = updateDatabasePassword(request.getId(), encodedPassword);

		if (isPasswordUpdated) {
			return ResponseEntity.ok("Password updated successfully");
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update password");
		}
	}



	private boolean verifyOldPassword(int id, String oldPassword) {
		// Implement your logic to verify the old password
		// Assume you have a UserRepository to interact with the database

		User user = ur.getById(id);

		if (user != null && passwordEncoder.matches(oldPassword, user.getPassword())) {
			// Password matches
			return true;
		}

		// Password does not match
		return false;
	}

	private boolean updateDatabasePassword(int id, String newPassword) {
		// Implement your logic to update the user's password in the database
		// Assume you have a UserRepository to interact with the database

		User user = ur.getById(id);

		if (user != null) {
			user.setPassword(passwordEncoder.encode(newPassword));
			us.saveUser(user);
			return true;
		}

		return false;
	}









	@PostMapping("/pub/{idu}")
		public ResponseEntity<User> addPublicite(@PathVariable("idu") int userId, @RequestBody Publicite pub) {
		    User user = us.getUser(userId);
		    us.addPublicite(user.getId(), pub);
		    us.addUser(user);
		    return ResponseEntity.ok(user);
		}


	@GetMapping("/user/{id}")
	public User getuser(@PathVariable int id) {
		return us.getUser(id);


	}
}
