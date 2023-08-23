package com.rhestIA.demo.Service;

import com.rhestIA.demo.Repository.ImmeubleRepository;
import com.rhestIA.demo.models.Immeuble;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImmeubleServiceImpl implements ImmeubleService{
	
	@Autowired
	private ImmeubleRepository immeubleRepository;

	@Override
	public Immeuble SaveImmeuble(Immeuble immeuble) {
		return immeubleRepository.save(immeuble);
	}

	@Override
	public Immeuble updateImmeuble(Immeuble immeuble) {

		return immeubleRepository.save(immeuble);
	}

	@Override
	public void deleteImmeuble(Immeuble immeuble) {
		immeubleRepository.delete(immeuble);
		
	}

	@Override
	public void deleteImmeubleById(int idImmeuble) {
		immeubleRepository.deleteById(idImmeuble);
		
	}

	@Override
	public Immeuble getImmeubleById(int idImmeuble) {

		return immeubleRepository.getById(idImmeuble);
	}

	@Override
	public List<Immeuble> getImmeubles() {
	
		return (List<Immeuble>)immeubleRepository.findAll();
	}

}
