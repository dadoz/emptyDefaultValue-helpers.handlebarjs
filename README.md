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


####<a name="IterateSliced">Iterate sliced</a>
#####Description
Iterate over a specific portion of a list.
#####Usage:
{{#slice items offset="1" limit="5"}}{{name}}{{/slice}} : items 1 thru 6
{{#slice items limit="10"}}{{name}}{{/slice}} : items 0 thru 9
{{#slice items offset="3"}}{{name}}{{/slice}} : items 3 thru context.length
defaults are offset=0, limit=5
#####Todo: combine parameters into single string like python or ruby slice ("start:length" or "start,length")

```javascript
Handlebars.registerHelper('slice', function(context, block) {
  var ret = "",
      offset = parseInt(block.hash.offset) || 0,
      limit = parseInt(block.hash.limit) || 5,
      i = (offset < context.length) ? offset : 0,
      j = ((limit + offset) < context.length) ? (limit + offset) : context.length;

  for(i,j; i<j; i++) {
    ret += block(context[i]);
  }

  return ret;
});
```


