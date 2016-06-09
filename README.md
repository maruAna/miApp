# Base gulp angularjs 

Configuración basica de gulp para iniciar proyecto utilizando Angularjs

## Dependencias
- Angular.js
- Angular-Route
- Angular-Resource
- Bootstrap
- Bootstrap Material

## Instalación
### Software adicional para Windows


- [instalar node y npm ](https://nodejs.org/en/)
> verificar instalación correctar escribiendo node -v en consola.
> Si no inicia el command line agregar en variables de entorno PAHT la carpeta bin de la instalación de node 

- [Instalar Git (necesario para instalar dependencias)](https://git-scm.com/download/win)

´´´
> Luego de instalar git crear un directorio e inicializar git en dicho directorio
```
//ejemplo
C:\mkdir proyecto
C:\cd proyecto
C:\git init
C:\git clone https://github.com/juan41285/angular-gulp.git

```
´´´
### Instalar global
```
$ npm install -g stylus
$ npm install -g gulp
$ npm install -g bower
```

### Ejecutar desde la carpeta del proyecto
```
$ npm install
$ bower install
```
### Iniciar servidor en fase de desarrollo
```
$ gulp
```
### Compilar app
```
$ gulp build
$ gulp server-dist
```

## License

**The MIT License (MIT)**
