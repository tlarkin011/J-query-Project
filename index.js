
let lineNo = 1;
let rowNumber = 0;


		$(document).ready(function () {
			$("#addRow").click(() => {

				let table = $("table tbody");
				var nameInput = $('#firstName').val();
				var lastName = $('#lastName').val();
				var position = $('#inputGroupSelect01').val();
				let markUp =  (`<tr value= ${rowNumber} id=newRow><td> Player no.  ${lineNo}  </td>'  <td>  ${nameInput}  </td>
				<td> ${lastName} </td> <td> ${position} </td> <td> <button type="button" id="edit" class="btn btn-warning">Edit Position</button> <button type="button" id="delete"  class="btn btn-danger">Delete</button></td></tr>  `);
				table.append(markUp)
				
								
				rowNumber++;
				lineNo++;
				
				console.log(nameInput);
				console.log(rowNumber);
				console.log(markUp);

				
				$('#edit').click(function  () {
					
					$('#newRow td:nth-child(4)').replaceWith(`<div class="input-group mb-3">
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
				}
				);

				$('#delete').click(function ()  {
					$('#newRow').remove()

				})



			});
				
                
			});


				
	

		
	
			
		

		