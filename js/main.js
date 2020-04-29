
	  
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
	  
	var inputField = document.getElementById("user-input");
	
	var searchBtn = document.getElementById('search-bar');
	searchBtn.onclick = function(){
		alert("You searched for " + inputField.value);

		//Scroll to bottom of the page
		document.documentElement.scrollTop = 730;
		
	}
	/*
	str = JSON.stringify(choices);
	alert(str);
	*/