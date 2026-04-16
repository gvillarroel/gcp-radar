---
title: "Properties Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/properties
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/apps-script/guides/libraries
source_metadata:
  url: https://developers.google.com/apps-script/guides/properties
  title: "Properties Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Properties Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Properties service stores simple key-value data for Apps Script projects, scoped to a script, user, or document.
There are three types of property stores: Script properties (shared by all users), User properties (specific to the current user), and Document properties (specific to an add-on in a document).
All data is stored as strings in key-value pairs, with non-string data types automatically converted.
Data can be saved using setProperty for single values or setProperties for multiple values.
Data can be retrieved using getProperty for single values or getProperties for all values in a store.
Data can be modified by saving the updated value again using setProperty .
Properties can be deleted individually with deleteProperty or all at once with deleteAllProperties .
Script properties can be managed manually through the project settings page for up to fifty properties.
The Properties service stores data in
key-value pairs scoped to one script, one user of a script, or one document in
which a add-on is used.
It's typically used to store developer configuration or user preferences.
Properties are never shared between scripts.
To view the daily quotas and storage limits for the Properties service, see
Quotas for Google Services .
Comparison of property stores
The
PropertiesService
global object offers three methods, each of which returns a similar
Properties
object but with different access rights, as shown in the following table:
Script Properties
User Properties
Document Properties
Method to access
getScriptProperties()
getUserProperties()
getDocumentProperties()
Data shared among
All users of a script, add-on, or web app
The current user of a script, add-on, or web app
All users of an add-on in the open document
Typically used for
App-wide configuration data, like the username and password for the
developer's external database
User-specific settings, like metric or imperial units
Document-specific data, like the source URL for an embedded chart
Data format
The Properties service stores all data as strings in key-value pairs. Data types
that are not already strings are automatically converted to strings, including
methods contained within saved objects.
Save data
To save a single value, call the method Properties.setProperty(key,
value)
of the appropriate store, as shown in the following example:
service/propertyService.gs
View on GitHub
try {
// Set a property in each of the three property stores.
const scriptProperties = PropertiesService . getScriptProperties ();
const userProperties = PropertiesService . getUserProperties ();
const documentProperties = PropertiesService . getDocumentProperties ();
scriptProperties . setProperty ( "SERVER_URL" , "http://www.example.com/" );
userProperties . setProperty ( "DISPLAY_UNITS" , "metric" );
documentProperties . setProperty (
"SOURCE_DATA_ID" ,
"1j3GgabZvXUF177W0Zs_2v--H6SPCQb4pmZ6HsTZYT5k" ,
);
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
To save data in bulk, pass a map of key-value pairs to
Properties.setProperties(properties) .
Each key-value pair of the object in the parameter is stored as a separate
property:
service/propertyService.gs
View on GitHub
try {
// Set multiple script properties in one call.
const scriptProperties = PropertiesService . getScriptProperties ();
scriptProperties . setProperties ({
cow : "moo" ,
sheep : "baa" ,
chicken : "cluck" ,
});
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
Read data
To retrieve a single value that you have previously saved, call
Properties.getProperty :
service/propertyService.gs
View on GitHub
try {
// Get the value for the user property 'DISPLAY_UNITS'.
const userProperties = PropertiesService . getUserProperties ();
const units = userProperties . getProperty ( "DISPLAY_UNITS" );
console . log ( "values of units %s" , units );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
To retrieve all values in the current property store, call
Properties.getProperties :
service/propertyService.gs
View on GitHub
try {
// Get multiple script properties in one call, then log them all.
const scriptProperties = PropertiesService . getScriptProperties ();
const data = scriptProperties . getProperties ();
for ( const key in data ) {
console . log ( "Key: %s, Value: %s" , key , data [ key ]);
}
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
Modify data
The methods getProperty and getProperties return a copy of the stored
data, not a live view, so changing the returned object doesn't update the value
in the property store. To update the data in the store, save it again:
service/propertyService.gs
View on GitHub
try {
// Change the unit type in the user property 'DISPLAY_UNITS'.
const userProperties = PropertiesService . getUserProperties ();
let units = userProperties . getProperty ( "DISPLAY_UNITS" );
units = "imperial" ; // Only changes local value, not stored value.
userProperties . setProperty ( "DISPLAY_UNITS" , units ); // Updates stored value.
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
Delete data
To delete a single value, call
Properties.deleteProperty :
service/propertyService.gs
View on GitHub
try {
// Delete the user property 'DISPLAY_UNITS'.
const userProperties = PropertiesService . getUserProperties ();
userProperties . deleteProperty ( "DISPLAY_UNITS" );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
To delete all properties in the current store, call
Properties.deleteAllProperties :
service/propertyService.gs
View on GitHub
try {
// Get user properties in the current script.
const userProperties = PropertiesService . getUserProperties ();
// Delete all user properties in the current script.
userProperties . deleteAllProperties ();
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
Manage script properties manually
Manually add up to fifty custom properties, as strings in key-value pairs, from
the project settings page. To add more than fifty properties, add them
programmatically using the methods described in the preceding section in
Save data . When you set script properties from the project
settings page, don't reference script variables.
Add script properties
Open your Google Apps Script project.
At the left, click Project Settings
.
To add the first property, under Script Properties click
Add script property .
To add second and subsequent properties, under Script Properties click
Edit script properties >
Add script property .
For Property , enter the key name.
For Value , enter the value for the key.
(Optional) To add more properties, click Add script property .
Click Save script properties .
Edit script properties
Open your Apps Script project.
At the left, click Project Settings
.
Under Script Properties , click Edit script properties .
Make changes to the key name and key value for each property you want to
change.
Click Save script properties .
Delete script properties
Open your Apps Script project.
At the left, click Project Settings
.
Under Script Properties , click Edit script properties .
Next to the property that you want to delete, click Remove
close .
Click Save script properties .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
