import React, { useState } from 'react'

function EditTodo({ todo }) {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description }
      const response = await fetch(`https://todo-react-vinky.herokuapp.com/todos/${todo.todo_id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
      })

      window.location = "/"
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <>
      <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button type="button" class="close" data-dismiss="modal"  onClick={() => setDescription(todo.description)}>&times;</button>
            </div>
            <div class="modal-body">
              <input
                className='form-control'
                type={'text'}
                value={description}
                onChange={e => setDescription(e.target.value)} />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}>
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default EditTodo