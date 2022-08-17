import React from "react";

export default class PasswordPage extends React.Component{

    state = {
        pending: false
    }

    handleClick = () => {
        //event.preventDefault();
        /* const {username, password} = this.state;
        const body = {
            username, 
            password
        }; */

        /*let genPassword = this.generatePassword();
        console.log(genPassword);

        const body = {
            accountType: this.state.accountType,
            username: this.state.username,
            password: genPassword
        };*/
        
        //console.log(body.password);
        const {push} = this.props.history;

        

        this.setState({pending: true});
        
        try{
            push("/signin");
        }catch (error){
            if(error.response.data.validationErr){
                this.setState({
                    errors: error.response.data.validationErr
                });
            }
        }

        this.setState({pending: false});

        /* signUpApi(body)
            .then(response => {
                this.setState({pending: false});
            })
            .catch(error => {
                this.setState({pending: false});
            }); */
    
    };


    render(){
        const {state} = this.props.location;
        const { pending } = this.state;
        return(
            <div>
                <br/>
                <br/> 
                <h2 className="text-center">New account's password: </h2>
                <br/>
                <p className="text-center">{state}</p>
                <br/>
                <div className='text-center'>
                        <button className='btn btn-primary' onClick={this.handleClick} disabled={pending}>
                            {pending && <span className="spinner-border spinner-border-sm"></span>} Continue</button>
                </div>
            </div>
        )
    }
}