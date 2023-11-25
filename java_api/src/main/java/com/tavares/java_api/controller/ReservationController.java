package com.tavares.java_api.controller;

import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tavares.java_api.DTO.ReservationUserDTO;
import com.tavares.java_api.model.ReservationModel;
import com.tavares.java_api.model.UserModel;
import com.tavares.java_api.service.ReservaService;

@RestController
@RequestMapping("/reservation")
public class ReservaController {

    @Autowired
    private ReservaService reservationService;

    @PostMapping("")
    public void newReservation(@RequestBody ReservationUserDTO newReservationUserDTO) {
        UserModel newUserModel = new UserModel(newReservationUserDTO.getUser().getId());
        Date data = new Date();
        ReservationModel newReservation = new ReservationModel(data, newUserModel);
        reservationService.save(newReservation);
    }

    @GetMapping("")
    public List<ReservationModel> findAllReservationModels() {
        return reservationService.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<ReservationModel> findByUserID(@PathVariable String userId) {
        return reservationService.findByUserID(userId);
    }

    @DeleteMapping("/{id}")
    public void deleteReserva(@PathVariable String id) {
        reservationService.delete(id);
    }
}