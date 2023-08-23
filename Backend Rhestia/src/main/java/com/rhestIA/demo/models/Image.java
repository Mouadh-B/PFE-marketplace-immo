package com.rhestIA.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.rhestIA.demo.Enumeration.CategorieAnnonce;
import com.rhestIA.demo.Enumeration.Etat;
import com.rhestIA.demo.Enumeration.Region;
import javax.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "Image")

@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})

public  class  Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;
    @Column(length = 500000000)
    private byte[] picByte;

    public Image(String name, String type, byte[] picByte) {

        this.name = name;
        this.type = type;
        this.picByte = picByte;
    }

    public Image() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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