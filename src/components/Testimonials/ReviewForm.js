import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
} from "@material-ui/core";
import axios from "axios";
import { useAlert } from "react-alert";

const ReviewForm = ({ open, handleClose, fetchData }) => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [comment, setComment] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", selectedImage);
      formData.append("name", name);
      formData.append("subtitle", occupation);
      formData.append("comment", comment);
      const res = await axios.post(
        "http://localhost:5000/api/comment/create",
        formData
      );
      alert.success("You have successfully evaluated!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert.error("There are errors in the assessment");
    } finally {
      fetchData();
      setLoading(false);
      handleClose();
    }
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Write Your Thoughts</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <input
            type="file"
            accept="image/*"
            id="image-select"
            onChange={handleImageChange}
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              style={{
                marginTop: 10,
                width: "80px",
                height: "80px",
              }}
            />
          )}
        </FormControl>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="occupation"
          label="Occupation"
          fullWidth
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        <TextField
          margin="dense"
          id="comment"
          label="Comment"
          fullWidth
          multiline
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {loading ? "Waiting......." : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewForm;
