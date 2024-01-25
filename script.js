return ;
		}
		
		
		
		if(code>=48 && code<=57){
			let nextElement = currentElement.nextElementSibling ;
			if(nextElement){
				nextElement.focus() ;
			}
			
		}else{
			event.target.value="" ;
		}
	})
	
}