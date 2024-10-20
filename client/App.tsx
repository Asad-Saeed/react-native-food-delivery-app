import NavigationComponent from "@/components/layout/navigation";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationComponent />
    </Provider>
  );
}
