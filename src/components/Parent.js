import React, {Component} from "react"
import Child from "./Child"

class Parent extends Component {
    render() {
        console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
        return (
            <div>
                <p>.[ ]   [👩🏼‍⚕️]   [ ]   [ ] I'm a Parent Component</p>
                <Child />
                <Child />
            </div>
        )
    }
}

export default Parent