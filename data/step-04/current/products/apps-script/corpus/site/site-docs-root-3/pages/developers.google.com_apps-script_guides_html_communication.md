---
title: "HTML Service: Communicate with Server Functions \_|\_ Apps Script \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/apps-script/guides/html/communication
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/apps-script/guides/libraries
source_metadata:
  url: https://developers.google.com/apps-script/guides/html/communication
  title: "HTML Service: Communicate with Server Functions \_|\_ Apps Script \_|\_\
    \ Google for Developers"
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
HTML Service: Communicate with Server Functions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
google.script.run is an asynchronous API for HTML-service pages to call server-side Apps Script functions.
Client-side calls to server-side functions are asynchronous and may not execute in the order you expect.
You can pass parameters and return values between client and server functions, but there are restrictions on legal data types.
Use withSuccessHandler(function) and withFailureHandler(function) to manage responses and errors from server calls.
Private functions in Apps Script (ending with an underscore) cannot be called by google.script.run and are invisible to the client.
google.script.run is an asynchronous
client-side JavaScript API that allows HTML-service pages to call server-side
Apps Script functions. The following example shows the most basic
functionality of google.script.run — calling a function on the
server from client-side
JavaScript.
Code.gs
function doGet() {
return HtmlService.createHtmlOutputFromFile('Index');
}
function doSomething() {
Logger.log('I was called!');
}
Index.html
<!DOCTYPE html>
<html>
<head>
<base target="_top">
<script>
google.script.run.doSomething();
</script>
</head>
</html>
If you deploy this script as a web app and visit its URL, you won't see
anything, but if you view the logs, you'll see that the server function
doSomething was called.
Client-side calls to server-side functions are asynchronous: after the browser
requests that the server run the function doSomething , the browser continues
immediately to the next line of code without waiting for a response. This means
that server function calls may not execute in the order you expect. If you make
two function calls at the same time, there is no way to know which function runs
first; the result may differ each time you load the page. In this situation,
success handlers and failure handlers
help control the flow of your code.
The google.script.run API allows 10 concurrent calls to server functions. If
you make an 11th call while 10 are still running, the server function is
delayed until one of the 10 spots is freed. In practice, you should rarely have
to think about this restriction, especially since most browsers already limit
the number of concurrent requests to the same server at a number lower than 10.
In Firefox, for example, the limit is 6. Most browsers similarly delay excess
server requests until one of the existing requests has completed.
Parameters and return values
Call a server function with parameters from the client. Similarly, a
server function can return a value to the client as a parameter passed to a
success handler .
Legal parameters and return values are JavaScript primitives like a Number ,
Boolean , String , or null , as well as JavaScript objects and arrays that
are composed of primitives, objects and arrays. A form element within the page
is also legal as a parameter, but it must be the function's only parameter, and
it is not legal as a return value. Requests fail if you attempt to pass a
Date , Function , DOM element besides a form , or other prohibited type,
including prohibited types inside objects or arrays. Objects that create
circular references also fail, and undefined fields within arrays become
null .
Note that an object passed to the server becomes a copy of the original. If a
server function receives an object and changes its properties, the properties on
the client are not affected.
Success handlers
Because google.script.run calls are asynchronous, client-side code continues
to the next line without waiting for a response. To specify a callback
function that runs when the server responds, use
withSuccessHandler(function) .
If the server function returns a value, the API passes that value to the
callback function as a parameter.
The following example displays a browser alert when the server responds. This
code sample requires authorization because the server-side function accesses
your Gmail account. To authorize the script, run the
getUnreadEmails function manually from the script editor once before you load
the page. Alternatively, when you
deploy the web app to
execute as the "user accessing the web app," you're prompted for authorization
when loading the app.
Code.gs
function doGet() {
return HtmlService.createHtmlOutputFromFile('Index');
}
function getUnreadEmails() {
return GmailApp.getInboxUnreadCount();
}
Index.html
<!DOCTYPE html>
<html>
<head>
<base target="_top">
<script>
function onSuccess(numUnread) {
var div = document.getElementById('output');
div.innerHTML = 'You have ' + numUnread
+ ' unread messages in your Gmail inbox.';
}
google.script.run.withSuccessHandler(onSuccess)
.getUnreadEmails();
</script>
</head>
<body>
<div id="output"></div>
</body>
</html>
Failure handlers
If the server fails to respond or throws an error,
withFailureHandler(function)
lets you specify a failure handler to run in place of a success handler.
If an error occurs, the API passes the
Error
object as an argument to the failure handler.
By default, if you don't specify a failure handler, failures are logged to the
JavaScript console. To override this, call withFailureHandler(null) or supply
a failure handler that does nothing.
The syntax for failure handlers is nearly identical to success handlers, as this
example shows.
Code.gs
function doGet() {
return HtmlService.createHtmlOutputFromFile('Index');
}
function getUnreadEmails() {
// 'got' instead of 'get' throws an error.
return GmailApp.gotInboxUnreadCount();
}
Index.html
<!DOCTYPE html>
<html>
<head>
<base target="_top">
<script>
function onFailure(error) {
var div = document.getElementById('output');
div.innerHTML = "ERROR: " + error.message;
}
google.script.run.withFailureHandler(onFailure)
.getUnreadEmails();
</script>
</head>
<body>
<div id="output"></div>
</body>
</html>
User objects
To reuse the same success or failure handler for multiple calls to the
server, call
withUserObject(object)
to specify an object that's passed to the handler as a second parameter.
This "user object," not to be confused with the
User class, lets you respond to the
context in which the client contacted the server. Because user objects aren't
sent to the server, they can be most things, including functions and DOM
elements, without the restrictions on parameters and return values
for server calls. User objects can't be objects constructed with the
new operator.
In this example, clicking either of two buttons updates that button with a
value from the server while leaving the other button unchanged, even though they
share one success handler. Inside the onclick handler, the keyword this
refers to the button itself.
Code.gs
function doGet() {
return HtmlService.createHtmlOutputFromFile('Index');
}
function getEmail() {
return Session.getActiveUser().getEmail();
}
Index.html
<!DOCTYPE html>
<html>
<head>
<base target="_top">
<script>
function updateButton(email, button) {
button.value = 'Clicked by ' + email;
}
</script>
</head>
<body>
<input type="button" value="Not Clicked"
onclick="google.script.run
.withSuccessHandler(updateButton)
.withUserObject(this)
.getEmail()" />
<input type="button" value="Not Clicked"
onclick="google.script.run
.withSuccessHandler(updateButton)
.withUserObject(this)
.getEmail()" />
</body>
</html>
Forms
If you call a server function with a form element as a parameter, the form
becomes a single object with field names as keys and field values as values. The
values are all converted to strings, except for the contents of file-input
fields, which become Blob objects.
This example processes a form, including a file-input field, without reloading
the page; it uploads the file to Google Drive and then prints the URL for the
file in the client-side page. Inside the onsubmit handler, the keyword this
refers to the form itself. Note that upon loading all forms in the page have
the default submit action disabled by preventFormSubmit . This prevents the
page from redirecting to an inaccurate URL in the event of an exception.
Code.gs
function doGet() {
return HtmlService.createHtmlOutputFromFile('Index');
}
function processForm(formObject) {
var formBlob = formObject.myFile;
var driveFile = DriveApp.createFile(formBlob);
return driveFile.getUrl();
}
Index.html
<!DOCTYPE html>
<html>
<head>
<base target="_top">
<script>
// Prevent forms from submitting.
function preventFormSubmit() {
var forms = document.querySelectorAll('form');
for (var i = 0; i < forms.length; i++) {
forms[i].addEventListener('submit', function(event) {
event.preventDefault();
});
}
}
window.addEventListener('load', preventFormSubmit);
function handleFormSubmit(formObject) {
google.script.run.withSuccessHandler(updateUrl).processForm(formObject);
}
function updateUrl(url) {
var div = document.getElementById('output');
div.innerHTML = '<a href="' + url + '">Got it!</a>';
}
</script>
</head>
<body>
<form id="myForm" onsubmit="handleFormSubmit(this)">
<input name="myFile" type="file" />
<input type="submit" value="Submit" />
</form>
<div id="output"></div>
</body>
</html>
Script runners
Think of google.script.run as a builder for a "script runner." If you
add a success handler, failure handler, or user object to a script runner, you
aren't changing the existing runner; instead, you get back a new script runner
with new behavior.
Use any combination and any order of withSuccessHandler ,
withFailureHandler , and withUserObject . Also call any of the
modifying functions on a script runner that already has a value set. The new
value overrides the previous value.
This example sets a common failure handler for all three server calls, but two
separate success handlers:
var myRunner = google . script . run . withFailureHandler ( onFailure );
var myRunner1 = myRunner . withSuccessHandler ( onSuccess );
var myRunner2 = myRunner . withSuccessHandler ( onDifferentSuccess );
myRunner1 . doSomething ();
myRunner1 . doSomethingElse ();
myRunner2 . doSomething ();
Private functions
Server functions whose names end with an underscore are considered private.
These functions cannot be called by google.script and their names are never
sent to the client. You can use them to hide implementation details that
need to be kept secret on the server. google.script also cannot see
functions within libraries or functions not
declared at the top level of the script.
In this example, the function getBankBalance is available in the client
code; a user who inspects your source code can discover its name even if you
don't call it. However, the functions deepSecret_ and obj.objectMethod
are completely invisible to
the client.
Code.gs
function doGet() {
return HtmlService.createHtmlOutputFromFile('Index');
}
function getBankBalance() {
var email = Session.getActiveUser().getEmail()
return deepSecret_(email);
}
function deepSecret_(email) {
// Do some secret calculations
return email + ' has $1,000,000 in the bank.';
}
var obj = {
objectMethod: function() {
// More secret calculations
}
};
Index.html
<!DOCTYPE html>
<html>
<head>
<base target="_top">
<script>
function onSuccess(balance) {
var div = document.getElementById('output');
div.innerHTML = balance;
}
google.script.run.withSuccessHandler(onSuccess)
.getBankBalance();
</script>
</head>
<body>
<div id="output">No result yet...</div>
</body>
</html>
Resize dialogs in Google Workspace applications
Custom dialog boxes in Google Docs,
Google Sheets, or Forms can be resized by calling the
google.script.host methods
setWidth(width) or
setHeight(height) in
client-side code. (To set the initial size of a dialog, use the HtmlOutput
methods
setWidth(width)
and
setHeight(height) .)
Note that dialogs don't re-center in the parent window when resized, and it is
not possible to resize sidebars .
Close dialogs and sidebars in Google Workspace
If you use the HTML service to display a dialog or
sidebar in Google Docs, Sheets,
or Forms, you cannot close the interface by calling
window.close . Instead, you must call
google.script.host.close .
For an example, see the section on serving HTML as a Google Workspace
user
interface .
Move browser focus in Google Workspace
To switch focus in the user's browser from a dialog or sidebar back to the
Google Docs, Sheets, or Forms editor, call the
method
google.script.host.editor.focus .
This method is particularly useful in combination with the Document
service methods Document.setCursor(position)
and
Document.setSelection(range) .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
