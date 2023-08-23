package com.rhestIA.demo.Repository;

import com.rhestIA.demo.models.Annonce;
import com.rhestIA.demo.models.Publicite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnonceRepository extends JpaRepository<Annonce, Integer>{

    //List<Annonce> getAnnoncesByIdUser(Long iduser);

    List<Annonce> findByUserId(int userId);


    List<Annonce> findAdsByUsersFavId(int id);

    void deleteByUserId(int userId);
    @Query(value = "select annonce_id from wishlist where user_id = ?", nativeQuery = true)
    List<Long> findAdsIdByUsersFavId(int id);
}
