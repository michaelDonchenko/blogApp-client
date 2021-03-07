import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const UserImages = ({ classes, values, setValues }) => {
  const { images } = values
  return (
    <Accordion className={classes.accordionStyle}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel2-content'
        id='panel2-header'
      >
        <h3>User Images</h3>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <div className={classes.imagesContainer}>
          {images && images.length > 0
            ? images.map((img) => (
                <img
                  aria-controls='imageMenu'
                  aria-haspopup='true'
                  className={classes.imageInContainer}
                  src={img.url}
                  key={img.public_id}
                  onClick={(e) =>
                    setValues({
                      ...values,
                      imgMenu: e.currentTarget,
                      imgPublic_id: img.public_id,
                    })
                  }
                  alt='failed to upload'
                />
              ))
            : null}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default UserImages
