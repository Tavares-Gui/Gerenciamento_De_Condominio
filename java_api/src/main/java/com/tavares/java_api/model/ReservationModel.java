package com.tavares.java_api.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("reservation")
public class ReservationModel {
    @Id
    @DBRef
    private String id;
    private Date diaReserva;
    private UserModel idUser;

    public ReservationModel(String id, Date diaReserva, UserModel idUser) {
        this.id = id;
        this.diaReserva = diaReserva;
        this.idUser = idUser;
    }

    public ReservationModel(Date diaReserva, UserModel idUser) {
        this.diaReserva = diaReserva;
        this.idUser = idUser;
    }

    public ReservationModel(Date diaReserva) {
        this.diaReserva = diaReserva;
    }

    public ReservationModel() {
    }
}