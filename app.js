const pictureElements = [
    {
        "text": "deep earth",
        "picture": "https://github.com/RivaldoEsteban/loop-studios/blob/master/images/mobile/image-deep-earth.jpg?raw=true"
    },{
        "text": "night arcade",
        "picture": "https://github.com/RivaldoEsteban/loop-studios/blob/master/images/mobile/image-night-arcade.jpg?raw=true"
    },{
        "text": "soccer team vr",
        "picture": "https://github.com/RivaldoEsteban/loop-studios/blob/master/images/mobile/image-soccer-team.jpg?raw=true"
    },{
        "text": "the grid",
        "picture": "https://github.com/MishaHernandez/loopstudios-landing-page/blob/master/images/mobile/image-grid.jpg?raw=true"
    },{
        "text": "from up above vr",
        "picture": "https://github.com/MishaHernandez/loopstudios-landing-page/blob/master/images/mobile/image-from-above.jpg?raw=true"
    },{
        "text": "pocket borealis",
        "picture": "https://github.com/MishaHernandez/loopstudios-landing-page/blob/master/images/mobile/image-pocket-borealis.jpg?raw=true"
    },{
        "text": "the curiosity",
        "picture": "https://github.com/RivaldoEsteban/loop-studios/blob/master/images/mobile/image-curiosity.jpg?raw=true"
    },{
        "text": "make it fisheye",
        "picture": "https://github.com/RivaldoEsteban/loop-studios/blob/master/images/mobile/image-fisheye.jpg?raw=true"
    }
]

const imgSection = document.querySelector('.img-section');
for(let element of pictureElements){
    const newElement = document.createElement('div')
    const imgElement = document.createElement('img')
    const textElement = document.createElement('p')

    imgElement.src = element.picture
    textElement.textContent = element.text

    newElement.appendChild(imgElement)
    newElement.appendChild(textElement)

    imgSection.appendChild(newElement);
}

const footerMenu = document.querySelector('.footer-menu ul');
let menuElements = ['About', 'Careers', 'Events', 'Products', 'Support'];
for(let element of menuElements){
    let menuItem = document.createElement('a')
    menuItem.textContent = element
    menuItem.href = "#"
    footerMenu.appendChild(menuItem)
}