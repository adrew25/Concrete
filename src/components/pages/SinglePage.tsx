import Content from "../Content/Content";
import Header from "../Header/Header";
import Services from "../Services/Services";

function App() {
  return (
    <div>
      <Header />
      <Content
        title="Ποιοι είμαστε."
        text="Η Concrete έρχεται για να βάλει τα θεμέλια  στην παραγωγή τηλεοπτικού και digital περιεχομένου.
        Μια νέα ομάδα επαγγελματιών του χώρου που καλύπτει όλες τις ειδικότητες, ενώνει την τεχνογνωσία και την εμπειρία της και με χαρακτηριστικά την αισθητική και την σύγχρονη οπτική  δημιουργεί τάσεις. Η εταιρεία διαθέτει studios γυρισμάτων, σύγχρονο τεχνικό εξοπλισμό (Camera, sound & light equipment), Post Production Department, OB van και Drone."
      />
      <Content
        title="Το όραμά μας."
        text="Η Concrete φιλοδοξεί να γίνει το no1 HUB στον χώρο των τηλεοπτικών παραγωγών. Κορυφαία ονόματα με πρωταγωνιστικό ρόλο στο χώρο της τηλεόρασης αποτελούν μέρος της  ομάδας που συνθέτει την υπογραφή της."
      />
      <Services />
    </div>
  );
}

export default App;
