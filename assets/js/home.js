
// $('#check').click(function(){
//     if($(this).prop("checked") == true){
//         console.log("Checkbox is checked.");
//         $("#t-det").addClass("strike");
//     }
//     else if($(this).prop("checked") == false){
//         console.log("Checkbox is unchecked.");
//         $("#t-det").removeClass("strike");

//     }
// });

$(".det-btn").click(function(){
    let taskName = $(this).attr('data-name') ; 
    let taskDate = $(this).attr('data-date') ; 
    let category = $(this).attr('data-category') ; 
    let priority = $(this).attr('data-priority') ; 
    let description = $(this).attr('data-description') ; 
    let id = $(this).attr('data-id') ;
    let striked = $(this).attr('data-striked') ;

    $("#tnm").html( taskName );
    $("#tdt").html( taskDate );
    $("#tcg").html( category );

    if(category == "Work"){
        $('.c-btn').css("background-color" , "rgb(143, 7, 143)") ;

    }else if(category == "Personal"){
        $('.c-btn').css("background-color" , "#3D6AB8") ;

    }else if(category == "Study"){
        $('.c-btn').css("background-color" , "#87431d") ;
        
    }else{
        $('.c-btn').css("background-color" , "gray") ;  
    }

    $("#tpr").html( priority );

    if(priority == "imp"){
        $('.p-btn').css("background-color" , "#E74C3C") ;

    }else if(priority == "urgent"){
        $('.p-btn').css("background-color" , "#F1C40F") ;

    }else if(priority == "notUrgent"){
        $('.p-btn').css("background-color" , "#3498DB") ;
        
    }else{
        $('.p-btn').css("background-color" , "#2ECC71") ;  
    }

    if(description==""){
        $("#tde").html(".");
    }else{
        $("#tde").html(description);
    }

    $("#delete-task-btn").attr('href' , `/delete-task/?id=${id}`) ;


    $('#comp-task-btn').click(function() {

        if(striked == "true"){
            
            $("#comp-task-btn").attr('href' , `/uncheck-task/?id=${id}`) ;
        }else{
            $("#comp-task-btn").attr('href' , `/check-task/?id=${id}`) ;
        }
    });
    


}) ; 
