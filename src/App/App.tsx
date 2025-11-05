import 'braid-design-system/reset';

import { BraidProvider, Hidden } from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { StrictMode } from 'react';

export const App = () => (
  <StrictMode>
    <BraidProvider theme={seekJobs}>
      <Hidden below="tablet">Hello world (greater than tablet)</Hidden>
    </BraidProvider>
  </StrictMode>
);
