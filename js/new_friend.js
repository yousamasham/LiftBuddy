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
		filters: [1,4,8],
	},
	{
		name: "Albert Smith",
		description: "Looking for someone to help push me in the gym, also looking to do the same",
		filters: [2,5,8],
	},
	{
		name: "Brian Smith",
		description: "New to the area, looking to help find people to meet and workout with",
		filters: [0],
	},
	{
		name: "Daniel Smith",
		description: "I am a gym fanatic and love all aspects of weight lifting. Love all kinds of exercises regarding weight lifting",
		filters: [0,3,7],
	},
	{
		name: "James Allice",
		description: "New to weight lifting, love to learn from others that are willing to help!",
		filters: [2,3,8],
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
var filters_selected = [];

function find_matching_filter(selected_filter, usr_filters){
// https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript	
	if (usr_filters.some(current_filter => selected_filter.indexOf(current_filter) >= 0)){
		console.log("FOUND FILTER");
		return true;
	}else{
		return false;
	}
}

function find_friend(name, filter,  fake_friends){
	let results = []

	console.log(name.length);
	console.log(filter.length);

	//return all names
	if (name === "" && filter.length === 0 ){ 
		console.log("Both names and filter arr are empty");
		return fake_friends; 
	}

	//both name and filter provided
	if (name && filter.length > 0){ 
		console.log("NAME AND FILTER PROVIDED");
		fake_friends.filter(user =>{
			var usr_name = user.name;
			usr_name = usr_name.toLowerCase();
			var usr_filter = user.filters;
			if (usr_name.indexOf(name.toLowerCase()) >= 0 && find_matching_filter(filter, usr_filter) === true){
				results.push(user);
			}
		});
		return results;
		
	//only name provided
	}else if (name && filter.length === 0){ 
		//console.log("Name provided, NO FILTER");

		fake_friends.filter(user =>{
			var usr_name = user.name;
			usr_name = usr_name.toLowerCase();
			if (usr_name.indexOf(name.toLowerCase()) >= 0){
				results.push(user);
			}
		})
		return results;

	//only filter provided	
	}else{
		//console.log("Name provided, NO FILTER");
		fake_friends.filter(user =>{
			var usr_filter = user.filters;
			if (find_matching_filter(filter, usr_filter) === true){
				results.push(user);
			}
		})
		return results;
	}
}

// Render all filter buttons from filters_arr
$('#filters').ready(function(){
	for (let i = 0; i < filters_arr.length; i++){
		$('#filters').append(
			'<button class="filter-button" id="_filter-button-' + i + '">' + filters_arr[i] +'</button>'
			);
	}
	
});

function generate_results(usr_name, usr_description, i){
	return '<div class="result-item" id="_results-' + i + '">' + 
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

	
'</div>'  ;
}

// Click Function when "search" is clicked
$('#name_search').ready(function() {
	$('#search_button').click(function() {
			$('#results').empty();
			results = [];
            var search_name = $("#name_search").val();
			console.log("Search Name = " + typeof(search_name));
			results = find_friend(search_name, filters_selected, fake_friends);

			for (let i = 0; i < results.length; i++) {
				const user = results[i];
				const usr_name = user.name;
				var usr_description = user.description;
				const slice_amount = 45;
				if (usr_description && usr_description.length > slice_amount){
					usr_description = usr_description.slice(0,slice_amount) + '...';
				}
			
				$('#results').append(
						generate_results(usr_name,usr_description, i)
				)
		
				
				}

	});
});

function create_results(){
	results = fake_friends;
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
				'<p>"' + usr_description + '"</p>' + 
			'</div>'+
			'<div class="results-button-grid">' + 
				'<button class="results-button-add" id=_add-' + i + '> Add' + 
				'</button>' + 
				'<button class="results-button-view" id=_view-' + i + '> View' + 
				'</button>' + 		
			'</div>' +
		'</div>' )

		}
		$('#preview').empty();
		$('#preview').append(
			 
				'<h1> Select view button to preview a profile </h1>'
			
			)

}
let selected_usr = -1;

create_results(); // create results on loading of New Friend page

$("[id^=_view-]").click(function() {
	let new_selected_usr = ($(this).attr("id"));
	new_selected_usr = new_selected_usr.slice(new_selected_usr.indexOf("-") + 1);

	let get_filters = [];
	for (let i = 0; i < fake_friends[new_selected_usr].filters.length; i++){
		get_filters.push(filters_arr[fake_friends[new_selected_usr].filters[i]]);
	}

	$('#preview').empty();
	$('#preview').append(
		'<div class="img-border">' + 
			'<img src="assets/img/icons8-user-50.png" class="preview-img-prop">' +
		'</div>' + 
		'<h1>' + results[new_selected_usr].name + '</h1>'+
		'<p> "' + results[new_selected_usr].description + '"</p>'
	 );
	 $('#preview').append(
		'<div class="filters" id="preview-filters">'
		 ); 

		for (let i = 0; i < get_filters.length; i++){
		
			$('#preview-filters').append(
				'<button class="filter-button">' + get_filters[i] + '</button>'
			);
		}

		$('#preview-filters').append(
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
						let selected_usr = ($(this).attr("id"));
						selected_usr = selected_usr.slice(selected_usr.indexOf("w-") + 2);
						
						alert('Friend request sent to ' + results[selected_usr].name  );
						($(this)).prop('disabled', true);
						friends_added.push(new_selected_usr);
						$("#_add-" + new_selected_usr ).prop('disabled', true);
					}
				
				
			})
			
		});
		

	 if (new_selected_usr !== selected_usr){
	 	$('#_results-'+new_selected_usr).addClass("selected-item"); //highlight the new user
		$('#_results-'+selected_usr).removeClass("selected-item"); //remove highlight from a different user already selected
		selected_usr = new_selected_usr;
	}

});



$("[id^=_add-]").each(function() {
	$(this).click(function (){
		let selected_usr = ($(this).attr("id"));
		selected_usr = selected_usr.slice(selected_usr.indexOf("-") + 1);

		alert('Friend request sent to ' + results[selected_usr].name  );

		$(this).prop('disabled', true);

		friends_added.push(selected_usr);
		$("#_add_preview-" + selected_usr ).prop('disabled', true);

	})
	
});


$('#filters').ready(function () {
	$("[id^=_filter-button-]").each(function() {
		$(this).click(function (event){
			event.preventDefault();
			let clicked_filter = ($(this).attr("id"));
			clicked_filter = clicked_filter.slice(clicked_filter.indexOf("on-") + 3);
			clicked_filter = parseInt(clicked_filter,10);

			if (filters_selected.includes(clicked_filter) === true){
				$(this).removeClass("filter-button-selected");
				filters_selected.splice(filters_selected.indexOf(clicked_filter),1);

			}else{
				$(this).addClass("filter-button-selected");
				filters_selected.push(parseInt(clicked_filter,10));
			}

		})
		
	})
});


$('#clear-button').click(function(){
		create_results();
		friends_added = [];
		filters_selected = [];

		for (let i = 0; i < filters_arr.length; i++){
			$('#_filter-button-' + i).removeClass("filter-button-selected");
		}

		if (selected_usr >= 0){
			$('#_results-'+selected_usr).removeClass("selected-item");
		}

		selected_usr = -1;

		$('#name_search').val('');

});
