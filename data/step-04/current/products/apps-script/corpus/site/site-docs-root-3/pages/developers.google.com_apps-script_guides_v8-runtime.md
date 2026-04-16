---
title: "V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/v8-runtime
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/apps-script/guides/libraries
source_metadata:
  url: https://developers.google.com/apps-script/guides/v8-runtime
  title: "V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
V8 runtime overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Apps Script and JavaScript runtime environment includes the JavaScript engine that parses and executes script code, and historically Apps Script was powered by Mozilla's Rhino JavaScript interpreter.
Apps Script now supports the V8 runtime, which powers Chrome and Node.js, enabling developers to use modern JavaScript syntax and features not available with the older Rhino runtime.
Scripts using the V8 runtime benefit from modern ECMAScript syntax, improved function detection, the ability to call object methods from triggers and callbacks, and standard logging and execution viewing capabilities.
You can enable the V8 runtime for your Apps Script project through project settings or by editing the appsscript.json manifest file.
Existing scripts can be migrated to V8 to take advantage of new features, and automatic migration for compatible scripts began in February 2020, with an option to opt out.
In Google Apps Script and JavaScript, a runtime or runtime environment
contains the JavaScript engine that parses and executes script code. The runtime
provides rules for how memory is accessed, how the program can interact with the
computer's operating system, and what program syntax is legal. Each web browser
has a runtime environment for JavaScript.
Historically, Apps Script has been powered by Mozilla's Rhino
JavaScript interpreter. While Rhino provided a convenient way for
Apps Script to execute developer scripts, it also tied
Apps Script to a specific JavaScript version
( ES5 ).
Apps Script developers can't use more modern JavaScript syntax
and features in scripts using the Rhino runtime.
To address this concern, Apps Script is now supported by the
V8 runtime that powers Chrome and Node.js.
Migrate existing scripts to V8 in
order to take advantage of the modern JavaScript syntax and features.
This page describes the new features enabled by V8 and how you can enable V8 for
use in your scripts. Migrating scripts to V8
describes steps for migrating existing scripts to use the V8 runtime.
Features of the V8 runtime
Scripts that use the V8 runtime are able to take advantage of the following
features:
Modern ECMAScript syntax
Use modern ECMAScript
syntax in scripts that are powered by the V8 runtime. This syntax includes
let , const , and many other popular features.
See V8 syntax examples for a short list of popular syntax
improvements you can make using the V8 runtime.
The Apps Script V8 runtime has some limitations and key
differences compared to other common JavaScript runtimes. See
Apps Script V8 runtime limitations for more
details.
Improved function detection
Apps Script function detection is improved for scripts using V8.
The new runtime recognizes these function definition formats:
function normalFunction () {}
async function asyncFunction () {}
function * generatorFunction () {}
var varFunction = function () {}
let letFunction = function () {}
const constFunction = function () {}
var namedVarFunction = function alternateNameVarFunction () {}
let namedLetFunction = function alternateNameLetFunction () {}
const namedConstFunction = function alternateNameConstFunction () {}
var varAsyncFunction = async function () {}
let letAsyncFunction = async function () {}
const constAsyncFunction = async function () {}
var namedVarAsyncFunction = async function alternateNameVarAsyncFunction () {}
let namedLetAsyncFunction = async function alternateNameLetAsyncFunction () {}
const namedConstAsyncFunction = async function alternateNameConstAsyncFunction () {}
var varGeneratorFunction = function * () {}
let letGeneratorFunction = function * () {}
const constGeneratorFunction = function * () {}
var namedVarGeneratorFunction = function * alternateNameVarGeneratorFunction () {}
let namedLetGeneratorFunction = function * alternateNameLetGeneratorFunction () {}
const namedConstGeneratorFunction = function * alternateNameConstGeneratorFunction () {}
var varLambda = () => {}
let letLambda = () => {}
const constLambda = () => {}
var varAsyncLambda = async () => {}
let letAsyncLambda = async () => {}
const constAsyncLambda = async () => {}
Call object methods from triggers and callbacks
Scripts using V8 can call object methods and class static methods from places
where you could already call library methods. These places include the following:
Google Workspace add-ons manifest triggers
Installable triggers
Menu items in Google Workspace editors
User callback functions, such the one described in the
ScriptApp.newStateToken() code sample .
The following V8 example shows the use of object methods when constructing menu
items in Google Sheets:
function onOpen () {
const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp .
ui . createMenu ( 'Custom Menu' )
. addItem ( 'First item' , 'menu.item1' )
. addSeparator ()
. addSubMenu ( ui . createMenu ( 'Sub-menu' )
. addItem ( 'Second item' , 'menu.item2' ))
. addToUi ();
}
const menu = {
item1 : function () {
SpreadsheetApp . getUi () . alert ( 'You clicked: First item' );
},
item2 : function () {
SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' );
}
}
View logs
Apps Script provides two logging services: the
Logger service and the
console class. Both of these services
write logs to the same
Stackdriver Logging service .
To show Logger and console logs, at the top of the script editor, click
Execution log .
View executions
To view your script's execution history, open the Apps Script
project and at the left, click Executions
playlist_play .
The Executions panel doesn't provide timestamped logs of the individual
Apps Script service calls. Use the
console service to create appropriate
log messages. All logs created with
console appear in the Executions
panel.
V8 syntax examples
The following is a short list of popular syntactical features available to
scripts using the V8 runtime.
let and const
The let
and const
keywords allow you to define block scope local variables and block scope
constants, respectively.
// V8 runtime
let s = "hello" ;
if ( s === "hello" ) {
s = "world" ;
console . log ( s ); // Prints "world"
}
console . log ( s ); // Prints "hello"
const N = 100 ;
N = 5 ; // Results in TypeError
Arrow functions
Arrow functions
provide a compact way of defining functions within expressions.
// Rhino runtime
function square ( x ) {
return x * x ;
}
console . log ( square ( 5 )); // Outputs 25
// V8 runtime
const square = x => x * x ;
console . log ( square ( 5 )); // Outputs 25
// Outputs [ 1 , 4 , 9 ]
console . log ([ 1 , 2 , 3 ] . map ( x => x * x ));
Classes
Classes
provide a means to conceptually organize code with inheritance. Classes in V8
are primarily syntactical sugar over the JavaScript prototype-based inheritance.
// V8 runtime
class Rectangle {
constructor ( width , height ) { // class constructor
this . width = width ;
this . height = height ;
}
logToConsole () { // class method
console . log ( ` Rectangle ( width =$ { this . width }, height =$ { this . height }) ` );
}
}
const r = new Rectangle ( 10 , 20 );
r . logToConsole (); // Outputs Rectangle ( width = 10 , height = 20 )
Destructuring assignments
Destructuring assignment
expressions are a quick way to unpack values from arrays and objects into
distinct variables.
// Rhino runtime
var data = { a : 12 , b : false , c : 'blue' };
var a = data . a ;
var c = data . c ;
console . log ( a , c ); // Outputs 12 "blue"
var a = [ 1 , 2 , 3 ];
var x = a [ 0 ];
var y = a [ 1 ];
var z = a [ 2 ];
console . log ( x , y , z ); // Outputs 1 2 3
// V8 runtime
const data = { a : 12 , b : false , c : 'blue' };
const { a , c } = data ;
console . log ( a , c ); // Outputs 12 "blue"
const array = [ 1 , 2 , 3 ];
const [ x , y , z ] = array ;
console . log ( x , y , z ); // Outputs 1 2 3
Template literals
Template literals
are string literals that allow embedded expressions. They let you avoid more
complex string concatenation statements.
// Rhino runtime
var name =
'Hi ' + first + ' ' + last + '.' ;
var url =
'http://localhost:3000/api/messages/'
+ id ;
// V8 runtime
const name = ` Hi $ { first } $ { last } . ` ;
const url =
` http : // localhost : 3000 / api / messages /$ { id } ` ;
Default parameters
Default parameters
let you specify default values for function parameters in the function
declaration. This can simplify the code in the function body as it removes the
need to explicitly assign default values to missing parameters.
// Rhino runtime
function hello ( greeting, name ) {
greeting = greeting || "hello" ;
name = name || "world" ;
console . log (
greeting + " " + name + "!" );
}
hello (); // Outputs "hello world!"
// V8 runtime
const hello =
function ( greeting = "hello" , name = "world" ) {
console . log (
greeting + " " + name + "!" );
}
hello (); // Outputs "hello world!"
Multi-line strings
Define multi-line strings
using the same syntax as template literals . As with
template literals, this syntax lets you avoid string concatenations and simplify
string definitions.
// Rhino runtime
var multiline = "This string is sort of \n "
+ "like a multi-line string, \n "
+ "but it's not really one." ;
// V8 runtime
const multiline = ` This on the other hand ,
actually is a multi - line string ,
thanks to JavaScript ES6 ` ;
V8 runtime limitations
The Apps Script V8 runtime isn't a standard Node.js or browser
environment. This can lead to compatibility issues when you call third-party
libraries or adapt code examples from other JavaScript environments.
Unavailable APIs
The following standard JavaScript APIs are NOT available in the
Apps Script V8 runtime:
Timers : setTimeout , setInterval , clearTimeout , clearInterval
Streams : ReadableStream , WritableStream , TextEncoder ,
TextDecoder
Web APIs : fetch , FormData , File , Blob , URL , URLSearchParams ,
DOMException , atob , btoa
Crypto : crypto , SubtleCrypto
Global Objects : window , navigator , performance , process
(Node.js)
Use the following Apps Script APIs as alternatives:
Timers : Use
Utilities.sleep
for synchronous pauses. Asynchronous timers aren't supported.
Fetch : Use UrlFetchApp.fetch(url,
params) to make HTTP(S)
requests.
atob : Use
Utilities.base64Decode
to decode Base64-encoded strings.
btoa : Use
Utilities.base64Encode
to encode strings in Base64.
Crypto : Use Utilities
for cryptographic functions like
computeDigest ,
computeHmacSha256Signature ,
and
computeRsaSha256Signature .
For APIs without an Apps Script alternative, such as TextEncoder ,
you can sometimes use a polyfill. A polyfill is a library that replicates API
functionality that isn't available by default in the runtime environment.
Before using a polyfill, confirm that it's compatible with
Apps Script's V8 runtime.
Asynchronous limitations
The V8 runtime supports async and await syntax and the Promise object.
However, the Apps Script runtime environment is fundamentally
synchronous.
Microtasks (Supported) : The runtime processes the microtask queue (where
Promise.then callbacks and await resolutions occur) after the current
call stack clears.
Macrotasks (Not Supported) : Apps Script doesn't have a
standard event loop for macrotasks. Functions like setTimeout and
setInterval aren't available.
WebAssembly Exception : The WebAssembly API is the only built-in
feature that operates in a non-blocking manner within the runtime, allowing
for specific asynchronous compilation patterns (WebAssembly.instantiate).
All I/O operations, such as
UrlFetchApp.fetch , are
blocking. To achieve parallel network requests, use
UrlFetchApp.fetchAll .
Class limitations
The V8 runtime has specific limitations regarding modern ES6+ class features:
Private Fields : Private class fields (for example, #field ) aren't
supported and cause parsing errors. Consider using closures or WeakMap for
true encapsulation.
Static Fields : Direct static field declarations within the class body
(for example, static count = 0; ) aren't supported. Assign static
properties to the class after its definition (for example, MyClass.count =
0; ).
Module limitations
ES6 Modules : The V8 runtime doesn't support ES6 modules ( import /
export ). To use libraries, you must either use the
Apps Script library mechanism
or bundle your code and its dependencies into a single script file. ( Issue
Tracker )
File Execution Order : All script files in your project are executed in a
global scope. It's best to avoid top-level code with side effects and ensure
functions and classes are defined before being used across files. Explicitly
order your files in the editor if dependencies exist between them.
Enable the V8 runtime
If a script is using the Rhino runtime, switch it to V8 by doing the
following:
Open the Apps Script project.
At the left, click Project Settings
settings .
Select the Enable Chrome V8 runtime checkbox.
Alternatively specify the script runtime directly by
editing the script manifest
file:
Open the Apps Script project.
At the left, click Project Settings
settings .
Select the Show "appsscript.json" manifest file in editor checkbox.
At the left, click Editor code >
appsscript.json .
In the appsscript.json manifest file, set the
runtimeVersion
field to the value V8 .
At the top, click Save project save .
Migrating scripts to V8 explains
other steps you should take to ensure your script functions well using V8.
Enable the Rhino runtime
If your script is using V8 and you need to switch it to use the original Rhino
runtime, do the following:
Open the Apps Script project.
At the left, click Project Settings
settings .
Clear the Enable Chrome V8 runtime checkbox.
Alternatively, edit your script manifest:
Open the Apps Script project.
At the left, click Project Settings
settings .
Select the Show "appsscript.json" manifest file in editor checkbox.
At the left, click Editor code >
appsscript.json .
In the appsscript.json manifest file, set the
runtimeVersion
field to the value DEPRECATED_ES5 .
At the top, click Save project
save .
How do I migrate existing scripts?
The Migrating scripts to V8 guide
describes the steps you need to take to migrate an existing script to use V8.
This involves enabling the V8 runtime and checking the script for any known
incompatibilities.
Automatic migration of scripts to V8
Starting February 18, 2020 Google gradually migrates existing scripts that pass
our automated compatibility test to V8. The affected scripts continue to
function normally after migration.
If you want to opt a script out of automatic migration, set the
runtimeVersion
field in its manifest to DEPRECATED_ES5 . Choose to manually
migrate the script to V8 at any time
thereafter.
How do I report bugs?
The Support guide explains how to get programming help
on Stack Overflow, search existing issue reports, file new bugs, and make new
feature requests.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
