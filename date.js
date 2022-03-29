
// Bez () bo nie odpalamy tej funkcji jeżeli zapisujemy to w osobnej zmiennej, tu dałem to bezpośrednio do module.exports<I TU NAZWA ZMIENNEJ>
// usunąłem module.exports z dokumentacji wynika że można odnosić się do skrótu exports

exports.getDate = function () {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {

  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
}
