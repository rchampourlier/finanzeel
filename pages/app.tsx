import "react";
import "firebase/auth";
import { useAuthUser, withAuthUser, AuthAction } from "next-firebase-auth";
import { Dashboard } from "../components/dashboard";

type Props = {};

const App: React.FunctionComponent<Props> = ({}) => {
  const authUser = useAuthUser(); // the user is guaranteed to be authenticated
  return <Dashboard />;
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
