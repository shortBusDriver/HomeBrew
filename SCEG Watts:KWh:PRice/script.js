		



   function estUse(watt){
	   var cost =  watt * 24 * 30.5; // watts * 24 hours * 730 hours ( 30.5 days) in a month.
	   var est = cost / 1000;        // KwH conversion
	   var total = est * .11361;     //KWh *s SCEG .11261
	   
	  return total;
	   
   };		



alert(estUse(9000))

