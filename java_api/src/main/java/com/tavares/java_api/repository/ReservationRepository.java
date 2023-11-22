package com.tavares.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.tavares.java_api.model.ReservationModel;

import java.util.List;

public interface ReservationRepository extends MongoRepository<ReservationModel, String> {
    // @Query("{'listUser.id': ?0 }")
    @Query("{'idUser.id': ?0 }")
    List<ReservationModel> findByUserID(String userId);

}