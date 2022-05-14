import React, {Component} from "react"
import Parent from "./Parent"

class GrandParent extends Component {  
    shouldComponentUpdate(nextProps, nextState) {
        /*
            if (nextProps === this.props)

            Shallow comparison does not work this way.
            This will always return false
            For shallow comparison we must compare the Primitive data types,
            For shallow comparison in objects compare Primitive data types inside objects
        */

        /*
            We have to manually check for each prop
            Which is not always possible because we have to
            anticipate which props are coming
        */
        if (nextProps.count === this.props.count) {
            return false
        }
        return true
    }
      
    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a GrandParent Component</p>
                <Parent />
                <Parent />
            </div>
        )
    }
}

export default GrandParent