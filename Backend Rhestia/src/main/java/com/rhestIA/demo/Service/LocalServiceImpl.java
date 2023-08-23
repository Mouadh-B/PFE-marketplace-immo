package com.rhestIA.demo.Service;

import com.rhestIA.demo.Repository.LocalRepository;
import com.rhestIA.demo.models.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocalServiceImpl implements LocalService{
	
	@Autowired
	private LocalRepository localRepository;

	@Override
	public Local SaveLocal(Local local) {

		return localRepository.save(local);
	}

	@Override
	public Local updateLocal(Local local) {

		return localRepository.save(local);
	}

	@Override
	public void deleteLocal(Local local) {
		localRepository.delete(local);
		
	}

	@Override
	public void deleteLocalById(Long idLocal) {
		localRepository.deleteById(idLocal);
		
	}

	@Override
	public Local getLocalById(Long idLocal) {

		return localRepository.getById(idLocal);
	}

	@Override
	public List<Local> getLocals() {

		return (List<Local>)localRepository.findAll();
	}

}
