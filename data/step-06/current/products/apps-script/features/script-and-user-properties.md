---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.680Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script and user properties"
feature_slug: "script-and-user-properties"
latest_feature_date: "2010-08-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/apps-script/guides/properties"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
keywords:
  - "script"
  - "user"
  - "properties"
  - "apps"
  - "supports"
  - "persistent"
  - "storage"
  - "through"
---

# Script and user properties

Product: Apps Script
Coverage: LOW

## Step 02 Summary

Apps Script supports persistent storage through ScriptProperties and UserProperties.

## Extended Definition

Apps Script supports persistent storage through ScriptProperties and UserProperties.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/properties](https://developers.google.com/apps-script/guides/properties)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)

## Supporting Pages

### Properties Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/properties](https://developers.google.com/apps-script/guides/properties)
- Source ID: `site-docs-root`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Properties service stores simple key-value data for Apps Script projects, scoped to a script, user, or document.
- Each key-value pair of the object in the parameter is stored as a separate property: service/propertyService.gs View on GitHub try { // Set multiple script properties in one call. const scriptProperties = PropertiesService . getScriptProperties (); scriptProperties . setProperties ({ cow : "moo" , sheep : "baa" , chicken : "cluck" , }); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Read data To retrieve a single value that you have previously saved, call Properties.getProperty : service/propertyService.gs View on GitHub try { // Get the value for the user property 'DISPLAY UNITS'. const userProperties = PropertiesService . getUserProperties (); const units = userProperties . getProperty ( "DISPLAY UNITS" ); console . log ( "values of units %s" , units ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } To retrieve all values in the current property store, call Properties.getProperties : service/propertyService.gs View on GitHub try { // Get multiple script properties in one call, then log them all. const scriptProperties = PropertiesService . getScriptProperties (); const data = scriptProperties . getProperties (); for ( const key in data ) { console . log ( "Key: %s, Value: %s" , key , data [ key ]); } } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Modify data The methods getProperty and getProperties return a copy of the stored data, not a live view, so changing the returned object doesn't update the value in the property store.
- To update the data in the store, save it again: service/propertyService.gs View on GitHub try { // Change the unit type in the user property 'DISPLAY UNITS'. const userProperties = PropertiesService . getUserProperties (); let units = userProperties . getProperty ( "DISPLAY UNITS" ); units = "imperial" ; // Only changes local value, not stored value. userProperties . setProperty ( "DISPLAY UNITS" , units ); // Updates stored value. } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Delete data To delete a single value, call Properties.deleteProperty : service/propertyService.gs View on GitHub try { // Delete the user property 'DISPLAY UNITS'. const userProperties = PropertiesService . getUserProperties (); userProperties . deleteProperty ( "DISPLAY UNITS" ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } To delete all properties in the current store, call Properties.deleteAllProperties : service/propertyService.gs View on GitHub try { // Get user properties in the current script. const userProperties = PropertiesService . getUserProperties (); // Delete all user properties in the current script. userProperties . deleteAllProperties (); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Manage script properties manually Manually add up to fifty custom properties, as strings in key-value pairs, from the project settings page.
- Save data To save a single value, call the method Properties.setProperty(key, value) of the appropriate store, as shown in the following example: service/propertyService.gs View on GitHub try { // Set a property in each of the three property stores. const scriptProperties = PropertiesService . getScriptProperties (); const userProperties = PropertiesService . getUserProperties (); const documentProperties = PropertiesService . getDocumentProperties (); scriptProperties . setProperty ( "SERVER URL" , "http://www.example.com/" ); userProperties . setProperty ( "DISPLAY UNITS" , "metric" ); documentProperties . setProperty ( "SOURCE DATA ID" , "1j3GgabZvXUF177W0Zs 2v--H6SPCQb4pmZ6HsTZYT5k" , ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } To save data in bulk, pass a map of key-value pairs to Properties.setProperties(properties) .

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- In the Apps Script project, go to Project Settings , click Edit script properties , then click Add script property to add the following script properties: LOCATION with the location of the Google Cloud project created in previous steps such as us-central1 .
- View on GitHub Create and configure in a new spreadsheet To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button: Copy Google Sheets speadsheet In the newly created spreadsheet, go to Extensions > Apps Script .
- Coding level : Advanced Duration : 30 minutes Project type : Custom function Overview A fact-check custom function for Google Sheets to be used as a bound Google Apps Script project powered by a Vertex AI agent and Gemini model.
- Home Google Workspace Apps Script Samples Send feedback Fact-check statements with an ADK AI agent and Gemini model Stay organized with collections Save and categorize content based on your preferences.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Apps Script now supports the V8 runtime, which powers Chrome and Node.js, enabling developers to use modern JavaScript syntax and features not available with the older Rhino runtime.
- You can enable the V8 runtime for your Apps Script project through project settings or by editing the appsscript.json manifest file.
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.
- Unavailable APIs The following standard JavaScript APIs are NOT available in the Apps Script V8 runtime: Timers : setTimeout , setInterval , clearTimeout , clearInterval Streams : ReadableStream , WritableStream , TextEncoder , TextDecoder Web APIs : fetch , FormData , File , Blob , URL , URLSearchParams , DOMException , atob , btoa Crypto : crypto , SubtleCrypto Global Objects : window , navigator , performance , process (Node.js) Use the following Apps Script APIs as alternatives: Timers : Use Utilities.sleep for synchronous pauses.

