function calculateResult(){
   let n=document.getElementById("subjects").value;
   let i;
   let total=0;
   for(i=0;i<n;i++){
    let x=parseFloat(prompt("enter the marks of subject")+((i+1)));
    total+=x;
   }
   let average=total/n;
   let grade;
   if(average>90){
        grade='A+';
   }
   if(average>80){
        garde='A';
   }
   if(average>70){
        garde='B';
   }
   if(average>60){
        garde='C';
   }
   if(average>50){
        garde='D';
   }
   if(average>40){
        garde='E';
   }
   else{
        document.write("FAIL <br/>");
   }

   let result=getElementById("result").innerHTML="Total Marks"+total+"<br/>"+"Average MARKS"+average+"<br/>"
    

   
}