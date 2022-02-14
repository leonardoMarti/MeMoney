import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  function handleCurreny(amount: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  }

  function handleDateFormat(date: Date) {
    return new Intl.DateTimeFormat("pt-BR").format(date);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map((item, index) => (
            <tr key={index}>
              <td>{item?.title}</td>
              <td className={item.type}>{handleCurreny(item?.amount)}</td>
              <td>{item?.category}</td>
              <td>{handleDateFormat(new Date(item?.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
