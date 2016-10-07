<!-- TITLE/ -->

<h1>docpad-plugin-functions</h1>

<!-- /TITLE -->


<!-- BADGES/ -->



<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Start functions between DocPad events

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

Install this DocPad plugin by entering <code>docpad install functions</code> into your terminal.

<!-- /INSTALL -->


## Usage

This plugin was inspired by [docpad-plugin-gulp](https://www.npmjs.com/package/docpad-plugin-gulp) and behaviour of this plugin is almost the same code-wise and in implementation **BUT** with slight differences:
- you don't need gulp to run it
- MAJOR: it's not spawning any child processes so it is 100% compliant with Windows/Unix.

**[AVAILABLE EVENTS](http://docpad.org/docs/events/)**

*(not available `renderDocument`, and `render` since they caused memory spikes and shouldn't be used in this plugin)*

### Docpad.coffee structure

The following will run function `validateDocuments` during the
[generateBefore](http://docpad.org/docs/events#generatebefore) event:

```coffeescript
validateDocuments = require 'validator.js' #this require should be at the top of docpad.coffee

  plugins:
    functions:
      generateBefore: [validateDocuments]
      writeAfter: [asyncFunction1, someOtherAsyncFunction2]
```

`asyncFunction1` and `someOtherAsyncFunction2` will be run in [series](http://caolan.github.io/async/docs.html#.series)

### Function structure

Every passed function should have following structure **with callback**:

*validator.js*
```javascript
function validateDocuments(cb) {

  checkFilesAsynchronously((err) => {
    cb(err);
  });
}
```

## TO DO
- support for sync calls
- mechanism for easy passing arguments to functions

*To be implemented if there is someone to actually use it, so feel free to file issues*

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/sdomagala/docpad-plugin-functions/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/sdomagala/docpad-plugin-functions/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="https://github.com/sdomagala">Sebastian Domagała</a> — <a href="https://github.com/sdomagala/docpad-plugin-functions/commits?author=sdomagala" title="View the GitHub contributions of Sebastian Domagała on repository sdomagala/docpad-plugin-functions">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?



<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="https://github.com/sdomagala">Sebastian Domagała</a> — <a href="https://github.com/sdomagala/docpad-plugin-functions/commits?author=sdomagala" title="View the GitHub contributions of Sebastian Domagała on repository sdomagala/docpad-plugin-functions">view contributions</a></li></ul>

<a href="https://github.com/sdomagala/docpad-plugin-functions/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; <a href="https://github.com/sdomagala">Sebastian Domagała</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
