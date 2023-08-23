package com.rhestIA.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.rhestIA.demo.Enumeration.CategorieAnnonce;
import com.rhestIA.demo.Enumeration.Etat;
import com.rhestIA.demo.Enumeration.Region;
import javax.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "Image_pub")

@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})

public  class  Image_pub {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;
    @Column(length = 500000000)
    private byte[] picByte;

    public Image_pub(String name, String type, byte[] picByte) {

        this.name = name;
        this.type = type;
        this.picByte = picByte;
    }

    public Image_pub() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }
}