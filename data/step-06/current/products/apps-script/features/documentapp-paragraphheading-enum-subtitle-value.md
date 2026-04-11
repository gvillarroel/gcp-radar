---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.782Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocumentApp ParagraphHeading enum SUBTITLE value"
feature_slug: "documentapp-paragraphheading-enum-subtitle-value"
latest_feature_date: "2013-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/NullValue"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
keywords:
  - "subtitle"
  - "paragraphheading"
  - "constant"
  - "documentapp"
  - "value"
  - "enum"
  - "added"
  - "to"
---

# DocumentApp ParagraphHeading enum SUBTITLE value

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added a SUBTITLE constant to DocumentApp.ParagraphHeading.

## Extended Definition

Added a SUBTITLE constant to DocumentApp.ParagraphHeading.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/NullValue](https://developers.google.com/apps-script/api/reference/rest/v1/NullValue)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added TITLE and SUBTITLE values to the DocumentApp.ParagraphHeading enum .
- Feature Added a DocumentApp.HorizontalAlignment.JUSTIFY value to the DocumentApp.HorizontalAlignment enumeration.
- July 17, 2014 Feature Added the value ON CHANGE to the ScriptApp.EventType enum so that Google Sheets change events can be detected correctly.
- The following has been added to the Drive service : There's a new FILE ORGANIZER value in the Permission enum .

### NullValue \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/NullValue](https://developers.google.com/apps-script/api/reference/rest/v1/NullValue)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NullValue is a singleton enumeration to represent the null value for the Value type union.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- Home Google Workspace Apps Script Reference Send feedback NullValue Stay organized with collections Save and categorize content based on your preferences.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Groups . list ({ domain : "example.com" , maxResults : 100 , pageToken : pageToken , }); const groups = page . groups ; if ( ! groups ) { console . log ( "No groups found." ); return ; } // Print group name and email. for ( const group of groups ) { console . log ( "%s (%s)" , group . name , group . email ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Add group member This sample adds a user to an existing group in the domain. advanced/adminSDK.gs View on GitHub / Adds a user to an existing group in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert / function addGroupMember () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; // TODO (developer) - Replace groupEmail value with yours const groupEmail = "bookclub@example.com" ; const member = { email : userEmail , role : "MEMBER" , }; try { AdminDirectory .
- Users . list ({ domain : "example.com" , orderBy : "givenName" , maxResults : 100 , pageToken : pageToken , }); const users = page . users ; if ( ! users ) { console . log ( "No users found." ); return ; } // Print the user's full name and email. for ( const user of users ) { console . log ( "%s (%s)" , user . name . fullName , user . primaryEmail ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Get user This sample gets a user by their email address and logs all of their data as a JSON string. advanced/adminSDK.gs View on GitHub / Get a user by their email address and logs all of their data as a JSON string. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get / function getUser () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; try { const user = AdminDirectory .
- Users . insert ( user ); console . log ( "User %s created with ID %s." , user . primaryEmail , user . id ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Create alias This sample creates an alias (nickname) for a user. advanced/adminSDK.gs View on GitHub / Creates an alias (nickname) for a user. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users.aliases/insert / function createAlias () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; let alias = { alias : "chica@example.com" , }; try { alias = AdminDirectory .
- For the full list of user fields, see the API's reference documentation: @see https://developers.google.com/admin-sdk/directory/v1/reference/users/insert / function addUser () { let user = { // TODO (developer) - Replace primaryEmail value with yours primaryEmail : "liz@example.com" , name : { givenName : "Elizabeth" , familyName : "Smith" , }, // Generate a random password string. password : Math . random (). toString ( 36 ), }; try { user = AdminDirectory .

