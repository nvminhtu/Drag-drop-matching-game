$(document).ready(function() 
		{
			var waitTime = "slow";//change animation time here
			var regEx_choic = "images/choices/";// change path for choices images here
			var regEx_matchs = "images/matches/";//change path for match images here
			var regEx_others = "images/other/";// change path for other images here
			var imageExt = ".gif";//change image extension here
			var imagesDetails = "js/imageDetails.txt";// change image details file name here
			var correctChoices = 8;//No. of correct choices
			
			var testing = false;// TRUE WHEN TESTING dragProgram
			/*---------------------PLEASE DO NOT MAKE CHANGES AFTER THIS LINE---------------------------------------*/
			var cons_top_margin = 0;
			var dragDrop = $("#dragDrop");
			var tryAgain = $("#tryAgain");
			var instr = $("#instr");
			var retryButton = $("#retry>button");
			var matchImagesDetails;
			var choiceImagesDetails;
			var matchId;
			var choiceId;
			var resetCount = 0;//should always be 0
			var ie = false;
			browserDetect()
			function browserDetect()
			{
				var browserName = navigator.appName;
				if(browserName=="Microsoft Internet Explorer"){
					ie = true;
				}
				else{
				ie = false;
				}
				initMnC();
				hideAll();
			}
			instr.click(function()
			{
				instr.hide("fold", waitTime, function (){
					resetGame(0)
				});
			});
			retryButton.mouseenter(function (){
				retryButton.css("background-image","url("+regEx_others+"buttonOk"+imageExt+")").css("cursor","pointer");
			});
			retryButton.mouseleave(function (){
				retryButton.css("background-image","url("+regEx_others+"buttonOk_1"+imageExt+")");
			});
			retryButton.click(function(){
				$("#choices").css("margin-top",cons_top_margin+"px");
				tryAgain.hide("clip", waitTime, function(){resetGame(0)});
			});
			function hideAll(){
				dragDrop.hide();
				tryAgain.hide();
				instr.show();
			}
			
			function resetGame(val)
			{
				if(val==1)
				{
					randomizeId()
				}
				else if(val==2)
				{
					setChoiceId()
				}
				else if(val==3)
				{
					setListeners()
					setImages()
					dragDrop.show("clip", waitTime);
				}
				else
				{
					randomizeId()
					setChoiceId()
					setListeners()
					setImages()
					dragDrop.show("clip", waitTime);
				}
				
				function setImages()
				{
					var cho = new Array(2)
					cho[0] = "a";cho[1] = "b";
					for(var i=0; i<choiceId.length/2;i++)
					{
						for(var x=0; x<2;x++)
						{
							if(choiceImagesDetails[i][x]!="null")
							{
								$("#choices>#"+i+cho[x]).css("background-image","url("+regEx_choic+choiceImagesDetails[i][x]+imageExt+")").show()
							}
						}
					}
				}
				
				function setListeners()
				{
					$("#choices>div").draggable({revert: true},{containment: "#page"});
					$("#match_1>div,#match_2>div").droppable({tolerance: "touch"},{accept: "#choices>div"},
					{
						drop: function(event, ui)
						{
							if(checkMatch($(this),ui))
							{
								ui.draggable.hide("fade",150, function(){
									if(resetCount==(correctChoices))
									{
										resetCount = 0;//should be 0 always
										dragDrop.hide("fold", waitTime, function(){tryAgain.show("clip", waitTime)});
									}
								});
							}
						}
					});
				}
				
				function setChoiceId()
				{
					var x=0;
					$("#choices").children('div').each( function ()
						{
							$(this).attr('id',choiceId[x]);// assigning id's to each div tag inside div choices
							x++;
						}
					);
				}
				function randomizeId()
				{
					Array.prototype.shuffle = function ()
					{
						for (var i = this.length - 1; i > 0; i--)
						{
							var j = Math.floor(Math.random() * (i + 1));
							var tmp = this[i];
							this[i] = this[j];
							this[j] = tmp;
						}
						return this;
					}
					choiceId.shuffle();
				}
				function checkMatch(dro, ui)
				{
					var matched = false;
					var drag_id = ui.draggable.prop('id')//current draggable id
					var drag_id = drag_id.substring(0,(drag_id.length-1))
					var drop_id = dro.attr('id')//current droppable id
					if(drag_id==drop_id)
					{
						if(testing){alert("MATCHED")}
						$("#choices").animate({marginTop: '+=20'},waitTime,function(){});
						resetCount++;
						return true
					}
					else
					{
						if(testing){alert("NOT-MATCHED")}
						return false;
					}
				}
			}
			
			function initMnC()
			{
				var NoOfMatchesDiv; var NoOfChoicesDiv; var textFileData = new Array();
				var rec_data;
				matchId = new Array();
				choiceId = new Array();
				countDivs();
				function countDivs()
				{
					NoOfMatchesDiv = document.getElementById("match_1").getElementsByTagName("div").length
					NoOfMatchesDiv += document.getElementById("match_2").getElementsByTagName("div").length
					NoOfChoicesDiv = document.getElementById("choices").getElementsByTagName("div").length
					var temp_C_h = NoOfChoicesDiv*40
					var temp_M_h = (NoOfMatchesDiv/2)*150
					if(temp_M_h>temp_C_h)
					{
						setMargin((temp_M_h-temp_C_h)/2,true)//margin on choices
						if(!ie)
						{
							$("#page").css("height",temp_M_h+"px")
						}
					}
					else
					{
						if(!ie)
						{
							$("#page").css("height",temp_C_h+"px")
						}
						setMargin((temp_C_h-temp_M_h)/2,false)//margin on matches
					}
					if(!ie)
					{$("#retry").css("margin","80px auto")}
					if(testing)
					{
						alert("COUNTED DIV'S DETAILS\n\nNo. of Choices Divisions: "+NoOfChoicesDiv+"\nNo. of Matches Divisions: "+NoOfMatchesDiv)
					}
					get_images_names()
				}
				
				function setMargin(result, temp)
				{
					if(temp)
					{
						cons_top_margin = result;
						//alert("Set margin on Choices "+parseInt(result))
						$("#choices").css("margin-top",result+"px");
					}
					else
					{
						//alert("Set margin on matches "+parseInt(result))
						$("#match_1").css("margin-top",result+"px");
						$("#match_2").css("margin-top",result+"px");
					}
				}
				
				function get_images_names()
				{
					var response = $.ajax(
						{
							url : imagesDetails,
							async: false,
							type: "GET",
							dataType: "text",
							success : function (data)
							{
								textFileData = data.split(";")
							}
						}).done(function(){
							if(testing)
								{
									alert("Text File Details\n\nFile Name: "+imagesDetails+"\n\nTotal Records: "+textFileData.length+"\n\nDetails: \n"+textFileData)
								}
							errorCheck()
							developArray()
							if(testing)
							{
								alert("ARRAY DEVELOPED: SUCCESS")
							}
							copyfileDataToArray()
							createId()
							setIdMnC();
						});
						if(testing)
						{
							if(response!="")
							{
								alert("File Response: "+response)
							}
							else
							{
								alert("File "+imagesDetails+" not found");
								throw "stop execution";
							}
						}
				}
				
				function errorCheck()
				{
					var lastRecord = textFileData[textFileData.length-1]
					if(lastRecord == "")
					{
						alert("PLEASE DO NOT PUT \" ; \" AT THE LAST LINE OF FILE: "+imagesDetails)
						throw "stop execution"
					}
					else
					{
						if(testing)
						{
							alert("NO ERROR SO FAR")
						}
					}
					/*if(textFileData.length!=NoOfMatchesDiv)
					{
						alert("You have "+NoOfMatchesDiv+" matches division but not enough details in \""+imagesDetails+"\"")
						//throw "stop execution"
					}*/
					if(NoOfChoicesDiv%2!=0)
					{
						if(((NoOfChoicesDiv+1)/2)!=textFileData.length)
						{
							alert("YOU ARE MISSING SOME CHOICES DIVISION TAGS\n\nNote: \nRemember each matching div has to have atleast one matching choice.")
							throw "stop execution"
						}
					}
					else
					{
						if((NoOfChoicesDiv/2)!=textFileData.length)
						{
							alert("YOU ARE MISSING SOME CHOICES DIVISION TAGS\n\nNote: \nRemember each matching div has to have atleast one matching choice.")
							throw "stop execution"
						}
					}
				}
				
				function developArray()
				{
					if(testing)
					{
						alert("GOING TO DEVELOP ARRAY FOR IMAGES NAMES OF MATCHES AND CHOICES DIV'S")
					}
					matchImagesDetails = new Array(NoOfMatchesDiv)
					if(NoOfChoicesDiv%2!=0)
					{
						choiceImagesDetails = new Array(((NoOfChoicesDiv+1)/2))
					}
					else
					{
						choiceImagesDetails = new Array((NoOfChoicesDiv/2))
					}
					for(var i=0; i<choiceImagesDetails.length;i++)
					{
						choiceImagesDetails[i] = new Array(2)
					}
				}
				
				function copyfileDataToArray()
				{
					for(var i=0; i<textFileData.length;i++)
					{
						var temp_x = textFileData[i].split(":")
						matchImagesDetails[i] = $.trim(temp_x[0])
						var temp_y = temp_x[1].split(",")
						for(var x=0;x<temp_y.length;x++)
						{
							choiceImagesDetails[i][x] = $.trim(temp_y[x])
						}
					}
					if(testing)
					{
						if(matchImagesDetails!=""&&choiceImagesDetails!="")
						{
							alert("Copy file: "+imagesDetails+"\nSTATUS: SUCCESS")
						}
						else
						{
							alert("Copy file: "+imagesDetails+"\nSTATUS: FAILED")
							throw "stop execution";
						}
					}
				}
				
				function createId()
				{
					var idCount = 0;
					var nullCcount = 0;
					var nullMcount = 0;
					var cho = new Array(2)
					cho[0] = "a";cho[1] = "b";
					if(testing){alert("Total match images in record: "+matchImagesDetails.length)}
					for(var i=0; i<matchImagesDetails.length;i++)
					{
						if(matchImagesDetails[i]!="null")
						{
							matchId.push(i)
							nullMcount++;
							//matchId.push(idCount)
							//idCount++
						}
						for(var x=0; x<2;x++)
						{
							if(choiceImagesDetails[i][x]=="null")
							{
								nullCcount++;
								if((nullCcount==2&&nullMcount==0)||(nullMcount>0&&nullCcount==2))
								{
									alert("Error: 101 in File: "+imagesDetails+" on Line:" +(i+1)+"\n----------------------------------------------------------------------\nDETAILS: Please be adviced you need to have atleast one\nmatching choice image for each matching image you have")//Error for having all values as null in choices for a match
									throw "stop execution";
								}
							}
							else
							{
								var tempId = i.toString()+cho[x]
								choiceId.push(tempId)
							}
							
						}
						nullCcount = 0;nullMcount = 0;
					}
					var x=0;
					var temp = 0;
				}
				
				function setIdMnC()
				{
					var x=0;
					$("#match_1").children('div').each( function ()
						{
							$(this).attr('id',matchId[x]);
							x++;
						}
					);
					$("#match_2").children('div').each( function ()
						{
							$(this).attr('id',matchId[x]);
							x++;
						}
					);
					for(var i=0;i<matchId.length;i++)
					{
						$("#"+matchId[i]).css("background-image","url("+regEx_matchs+matchImagesDetails[i]+imageExt+")")
					}
				}
			}
		});
		/*
			DEVELOPER DETAILS
			Date: Thursday, March 21, 2013
			Name: Maninderjit Singh
			email: m.s.maan@hotmail.com
			dragProgram: 0.1v
		*/
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		