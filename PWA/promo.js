if ('serviceWorker' in navigator) {
    try {
        const reg = navigator.serviceWorker.register('../sw.js')
        //console.log('Service worker register success', reg)
        alert ('Service worker register success');
    } catch (e) {
        //console.log('Service worker register fail');
        alert ('Service worker register fail');
    }
}


document.location.href = 'intent://stackoverflow.com/questions/29250152/what-is-the-intent-to-launch-any-website-link-in-google-chrome#Intent;scheme=http;package=com.android.chrome;end';


function getUrlVars() {

    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

   
   if (typeof($.cookie('cid')) == 'undefined' && getUrlVars()['cid'] != '') {
      
       $.cookie('cid', getUrlVars()['cid'], {expires: 365, path: '/'});
   }
   
   if ( getUrlVars()['cash'] =='clear') {
       $.cookie('cid', getUrlVars()['cid'], {expires: 365, path: '/'});
   }
   
   if (typeof($.cookie('visit_type')) == 'undefined') {
       $.cookie('visit_type', 'browser', {expires: 365, path: '/'});
   }



console.log($.cookie('cid'));
console.log($.cookie('visit_type'));



let installButton = document.getElementById('install_button');;

let prompt;

window.addEventListener('beforeinstallprompt', function(e) {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    prompt = e;
    alert ('блокируем авто-установку');

});

installButton.addEventListener('click', async function() {

   //стучим в трекер, что чел нажал на "установить"
   console.log('стучим в трекер, что чел нажал установить');
   alert('нажал на кнопку инсталла');
   
   const img = document.createElement("img");
   img.src = 'https://medical-room.site/click.php?clickid=' + $.cookie('cid') + '&event6=1';
   img.style.display='none';
   document.body.appendChild(img);

   //вызываем окно запрос на установку
   prompt.prompt();
   
   // ждем результат
   let result = await prompt.userChoice;
   alert (result);
   //let result = prompt.prompt();
     
     if (result&&result.outcome === 'accepted') {
     
         const img = document.createElement("img");
         img.src = 'https://medical-room.site/click.php?clickid=' + $.cookie('cid') + '&event7=1';
         img.style.display='none';
         document.body.appendChild(img);

         //send conversion to propellerads
         
         if ( getUrlVars()['prop_id'] ) {
            const img1 = document.createElement("img");
            img1.src = 'http://ad.propellerads.com/conversion.php?aid=834287&pid=&tid=91641&payout=0&visitor_id=' + getUrlVars()['prop_id'];
            img1.style.display='none';
            document.body.appendChild(img1);
         }
         
         document.location.href = 'https://finhelper.info/?cid='+$.cookie('cid');


    }
    
})

   

