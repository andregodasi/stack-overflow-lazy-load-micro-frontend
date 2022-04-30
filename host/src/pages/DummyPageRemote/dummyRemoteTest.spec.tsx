import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-named-as-default
import DummyPageRemote from '.';

describe('Dummy test Remote', () => {
  it('should render the page', () => {
    const { getByText } = render(<DummyPageRemote />);

    expect(getByText(/Dummy Page Remote/i)).toBeInTheDocument();
  });
});
