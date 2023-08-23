package com.rhestIA.demo.Service;

import com.rhestIA.demo.Repository.FermeRepository;
import com.rhestIA.demo.models.Ferme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FermeServiceImpl implements FermeService{
	
	@Autowired
	private FermeRepository fermeRepository;

	@Override
	public Ferme SaveFerme(Ferme ferme) {
		return fermeRepository.save(ferme);
	}

	@Override
	public Ferme updateFerme(Ferme ferme) {
		return fermeRepository.save(ferme);
	}

	@Override
	public void deleteFerme(Ferme ferme) {
		fermeRepository.delete(ferme);
		
	}

	@Override
	public void deleteFermeById(int idFerme) {
		fermeRepository.deleteById(idFerme);
		
	}

	@Override
	public Ferme getFermeById(int idFerme) {
		
		return fermeRepository.getById(idFerme);
	}

	@Override
	public List<Ferme> getFermes() {
		
		return (List<Ferme>)fermeRepository.findAll();
	}

}
