# Parcial Número Uno

* **Nombre:** Jefferson Alberto Hernandez Garcia
* **Código:** 202120242

# Pasos de Ejecución

 **1)** Descargar el .zip del repositorio de GitHub.

 **2)** Ingresar con VS Code a la ruta "/Parcial1-main/parcial1"

 **3)** Instalar dependecias de node con el comando "npm install"

 **4)** Ejecutar el comando de inicio "npm start"

# Reporte de Decisiones

En la parte del "index.js" se utiliza IntlProvider para toda la parte referente a la internacionalización. Para la parte del "App.js" se usa BrowserRouter, Routes, Route, Navigate para toda la parte de navegación entre las rutas de la pagina web. Luego, para la vista de principal de home se decide implementar unicamente un solo componente llamado "HomeComponente.js" el cual usa useEffect, useState para obtener la información de los usuarios y para definir variables como redirectToPerfil y redirectToDetail para garantizar la navegación por la pagina, también se usa FormattedMessage para renderizar el texto estatico dependiendo del lenguaje en que se encuentre la pagina del usuario. Luego, para la vista del perfil se opto por un solo componente unicamente que usa FormattedMessage para los labes estaticos, tambien se usa el localStorage como forma para enviar información entre una vista y la otra (pueden que allán otras formas mejores como el uso de props, pero senti que el localStorage es más intuitivo y facíl de implementar). En esta vista tambien se una condiciones de renderización de JSX. Por ultimo, también se hace un unico componente por la vista de Detalle de un post, donde se usan cosas mencionadas anteriormente como FormattedMessage y localStorage.
