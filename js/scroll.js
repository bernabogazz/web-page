const targets = document.querySelectorAll('target')

const options = {
    threshold:0.3
}

const callBack = (entiries)=> {
    entiries.forEach((entry) => {
        console.log(entry)
    });
}
const observer = new IntersectionObserver(callBack, options);

targets.forEach((target) =>{
    observer.observe(target)
})