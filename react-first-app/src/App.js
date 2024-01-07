import logo from './logo.svg';
import './App.css';
// import Header from './components/header';
// import Footer from './components/footer';
// import TestClassComponent from './components/ComponentDetail/classComp'
// import FunctionalComp from './components/ComponentDetail/functionalComp';
import ColorSchemesExample from './components/navBar';
import JsxComp from './JsxDetalis/JsxComp';
import FragmtComp from './JsxDetalis/fragmt';
import { Home } from './components/ReactRouting/home';
import Website from './components/ReactRouting/website';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassCompLifeCycle from './components/compLifeCycle.js/classCompLifeCycle';
import ApiIntegration from './components/apiIntegration/ApiIntegration';
import PureComp from './components/pureComp&ChildComm/PureComp';
import ParentComp from './components/pureComp&ChildComm/ParentComp';
import FunctionChild from './components/pureComp&ChildComm/FunctionChild';
import FunctionParent from './components/pureComp&ChildComm/FunctionParent';
function App() {
  return (
    <div>
      <div>
        {/* <ColorSchemesExample/> */}
        {/* <Header /> */}
        <div className='App'>
          {/* <h3>This is the main heading</h3> */}
          {/* <TestClassComponent /> */}
          {/* <FunctionalComp/> */}
          {/* <JsxComp/> */}
          {/* <FragmtComp/> */}

          {/* <Website/> */}

          {/* <ClassCompLifeCycle/> */}
          {/* <ApiIntegration/> */}

          {/* <PureComp/> */}
          <ParentComp/>
          <br />
          <FunctionParent/>
        </div>

      </div>
    </div>
  );
}

export default App;
