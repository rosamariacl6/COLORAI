Manual de instalación COLORAI.

1.Instalación de la base de datos:
	- Es necesario abrir el archivo .sql desde el software MySqlWorkbench. Una vez abierto simplemente ejecutar el botón con forma de "rayo" y en pocos minutos la base de datos estará creada en el sistema.

2.Instalación del proyecto:
	- El proyecto cuenta con dos carpetas fundamentales que deben copiarse en la columna explorer de Visual Studio Code, por una parte "client" y por 		otra parte "server".
	Una vez copiadas, abrir dos terminales (una para client y otra para server) y ejecutar el comando desde la raíz de cliente y desde la raíz server: 		npm install
	De esta forma, todas las librerías quedarían instaladas correctamente.

3. Creación del archivo .env:
	- Dentro de la carpeta server debes crear la carpeta .env y agregar estas lineas:

		DB_HOST=localhost
		DB_USER= "NOMBRE DE SU USUARIO DE MYSQL WORKBENCH"
		DB_PASS="CONTRASEÑA CORRECTA DE SU USUARIO DE MYSQL WORKBENCH"
		DB_NAME=colorai
		SECRET=secret
		PORT=4000

	Es muy importante que estos datos estén correctos y qué coincidan con los que tenga asignados a los de su software MySQL. 
	Es también importante que si utiliza otro puerto que no sea :4000 tenga que cambiarlo desde los otros endpoints

4. Levantar proyecto:
	- Por una parte hay que acceder desde la terminal a la ruta raíz de server y ejecutar el comando : npm run dev 
		En breves segundos deberías el mensaje "conexión correcta". 
	- Por otro lado, acceder desde la terminal a la ruta raíz de client y ejecutar el comando : npm start 
		Si la instalación ha sido correcta y no existe ningun problema a la hora de levantar el servidor entonces puedes acceder al navegador y buscar la ruta: localhost:3000 desde el explorador (por ejemplo Google Chrome).

5. Acceder como administrador:
	- Desde una ventana de login y utilizando el email y contraseña de administrador: 
			USUARIO: e.moreno.asesoria@gmail.com / CONTRASEÑA: e.moreno.asesoria@gmail.com
		Llegará a la vista principal de administrador, donde puede dar de alta a los profesionales, crear test, buscar usuarios, etc.

6. Dar de alta a cliente.	
	- Desde el perfil de profesional se puede dar de alta a un cliente, a este le llegará, vía correo electrónico, un correo con una contraseña 			aleatoria.
