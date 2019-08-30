let sum=0;

function get_achievement(english,artmetics,science){

sum=english+artmetics+science;
if(sum>=250&&sum<=300){
    console.log('your grade is A');
}else if(sum>=200&&sum<250){
    console.log('your grade is B');
}
else if(sum>=100&&sum<200){
    console.log('your grade is C');
}else if(sum>=0&&sum<100){
    console.log('your grade is D');
}


}
function  get_pass_or_failure (english,arthmetics,science){
if(english>=60 && arthmetics>=60 && science>=60){
    console.log('Excellent');
}
else{
    console.log(`your grade is: English ${english} Artmetics ${arthmetics} Science ${science}.It is a fail`);
}


}
function Judgement(){
    let achievement=get_achievement(70,100,100);
    let check=get_pass_or_failure(70,100,100);

}

Judgement();








