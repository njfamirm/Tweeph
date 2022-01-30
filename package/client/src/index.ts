import './page/tweeph-home-page.ts';
import './components/tweeph-footer.ts';
import './components/tweeph-header.ts';

import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  const route = new Router(document.querySelector('main'));
  route.setRoutes([
    {
      path: '/',
      component: 'tweeph-home-page',
    },
    {
      path: '/generate',
      component: 'tweeph-generate-page',
      action: () => {
        import('./page/tweeph-generate-page');
      },
    },
  ]);
});
