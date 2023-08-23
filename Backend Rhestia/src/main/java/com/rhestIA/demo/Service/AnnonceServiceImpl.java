package com.rhestIA.demo.Service;

import com.rhestIA.demo.Repository.AnnonceRepository;
import com.rhestIA.demo.Repository.UserRepository;
import com.rhestIA.demo.models.Annonce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AnnonceServiceImpl implements AnnonceService {

	@Autowired
	private AnnonceRepository annonceRepository;
	@Autowired
	private UserRepository ur;

	@Override
	public Annonce SaveAnnonce(Annonce annonce) {
		return annonceRepository.save(annonce);
	}

	@Override
	public Annonce updateAnnonce(Annonce annonce) {
		return annonceRepository.save(annonce);
	}

	@Override
	public void deleteAnnonce(Annonce annonce) {
		annonceRepository.delete(annonce);

	}

	@Override
	public void deleteAnnonceById(int idAnnonce) {
		annonceRepository.deleteById(idAnnonce);

	}

	@Override
	public Annonce getAnnonceById(int idAnnonce) {

		return annonceRepository.getById(idAnnonce);
	}

	@Override
	public List<Annonce> getAnnonces() {
		return (List<Annonce>) annonceRepository.findAll();
	}


	@Override
	public List<Annonce> getAnnoncesByUserId(int userId) {
		return annonceRepository.findByUserId(userId);
	}


	//***********
	@Override
	public void addToFavorites(int userId, int adId) {
		Annonce ad = annonceRepository.getById(adId);
		ad.getUsersFav().add(ur.getById(userId));
		annonceRepository.save(ad);
	}

	@Override
	public List<Annonce> findUserFavoritesByUserId(int id) {
		return annonceRepository.findAdsByUsersFavId(id);
	}

	@Override
	public void removeFromFavorites(int userId, int adId) {
		Annonce ad = annonceRepository.getById(adId);
		ad.getUsersFav().remove(ur.getById(userId));
		annonceRepository.save(ad);
	}
	@Override
	public void removeFromProperties(int userId, int adId) {
		Annonce ad = annonceRepository.getById(adId);
		ad.getUsersFav().remove(ur.getById(userId));
		annonceRepository.save(ad);
	}
	@Override
	public void removeAllFavorites(int userId) {
		List<Annonce> ads = annonceRepository.findAdsByUsersFavId(userId);
		for (Annonce ad : ads) {
			ad.getUsersFav().clear();
			annonceRepository.save(ad);
		}
	}
	@Override
	public void removeAllProperties(int userId) {
		List<Annonce> ads = annonceRepository.findByUserId(userId);
		for (Annonce ad : ads) {
			ad.getUsersFav().clear();

		}

	}
	@Override
	@Transactional
	public void deletePropertiesByUser(int userId) {
		annonceRepository.deleteByUserId(userId);
	}
	@Override
	public Annonce getAdDetailsById(int id) {
		return annonceRepository.save(annonceRepository.getById(id));
	}
}