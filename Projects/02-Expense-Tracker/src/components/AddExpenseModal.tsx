import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/Dialog";

interface AddExpenseModalProps {
  showAddExpenseModal: boolean;
  setShowAddExpenseModal: (open: boolean) => void;
}

const AddExpenseModal = ({
  showAddExpenseModal,
  setShowAddExpenseModal
}: AddExpenseModalProps) => {

  const onOpenChange = () => {
    setShowAddExpenseModal(false);
  }

  return (
    <Dialog open={showAddExpenseModal} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddExpenseModal;
