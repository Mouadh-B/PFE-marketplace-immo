package com.rhestIA.demo.models;

import javax.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "IMMEUBLE")
//@DiscriminatorValue("3")
public class Immeuble extends Annonce implements Serializable{

	
	@Column(name = "nombre_etages_IMMEUBLE")
	private Long nbrEtagesImmeuble ;
	
	@Column(name = "nombre_pieces_IMMEUBLE")
	private Long nbrPiecesImmeuble ;
	
	@Column(name = "nombre_chambres_IMMEUBLE")
	private Boolean jardinImmeuble ;
	
	@Column(name = "piscine_IMMEUBLE")
	private Boolean piscineImmeuble ;
	
	@Column(name = "cuisine_equipee_IMMEUBLE")
	private Boolean equipementsCuisineImmeuble ;
	
	@Column(name = "climatisation_IMMEUBLE")
	private Boolean climatisationImmeuble ;
	
	@Column(name = "chauffage_IMMEUBLE")
	private Boolean chauffageImmeuble ;
	
	@Column(name = "cameras_de_surveillance_IMMEUBLE")
	private Boolean camerasImmeuble ;

	
	public Immeuble() {
	}
	
	

	public Immeuble(Long nbrEtagesImmeuble, Long nbrPiecesImmeuble, Boolean jardinImmeuble,
			Boolean piscineImmeuble, Boolean equipementsCuisineImmeuble, Boolean climatisationImmeuble,
			Boolean chauffageImmeuble, Boolean camerasImmeuble) {
		super();
		this.nbrEtagesImmeuble = nbrEtagesImmeuble;
		this.nbrPiecesImmeuble = nbrPiecesImmeuble;
		this.jardinImmeuble = jardinImmeuble;
		this.piscineImmeuble = piscineImmeuble;
		this.equipementsCuisineImmeuble = equipementsCuisineImmeuble;
		this.climatisationImmeuble = climatisationImmeuble;
		this.chauffageImmeuble = chauffageImmeuble;
		this.camerasImmeuble = camerasImmeuble;
	}


	public Long getNbrEtagesImmeuble() {
		return nbrEtagesImmeuble;
	}

	public void setNbrEtagesImmeuble(Long nbrEtagesImmeuble) {
		this.nbrEtagesImmeuble = nbrEtagesImmeuble;
	}

	public Long getNbrPiecesImmeuble() {
		return nbrPiecesImmeuble;
	}

	public void setNbrPiecesImmeuble(Long nbrPiecesImmeuble) {
		this.nbrPiecesImmeuble = nbrPiecesImmeuble;
	}

	public Boolean getJardinImmeuble() {
		return jardinImmeuble;
	}

	public void setJardinImmeuble(Boolean jardinImmeuble) {
		this.jardinImmeuble = jardinImmeuble;
	}

	public Boolean getPiscineImmeuble() {
		return piscineImmeuble;
	}

	public void setPiscineImmeuble(Boolean piscineImmeuble) {
		this.piscineImmeuble = piscineImmeuble;
	}

	public Boolean getEquipementsCuisineImmeuble() {
		return equipementsCuisineImmeuble;
	}

	public void setEquipementsCuisineImmeuble(Boolean equipementsCuisineImmeuble) {
		this.equipementsCuisineImmeuble = equipementsCuisineImmeuble;
	}

	public Boolean getClimatisationImmeuble() {
		return climatisationImmeuble;
	}

	public void setClimatisationImmeuble(Boolean climatisationImmeuble) {
		this.climatisationImmeuble = climatisationImmeuble;
	}

	public Boolean getChauffageImmeuble() {
		return chauffageImmeuble;
	}

	public void setChauffageImmeuble(Boolean chauffageImmeuble) {
		this.chauffageImmeuble = chauffageImmeuble;
	}

	public Boolean getCamerasImmeuble() {
		return camerasImmeuble;
	}

	public void setCamerasImmeuble(Boolean camerasImmeuble) {
		this.camerasImmeuble = camerasImmeuble;
	}

	@Override
	public String toString() {
		return "Immeuble [nbrEtagesImmeuble=" + nbrEtagesImmeuble
				+ ", nbrPiecesImmeuble=" + nbrPiecesImmeuble + ", jardinImmeuble=" + jardinImmeuble
				+ ", piscineImmeuble=" + piscineImmeuble + ", equipementsCuisineImmeuble=" + equipementsCuisineImmeuble
				+ ", climatisationImmeuble=" + climatisationImmeuble + ", chauffageImmeuble=" + chauffageImmeuble
				+ ", camerasImmeuble=" + camerasImmeuble + "]";
	}
	
	
}
