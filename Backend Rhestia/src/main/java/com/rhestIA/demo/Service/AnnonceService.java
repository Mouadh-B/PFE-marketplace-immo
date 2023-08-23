package com.rhestIA.demo.Service;

import com.rhestIA.demo.models.Annonce;

import java.io.IOException;
import java.util.List;


public interface AnnonceService {
	
	Annonce SaveAnnonce (Annonce annonce);
	Annonce updateAnnonce (Annonce annonce);
	void deleteAnnonce (Annonce annonce);
	void deleteAnnonceById (int idAnnonce);
	Annonce getAnnonceById (int idAnnonce);
	List<Annonce> getAnnonces();

	//List<Annonce> getAnnoncesByIdUser(Long id);




	List<Annonce> getAnnoncesByUserId(int userId);

	//***********
	void addToFavorites(int userId, int adId);

	List<Annonce> findUserFavoritesByUserId(int id);

    void removeFromFavorites(int userId, int adId);

    void removeFromProperties(int userId, int adId);

    void removeAllFavorites(int userId);

	void removeAllProperties(int userId);



	void deletePropertiesByUser(int userId);

	Annonce getAdDetailsById(int id);
}
