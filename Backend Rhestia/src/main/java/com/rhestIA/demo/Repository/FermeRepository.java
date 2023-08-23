package com.rhestIA.demo.Repository;

import com.rhestIA.demo.models.Ferme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FermeRepository extends JpaRepository<Ferme,Integer>{

}
