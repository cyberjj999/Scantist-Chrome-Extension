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

/*     commenting this reduces some error
const choices = new Choices('[data-trigger]',
      {
        searchEnabled: false,
        itemSelectText: '',
      });
	   */
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
			userSearch.innerHTML = inputField.value;
			alert("You searched for " + inputField.value);
			//Auto-Scroll to Search Result Table
			document.documentElement.scrollTop = 730;
			
			var db;
			var library;
			var version;
			var criticality; 
			var score;
			var license;
			var splitArray = inputField.value.split(" ",2);
			library = splitArray[0];
			version = splitArray[1]
			
			//alert("my library is " + library);
			//alert("my version is " + version);
			/* const jsonpath = chrome.runtime.getURL('/Database/db.json');
			fetch(jsonpath).then((response) => response.json())
			.then((json) => alert(JSON.stringify(json)));		
			 */
			const jsonpath = chrome.runtime.getURL('/Database/db(unclean).json');
			fetch(jsonpath).then((response) => response.json())
			.then((data) => {
				
				var jsonData = JSON.parse(data);
		
				if(jsonData.library == undefined){
					var noResult = document.createElement('h1');
					noResult.innerHTML = "Your search yield no results! Please enter another search term!";
					limiter.style['display'] = 'block';
					limiter.appendChild(noResult);
				}
				//alert(JSON.stringify(jsonData.jQuery.description));
				//alert(JSON.stringify(data));
				else {
					
					limiter.style['display'] = 'block';
					userSearch.innerHTML = inputField.value;
					
					
					var rowDiv = document.createElement('div');
					rowDiv.className = 'row rowBody';

					var cell1 = document.createElement('div');
					cell1.setAttribute('data-title', 'Package Name');
					cell1.innerHTML = library;
					cell1.className = 'cell';

					var cell2 = document.createElement('div');
					cell2.setAttribute('data-title', 'Version');
					cell2.innerHTML = version;
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
					
					viewReportBtn.addEventListener("click", function(){
					  window.open('../../report-template/bitbank/index.html','blank');
					});	


					viewReportBtn.innerHTML = 'View Report';
					cell6.appendChild(viewReportBtn);
								
					rowDiv.appendChild(cell1);
					rowDiv.appendChild(cell2);
					rowDiv.appendChild(cell3);
					rowDiv.appendChild(cell4);
					rowDiv.appendChild(cell5);
					rowDiv.appendChild(cell6);

					table.appendChild(rowDiv);
					
					
				}
				
			});	

				
		}
		
		
	}
	
/* 	var testArray = ['jQuery','Ruby','NPM'];
			
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
			


			//reportPage.myData = 'THIS IS MY DATA';
			//alert(reportPage.myData);
			//viewReportBtn.setAttribute("onclick", reportPage);
			
			viewReportBtn.addEventListener("click", function(){
			  window.open('../../report-template/bitbank/index.html','blank');
			});	


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
			
			
		} */
		
				/* 
			<form id="TheForm" method="post" target="TheWindow">
			<input type="hidden" name="something" value="something" />
			<input type="hidden" name="more" value="something" />
			<input type="hidden" name="other" value="something" />
			</form>
			
			document.getElementById('TheForm').submit();
			*/
			
				//alert("my library is " + library);
			//alert("my version is " + version);
			/* const jsonpath = chrome.runtime.getURL('/Database/db.json');
			fetch(jsonpath).then((response) => response.json())
			.then((json) => alert(JSON.stringify(json)));		
			 */
	/* 		const jsonpath = chrome.runtime.getURL('/Database/db(unclean).json');
			fetch(jsonpath).then((response) => response.json())
			.then((data) => {
				
				var jsonData = JSON.parse(data);
				alert(JSON.stringify(jsonData.jQuery.description));
				alert(JSON.stringify(data));
				
			});	 */