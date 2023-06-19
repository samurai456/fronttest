import { Dropdown,  DropdownButton} from 'react-bootstrap'

function CollectionDropdown() {  
  return (  
    <DropdownButton variant="light">  
        <Dropdown.Item>Delete</Dropdown.Item>  
        <Dropdown.Item>Edit</Dropdown.Item>  
    </DropdownButton>
  )
}  
export { CollectionDropdown };  