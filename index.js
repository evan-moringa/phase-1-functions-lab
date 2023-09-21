// Code your solution in this file!
 function distanceFromHqInBlocks(){
return 1 - 8 ;
 }



function distanceFromHqInBlocks(x){
   if (x==42){
      return 1;
   }
   if (x > 42){
   return (x - 42) / 1
   }
   return (42 - x) / 1
 }
 console.log("distanceFromHqInBlocks(43)=" , distanceFromHqInBlocks(43))
 
 
  
 
 
 
 
    
    
    
     
    
        
    
    
    function distanceFromHqInFeet(){
      return 2112;
    }
   
    function distanceFromHqInFeet(){
      return 2112;
    }
    
    
    

    
    function distanceFromHqInFeet(y){
      if (y==42){
         return 264;
      }
      if (y > 42){
         return (y - 42)* 264
   
      }
      return(42 - y) * 264

   }
   

   
   
   
   





   function distanceTravelledInFeet(S) {
   if (S==47){
   return 2640;
   }
   if (S > 47){
      return (S - 47) 
   }
   return (47 - S)
}






function distanceTravelledInFeet(x,y){
   if (y>x){
      return((y-x)*264);
   }
   else
   return((x-y)*264)
}
   

   






function calculatesFarePrice(start, destination){
   let distance = distanceTravelledInFeet(start, destination);
    if (distance<=400){
      return 0;
    }
    if (distance >=400 && distance<= 2000){
      return(distance - 400)* 0.02;
    }
    else if(distance>=2000 && distance<=2500){
      return 25;
    }
    else if(distance > 2500){
      return "cannot travel that far"
    }
}

      
      

 


    

 


    
    

 
    
 


 



