function Jugador(nombre, habilidad) {
    nombre = nombre.trim();
    habilidad = habilidad.trim();
    if (nombre != undefined && nombre != null && nombre != '') {
        if (habilidad != undefined && habilidad != null && habilidad != "") {
            this.nombre = nombre;
            this.xp = 0;
            this.pv = 100;
            this.sp = 100;
            this.habilidad = habilidad;
        } else {
            console.error('Un Jugador no puede ser creado sin Habilidad');
        }

    } else {
        console.error('El Jugador no puede ser creado sin un Nombre');
    }

    this.utilizarHabilidad = function(jugadorAfectado) {

        if (this.sp < 40) {
            console.error(this.nombre.concat(' Insuficientes puntos especiales'));
        } else {
            this.sp -= 40;
            jugadorAfectado.pv -= 30;
            this.xp += 20;
            console.info(this.nombre.concat(' Utilizo ', this.habilidad, ' contra ', jugadorAfectado.nombre));
        }



        if (jugadorAfectado.pv <= 0) {
            jugadorAfectado.pv = 0;
            console.error(jugadorAfectado.nombre + ' Murio');
        }
        if (this.xp >= 50) {
            this.sp += 10;
            this.xp -= 50;
        }

        this.Estado(jugadorAfectado);
    }
    this.Curar = function(jugadorCurado) {
        //jugador curado +20 pv
        //jugador detona accion -10 sp
        //jugador detona accion +10 xp
        if (this.sp >= 10) {

            if (jugadorCurado.pv >= 100) {
                console.error(jugadorCurado.nombre.concat(' Tiene puntos de vida máximos'));
            } else {
                jugadorCurado.pv += 20;
                if (jugadorCurado.pv > 100) {
                    jugadorCurado.pv = 100;
                }

                this.sp -= 10;
                this.xp += 10;
                console.info(jugadorCurado.nombre.concat(' se curó'));
            }
        } else {
            console.error(this.nombre.concat(' No tiene puntos de habilidad suficientes.'));
        }
        if (this.xp >= 50) {
            this.sp += 10;
            this.xp -= 50;
        }
        this.Estado(jugadorCurado);
    }
    this.hitBasico = function(jugadorAfectado) {

        this.xp += 10;
        jugadorAfectado.pv -= 5;

        if (jugadorAfectado.pv <= 0) {
            jugadorAfectado.pv = 0;
            console.error(jugadorAfectado.nombre.concat(' Murió'));
            console.error(this.nombre.concat(' Ganó'));
        }
        if (this.xp >= 50) {
            this.sp += 10;
            this.xp -= 50;
        }

        this.Estado(jugadorAfectado);

    }
    this.generarAtaque = function(tipo, jugadorAfectado) {
        if (jugadorAfectado.pv > 0) {
            switch (tipo) {
                //basico
                case 1:
                    this.hitBasico(jugadorAfectado);
                    break;
                    //Especial
                case 2:
                    this.utilizarHabilidad(jugadorAfectado);
                    break;
            }
        } else {
            console.error("El jugador " + jugadorAfectado.nombre + "esta muerto");
        }
    }
    this.Estado = function(jugadorAfectado) {
        console.log('Jugador Afectado ', jugadorAfectado);
        console.log('Jugador ', this);
    }

}

let Abraxas = new Jugador('Abraxas', 'Power');
let AbsorbingMan = new Jugador('AbsorbingMan', 'durabillity');