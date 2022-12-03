function ageManiach(years) {
  const ages = [];
  const presentYear = 2022;
  for (let i = 0; i < years.length; i++) {
    let age = presentYear - years[i];
    ages.push(age);
  }
  console.log(ages);

  let youngAge = "";
  let oldAge = "";
  //YOB Youngest and age
  let youngest = years[0];
  for (let i = 1; i < years.length; i++) {
    if (youngest < years[i]) {
      youngest = years[i];
      youngAge = presentYear - years[i];
    }
  }
  console.log(`Youngest YOB is ${youngest} with age ${youngAge}`);
  //YOB Oldest and age
  let oldest = years[0];
  for (let i = 1; i < years.length; i++) {
    if (oldest > years[i]) {
      oldest = years[i];
      oldAge = presentYear - years[i];
    }
  }
  console.log(`Oldest YOB is ${oldest} with age ${oldAge}`);

  //sum of all Ages
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
  }
  console.log(`The sum of all ages is ${sum}`);

  //how many times young age occur

  let count = 0;
  for (let i = 0; i < ages.length; i++) {
    if (youngAge == ages[i]){
      count++;
    }
  }
  console.log(`Youngest age occurs ${count} time(s)`);

  //Average of all ages
  let average = "";
  for (i = 0; i < ages.length; i++) {
    average = sum / ages.length;
  }
  console.log(`Average of all ages is ${average}`);

  let child =0;
  let teenager = 0;
  let adult = 0;

  for(let i = 0; i < ages.length; i++){
    if(ages[i] <= 13){
        child++;
    } else if(ages[i] <= 19){
        teenager++;
    } else {
        adult++;
    }
  }
  console.log(`there is(are); ${child} child(ren), ${teenager} teenager(s) and ${adult} adult(s)`)

  console.log(presentYear);
}

const years1 = [2002, 2007, 1992, 1947, 2000, 2007, 1920, 2019];
ageManiach(years1)
