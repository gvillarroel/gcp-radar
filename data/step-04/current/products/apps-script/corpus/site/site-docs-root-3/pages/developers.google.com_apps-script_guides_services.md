---
title: "Built-in Google Services \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/services
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/apps-script/guides/libraries
source_metadata:
  url: https://developers.google.com/apps-script/guides/services
  title: "Built-in Google Services \_|\_ Apps Script \_|\_ Google for Developers"
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
Built-in Google Services
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Apps Script offers over 30 built-in services for interacting with user data, other Google systems, and external systems, provided as global objects.
Google Apps Script supports both the modern V8 and older Rhino JavaScript runtimes, with the V8 runtime being strongly recommended for its support of modern ECMAScript features.
The script editor provides an autocomplete feature that assists in identifying valid global objects, methods, and enums within the script's current context.
Services are accessed through global objects, and methods can be called on these objects to perform actions or retrieve data, with the ability to chain method calls when they return other Apps Script classes.
Child classes cannot be accessed directly but must be accessed by calling a method that returns an instance of that class, and some services use "interface" classes to represent generic types that can be cast to a precise class.
Google Apps Script provides more than 30 built-in services for interacting
with user data, other Google systems, and external systems. These services are
provided as global objects akin to JavaScript's standard
Math
object. For example, just as Math offers methods like random() and constants
like PI , Apps Script's Spreadsheet
service offers methods like
openById(id) ,
classes (child objects) like
Range , and enums like
DataValidationCriteria .
The reference documentation for services that control Google Workspace
products are collected in the "Google Workspace Services" section under
the "Reference" header in the sidebar of this site. Utility services (for things
like creating user interfaces, parsing XML, or writing log data) are collected
in the "Script Services" section.
Modern JavaScript features
Apps Script supports two JavaScript runtimes: the modern
V8 runtime and an older one powered by Mozilla's
Rhino JavaScript interpreter .
The V8 runtime supports modern
ECMAScript syntax and features.
The Rhino runtime is based on the older
JavaScript 1.6
standard, plus a few features from
1.7 and
1.8 .
Choose which runtime
to use with your script, but the V8 runtime is strongly recommended.
Each runtime supports JavaScript classes and objects that are available to your
script in addition to the built-in
and advanced Google services . Your
scripts can use common objects like
Array ,
Date ,
RegExp ,
and so forth ,
as well as the
Math and
Object
global objects.
Because Apps Script code runs on Google's servers (with the
exception of HTML-service pages),
browser-based JavaScript features like DOM manipulation or the
Window API are not
available in Apps Script.
Autocomplete
The script editor provides a "content assist" feature, more commonly called
"autocomplete," which reveals the global objects as well as methods and enums
that are valid in the script's current context. Autocomplete suggestions appear
automatically whenever you type a period after a global object, enum, or method
call that returns an Apps Script class. For example:
If you type the full name of a global object or select one from autocomplete,
then type . (a period), you see all methods and enums for that class.
If you type a few characters, you see all valid suggestions that begin with
those characters.
Global objects
Each service provides at least one global (top-level) object; for example, the
Gmail service is accessed solely from
the GmailApp object. Some services
provide multiple global objects; for example, the
Base service includes four global objects:
Browser ,
Logger ,
MimeType , and
Session .
Methods
The global objects of nearly all built-in or
advanced services include methods that
return data or an Apps Script class. Scripts make method calls in
this format:
GlobalObjectName.methodName(argument1, argument2, ..., argumentN);
For example, a script can send an email by calling the
sendEmail(recipient, subject, body)
method of the Gmail service like so:
GmailApp . sendEmail ( 'claire@example.com' , 'Subject line' , 'This is the body.' );
If a method returns another Apps Script class, chain method
calls on one line. (Return types are shown both in autocomplete and in a
method's reference documentation.) For example, the method
DocumentApp.create()
returns a Document ; thus, the
following two sections of code are equivalent:
var doc = DocumentApp . create ( 'New document' );
var body = doc . getTab ( 't.0' ) . asDocumentTab () . getBody ();
body . appendParagraph ( 'New paragraph.' );
// Same result as above .
DocumentApp . create ( 'New document' ) . getTab ( 't.0' ) . asDocumentTab () . getBody ()
. appendParagraph ( 'New paragraph.' );
Child classes
Every service includes one or more child classes that you can't access
from the top level as a global object. You also can't use the new keyword to
construct these classes, as you would with standard JavaScript classes like
Date .
To access a child class, you must call a method that returns it. If you're
not sure how to access a certain class, visit the root page for the service's
reference documentation—it lists the classes for the service, and the methods
that return them.
Interfaces
Some services include classes labeled as "interfaces" in the reference
documentation. These are generic classes used as return types for methods that
can't determine the precise type in advance. For example, the
Document service method
Body.getChild(childIndex)
returns a generic Element object.
The Element interface represents some other class, possibly a
Paragraph or
Table . Interface objects are rarely
useful on their own; instead, call a method like
Element.asParagraph()
to cast the object back to a specific class.
Enums
Most services include enums (enumerated types) of named values. For
example, the Google Drive service uses the
enums Access and
Permission to determine which users
have access to a file or folder. In most cases, you access these enums from
the global object, as shown in the following example:
// Creates a folder that anyone on the Internet can read from and write to.
// (Domain administrators can prohibit this setting for Google Workspace users.)
var folder = DriveApp . createFolder ( 'Shared Folder' );
folder . setSharing ( DriveApp . Access . ANYONE , DriveApp . Permission . EDIT );
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
