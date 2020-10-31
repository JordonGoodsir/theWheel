import React, {Component} from 'react'; 
import Wheel from "./Wheel"


class List extends Component {  
    constructor(props){ 
        super(props) 
        this.state = {names: [], wheelTime: false}  
    }   

    addPerson = (event) =>{ 
        event.preventDefault() 
        this.setState({names: this.state.names.push(event.target.person.value)}) 
        this.setState({names: this.state.names}) 
        console.log(document.elementFromPoint(2,2))  
    }  

    removePerson = (event) =>{  
        this.setState({names: this.state.names.pop()}) 
        this.setState({names: this.state.names}) 
    }  

    finalize = (event) =>{  
        document.getElementById("peopleForm").innerHTML=""  
        this.setState({wheelTime: true}) 
    }

    
    render(){ 
        return(  
            <div> 

            <div id="peopleForm">  
                <form onSubmit={this.addPerson}> 
                    <input type="text" className="person" name="person" defaultValue="person"/> 
                    <input type="submit" className="submitPeople" value="Submit"/>
                </form>   
                <button onClick={this.removePerson}>Remove last</button> 
                <button onClick={this.finalize}>Thats all</button>

                <div> 
                <p>{this.state.names.join(", ")}</p>
                </div>    
                <div>find me</div>
            </div>   
            
            {this.state.wheelTime ? <Wheel names={this.state.names.join(", ")} /> : "good" } 
            
            </div>

        )
    }

}  

export default List