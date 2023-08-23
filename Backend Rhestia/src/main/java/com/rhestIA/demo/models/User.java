package com.rhestIA.demo.models;


import com.rhestIA.demo.Enumeration.Genre;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;





@Entity
@Table(	name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;
    @Size(max = 8)
    private String num_tel;

    private Genre gender;

    public User(String username, String email,  String full_name,Genre gender, String num_tel, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.num_tel = num_tel;
        this.gender = gender;
        this.full_name = full_name;

    }

    public User() {
    }

    public String getNum_tel() {
        return num_tel;
    }

    public void setNum_tel(String num_tel) {
        this.num_tel = num_tel;
    }

    public Genre getGender() {
        return gender;
    }

    public void setGender(Genre gender) {
        this.gender = gender;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    @Size(min = 6, max = 30)
    private String full_name;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();


    @ManyToMany(mappedBy = "usersFav", cascade = CascadeType.REMOVE)
    Set<Annonce> favoriteAds;



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
  
    @ManyToMany(fetch = FetchType.LAZY,
		      cascade = {
		              CascadeType.PERSIST,
		              CascadeType.MERGE
		          },
		          mappedBy = "users")
	 
	  List<Publicite> publicites= new ArrayList<Publicite>();
    
    public void setPublicite(List<Publicite> publicite) {
		this.publicites = publicite;
	}
	public List<Publicite> getPublicite() {
		return publicites;
	}
	public void addPublicite(Publicite publicite) {
		// TODO Auto-generated method stub
		publicites.add(publicite);
	}



}
