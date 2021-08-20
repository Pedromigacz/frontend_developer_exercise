import { Layout, Main, AddNoteForm } from "./components/";
import NotesContextProvider from "./contexts/NotesContext.jsx";

const App = () => (
  <NotesContextProvider>
    <Layout>
      <Main />
      <AddNoteForm />
    </Layout>
  </NotesContextProvider>
);

export default App;
