(function() {
  /* Код компонента пишите здесь */

const phone = document.getElementById('phone')
const trueNumber = '0123456789() -'.split('');
console.log('trueNumber:' + trueNumber);

console.log('phone:' + phone);
phone.value='+7';
phone.addEventListener('keydown',()=>{
  console.log('phone:' + phone.value);
})
})();
