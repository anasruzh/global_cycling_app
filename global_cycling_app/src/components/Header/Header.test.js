/* eslint-disable testing-library/prefer-screen-queries */
import { render} from '@testing-library/react';
import Header from './Header';

describe('<HeaderComponent />', () => {
  const Component = (
    <Header />
      
  );

  it('renders the text', () => {
    const { getByText } = render(Component);
    expect(getByText('Welcome to CGN')).toBeInTheDocument();
  });
});