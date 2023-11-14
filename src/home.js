import cerve1Png from './figma/beer1.png';
import cerve2Png from './figma/beer2.png';
import AppendMenu from './menu';
import AppendContact from './contact';


const contentDiv = document.getElementById('content');

let loadPage = (page) => {
    contentDiv.innerHTML = '';
    switch (page){
      case 'menu':
        AppendMenu(contentDiv);
        break;
      case 'contact':
        AppendContact(contentDiv);
        break;
    }
  }

function AppendHome(node) { 

    const section = document.createElement('section');
    section.id = 'home';
  
        const divCut1 = document.createElement('div');
        divCut1.classList.add('cut');
  
            const h1Greetings1 = document.createElement('h1');
            h1Greetings1.id = 'greetings1';
            h1Greetings1.textContent = 'Where Adventure Begins';
            divCut1.appendChild(h1Greetings1);
  
            const h1Greetings2 = document.createElement('h1');
            h1Greetings2.id = 'greetings2';
            h1Greetings2.textContent = 'And Stories Unfold';
            divCut1.appendChild(h1Greetings2);
  
            const imgCerve1 = document.createElement('img');
            imgCerve1.id = 'cerve1';
            imgCerve1.src = cerve1Png;
            imgCerve1.alt = '';
            divCut1.appendChild(imgCerve1);
        
            const imgCerve2 = document.createElement('img');
            imgCerve2.id = 'cerve2';
            imgCerve2.src = cerve2Png;
            imgCerve2.alt = '';
            divCut1.appendChild(imgCerve2);
  

        section.appendChild(divCut1);
  
    
        const divInfo = document.createElement('div');
        divInfo.id = 'info';
        divInfo.classList.add('info');
  
            const divSchedule = document.createElement('div');
            divSchedule.id = 'schedule';
            divSchedule.classList.add('info-block');
    
             
                const svgClock = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgClock.id = 'clock';
                svgClock.classList.add('info-icon');
                svgClock.setAttribute('fill', 'none');
                svgClock.setAttribute('viewBox', '0 0 100 125');

                const groupClock = document.createElementNS('http://www.w3.org/2000/svg', 'g')
                groupClock.classList.add('group');

                const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                                
                path1.setAttribute('d', 'M88.4,21c-0.2-0.6-0.8-0.9-1.4-0.9H76.9c-0.4,0-0.7,0.1-1,0.4L39.1,53.2c-0.5,0.4-0.6,1.1-0.4,1.7s0.8,1,1.4,1H54h28.7');

                const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path2.setAttribute('d', 'M90.6,55.8c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H95c-0.7-7.1-6.4-13.3-15.2-17.7L65,49.8h17.8c2.5,0,4.5,2,4.5,4.5 s-2,4.5-4.5,4.5H40.1c-1.9,0-3.6-1.2-4.2-2.9c-0.7-1.7-0.2-3.7,1.2-5l24.1-21.5c-3.1-0.5-6.4-0.7-9.7-0.8v4.4 c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5v-4.4C25.2,29.1,6.3,39.6,5,52.8h4.4c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5H5 C6.3,69,25.2,79.5,48.5,79.9v-4.4c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v4.4C74.8,79.5,93.7,69,95,55.8 C95,55.8,90.6,55.8,90.6,55.8z');
                
                groupClock.appendChild(path1);
                groupClock.appendChild(path2);
                svgClock.appendChild(groupClock);
                
                const h3Schedule = document.createElement('h3');
                h3Schedule.classList.add('info-text');
                h3Schedule.innerHTML = 'Mon-Thurs: 8am-8pm<br>Fri-Sun: 8am-11pm';
  
            divSchedule.appendChild(svgClock);
            divSchedule.appendChild(h3Schedule);

        divInfo.appendChild(divSchedule);


            const divLocation = document.createElement('div');
            divLocation.id = 'location';
            divLocation.classList.add('info-block');
    
             
                const svgSign = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgSign.id = 'sign';
                svgSign.classList.add('info-icon');
                svgSign.setAttribute('fill', 'none');
                svgSign.setAttribute('viewBox', '0 0 32 40');

                const path1Sign = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                                
                path1Sign.setAttribute('d', 'M18,20.5h-4V30c0,0.3,0.2,0.5,0.5,0.5h3c0.3,0,0.5-0.2,0.5-0.5V20.5z M9.5,14C9.2,14,9,14.2,9,14.5v5C9,19.8,9.2,20,9.5,20h16.1c0.1,0,0.2,0,0.3-0.1l2.9-2.5C29,17.3,29,17.1,29,17c0-0.1-0.1-0.3-0.2-0.4l-2.9-2.5C25.8,14,25.7,14,25.6,14C25.6,14,9.5,14,9.5,14z M18,13.5h-4V12h4V13.5z M23,6c0-0.3-0.2-0.5-0.5-0.5H6.4c-0.1,0-0.2,0-0.3,0.1L3.1,8.1C3,8.2,3,8.4,3,8.5C3,8.6,3,8.8,3.1,8.9l2.9,2.5c0.1,0.1,0.2,0.1,0.3,0.1h16.1c0.3,0,0.5-0.2,0.5-0.5C23,11,23,6,23,6zM14,5h4V4c0-0.1,0-0.2-0.1-0.3l-1.5-2c-0.1-0.1-0.2-0.2-0.4-0.2s-0.3,0.1-0.4,0.2l-1.5,2C14,3.8,14,3.9,14,4V5z');

                svgSign.appendChild(path1Sign);
                
                const h3Location = document.createElement('h3');
                h3Location.classList.add('info-text');
                h3Location.innerHTML = 'On the cross-roads of the <br> Greenway and Great East Road';
  
            divLocation.appendChild(svgSign);
            divLocation.appendChild(h3Location);
  
        divInfo.appendChild(divLocation);

    section.appendChild(divInfo);


    const divSticker = document.createElement('div');
    divSticker.id = 'sticker';

        const svgDonut = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgDonut.id = 'letterDonut';
        svgDonut.setAttribute('fill', 'transparent');

            const svgDonutCircle = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            /*
            svgDonutCircle.id = 'circle';
            */
            svgDonutCircle.setAttributeNS(null, 'id', 'circle');
            svgDonutCircle.setAttribute('d', 'M0,75.5A75.5,75.5 0 1,1 151,75.5A75.5,75.5 0 1,1 0,75.5');

            const svgDonutText = document.createElementNS('http://www.w3.org/2000/svg', 'text');

                const svgDonutTextPath = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');
                svgDonutTextPath.classList.add('stickerText');
                svgDonutTextPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#circle");
                svgDonutTextPath.setAttribute('startOffset', '5px');
                svgDonutTextPath.textContent = 'The Finest Ales in Middle Earth, from Bree to Rivendell';

                svgDonutText.appendChild (svgDonutTextPath);

            svgDonut.appendChild(svgDonutCircle);
            svgDonut.appendChild(svgDonutText);

        divSticker.appendChild(svgDonut);

        const svgBeer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgBeer.id = 'iconBeer';
        svgBeer.setAttribute('viewBox', '0 0 100 125');
            const svgBeerPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            svgBeerPath.setAttribute('d', 'M36.5,13.3c-1.5-2.4-4.4-3.6-7.2-3c-2.5,0.5-4.7,2.4-5.4,4.9c-0.3,0.9-0.4,1.9-0.2,2.8c-0.6,0-1.2,0.1-1.7,0.3c-1.8,0.6-3.2,2.1-3.5,4c-0.3,1.6,0.1,3.2,1.1,4.4c1,1.2,2.5,1.9,4.1,1.9h0.1l-0.5,6h-1c-0.5,0-0.9,0.4-1,0.9L20.7,41c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.7,0.3h1l-1.9,25H20c-0.5,0-0.9,0.4-1,0.9l-0.6,5.5c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.7,0.3h0.8l-0.6,8.1h-1.2c-0.6,0-1,0.4-1,1V89c0,0.6,0.4,1,1,1H75c0.6,0,1-0.4,1-1v-5.3c0-0.6-0.4-1-1-1h-1.2l-0.6-8.1H74c0.3,0,0.6-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.8l-0.2-1.7c4.8-0.4,8.5-4.4,8.5-9.3V40.6c0-5.2-4.2-9.3-9.3-9.3h-4.1l-0.2-3c0.9-0.3,1.7-0.7,2.3-1.4c1-1.1,1.6-2.6,1.5-4.2c-0.1-2.3-1.6-4.4-3.7-5.2c-0.1-1.7-0.9-3.4-2.2-4.6c-1.3-1.2-3-1.9-4.9-1.8c-1.8,0.1-3.5,0.9-4.8,2.2c-1.7-0.9-3.7-0.8-5.4,0c-1.4-2.2-4-3.4-6.7-3.1c-1.9,0.2-3.6,1.2-4.8,2.8C39.6,12.4,37.9,12.6,36.5,13.3zM25.6,28.6h3.5c0.7,0,1.4,0.6,1.4,1.4v4.6h-5.3L25.6,28.6z M23,36.5h7.5V40h-7.8L23,36.5z M24.6,42h6.1c0.6,2.4,2.8,4.3,5.4,4.3s4.8-1.8,5.4-4.3h5.8v16.3c0,0.6,0.4,1,1,1s1-0.4,1-1V42h11.4v6.6c0,0.6,0.4,1,1,1s1-0.4,1-1V42h5.8l1.9,25H22.7L24.6,42zM67.7,28.6l0.5,6H63v-6C63,28.6,67.7,28.6,67.7,28.6z M41.8,40v-3.5h28.5l0.4,3.5H41.8z M60.9,34.5H49.4v-6h11.4L60.9,34.5L60.9,34.5z M47.4,34.5h-5.7v-4.6c0-0.7,0.6-1.4,1.4-1.4h4.3V34.5z M20.8,69h51.7l0.4,3.5H20.4L20.8,69z M74,87.8H19.3v-3.3H74V87.8z M71.8,82.6H21.5l0.6-8.1h11.2V80c0,0.6,0.4,1,1,1s1-0.4,1-1v-5.6h25.6V80c0,0.6,0.4,1,1,1s1-0.4,1-1v-5.6h8.3L71.8,82.6z M74,33.3c4,0,7.3,3.3,7.3,7.3v21.8c0,3.8-3,7-6.7,7.3l-0.2-1.8c-0.1-0.5-0.5-0.9-1-0.9h-0.8l-1.9-25h1c0.3,0,0.6-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.8l-0.6-5.5c-0.1-0.5-0.5-0.9-1-0.9h-1L70,33.3H74z M41,15.1c0.5,0.3,1.1,0.1,1.3-0.4c0.8-1.4,2.2-2.3,3.8-2.5c2.2-0.2,4.3,1,5.2,3c0.1,0.3,0.4,0.5,0.7,0.6s0.6,0,0.9-0.2c1.3-1.1,3.3-1.2,4.7-0.1c0.2,0.2,0.5,0.2,0.8,0.2s0.5-0.2,0.7-0.4c0.9-1.3,2.2-2,3.8-2.1c1.3,0,2.5,0.4,3.4,1.3c0.9,0.9,1.5,2.1,1.5,3.3c0,0.1,0,0.3,0,0.4c0,0.5,0.3,0.9,0.8,1c1.7,0.4,2.9,1.9,2.9,3.6c0,1.1-0.3,2.1-1,2.8c-0.7,0.7-1.6,1.1-2.8,1.1H43.1c-1.8,0-3.4,1.5-3.4,3.4v10.7c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6V29.9c0-1.8-1.5-3.4-3.4-3.4h-5.6c-1,0-1.9-0.4-2.5-1.2c-0.6-0.8-0.9-1.7-0.7-2.7c0.2-1.1,1.1-2.1,2.2-2.4c0.3-0.1,0.7-0.2,1-0.2c0.4,0,0.7,0.1,1.1,0.2s0.8,0,1-0.2c0.3-0.3,0.4-0.7,0.2-1c-0.4-1-0.4-2.1-0.1-3.2c0.5-1.8,2-3.2,3.8-3.5c2.3-0.4,4.6,0.8,5.6,2.9c0.1,0.3,0.4,0.5,0.7,0.6s0.6,0,0.9-0.2C38,14.6,39.7,14.4,41,15.1z');

            svgBeer.appendChild(svgBeerPath);
            svgBeer.addEventListener("click", () => loadPage('menu'));

        divSticker.appendChild(svgBeer);

    section.appendChild(divSticker);

    const divCut2 = document.createElement('div');
    divCut2.classList.add('cut');

        const divCallToAction = document.createElement('div');
        divCallToAction.id ='callToAction';

            const svgCallToAction = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgCallToAction.id = 'reservation';
            
                const svgCallToActionPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                svgCallToActionPath.setAttributeNS(null, 'id', 'curve');
                svgCallToActionPath.setAttribute('d', 'M34.4999 1C-2.0001 14.5 -11 91.5 21.4999 123');
                svgCallToActionPath.setAttribute('fill', 'transparent');

                const svgCallToActionText = document.createElementNS('http://www.w3.org/2000/svg', 'text');

                    const svgCallToActionTextPath = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');
                    svgCallToActionTextPath.classList.add('actionText');
                    svgCallToActionTextPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#curve");
                    svgCallToActionTextPath.textContent = 'Order Now';

                    svgCallToActionText.appendChild(svgCallToActionTextPath);
                
                svgCallToAction.appendChild(svgCallToActionPath);
                svgCallToAction.appendChild(svgCallToActionText);

            divCallToAction.appendChild(svgCallToAction);

            divCallToAction.addEventListener("click", () => loadPage('contact'))

        divCut2.appendChild(divCallToAction);

    section.appendChild(divCut2);

node.appendChild(section);
}

export default AppendHome;