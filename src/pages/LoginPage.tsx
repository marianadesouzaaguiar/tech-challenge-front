import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Login() { // Adicionado a declaração da função do componente

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e : any) => {
        e.preventDefault();
        // Simulação de login (substituir por chamada à API real)
        if (username === "admin" && password === "1234") {
            login({ username });
            navigate("/admin");
        } else {
            alert("Credenciais inválidas");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Usuário"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
    );
}

export default Login;