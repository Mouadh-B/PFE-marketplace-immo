package com.rhestIA.demo.Service;

import com.rhestIA.demo.models.Immeuble;

import java.util.List;

public interface ImmeubleService {
	
	Immeuble SaveImmeuble (Immeuble immeuble);
	Immeuble updateImmeuble (Immeuble immeuble);
	void deleteImmeuble(Immeuble immeuble);
	void deleteImmeubleById (int idImmeuble);
	Immeuble getImmeubleById (int idImmeuble);
	List<Immeuble> getImmeubles();


}
