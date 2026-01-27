import react from "react"
import reactDOM from "react-dom/client"
import {Heading} from "./components/Heading"
import {Input} from "./components/inputadd"

const App=()=>{
    return (<div>
        <Heading/>
        <Input/>
    </div>)
}

const root=reactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);