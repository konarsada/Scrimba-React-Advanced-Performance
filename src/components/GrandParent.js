import React, {PureComponent} from "react"
import Parent from "./Parent"

class GrandParent extends PureComponent {
    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered", this.props.count)
        
        return (
            <div>
                <p>[👴🏼]   [ ]   [ ]   [ ] I'm a GrandParent Component {this.props.count}</p>
                <Parent />
                <Parent />
            </div>
        )
    }
}

export default GrandParent