// Mobile menu + seasonal snowblower banner (shown Oct 15 - Mar 15)
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
  var snow=document.getElementById('snow-season');
  if(snow){
    var d=new Date(),m=d.getMonth()+1,day=d.getDate();
    var inSeason=(m>=11||m<=2)||(m===10&&day>=15)||(m===3&&day<=15);
    if(inSeason)snow.hidden=false;
  }
  var y=document.getElementById('year');
  if(y)y.textContent=new Date().getFullYear();
})();
