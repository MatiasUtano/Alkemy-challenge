function Login(){
    return (
        <>
            <h2>Formulario de Ingreso</h2>
            <form>
                <label htmlFor="">
                    <span>Correo Electrónico:</span><br />
                    <input type="email" name="email" id="" />
                </label>
                <br />
                <label htmlFor="">
                    <span>Contraseña:</span><br />
                    <input type="password" name="password" id="" />
                </label>
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default Login;