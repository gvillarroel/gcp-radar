---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.603Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Legacy private and public cache and lock methods"
feature_slug: "legacy-private-and-public-cache-and-lock-methods"
latest_feature_date: "2014-09-04"
deprecation_date: "2014-09-04"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/guides/libraries"
keywords:
  - "legacy"
  - "private"
  - "public"
  - "cache"
  - "lock"
  - "methods"
  - "older"
  - "method"
---

# Legacy private and public cache and lock methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The older private and public cache and lock method names were replaced by user and script scoped equivalents; deprecated on 2014-09-04.

## Extended Definition

The older private and public cache and lock method names were replaced by user and script scoped equivalents; deprecated on 2014-09-04.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/guides/libraries](https://developers.google.com/apps-script/guides/libraries)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- September 04, 2014 Deprecated Replaced the CacheService methods getPrivateCache() and getPublicCache() and the LockService methods getPrivateLock() and getPublicLock() with getUserCache() , getScriptCache() , getUserLock() , and getScriptLock() , respectively.
- October 10, 2017 Feature The Calendar service has been extended with the following new methods: CalendarApp.createAllDayEvent(title, startDate, endDate) CalendarApp.createAllDayEvent(title, startDate, endDate, options) CalendarApp.getEventById(iCalId) Calendar.createAllDayEvent(title, startDate, endDate) Calendar.createAllDayEvent(title, startDate, endDate, options) Calendar.getEventById(iCalId) CalendarEvent.setAllDayDates(startDate, endDate) The Groups service has been extended with the following new methods: Group.getGroups() Group.hasGroup(group) Group.hasGroup(email) The Spreadsheet service has been extended with the following new methods and classes: AutoFillSeries enumeration Range.autoFill(destination, series) Range.autoFillToNeighbor(series) Sheet.moveColumns(columnSpec, destinationIndex) Sheet.moveRows(rowSpec, destinationIndex) October 06, 2017 Change Add-ons now require OAuth Client Verification prior to beginning the publication process.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The new runtime recognizes these function definition formats: function normalFunction () {} async function asyncFunction () {} function generatorFunction () {} var varFunction = function () {} let letFunction = function () {} const constFunction = function () {} var namedVarFunction = function alternateNameVarFunction () {} let namedLetFunction = function alternateNameLetFunction () {} const namedConstFunction = function alternateNameConstFunction () {} var varAsyncFunction = async function () {} let letAsyncFunction = async function () {} const constAsyncFunction = async function () {} var namedVarAsyncFunction = async function alternateNameVarAsyncFunction () {} let namedLetAsyncFunction = async function alternateNameLetAsyncFunction () {} const namedConstAsyncFunction = async function alternateNameConstAsyncFunction () {} var varGeneratorFunction = function () {} let letGeneratorFunction = function () {} const constGeneratorFunction = function () {} var namedVarGeneratorFunction = function alternateNameVarGeneratorFunction () {} let namedLetGeneratorFunction = function alternateNameLetGeneratorFunction () {} const namedConstGeneratorFunction = function alternateNameConstGeneratorFunction () {} var varLambda = () => {} let letLambda = () => {} const constLambda = () => {} var varAsyncLambda = async () => {} let letAsyncLambda = async () => {} const constAsyncLambda = async () => {} Call object methods from triggers and callbacks Scripts using V8 can call object methods and class static methods from places where you could already call library methods.
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.
- Scripts using the V8 runtime benefit from modern ECMAScript syntax, improved function detection, the ability to call object methods from triggers and callbacks, and standard logging and execution viewing capabilities.
- Classes in V8 are primarily syntactical sugar over the JavaScript prototype-based inheritance. // V8 runtime class Rectangle { constructor ( width , height ) { // class constructor this . width = width ; this . height = height ; } logToConsole () { // class method console . log ( Rectangle ( width =$ { this . width }, height =$ { this . height }) ); } } const r = new Rectangle ( 10 , 20 ); r . logToConsole (); // Outputs Rectangle ( width = 10 , height = 20 ) Destructuring assignments Destructuring assignment expressions are a quick way to unpack values from arrays and objects into distinct variables. // Rhino runtime var data = { a : 12 , b : false , c : 'blue' }; var a = data . a ; var c = data . c ; console . log ( a , c ); // Outputs 12 "blue" var a = [ 1 , 2 , 3 ]; var x = a [ 0 ]; var y = a [ 1 ]; var z = a [ 2 ]; console . log ( x , y , z ); // Outputs 1 2 3 // V8 runtime const data = { a : 12 , b : false , c : 'blue' }; const { a , c } = data ; console . log ( a , c ); // Outputs 12 "blue" const array = [ 1 , 2 , 3 ]; const [ x , y , z ] = array ; console . log ( x , y , z ); // Outputs 1 2 3 Template literals Template literals are string literals that allow embedded expressions.

### Libraries \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/libraries](https://developers.google.com/apps-script/guides/libraries)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When creating a library, consider best practices like choosing a meaningful name, using underscores for private methods, and including JSDoc documentation.
- To debug library code, use one of the following methods: Debug from the library project : Open the library script project in the Apps Script editor.
- For example, if Test is the identifier for your library, type Test immediately followed by a period to see the list of methods in the library.
- To make one or more methods of your script not be visible (nor usable) to your library users, end the name of the method with an underscore.

