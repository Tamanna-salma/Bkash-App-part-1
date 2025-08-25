document.getElementById('login-button').addEventListener('click',function(event){
    event.preventDefault()

    const mobilenumber=12345678910
    const pinNumber = 1234;
    // input number
    const getNumbervalue = document.getElementById('Mobile-Number').value
    const numberConverted = parseInt(getNumbervalue);

    const getpinvalue= document.getElementById('digit-pin').value
    const pinconverted = parseInt(getpinvalue)

if(numberConverted===mobilenumber && pinconverted===pinNumber){
    console.log('all values matched');
    window.location.href="./home.html"

}else{
   alert('Invali credentis')
}


})