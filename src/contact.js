import map from './figma/Bree map.jpg'
import pin from './figma/Google_Maps_pin.svg.png'

function AppendContact(node) {

    const section = document.createElement('div');
    section.id = 'contact';

        const divForm = document.createElement('div');
        divForm.id = 'divForm';

            const title = document.createElement('h2');
            title.innerHTML = 'Need to get in touch with The Prancing Pony?';
            divForm.appendChild(title);

            const subtitle = document.createElement('h3');
            subtitle.innerHTML = "We've harnessed the ancient art of Raven Messenger Service to ensure your inquiries and messages reach us in a most enchanting and authentic manner. Just compose your message below, and one of our trained ravens will promptly deliver it to our tavern.";
            divForm.appendChild(subtitle);

            const disclaimer = document.createElement('p');
            disclaimer.innerHTML = "*Please allow a bit of time for our feathered friends to wing their way to us. We'll get back to you as swiftly as the winds of Middle-earth allow."
            divForm.appendChild(disclaimer);

            const form = document.createElement('form');
            form.id = 'form';

                const labelName = document.createElement('label');
                labelName.innerHTML = 'Name';

                const inputName = document.createElement('input');
                inputName.id = 'inputName';
                labelName.htmlFor = 'inputName';
                inputName.placeholder = 'Bilbo Baggins';
                form.appendChild(labelName);
                form.appendChild(inputName);

                const labelEmail = document.createElement('label');
                labelEmail.innerHTML = 'Email';

                const inputEmail = document.createElement('input');
                inputEmail.id = 'inputEmail';
                labelEmail.htmlFor = 'inputEmail';
                inputEmail.type = 'email';
                inputEmail.placeholder = 'bilbo.baggins@shiremail.com';
                form.appendChild(labelEmail);
                form.appendChild(inputEmail);

                const labelMessage = document.createElement('label');
                labelMessage.innerHTML = 'Message';
                

                const inputMessage = document.createElement('textarea');
                inputMessage.id = 'inputMessage';
                labelMessage.htmlFor = 'inputMessage';
                inputMessage.placeholder = 'Esteemed Innkeeper, Bilbo Baggins here, seeking lodging for myself and twelve dwarven companions at The Prancing Pony tomorrow. A private corner or chamber for our party would be splendid. Your swift confirmation is much appreciated. Best regards, Bilbo'; 
                form.appendChild(labelMessage);
                form.appendChild(inputMessage);

            divForm.appendChild(form);

        section.appendChild(divForm);

        const divMap = document.createElement('div');
        divMap.id = 'divMap';

            const MapContainer = document.createElement('div');
            MapContainer.id = 'mapContainer'; 

                const divMapText = document.createElement('div');
                divMapText.id = 'divMapText';

                    const MapTitle = document.createElement('h2');
                    MapTitle.innerHTML = 'Where are we?';

                    const MapSubTitle = document.createElement('h3');
                    MapSubTitle.innerHTML = 'On the cross-roads of the Greenway and Great East Road';

                    divMapText.appendChild(MapTitle);
                    divMapText.appendChild(MapSubTitle);

                MapContainer.appendChild(divMapText);

                const divMapImg = document.createElement('div');
                divMapImg.id = 'map';
                    const MapImg = document.createElement('img');
                    MapImg.src = map;
                    MapImg.id = 'mapImg';
                    const PinImg = document.createElement('img');
                    PinImg.src = pin;
                    PinImg.id = 'pinImg';
                    divMapImg.appendChild(MapImg);
                    divMapImg.appendChild(PinImg);
                MapContainer.appendChild(divMapImg);

            divMap.appendChild(MapContainer)

        section.appendChild(divMap);

    node.appendChild(section);
}

export default AppendContact;