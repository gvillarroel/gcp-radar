---
title: "Advanced Slides Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/slides
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/slides
  title: "Advanced Slides Service \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Advanced Slides Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Advanced Slides service allows Apps Script to read and edit content in Google Slides by accessing the Slides API.
This is an advanced service that must be enabled before use.
The service uses the same objects, methods, and parameters as the public Slides API.
Sample code is provided for common tasks like creating presentations and slides, reading element IDs, and manipulating text boxes.
It is best practice to use batch updates to combine multiple requests when using the Slides Advanced Service.
Slides API and manage presentations from Apps Script.
The Advanced Slides service lets you access the
Slides API using Google Apps Script. This service lets
scripts read and edit content in Google Slides.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the Slides API.
Like all advanced services in Apps Script, the advanced
Slides service uses the same objects, methods, and parameters as
the public API. For more information, see
How method signatures are determined .
To report issues and find other support, see the
Slides support guide .
Sample code
The following sample code uses version 1 of the API.
Create a new presentation
The following example demonstrates how to create a new presentation using the
Slides advanced service. It is equivalent to the
Create a new presentation
recipe sample.
advanced/slides.gs
View on GitHub
/**
* Create a new presentation.
* @return {string} presentation Id.
* @see https://developers.google.com/slides/api/reference/rest/v1/presentations/create
*/
function createPresentation () {
try {
const presentation = Slides . Presentations . create ({
title : "MyNewPresentation" ,
});
console . log ( `Created presentation with ID: ${ presentation . presentationId } ` );
return presentation . presentationId ;
} catch ( e ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , e . message );
}
}
Create a new slide
The following example demonstrates how to create a new slide in a presentation,
at a specific index and with predefined layout. It is equivalent to the
Create a new slide
recipe sample.
advanced/slides.gs
View on GitHub
/**
* Create a new slide.
* @param {string} presentationId The presentation to add the slide to.
* @return {Object} slide
* @see https://developers.google.com/slides/api/reference/rest/v1/presentations/batchUpdate
*/
function createSlide ( presentationId ) {
// You can specify the ID to use for the slide, as long as it's unique.
const pageId = Utilities . getUuid ();
const requests = [
{
createSlide : {
objectId : pageId ,
insertionIndex : 1 ,
slideLayoutReference : {
predefinedLayout : "TITLE_AND_TWO_COLUMNS" ,
},
},
},
];
try {
const slide = Slides . Presentations . batchUpdate (
{ requests : requests },
presentationId ,
);
console . log (
`Created Slide with ID: ${ slide . replies [ 0 ]. createSlide . objectId } ` ,
);
return slide ;
} catch ( e ) {
// TODO (developer) - Handle Exception
console . log ( "Failed with error %s" , e . message );
}
}
Read page element object IDs
The following example demonstrates how to retrieve the object IDs for every page
element on a specific slide using a field mask. It is equivalent to the
Read element object IDs from a page
recipe sample.
advanced/slides.gs
View on GitHub
/**
* Read page element IDs.
* @param {string} presentationId The presentation to read from.
* @param {string} pageId The page to read from.
* @return {Object} response
* @see https://developers.google.com/slides/api/reference/rest/v1/presentations.pages/get
*/
function readPageElementIds ( presentationId , pageId ) {
// You can use a field mask to limit the data the API retrieves
// in a get request, or what fields are updated in an batchUpdate.
try {
const response = Slides . Presentations . Pages . get ( presentationId , pageId , {
fields : "pageElements.objectId" ,
});
console . log ( response );
return response ;
} catch ( e ) {
// TODO (developer) - Handle Exception
console . log ( "Failed with error %s" , e . message );
}
}
Add a new text box
The following example demonstrates how to add a new text box to a slide and add
text to it. It is equivalent to the
Add a text box to a slide
recipe sample.
advanced/slides.gs
View on GitHub
/**
* Add a new text box with text to a page.
* @param {string} presentationId The presentation ID.
* @param {string} pageId The page ID.
* @return {Object} response
* @see https://developers.google.com/slides/api/reference/rest/v1/presentations/batchUpdate
*/
function addTextBox ( presentationId , pageId ) {
// You can specify the ID to use for elements you create,
// as long as the ID is unique.
const pageElementId = Utilities . getUuid ();
const requests = [
{
createShape : {
objectId : pageElementId ,
shapeType : "TEXT_BOX" ,
elementProperties : {
pageObjectId : pageId ,
size : {
width : {
magnitude : 150 ,
unit : "PT" ,
},
height : {
magnitude : 50 ,
unit : "PT" ,
},
},
transform : {
scaleX : 1 ,
scaleY : 1 ,
translateX : 200 ,
translateY : 100 ,
unit : "PT" ,
},
},
},
},
{
insertText : {
objectId : pageElementId ,
text : "My Added Text Box" ,
insertionIndex : 0 ,
},
},
];
try {
const response = Slides . Presentations . batchUpdate (
{ requests : requests },
presentationId ,
);
console . log (
`Created Textbox with ID: ${ response . replies [ 0 ]. createShape . objectId } ` ,
);
return response ;
} catch ( e ) {
// TODO (developer) - Handle Exception
console . log ( "Failed with error %s" , e . message );
}
}
Format shape text
The following example demonstrates how to format a shape's text, updating its
color, font and underlining its text. It is equivalent to the
Format text in a shape or textbox
recipe sample.
advanced/slides.gs
View on GitHub
/**
* Format the text in a shape.
* @param {string} presentationId The presentation ID.
* @param {string} shapeId The shape ID.
* @return {Object} replies
* @see https://developers.google.com/slides/api/reference/rest/v1/presentations/batchUpdate
*/
function formatShapeText ( presentationId , shapeId ) {
const requests = [
{
updateTextStyle : {
objectId : shapeId ,
fields : "foregroundColor,bold,italic,fontFamily,fontSize,underline" ,
style : {
foregroundColor : {
opaqueColor : {
themeColor : "ACCENT5" ,
},
},
bold : true ,
italic : true ,
underline : true ,
fontFamily : "Corsiva" ,
fontSize : {
magnitude : 18 ,
unit : "PT" ,
},
},
textRange : {
type : "ALL" ,
},
},
},
];
try {
const response = Slides . Presentations . batchUpdate (
{ requests : requests },
presentationId ,
);
return response . replies ;
} catch ( e ) {
// TODO (developer) - Handle Exception
console . log ( "Failed with error %s" , e . message );
}
}
Best Practices
Batch Updates
When using the Slides Advanced Service, combine multiple
requests in an array rather than calling batchUpdate in a loop.
Don't — Call batchUpdate in a loop.
var titles = [ "slide 1" , "slide 2" ];
for ( var i = 0 ; i < titles . length ; i ++ ) {
Slides . Presentations . batchUpdate ( preso , {
requests : [{
createSlide : ...
}]
});
}
Do — Call batchUpdate with an array of
updates.
var requests = [];
var titles = [ "slide 1" , "slide 2" ];
for ( var i = 0 ; i < titles . length ; i ++ ) {
requests . push ({ createSlide : ... });
}
Slides . Presentations . batchUpdate ( preso , {
requests : requests
});
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
