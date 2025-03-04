import './styles.scss'
import { Button, Input } from '@mui/material';

export const Sites = () => {
  return (
    <>
      <div className="sites__header">
        <h2 className="sites__header-title">Content</h2>
        <Button variant='text' color='secondary'>Settings</Button>
      </div>
      <div className="sites__actions">
        <div className="sites__actions-container">
          <Input placeholder='Search' disableUnderline={true}/>
          <Button variant='contained' color='secondary'>Filters</Button>
        </div>
        <Button variant='contained' color='primary'>Add content</Button>
      </div>
    </>
  )
}
