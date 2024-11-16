import Delete from '../assets/bin.png';
import Edit from "../assets/pen.png";

const TodoList = (props) => {
    const activity = props.activity;
    const toggleComplete = props.toggleComplete;
    const deleteActivity = props.deleteActivity;
    const editActivity = props.editActivity;
    return (
        <section>
            <ol className="mt-2 text-left">
                {activity.map((item, index) => {
                    return (
                        <li key={item._id} className={`flex justify-between gap-3 border-b-2 border-black py-1.5 ${item.completed ? "line-through" : "none"}`}>
                            <span>
                                <input type="checkbox" checked={item.completed || false} onChange={() => toggleComplete(item._id, item.completed)} />
                                {index + 1}. {item.activity}</span>
                            <span className="flex gap-2 items-center">
                                <button className='border border-black rounded-full' onClick={() => { deleteActivity(item._id) }}><img className='min-w-6' src={Delete} alt="Delete" /></button>
                                <button className='border border-black rounded-full' onClick={() => { editActivity(item._id, item.activity) }}><img className='min-w-6' src={Edit} alt="Edit" /></button>
                            </span>
                        </li>);
                })}
            </ol>
        </section>
    )
};

export default TodoList;