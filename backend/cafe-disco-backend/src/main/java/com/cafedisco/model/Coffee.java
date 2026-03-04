package com.cafedisco.model;


import jakarta.persistence.*;

@Entity
@Table(name = "coffee")
public class Coffee {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
	@Column(nullable = false, unique = true) 
    private String name;
    private String origin;

    @Column(length = 1000)
    private String history;

    private String mood;
    private String song;

    // Constructors
    public Coffee() {}

    public Coffee(String name, String origin, String history, String mood, String song) {
        this.name = name;
        this.origin = origin;
        this.history = history;
        this.mood = mood;
        this.song = song;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getOrigin() { return origin; }
    public void setOrigin(String origin) { this.origin = origin; }

    public String getHistory() { return history; }
    public void setHistory(String history) { this.history = history; }

    public String getMood() { return mood; }
    public void setMood(String mood) { this.mood = mood; }

    public String getSong() { return song; }
    public void setSong(String song) { this.song = song; }

}
