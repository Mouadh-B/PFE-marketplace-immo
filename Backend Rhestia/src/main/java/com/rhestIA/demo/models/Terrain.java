package com.rhestIA.demo.models;

import com.rhestIA.demo.Enumeration.TypeTerrain;
import javax.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "TERRAIN")
//@DiscriminatorValue("6")
public class Terrain extends Annonce implements Serializable{
	
	@Column(name = "nombre_de_Chambres_TERRAIN")
	private TypeTerrain typeTerrain  ;
	
	@Column(name = "titre_Bleu_TERRAIN")
	private Boolean titreBleuTerrain  ;
	
	@Column(name = "viabilisation_TERRAIN")
	private Boolean viabilisationTerrain  ;
	
	@Column(name = "plante_TERRAIN")
	private Boolean planteTerrain  ;

	public Terrain() {
	}


	public Terrain(TypeTerrain typeTerrain, Boolean titreBleuTerrain, Boolean viabilisationTerrain,
			Boolean planteTerrain) {
		this.typeTerrain = typeTerrain;
		this.titreBleuTerrain = titreBleuTerrain;
		this.viabilisationTerrain = viabilisationTerrain;
		this.planteTerrain = planteTerrain;
	}

	public TypeTerrain getTypeTerrain() {
		return typeTerrain;
	}

	public void setTypeTerrain(TypeTerrain typeTerrain) {
		this.typeTerrain = typeTerrain;
	}

	public Boolean getTitreBleuTerrain() {
		return titreBleuTerrain;
	}

	public void setTitreBleuTerrain(Boolean titreBleuTerrain) {
		this.titreBleuTerrain = titreBleuTerrain;
	}

	public Boolean getViabilisationTerrain() {
		return viabilisationTerrain;
	}

	public void setViabilisationTerrain(Boolean viabilisationTerrain) {
		this.viabilisationTerrain = viabilisationTerrain;
	}

	public Boolean getPlanteTerrain() {
		return planteTerrain;
	}

	public void setPlanteTerrain(Boolean planteTerrain) {
		this.planteTerrain = planteTerrain;
	}

	@Override
	public String toString() {
		return "Terrain [typeTerrain=" + typeTerrain + ", titreBleuTerrain="
				+ titreBleuTerrain + ", viabilisationTerrain=" + viabilisationTerrain + ", planteTerrain="
				+ planteTerrain + "]";
	}

}
