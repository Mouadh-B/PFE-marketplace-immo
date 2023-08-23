package com.rhestIA.demo.Service;

import com.rhestIA.demo.models.Appartement;

import java.util.List;

public interface AppartementService {
	
	Appartement SaveAppartement (Appartement appartement);
	Appartement updateAppartement (Appartement appartement);
	void deleteAppartement (Appartement appartement);
	void deleteAppartementById (int idAppartement);
	Appartement getAppartementById (int idAppartement);
	List<Appartement> getAppartements();

}
