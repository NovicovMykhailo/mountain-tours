import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox = modal]', {
  fullScreen: {
    requestOnStart: true,
  },
  
});

Fancybox.bind('[data-fancybox = tour]', {
  fullScreen: {
    requestOnStart: true,
  },
});


