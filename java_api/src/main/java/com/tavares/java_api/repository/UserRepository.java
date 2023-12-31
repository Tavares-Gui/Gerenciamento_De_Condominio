package com.tavares.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.tavares.java_api.model.UserModel;
import java.util.List;

public interface UserRepository extends MongoRepository<UserModel, String>{
    @Query("{'name': ?0}")
    List<UserModel> findByName(String name);

    @Query("{'name': ?1, 'age': ?0}")
    List<UserModel> findByAgeAndName(short age, String name);

    @Query("{'cpf': ?0, 'password': ?1}")
    UserModel findByCpfPassword(String cpf, String password);
}