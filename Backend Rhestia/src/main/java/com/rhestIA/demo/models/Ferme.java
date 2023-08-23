package com.rhestIA.demo.models;

import javax.persistence.*;

import java.io.Serializable;


@Entity
@Table(name = "FERME")
//@DiscriminatorValue("2")
public class Ferme extends Annonce implements Serializable{

	
	@Column(name = "maison_FERME")
	private Boolean maisonFerme ;
	
	@Column(name = "ecurie_FERME")
	private Boolean ecurieFerme ;
	
	@Column(name = "grange_FERME")
	private Boolean grangeFerme ;
	
	@Column(name = "serre_FERME")
	private Boolean serreFerme ;
	
	@Column(name = "puit_FERME")
	private Boolean puitFerme ;

	public Ferme() {
	}


	public Ferme(Long idFerme, Boolean maisonFerme, Boolean ecurieFerme, Boolean grangeFerme, Boolean serreFerme,
			Boolean puitFerme) {
		this.maisonFerme = maisonFerme;
		this.ecurieFerme = ecurieFerme;
		this.grangeFerme = grangeFerme;
		this.serreFerme = serreFerme;
		this.puitFerme = puitFerme;
	}


	public Boolean getMaisonFerme() {
		return maisonFerme;
	}

	public void setMaisonFerme(Boolean maisonFerme) {
		this.maisonFerme = maisonFerme;
	}

	public Boolean getEcurieFerme() {
		return ecurieFerme;
	}

	public void setEcurieFerme(Boolean ecurieFerme) {
		this.ecurieFerme = ecurieFerme;
	}

	public Boolean getGrangeFerme() {
		return grangeFerme;
	}

	public void setGrangeFerme(Boolean grangeFerme) {
		this.grangeFerme = grangeFerme;
	}

	public Boolean getSerreFerme() {
		return serreFerme;
	}

	public void setSerreFerme(Boolean serreFerme) {
		this.serreFerme = serreFerme;
	}

	public Boolean getPuitFerme() {
		return puitFerme;
	}

	public void setPuitFerme(Boolean puitFerme) {
		this.puitFerme = puitFerme;
	}

	@Override
	public String toString() {
		return "Ferme [maisonFerme=" + maisonFerme + ", ecurieFerme=" + ecurieFerme
				+ ", grangeFerme=" + grangeFerme + ", serreFerme=" + serreFerme + ", puitFerme=" + puitFerme + "]";
	}
	
	

}
