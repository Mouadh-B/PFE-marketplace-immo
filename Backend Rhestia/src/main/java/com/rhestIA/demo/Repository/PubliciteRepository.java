package com.rhestIA.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.rhestIA.demo.models.Publicite;



public interface PubliciteRepository extends JpaRepository<Publicite, Integer>{
	//List<Publicite> findByNomContains(String mc); 
	List<Publicite> findByTitleContains(String mc);

	List<Publicite> findPubliciteByUsersId(Integer iduser);
	

}


