import React from "react";
import Button from "./components/button.jsx"; // importa o botão

function App() {
  const handleClick = (msg) => {
    alert(`Você clicou em: ${msg}`);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
    }}>
      <h1>Botões Reutilizáveis</h1>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
        <Button onClick={() => handleClick("Padrão")}>Padrão</Button>
        <Button onClick={() => handleClick("Confirmar")} styleType="primary">Confirmar</Button>
        <Button onClick={() => handleClick("Deletar")} styleType="danger">Deletar</Button>
        <Button onClick={() => handleClick("Sucesso")} styleType="success">Sucesso</Button>
      </div>
    </div>
  );
}

export default App;
