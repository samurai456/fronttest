import 'bootstrap/dist/css/bootstrap.min.css'
import { AdminPanel } from './components/adminPanel/adminPanel'
import { HeaderFrame } from './components/header/headerFrame'
import { CollectionsList } from './components/collectionsList/collectionsList'
import { Collection } from './components/collection/collection'
import { CollectionForm } from './components/collectionForm/collectionForm'
import { SignIn } from './components/signIn/signIn'
import { SignUp } from './components/signUp/signUp'

function App(){
  return(
    <div>
      <SignIn />
    </div>
  ) 
}

export default App