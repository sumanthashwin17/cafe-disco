package com.cafedisco.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafedisco.model.Coffee;


public interface CoffeeRepository extends JpaRepository<Coffee, Long> {
	
	boolean existsByName(String name);  
	
	Optional<Coffee> findByName(String name); 

}
