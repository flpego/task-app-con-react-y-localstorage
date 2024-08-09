import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog';

export const ShowTaskControl = ({ isChecked, setShowCompleted, deleteAllTasksDone }) => {

  const [visible, setVisible] = useState(false);
  const toast = useRef(null);

  const accept = () => {
    deleteAllTasksDone();
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'All completed tasks have been cleared.', life: 3000 });
    setVisible(false);
  }

  const reject = () => {
    toast.current.show({ severity: 'info', summary: 'Cancelled', detail: 'Action cancelled', life: 3000 });
    setVisible(false);
  }

  return (
    <div className="d-flex-center show-task">
      <Toast ref={toast} />
      <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to delete all completed tasks?" 
          header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />

      <label>Hidden/Show tasks completed</label>
      <InputSwitch checked={isChecked} onChange={(e) => setShowCompleted(e.value)} />
      <div>
        <Button label="Clear all tasks" icon="pi pi-times" onClick={() => setVisible(true)} className="p-button-danger" />
      </div>
    </div>
  )
}
