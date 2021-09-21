import {IPost} from "../models/IPost";
import {MouseEvent} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export const Post = (props: IPost) => {


    let {body, id, title, userId} = props

    console.log(props.id)

    // let onclick = (e:MouseEvent<HTMLButtonElement>): void => {
    //     console.log(e.pageX)
    // }

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            {/*<button onClick={onclick}>details</button>*/}
            <Link to={'/posts/' + id}>details</Link>

        </div>
    )


}

