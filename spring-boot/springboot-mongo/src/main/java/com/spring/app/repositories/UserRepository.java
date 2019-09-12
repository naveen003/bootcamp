package com.spring.app.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.spring.app.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {

}
