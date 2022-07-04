
package com.pietro.demo.service;

import com.pietro.demo.modelo.Persona;
import java.util.List;


public interface IPersonaService {
    public List <Persona> verPersonas ();
    public void crearPersona(Persona per);
    public void borrarPersona (Long id);
    public Persona buscarPersona (Long id);
}
