package com.rhestIA.demo.models;

import com.rhestIA.demo.Enumeration.Exposition;
import com.rhestIA.demo.Enumeration.TypeMaison;
import javax.persistence.*;

import java.io.Serializable;


@Entity
@Table(name = "MAISON")
//@DiscriminatorValue("5")
public class Maison extends Annonce implements Serializable{
	
	@Column(name = "nombre_de_Chambres_MAISON")
	private Long nbrChambresMaison ;
	
	@Column(name = "nombre_de_Salle_De_Bain_MAISON")
	private Long nbrSalleDeBainMaison ;
	
	@Column(name = "type_de_maison_MAISON")
	private TypeMaison typeMaison ;
	
	@Column(name = "exposition_MAISON")
	private Exposition expositionMaison ;
	
	@Column(name = "jardin_MAISON")
	private Boolean jardinMaison ;
	
	@Column(name = "piscine_MAISON")
	private Boolean piscineMaison ;
	
	@Column(name = "terrrasse_MAISON")
	private Boolean terrrasseMaison ;
	
	@Column(name = "garage_MAISON")
	private Boolean garageMaison ;
	
	@Column(name = "meuble_MAISON")
	private Boolean meubleMaison ;
	
	@Column(name = "Cuisine_equipee_MAISON")
	private Boolean equipementsCuisineMaison ;
	
	@Column(name = "climatisation_MAISON")
	private Boolean climatisationMaison ;
	
	@Column(name = "chauffage_MAISON")
	private Boolean chauffageMaison ;
	
	@Column(name = "cameras_de_surveillance_MAISON")
	private Boolean camerasMaison ;
	
	public Maison() {
	}
	
	public Maison(Long nbrChambresMaison, Long nbrSalleDeBainMaison, TypeMaison typeMaison,
			Exposition expositionMaison, Boolean jardinMaison, Boolean piscineMaison, Boolean terrrasseMaison,
			Boolean garageMaison, Boolean meubleMaison, Boolean equipementsCuisineMaison, Boolean climatisationMaison,
			Boolean chauffageMaison, Boolean camerasMaison) {
		this.nbrChambresMaison = nbrChambresMaison;
		this.nbrSalleDeBainMaison = nbrSalleDeBainMaison;
		this.typeMaison = typeMaison;
		this.expositionMaison = expositionMaison;
		this.jardinMaison = jardinMaison;
		this.piscineMaison = piscineMaison;
		this.terrrasseMaison = terrrasseMaison;
		this.garageMaison = garageMaison;
		this.meubleMaison = meubleMaison;
		this.equipementsCuisineMaison = equipementsCuisineMaison;
		this.climatisationMaison = climatisationMaison;
		this.chauffageMaison = chauffageMaison;
		this.camerasMaison = camerasMaison;
	}

	public Long getNbrChambresMaison() {
		return nbrChambresMaison;
	}

	public void setNbrChambresMaison(Long nbrChambresMaison) {
		this.nbrChambresMaison = nbrChambresMaison;
	}

	public Long getNbrSalleDeBainMaison() {
		return nbrSalleDeBainMaison;
	}

	public void setNbrSalleDeBainMaison(Long nbrSalleDeBainMaison) {
		this.nbrSalleDeBainMaison = nbrSalleDeBainMaison;
	}

	public TypeMaison getTypeMaison() {
		return typeMaison;
	}

	public void setTypeMaison(TypeMaison typeMaison) {
		this.typeMaison = typeMaison;
	}

	public Exposition getExpositionMaison() {
		return expositionMaison;
	}

	public void setExpositionMaison(Exposition expositionMaison) {
		this.expositionMaison = expositionMaison;
	}

	public Boolean getJardinMaison() {
		return jardinMaison;
	}

	public void setJardinMaison(Boolean jardinMaison) {
		this.jardinMaison = jardinMaison;
	}

	public Boolean getPiscineMaison() {
		return piscineMaison;
	}

	public void setPiscineMaison(Boolean piscineMaison) {
		this.piscineMaison = piscineMaison;
	}

	public Boolean getTerrrasseMaison() {
		return terrrasseMaison;
	}

	public void setTerrrasseMaison(Boolean terrrasseMaison) {
		this.terrrasseMaison = terrrasseMaison;
	}

	public Boolean getGarageMaison() {
		return garageMaison;
	}

	public void setGarageMaison(Boolean garageMaison) {
		this.garageMaison = garageMaison;
	}

	public Boolean getMeubleMaison() {
		return meubleMaison;
	}

	public void setMeubleMaison(Boolean meubleMaison) {
		this.meubleMaison = meubleMaison;
	}

	public Boolean getEquipementsCuisineMaison() {
		return equipementsCuisineMaison;
	}

	public void setEquipementsCuisineMaison(Boolean equipementsCuisineMaison) {
		this.equipementsCuisineMaison = equipementsCuisineMaison;
	}

	public Boolean getClimatisationMaison() {
		return climatisationMaison;
	}

	public void setClimatisationMaison(Boolean climatisationMaison) {
		this.climatisationMaison = climatisationMaison;
	}

	public Boolean getChauffageMaison() {
		return chauffageMaison;
	}

	public void setChauffageMaison(Boolean chauffageMaison) {
		this.chauffageMaison = chauffageMaison;
	}

	public Boolean getCamerasMaison() {
		return camerasMaison;
	}

	public void setCamerasMaison(Boolean camerasMaison) {
		this.camerasMaison = camerasMaison;
	}

	@Override
	public String toString() {
		return "Maison [nbrChambresMaison=" + nbrChambresMaison + ", nbrSalleDeBainMaison="
				+ nbrSalleDeBainMaison + ", typeMaison=" + typeMaison + ", expositionMaison=" + expositionMaison
				+ ", jardinMaison=" + jardinMaison + ", piscineMaison=" + piscineMaison + ", terrrasseMaison="
				+ terrrasseMaison + ", garageMaison=" + garageMaison + ", meubleMaison=" + meubleMaison
				+ ", equipementsCuisineMaison=" + equipementsCuisineMaison + ", climatisationMaison="
				+ climatisationMaison + ", chauffageMaison=" + chauffageMaison + ", camerasMaison=" + camerasMaison
				+ "]";
	}

	
	
}
