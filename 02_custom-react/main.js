//creating a custom-react library


const container = document.getElementById('root')


function customRender (reactElement, container) {
    const newElement = document.createElement(reactElement.type)
    // newElement.setAttribute('href', reactElement.props.href)
    // newElement.setAttribute('target', reactElement.props.target)
    // newElement.innerHTML = reactElement.children
    // container.appendChild(newElement)
    

   for (const props in reactElement.props) {
      
      newElement.innerHTML = reactElement.children

    if (props === 'children') continue

    newElement.setAttribute(props, reactElement.props[props])
       
   }

    container.appendChild(newElement)
}

const reactElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
       
    },
    children: 'click me to go to google'
}



//customRender (reactElement, container)




function customRender2(reactElement2, container) {
    const newElement2 = document.createElement(reactElement2.type)

    for (const [key, value] of Object.entries(reactElement2.props)) {
        if (key.startsWith('on') && typeof value === 'function') {
            // Add event listener
            const event = key.slice(2).toLowerCase()
            newElement2.addEventListener(event, value)
        } else if (key === 'style' && typeof value === 'object') {
            // Set styles
            Object.assign(newElement2.style, value)
        } else {
            // Set other attributes
            newElement2.setAttribute(key, value)
        }
    }

    newElement2.innerHTML = reactElement2.children
    container.appendChild(newElement2)
}

const reactElement2 = {
    type: 'button',
    props: {
        onClick: () => {
            console.log('clicked')
        },
        style: {
            backgroundColor: 'red'
        }
    }, 
    children: 'click me'
}

//customRender2(reactElement2, container)



// ADDING MULTIPLE ELEMENTS IN A REACT APP


function customRender3(reactElements, container) {
    // If reactElements is an array, loop through each element and render
    //console.log(reactElements);
    
    if (Array.isArray(reactElements)) {

        reactElements.forEach((element) => {
            customRender(element, container);
            
             //console.log("rendered",element);
            console.log("rendered",reactElements);
            
                return ;
            
            })
    }
    

    // Create the new DOM element
    const newElement = document.createElement(reactElements.type);
    
    // Dynamically add all props
    for (let prop in reactElements.props) {
        newElement.setAttribute(prop, reactElements.props[prop]);
    }

    // If children is an array, render them recursively
    if (Array.isArray(reactElements.children)) {
        reactElements.children.forEach(child => customRender(child, newElement));
    } else {
        newElement.textContent = reactElements.children; // If single text node
    }

    container.appendChild(newElement);
}


const reactElements = [
    {
        type: 'h1',
        props: { style: "color: red;" },
        children: "Hello, World!"
    },
    {
        type: 'p',
        props: { style: "font-size: 18px;" },
        children: "This is a custom React-like renderer."
    },
    {
        type: 'button',
        props: { onclick: "alert('Clicked!')", style: "padding: 10px; background: blue; color: white;" },
        children: "Click Me"
    }
];
 


customRender3(reactElements, container)





