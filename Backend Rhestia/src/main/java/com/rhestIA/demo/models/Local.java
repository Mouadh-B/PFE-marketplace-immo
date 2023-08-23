package com.rhestIA.demo.models;

import com.rhestIA.demo.Enumeration.TypeLocal;
import javax.persistence.*;

import java.io.Serializable;


@Entity
@Table(name = "LOCAL")
//@DiscriminatorValue("4")
public class Local extends Annonce implements Serializable{
	
	@Column(name = "type_de_local")
	private TypeLocal typeLocal ;
	
	@Column(name = "equipements_LOCAL")
	private Boolean equipementLocal ;
	
	@Column(name = "cameras_de_surveillance_LOCAL")
	private Boolean camerasLocal ;
	
	

	public Local() {

	}


	public Local(TypeLocal typeLocal, Boolean equipementLocal, Boolean camerasLocal) {
		super();
		this.typeLocal = typeLocal;
		this.equipementLocal = equipementLocal;
		this.camerasLocal = camerasLocal;
	}


	public TypeLocal getTypeLocal() {
		return typeLocal;
	}


	public void setTypeLocal(TypeLocal typeLocal) {
		this.typeLocal = typeLocal;
	}


	public Boolean getEquipementLocal() {
		return equipementLocal;
	}


	public void setEquipementLocal(Boolean equipementLocal) {
		this.equipementLocal = equipementLocal;
	}


	public Boolean getCamerasLocal() {
		return camerasLocal;
	}


	public void setCamerasLocal(Boolean camerasLocal) {
		this.camerasLocal = camerasLocal;
	}


	@Override
	public String toString() {
		return "Local [typeLocal=" + typeLocal + ", equipementLocal=" + equipementLocal
				+ ", camerasLocal=" + camerasLocal + "]";
	}
	
}
