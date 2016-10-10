<!-- TITLE/ -->

<h1>docpad-plugin-functions</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/sdomagala/docpad-plugin-functions" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/sdomagala/docpad-plugin-functions/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/docpad-plugin-functions" title="View this project on NPM"><img src="https://img.shields.io/npm/v/docpad-plugin-functions.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/docpad-plugin-functions" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/docpad-plugin-functions.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/sdomagala/docpad-plugin-functions" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/sdomagala/docpad-plugin-functions.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/sdomagala/docpad-plugin-functions#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/sdomagala/docpad-plugin-functions.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-slackin"><a href="https://slack.bevry.me" title="Join this project's slack community"><img src="https://slack.bevry.me/badge.svg" alt="Slack community badge" /></a></span>
<span class="badge-patreon"><a href="http://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://img.shields.io/badge/bitcoin-donate-yellow.svg" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Start functions between DocPad events

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

Install this DocPad plugin by entering <code>docpad install functions</code> into your terminal.

<!-- /INSTALL -->


## Usage

This plugin was inspired by [docpad-plugin-gulp](https://www.npmjs.com/package/docpad-plugin-gulp), behaviour of this plugin is almost the same code-wise and in implementation **BUT** with slight differences:
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

<span class="badge-patreon"><a href="http://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://img.shields.io/badge/bitcoin-donate-yellow.svg" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

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
