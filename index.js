
let lineNo = 1;
let rowNumber = 0;
let newRow = ""
let playersArray =[]

		$(document).ready(function () {
			$("#addRow").click(() => {

				let table = $("table tbody");
				var nameInput = $('#firstName').val();
				var lastName = $('#lastName').val();
				var position = $('#inputGroupSelect01').val();
				let markUp =  "<tr id=newRow>" +
				"<td>" + nameInput + "</td>" +
				"<td>" + lastName + "</td>" +
				"<td>" + position + "</td>" +
				"<td> <button type=button  onclick=editPos() id=edit class= btn btn-warning >Edit Position</button> <button type=button onclick=productDelete() id=delete  class=btn btn-danger>Delete</button></td></tr>";
				table.append(markUp + rowNumber)								
				rowNumber++;
				lineNo++;
				playersArray.push(nameInput, lastName, position)
				console.log(playersArray)
			});
				
                
		});

		function productDelete()  {
			$("#newRow").remove()

		}

		function editPos () {
				
			$('#newRow td:nth-child(3)').replaceWith(`<div class="input-group mb-3">
				<label class="input-group-text" for="inputGroupSelect01">New Pos.</label>
				<select class="form-select" id="inputGroupSelect02">
				  <option selected id="position">Choose...</option>
				  <option value="Point Gaurd">Point Gaurd</option>
				  <option value="Shooting Gaurd">Shooting Gaurd</option>
				  <option value="Small Forward">Small Forward</option>
				  <option value="Power Forward">Power Forward</option>
				  <option value="Center">Center</option>
				  
				</select>
			  </div>`);
			  $('#newRow td:nth-child(4)').replaceWith("<button id=submitbtn type=button onclick=submitChange() class=btn btn-success>Submit</button>")
		}

		function submitChange(){
			$("#inputGroupSelect02").replaceWith($("#inputGroupSelect02").val())
			$('#submitbtn').remove()
			$('#newRow').append("<td> <button type=button  onclick=editPos() id= edit class= btn btn-warning >Edit Position</button> <button type=button onclick=productDelete() id=delete  class=btn btn-danger>Delete</button></td></tr>")
			
		}

				
	

		
	
			
		

		