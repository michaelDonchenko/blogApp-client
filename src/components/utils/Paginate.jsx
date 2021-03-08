import React from 'react'
import { Pagination } from '@material-ui/lab'
import { Typography } from '@material-ui/core'

const Paginate = ({ page, pages, handlePageChange }) => {
  return (
    <div>
      <Typography
        component='div'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Pagination
          count={pages && parseInt(pages) > 1 && parseInt(pages)}
          page={page || 1}
          color='primary'
          onChange={handlePageChange}
        />
      </Typography>
    </div>
  )
}

export default Paginate
