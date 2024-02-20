
export const ShowTaskControl = ({ isChecked,setShowCompleted, deleteAllTasksDone }) => {

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      deleteAllTasksDone();
    }
  }


  return (
    <div className="d-flex-center show-task">
    <label>Hidden/Show tasks completed</label>

      <button onClick={handleDelete}>Clear all tasks</button>
      <input type="checkbox" checked={isChecked} onChange={(e) => setShowCompleted(e.target.checked)} className='checkBox-showList' /> 
    </div>
  )
}
