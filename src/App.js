import './App.css';

import Contacts from './components/Contacts/Contacts';
import Greeting from './components/Greeting/Greeting';
import Nodes from './components/Nodes/Nodes';
import SelfDescription from './components/SelfDescription/SelfDescription';

function App() {
  return (
    <div className='App'>
      <Greeting />
      <SelfDescription />
      <Nodes />
      <Contacts />
    </div>
  );
}

export default App;
