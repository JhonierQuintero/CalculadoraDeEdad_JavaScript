document.getElementById('ageCalculator').addEventListener('submit', function(event) {
            event.preventDefault();
            const birthdate = new Date(document.getElementById('birthdate').value);
            const age = calcularEdad(birthdate);
            document.getElementById('result').innerText = `Tu edad es: ${age} años`;
        });

        function calcularEdad(fechaNacimiento) {
            const hoy = new Date();
            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            const mes = hoy.getMonth() - fechaNacimiento.getMonth();
            if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
                edad--;
            }
            return edad;
        }