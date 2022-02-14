import { useState } from "react";
import logo from "../../assets/dollarSign.svg";
import { Container, Content } from "./styles";

interface Props {
  onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: Props) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="memoney" />
        <button type="button" onClick={onOpenTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
