import './index.css'
import Main from './components/pages/Main'
import '@ant-design/v5-patch-for-react-19';
// import { BrowserRouter } from "react-router";
import Footer from './components/layout/Footer';
import MainHeader from './components/layout/MainHeader';
function App() {

  return (
    <>
      <div>
        {/* <BrowserRouter> */}
          <div className='flex flex-col relative top-20 bg-gray-100'>
            <MainHeader />
            <Main />
            <Footer />
          </div>
        {/* </BrowserRouter> */}
      </div>
    </>
  )
}

export default App
