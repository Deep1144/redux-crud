import React from 'react';
import {Component} from "react/cjs/react.production.min";
import {Insert, Update} from "../actions/actions";
import connect from "react-redux/es/connect/connect";


class Form extends Component {
    state = {...this.returnStateObject()};

    componentDidUpdate(oldProps){

        if(oldProps.currentIndex !== this.props.currentIndex || oldProps.list.length !== this.props.list.length){
            console.log("updated")
           this.setState({...this.returnStateObject()})
        }
    }

    returnStateObject(){
        if(this.props.currentIndex === -1){
            return {
                title : '',
                message : ''
            }
        }
        else{
            console.log( this.props.list[this.props.currentIndex])
            return this.props.list[this.props.currentIndex];
        }
    }

    handleInputChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.props.currentIndex === -1){
            this.props.Insert(this.state);
        }else{
            this.props.Update(this.state);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input type='text' name='title' value={this.state.title} onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='text' name='message' value={this.state.message} onChange={(e)=>this.handleInputChange(e)}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        Insert : (data)=>dispatch(Insert(data)),
        Update : (data)=>dispatch(Update(data))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Form);