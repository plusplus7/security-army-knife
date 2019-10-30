function loadTemplates() {
    var templates = {};
    var links = document.querySelectorAll('link[rel="import"]');
    links.forEach((link) => {
        var node = link.import.querySelector('template')
        templates[node.id] = document.importNode(node.content, true)
    });
    return templates;
}
function loadbody() {
    switchTemplate('template-common');
}

function switchTemplate(templateName) {
    var templates = loadTemplates();
    $('#dynamic-content').empty();
    $('#dynamic-content').append(templates[templateName]);
}

function dispatch_event(action, data) {
    window.postMessage({
        action: action,
        data: data
    })
}