//JQuery stuff
function clearWeaponDescription() {
    $('#description_shotgun').hide();
    $('#description_autorifle').hide();
    $('#description_revolver').hide();
    $('#description_rivetrifle').hide();
    $('#description_sword').hide();
}

var main = function () {
    
    //Buttons for weapons
    clearWeaponDescription();
    $('#weapon_select_button').hide();
    var descriptionDisplayed = false;
    $('#weapon_description').hide();
    $('.weapon_button').click(function () {
        var previouslySelectedButton = $(".button_selected");
        if (!$(this).is(previouslySelectedButton)){
            $(previouslySelectedButton).removeClass('button_selected');
        }
        // if button is already selected hide description
        if ($(this).hasClass('button_selected')){
            $('#weapon_description').slideUp('slow');  
            $(this).removeClass('button_selected');
            $('#weapon_instructions').fadeIn('slow', function(){
                $('#weapon_instructions').show();
            });
            $('#weapon_select_button').fadeOut('fast', function(){
                $('#weapon_select_button').hide();
            });
            descriptionDisplayed = false;
        } else {
            clearWeaponDescription();
            $(this).addClass('button_selected');
            
            // find which description to display based on the button id
            switch($(this).attr('id')) {
                case 'button_shotgun':
                    $('#description_shotgun').show();
                    break;
                case 'button_autorifle':
                    $('#description_autorifle').show();
                    break;
                case 'button_revolver':
                    $('#description_revolver').show();
                    break;
                case 'button_rivetrifle':
                    $('#description_rivetrifle').show();
                    break;
                case 'button_sword':
                    $('#description_sword').show();
                    break;
                default:
            }
            if (!descriptionDisplayed){
                $('#weapon_description').hide().slideDown('slow');
                $('#weapon_instructions').fadeOut('slow', function(){
                    $('#weapon_instructions').hide();
                });
                $('#weapon_select_button').fadeIn('slow', function(){
                    $('#weapon_select_button').show();
                });
                descriptionDisplayed = true;
            }
        }
    });
};

$(document).ready(main);