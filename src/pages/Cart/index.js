import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';


function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            {/* <th /> */}
            <th>Produto</th>
            <th>Subtotal</th>
            <th>QTD</th>
            {/* <th /> */}
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>
                <img src="https://images4.kabum.com.br/produtos/fotos/107964/teclado-mecanico-gamer-t-dagger-bora-rgb-switch-outemu-brown-pt-t-tgk315-brown_1581357057_gg.jpg" alt="teclado" />
                
              </td>
              <td>
                <strong>Teclado Mecânico</strong>
                <span>R$250,00</span>
              </td>
              <td>
                <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#d60202"/>
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#d60202"/>
                </button>
                </div>
              </td>
              <td>
                <strong>R$500,00</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#d60202"/>
                </button>
              </td>
            </tr>
          </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
      
      <Total>
        <span>Total</span>
        <strong>R$500,00</strong>
      </Total>
      </footer>

    </Container>
  );
}

export default Cart;