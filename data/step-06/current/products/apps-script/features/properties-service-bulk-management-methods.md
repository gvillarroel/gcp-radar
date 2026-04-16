---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.654Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Properties service bulk management methods"
feature_slug: "properties-service-bulk-management-methods"
latest_feature_date: "2012-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/properties"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/libraries"
keywords:
  - "properties"
  - "bulk"
  - "management"
  - "methods"
  - "scriptproperties"
  - "userproperties"
  - "now"
  - "deletion"
---

# Properties service bulk management methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

ScriptProperties and UserProperties now support deletion, bulk set, and full retrieval operations.

## Extended Definition

ScriptProperties and UserProperties now support deletion, bulk set, and full retrieval operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/properties](https://developers.google.com/apps-script/guides/properties)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/libraries](https://developers.google.com/apps-script/guides/libraries)

## Supporting Pages

### Properties Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/properties](https://developers.google.com/apps-script/guides/properties)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each key-value pair of the object in the parameter is stored as a separate property: service/propertyService.gs View on GitHub try { // Set multiple script properties in one call. const scriptProperties = PropertiesService . getScriptProperties (); scriptProperties . setProperties ({ cow : "moo" , sheep : "baa" , chicken : "cluck" , }); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Read data To retrieve a single value that you have previously saved, call Properties.getProperty : service/propertyService.gs View on GitHub try { // Get the value for the user property 'DISPLAY UNITS'. const userProperties = PropertiesService . getUserProperties (); const units = userProperties . getProperty ( "DISPLAY UNITS" ); console . log ( "values of units %s" , units ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } To retrieve all values in the current property store, call Properties.getProperties : service/propertyService.gs View on GitHub try { // Get multiple script properties in one call, then log them all. const scriptProperties = PropertiesService . getScriptProperties (); const data = scriptProperties . getProperties (); for ( const key in data ) { console . log ( "Key: %s, Value: %s" , key , data [ key ]); } } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Modify data The methods getProperty and getProperties return a copy of the stored data, not a live view, so changing the returned object doesn't update the value in the property store.
- Save data To save a single value, call the method Properties.setProperty(key, value) of the appropriate store, as shown in the following example: service/propertyService.gs View on GitHub try { // Set a property in each of the three property stores. const scriptProperties = PropertiesService . getScriptProperties (); const userProperties = PropertiesService . getUserProperties (); const documentProperties = PropertiesService . getDocumentProperties (); scriptProperties . setProperty ( "SERVER URL" , "http://www.example.com/" ); userProperties . setProperty ( "DISPLAY UNITS" , "metric" ); documentProperties . setProperty ( "SOURCE DATA ID" , "1j3GgabZvXUF177W0Zs 2v--H6SPCQb4pmZ6HsTZYT5k" , ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } To save data in bulk, pass a map of key-value pairs to Properties.setProperties(properties) .
- Comparison of property stores The PropertiesService global object offers three methods, each of which returns a similar Properties object but with different access rights, as shown in the following table: Script Properties User Properties Document Properties Method to access getScriptProperties() getUserProperties() getDocumentProperties() Data shared among All users of a script, add-on, or web app The current user of a script, add-on, or web app All users of an add-on in the open document Typically used for App-wide configuration data, like the username and password for the developer's external database User-specific settings, like metric or imperial units Document-specific data, like the source URL for an embedded chart Data format The Properties service stores all data as strings in key-value pairs.
- To update the data in the store, save it again: service/propertyService.gs View on GitHub try { // Change the unit type in the user property 'DISPLAY UNITS'. const userProperties = PropertiesService . getUserProperties (); let units = userProperties . getProperty ( "DISPLAY UNITS" ); units = "imperial" ; // Only changes local value, not stored value. userProperties . setProperty ( "DISPLAY UNITS" , units ); // Updates stored value. } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Delete data To delete a single value, call Properties.deleteProperty : service/propertyService.gs View on GitHub try { // Delete the user property 'DISPLAY UNITS'. const userProperties = PropertiesService . getUserProperties (); userProperties . deleteProperty ( "DISPLAY UNITS" ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } To delete all properties in the current store, call Properties.deleteAllProperties : service/propertyService.gs View on GitHub try { // Get user properties in the current script. const userProperties = PropertiesService . getUserProperties (); // Delete all user properties in the current script. userProperties . deleteAllProperties (); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Manage script properties manually Manually add up to fifty custom properties, as strings in key-value pairs, from the project settings page.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- August 30, 2012 Feature Added methods to delete ScriptProperties and UserProperties .
- February 25, 2014 Change Replaced ScriptProperties and UserProperties with a unified PropertiesService .
- Added support for persistent storage in scripts via UserProperties and ScriptProperties .
- These methods are conceptually similar to the PropertiesService method getDocumentProperties() , which was introduced for use in add-ons earlier this year.

### Libraries \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/libraries](https://developers.google.com/apps-script/guides/libraries)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is an example of a function that you would include in your library to expose its Script Properties: function getLibraryProperty ( key ) { const scriptProperties = PropertiesService . getScriptProperties (); return scriptProperties . getProperty ( key ); } The following diagram illustrates a not-shared resource using the example of Script Properties: This table lists the shared and not-shared resources for your reference: Resource Shared Not-Shared Notes Lock The same instance is visible to all including scripts when created in the library.
- The following diagram illustrates a shared resource using the example of User Properties: A not-shared resource means that both library and the including script have built-in access only to their instance of the resource.
- ScriptApp UiApp User Properties Logger and execution transcript Sites, Sheets and other containers A call to getActive returns the container of the including script.
- When creating a library, consider best practices like choosing a meaningful name, using underscores for private methods, and including JSDoc documentation.

