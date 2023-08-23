package com.rhestIA.demo.Service;

import com.rhestIA.demo.Repository.AppartementRepository;
import com.rhestIA.demo.models.Appartement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppartementServiceImpl implements AppartementService{
	
	@Autowired
	private AppartementRepository appartementRepository;

	@Override
	public Appartement SaveAppartement(Appartement appartement) {
		return appartementRepository.save(appartement);
	}

	@Override
	public Appartement updateAppartement(Appartement appartement) {
		return appartementRepository.save(appartement);
	}

	@Override
	public void deleteAppartement(Appartement appartement) {
		appartementRepository.delete(appartement);
	}

	@Override
	public void deleteAppartementById(int idAppartement) {
		appartementRepository.deleteById(idAppartement);
	}

	@Override
	public Appartement getAppartementById(int idAppartement) {
		return appartementRepository.getById(idAppartement);
	}

	@Override
	public List<Appartement> getAppartements() {
		return (List<Appartement>)appartementRepository.findAll();
	}
	
	
	

}
