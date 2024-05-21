function format(command, value = null) {
    document.execCommand(command, false, value);
}

document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    editor.focus();
});
