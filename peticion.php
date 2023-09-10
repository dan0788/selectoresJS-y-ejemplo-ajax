<?php
class conection
{

    public $mbd;

    function conectar($usuario, $contraseña, $dbname)
    {
        try {
            $this->mbd = new PDO('mysql:host=localhost;dbname=' . $dbname, $usuario, $contraseña);
            //
            //$mbd = null; //cerrar la conexión
            return $this->mbd;
        } catch (PDOException $e) {
            print "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    function cerrarConexion()
    {
        return $this->mbd = null;
    }
    function showInfo($tablename)
    { //sobra funcion
        try {
            foreach ($this->mbd->query('SELECT * from ' . $tablename) as $fila) {
                $counter = 0;
                foreach ($fila as $key => $value) {
                    if ($key == $counter) {
                        echo $value . ", ";
                        $counter++;
                    }
                }
                echo "<br/>";
            }
        } catch (PDOException $e) {
            print "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function getInfo($tablename)
    {
        try {
            $newfila = [];
            $counterEachRow = 1;
            foreach ($this->mbd->query('SELECT * from ' . $tablename) as $fila) {
                $counter = 0;
                foreach ($fila as $key => $value) {
                    if ($key != $counter) {
                        $n[$key] = $value;
                    } else {
                        $counter++;
                    }
                }
                $newfila[$counterEachRow] = $n;
                $counterEachRow++;
            }
            return $newfila;
        } catch (PDOException $e) {
            print "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    function setInfo($tablename)
    {
        $id;
        $stmt = $this->mbd->prepare("insert into " + $tablename + "(ID,Nombres,Apellidos,FechaNacimiento,Edad,Género,NivelEstudios,EstadoCivil,Hijos,DirecciónDomiciliaria,Teléfono,Detalles,Foto1,Foto2,Foto3,Foto4,Usuario,Contraseña,Método) values(?,'Daniel','Ayala','1994-04-05',27,'Masculino','Universidad','Soltero/a',0,'Chillogallo',2844031,'ola ke ase','no hay','no hay','no hay','no hay','dan14','dan14','texto')");
        $stmt->execute(array($id));
    }
    function counterRows($tablename)
    {
        foreach ($this->mbd->query('SELECT MAX(ID) AS ID FROM ' . $tablename) as $fila) {
            $id = $fila[0];
        }
        return $id;
    }
}
$a = new conection();
$a->conectar("root", "", "information_schema");
$fila = $a->getInfo("ENGINES");
$a->cerrarConexion();
echo json_encode($fila, JSON_FORCE_OBJECT);