import { startApp, glasses, resetBtn} from "./dom";
import { sendNotification, setReminder } from "./notification";
import { checkAllGlassesClicked } from "./glasses";


startApp.addEventListener("click", () => {
  sendNotification();
  setReminder();
  for (let i = 0; i < glasses.length; i++) {
    glasses[i].addEventListener("click", () => {
      glasses[i].style.backgroundColor = "#3a226c";
      checkAllGlassesClicked();
    });
  }
  resetBtn.addEventListener("click", () => {
    for (let i = 0; i < glasses.length; i++) {
      glasses[i].style.backgroundColor = "";
    }
  });
});
