package com.cafedisco.controller;

import com.cafedisco.model.Coffee;
import com.cafedisco.service.CoffeeService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coffees")
@CrossOrigin(origins = "http://localhost:3000")
public class CoffeeController {
	
    private final CoffeeService coffeeService;

    public CoffeeController(CoffeeService coffeeService) {
        this.coffeeService = coffeeService;
    }

    // CREATE
    @PostMapping
    public ResponseEntity<?> createCoffee(@RequestBody Coffee coffee) {
        try {
            return ResponseEntity.ok(coffeeService.createCoffee(coffee));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    

    // READ ALL
    @GetMapping
    public List<Coffee> getAllCoffees() {
        return coffeeService.getAllCoffees();
    }

    // READ BY ID
    @GetMapping("/{id}")
    public Coffee getCoffeeById(@PathVariable Long id) {
        return coffeeService.getCoffeeById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCoffee(
            @PathVariable Long id,
            @RequestBody Coffee coffee) {
        try {
            return ResponseEntity.ok(coffeeService.updateCoffee(id, coffee));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    
    // DELETE
    @DeleteMapping("/{id}")
    public String deleteCoffee(@PathVariable Long id) {
        coffeeService.deleteCoffee(id);
        return "Coffee deleted successfully";
    }

}
