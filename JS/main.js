let quotes=["“In three words I can sum up everything I've learned about life: it goes on.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“A room without books is like a body without a soul.”",
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    "“Love all, trust a few, Do wrong to none: be able for thine enemy Rather in power than use; and keep thy friend Under thy own life's key: be check'd for silence, But never tax'd for speech.”"

]
let say=["― Robert Frost","― Mahatma Gandhi","― Albert Einstein","― Marcus Tullius Cicero","― J.K. Rowling","― William Shakespeare"]
let image=["images/7715.jpg","images/5810891.jpg","images/9810.jpg","images/13755.jpg","images/1077326.jpg","images/809482.jpg"]
let oldQuote;
let newQuote;
let backQuote=[]
function getQuote(){
    let container=``;
    do{
        oldQuote=Math.floor(Math.random()*say.length);
    }
    while(oldQuote==newQuote);
    newQuote=oldQuote;
    container=`
    <div>
        <div class="image rounded-circle overflow-hidden m-auto my-3">
            <img src="${image[oldQuote]}" class="w-100" alt="">
        </div>
        <p class="m-3 fw-semibold">${quotes[oldQuote]}
        </p>
        <span class="ms-auto fw-bolder">${say[oldQuote]}</span>
    </div>
    `
    document.getElementById("demo").innerHTML=container;
    backQuote.push(oldQuote);console.log(backQuote.length);console.log(backQuote[backQuote.length-1])
}
function backwardQuote(){
    if(backQuote.length!=0){
        container=`
        <div>
            <div class="image rounded-circle overflow-hidden m-auto my-3">
                <img src="${image[backQuote[backQuote.length-2]]}" class="w-100" alt="">
            </div>
            <p class="m-3 fw-semibold">${quotes[backQuote[backQuote.length-2]]}
            </p>
            <span class="ms-auto fw-bolder">${say[backQuote[backQuote.length-2]]}</span>
        </div>
        `
        document.getElementById("demo").innerHTML=container;
    }
    else{
        getQuote()
    }
    
}
function forwardQuote(){
    if(backQuote.length!=0){
        container=`
        <div>
            <div class="image rounded-circle overflow-hidden m-auto my-3">
                <img src="${image[backQuote[backQuote.length-1]]}" class="w-100" alt="">
            </div>
            <p class="m-3 fw-semibold">${quotes[backQuote[backQuote.length-1]]}
            </p>
            <span class="ms-auto fw-bolder">${say[backQuote[backQuote.length-1]]}</span>
        </div>
        `
        document.getElementById("demo").innerHTML=container;
    }
    else{
        getQuote()
    }
    
}

