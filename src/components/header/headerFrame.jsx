import { Header } from './header'

function HeaderFrame({children}){
    return(
        <div className="overflow-x-hidden d-flex flex-column flex-shrink-0 position-absolute end-0 start-0 top-0 bottom-0">
            <Header />
            <div className="flex-grow-1 overflow-auto">
                {children}
            </div>
        </div>
    )
}

export { HeaderFrame }


const data = Array(100).fill('some')