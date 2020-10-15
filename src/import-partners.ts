import { initializeFirebase } from "./firebase-config";
import { importPartners } from "./import-default-data";

initializeFirebase()
  .then(() => importPartners())