package com.rhestIA.demo.controllers;


import com.rhestIA.demo.Service.AppartementServiceImpl;
import com.rhestIA.demo.models.Appartement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/appartements")
public class AppartementController {

    @Autowired
    private AppartementServiceImpl appartementService;

    @GetMapping("/ListeDesAppartements")
    public List<Appartement> FindAllAppartement() {
        return appartementService.getAppartements();
    }

    @GetMapping("/appartement/{id}")
    public Appartement FindAppartementById(@PathVariable int id) {
        return appartementService.getAppartementById(id);
    }

    @PostMapping("/ajouterAppartement")
    public Appartement SaveAppartement(@RequestBody Appartement appartement) {
        appartementService.SaveAppartement(appartement);
        return appartement;
    }

    @DeleteMapping("/supprimerAppartement/{id}")
    public String RemoveAppartement(@PathVariable int id) {
        appartementService.deleteAppartementById(id);
        return "Appartement supprimée avec succée";
    }

    @PutMapping("/ModifierApprtement/{id}")
    public ResponseEntity<?> UpdateAppartement (@PathVariable int id, @RequestBody Appartement appartement) {
        Appartement AppartementExist=appartementService.getAppartementById(id);
        System.out.println(AppartementExist.getIdAnnonce());
        AppartementExist.setTitre(appartement.getTitre());
        AppartementExist.setCategorie(appartement.getCategorie());
        AppartementExist.setRegion(appartement.getRegion());
        AppartementExist.setVille(appartement.getVille());
        AppartementExist.setAdresse(appartement.getAdresse());
        AppartementExist.setSurface(appartement.getSurface());
        AppartementExist.setEtat(appartement.getEtat());
        AppartementExist.setNumTel(appartement.getNumTel());
        AppartementExist.setImage(appartement.getImage());
        AppartementExist.setNumEtageAppartement(appartement.getNumEtageAppartement());
        AppartementExist.setNbrChambresAppartement(appartement.getNbrChambresAppartement());
        AppartementExist.setNbrSalleDeBainAppartement(appartement.getNbrSalleDeBainAppartement());
        AppartementExist.setAscenseurAppartement(appartement.getAscenseurAppartement());
        AppartementExist.setMeubleAppartement(appartement.getMeubleAppartement());
        AppartementExist.setEquipementsCuisineAppartement(appartement.getEquipementsCuisineAppartement());
        AppartementExist.setClimatisationAppartement(appartement.getClimatisationAppartement());
        AppartementExist.setChauffageAppartement(appartement.getChauffageAppartement());
        AppartementExist.setBalconAppartement(appartement.getBalconAppartement());

        Appartement savedAppartement=appartementService.SaveAppartement(AppartementExist);
        return ResponseEntity.ok().body(savedAppartement);
    }

}
