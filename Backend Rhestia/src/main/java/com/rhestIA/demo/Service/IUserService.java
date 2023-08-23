package com.rhestIA.demo.Service;

import java.io.IOException;
import java.util.List;

import com.rhestIA.demo.models.Annonce;
import com.rhestIA.demo.models.Publicite;
import com.rhestIA.demo.models.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


public interface IUserService {
	public void addUser(User usr );
	public List<User> getAllUser();
	public User getUser(int id);
	void updatePassword(String username, String newPassword);
	public void deleteUser(int id);
	//public List<User> getUserPMC(String mc);	
	
	public List<Publicite> getPubliciteParUser(int idu);	
	User  saveUser(User u);
	public void addPublicite(int id,Publicite p);


    User getUserByUsername(String username) throws UsernameNotFoundException;
}
