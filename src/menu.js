import drink1 from './figma/drink1.png'
import drink2 from './figma/drink2.png'
import drink3 from './figma/drink3.png'
import drink4 from './figma/drink4.png'
import drink5 from './figma/drink5.png'
import drink6 from './figma/drink6.png'

function AppendMenu(node) {

function CreateItem(img, text, theme, node){

    const productContainer = document.createElement('div');
    productContainer.classList.add('productContainer');
    productContainer.classList.add(theme);

        const productImg = document.createElement('img');
        productImg.classList.add ('productImg');
        productImg.src = img;
        
        productContainer.appendChild(productImg);

        const message = document.createElement ('div');
        message.classList.add ('message');

            const productText = document.createElement('p');
            productText.classList.add ('productText');
            productText.innerHTML = text;

            message.appendChild(productText);

        productContainer.appendChild(message);

    node.appendChild(productContainer);

}

    const section = document.createElement('div');
    section.id = 'menu';
    
        const greetings = document.createElement('h2');
        greetings.classList.add('title2');
        greetings.innerHTML = 'Our drinks';
        section.appendChild(greetings);

        const separation1 = document.createElement('hr');
        separation1.classList.add('separation');
        section.appendChild(separation1);

        const productGrid = document.createElement('div');
        productGrid.classList.add('productGrid');

            CreateItem(drink1, '<b>Prancing Pony Punch</b><br> A hearty and robust punch named after your tavern. It includes dark rum, spiced apple cider, and a hint of ginger, perfect for those seeking a strong and flavorful option.', 'dark', productGrid);
            CreateItem(drink2, '<b>Lothlórien Blossom</b><br> A delicate and floral cocktail inspired by the elven realm of Lothlórien. It blends elderflower liqueur, gin, and a splash of sparkling water, creating a light and enchanting drink.', 'light', productGrid);
            CreateItem(drink3, "<b>Ent's Ambrosia</b><br> A green, earthy drink that pays homage to the ancient Ents. This concoction features green Chartreuse, gin, and a touch of fresh basil, offering a unique blend of herbal and citrus notes.", 'dark', productGrid);
            CreateItem(drink4, '<b>Rohan Thunderbolt</b><br> A powerful and energizing drink inspired by the Riders of Rohan. This beverage combines spiced rum, coffee liqueur, and a shot of espresso, delivering a caffeine kick fit for warriors.', 'light', productGrid);
            CreateItem(drink5, '<b>Hobbiton Applejack</b><br> A sweet and apple-infused beverage that captures the essence of the Shire. It combines apple brandy, apple cider, and a sprinkle of cinnamon for a warm and cozy flavor.', 'dark', productGrid);
            CreateItem(drink6, '<b>Misty Mountain Elixir</b><br> A frothy, blue-tinged cocktail reminiscent of the Misty Mountains. It combines blue curaçao, coconut cream, and a hint of elderflower liqueur for an enchanting and refreshing flavor', 'light', productGrid);

        section.appendChild(productGrid);


node.appendChild(section);
}

export default AppendMenu;