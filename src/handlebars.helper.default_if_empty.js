Handlebars.registerHelper('default_if_empty', function(item, block) {
    var empty = "<i>Empty value</i>";
    return (item && item.replace(/\s/g,"").length) ? item : empty;
});
