package com.rhestIA.demo.Repository;

import com.rhestIA.demo.models.Maison;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaisonRepository extends JpaRepository<Maison, Integer>{

}
