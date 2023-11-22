package com.tavares.java_api.controller;

import java.util.List;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tavares.java_api.dto.ReservationUserDTO;
import com.tavares.java_api.model.ReservationModel;
import com.tavares.java_api.model.UserModel;
import com.tavares.java_api.service.ReservationService;
import com.tavares.java_api.service.UserService;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private UserService userService;
    @Autowired
    private ReservationService reservationService;

    @PostMapping("")
    public void newUser(@RequestBody ReservationUserDTO newReservationUserDTO) {
        ReservationModel newReservationModel = new ReservationModel(newReservationUserDTO.getReservation().getName());

        UserModel userResp = userService
                .save(new UserModel(newReservationUserDTO.getUser().getName(), newReservationUserDTO.getUser().getAge()));
        newReservationModel.setIdUser(new UserModel(userResp.getId()));
        reservationService.save(newReservationModel);
    }

    @PostMapping("/array")
    public void newUserArray(@RequestBody ReservationUserDTO newReservationUserDTO) {
        List<UserModel> idsUsers = new ArrayList<UserModel>();

        for (UserModel test : newReservationUserDTO.getUserList()) {
            UserModel userResp = userService.save(new UserModel(test.getName(), test.getAge()));
            idsUsers.add(new UserModel(userResp.getId()));
        }

        ReservationModel newReservationModel = new ReservationModel(newReservationUserDTO.getReservation().getName());

        newReservationModel.setListUser(idsUsers);
        reservationService.save(newReservationModel);
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
    public void deleteReservation(@PathVariable String id) {
        reservationService.delete(id);
    }
}