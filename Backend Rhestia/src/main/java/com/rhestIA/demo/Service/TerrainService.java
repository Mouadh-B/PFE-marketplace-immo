package com.rhestIA.demo.Service;

import com.rhestIA.demo.models.Terrain;

import java.util.List;

public interface TerrainService {


	Terrain SaveTerrain(Terrain terrain);

	Terrain updateTerrain(Terrain terrain);

	void deleteTerrain(Terrain terrain);

	void deleteTerrainById(int idTerrain);

	Terrain getTerrainById(int idTerrain);

	List<Terrain> getTerrains();
}
