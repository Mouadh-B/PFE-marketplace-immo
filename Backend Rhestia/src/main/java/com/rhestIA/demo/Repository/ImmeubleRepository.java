package com.rhestIA.demo.Repository;

import com.rhestIA.demo.models.Immeuble;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImmeubleRepository extends JpaRepository<Immeuble,Integer>{

}
