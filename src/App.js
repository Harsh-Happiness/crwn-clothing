import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignIn from "./pages/sign-in-and-up/sign-in-and-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribe = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    console.debug(this.unsubscribe());
  }
  render() {
    return (
      <div className="body">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser(user) returns an obj. dispatch takes this obj to reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
