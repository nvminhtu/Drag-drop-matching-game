BOTH 'dragProgram_1.js' AND 'imageDetails.txt' ARE INSIDE 'js' FOLDER
INSTRUCTION TO USE "dragProgram_1.js"

-----------------------index.html----------------------------
1) IN ORDER TO USE THIS FILE PLEASE MAKE SURE THAT YOUR HTML FILE AND CSS FILE IS READY!!
2) IN YOU HTML YOU HAVE TO FOLLOW THE SYNTAX SHOWN BELOW
			<div id="tryAgain">------------>DENOTES TRY AGAIN PAGE
				<div id="retry">
					<button></button>------------>DENOTES RETRY BUTTON
				</div>
			</div>
			<div id="dragDrop">------------>DENOTES WHOLE DRAG AND DROP PAGE 
				<div id="match_1">------------>DENOTES FIRST MATCH IMAGES DIVISION CONTAINER ON THE LEFT 
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div id="choices">------------>DENOTES CHOICES IMAGES CONTAINER DIVISION
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
				<div id="match_2">------------>DENOTES SECOND MATCH IMAGES DIVISION CONTAINER ON THE RIGHT 
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div id="instr">------------>DENOTES INSTRUCTION PAGE
			</div>
3) FOLLOW THE SAME SYNTAX AND ID'S FOR THE DIVISION TAGS AS SHOWN ABOVE
4) AFTER ADDING OR DELETING DIVISIONS YOU MAY NEED TO CHANGE YOUR CSS FILE AS PER YOUR REQUIREMENTS

-----------------------------------------------imageDetails.txt--------------------------------------------------------------

1) TO ADD NEW IMAGES (match and choices images) PLEASE PUT THE NAME OF THE FILES IN imageDetails.txt WITHOUT EXTENSION CURRENT EXTENSION IS (.gif)

	SYNTAX: 	matchingImageName:firstChoiceImage,SecondChoiceImage;
				matchingImageName1:firstChoiceImage,SecondChoiceImage;
				matchingImageName2:firstChoiceImage,SecondChoiceImage  ---------->LAST RECORD WITH NO LEADING ";"
	
2) PLEASE DO NOT PUT ";" AT THE END OF FILE OR AT THE END OF LAST RECORD
3) TRY NOT TO LEAVE BLANK SPACES BETWEEN IMAGE NAMES---BLANK SPACES "BIG NO! NO!"
4) EACH MATCH IMAGE HAS TO HAVE ATLEAST ONE MATCHING CHOICE IMAGE
5) IF YOU HAVE JUST ONE CHOICE FOR A MATCHING IMAGE PLEASE WRITE "null" INSTEAD OF LEAVING IT BLANK
	EXAMPLE: 
		aloy:firstMactchingChoiceName,null;
   ABOVE "null" DENOTES THAT THIS MATCHING IMAGE("aloy") HAVE JUST ONE MATCHING CHOICE IMAGE
6) TO ADD EXTRA CHOICES IMAGE FOLLOW THE SYNTAX BELOW
    EXAMPLE: 
		null:firstExtraChoiceName,SecondExtraChoiceName;

-----------------------------------------------dragProgram_1.js--------------------------------------------------------------

1) YOU CAN ONLY CHANGE IMAGES PATHS, EXTENSIONS, ANIMATION TIME AND THE NAME OF THE FILE WHICH CONTAINS IMAGE FILE NAMES AS FOR NOW IT IS "imageDetails.txt"
2) ANY OTHER CHANGES MIGHT CRASH THE WHOLE PROGRAM.
3) LINES HAVE BEEN COMMENTED IN dragProgram_1.js WHERE YOU CAN MAKE CHANGES.
4) PLEASE MAKE SURE THAT YOU GIVE THE DETAILS CORRECTLY IN dragProgram_1.js.
5) PLEASE MENTION HOW MANY CORRECT CHOICES DO YOU HAVE IN dragProgram_1.js.




THANK YOU AND ENJOY!!
DEVELOPER DETAILS
			
			Date: Thursday, March 21, 2013
			Name: Maninderjit Singh
			email: m.s.maan@hotmail.com
			dragProgram: 0.1v