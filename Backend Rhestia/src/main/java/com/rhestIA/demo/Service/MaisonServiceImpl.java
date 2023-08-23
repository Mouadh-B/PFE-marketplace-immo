package com.rhestIA.demo.Service;

import com.rhestIA.demo.Repository.MaisonRepository;
import com.rhestIA.demo.models.Maison;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaisonServiceImpl implements MaisonService{
	
	@Autowired
	private MaisonRepository maisonRepository;

	public Maison SaveMaison(Maison maison) {
		return maisonRepository.save(maison);
	}

	public Maison updateMaison(Maison maison) {
		return maisonRepository.save(maison);
	}

	public void deleteMaison(Maison maison) {
		maisonRepository.delete(maison);
	}

	@Override
	public void deleteMaisonById(Long idMaison) {

	}

	@Override
	public Maison getMaisonById(Long idMaison) {
		return null;
	}


	public List<Maison> getMaisons() {
		return (List<Maison>)maisonRepository.findAll();
	}

}
