import {Posts,} from "./components/Posts";
import {PostDetails} from "./components/PostDetails";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter, RouteChildrenProps
} from "react-router-dom";
import {RouteComponentProps} from "react-router";

function App() {
    return (
        <div>
            <Router>
                <Link to={'/posts'}>posts</Link>
                <Route exact path={'/posts'} render={() => <Posts/>}/>
                <Route  path={'/posts/:id'} render={(props:RouteComponentProps) => <PostDetails {...props}/>}/>
            </Router>

        </div>
    );
}

export default App;
