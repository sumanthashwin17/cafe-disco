package com.cafedisco.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cafedisco.model.Coffee;


public interface CoffeeRepository extends JpaRepository<Coffee, Long> {

}
