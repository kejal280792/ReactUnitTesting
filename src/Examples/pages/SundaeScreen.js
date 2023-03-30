import { useState } from 'react';
import Container from 'react-bootstrap/Container';

import OrderConfirmation from './OrderConfirmation';
import OrderEntry from './OrderEntry';
import OrderSummary from './OrderSummary';

import { OrderDetailsProvider } from '../contexts/OrderDetails';

export default function SundaeScreen() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = useState('inProgress');

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'completed':
      Component = OrderConfirmation;
      break;
    default:
  }

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}
