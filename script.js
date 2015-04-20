
jQuery(document).ready(function() {

var repoHTML = "<input type='text' name='user' value='jgbarah' " +
    "id='user' size='10' />" +
    "<input type='text' name='repo' value='GitHub-API' " +
    "id='repo' size='10' />" +
    "<button type='button'>Grab repo data</button>" +
    "<div id='repodata'/>";

	$('div#form button').click(function(){
			var token = $('#token').val();
			console.log(token);
			alert(token);
			
		var github = new Github({
			token: token,
			auth: "oauth"
		});
		
    $("#repoform").html(repoHTML)
    $("div#form button").click(getRepo);		
		
		
		
	});  
});
