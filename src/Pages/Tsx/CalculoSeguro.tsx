import { useState } from "react";
import "../css/CalculoSeguro.css";

function CalculoSeguro() {
  const [anoVeiculo, setAnoVeiculo] = useState("");
  const [valorBase, setValorBase] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularDesconto() {
    const anoAtual = new Date().getFullYear();
    const ano = Number(anoVeiculo);
    const idadeCarro = anoAtual - ano;
    const valor = Number(valorBase);

    if (!anoVeiculo || !valorBase) {
      setResultado("Preencha o ano do veículo e o valor base do seguro.");
      return;
    }

    if (anoVeiculo.length !== 4 || idadeCarro < 0 || valor <= 0) {
      setResultado("Informe um ano válido e um valor base maior que zero.");
      return;
    }

    const valorFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    if (idadeCarro > 10) {
      const valorFinal = valor * 0.8;

      const valorFinalFormatado = valorFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      setResultado(
        `Veículo com ${idadeCarro} anos. Desconto de 20% aplicado sobre o valor base. Valor final: ${valorFinalFormatado}.`
      );
    } else {
      setResultado(
        `Veículo com ${idadeCarro} anos. Sem desconto aplicado. Valor final: ${valorFormatado}.`
      );
    }
  }

  return (
    <div className="calculo-seguro-card">
      <div className="calculo-seguro-icone">%</div>

      <h3>Calcule seu desconto</h3>

      <p>
        Simule o desconto informando o ano do veículo e o valor base do seguro.
      </p>

      <input
        type="text"
        placeholder="Ano do veículo"
        maxLength={4}
        value={anoVeiculo}
        onChange={(e) => setAnoVeiculo(e.target.value.replace(/\D/g, ""))}
      />

      <input
        type="text"
        placeholder="Valor base do seguro"
        value={valorBase}
        onChange={(e) => setValorBase(e.target.value.replace(/\D/g, ""))}
      />

      <button onClick={calcularDesconto}>Calcular desconto</button>

      {resultado && <strong className="resultado">{resultado}</strong>}
    </div>
  );
}

export default CalculoSeguro;