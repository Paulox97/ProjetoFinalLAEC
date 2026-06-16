import { Link } from "react-router-dom";
import "../styles/Login.css";

export function Login() {
    return (
        <div className="login-container">
            <h2>Iniciar sessão</h2>
                <form action="#" method="post" className="login-form">
                    <div className="form-group-1">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="exemplo@provedor.com.br" />
                    </div>
                    <div className="form-group-1">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" />
                    </div>
                    <Link to="/" className="btn btn-outline-danger btn-sessao">INICIAR SESSÃO</Link>
                </form>

            <div className="text-center">
                <p>Não possui uma conta ainda? </p>
                <Link to="/" className="btn btn-outline-danger btn-conta">Criar uma conta</Link>
            </div>
        </div>

    )
}

export default Login