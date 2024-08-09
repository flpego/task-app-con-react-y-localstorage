import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';

export const ShowTaskControl = ({ isChecked, setShowCompleted, deleteAllTasksDone }) => {

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      deleteAllTasksDone();
    }
  }

  return (
    <div className="d-flex-center show-task">
      <label>Hidden/Show tasks completed</label>
      <InputSwitch checked={isChecked} onChange={(e) => setShowCompleted(e.value)} />
      <div>

        <Button label="Clear all tasks" icon="pi pi-times" onClick={handleDelete} className="p-button-danger" />
      </div>
    </div>
  )
}
