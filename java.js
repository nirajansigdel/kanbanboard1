$(document).ready(function(){
    $(".memo").draggable({
        cursor: "move",
        distance: 20,
        revert: "invalid"
    });

    $(".card").droppable({
        tolerance: "pointer"
    });

    $(".backlog-card").droppable("option", "accept", "");

    $(".todo-card").droppable("option", "accept", ".backlog-memo, .reopen-memo");
    $(".todo-card").droppable("option", "drop", function(event, ui){
        $(ui.draggable).addClass("todo-memo");
        $(ui.draggable).removeClass("backlog-memo");
        $(ui.draggable).removeClass("reopen-memo");
        $(ui.draggable).removeAttr("style");
        $(this).find(".card-body").append(ui.draggable);
    });


    $(".in-progress-card").droppable("option", "accept", ".todo-memo");
    $(".in-progress-card").droppable("option", "drop", function(event, ui){
        $(ui.draggable).addClass("in-progress-memo");
        $(ui.draggable).removeClass("todo-memo");
        $(ui.draggable).removeAttr("style");
        $(this).find(".card-body").append(ui.draggable);
    });

    $(".to-be-tested-card").droppable("option", "accept", ".in-progress-memo");
    $(".to-be-tested-card").droppable("option", "drop", function(event, ui){
        $(ui.draggable).addClass("to-be-tested-memo");
        $(ui.draggable).removeClass("in-progress-memo");
        $(ui.draggable).removeAttr("style");
        $(this).find(".card-body").append(ui.draggable);
    });

    $(".done-card, .reopen-card").droppable("option", "accept", ".to-be-tested-memo");
    $(".done-card").droppable("option", "drop", function(event, ui){
        $(ui.draggable).addClass("done-memo");
        $(ui.draggable).removeClass("to-be-tested-memo");
        $(ui.draggable).removeClass("reopen-memo");
        $(ui.draggable).removeAttr("style");
        $(this).find(".card-body").append(ui.draggable);
    });

    $(".reopen-card").droppable("option", "drop", function(event, ui){
        $(ui.draggable).addClass("reopen-memo");
        $(ui.draggable).removeClass("to-be-tested-memo");
        $(ui.draggable).removeAttr("style");
        $(this).find(".card-body").append(ui.draggable);
    });
});






