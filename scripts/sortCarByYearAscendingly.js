function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  //tulis code-mu disini
  let wadah = 0;

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j].year > result[j + 1].year) {
        wadah = result[j];
        result[j] = result[j + 1];
        result[j + 1] = wadah;
      }
    }
  }
  
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
