package com.rhestIA.demo.Service;

import java.io.IOException;
import java.util.List;


import com.rhestIA.demo.models.Annonce;
import com.rhestIA.demo.models.Publicite;



public interface IPubliciteService {
	

	Publicite savePublicite(Publicite publicite);
	//Publicite updatePublicite (Publicite publicite);

	List<Publicite> getAllPublicite();
	Publicite getPublicite(int id);
	void supprimerPublicite(int id);
	Publicite getPubliciteById (int idPub);
	public List<Publicite> getPubliciteParUser(Integer id);

	List<Publicite> getPubPMC(String mc);

	void supprimerAllPublicite(Publicite publicite);
	


}
