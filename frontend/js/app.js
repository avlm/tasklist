$saveBtn.on("click", function(){
    taskTitle = $taskTitle.val()
    createTask(taskTitle)
    $modal.modal('hide')
})

$modal.on('show.bs.modal', function(){
    $taskTitle.val("")
})

$modal.on('shown.bs.modal', function(){
    $taskTitle.focus()
})
