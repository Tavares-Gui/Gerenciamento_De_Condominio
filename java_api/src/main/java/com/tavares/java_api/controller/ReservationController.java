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
import com.tavares.java_api.service. ReservationService;

@RestController
@RequestMapping("/reserva")
public class  ReservationController {

    @Autowired
    private  ReservationService reservaService;

    @PostMapping("")
    public void new Reservation(@RequestBody  ReservationtionUserDTO new ReservationUserDTO) {
        UserModel newUserModel = new UserModel(new ReservationUserDTO.getUser().getId());
        Date data = new Date();
         ReservationtionModel new Reservation = new  ReservationtionModel(data, newUserModel);
        reservaService.save(new Reservation);
    }

    @GetMapping("")
    public List< ReservationtionModel> findAll ReservationtionModels() {
        return reservaService.findAll();
    }

    @GetMapping("/user/{userId}")
    public List< ReservationtionModel> findByUserID(@PathVariable String userId) {
        return reservaService.findByUserID(userId);
    }

    @DeleteMapping("/{id}")
    public void delete Reservation(@PathVariable String id) {
        reservaService.delete(id);
    }
}