package com.rhestIA.demo.Service;

import com.rhestIA.demo.models.Maison;

import java.util.List;

public interface MaisonService {
	
	Maison SaveMaison (Maison maison);
	Maison updateMaison (Maison maison);
	void deleteMaison (Maison maison);
	void deleteMaisonById (Long idMaison);
	Maison getMaisonById (Long idMaison);
	List<Maison> getMaisons();

}
