import MainList from "../pages/main_list"
import {BrowserRouter , Route} from "react-router-dom"
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import SignIn from "../pages/sign_in"
import Header from "../components/header";
import {Grid} from "../elements"
import SignUp from "../pages/sign_up";

function App() {
  return (
    <>
    <Grid>
      <Header></Header>
        <ConnectedRouter history = {history}>
            <Route path = '/' exact component={MainList}></Route>
            <Route path = '/login' exact component={SignIn}></Route>
            <Route path = '/signup' exact component={SignUp}></Route>            
        </ConnectedRouter>
    </Grid>

    </>
  );
}

export default App;

