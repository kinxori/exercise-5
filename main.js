const divIcons = document.querySelector('.icons');
const hyperlinks = divIcons.querySelectorAll('a');







function addAnimationDelay(node, index){


    node.style.opacity = 1;
    node.classList.add('scale-delay');
    node.style = "--animationDelay:" + index;
    
    console.log(node + index)

    
    
    
}

hyperlinks.forEach(addAnimationDelay)

