import NativeDialog from "../dialogBox/nativeDialog";

let env = "Native";

class UiFactory {
  GetDialogBox() {
    switch (env) {
      case "MaterialUI":
        throw new Error("Not implemented");

      case "Bootstrap":
        throw new Error("Not implemented");

      case "Native":
        return NativeDialog;

      default:
        return NativeDialog;
    }
  }
}

export default new UiFactory();
