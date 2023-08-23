package com.rhestIA.demo.models;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


import com.rhestIA.demo.Enumeration.Region;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data @NoArgsConstructor @AllArgsConstructor
@Entity 
public class Publicite {
	 @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
	 private Long idPub;
	 private String title;
	 private String description;
	 private String photo;
	 private String keywords;
	 private String dateDeb;
	 private String dateFin;
	 private double budget;
	 private Region location;

	 //private int quantite;
	 @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	 @JoinTable(name="pub_images", joinColumns = {
			 @JoinColumn(name = "id_Pub")
	 },
			 inverseJoinColumns = {
					 @JoinColumn(name = "id_image")
			 })
	 private Set<Image_pub> pubImage;

	public Set<Image_pub> getPubImage() {
		return pubImage;
	}

	public void setPubImage(Set<Image_pub> pubImage) {
		this.pubImage = pubImage;
	}

	@JsonIgnore
		@ManyToMany
		(fetch = FetchType.LAZY,
	    cascade = {
	        CascadeType.PERSIST,
	        CascadeType.MERGE
	    })
	    
	   @JoinTable(name = "activity",
	      joinColumns = { @JoinColumn(name = "idPub") },
	      inverseJoinColumns = { @JoinColumn(name = "idUser") })
		private List<User> users;
		
		
		 public void addUser(User user) {
			    this.users.add(user);
			    user.getPublicite().add(this);
			  }
			  
			  public void removeUser(Integer idUser) {
			    User user = this.users.stream().filter(t -> t.getId() == idUser).findFirst().orElse(null);
			    if (user != null) {
			    	this.users.remove(user);
			    	user.getPublicite().remove(this);
			    } }


}
