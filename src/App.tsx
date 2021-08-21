import { Layout, Main, AddNoteForm } from "./components/";
import NotesContextProvider from "./contexts/NotesContext";
import MobileContextProvider from "./contexts/MobileContext";
// import { AnimatePresence } from "framer-motion";

const App: React.FC = () => (
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
