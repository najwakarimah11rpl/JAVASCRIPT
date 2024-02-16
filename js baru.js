function halo(){
            alert('halo js');
        } 
          function waktu(){
            document.getElementById('waktu').innerHTML=Date();} 

        function zodiak(){
            let tanggal=document.getElementById('tanggal').value;
            let bulan=document.getElementById('bulan').value;
            let zodiak='gtw';
            if(bulan==1){
                if(tanggal >0&& tanggal <20){
                    console.log(zodiak="bebek");
                }if(tanggal >19&& tanggal< 30){
                    (zodiak='banteng');}}
            document.getElementById('zodiak').innerHTML=bulan();}

            function kali(){
                let a=document.getElementById('bill').value;
                let b=document.getElementById('bill').value;
                let hasil=a*b;
                document.getElementById('jawab').innerHTML=hasil();}
            
 
let btn= document.getElementById('jam');
btn.onclick=function(){
    
    document.getElementById('waktu').innerHTML=Date();}

    let isi= document.getElementById('ketik');
    let tampil= document.getElementById('waktu');
    isi.onmouseover=function(){
        tampil.innerHTML=isi.value;}

    let hari=document.getElementById('hari');
    hari.addEventListener('click', coba);
    function coba(){
alert('coba cona');}







