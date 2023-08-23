package com.rhestIA.demo.Service;

import java.util.List;
import java.util.Optional;

import com.rhestIA.demo.Repository.AnnonceRepository;
import com.rhestIA.demo.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.rhestIA.demo.Repository.PubliciteRepository;
import com.rhestIA.demo.Repository.UserRepository;
import com.rhestIA.demo.models.Publicite;
import com.rhestIA.demo.models.User;

@Service
public class UserService implements IUserService {
	
	
	@Autowired 
	UserRepository ur;
	@Autowired 
	PubliciteRepository pr;
	AnnonceRepository ar;
	@Override
	public void addUser(User usr) {
		ur.save(usr);
		
	}
	@Override
	public void updatePassword(String username, String newPassword) {
		Optional<User> optionalUser = ur.findByUsername(username);
		if (optionalUser.isPresent()) {
			User user = optionalUser.get();

			// Update the password
			user.setPassword(newPassword);

			ur.save(user);
		}
	}
	@Override
	public List<User> getAllUser() {
		//return ur.findAll();
		return (List<User>)ur.findAll();
	}

	@Override
	public void deleteUser(int id) {
		ur.deleteById(id);
		
	}




	@Override
	public User  saveUser(User u)  {
		return ur.save(u);
		
		
	}

	@Override
	public User getUser(int id) {
		// TODO Auto-generated method stub
		return ur.findById(id).get();
	}

	/*@Override
	public List<User> getUserPMC(String mc) {
			return ur.findByNomContains(mc);
	}
*/
	@Override
	public List<Publicite> getPubliciteParUser(int id) {
		
		return ur.getById(id).getPublicite();
	}

	@Override
	public void addPublicite(int id, Publicite p) {
		ur.getById(id).addPublicite(p);
		
	}



	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = ur.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

		return UserDetailsImpl.build(user);
	}

	@Override
	public User getUserByUsername(String username) throws UsernameNotFoundException {
		return ur.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
	}




}
