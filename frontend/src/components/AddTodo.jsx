const AddTodo = (props) => {
    const handleValue = props.handleValue;
    const value = props.value;
    const editingId = props.editingId;
    const saveEdit = props.saveEdit;
    const addActivity = props.addActivity;

    return (
        <section>
            <h1 className="text-3xl font-medium underline mb-3">To-do List</h1>
            <input onChange={handleValue} value={value} type="text" name="evalue" className="border border-black rounded-md p-1 mr-2" placeholder="Add your new to-do" />
            <button onClick={editingId ? saveEdit : addActivity} className="text-white bg-black border font-medium border-black rounded-md px-2 py-1">{editingId ? "Save" : "Add"}</button>
        </section>
    )
};

export default AddTodo;