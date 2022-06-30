import React, { useState } from 'react'

function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const body = { description };
      const response = await fetch("https://todo-react-vinky.herokuapp.com/todos", {
        method: 'POST',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(body),
      })

      window.location = "/"
    } catch (error) {
      alert("Terjadi Kesalahan, Error = ", error.message)
    }
  }

  return (
    <>
      <div>
        <h1 className='mt-5 text-center'>Todo List</h1>
        <form className='d-flex mt-5' onSubmit={onSubmitForm}>
          <input
            type="text"
            className='form-control'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }} />
          <button className='btn btn-success'>Add</button>
        </form>
      </div>
    </>
  )
}

export default InputTodo