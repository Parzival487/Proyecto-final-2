function agregarElementos() {

    var nombre = document.getElementById("txtNombre").value;
    var apellidos = document.getElementById("txtApellidos").value;
    var email = document.getElementById("txtEmail").value;

    if(nombre === "" || apellidos === ""){
        BootstrapDialog.show({
            message: 'Ningun campo debe estar vacio'
        });

    }

    var objpersona = {
        nombre: nombre,
        apellidos: apellidos,
        email: email


    }

    localStorage.setItem("persona",JSON.stringify(objpersona));

    window.location.reload();
}

window.onload = function() {
   
    var objpersona = localStorage.getItem("persona");

    if(objpersona !== null) {

        var objpersonaparse = JSON.parse(objpersona);

        var templateTr = `<tr>
                         <td>${objpersonaparse.nombre}</td>
                         <td>${objpersonaparse.apellidos}</td>
                         <td>${objpersonaparse.email}</td>
                         <td> <button class='btn-primary' onclick='Editarpersona(${objpersonaparse})'>Editar</button>  </td>
                         <td> <button class='btn-danger'>Eliminar</button> </td>
                         </tr>`;
           
        var tbodyPersona = document.getElementById("tbodyPersona");   
          tbodyPersona.innerHTML = templateTr;
    }
}