// circulo.js var PI = Math.PI;



var PI = Math.PI;

//O export permite a tilizacao destes metodos para importa este arquivo.
exports.area = function (r) {  return PI * r * r; };

exports.circumference = function (r) {  return 2 * PI * r; };