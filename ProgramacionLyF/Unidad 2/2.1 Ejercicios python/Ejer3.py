# Programa que simula el lanzamiento de una moneda.
import random

num = random.randint(0, 1)     

if num == 0: 
  print('Cara')
else:
  print('Cruz')


# Programa que simula la bola mágica
import random

pregunta = input('pregunta:    ')

numero_aletaorio = random.randint(1, 9)

if numero_aletaorio == 1:
  respuesta = 'Sí - definitivamente'
elif numero_aletaorio == 2:
  respuesta = 'Está decidido'
elif numero_aletaorio == 3:respuesta = 'Sin duda'
elif numero_aletaorio == 4:
  respuesta = 'Respuesta confusa, intenta de nuevo'
elif numero_aletaorio == 5:
  respuesta = 'Pregunta más tarde'
elif numero_aletaorio == 6:
  respuesta = 'Mejor no te digo'
elif numero_aletaorio == 7:
  respuesta = 'Mis fuentes dicen que no'
elif numero_aletaorio == 8:
  respuesta = 'No parece bueno'
elif numero_aletaorio == 9:
  respuesta = 'Muy dudoso'
else:
  respuesta = 'Error'
  
print('Bola mágica:  ' + respuesta)
