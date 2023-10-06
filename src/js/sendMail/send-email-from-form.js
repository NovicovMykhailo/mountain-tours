import orderEmail from './order-mail'
import { Email } from '../smtp';
import Notiflix from 'notiflix';
import { Fancybox } from '@fancyapps/ui';



const modalForm = document.querySelector('#modal-form');

modalForm?.addEventListener('submit', handleSubmit);


function handleSubmit(e) {
  e.preventDefault();



  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'mikenovicov@gmail.com',
    Password: '2FBFB5B5CE882236870128C69FD7EA81C786',
    To: 'xodof51627@htoal.com',
    From: 'mikenovicov@gmail.com',
    Subject: 'Customer Order ->',
    Body: orderEmail(e.target),

  }).then(message => {
    modalForm.reset();
    Fancybox.close()
    if (message === 'OK') {
      Notiflix.Notify.success(
        'Thank you for contacting us, our manager will call you back as soon as possible'
      );
    } else {
      Notiflix.Notify.info(message);
    }
  });
}
