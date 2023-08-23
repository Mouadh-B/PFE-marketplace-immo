package com.rhestIA.demo.Service;

import com.rhestIA.demo.models.Local;

import java.util.List;

public interface LocalService {
	
	Local SaveLocal (Local local);
	Local updateLocal (Local local);
	void deleteLocal (Local local);
	void deleteLocalById (Long idLocal);
	Local getLocalById (Long idLocal);
	List<Local> getLocals();

}
