import axios from 'axios';
import swAlert from '@sweetalert/with-react'

function Login(){

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        console.log(regexEmail.test(email));

        if(email === '' || password === ''){
            swAlert(<h2>Los campos no se pueden enviar vacios</h2>);
            return;
        }

        if(email !== '' && !regexEmail.test(email)){
            swAlert(<h2>Debes ingresar una direccion de email valida</h2>);
            return;
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swAlert(<h2>Credenciales invalidas</h2>);
            return;
        }

        axios.post('http://challenge-react.alkemy.org', {email, password}).then(response => {
            swAlert(<h2>Perfecto, ingresaste correctamente</h2>)
                console.log(response.data);
                const token = response.data.token;
                localStorage.setItem('token', token);
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