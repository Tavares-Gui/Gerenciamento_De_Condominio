package com.tavares.java_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tavares.java_api.model.ReservationModel;
import com.tavares.java_api.repository.ReservationRepository;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public void save(ReservationModel reservationModel) {
        this.reservationRepository.save(reservationModel);
    }

    public List<ReservationModel> findAll() {
        return this.reservationRepository.findAll();
    }

    public List<ReservationModel> findByUserID(String userId) {
        return this.reservationRepository.findByUserID(userId);
    }

    public void delete(String id) {
        this.reservationRepository.deleteById(id);
    }

}