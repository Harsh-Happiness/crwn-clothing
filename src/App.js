import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignIn from "./pages/sign-in-and-up/sign-in-and-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribe = null;
  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    console.debug(this.unsubscribe());
  }
  render() {
    return (
      <div className="body">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
