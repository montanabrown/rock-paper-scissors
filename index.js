let userChoice = prompt('[1]Rock, [2]Paper, [3]Scissors?')
let computerChoice = Math.random()
let computerRoll = (computerChoice)

/* Computer Choice */
	
	if (computerChoice < 0.34) {

		computerChoice = "Rock";
		computerRoll = 1;
	}

	else if (computerChoice <= 0.67) {

		computerChoice = "Paper";
		computerRoll = 2;
	}

	else {

		computerChoice = "Scissors";
		computerRoll = 3;
	}

/* User choice */

	if (userChoice == 1) {

		userChoiceString = 'Rock'
	}

	else if (userChoice == 2) {

		userChoiceString = 'Paper'
	}

	else if (userChoice == 3) {

		userChoiceString = 'Scissors'
	}

/* Players tie */

	if (userChoice == computerRoll) {

		console.log('You tied!')
	}

/* Paper beats rock */

	else if (userChoice == 1 && computerRoll == 2) {

		console.log('You lose!')

	}

	else if (userChoice == 2 && computerRoll == 1) {

		console.log('You win!')
	}

/* Rock beats scissors */

	else if (userChoice == 3 && computerRoll == 1) {

		console.log('You lose!')
	}

	else if (userChoice == 1 && computerRoll == 3) {

		console.log('You win!')
	}

/* Scissors beats paper */

	else if (userChoice == 2 && computerRoll == 3) {

		console.log('You lose!')
	}

	else if (userChoice == 3 && computerRoll == 2) {

		console.log('You win!')
	}


	console.log('User chooses ' + userChoiceString)
	console.log('Computer chooses ' + computerChoice)
	console.log('Computer roll = ' + computerRoll)