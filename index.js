
let lineNo = 1;


		$(document).ready(function () {
			$("#addRow").click(() => {

				tableBody = $("table tbody");
				var nameInput = $('#firstName').val();
				var lastName = $('#lastName').val();
				var position = $('#inputGroupSelect01').val();
				tableBody.append(`<tr id="newRow"><td> Player no.  ${lineNo}  </td>'  <td>  ${nameInput}  </td>
				<td> ${lastName} </td> <td> ${position} </td> <td> <button type="button" id="edit" class="btn btn-warning">Edit Position</button> <button type="button"  class="btn btn-danger">Delete</button></td></tr>`);

				lineNo++;
				console.log(nameInput);


				$('#edit').click(function () {
					$('#newRow')


					$('#newRow td:nth-child(4)').replaceWith(`<div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Penis</label>
                        <select class="form-select" id="inputGroupSelect01">
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



			});
				
                
			});
		
	
			
		

		