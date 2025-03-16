import './index.css'
import Main from './components/pages/Main'
import '@ant-design/v5-patch-for-react-19';
import { BrowserRouter } from "react-router";
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
