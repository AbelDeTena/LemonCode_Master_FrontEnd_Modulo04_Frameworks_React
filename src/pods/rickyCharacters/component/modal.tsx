import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material";

export const Modal = ({
  isModalOpen,
  handleCloseModal,
  selectedCharacter,
}: any) => {
  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        PaperProps={{
          style: {
            borderRadius: 16,
            padding: "16px",
            backgroundColor: "rgba(10, 200, 200, 0.95)",
            border: "4px solid rgba(50, 250, 50, 0.95)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <DialogTitle>{selectedCharacter?.name}</DialogTitle>
        <DialogContent>
          <img src={selectedCharacter?.image} alt={selectedCharacter?.name} />
          <p>Species: {selectedCharacter?.species}</p>
          <p>Gender: {selectedCharacter?.gender}</p>
          <p>Status: {selectedCharacter?.status}</p>
          <p>Origin: {selectedCharacter?.origin.name}</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseModal}
            color="primary"
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
