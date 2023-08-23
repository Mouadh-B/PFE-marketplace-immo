package com.rhestIA.demo.Repository;

import com.rhestIA.demo.models.Terrain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TerrainRepository extends JpaRepository<Terrain, Integer>{

}
