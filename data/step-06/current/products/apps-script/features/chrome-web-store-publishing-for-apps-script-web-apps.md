---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.535Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Chrome Web Store publishing for Apps Script web apps"
feature_slug: "chrome-web-store-publishing-for-apps-script-web-apps"
latest_feature_date: "2019-10-28"
deprecation_date: "2019-10-28"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/tables"
  - "https://developers.google.com/apps-script/guides/properties"
keywords:
  - "chrome"
  - "web"
  - "store"
  - "publishing"
  - "apps"
  - "script"
  - "can"
  - "no"
---

# Chrome Web Store publishing for Apps Script web apps

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script web apps can no longer be published to the Chrome Web Store; deprecated on 2019-10-28.

## Extended Definition

Apps Script web apps can no longer be published to the Chrome Web Store; deprecated on 2019-10-28.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- [https://developers.google.com/apps-script/guides/properties](https://developers.google.com/apps-script/guides/properties)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Streamlined the process for publishing web apps to the Chrome Web Store so that developers no longer need to manually verify web app URLs via Webmaster Central.
- Added support for registering Apps Script web apps in the Chrome Web Store , making it quick and simple to publish and distribute your web apps.
- An add-on is an Apps Script project published to a store inside Docs or Sheets, which makes it easy for users to find and install new features.
- The Chrome Web Store deprecated Chrome apps in 2016 and they are now only available for ChromeOS devices.

### Apps Script Sunset Schedule \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Publish web apps to Chrome Web Store August 19, 2016 October 28, 2019 You can no longer publish web apps to the Chrome Web Store.
- The Chrome Web Store deprecated Chrome apps in 2016 and they are now only available for ChromeOS devices.
- Previously published web apps are no longer discoverable in the Chrome Web Store.
- Home Google Workspace Apps Script Support Send feedback Apps Script Sunset Schedule Stay organized with collections Save and categorize content based on your preferences.

### Properties Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/properties](https://developers.google.com/apps-script/guides/properties)
- Source ID: `site-docs-root`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Properties service stores simple key-value data for Apps Script projects, scoped to a script, user, or document.
- Each key-value pair of the object in the parameter is stored as a separate property: service/propertyService.gs View on GitHub try { // Set multiple script properties in one call. const scriptProperties = PropertiesService . getScriptProperties (); scriptProperties . setProperties ({ cow : "moo" , sheep : "baa" , chicken : "cluck" , }); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Read data To retrieve a single value that you have previously saved, call Properties.getProperty : service/propertyService.gs View on GitHub try { // Get the value for the user property 'DISPLAY UNITS'. const userProperties = PropertiesService . getUserProperties (); const units = userProperties . getProperty ( "DISPLAY UNITS" ); console . log ( "values of units %s" , units ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } To retrieve all values in the current property store, call Properties.getProperties : service/propertyService.gs View on GitHub try { // Get multiple script properties in one call, then log them all. const scriptProperties = PropertiesService . getScriptProperties (); const data = scriptProperties . getProperties (); for ( const key in data ) { console . log ( "Key: %s, Value: %s" , key , data [ key ]); } } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Modify data The methods getProperty and getProperties return a copy of the stored data, not a live view, so changing the returned object doesn't update the value in the property store.
- To update the data in the store, save it again: service/propertyService.gs View on GitHub try { // Change the unit type in the user property 'DISPLAY UNITS'. const userProperties = PropertiesService . getUserProperties (); let units = userProperties . getProperty ( "DISPLAY UNITS" ); units = "imperial" ; // Only changes local value, not stored value. userProperties . setProperty ( "DISPLAY UNITS" , units ); // Updates stored value. } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Delete data To delete a single value, call Properties.deleteProperty : service/propertyService.gs View on GitHub try { // Delete the user property 'DISPLAY UNITS'. const userProperties = PropertiesService . getUserProperties (); userProperties . deleteProperty ( "DISPLAY UNITS" ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } To delete all properties in the current store, call Properties.deleteAllProperties : service/propertyService.gs View on GitHub try { // Get user properties in the current script. const userProperties = PropertiesService . getUserProperties (); // Delete all user properties in the current script. userProperties . deleteAllProperties (); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } Manage script properties manually Manually add up to fifty custom properties, as strings in key-value pairs, from the project settings page.
- Save data To save a single value, call the method Properties.setProperty(key, value) of the appropriate store, as shown in the following example: service/propertyService.gs View on GitHub try { // Set a property in each of the three property stores. const scriptProperties = PropertiesService . getScriptProperties (); const userProperties = PropertiesService . getUserProperties (); const documentProperties = PropertiesService . getDocumentProperties (); scriptProperties . setProperty ( "SERVER URL" , "http://www.example.com/" ); userProperties . setProperty ( "DISPLAY UNITS" , "metric" ); documentProperties . setProperty ( "SOURCE DATA ID" , "1j3GgabZvXUF177W0Zs 2v--H6SPCQb4pmZ6HsTZYT5k" , ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } To save data in bulk, pass a map of key-value pairs to Properties.setProperties(properties) .

