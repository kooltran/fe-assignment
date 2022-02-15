import React from 'react'

import Alert from '@mui/material/Alert'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'

import './NotificationDialog.scss'

const NotificationDialog = ({ type, message, handleCloseDialog }) => {
  return (
    <Slide direction="left" in={!!type} mountOnEnter unmountOnExit>
      <Alert
        className="notification-dialog"
        severity={type}
        color={type}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleCloseDialog}
          >
            <CloseOutlinedIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Slide>
  )
}

export default NotificationDialog
