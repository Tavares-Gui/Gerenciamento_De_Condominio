package com.tavares.java_api.DTO;

import com.tavares.java_api.model.ReservationModel;
import com.tavares.java_api.model.UserModel;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReservationUserDTO {
    private UserModel user;
    private ReservationModel reserva;
}