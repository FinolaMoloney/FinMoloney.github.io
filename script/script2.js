function count(){
	var numSubjects;
	var result=0;
	var num=0;
	var sum=0;
	numSubjects=parseInt(prompt("Enter the number of subjects you take"));
	for(i=1;i<=numSubjects;i++){
		num=parseInt(prompt("Please enter the result you got in subject "+i));
		sum=sum+num;
		result=sum/numSubjects;
		}
		if(result>=70 && result<=100){
			document.getElementById("main").innerHTML="Your overall result is "+result+". Your grade is A";
		}
		else if(result>=60 && result<=69){
			document.getElementById("main").innerHTML="Your overall result is "+result+". Your grade is B";
		}
		else if(result>=50 && result<=59){
			document.getElementById("main").innerHTML="Your overall result is "+result+". Your grade is C";
		}
		else if(result>=45 && result<=49){
			document.getElementById("main").innerHTML="Your overall result is "+result+". Your grade is D";
		}
		else if(result>=40 && result<=44){
			document.getElementById("main").innerHTML="Your overall result is "+result+". Your grade is E";
		}		
		else if(result>=0 && result<=39){
			document.getElementById("main").innerHTML="Your overall result is "+result+". Your grade is F";
		}		
		else{
			document.getElementById("main").innerHTML="Invalid input, please try again";
		}	
}