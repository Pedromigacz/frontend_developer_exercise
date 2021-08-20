import { Layout, Main, AddNoteForm } from "./components/";
import NotesContextProvider from "./contexts/NotesContext.jsx";
import MobileContextProvider from "./contexts/MobileContext.jsx";

const App = () => (
  <MobileContextProvider>
    <NotesContextProvider>
      <Layout>
        <Main />
        <AddNoteForm />
      </Layout>
    </NotesContextProvider>
  </MobileContextProvider>
);

export default App;
