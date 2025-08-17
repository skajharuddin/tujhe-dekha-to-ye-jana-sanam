let name = prompt('Please enter your name : ');

if(name){
    setTimeout(() => {
        document.querySelector('#para0').innerHTML = `Dear ${name}, you are in right place for me. Thank you.`;
    }, 500);
    
    setTimeout(() => {
        document.querySelector('#para1').innerHTML = `We are hacking your device...Please wait...`;
    }, 2500);
    
    setTimeout(() => {
        document.querySelector('#para2').innerHTML = `We are fetching all your usernames and passwords on this device...Please wait...`;
    }, 4000);
    
    setTimeout(() => {
        document.querySelector('#para3').innerHTML = `Hacking your Facebook Id...Please wait...`;
    }, 6500);
    
    setTimeout(() => {
        document.querySelector('#fcbk').innerHTML = `Fetching your Facebook messenger...Please wait...`;
    }, 9500)
    
    setTimeout(() => {
        document.querySelector('#para4').innerHTML = 'Hacking your Gmail...Please wait...';
    }, 12500);
    
    setTimeout(() => {
        document.querySelector('#para5').innerHTML = 'Feching your WhatsApp chats...Please wait...';
    }, 16000);
    
    setTimeout(() => {
        document.querySelector('#para6').innerHTML = `[✔] Operation complete! \n Dear ${name}, Congratulations myself!!! We got everything we needed. Thanks for clicking this link...And one more step...Please wait...`;
    }, 19000);
    
    setTimeout(() => {
        document.querySelector('#para7').innerHTML = `Dear ${name}, kaisa laga mera mazak...? 🤣🤣🤣😂😂😂`;
    }, 21000);
} else {
    alert('Please enter your name.');
}



