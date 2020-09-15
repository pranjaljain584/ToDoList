
// var idDiv = $("#Details") ;

$(".det-btn").click(function(){
    let taskName = $(this).attr('data-name') ; 
    let taskDate = $(this).attr('data-date') ; 
    let category = $(this).attr('data-category') ; 
    let priority = $(this).attr('data-priority') ; 
    let description = $(this).attr('data-description') ; 
    let id = $(this).attr('data-id') ;
    console.log(taskName, taskDate , category , priority , description , id) ;
    // idDiv.html( taskName );
    $("#delete-task-btn").attr('href' , `/delete-contact/?id=${id}`) ;

}) ; 
