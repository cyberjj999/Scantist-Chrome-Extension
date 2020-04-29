
	
/* 
	
	var wraptable100 = document.getElementsByClassName('wrap-table100')[0];
	var searchResult = document.createElement('h1');
	var table = document.getElementsByClassName('table')[0];
	 */
	 
	/* 
	var x = document.getElementById("searchResult").parentElement.className;
	alert(x); */

//	<h1 style="text-align:center;color:white"> You searched for <span id='userSearch'>Jquery 3.1.4</span> </h1>

	var isSearched = false;
	  
      var btnTypes = document.querySelectorAll('.travel-type-wrap .item')
      for (let i = 0; i < btnTypes.length; i++)
      {
        btnTypes[i].addEventListener('click', function()
        {
          for (let i = 0; i < btnTypes.length; i++)
          {
            btnTypes[i].classList.remove('active')
          }
          btnTypes[i].classList.add('active')
		  
		  //Its BASICALLY i, if 
		  /*i = 0, it represents all
		  i = 1, represents GitHub
		  i = 2, represents Maven
		  i = 3, represents Pypi
		  i = 4, represents NPM
		  */
		  //alert(i);
			  if(i == 0){
				  alert("You filtered to ALL!");				 
			  }
			  else if(i == 1){
				  alert("You filtered to Github!");
			  }
			  else if(i == 2){
				  alert("You filtered to Maven!");
			  }
			  else if(i == 3){
				  alert("You filtered to Pypi!");
			  }
			  else if(i == 4){
				  alert("You filtered to NPM!");
			  }
			}
		)
      }

    const choices = new Choices('[data-trigger]',
      {
        searchEnabled: false,
        itemSelectText: '',
      });
	  
	var limiter = document.getElementsByClassName('limiter')[0];
	var inputField = document.getElementById("user-input");
	var userSearch = document.getElementById("userSearch");
	var searchBtn = document.getElementById('search-bar');
	var table = document.getElementsByClassName('table')[0];
	searchBtn.onclick = function(){
		if(inputField.value == ""){
			alert("Please provide a valid input");
		}
		else {
			
			limiter.style['display'] = 'inline-block';
			userSearch.innerHTML = inputField.value;
			
			var testArray = ['jQuery','Ruby','NPM'];
			
			for(var i=0;i<testArray.length;i++){
			
			var rowDiv = document.createElement('div');
			rowDiv.className = 'row rowBody';

			var cell1 = document.createElement('div');
			cell1.setAttribute('data-title', 'Package Name');
			cell1.innerHTML = testArray[i];
			cell1.className = 'cell';

			var cell2 = document.createElement('div');
			cell2.setAttribute('data-title', 'Version');
			cell2.innerHTML = 'Test Data';
			cell2.className = 'cell';
			
			var cell3 = document.createElement('div');
			cell3.setAttribute('data-title', 'Criticality');
			cell3.innerHTML = 'Test Data';
			cell3.className = 'cell';
			
			var cell4 = document.createElement('div');
			cell4.setAttribute('data-title', 'Score');
			cell4.innerHTML = 'Test Data';
			cell4.className = 'cell';
			
			var cell5 = document.createElement('div');
			cell5.setAttribute('data-title', 'License');
			cell5.innerHTML = 'MIT';
			table.appendChild(rowDiv);
			cell5.className = 'cell';
			
			var cell6 = document.createElement('div');
			cell6.className = 'cell';
			cell6.setAttribute('data-title', 'Report');
			
			var viewReportBtn = document.createElement('button');
			viewReportBtn.setAttribute('type','button');
			viewReportBtn.className = 'myBtn';
			viewReportBtn.id = 'viewReport';
			var reportPage = "window.open('../../report-template/bitbank/index.html','blank')";
			
			/* 
			<form id="TheForm" method="post" target="TheWindow">
			<input type="hidden" name="something" value="something" />
			<input type="hidden" name="more" value="something" />
			<input type="hidden" name="other" value="something" />
			</form>
			
			document.getElementById('TheForm').submit();
 */

			//reportPage.myData = 'THIS IS MY DATA';
			//alert(reportPage.myData);
			viewReportBtn.setAttribute("onclick", reportPage);

			//viewReportBtn.setAttribute("onclick", "window.open('../../report-template/bitbank/index.html','blank')");
			viewReportBtn.innerHTML = 'View Report';
			//"window.open('report.html','_blank')"
			cell6.appendChild(viewReportBtn);
						
			rowDiv.appendChild(cell1);
			rowDiv.appendChild(cell2);
			rowDiv.appendChild(cell3);
			rowDiv.appendChild(cell4);
			rowDiv.appendChild(cell5);
			rowDiv.appendChild(cell6);

			table.appendChild(rowDiv);
			
			
		}
				
			
			/* 
			searchResult.innerHTML = "You searched for " + inputField.value;
			searchResult.style['color'] = 'white';
			searchResult.style['text-align'] = 'center';
			wraptable100.appendChild(searchResult);
			searchResult.appendChild(table);
			var br = document.createElement('br');
			searchResult.appendChild(br); */
			alert("You searched for " + inputField.value);
			
				
			//Auto-Scroll to Search Result Table
			document.documentElement.scrollTop = 730;
			
			
			
			
			
			
			
			
			
			
			
			
			//readJSON("../../Database/db.json");	
		/* 	$.getJSON("../../Database/db.json", function(json) {
				alert(JSON.stringify(json));// this will show the info it in firebug console
			}); */
			
			
		/* 	String stringJsonData = "{\"jQuery\": {\"3.0.0-alpha1\": [\"CVE-2007-2379\", \"CVE-2019-11358\"], \"description\": \"The jQuery framework exchanges data using JavaScript Object Notation (JSON) without an associated protection scheme, which allows remote attackers to obtain the data via a web page that retrieves the data through a URL in the SRC attribute of a SCRIPT element and captures the data using other JavaScript code, aka \\\"JavaScript Hijacking.\\\"\", \"License\": \"MIT License\", \"platform\": \"NPM\", \"Language\": null, \"Reference\": {\"refs\": [\"http://osvdb.org/43320\", \"http://www.fortifysoftware.com/servlet/downloads/public/JavaScript_Hijacking.pdf\", \"https://security.netapp.com/advisory/ntap-20190416-0007/\"]}, \"3.3.0\": [\"CVE-2007-2379\", \"CVE-2019-11358\"], \"2.1.1-beta1\": [\"CVE-2007-2379\", \"CVE-2019-11358\"], \"2.1.0\": [\"CVE-2019-11358\", \"CVE-2007-2379\"], \"1.12.3\": [\"CVE-2007-2379\", \"CVE-2019-11358\"]}}";
			
			print(stringJsonData); */
			//var jsonData = JSON.parse(stringJsonData);
			
			//alert(jsonData.jQuery);
			
			
		}
		
		
	}
	/*
	str = JSON.stringify(choices);
	alert(str);
	*/
	
	function readJSON(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) { 
      if (this.status == 200) {
          var file = new File([this.response], 'temp');
          var fileReader = new FileReader();
          fileReader.addEventListener('load', function(){
               //do stuff with fileReader.result
			   alert("my result is " + fileReader.result);
          });
          fileReader.readAsText(file);
      } 
    }
    xhr.send();
}