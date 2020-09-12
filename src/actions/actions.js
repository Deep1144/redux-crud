import axios from 'axios';

const baseUrl = "http://localhost:4000/postMessages/";

export const Insert = (data) => {
    return (dispatch) => {
        axios.post(baseUrl, data).then(
            response => {
                // dispatch({
                //     type: 'INSERT',
                //     payload: response
                // });
                dispatch(FetchData());
            }
        ).catch(error => {
            console.log("Error");
        })
    }
};


export const Delete = (id) => {
    return (dispatch) => {
        axios.delete(baseUrl + id).then(
            response => {
                // dispatch({
                //     type: "DELETE",
                //     payload: response.data
                // });
                dispatch(FetchData());
            }
        ).catch(error => {
            console.log("Error");
        })
    }
};

export const Update = (data) => {
    return (dispatch) => {
        console.log(data)
        axios.put(baseUrl+data._id, data).then(
            response => {
                // dispatch({
                //     type: "UPDATE",
                //     payload: data
                // });
                dispatch(FetchData());
            }
        ).catch(error => {
            console.log("Error");
        })
    }
};

export const UpdateIndex = (id) => {
    return {
        type: "UPDATE_INDEX",
        payload: id
    }
};


export const FetchData = () => {
    return (dispatch) => {
        axios.get(baseUrl).then(response => {
            // console.log(response)
            dispatch({
                type: "FETCH",
                payload: response.data
            })
        })
    }
}