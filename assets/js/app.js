var cl = console.log;

const accoHeads = [...document.querySelectorAll('.accodHeadding')]///node list created are converted into 



    const onHeadclick =(eve)=>{
    accoHeads.forEach(head=>{
    head.classList.remove('active')
    })    
    eve.target.classList.add('active')
 
    }

    accoHeads.forEach(heading=>{
        // cl(heading)
        heading.addEventListener('click', onHeadclick)
    })

