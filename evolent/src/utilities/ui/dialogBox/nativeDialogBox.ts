class NativeDialog {
  alert(message, callback) {
    alert(message);
  }

  confirm(title, message?, cancelLabel?, confirmLabel?, callback?) {
    var result = window.confirm(title);
    return result;
  }
}

export default new NativeDialog();
