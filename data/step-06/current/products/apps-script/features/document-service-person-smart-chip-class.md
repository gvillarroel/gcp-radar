---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.661Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Document Service Person smart chip class"
feature_slug: "document-service-person-smart-chip-class"
latest_feature_date: "2021-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
  - "https://developers.google.com/apps-script/guides/triggers/events"
keywords:
  - "person"
  - "representing"
  - "chip"
  - "smart"
  - "document"
  - "class"
  - "adds"
  - "for"
---

# Document Service Person smart chip class

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Adds a Person smart chip class for representing a linked person chip in Google Docs.

## Extended Definition

Adds a Person smart chip class for representing a linked person chip in Google Docs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- August 23, 2021 Feature The Document Service has added support for smart chips by adding three new classes: Date - An element representing a formatted date.
- For more information, refer to the following documentation: Enum EventTransparency Class CalendarEvent Class CalendarEventSeries November 27, 2024 Feature The Calendar service now has a getEventType() method that lets developers differentiate regular events from other types of events like out-of-office and working location events.
- To learn more, refer to the following: Google Workspace Updates blog : View & compare script versions with Apps Script project history Developer documentation : Versions June 12, 2023 Feature Third-party smart chips and link previews are now generally available.
- This class lets you control various aspects of link previews, including the smart chip title, the link preview title, and the link preview card.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- For the full list of user fields, see the API's reference documentation . advanced/adminSDK.gs View on GitHub / Adds a new user to the domain, including only the required information.
- Groups . list ({ domain : "example.com" , maxResults : 100 , pageToken : pageToken , }); const groups = page . groups ; if ( ! groups ) { console . log ( "No groups found." ); return ; } // Print group name and email. for ( const group of groups ) { console . log ( "%s (%s)" , group . name , group . email ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Add group member This sample adds a user to an existing group in the domain. advanced/adminSDK.gs View on GitHub / Adds a user to an existing group in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert / function addGroupMember () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; // TODO (developer) - Replace groupEmail value with yours const groupEmail = "bookclub@example.com" ; const member = { email : userEmail , role : "MEMBER" , }; try { AdminDirectory .
- For the full list of user fields, see the API's reference documentation: @see https://developers.google.com/admin-sdk/directory/v1/reference/users/insert / function addUser () { let user = { // TODO (developer) - Replace primaryEmail value with yours primaryEmail : "liz@example.com" , name : { givenName : "Elizabeth" , familyName : "Smith" , }, // Generate a random password string. password : Math . random (). toString ( 36 ), }; try { user = AdminDirectory .
- Users . get ( userEmail ); console . log ( "User data:\n %s" , JSON . stringify ( user , null , 2 )); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Add user This sample adds a new user to the domain, including only the required information.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- 4034124084959907503 user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com This event does not occur when a user opens a form to respond, but rather when an editor opens the form to modify it.
- Presentation user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Google Forms events The Forms-specific triggers let scripts respond when a user edits a form or submits a response.
- FULL namedValues An object containing the question names and values from the form submission. { 'First Name': ['Jane'], 'Timestamp': ['6/7/2015 20:54:13'], 'Last Name': ['Doe'] } range A Range object, representing the cell or range of cells that were edited.
- FULL response A FormResponse object, representing the user's response to the form as a whole.

