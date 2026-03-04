package com.cafedisco.service;

import org.springframework.stereotype.Service;

import com.cafedisco.exception.ResourceNotFoundException;
import com.cafedisco.model.Coffee;
import com.cafedisco.repository.CoffeeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CoffeeService {
	
    private final CoffeeRepository coffeeRepository;

    public CoffeeService(CoffeeRepository coffeeRepository) {
        this.coffeeRepository = coffeeRepository;
    }

    // CREATE
    public Coffee createCoffee(Coffee coffee) {
    	
    	if(coffeeRepository.existsByName(coffee.getName())) {                    
    		throw new RuntimeException(    
    				"Coffee with name '" + coffee.getName() + "'already exists"  
    				);  
    	}
        return coffeeRepository.save(coffee);
    }

    // READ ALL
    public List<Coffee> getAllCoffees() {
        return coffeeRepository.findAll();
    }

    // READ BY ID
    public Coffee getCoffeeById(Long id) {
        return coffeeRepository.findById(id)
                .orElseThrow(() ->
                    new ResourceNotFoundException("Coffee not found with id: " + id)
                );
    }

    // UPDATE
    public Coffee updateCoffee(Long id, Coffee updatedCoffee) {
        Coffee coffee = coffeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Coffee not found"));
        
        
        //  Duplicate name check (ignore same record)
        coffeeRepository.findByName(updatedCoffee.getName())
                .ifPresent(existing -> {
                    if (!existing.getId().equals(id)) {
                        throw new RuntimeException(
                            "Coffee with name '" + updatedCoffee.getName() + "' already exists"
                        );
                    }
                });

        coffee.setName(updatedCoffee.getName());
        coffee.setOrigin(updatedCoffee.getOrigin());
        coffee.setHistory(updatedCoffee.getHistory());
        coffee.setMood(updatedCoffee.getMood());
        coffee.setSong(updatedCoffee.getSong());

        return coffeeRepository.save(coffee);
    }

    // DELETE
    public void deleteCoffee(Long id) {
        Coffee coffee = coffeeRepository.findById(id)
                .orElseThrow(() ->
                    new ResourceNotFoundException("Coffee not found with id: " + id)
                );
        coffeeRepository.delete(coffee);
    }



}
