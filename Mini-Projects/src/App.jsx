import "./App.css";
import FetchData from "./fetchData/FetchData";
import Timer from "./timer/Timer";
// import ListComponent from './listComponent/ListComponent'
import ToggleSwitch from "./toggle/ToggleSwitch";
// import Counter from './counter/Counter'
// import UserForm from './userForm/UserForm'
import FormInputCapitalize from "./components/FormInputCapitalize";
// import ProductList from './components/ProductList'
import ShuffleList from "./components/ShuffleList";
import SearchFilter from "./Filter-Search/SearchFilter";
import { UseDebounce } from "./useDebounce/useDobounce";

function App() {
  return (
    <>
      {/* <FormInputCapitalize /> */}
      {/* <ShuffleList /> */}
      {/* <ProductList /> */}
      {/* <Counter /> */}
      {/* <UserForm /> */}
      {/* <ListComponent /> */}
      {/* <ToggleSwitch />  */}
      {/* <FetchData /> */}
      {/* <Timer /> */}
      {/* <SearchFilter /> */}
      <UseDebounce />
    </>
  );
}

export default App;
