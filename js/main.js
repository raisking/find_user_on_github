$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;

        //request to github
        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: '1178504a091b4bbe37e9',
                client_secret: '6973d5fa6672ac59142d3869f543e8493402e1ec'
            }
        }).done(function(user){
            
        });
    });

});