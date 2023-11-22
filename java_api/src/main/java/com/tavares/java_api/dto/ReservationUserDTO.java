package com.tavares.java_api.dto;

import com.tavares.java_api.model.ReservationModel;
import com.tavares.java_api.model.UserModel;

import lombok.Data;
import java.util.List;

@Data
public class ReservationUserDTO {
    private UserModel user;
    private List<UserModel> userList;
    private ReservationModel reservation;
}