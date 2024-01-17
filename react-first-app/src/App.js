import logo from "./logo.svg";
import "./App.css";
// import Header from './components/header';
// import Footer from './components/footer';
// import TestClassComponent from './components/ComponentDetail/classComp'
// import FunctionalComp from './components/ComponentDetail/functionalComp';
import ColorSchemesExample from "./components/navBar";
import JsxComp from "./JsxDetalis/JsxComp";
import FragmtComp from "./JsxDetalis/fragmt";
import { Home } from "./components/ReactRouting/home";
import Website from "./components/ReactRouting/website";
import "bootstrap/dist/css/bootstrap.min.css";
import ClassCompLifeCycle from "./components/compLifeCycle.js/classCompLifeCycle";
import ApiIntegration from "./components/apiIntegration/ApiIntegration";
import PureComp from "./components/pureComp&ChildComm/PureComp";
// import ParentComp from './components/pureComp&ChildComm/ParentComp';
import FunctionChild from "./components/pureComp&ChildComm/FunctionChild";
import FunctionParent from "./components/pureComp&ChildComm/FunctionParent";
import FormBasics from "./components/formHandling/FormBasics";
import AdvanceForm from "./components/formHandling/AdvanceForm";
import ReactBootstrapAdvFrom from "./components/formHandling/ReactBootstrapAdvFrom";
import ClassCompForm from "./components/formHandling/ClassCompForm";
import ParentCompDrilling from "./components/propDrilling/ParentCompDrilling";
import ParentUseContext from "./components/useContext/ParentUseContext";
import ClassParent from "./components/ContextInClassComp/ClassParent";
import ErrorBoundries from "./components/ErrorBoundries/ErrorBoundries";
import Counter from "./components/ErrorBoundries/Counter";
import ErrorBoundaries from "./components/ErrorBoundries/ErrorBoundries";
import MemoParent from "./components/Memo/MemoParent";
import ParentCompUseMemo from "./components/Memo/ParentCompUseMemo";
import UseReducedHook from "./components/useReduceHook/UseReducedHook";
import UseCallBackHook from "./useCallBackHook/UseCallBackHook";
import ControlledComp from "./components/ControlledComp&UncontrolledComp/ControlledComp";
import UncontrolledComp from "./components/ControlledComp&UncontrolledComp/UncontrolledComp";
import Charts from "./components/Apex-Chart/ChartsTest";

function App() {
  return (
    <div>
      <div>
        {/* <ColorSchemesExample/> */}
        {/* <Header /> */}
        <div className="App">
          {/* <h3>This is the main heading</h3> */}
          {/* <TestClassComponent /> */}
          {/* <FunctionalComp/> */}
          {/* <JsxComp/> */}
          {/* <FragmtComp/> */}

          {/* <Website/> */}

          {/* <ClassCompLifeCycle/> */}
          {/* <ApiIntegration/> */}

          {/* <PureComp/> */}
          {/* <ParentComp/> */}
          {/* <FunctionParent/> */}
          {/* <FormBasics/> */}
          {/* <AdvanceForm/> */}
          {/* <ReactBootstrapAdvFrom/> */}
          {/* <ClassCompForm/> */}
          {/* <ParentCompDrilling/> */}
          {/* <ParentUseContext/> */}
          {/* <ClassParent/> */}
          {/* <ErrorBoundaries>
            <Counter />
          </ErrorBoundaries> */}
          {/* <MemoParent/> */}
          {/* <ParentCompUseMemo/> */}
          {/* <UseReducedHook/> */}
          {/* <UseCallBackHook/> */}
          {/* <ControlledComp/> */}
          {/* <UncontrolledComp/> */}
          <Charts/>
        </div>
      </div>
    </div>
  );
}

export default App;
