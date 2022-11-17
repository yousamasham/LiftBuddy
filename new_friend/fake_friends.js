const fake_friends = [
	{
		name: "Andrew Balmakund",
		description: "Started this journey lifting very light. Looking To find someone or a group of individuals to help push eachtother",
		filters: [0,3],
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
const filters = [
	"New","Intermediate", "Expert", 
	"Young Age", "Middle Age", "Old Age",
	"Lightweight", "Middleweight", "Heavyweight"
];


var results = [];


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
				'<button id=add-' + i + '> Add' + 
				'</button>' + 

				'<button id=view-' + i + '> View' + 
				'</button>' + 
			
			'</div>' +

			
		'</div>' )

		
		}

		$('#preview').append(
			'<div class="result-item" id="_results-' + 0 + '">' + 
				'<div class="profile-frame">' + 
					'<img src="assets/img/icons8-user-50.png">' +
				'</div>' + 
				'<div class="result-short-info">'+
					'<h2>' + results[0].name + '</h2>'+
					'<p>' + results[0].description + '</p>' + 
				'</div>'+
	
				
			'</div>' )

}

//Find certain result elements
$("[id^=_results-").click(function() {
	alert('CLICKED');
});

create_results();
console.log(find_friend("Andrew", null, fake_friends));

//export  {fake_friends};