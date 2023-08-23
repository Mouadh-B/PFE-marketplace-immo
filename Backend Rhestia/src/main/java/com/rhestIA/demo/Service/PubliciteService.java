package com.rhestIA.demo.Service;

import java.io.IOException;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rhestIA.demo.Repository.PubliciteRepository;
import com.rhestIA.demo.models.Annonce;
import com.rhestIA.demo.models.Publicite;

@Service
public class PubliciteService implements IPubliciteService {

	@Autowired
PubliciteRepository pr;



@Override
public List<Publicite> getAllPublicite() {
	
	return (List<Publicite>)pr.findAll();
}


public Publicite getPublicite(int idPub) {
	
	return pr.findById(idPub).get();
}



public void supprimerPublicite(int idPub)  {
	
	pr.deleteById(idPub);
}


@Override
public void supprimerAllPublicite(Publicite publicite) {
	pr.delete(publicite);
	
}


public Publicite savePublicite(Publicite publicite) {
	
	return pr.save(publicite);
}


@Override
public List<Publicite> getPubPMC(String mc) {
	
	return pr.findByTitleContains(mc);
}
@Override
public Publicite getPubliciteById(int  idPub) {
	return pr.getById(idPub);
}


@Override
public List<Publicite> getPubliciteParUser(Integer iduser) {

	return pr.findPubliciteByUsersId(iduser);
}
}
