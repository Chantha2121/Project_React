// import './App.css';
// import Inline from './Components/Inline';
// import Namelist from './Components/Namelist';
// import Stylesheet from './Components/Stylesheet';
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// import EventBind from './Components/EventBind';
// import ClassClick from './Components/ClassClick';
// import FunctionClick from './Components/FunctionClick';
// import Count from './Components/Count';
// import Navbar from './Components/Assets/Navbar/Navbar';
// import Greet from './Components/Greet';
// import Welcome from './Components/Welcome';
// import Message from './Components/Message';
// import './appStyle.css';

import ErrorBoudary from "./component2/ErrorBoudary";
import Hero from "./component2/Hero";
// import ParentPortal from "./component2/ParentPortal"; 

// import PortalDemo from "./component2/PortalDemo";

// import FRParent from "./component2/FRParent";

// import RefComp from "./component2/RefComp";

// import ParentComp from "./component2/ParentComp";

// import PureComp from "./component2/PureComp";

// import Table from "./component2/Table";

// import Tolist from "./Components/Todo";

// import Unmounting from "./Components/Unmounting";

// import Didmount from "./Components/Didmount";
// import LifeCycleA from "./Components/LifeCycleA";
// import From from "./Components/From";

// import styles from './appStyle.module.css'
function App() {
  return(
    <div className='App'>
      <ErrorBoudary>
        <Hero heroName="Batman"/>
      </ErrorBoudary>
      <ErrorBoudary>
      <Hero heroName="Superman"/>
      </ErrorBoudary>
      <ErrorBoudary>
      <Hero heroName="joker"/>
      </ErrorBoudary>
      {/* <ParentPortal/> */}
      {/* <PortalDemo/> */}
      {/* <FRParent/> */}
      {/* <RefComp/> */}
      {/* <ParentComp/> */}
      {/* <PureComp/> */}
      {/* <Array/> */}
      {/* <Table/> */}
      {/* <Tolist/> */}
      {/* <Unmounting/> */}
      {/* <Didmount/> */}
      {/* <LifeCycleA/> */}
      {/* <From/> */}
      {/* // <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Stylesheet premiry={true}/> */}
      {/* <Inline/> */}
      {/* <Namelist/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick></ClassClick> */}
      {/* <Count/> */}
      {/* <Message/> */}
      {/* <Greet name='Chantha' heroName='Layla'> */}
        {/* <p style={{textAlign:'center'}}>This is a paragraph of the childrens</p> */}
      {/* </Greet> */}
      {/* <Greet name='Chanthet' heroName='Alok'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <button style={{}}>Action</button>
        </div>
      </Greet> */}
      {/* <Greet name='Boy loy' heroName='Uniqe'></Greet> */}
      {/* <Welcome name='Chantha' heroName='Layla'/> */}
      {/* <Welcome name='Chantfd' heroName='Layla'/>
      <Welcome name='Chandfa' heroName='Layla'/> */}
    </div>
  );
}

export default App;
