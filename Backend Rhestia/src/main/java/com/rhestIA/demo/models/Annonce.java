package com.rhestIA.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.rhestIA.demo.Enumeration.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "ANNONCE")
//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
//@DiscriminatorColumn(name = "type_Annonce", discriminatorType = DiscriminatorType.STRING)
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})

public  class  Annonce implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idAnnonce;
	
	@Column(name = "titre")
	private String titre;
	
	@Column(name = "categorie")
	@Enumerated(EnumType.STRING)
	private CategorieAnnonce categorie;
	
	@Column(name = "region")
	@Enumerated(EnumType.STRING)
	private Region region;
	
	@Column(name = "ville")
	private String ville;
	
	@Column(name = "adresse")
	private String adresse;
	
	@Column(name = "surface")
	private Long surface;
	
	@Column(name = "etat")
	@Enumerated(EnumType.STRING)
	private Etat etat;
	@Column(name = "typesol")
	@Enumerated(EnumType.STRING)
	private TypeSol typesol;
	@Column(name = "téléphone")
	private String numTel;

	@Column(name = "image")
	private String image;
	private Double longitude;
	@Column(name = "price")
	private Double price;

	public Double getPrice() {
		return price;
	}
	@ElementCollection(targetClass = Keywords.class)
	@Enumerated(EnumType.STRING)
	@CollectionTable(name = "annonce_keywords", joinColumns = @JoinColumn(name = "annonce_id"))
	@Column(name = "keyword")
	private Set<Keywords> keywords;
	@Column
	@Enumerated(EnumType.STRING)
	private Exposition exposition;

	public Set<Keywords> getKeywords() {
		return keywords;
	}

	public void setKeywords(Set<Keywords> keywords) {
		this.keywords = keywords;
	}

	public TypeSol getTypesol() {
		return typesol;
	}

	public void setTypesol(TypeSol typesol) {
		this.typesol = typesol;
	}

	public Exposition getExposition() {
		return exposition;
	}

	public void setExposition(Exposition exposition) {
		this.exposition = exposition;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
	private Double latitude;

	/**public Keywords getKeywords() {
		return keywords;
	}

	public void setKeywords(Keywords keywords) {
		this.keywords = keywords;
	}
**/
	/************************annonce_user********************/

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	/*************************annonce_user********************/

/************************users_favourites*****************/

@ManyToMany(fetch = FetchType.LAZY)
@JoinTable(
		name = "wishlist",
		joinColumns = @JoinColumn(name = "annonce_id"),
		inverseJoinColumns = @JoinColumn(name = "user_id")
)
	Set<User> usersFav;

	public Set<User> getUsersFav() {
		return usersFav;
	}

	public void setUsersFav(Set<User> usersFav) {
		this.usersFav = usersFav;
	}

	/************************users_favourites*****************/

	public Set<Image> getAnnonceImage() {
		return annonceImage;
	}

	public void setAnnonceImage(Set<Image> annonceImage) {
		this.annonceImage = annonceImage;
	}

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name="annonce_images", joinColumns = {
			@JoinColumn(name = "idAnnonce")
	},
			inverseJoinColumns = {
			@JoinColumn(name = "id_image")
	})
	private Set<Image> annonceImage;


	

	public Annonce() {
	}


	public Annonce(String titre, CategorieAnnonce categorie, Region region, String ville, String adresse, Long surface, Etat etat,Exposition exposition,TypeSol typesol, String numTel, String image, Double longitude, Double latitude, Set<Image> annonceImage) {
		this.titre = titre;
		this.categorie = categorie;
		this.region = region;
		this.ville = ville;
		this.adresse = adresse;
		this.surface = surface;
		this.etat = etat;
		this.numTel = numTel;
		this.image = image;
		this.longitude = longitude;
	this.typesol=typesol;
	this.exposition=exposition;
		this.latitude = latitude;
		this.annonceImage = annonceImage;


	}

	public Annonce(String titre, CategorieAnnonce categorie, Region region, String ville, String adresse, Long surface, Etat etat, String numTel, String image, Double longitude, Double latitude) {
		this.titre = titre;
		this.categorie = categorie;
		this.region = region;
		this.ville = ville;
		this.adresse = adresse;
		this.surface = surface;
		this.etat = etat;
		this.numTel = numTel;
		this.image = image;
		this.longitude = longitude;
		this.latitude = latitude;
	}

	public int getIdAnnonce() {
		return idAnnonce;
	}

	public void setIdAnnonce(int idAnnonce) {
		this.idAnnonce = idAnnonce;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public CategorieAnnonce getCategorie() {
		return categorie;
	}

	public void setCategorie(CategorieAnnonce categorie) {
		this.categorie = categorie;
	}

	public Region getRegion() {
		return region;
	}

	public void setRegion(Region region) {
		this.region = region;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public Long getSurface() {
		return surface;
	}

	public void setSurface(Long surface) {
		this.surface = surface;
	}

	public Etat getEtat() {
		return etat;
	}

	public void setEtat(Etat etat) {
		this.etat = etat;
	}

	public String getNumTel() {
		return numTel;
	}

	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}

	public  String getImage() {
		return image;
	}

	public void setImage( String image) {
		this.image = image;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}



	@Override
	public String toString() {
		return "Annonce{" +
				"idAnnonce=" + idAnnonce +
				", titre='" + titre + '\'' +
				", categorie=" + categorie +
				", region=" + region +
				", ville='" + ville + '\'' +
				", adresse='" + adresse + '\'' +
				", surface=" + surface +
				", etat=" + etat +
				", numTel=" + numTel +
				", image='" + image + '\'' +
				", longitude=" + longitude +
				", latitude=" + latitude +

				'}';
	}

	// getters and setters








	}













