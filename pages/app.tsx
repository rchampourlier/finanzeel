import "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuthUser, withAuthUser, AuthAction } from "next-firebase-auth";
import { Button } from "../components/button";

type Props = {};

const App: React.FunctionComponent<Props> = ({}) => {
  function redirectToRoot() {
    window.location.replace("/");
  }

  const authUser = useAuthUser(); // the user is guaranteed to be authenticated

  function SignOutButton() {
    return (
      <Button
        label="Sign out"
        onClick={() => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              console.log("signed out");
              redirectToRoot();
            })
            .catch((error) => {
              console.log("error signing out: ", error);
            });
        }}
      />
    );
  }
  return (
    <div>
      <SignOutButton></SignOutButton>
    </div>
  );
};

const FullPageLoader = () => (
  <div>
    <h3>Loading...</h3>
  </div>
);

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  LoaderComponent: FullPageLoader,
})(App);
