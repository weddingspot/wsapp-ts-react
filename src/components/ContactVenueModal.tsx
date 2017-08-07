import * as React from 'react';
import Calendar from './Calendar';

export interface Props {
    isOpen: boolean;
    name: string;
    id: number;
}

export function ContactVenueModal({isOpen, name, id}: Props) {
    return (
        <div className="Modal" >
            <div className="Modal--body">
                <a href="#" className="Modal--close-link">
                    <i className="fa fa-times" />
                </a>
                <form action="#" className="VenueDetails--contact">
                    <h3 className="VenueDetails--contact-headline">Contact {name}</h3>

                    <label className="Label" htmlFor="VenueDetails--contact-reason">
                        Reason form contacting {name}:
                    </label>
                    <select className="Select mb-15" name="reason" id="VenueDetails--contact-reason">
                        <option value="">Select</option>
                        <option value="1">Need pricing information</option>
                        <option value="2">Checking date availability</option>
                        <option value="3">Need wedding packet</option>
                        <option value="4">General venue question</option>
                        <option value="5">Other</option>
                    </select>

                    <label className="Label" htmlFor="VenueDetails--contact-phone">
                        Phone number:
                    </label>
                    <input
                        type="text"
                        className="TextInput w-100 mb-15"
                        name="phone"
                        id="VenueDetails--contact-phone"
                    />

                    <label htmlFor="" className="Label">Preferred Wedding Date:</label>
                    <Calendar yearsRange={[2017, 2018, 2019]} minDate={[]} />

                    <label htmlFor="" className="Label mt-15">Leave a message:</label>
                    <textarea name="message" id="" cols={30} rows={5} className="TextArea w-100" />
                    <div className="clearfix">
                        <button className="Button Button--pink mt-15 fl-r">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactVenueModal;