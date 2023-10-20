import orderEmail from './order-mail';
import { Email } from '../smtp';
import Notiflix from 'notiflix';
import { Fancybox } from '@fancyapps/ui';

const modalForm = document.querySelector('#modal-form');

modalForm?.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (
    e.target.children[2].children.hoverla.checked ||
    e.target.children[3].children.skiBukovel.checked ||
    e.target.children[4].children.weekInCarpatians.checked
  ) {
     Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'mikenovicov@gmail.com',
      Password: '2FBFB5B5CE882236870128C69FD7EA81C786',
      To: 'mikenovicov@gmail.com',
      From: 'b9392265327c7f@lamasticots.com',
      Subject: 'Customer Order ->',
      Body: orderEmail(e.target),
    }).then(message => {
      modalForm.reset();
      Fancybox.close();
      if (message === 'OK') {
        Notiflix.Notify.success(
          'Thank you for contacting us, our manager will call you back as soon as possible'
        );
      } else {
        Notiflix.Notify.info(message);
      }
    });
  } else {
    modalForm?.addEventListener('click', handleClick);
    toggleChackboxes();
    Notiflix.Notify.info('Please select a tour');
  }
}

function toggleChackboxes() {

  modalForm.children[2].children[1].classList.toggle('invalid');
  modalForm.children[3].children[1].classList.toggle('invalid');
  modalForm.children[4].children[1].classList.toggle('invalid');
}

function handleClick(e) {
  if ( e.target.type === 'checkbox'
  ) {
    modalForm.removeEventListener('click', handleClick);
    toggleChackboxes(e);
  } else {
    return;
  }
}
