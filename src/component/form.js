import React,{Component} from 'react';
import'./table.css';

class Form extends Component{
    initialState ={
        custname :'',
        city:'',
        phone:'',
        email:''
    }
    state = this.initialState;
    handleChange = (event)=>{
        const {name,value}= event.target
        this.setState({
            [name]:value,
        })
    }
    submitForm =()=>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render(){
        const {custname,city,phone,email}=this.state;
        return(
            <form>
                <section>
                    <label htmlFor="name">Custname</label><br/>
                    <input type="text" name="custname"id="custname" value={custname} onChange={this.handleChange}/>
                </section>
                <section>
                    <label htmlFor="city">City</label><br/>
                    <input type="text" name="city" id="city" value={city} onChange={this.handleChange}/>
                </section>
                <section>
                    <label htmlFor="name">Phone</label><br/>
                    <input type="number"name="phone"id="phone" value={phone} onChange={this.handleChange}/>
                </section>
                <section>
                    <label htmlFor="name">Email</label><br/>
                    <input type="email"name="email"id="email" value={email} onChange={this.handleChange}/>
                </section>
                <section>
                    <input type="button" value="Submit" onClick = {this.submitForm} />
                </section>
            </form>
        );
    }
}

export default Form;