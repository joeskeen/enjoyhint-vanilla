EnjoyHint-Vanilla
=========
**EnjoyHint** is a web-tool that provides the simplest way to create interactive tutorials and hints for your site or web-application. It can also be used to highlight and sign application elements.  

**EnjoyHint-Vanilla** a fork of EnjoyHint that removes the jQuery dependency.

EnjoyHint-Vanilla is free software distributed under the terms of MIT license.
  
#### Demo
* [TODO app demo](http://xbsoftware.github.io/enjoyhint/) ([downloadable package](http://xbsoftware.github.io/enjoyhint/enjoyhint_todo_demo.zip))
* [A small guide on EnjoyHint](http://xbsoftware.github.io/enjoyhint/example1.html)

#### Dependencies
EnjoyHint-Vanilla require the following plugins and libs:

* `"konva": "^9.3.0"`

(Konva is the successor to KineticJS, which was used by the original EnjoyHint. Konva is a 2d Canvas JavaScript framework for drawings shapes, animations, node nesting, layering, filtering, event handling, drag and drop and much more, and powers the tutorial highlighting experience in EnjoyHint-Vanilla.)

#### Installation
You can install it through `node` package manager:
```
npm install enjoyhint-vanilla
```
Alternative way:
- Download the latest version of EnjoyHint-Vanilla from GitHub.
- Extract the archive with EnjoyHint-Vanilla.
- Move the EnjoyHint-Vanilla directory to somewhere on your webserver.
- Install dependencies `npm install` if you want to use internal libraries.
- Insert next lines into your page's \<head\> tag:
```html
  <!-- Enjoyhint library -->
  <link href="<pathontheserver>/enjoyhint/enjoyhint.css" rel="stylesheet">
```

#### Initialization and configuration:

Here is a complete example of EnjoyHint-Vanilla that works on the page:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- Enjoyhint library -->
    <link href="node_modules/enjoyhint/enjoyhint.css" rel="stylesheet" />

    <script type="importmap">
      {
        "imports": {
          "enjoyhint": "./node_modules/enjoyhint/enjoyhint.js",
          "konva": "./node_modules/enjoyhint/node_modules/konva/konva.js"
        }
      }
    </script>
  </head>
  <body>
    <button class="new_btn">+</button>
    <button class="some_btn">Some btn</button>
    <div class="some_panel">Some panel</div>

    <script type="module">
      import { EnjoyHint } from 'enjoyhint';

      const run = (() => {
        var options = {
          'next #block': 'Hello.',
          nextButton: { className: 'myNext', text: 'myNEXT' },
          skipButton: { className: 'mySkip', text: 'mySKIP' },
          prevButton: { className: 'myPrev', text: 'myPREV' }
        };
        //initialize instance
        var enjoyhint_instance = new EnjoyHint(document.body, options);

        //simple config.
        //Only one step - highlighting(with description) "New" button
        //hide EnjoyHint after a click on the button.
        var enjoyhint_script_steps = [
          {
            'click .new_btn': 'Click the "New" button to start creating your project'
          },
          {
            'click .some_btn': 'Click on this btn'
          },
          {
            'click .some_panel': 'Click on this panel'
          }
        ];

        //set script config
        enjoyhint_instance.set(enjoyhint_script_steps);

        //run Enjoyhint script
        enjoyhint_instance.run();
      })

      setTimeout(run);
    </script>
  </body>
</html>
```

#### Script Configuration
The sequence of steps can be only linear for now. So, the script config is an array. Every element of this array is the config for some step.

#### Example of script configuration 
Highlight some button and after you click on it, highlight some panel:
```javascript
var enjoyhint_script_steps = [
  {
    'click .some_btn' : 'Click on this btn'
  },  
  {
    'click .some_panel' : 'Click on this panel'
  }  
];
```

#### Properties of the step configuration
* `"event selector" : "description"` - to describe a step you should set an event type, selecte element and add description for this element (hint)
* `arrowColor` - the color of a marker that accepts all CSS colors.
* `keyCode` - the code of a button, which triggers the next EnjoyHint step upon a click. Defined by the “key” event. (“key #block” : “hello”).
* `event_selector` - if you need to attach an event (that was set in "event" property) to other selector, you can use this one  
* `timeout` - delay before the moment, when an element is highlighted   
* `shape` - shape for highlighting (circle|rect)
* `radius` -  if the shape of "circle" is specified, we can set the radius.
* `margin` - margin for the highlight shape (for Ex.:10)  
* `top` - top margin for the shape of "rect" type  
* `right` - right margin for the shape of "rect" type  
* `bottom` - bottom margin for the shape of "rect" type  
* `left` - left margin for the shape of "rect" type
* `scrollAnimationSpeed` - sets the auto scroll speed (ms).
* `nextButton` - allows applying its classes and names for the button Nеxt.
* `skipButton` - allows applying its classes and names for the button Skip.
* `prevButton` - allows applying its classes and names for the button Previous. For the example :
```javascript
	var options = {
                    "next #block": 'Hello.',
                    "nextButton" : {className: "myNext", text: "myNEXT"},
                    "skipButton" : {className: "mySkip", text: "mySKIP"},
                    "prevButton" : {className: "myPrev", text: "myPREV"}
                }
  ```
* `showSkip` - shows or hides the Skip button (true|false)
* `showNext` - shows or hides the Next button (true|false)
* `showPrev` - shows or hides the Previous button (true|false)




#### Non-standard events:
* `auto` - for example, you need to click on the same button on the second step imediatelly after the first step and go to the next step after it. Then you can use "auto" in the "event_type" property and "click" in "event" property.
* `custom` - this value is very usefull if you need to go to the next step by event in your app code. For example, you want to go to the next step only after some data have been loaded in your application. Then you should use the "custom" event_type and the "trigger" method of the EnjoyHint instance.  
```javascript
//Example of using custom event_type
$.get('/load/some_data', function(data){
  //trigger method has only one argument: event_name.(equal to the value of event property in step config)
  enjoyhint_instance.trigger('custom_event_name');
});
```  
* `next` - when you set value of event_type to "next", you will see the "Next" btn on this step.
* `key` - tells EnjoyHint to go to the next step when you click on the button defined by the keyCode


#### Methods
* `set` - set current steps configuration. Arguments: config  
* `run` - run the current script. Has no arguments  
* `resume` - resume the script from the step where it was stopped. Has no arguments  
* `getCurrentStep` - returns the current step index
* `trigger` -  After writing this code you can either move to the next step or finish with EnjoyHint (next|skip)

#### Events
**Script Events**:
* `onStart` - fires on the first step.
* `onEnd` - fires after the last step in script.
* `onSkip` - fires after user has clicked skip.
```javascript
var enjoyhint_instance = new EnjoyHint({
  onStart:function(){
    //do something
  }
});
```
**Step Events**:  
* `onBeforeStart` - fires before the step is started.
```javascript
var enjoyhint_script_steps = [
  {
    selector:'.some_btn',//jquery selector
    event:'click',
    description:'Click on this btn',
    onBeforeStart:function(){
      //do something
    }
  }
];
```

#### Release notes

##### v.4

* Fixed label position bugs
* Fixed arrow position bugs
* Fixed resize bugs
* Added responsive design
* Added mobile support
* Added possibility to go back to previous step
* Added possibility to select the color of a marker
* Added possibility to customize previous button




