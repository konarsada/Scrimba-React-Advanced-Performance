import React, {Component} from "react"

class GrandChild extends Component {
    render() {
        console.log("[ ]   [ ]   [ ]   [πΆπ»] rendered")
        return (
            <div>
                <p>[ ]   [ ]   [ ]   [πΆπ»] I'm a GrandChild Component</p>
            </div>
        )
    }
}

export default GrandChild