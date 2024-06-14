function outer(){
  
    function inner(a,b) {
     console.log(a);
     console.log(b);
     a = "not memes";
     b.name = "Bob";
     b.age = "20";
     console.log(a);
     console.log(b);
    }
  
    inner(a,b);
    console.log(a);
    console.log(b);
  }
  let a = "memes"
  let b = {name:"Tyler", age:19}
  console.log(a);
  console.log(b);
  outer();