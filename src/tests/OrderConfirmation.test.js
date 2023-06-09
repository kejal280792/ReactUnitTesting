import { render, screen } from '../Examples/utilities/testing-library-utils';
import { server } from '../Examples/mocks/server';
import { rest } from 'msw';

import OrderConfirmation from '../Examples/pages/OrderConfirmation';

test('error response from server for submitting order', async () => {
  // override default msw response for options endpoint with error response
  server.resetHandlers(
    rest.post('http://localhost:3030/order', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderConfirmation />);

  const alert = await screen.findByRole('alert');
  expect(alert).toHaveTextContent(
    'An unexpected error occurred. Please try again later.'
  );
});
