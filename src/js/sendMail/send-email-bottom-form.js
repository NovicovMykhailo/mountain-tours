import requestMail from './request-mail';
import { Email } from '../smtp';
import Notiflix from 'notiflix';



const bottomForm = document.querySelector('#bottomForm');

bottomForm?.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'mikenovicov@gmail.com',
    Password: '2FBFB5B5CE882236870128C69FD7EA81C786',
    To: 'mikenovicov@gmail.com',
    From: 'b9392265327c7f@lamasticots.com',
    Subject: 'Customer request ->',
    Body: requestMail(e.target.children),
  }).then(message => {
    bottomForm.reset();
    if (message === 'OK') {
      Notiflix.Notify.success(
        'Thank you for contacting us, our manager will call you back as soon as possible'
      );
    } else {
      Notiflix.Notify.info(message);
    }
  });
}
