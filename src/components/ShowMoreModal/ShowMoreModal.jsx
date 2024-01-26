import React, { memo, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ButtonMoreStyle, ModalStyle } from './style';

export const BasicModal = memo(({ quizInfo }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ButtonMoreStyle onClick={() => setOpen(true)}>Show More</ButtonMoreStyle>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalStyle>
          <Box>
            <img src={quizInfo.image} alt="quizInfo"/>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {quizInfo.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} component='p'>
              {quizInfo.text}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} component='p'>
              {quizInfo.time}
            </Typography>
          </Box>
        </ModalStyle>
      </Modal>
    </div>
  );
});

BasicModal.displayName = 'BasicModal';
