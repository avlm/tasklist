const status_options = {
    TODO: 0,
    DONE: 1,
    REMOVED: 2
}

const task_elem =
    '<div class="form-check">' +
        '<input name="taskCbx[]" class="form-check-input" type="checkbox" id="{{id}}" {{checked}}>' +
        '<label class="form-check-label" for="{{id}}">{{title}}</label> ' +
        '<i class="fas fa-trash"></i>' +
    '</div>'

$todo = $("#todo")
$done = $("#done")
$saveBtn = $("#saveBtn")
$taskTitle = $("#taskTitle")
$modal = $("#addTaskModal")
