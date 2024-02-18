
export const ShowTaskControl = ({ isChecked,setShowCompleted, deleteAllTasksDone }) => {

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      deleteAllTasksDone();
    }
  }


  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={(e) => setShowCompleted(e.target.checked)} className='checkBox-showList' /> {" "}<label>Hidden/Show tasks completed</label>
      <button onClick={handleDelete}>Clear all tasks</button>
    </div>
  )
}
