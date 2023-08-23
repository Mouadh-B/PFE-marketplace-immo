package com.rhestIA.demo.Service;

import com.rhestIA.demo.models.Ferme;

import java.util.List;

public interface FermeService {
	
	Ferme SaveFerme (Ferme ferme);
	Ferme updateFerme (Ferme ferme);
	void deleteFerme(Ferme ferme);
	void deleteFermeById (int idFerme);
	Ferme getFermeById (int idFerme);
	List<Ferme> getFermes();

}
