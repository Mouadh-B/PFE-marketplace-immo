package com.rhestIA.demo.Service;

import com.rhestIA.demo.Repository.TerrainRepository;
import com.rhestIA.demo.models.Terrain;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TerrainServiceImpl implements TerrainService{
	
	@Autowired
	private TerrainRepository terrainRepository;

	@Override
	public Terrain SaveTerrain(Terrain terrain) {
		return terrainRepository.save(terrain);
	}

	@Override
	public Terrain updateTerrain(Terrain terrain) {
		return terrainRepository.save(terrain);
	}

	@Override
	public void deleteTerrain(Terrain terrain) {
		terrainRepository.delete(terrain);
	}

	@Override
	public void deleteTerrainById(int idTerrain) {
		terrainRepository.deleteById(idTerrain);
	}

	@Override
	public Terrain getTerrainById(int idTerrain) {
		return terrainRepository.getById(idTerrain);
	}

	@Override
	public List<Terrain> getTerrains() {
		return (List<Terrain>)terrainRepository.findAll();
	}

}
