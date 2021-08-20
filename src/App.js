import { Layout, Main, AddNoteForm } from "./components/";
import NotesContextProvider from "./contexts/NotesContext.jsx";
import MobileContextProvider from "./contexts/MobileContext.jsx";
// import { AnimatePresence } from "framer-motion";

const App = () => (
  <MobileContextProvider>
    <NotesContextProvider>
      <Layout>
        <Main />
        {/* <AnimatePresence> */}
        <AddNoteForm />
        {/* </AnimatePresence> */}
      </Layout>
    </NotesContextProvider>
  </MobileContextProvider>
);

export default App;
