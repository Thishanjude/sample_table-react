import { Button } from "antd";
import React from "react";

class AddContact extends React.Component {

    state = {
        id : "",
        name: "",
        email: "",
        position: "",
        salary: ""
    };

    addform = (e) => {
        e.preventDefault();
        if(this.state.id === "" || this.state.name === "" || this.state.email === "" || this.state.position === "" || this.state.salary === "" ) {
            alert("All fields should be filled");
            return;
        }
        console.log(this.state);
        this.props.addDetailsHandler(this.state);
        this.setState({  id : "",
        name: "",
        email: "",
        position: "",
        salary:""})
    }
    render() {
        return(
            <div>
                <h1>Add details</h1>
                <form onSubmit={this.addForm}>
                    <div>
                        <label>ID</label>
                        <input 
                        type="text" 
                        name="Id" 
                        placeholder="ID"
                        value={this.state.id}
                        onChange={(e) => this.setState({id: e.target.value})}
                        />
                    </div>
                    <div>
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}
                        />
                    </div>
                    <div>
                        <label>Position</label>
                        <input 
                        type="text" 
                        name="position" 
                        placeholder="Position"
                        value={this.state.position}
                        onChange={(e) => this.setState({position: e.target.value})}
                        />
                    </div>
                    <div>
                        <label>Salary</label>
                        <input 
                        type="text" 
                        name="salary" 
                        placeholder="Salary"
                        value={this.state.salary}
                        onChange={(e) => this.setState({salary: e.target.value})}
                        />
                    </div>
                    <Button>Add</Button>
                </form>
            </div>
        );
    }
}

export default AddContact;