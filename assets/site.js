// Mobile menu + seasonal banner
(function(){
  var nav=document.querySelector('.site-nav');
  var btn=document.querySelector('.nav-toggle');
  if(nav&&btn){
    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    nav.querySelectorAll('.nav-links a').forEach(function(a){
      a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');});
    });
  }
  // Seasonal banner: winter Oct 15-Mar 15, spring Mar 16-May 31, summer Jun-Aug, fall Sep 1-Oct 14
  var d=new Date(),m=d.getMonth()+1,day=d.getDate(),season;
  if(m>=11||m<=2||(m===10&&day>=15)||(m===3&&day<=15))season='winter';
  else if(m<=5)season='spring';
  else if(m<=8)season='summer';
  else season='fall';
  var q=location.search.match(/[?&]season=(\w+)/);if(q)season=q[1];
  var b=document.querySelector('.season[data-season="'+season+'"]');
  if(b){b.hidden=false;var im=b.querySelector('img');if(im)im.loading='eager';}
  var y=document.getElementById('year');
  if(y)y.textContent=new Date().getFullYear();
})();
