package com.rhestIA.demo.Repository;

import com.rhestIA.demo.models.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocalRepository extends JpaRepository<Local, Long>{

}
