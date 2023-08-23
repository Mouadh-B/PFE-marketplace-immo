package com.rhestIA.demo.Repository;


import java.util.Optional;

import com.rhestIA.demo.models.ERole;
import com.rhestIA.demo.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
  Optional<Role> findByName(ERole name);
}