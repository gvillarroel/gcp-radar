---
title: "Extend Google Docs \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/docs
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/apps-script/overview
source_metadata:
  url: https://developers.google.com/apps-script/guides/docs
  title: "Extend Google Docs \_|\_ Apps Script \_|\_ Google for Developers"
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
Extend Google Docs
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Apps Script can create and modify Google Docs and customize their user interface.
Apps Script can interact with Google Docs by either creating or modifying a document with appropriate permissions or by being bound to a document for special UI abilities.
The replaceText() method in Apps Script is a simple way to replace text in a Google Doc and supports regular expressions.
Custom menus, dialog boxes, and sidebars can be added to Google Docs using Apps Script, but the script must be bound to the document.
Scripts for Google Docs can be published as add-ons to share them with other users.
Google Apps Script lets you programmatically create and modify
Docs, as well as customize the user interface with new menus,
dialog boxes, and sidebars.
The basics
Apps Script can interact with Docs in two broad
ways: any script can create or modify a document if the script's user has
appropriate permissions for the document, and a script can also be
bound to a document, which gives
the script special abilities to alter the user interface or respond when the
document is opened. To create a container-bound script from within
Docs, click Extensions
> Apps Script .
In either case, you can interact with a Docs document by using
Apps Script's Document Service ,
as the following example demonstrates.
function createDoc () {
var doc = DocumentApp . create ( 'Sample Document' );
var documentTab = doc . getTab ( 't.0' ). asDocumentTab ();
var body = documentTab . getBody ();
var rowsData = [[ 'Plants' , 'Animals' ], [ 'Ficus' , 'Goat' ], [ 'Basil' , 'Cat' ], [ 'Moss' , 'Frog' ]];
body . insertParagraph ( 0 , doc . getName ())
. setHeading ( DocumentApp . ParagraphHeading . HEADING1 );
table = body . appendTable ( rowsData );
table . getRow ( 0 ). editAsText (). setBold ( true );
}
The preceding script creates a new document in the user's Google Drive, then
retrieves the tab with ID t.0 (the default first tab), inserts a paragraph
that contains the same text as the document's name, styles that paragraph as a
heading, and appends a table based on the values in a two-dimensional array. The
script could also make these changes to an existing document by
replacing the call to DocumentApp.create
with DocumentApp.openById
or openByUrl .
For scripts created inside a document (container-bound), use
DocumentApp.getActiveDocument
and Document.getActiveTab .
Structure of a document
From Apps Script's perspective, a Docs document is
structured much like an HTML document—that is, a document is composed of one or
more Tab objects, each of which contain
elements (like a Paragraph or
Table ) that often contain other
elements. Most scripts that modify a Docs document begin with a
call to getTab
and asDocumentTab
followed by getBody ,
because the Body is a core element
that contains all other elements in a tab except for the
HeaderSection ,
FooterSection , and any
Footnotes .
However, there are rules about which types of elements can contain other types.
Furthermore, the Document Service in Apps Script can only insert
certain types of elements into other elements. The following tree shows which
elements can be contained by a certain type of element.
Elements shown in bold can be inserted; non-bold elements can only be
manipulated in place.
Document
Tab
DocumentTab
Body
ListItem
Equation
EquationFunction
EquationFunction ...
EquationFunctionArgumentSeparator
EquationSymbol
Text
EquationSymbol
Text
Footnote
HorizontalRule
InlineDrawing
InlineImage
PageBreak
Text
Paragraph
Equation
EquationFunction
EquationFunction ...
EquationFunctionArgumentSeparator
EquationSymbol
Text
EquationSymbol
Text
Footnote
HorizontalRule
InlineDrawing
InlineImage
PageBreak
Text
Table
TableRow
TableCell
Paragraph ...
ListItem ...
Table ...
TableOfContents
Paragraph ...
ListItem ...
Table ...
HeaderSection
ListItem
HorizontalRule
InlineDrawing
InlineImage
Text
UnsupportedElement (page number, etc.)
Paragraph
HorizontalRule
InlineDrawing
InlineImage
Text
UnsupportedElement (page number, etc.)
Table
TableRow
TableCell
Paragraph ...
ListItem ...
Table ...
FooterSection
ListItem
HorizontalRule
InlineDrawing
InlineImage
Text
UnsupportedElement (page number, etc.)
Paragraph
HorizontalRule
InlineDrawing
InlineImage
Text
UnsupportedElement (page number, etc.)
Table
TableRow
TableCell
Paragraph ...
ListItem ...
Table ...
FootnoteSection
ListItem
HorizontalRule
Text
Paragraph
HorizontalRule
Text
Replace text
Apps Script is often used to replace text in Docs.
Suppose you have a spreadsheet full of client information and you want to
generate a personalized Docs for each client. (This type of
operation is often called a mail merge.)
You can replace text using the replaceText
method, which supports most JavaScript
regular expression
features. In the following example, the first function adds placeholder text to
the document, and the second replaces that text with properties from a client
object.
Both of these functions use the
getActiveDocument
and
getActiveTab
methods, which only apply to scripts created inside a Docs
document; in a stand-alone script, use
DocumentApp.create ,
openById ,
or openByUrl ,
combined with Document.getTab ,
instead.
Add some placeholders
function createPlaceholders () {
var body = DocumentApp . getActiveDocument (). getActiveTab (). asDocumentTab (). getBody ();
body . appendParagraph ( '{name}' );
body . appendParagraph ( '{address}' );
body . appendParagraph ( '{city} {state} {zip}' );
}
Replace the placeholders
function searchAndReplace () {
var body = DocumentApp . getActiveDocument (). getActiveTab (). asDocumentTab (). getBody ();
var client = {
name : 'Joe Script-Guru' ,
address : '100 Script Rd' ,
city : 'Scriptville' ,
state : 'GA' ,
zip : 94043
};
body . replaceText ( '{name}' , client . name );
body . replaceText ( '{address}' , client . address );
body . replaceText ( '{city}' , client . city );
body . replaceText ( '{state}' , client . state );
body . replaceText ( '{zip}' , client . zip );
}
Custom menus and user interfaces
You can customize Docs by adding
custom menus ,
dialog boxes, and sidebars . Keep in mind that a
script can only interact with the UI of the document it is
bound to.
To learn more about creating custom interfaces with HTML and CSS, see the
guide to HTML Service .
If you plan to publish your interface as an
add-on , follow the
style guide to ensure its appearance
is consistent with the Docs editor.
Add-ons for Docs
Add-ons run inside
Docs and can be installed from the Docs
add-on store. If you've developed a script for
Docs and want to share it with the world,
Apps Script lets you
publish your script as an
add-on so other users can install it from the
add-on store.
To create an add-on for Docs, see the
quickstart for building Docs
add-ons .
Triggers
Scripts that are bound to a Google
Doc can use a simple trigger to respond
to the document's onOpen event , which
occurs whenever a user who has edit access to the document opens it in
Docs.
To set up the trigger, write a function called onOpen . For an example
of this trigger, see Custom menus in Google Workspace .
Although the trigger is useful for adding menus, it cannot use any Apps
Script services that require authorization.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
