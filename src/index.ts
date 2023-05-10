import { startApp, glasses, resetBtn} from "./dom";
import { sendNotification, sendIntervalNotification} from "./notification";
import { setUpGlasses } from "./glasses";

//App Starten
startApp.addEventListener("click", () => {
  sendNotification();
  sendIntervalNotification();
  setUpGlasses();
  });