import React, { useRef } from "react";

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function AddNewProject({ onAddNewProject, onCancelNewProject }) {
  const modal = useRef();
  
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open()
      return;
    }

    onAddNewProject({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">It seems that the entered date is missing one of the values.</p>
        <p className="text-stone-600 mb-4">Please make sure a valid date is provided in every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancelNewProject} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
