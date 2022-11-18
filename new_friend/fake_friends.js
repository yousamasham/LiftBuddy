const filters_arr = [
	"New","Intermediate", "Expert", 
	"Young Age", "Middle Age", "Old Age",
	"Lightweight", "Middleweight", "Heavyweight"
];

const fake_friends = [
	{
		name: "Andrew Balmakund",
		description: "Started this journey lifting very light. Looking To find someone or a group of individuals to help push eachtother",
		filters: [2,5,8],
	},
	{
		name: "Andrew John",
		description: "I would consider my self an expert learn seeking to help teach anyone that is looking into weight training",
		filters: [0,3],
	},
	{
		name: "Andrew Smith",
		description: "Looking for someone to help push me in the gym, also looking to do the same",
		filters: [0,3],
	},
	{
		name: "Brian Smith",
		description: "New to the area, looking to help find people to meet and workout with",
		filters: [0,3],
	},
	{
		name: "James Smith",
		description: "New to the area, looking to help find people to meet and workout with",
		filters: [0,3],
	},
	{
		name: "James Allice",
		description: "New to the area, looking to help find people to meet and workout with",
		filters: [0,3],
	},

];

// Create a list of all names from fake_friends object into an array
function name_array(fake_friends){
	var name_arr = []
	for (var i = fake_friends.length - 1; i >= 0; i--){
		name_arr.push(fake_friends[i].name);
	}

	return name_arr;
}



const names = name_array(fake_friends);


var results = [];
var friends_added = [];


function find_friend(name, filter,  fake_friends){
	var results = []

	console.log(name.length);

	//return all names
	if (name === "" && filter == null ){ 
		console.log("Both names and filter arr are empty");
		return fake_friends; 
	}

	//both name and filter provided
	if (name && filter){ 


	//only name provided
	}else if (name && !(filter)){ 
		console.log("Name provided, NO FILTER");
		//console.log(fake_friends);

		fake_friends.filter(user =>{
			var usr_name = user.name;
			if (usr_name.indexOf(name) >= 0){
				results.push(user);
			}
		})
		return results;

	//only filter provided	
	}else{ 

	}
}


// make into functions	
$('#name_search').ready(function() {
	$('#search_button').click(function() {
			$('#results').empty();
			results = [];
            var search_name = $("#name_search").val();
			console.log("Search Name = " + typeof(search_name));
			results = find_friend(search_name, null, fake_friends);
			console.log(results);

			for (let i = 0; i < results.length; i++) {
			const user = results[i];
			const usr_name = user.name;
			var usr_description = user.description;
			const slice_amount = 45;
			if (usr_description && usr_description.length > slice_amount){
				usr_description = usr_description.slice(0,slice_amount) + '...';
			}
		
			$('#results').append(
			'<div class="result-item" id="_results-' + i + '">' + 
				'<div class="profile-frame">' + 
					'<img src="assets/img/icons8-user-50.png">' +
				'</div>' + 
				'<div class="result-short-info">'+
					'<h2>' + usr_name + '</h2>'+
					'<p>' + usr_description + '</p>' + 
				'</div>'+

				
			'</div>' )

			
			}

	});
});




function create_results(){
	results = fake_friends;
	console.log(results);
	for (let i = 0; i < results.length; i++) {
		const user = results[i];
		const usr_name = user.name;
		var usr_description = user.description;
		const slice_amount = 45;
		if (usr_description && usr_description.length > slice_amount){
			usr_description = usr_description.slice(0,slice_amount) + '...';
		}
	
		$('#results').append(
		'<div class="result-item" id="_results-' + i + '">' + 
			'<div class="profile-frame">' + 
				'<img src="assets/img/icons8-user-50.png">' +
			'</div>' + 
			'<div class="result-short-info">'+
				'<h2>' + usr_name + '</h2>'+
				'<p>' + usr_description + '</p>' + 
			'</div>'+

			'<div class="results-button-grid">' + 
				'<button class="results-button-add" id=_add-' + i + '> Add' + 
				'</button>' + 

				'<button class="results-button-view" id=_view-' + i + '> View' + 
				'</button>' + 
			
			'</div>' +

			
		'</div>' )

		
		}

		$('#preview').append(
			 
				'<div class="img-border">' + 
					'<img src="assets/img/icons8-user-50.png" class="preview-img-prop">' +
				'</div>' + 
				'<h1>' + results[0].name + '</h1>'+
				'<p> "' + results[0].description + '"</p>' 
			
			 )

}



let selected_usr = -1;

create_results();



$("[id^=_view-]").click(function() {
	let new_selected_usr = ($(this).attr("id"));
	new_selected_usr = new_selected_usr.slice(new_selected_usr.indexOf("-") + 1);
	console.log(new_selected_usr);


	let get_filters = [];
	for (let i = 0; i < fake_friends[new_selected_usr].filters.length; i++){
		get_filters.push(filters_arr[fake_friends[new_selected_usr].filters[i]]);
	}


	console.log(get_filters);
	
	$('#preview').empty();
	$('#preview').append(
		
		'<div class="img-border">' + 
			'<img src="assets/img/icons8-user-50.png" class="preview-img-prop">' +
		'</div>' + 
		'<h1>' + results[new_selected_usr].name + '</h1>'+
		'<p> "' + results[new_selected_usr].description + '"</p>'
		
	
	 );
	 $('#preview').append(

		'<div class="filters" id="filters">'
		 ); 

		for (let i = 0; i < get_filters.length; i++){
		
			$('#filters').append(
				'<a class="filter-button">' + get_filters[i] + '</a>'

			);

		}

		$('#filters').append(
			'</div>'
		); 


		$('#preview').append(
			'<button class="preview-add-button" id="_add_preview-' + new_selected_usr + '"> Add' + 
			'</button>' 
		);

		if ($("#_add-" + new_selected_usr ).is(":disabled") === true || friends_added.includes(new_selected_usr) === true){
			($("#_add_preview-" + new_selected_usr )).prop('disabled', true);
		}

		$("[id^=_add_preview-]").each(function() {
			$(this).click(function (){
					if ($(this).is(":disabled") !== true){
						console.log($("#_add-" + new_selected_usr ).is(":disabled"));

						let selected_usr = ($(this).attr("id"));
						selected_usr = selected_usr.slice(selected_usr.indexOf("w-") + 2);
						console.log(selected_usr);
						alert('Friend request sent to ' + results[selected_usr].name  );
						($(this)).prop('disabled', true);
						friends_added.push(new_selected_usr);
						$("#_add-" + new_selected_usr ).prop('disabled', true);
					}
				
				
			})
			
		});
		

	 if (new_selected_usr !== selected_usr){
	 	$('#_results-'+new_selected_usr).addClass("selected-item");
		 $('#_results-'+selected_usr).removeClass("selected-item");
		selected_usr = new_selected_usr;
	}

});



$("[id^=_add-]").each(function() {
	$(this).click(function (){
		let selected_usr = ($(this).attr("id"));
		selected_usr = selected_usr.slice(selected_usr.indexOf("-") + 1);
		console.log(selected_usr);
		alert('Friend request sent to ' + results[selected_usr].name  );

		$(this).prop('disabled', true);

		friends_added.push(selected_usr);
		$("#_add_preview-" + selected_usr ).prop('disabled', true);

	})
	
});


console.log(find_friend("Andrew", null, fake_friends));

//export  {fake_friends};