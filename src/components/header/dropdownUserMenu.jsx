import { Dropdown,  DropdownButton} from 'react-bootstrap'
import userIcon from '../adminPanel/static/user.png'

function DropdownUserMenu() {  
  return (  
    <DropdownButton variant="light" title={<img src={userIcon} height={25} />}>  
        <Dropdown.Item>Your collections</Dropdown.Item>  
        <Dropdown.Item>Settings</Dropdown.Item>  
    </DropdownButton>
  )
}  
export { DropdownUserMenu };  