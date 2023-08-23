package com.rhestIA.demo.Repository;

import com.rhestIA.demo.models.Appartement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppartementRepository extends JpaRepository<Appartement,Integer>{
	
	

}
