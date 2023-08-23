package com.rhestIA.demo.controllers;


import com.rhestIA.demo.Enumeration.Keywords;
import com.rhestIA.demo.Service.AnnonceServiceImpl;
import com.rhestIA.demo.Service.UserService;
import com.rhestIA.demo.models.Annonce;
import com.rhestIA.demo.models.Image;
import com.rhestIA.demo.models.User;
import com.rhestIA.demo.payload.response.ResponseMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/annonces")
public class AnnonceController {


    @Autowired
    private AnnonceServiceImpl annonceService;
    @Autowired
    private UserService userService;




    @GetMapping("/all")
    public List<Annonce> FindAllAnnonces() {
        return annonceService.getAnnonces();
    }

    @GetMapping("/annonce/{id}")
    public Annonce getAnnonceById(@PathVariable int id) {

        return annonceService.getAnnonceById(id);

    }

    @GetMapping("/user/{id}")
    public List<Annonce> getAnnoncesByUserId(@PathVariable int id) {

        return annonceService.getAnnoncesByUserId(id);
    }
//wishlist
    @GetMapping(path = "favorites/{userId}")
    public List<Annonce> getUserFavorites(@PathVariable("userId") int id) {
        return annonceService.findUserFavoritesByUserId(id);
    }



    @PostMapping(path = "favorites/{adId}/{userId}")
    public void addToFavorites(@PathVariable("userId") int userId, @PathVariable("adId") int adId) {
        annonceService.addToFavorites(userId, adId);
    }

    @PutMapping(path = "favorites/{adId}/{userId}")
    public void removeFromFavorites(@PathVariable("userId") int userId, @PathVariable("adId") int adId) {
        annonceService.removeFromFavorites(userId, adId);
    }

    @DeleteMapping(path = "favorites/{userId}")
    public void removeAllFavorites(@PathVariable("userId") int userId) {
        annonceService.removeAllFavorites(userId);
    }

//wishlist

    @PostMapping(value = {"/ajouterAnnonce"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Annonce SaveAnnonce(@RequestPart("annonce") Annonce annonce,
                               @RequestPart("imageFile") MultipartFile[] file
                              ) {
        try {
            Set<Image> images = uploadImage(file);

            // Get the currently authenticated user's username
            Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String username = ((UserDetails) principal).getUsername();

            // Retrieve the User object from the database based on the username
            User user = userService.getUserByUsername(username);
            annonce.setUser(user);

            annonce.setAnnonceImage(images);

            annonceService.SaveAnnonce(annonce);
            return annonce;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    public Set<Image> uploadImage(MultipartFile[] multipartFiles) throws IOException
    {
        Set<Image> images =new HashSet<>();

        for (MultipartFile file: multipartFiles)
        {
            Image image  =new Image(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes()
            );
            images.add((image));


        }
        return images;

    }

    @PutMapping("/supprimerAnnonce/{id}")
    public void RemoveAnnonce(@PathVariable int id) {
        annonceService.deleteAnnonceById(id);

    }
    @PutMapping(path = "properties/{userId}")
    public void removeAllProperties(@PathVariable("userId") int userId) {
        annonceService.removeAllProperties(userId);
    }
    @DeleteMapping("/user/{userId}")
    public ResponseEntity<?> deletePropertiesByUser(@PathVariable int userId) {
        // Implement the logic to delete properties associated with the user
        annonceService.deletePropertiesByUser(userId);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/modifierAnnonce/{id}")
    public ResponseEntity<?> UpdateAnnonce (@PathVariable int id, @RequestBody Annonce annonce) {
        Annonce AnnonceExist=annonceService.getAnnonceById(id);
        System.out.println(AnnonceExist.getIdAnnonce());
        AnnonceExist.setTitre(annonce.getTitre());
        AnnonceExist.setCategorie(annonce.getCategorie());
        AnnonceExist.setRegion(annonce.getRegion());
        AnnonceExist.setVille(annonce.getVille());
        AnnonceExist.setAdresse(annonce.getAdresse());
        AnnonceExist.setSurface(annonce.getSurface());
        AnnonceExist.setEtat(annonce.getEtat());
        AnnonceExist.setNumTel(annonce.getNumTel());
        AnnonceExist.setImage(annonce.getImage());
        Annonce savedAnnonce=annonceService.SaveAnnonce(AnnonceExist);
        return ResponseEntity.ok().body(savedAnnonce);
    }


    @GetMapping(path = "details/{adId}")
    public ResponseEntity<Annonce> getAdDetailsById(@PathVariable("adId") int id) {
        return ResponseEntity.ok().body(annonceService.getAdDetailsById(id));
    }

}
