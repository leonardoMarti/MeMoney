import entries from "../../assets/entries.svg";
import output from "../../assets/output.svg";
import total from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  function handleCurreny(amount: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  }

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw -= transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    { deposit: 0, withdraw: 0, total: 0 }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entries} alt="entries" />
        </header>
        <strong>{handleCurreny(summary.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={output} alt="output" />
        </header>
        <strong>{handleCurreny(summary.withdraw)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>{handleCurreny(summary.total)}</strong>
      </div>
    </Container>
  );
}
