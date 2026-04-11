---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.816Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocsList.getFilesByType string argument deprecation"
feature_slug: "docslist-getfilesbytype-string-argument-deprecation"
latest_feature_date: "2012-09-21"
deprecation_date: "2012-09-21"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
keywords:
  - "passing"
  - "getfilesbytype"
  - "deprecation"
  - "argument"
  - "string"
  - "docslist"
  - "values"
  - "to"
---

# DocsList.getFilesByType string argument deprecation

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Passing string values to DocsList.getFilesByType is deprecated in favor of using DocsList.FileType enumeration values; deprecated on 2012-09-21.

## Extended Definition

Passing string values to DocsList.getFilesByType is deprecated in favor of using DocsList.FileType enumeration values; deprecated on 2012-09-21.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated Updated DocsList.getFilesByType() to accept values from the DocsList.FileType enumeration.
- Passing in string values for the document type is deprecated but still functional. (Issue 1755) Change Enabled SSL certificate validation for UrlFetchApp requests.
- Added a new log method to the Logger service which accepts a format string and a variable number of values to insert.
- Issue 2041 : The native Date methods toLocaleDateString() and toLocaleTimeString() now return the correct values.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Arguments Like a built-in function, a custom function can take arguments as input values: If you call your function with a reference to a single cell as an argument (like =DOUBLE(A1) ), the argument is the value of the cell.
- If you call your function with a reference to a range of cells as an argument (like =DOUBLE(A1:B10) ), the argument is a two-dimensional array of the cells' values.
- Custom functions can take arguments, return values, and work with various data types supported by JavaScript.
- Return values Every custom function must return a value to display, such that: If a custom function returns a value, the value displays in the cell the function was called from.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Users . list ({ domain : "example.com" , orderBy : "givenName" , maxResults : 100 , pageToken : pageToken , }); const users = page . users ; if ( ! users ) { console . log ( "No users found." ); return ; } // Print the user's full name and email. for ( const user of users ) { console . log ( "%s (%s)" , user . name . fullName , user . primaryEmail ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Get user This sample gets a user by their email address and logs all of their data as a JSON string. advanced/adminSDK.gs View on GitHub / Get a user by their email address and logs all of their data as a JSON string. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get / function getUser () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; try { const user = AdminDirectory .
- For the full list of user fields, see the API's reference documentation: @see https://developers.google.com/admin-sdk/directory/v1/reference/users/insert / function addUser () { let user = { // TODO (developer) - Replace primaryEmail value with yours primaryEmail : "liz@example.com" , name : { givenName : "Elizabeth" , familyName : "Smith" , }, // Generate a random password string. password : Math . random (). toString ( 36 ), }; try { user = AdminDirectory .
- Users . get ( userEmail ); console . log ( "User data:\n %s" , JSON . stringify ( user , null , 2 )); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Add user This sample adds a new user to the domain, including only the required information.
- Groups . list ({ domain : "example.com" , maxResults : 100 , pageToken : pageToken , }); const groups = page . groups ; if ( ! groups ) { console . log ( "No groups found." ); return ; } // Print group name and email. for ( const group of groups ) { console . log ( "%s (%s)" , group . name , group . email ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Add group member This sample adds a user to an existing group in the domain. advanced/adminSDK.gs View on GitHub / Adds a user to an existing group in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert / function addGroupMember () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; // TODO (developer) - Replace groupEmail value with yours const groupEmail = "bookclub@example.com" ; const member = { email : userEmail , role : "MEMBER" , }; try { AdminDirectory .

