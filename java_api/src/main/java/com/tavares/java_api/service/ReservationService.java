package com.tavares.java_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tavares.java_api.model. ReservationModel;
import com.tavares.java_api.repository. ReservationRepository;

@Service
public class  ReservationService {

    @Autowired
    private  ReservationRepository reservaRepository;

    public void save( ReservationModel reservaModel) {
        this.reservaRepository.save(reservaModel);
    }

    public List< ReservationModel> findAll() {
        return this.reservaRepository.findAll();
    }

    public List< ReservationModel> findByUserID(String userId) {
        return this.reservaRepository.findByUserID(userId);
    }

    public void delete(String id) {
        this.reservaRepository.deleteById(id);
    }

}