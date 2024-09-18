const suggestions = [
    "Channel","CodingLab","CodingNepal","YouTube","YouTuber","YouTube Channel","Blogger","Bollywood",
    "Vlogger","Vechiles","Facebook","Freelancer","Facebook Page","Designer","Developer","Web Designer",
    "Web Developer","Login Form in HTML & CSS","How to learn HTML & CSS","How to learn JavaScript",
    "How to become Freelancer","How to become Web Designer","How to start Gaming Channel","How to start YouTube Channel",
    "What does HTML stands for?","What does CSS stands for?",
];
const $=document;
const list=$.querySelector('.list')
let time2,newforWrng,vaz;
function createIteam(array){
    array.forEach(function(elm){ list.innerHTML+='<li class="iteam">'+elm+'</li>';})
}
function createliWrong(inputValuewrong){
    newforWrng= '<li class="iteam">'+inputValuewrong+'</li>';
    list.innerHTML=newforWrng; vaz=true;
}
function scherchINsuggestions(inputValue,isbackspace){
    if(list.childElementCount && !isbackspace && !vaz){
        let allIteam=$.querySelectorAll('.iteam')
        allIteam.forEach(function(iteam){
            if(!iteam.textContent.toLowerCase().includes(inputValue)) iteam.remove();
            if(list.childElementCount==0) createliWrong(inputValue);
        })}
    else {
        if(inputValue){
            let selectSuggestion=suggestions.filter(function(index){
                 return index.toLocaleLowerCase().includes(inputValue);
             })
             if(selectSuggestion[0]){
                list.innerHTML='';
                 list.classList.add('active'); createIteam(selectSuggestion); vaz=false;
             }
             else createliWrong(inputValue)
        }
        else{ list.classList.remove('active'); list.innerHTML='';}}
}
function keybord(event){
    let time=new Date().getTime();
    time2=time;
    setTimeout(() => {
        if(time==time2) scherchINsuggestions(input.value.toLowerCase() , event.key=='Backspace'?true:false)
    },300);}

input.addEventListener('keyup',keybord)
list.addEventListener('click',function(event){

    if(event.target.tagName=='LI'){
        input.value=event.target.textContent;
        list.classList.remove('active');
        list.innerHTML='';
    }

})