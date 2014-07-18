Handlebars.js-helpers 
=====================================

Handlebars.js helpers emptyDefaultValue

### Overview

#### Additional
see:
https://github.com/dadoz/emptyDefaultValue-helpers.handlebarjs/edit/master/README.md



####<a name="keyValue">override Key-Value</a>
##### Description
Iterate over an object, setting 'key' and 'value' for each property in
the object.
#####Usage
{{#key_value obj}} Key: {{key}} // Value: {{value}} {{/key_value}}

```javascript
Handlebars.registerHelper("key_value", function(obj, fn) {
    var buffer = "",
        key;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            buffer += fn({key: key, value: obj[key]});
        }
    }

    return buffer;
});
```


