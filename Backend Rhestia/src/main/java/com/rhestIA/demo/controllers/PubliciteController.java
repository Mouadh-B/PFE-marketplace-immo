package com.rhestIA.demo.controllers;

import java.io.IOException;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.rhestIA.demo.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.rhestIA.demo.Repository.UserRepository;
import com.rhestIA.demo.Service.IPubliciteService;
import com.rhestIA.demo.Service.PubliciteService;
import com.rhestIA.demo.Service.UserService;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/pubs")

public class PubliciteController {

	//@Autowired
	//private UserService su ;

	@Autowired
	private PubliciteService sp;

	//@Autowired
	//private UserRepository usr;








	@PostMapping(value = {"/add"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	//@PreAuthorize("hasAuthority('ROLE_USER')")
	public Publicite savePublicite(@RequestPart("pub") Publicite publicite,
								   @RequestPart("imageFile") MultipartFile[] file) {
		try {
			Set<Image_pub> images = uploadImage(file);
			publicite.setPubImage(images);
			sp.savePublicite(publicite);
			return publicite;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return  null;
		}


	}
	public Set<Image_pub> uploadImage(MultipartFile[] multipartFiles) throws IOException
	{
		Set<Image_pub> images =new HashSet<>();

		for (MultipartFile file: multipartFiles)
		{
			Image_pub image  =new Image_pub(
					file.getOriginalFilename(),
					file.getContentType(),
					file.getBytes()
			);
			images.add((image));


		}
		return images;



	}

	@GetMapping("/supprimerpub/{id}")
	public String supprimerPublicite(@PathVariable int id) throws IOException
	{
		sp.supprimerPublicite(id);
		return "Publicité supprimée avec succès";
	}



/*

@PostMapping("/sauvegarderpub")


	 public String savePublicite(@ModelAttribute Publicite p,Model m  ) throws IOException
	 {
			Integer id= p.getIdPub();
			sp.savePublicite(p);

			if (id!=null) //modif
			{
				 return "redirect:/publicites/all";
			}
			else //ajout
			{

					m.addAttribute("message","Ajout avec succes");

					return "redirect:/publicites/all";
				}
			 }


	*/

	@PutMapping("/modifierpub/{id}")
	public ResponseEntity<?> UpdatePublicite (@PathVariable int idPub, @RequestBody Publicite publicite) {
		Publicite PubliciteExist=sp.getPubliciteById(idPub);
		System.out.println(PubliciteExist.getIdPub());
		PubliciteExist.setTitle(publicite.getTitle());
		PubliciteExist.setDescription(publicite.getDescription());
		PubliciteExist.setKeywords(publicite.getKeywords());
		// PubliciteExist.setDateDeb(publicite.getDateDeb());
		//PubliciteExist.setDateFin(publicite.getDateFin());
		PubliciteExist.setPubImage(publicite.getPubImage());
		PubliciteExist.setUsers(publicite.getUsers());
		Publicite savedPublicite=sp.savePublicite(PubliciteExist);
		return ResponseEntity.ok().body(savedPublicite);


	}
	
	 
	/*
@GetMapping("/modifierpublicite/{idp}")
	 public String modifierPublicite( @PathVariable ("idp") int id)
	 {
		
		m.addAttribute("publicite",sp.getPublicite(id));
		return "ajouterpublicite";
	 }
	*/
/*
@GetMapping("/publicitePUser")
	    public String getPubliciteByUser(@RequestParam("user") int id, Model m){
	        //m.addAttribute("users", su.getAllUser());
	        if(id ==0) {
	        	 m.addAttribute("liste", sp.getAllPublicite());
	        	 return "redirect:/publicites/all";
	        }
	        else {
	        	 m.addAttribute("liste", sp.getPubliciteParUser(id));
	        	 //m.addAttribute("client", su.getUser(id).getNomclient());
	        }
	        
	        return "listePublicites";
	    }
	*/














}
