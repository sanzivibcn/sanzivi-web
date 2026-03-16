function openModal(){
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow='';
}
function toggleChip(el){
  el.classList.toggle('active');
}
function sendToWhatsApp(){
  var chips=[].slice.call(document.querySelectorAll('.chip.active')).map(function(c){return c.textContent.trim();}).join(', ');
  var desc=document.getElementById('modalDesc').value.trim();
  var name=document.getElementById('modalName').value.trim();
  var zone=document.getElementById('modalZone').value.trim();
  var msg='Hola, quiero pedir presupuesto.';
  if(name) msg+='\nNombre: '+name;
  if(zone) msg+='\nZona: '+zone;
  if(chips) msg+='\nServicios: '+chips;
  if(desc) msg+='\nTrabajos pendientes:\n'+desc;
  msg+='\n\n(Enviado desde sanzivi.es)';
  window.open('https://wa.me/34654089180?text='+encodeURIComponent(msg),'_blank');
}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});

// Cookies
(function(){
  var consent=localStorage.getItem('cookie_consent');
  if(!consent) setTimeout(function(){
    var b=document.getElementById('cookieBanner');
    if(b) b.classList.add('show');
  },800);
  if(consent==='rejected') window['ga-disable-G-NWPPBGX36K']=true;
})();
function acceptCookies(){
  localStorage.setItem('cookie_consent','accepted');
  document.getElementById('cookieBanner').classList.remove('show');
}
function rejectCookies(){
  localStorage.setItem('cookie_consent','rejected');
  window['ga-disable-G-NWPPBGX36K']=true;
  document.getElementById('cookieBanner').classList.remove('show');
}
