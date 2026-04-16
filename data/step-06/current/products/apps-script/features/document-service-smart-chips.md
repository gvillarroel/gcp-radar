---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.521Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Document service smart chips"
feature_slug: "document-service-smart-chips"
latest_feature_date: "2021-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/docs"
  - "https://developers.google.com/apps-script/guides/dialogs"
keywords:
  - "document"
  - "smart"
  - "chips"
  - "add"
  - "date"
  - "person"
  - "richlink"
  - "elements"
---

# Document service smart chips

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Document service smart chips add Date, Person, and RichLink elements to represent smart chip content in Google Docs.

## Extended Definition

Document service smart chips add Date, Person, and RichLink elements to represent smart chip content in Google Docs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, refer to the following: Google Workspace Updates blog : View & compare script versions with Apps Script project history Developer documentation : Versions June 12, 2023 Feature Third-party smart chips and link previews are now generally available.
- August 23, 2021 Feature The Document Service has added support for smart chips by adding three new classes: Date - An element representing a formatted date.
- The Optimization service has been updated with the following batch methods: LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients) LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients) May 03, 2019 Feature The Document service has been updated to add methods to get and set the language of a document: Document.getLanguage() Document.getSupportedLanguageCodes() Document.setLanguage(languageCode) April 19, 2019 Feature The Data Studio service has been updated to add a few values to FieldType enum : HYPERLINK IMAGE IMAGE LINK April 08, 2019 Change The behavior of the Google Cloud (GCP) projects used by scripts has been altered.
- For more information, see the following documentation: getEventType() for events getEventType() for event series EventType enum October 02, 2024 Announcement Apps Script has rescheduled the shutdown date of the Contacts service to January 31, 2025.

### "Dialogs and Sidebars in Google Workspace Documents \_|\_ Apps Script \_\

- URL: [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- For details on the response object, see https://developers.google.com/picker/reference/picker.responseobject @param {PickerResponse} data The response object. / function pickerCallback(data) { const action = data[google.picker.Response.ACTION]; if (action == google.picker.Action.PICKED) { handlePicked(data); } else if (action == google.picker.Action.CANCEL) { document.getElementById("result").innerHTML = "Picker canceled."; } } / Handles "PICKED" responsed from the Google Picker. @param {PickerResponse} data The response object. / function handlePicked(data) { const doc = data[google.picker.Response.DOCUMENTS][0]; const id = doc[google.picker.Document.ID]; google.script.run .withSuccessHandler((driveFilesGetResponse) => { // Render the response from Picker and the Drive.Files.Get API. const resultElement = document.getElementById("result"); resultElement.innerHTML = ""; for (const response of [ { title: "Picker response", content: JSON.stringify(data, null, 2), }, { title: "Drive.Files.Get response", content: JSON.stringify(driveFilesGetResponse, null, 2), }, ]) { const titleElement = document.createElement("h3"); titleElement.appendChild(document.createTextNode(response.title)); resultElement.appendChild(titleElement); const contentElement = document.createElement("pre"); contentElement.appendChild( document.createTextNode(response.content) ); resultElement.appendChild(contentElement); } }) .withFailureHandler(showError) .getFile(data[google.picker.Response.DOCUMENTS][0].id); } / Displays an error message within the #result element. @param {string} message The error message to display. / function showError(message) { document.getElementById("result").innerHTML = "Error: " + message; } </script> </head> <body> <div> <button onclick="getOAuthToken()">Select a file</button> <div id="result"></div> </div> <script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script> </body> </html> appsscript.json picker/appsscript.json View on GitHub { "timeZone" : "America/Los Angeles" , "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" , "oauthScopes" : [ "https://www.googleapis.com/auth/script.container.ui" , "https://www.googleapis.com/auth/drive.file" ], "dependencies" : { "enabledAdvancedServices" : [ { "userSymbol" : "Drive" , "version" : "v3" , "serviceId" : "drive" } ] } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For other // views, see https://developers.google.com/picker/reference/picker.viewid .addView( new google.picker.DocsView( google.picker.ViewId.SPREADSHEETS ).setOwnedByMe(true) ) // Hide the navigation panel so that Picker fills more of the dialog. .enableFeature(google.picker.Feature.NAV HIDDEN) // Hide the title bar since an Apps Script dialog already has a title. .hideTitleBar() .setOAuthToken(token) .setDeveloperKey(DEVELOPER KEY) .setAppId(CLOUD PROJECT NUMBER) .setCallback(pickerCallback) .setOrigin(google.script.host.origin) .build(); picker.setVisible(true); } else { showError("Unable to load the file picker."); } } / @typedef {Object} PickerResponse @property {string} action @property {PickerDocument[]} docs / / @typedef {Object} PickerDocument @property {string} id @property {string} name @property {string} mimeType @property {string} url @property {string} lastEditedUtc / / A callback function that extracts the chosen document's metadata from the response object.
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show dialog' , 'showDialog' ) . addToUi (); } function showDialog () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setWidth ( 400 ) . setHeight ( 300 ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showModalDialog ( html , 'My custom dialog' ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> Custom sidebars A sidebar can display an HTML service user interface inside a Docs, Forms, Slides, and Sheets editor.
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show sidebar' , 'showSidebar' ) . addToUi (); } function showSidebar () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setTitle ( 'My custom sidebar' ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showSidebar ( html ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> File-open dialogs Google Picker is a JavaScript API that lets users select or upload Google Drive files.

### Advanced Docs Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Documents . get ( documentId , { includeTabsContent : true , }); const firstTab = document . tabs [ 0 ]; const bodyElements = firstTab . documentTab . body . content ; for ( let i = 0 ; i < bodyElements . length ; i ++ ) { const structuralElement = bodyElements [ i ]; // Print the first paragraph text present in document if ( structuralElement . paragraph ) { const paragraphElements = structuralElement . paragraph . elements ; let paragraphText = "" ; for ( let j = 0 ; j < paragraphElements . length ; j ++ ) { const paragraphElement = paragraphElements [ j ]; if ( paragraphElement . textRun !== null ) { paragraphText += paragraphElement . textRun . content ; } } console . log ( paragraphText ); return paragraphText ; } } } Best Practices Batch Updates When using the advanced Docs service, combine multiple requests in an array rather than calling batchUpdate in a loop.
- This can be useful when replacing placeholders in a copy of a template document with values from a database. advanced/docs.gs View on GitHub / Performs "replace all". @param {string} documentId The document to perform the replace text operations on. @param {Object} findTextToReplacementMap A map from the "find text" to the "replace text". @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function findAndReplace ( documentId , findTextToReplacementMap ) { const requests = []; for ( const findText in findTextToReplacementMap ) { const replaceText = findTextToReplacementMap [ findText ]; // Replace all text across all tabs. const replaceAllTextRequest = { replaceAllText : { containsText : { text : findText , matchCase : true , }, replaceText : replaceText , }, }; // Replace all text across specific tabs. const replaceAllTextWithTabsCriteria = { replaceAllText : { ... replaceAllTextRequest . replaceAllText , tabsCriteria : { tabIds : [ TAB ID 1 , TAB ID 2 , TAB ID 3 ], }, }, }; requests . push ( replaceAllTextRequest ); } const response = Docs .
- Note that when possible you should batch together multiple operations into a single batchUpdate call for efficiency. advanced/docs.gs View on GitHub / Insert text at the beginning of the first tab in the document and then style the inserted text. @param {string} documentId The document the text is inserted into. @param {string} text The text to insert into the document. @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function insertAndStyleText ( documentId , text ) { const requests = [ { insertText : { location : { index : 1 , // A tab can be specified using its ID.
- Because of the structured nature of paragraphs in the Docs API, this involves combining the text of multiple sub-elements. advanced/docs.gs View on GitHub / Read the first paragraph of the first tab in a document. @param {string} documentId The ID of the document to read. @return {Object} paragraphText @see https://developers.google.com/docs/api/reference/rest/v1/documents/get / function readFirstParagraph ( documentId ) { // Get the document using document ID const document = Docs .

