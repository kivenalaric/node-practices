function ageManiach(years) {
  const ages = [];
  const presentYear = 2022;
  let youngest = years[0];
  let oldest = years[0];
  let oldAge = '';
  let youngAge = '';
  let sum = 0;
  let count = 0;
  let average = "";
  let child = 0;
  let teenager = 0;
  let adult = 0;
  for (let i = 0; i < years.length; i++) {
    let age = presentYear - years[i];
    ages.push(age);
//youngest ages
    if(youngest < years[i]){
        youngest = years[i];
        youngAge = presentYear - youngest 
    }
//oldest ages
    if(oldest > years[i]){
        oldest = years[i];
        oldAge = presentYear - oldest
    }
//sum
    sum = sum + ages[i];

//occurance
   count = 0;
    for(let i = 0; i < ages.length; i++){
      if (youngAge == ages[i]) {
        count++;
      }
    }
//average
  average = Math.floor(sum / ages.length);
//range
  if (ages[i] <= 13) {
    child++;
  } else if (ages[i] <= 19) {
    teenager++;
  } else {
    adult++;
  }
  }
  console.log(ages);
  console.log(`Youngest YOB is ${youngest} with age ${youngAge}`);
  console.log(`Oldest YOB is ${oldest} with age ${oldAge}`);
  console.log(`The sum of all ages is ${sum}`);
  console.log(`Youngest age occurs ${count} time(s)`);
  console.log(`Average of all ages is ${average}`);
  console.log(`there is(are); ${child} child(ren), ${teenager} teenager(s) and ${adult} adult(s)`);
  console.log(presentYear);
}

const years1 = [2002, 1992, 1947, 2020, 2020, 2020, 2000, 1920, 2019, 2006, 2019,2020,2019,];
ageManiach(years1);
