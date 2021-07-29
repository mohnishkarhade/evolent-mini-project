import NativeDialogbox from "../dialogbox/NativeDialogbox";

let env = "Native";

class UiFactory {
  GetDialogBox() {
    switch (env) {
      case "MaterialUI":
        throw new Error("Not implemented");

      case "Bootstrap":
        throw new Error("Not implemented");

      case "Native":
        return NativeDialogbox;

      default:
        return NativeDialogbox;
    }
  }
}

export default new UiFactory();
