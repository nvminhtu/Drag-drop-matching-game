Drag-drop-matching-game
=======================

Built using jQuery, HTML, CSS only
--------------------------------
Plugin Name: Drag-drop matching game
Platform: javascript, jquery
--------------------------------
Purpose:
Originally used in Canadian Defence Academy online course called Aboriginal Awareness Course

Folder Structure
--------------------------------

--root
	--images
			--choices
					This folder should contain pictures which
					are being dragged. Pictures in the CENTER
			--matches
					Typically contains pictures which are droppables
					These are the pictures on both SIDES of choices.
			--others
					All other types of pictures goes here like retry button
					
	--js
		--js_19.js
			Basic js_19 jQuery and UI files
			Its not at all dependent on these versions you can use any version
			of jQuery.
			
		--dragProgram_1.js
			Engine of this game.
			
		--imageDetails.txt
			This file contains image names inside those "choices" & "matches" folders
			
	--styles
		Contains basic css file
		
	--ERROR_HELP.txt
		See when game shows you error it will tell you as much as it can but No AI.
		
	--index.html
		

Summary
------------------------
Can be used in any type of application as long as image size & device resolution has been thought out
You don't need to include anything with this but if you want to then just use 'dragProgram_1.js', almost every thing is there
It will run with any jQuery version. (NOT TESTED)


1) IN ORDER TO USE THIS FILE PLEASE MAKE SURE THAT YOUR HTML FILE AND CSS FILE IS READY!!
2) IN YOU HTML YOU HAVE TO FOLLOW THE SYNTAX SHOWN BELOW
			<div id="tryAgain">
				<div id="retry">
					<button></button>
				</div>
			</div>
			<div id="dragDrop"> 
				<div id="match_1">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div id="choices">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div id="match_2"> 
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div id="instr">
			</div>

-----------------------------------------------imageDetails.txt--------------------------------------------------------------

1) TO ADD NEW IMAGES (match and choices images) PLEASE PUT THE NAME OF THE FILES IN imageDetails.txt WITHOUT EXTENSION CURRENT EXTENSION IS (.gif)
   Extensions and other details are provided in the maing engine file (dragProgram_1.js).

	SYNTAX: 	matchingImageName:firstChoiceImage,SecondChoiceImage;
				matchingImageName1:firstChoiceImage,SecondChoiceImage;
				matchingImageName2:firstChoiceImage,SecondChoiceImage  ---------->LAST RECORD WITH NO LEADING ";"(semicolon)
	
2) TRY NOT TO LEAVE BLANK SPACES BETWEEN IMAGE NAMES---BLANK SPACES "BIG NO! NO!"
3) IF THERE's A MATCH IMAGE THERE HAS TO BE A CHOICE MATCHING WITH IT.
4) IF YOU HAVE JUST ONE CHOICE FOR A MATCHING IMAGE PLEASE WRITE "null" INSTEAD OF LEAVING IT BLANK
	EXAMPLE: 
		aloy:firstMactchingChoiceName,null;

5) ADD EXTRA CHOICES IMAGE 

    EXAMPLE(inside imageDetails.txt):
	
		null:firstExtraChoiceName,SecondExtraChoiceName;
