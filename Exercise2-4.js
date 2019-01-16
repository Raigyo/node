/*Count from 1 to 100. For every even number (pair) display the result of their division by 2.
For every odd number (impair) display the result of their multiplication by 3.*/
let i = 1;
while (i <= 100){
  if (i%2 == 0){
    //pair
    console.log(i + " is even number, so: " + i + "/2=" + i/2)
  }
  else{
    //impair
    console.log(i + " is odd number, so: " + i + "*3=" + i*3)
  }
  i++;
}
