function listTasks(data) {
    for (i=0; i<data.length; i++) {
        status = data[i].status
        task = task_elem
            .replace(/{{id}}/g, data[i].id)
            .replace("{{title}}", data[i].title)

        if (status == status_options.TODO) {
            task = task.replace("{{checked}}", "")
            $todo.append(task)
        } else {
            task = task.replace("{{checked}}", "checked")
            $done.append(task)
        }
    }
}

function addEvents() {
    $("input[name='taskCbx[]']").click(function(){
        id = $(this).attr('id')
        title = $("label[for='"+ id +"']").text()
        checked = $(this).prop("checked")
        finishReopenTask(id, title, checked, $(this))
    })

    $(".fas").click(function(){
        id = $(this).prev().prev().attr('id')
        title = $("label[for='"+ id +"']").text()
        deleteTask(id, title, $(this))
    })
}

function appendTask(data) {
    task = task_elem
        .replace(/{{id}}/g, data.id)
        .replace("{{title}}", data.title)
        .replace("{{checked}}", "")

    $todo.append(task)
    addEvents()
}

function appendDoneTask(data) {
    task = task_elem
        .replace(/{{id}}/g, data.id)
        .replace("{{title}}", data.title)
        .replace("{{checked}}", "checked")

    $done.append(task)
    addEvents()
}

function getTasks() {
    return $.ajax({
        url: 'http://localhost:8000/api/',
        type: 'GET',
        success: function(result){
            listTasks(result)
        },
    })
}

function createTask(title) {
    $.ajax({
        url: 'http://localhost:8000/api/',
        type: 'POST',
        data: {title: title, status: status_options.TODO},
        success: function(result){
            appendTask(result)
        },
    })
}

function deleteTask(id, title, elem) {
    $.ajax({
        url: 'http://localhost:8000/api/' + id + '/',
        type: 'PUT',
        data: {title: title, status: status_options.REMOVED},
        success: function(){
            elem.parent().remove()
        },
    })
}

function finishReopenTask(id, title, checked, elem) {
    if (checked)
        status = status_options.DONE
    else
        status = status_options.TODO

    $.ajax({
        url: 'http://localhost:8000/api/' + id + '/',
        type: 'PUT',
        data: {title: title, status: status},
        success: function(result){
            if (checked)
                appendDoneTask(result)
            else
                appendTask(result)
            elem.parent().remove()
        }
    })
}

$.when(getTasks()).done(function(){
    addEvents()
})
