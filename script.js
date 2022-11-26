function go(){
	let results=[];
	var numSubjects;
	var sum=0;
	var avg=0;
	numSubjects=parseInt(prompt("Please enter the number of subjects you have"));
	for(i=0;i<numSubjects;i++){
		results[i]=parseInt(prompt("Please enter the results you got in each subject"));
		sum=sum+results[i];
		avg=sum/numSubjects;
	}
	for(i=0;i<numSubjects;i++){
		if(results[i]>=70 && results[i]<=100){
				document.getElementById("main").innerHTML+="The result input is "+results[i]+". Your grade for this module is A<br>";
			}
			else if(results[i]>=60 && results[i]<=69){
				document.getElementById("main").innerHTML+="The result input is "+results[i]+". Your grade for this module is B<br>";
			}
			else if(results[i]>=50 && results[i]<=59){
				document.getElementById("main").innerHTML+="The result input is "+results[i]+". Your grade for this module is C<br>";
			}
			else if(results[i]>=45 && results[i]<=49){
				document.getElementById("main").innerHTML+="The result input is "+results[i]+". Your grade for this module is D<br>";
			}
			else if(results[i]>=40 && results[i]<=44){
				document.getElementById("main").innerHTML+="The result input is "+results[i]+". Your grade for this module is E<br>";
			}		
			else if(results[i]>=0 && results[i]<=39){
				document.getElementById("main").innerHTML+="The result input is "+results[i]+". Your grade for this module is F<br>";
			}		
			else{
				document.getElementById("main").innerHTML+="Invalid input, please try again<br>";
			}	
	}
	document.getElementById("avg").innerHTML+="Your overall average is: "+avg;
}