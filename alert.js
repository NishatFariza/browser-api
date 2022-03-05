console.log('I am here')

// alert('Problem is comming')

const problemComming = () =>{
    alert('Problem is comming')
}

const askPicnic = () =>{
   const response = confirm('Are you going to picnic');
   console.log(response);
   if(response === true){
       alert('I have need some help')
   }
   else{
       console.log('Allah always with me');
       
   }
   
}

const askName = () =>{
   const name=  prompt('What is yor name??')
   if(name){
       console.log(name);
       
   }

}