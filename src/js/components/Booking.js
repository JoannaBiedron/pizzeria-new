import {select, templates} from '../settings.js';
import AmountWidget from './AmountWidget.js';
//import {app} from '../app.js';

class Booking{
  constructor(){
    const thisBooking = this;

    thisBooking.render();
    thisBooking.initWidgets();
  }
  render(){
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();
    console.log('generatedHTML', generatedHTML);

    thisBooking.dom = {};
    thisBooking.dom.wrapper = {};
    //console.log('thisBooking.dom.wrapper', thisBooking.dom.wrpper);
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
  }
  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

  }
}
export default Booking;
