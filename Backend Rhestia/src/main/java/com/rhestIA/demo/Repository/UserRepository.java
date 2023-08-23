package com.rhestIA.demo.Repository;

import java.util.List;
import java.util.Optional;

import com.rhestIA.demo.models.Annonce;
import com.rhestIA.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
  Optional<User> findByUsername(String username);
 
  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
  //List<User> findUsersByPubliciteId(Integer idPub);

//List<User> findByNomContains(String mc);
}