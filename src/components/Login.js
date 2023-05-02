import axios from 'axios';

function Login(){

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        console.log(regexEmail.test(email));

        if(email === '' || password === ''){
            console.log("Los campos no se pueden enviar vacios");
            return;
        }

        if(email !== '' && !regexEmail.test(email)){
            console.log("Debes ingresar una direccion de email valida");
            return;
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            console.log("Credenciales invalidas");
            return;
        }

        console.log("Ok, estamos listos para enviar la informacion");

        axios.post('http://challenge-react.alkemy.org', {email, password}).then(response => {
                console.log(response.data);
            })
    }

    return (
        <>
            <h2>Formulario de Ingreso</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="">
                    <span>Correo Electrónico:</span><br />
                    <input type="text" name="email"/>
                </label>
                <br />
                <label htmlFor="">
                    <span>Contraseña:</span><br />
                    <input type="password" name="password"/>
                </label>
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default Login;