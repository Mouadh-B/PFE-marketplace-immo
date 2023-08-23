package com.rhestIA.demo.models;

import com.rhestIA.demo.Enumeration.*;

import javax.persistence.*;

import java.io.Serializable;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "APPARTEMENT")
//@DiscriminatorValue("1")
public class Appartement extends Annonce implements Serializable{

	@Column(name = "numero_Etage_APPARTEMENT")
	private Long numEtageAppartement;
	
	@Column(name = "nombre_de_Chambres_APPARTEMENT")
	private Long nbrChambresAppartement ;
	
	@Column(name = "nombre_de_Salle_De_Bain_APPARTEMENT")
	private Long nbrSalleDeBainAppartement ;
	
	@Column(name = "ascenseur_APPARTEMENT")
	private Boolean ascenseurAppartement;
	
	@Column(name = "meuble_APPARTEMENT")
	private Boolean meubleAppartement ;
	
	@Column(name = "Cuisine_equipee_APPARTEMENT")
	private Boolean equipementsCuisineAppartement ;
	
	@Column(name = "climatisation_APPARTEMENT")
	private Boolean climatisationAppartement ;
	
	@Column(name = "chauffaget_APPARTEMENT")
	private Boolean chauffageAppartement ;
	
	@Column(name = "balcon_APPARTEMENT")
	private Boolean balconAppartement ;


	public Appartement() {
	}


	public Appartement(String titre, CategorieAnnonce categorie, Region region, String ville, String adresse, Long surface, Etat etat, String numTel, String image, User utilisateurs) {

	}

	public Appartement( Long numEtageAppartement, Long nbrChambresAppartement,
			Long nbrSalleDeBainAppartement, Boolean ascenseurAppartement, Boolean meubleAppartement,
			Boolean equipementsCuisineAppartement, Boolean climatisationAppartement, Boolean chauffageAppartement,
			Boolean balconAppartement) {
		super();
		this.numEtageAppartement = numEtageAppartement;
		this.nbrChambresAppartement = nbrChambresAppartement;
		this.nbrSalleDeBainAppartement = nbrSalleDeBainAppartement;
		this.ascenseurAppartement = ascenseurAppartement;
		this.meubleAppartement = meubleAppartement;
		this.equipementsCuisineAppartement = equipementsCuisineAppartement;
		this.climatisationAppartement = climatisationAppartement;
		this.chauffageAppartement = chauffageAppartement;
		this.balconAppartement = balconAppartement;
	}

	public Appartement(String titre, CategorieAnnonce categorie, Region region, String ville, String adresse, Long surface, Etat etat, Exposition exposition, TypeSol typesol, String numTel, String image, Double longitude, Double latitude, Set<Image> annonceImage, Long numEtageAppartement, Long nbrChambresAppartement, Long nbrSalleDeBainAppartement, Boolean ascenseurAppartement, Boolean meubleAppartement, Boolean equipementsCuisineAppartement, Boolean climatisationAppartement, Boolean chauffageAppartement, Boolean balconAppartement) {
		super(titre, categorie, region, ville, adresse, surface, etat, exposition,typesol,numTel, image, longitude, latitude, annonceImage);
		this.numEtageAppartement = numEtageAppartement;
		this.nbrChambresAppartement = nbrChambresAppartement;
		this.nbrSalleDeBainAppartement = nbrSalleDeBainAppartement;
		this.ascenseurAppartement = ascenseurAppartement;
		this.meubleAppartement = meubleAppartement;
		this.equipementsCuisineAppartement = equipementsCuisineAppartement;
		this.climatisationAppartement = climatisationAppartement;
		this.chauffageAppartement = chauffageAppartement;
		this.balconAppartement = balconAppartement;
	}

	public Appartement(String titre, CategorieAnnonce categorie, Region region, String ville, String adresse, Long surface, Etat etat, String numTel, String image, Double longitude, Double latitude, Long numEtageAppartement, Long nbrChambresAppartement, Long nbrSalleDeBainAppartement, Boolean ascenseurAppartement, Boolean meubleAppartement, Boolean equipementsCuisineAppartement, Boolean climatisationAppartement, Boolean chauffageAppartement, Boolean balconAppartement) {
		super(titre, categorie, region, ville, adresse, surface, etat, numTel, image, longitude, latitude);
		this.numEtageAppartement = numEtageAppartement;
		this.nbrChambresAppartement = nbrChambresAppartement;
		this.nbrSalleDeBainAppartement = nbrSalleDeBainAppartement;
		this.ascenseurAppartement = ascenseurAppartement;
		this.meubleAppartement = meubleAppartement;
		this.equipementsCuisineAppartement = equipementsCuisineAppartement;
		this.climatisationAppartement = climatisationAppartement;
		this.chauffageAppartement = chauffageAppartement;
		this.balconAppartement = balconAppartement;
	}


	public Long getNumEtageAppartement() {
		return numEtageAppartement;
	}




	public void setNumEtageAppartement(Long numEtageAppartement) {
		this.numEtageAppartement = numEtageAppartement;
	}




	public Long getNbrChambresAppartement() {
		return nbrChambresAppartement;
	}




	public void setNbrChambresAppartement(Long nbrChambresAppartement) {
		this.nbrChambresAppartement = nbrChambresAppartement;
	}




	public Long getNbrSalleDeBainAppartement() {
		return nbrSalleDeBainAppartement;
	}




	public void setNbrSalleDeBainAppartement(Long nbrSalleDeBainAppartement) {
		this.nbrSalleDeBainAppartement = nbrSalleDeBainAppartement;
	}




	public Boolean getAscenseurAppartement() {
		return ascenseurAppartement;
	}




	public void setAscenseurAppartement(Boolean ascenseurAppartement) {
		this.ascenseurAppartement = ascenseurAppartement;
	}




	public Boolean getMeubleAppartement() {
		return meubleAppartement;
	}




	public void setMeubleAppartement(Boolean meubleAppartement) {
		this.meubleAppartement = meubleAppartement;
	}




	public Boolean getEquipementsCuisineAppartement() {
		return equipementsCuisineAppartement;
	}




	public void setEquipementsCuisineAppartement(Boolean equipementsCuisineAppartement) {
		this.equipementsCuisineAppartement = equipementsCuisineAppartement;
	}




	public Boolean getClimatisationAppartement() {
		return climatisationAppartement;
	}




	public void setClimatisationAppartement(Boolean climatisationAppartement) {
		this.climatisationAppartement = climatisationAppartement;
	}




	public Boolean getChauffageAppartement() {
		return chauffageAppartement;
	}




	public void setChauffageAppartement(Boolean chauffageAppartement) {
		this.chauffageAppartement = chauffageAppartement;
	}




	public Boolean getBalconAppartement() {
		return balconAppartement;
	}




	public void setBalconAppartement(Boolean balconAppartement) {
		this.balconAppartement = balconAppartement;
	}




	@Override
	public String toString() {
		return "Appartement [ numEtageAppartement=" + numEtageAppartement
				+ ", nbrChambresAppartement=" + nbrChambresAppartement + ", nbrSalleDeBainAppartement="
				+ nbrSalleDeBainAppartement + ", ascenseurAppartement=" + ascenseurAppartement + ", meubleAppartement="
				+ meubleAppartement + ", equipementsCuisineAppartement=" + equipementsCuisineAppartement
				+ ", climatisationAppartement=" + climatisationAppartement + ", chauffageAppartement="
				+ chauffageAppartement + ", balconAppartement=" + balconAppartement + "]";
	}
	
	

}
