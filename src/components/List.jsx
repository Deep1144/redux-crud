import React from 'react';
import {Component} from "react/cjs/react.production.min";
import {Delete, FetchData, UpdateIndex} from "../actions/actions";
import connect from "react-redux/es/connect/connect";
import Form from "./Form";


class List extends Component {
    componentDidMount(){
        this.props.FetchData();
    }
    handleUpdate(item){
        this.props.UpdateIndex(item);
    }
    handleDelete(item){
        this.props.Delete(item._id);
    }
    render() {
        return (

            <div>
                <Form/>
                <table>
                    <tbody>
                    {
                        this.props.list.map((item,index)=>{
                            return (
                                <tr key={item._id}>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
                                        {item.message}
                                    </td>
                                    <td>
                                        <button onClick={()=>this.handleUpdate(index)}>Update</button>
                                        <button onClick={()=>this.handleDelete(item)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list : state.list
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        UpdateIndex : (id)=> dispatch(UpdateIndex(id)),
        FetchData : ()=>dispatch(FetchData()),
        Delete : (id)=>dispatch(Delete(id))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(List);

