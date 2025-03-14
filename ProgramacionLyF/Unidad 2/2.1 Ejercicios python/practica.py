def hacer_pregunta(pregunta, opciones):
    print(pregunta)
    for i, opcion in enumerate(opciones, 1):
        print(f"{i}. {opcion[0]}")
    
    while True:
        try:
            respuesta = int(input("Elige una opción (1-3): "))
            if 1 <= respuesta <= len(opciones):
                return opciones[respuesta - 1][1]
            else:
                print("Por favor, ingresa un número válido.")
        except ValueError:
            print("Entrada no válida, intenta de nuevo.")

def identificar_intereses():
    puntajes = {
        "Redes": 0,
        "Bases de Datos": 0,
        "Desarrollo de Software": 0,
        "Programación Hardware": 0,
        "Modelado 3D": 0,
        "Gestión de Proyectos de Software": 0
    }

    preguntas = [
        ("¿Qué tipo de problema disfrutas resolver más?", 
         [("Optimizar la velocidad y conexión de datos", "Redes"),
          ("Organizar grandes cantidades de información", "Bases de Datos"),
          ("Diseñar aplicaciones con interfaces intuitivas", "Desarrollo de Software")]),
        
        ("¿En qué ambiente prefieres trabajar?", 
         [("Configurando y administrando servidores", "Redes"),
          ("Analizando datos y consultas SQL", "Bases de Datos"),
          ("Escribiendo código y depurando software", "Desarrollo de Software")]),
        
        ("¿Qué tipo de herramientas te interesan más?", 
         [("Raspberry Pi, Arduino", "Programación Hardware"),
          ("Motores gráficos y animación", "Modelado 3D"),
          ("Gestores de proyectos como Jira o Trello", "Gestión de Proyectos de Software")]),
        
        ("¿Cuál de estas actividades te resulta más atractiva?", 
         [("Crear entornos virtuales en 3D", "Modelado 3D"),
          ("Optimizar y gestionar equipos de desarrollo", "Gestión de Proyectos de Software"),
          ("Programar microcontroladores", "Programación Hardware")]),
        
        ("Si tuvieras que elegir un curso, ¿cuál sería?", 
         [("Seguridad y configuración de redes", "Redes"),
          ("Big Data y análisis de información", "Bases de Datos"),
          ("Desarrollo de aplicaciones móviles", "Desarrollo de Software")])
    ]
    
    print("\nBienvenido al test de intereses en Sistemas Computacionales.\n")
    
    for pregunta, opciones in preguntas:
        respuesta = hacer_pregunta(pregunta, opciones)
        puntajes[respuesta] += 1
    print("........................................................")
    print("\nResultados:")
    for rama, puntaje in puntajes.items():
        print(f"{rama}: {puntaje} puntos")
    
    rama_ganadora = max(puntajes, key=puntajes.get)
    print(f"\nTu área de interés más destacada es: {rama_ganadora}")

if __name__ == "__main__":
    identificar_intereses()
