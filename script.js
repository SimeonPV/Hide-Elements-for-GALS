// const element = document.getElementById('testElement');
// element.style.visibility = 'hidden';

function hideElementFirst(btn)
{
	console.log(btn)
	const element = document.getElementById('testElement');
	// const element2 = document.getElementById('testObject2')
	let hideElement = element.style

	if(hideElement.visibility !== 'hidden'){
		hideElement.visibility = 'hidden';
	} else {
		hideElement.visibility = 'visible ';
	}
}

function hideElementSecond(btn)
{
	console.log(btn2)
	const element = document.getElementById('testElement2');
	let hideElement = element.style

	if(hideElement.display !== 'none'){
		hideElement.display = 'none';
	} else {
		hideElement.display = 'block ';
	}
}

function deleteElementThird(btn)
{
	console.log(btn3)	
	const deleteButton = document.getElementById('testElement3')
	deleteButton.remove()
	btn.disabled = true;
}
