
package com.pietro.demo.controller;

import com.pietro.demo.modelo.Persona;
import com.pietro.demo.service.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
    
    @Autowired
    private IPersonaService persoServ;    
    
    @PostMapping("/new/persona")
    public void agregarPersona(@RequestBody Persona pers){
       persoServ.crearPersona(pers);
       
    }
    
    @GetMapping  ("/ver/personas")
    @ResponseBody
    public List<Persona> verPersonas(){
       return persoServ.verPersonas();
    }
   
    @DeleteMapping ("/delete/{id}")
    public void borrarPersona(@PathVariable Long id){
        persoServ.borrarPersona(id);
    }
    
}
