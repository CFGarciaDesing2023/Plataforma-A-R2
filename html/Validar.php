<?php
    
    $Email=$_POST['Email'];
    $Password=$_POST['Contraseña'];

    //conectar a base de datos
    $conexion=mysqli_connect("localhost", "CompletoProjectoAR");
    $consulta="SELECT * FROM RegistroUsuarios WHERE Email='$Email' and Contraseña ='$Contraseña'";
 
    $Result=mysqli_query($conexion, $consulta);

    $filas=mysqli_num_rows($Result);

        if ($filas>0) {
             // inicio de sesion..
             session_start();
            $_SESSION['Email']=$Email;
            // redirecionara a pagina..
            header("location:../index.html");
        } else {
              // alerta de usuario ou contraseña no valido
             echo '<script language="javascript">alert("Error de autentificacion");window.location.href="../Login.html"</script>';
        }

    mysqli_free_result($Result);
    mysqli_close($conexion);

?>	        