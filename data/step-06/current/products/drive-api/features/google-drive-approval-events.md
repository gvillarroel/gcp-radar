---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.793Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "Google Drive approval events"
feature_slug: "google-drive-approval-events"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/events-overview"
  - "https://developers.google.com/workspace/drive/api/guides/approvals"
  - "https://developers.google.com/workspace/drive/api/guides/about-changes"
  - "https://developers.google.com/workspace/drive/api/guides/about-shareddrives"
keywords:
  - "drive"
  - "approval"
  - "events"
  - "can"
  - "now"
  - "report"
  - "lifecycle"
  - "and"
---

# Google Drive approval events

Product: Drive API
Coverage: MEDIUM

## Step 02 Summary

Google Drive events can now report approval lifecycle and reviewer changes on a file.

## Extended Definition

Google Drive events can now report approval lifecycle and reviewer changes on a file.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview)
- [https://developers.google.com/workspace/drive/api/guides/approvals](https://developers.google.com/workspace/drive/api/guides/approvals)
- [https://developers.google.com/workspace/drive/api/guides/about-changes](https://developers.google.com/workspace/drive/api/guides/about-changes)
- [https://developers.google.com/workspace/drive/api/guides/about-shareddrives](https://developers.google.com/workspace/drive/api/guides/about-shareddrives)

## Supporting Pages

### Work with events from Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Google Workspace Events API Google Drive API Google Drive Activity API Source of events Files, folders, and shared drives changes.watch and files.watch DriveActivity Supported events AccessProposal Approval Comment File Permission Reply For a list of supported event types, see Event types for creating subscriptions in the Google Workspace Events API documentation.
- Here are some examples of how you can use events: Observe and respond to changes in a file, folder, or shared drive, such as when a file is edited or a new revision is uploaded.
- Test your Drive subscription To test that you're receiving Drive events, you can trigger an event and pull messages to the Pub/Sub subscription.
- This function processes different types of Drive events. @param {object} cloudEvent The CloudEvent object. @param {object} cloudEvent.data The data payload from the event source. / functions . cloudEvent ( 'helloFromDrive' , async ( cloudEvent ) = > { try { // Verify the Pub/Sub message exists if ( ! cloudEvent . data ! cloudEvent . data . message ) { console . warn ( "Event is missing the Pub/Sub message payload." ); return ; } // Extract the Pub/Sub message details const { message } = cloudEvent . data ; const { attributes , data } = message ; // The original Drive CloudEvent is reconstructed from the Pub/Sub message attributes const driveEvent = HTTP . toEvent ({ headers : attributes }); const { type } = driveEvent ; // The Drive event's payload is a base64 encoded JSON string const payload = JSON . parse ( Buffer . from ( data , "base64" ). toString ()); console . log ( Processing Drive event type: ${ type } ); // Use a switch statement to handle different event types switch ( type ) { case 'google.workspace.drive.file.v3.contentChanged' : console . log ( 'File Content Changed:' , payload ); break ; case 'google.workspace.drive.accessproposal.v3.created' : console . log ( 'Access Proposal Created:' , payload ); break ; default : console . log ( Received unhandled event type: ${ type } ); break ; } } catch ( error ) { console . error ( "An error occurred while processing the Drive event:" , error ); } }); Limitations When the includeDescendants boolean field in DriveOptions is true , Drive subscriptions on shared drives and folders always dispatch an event, even if the file that triggered the event is nested many layers below the folder used for the Drive subscription.

### Manage approvals \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/approvals](https://developers.google.com/workspace/drive/api/guides/approvals)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Google Drive API provides the approvals resource so you can get and list the status of your approvals.
- Related topics Manage Approvals Get approvals on files in Google Drive Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Google Workspace Google Drive Guides Send feedback Manage approvals Stay organized with collections Save and categorize content based on your preferences.
- The methods of the approvals resource work on items within Drive, Google Docs, and other Google Workspace editors.

### "Track changes for users and shared drives \_|\_ Google Drive \_|\_ Google\

- URL: [https://developers.google.com/workspace/drive/api/guides/about-changes](https://developers.google.com/workspace/drive/api/guides/about-changes)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Changes that appear on a shared drive change log If a user is a member of a shared drive, they can access that shared drive's change log which contains: Any changes to the shared drive itself, such as addition or removal of a member Direct changes to the items contained in the shared drive.
- Home Google Workspace Google Drive Guides Send feedback Track changes for users and shared drives Stay organized with collections Save and categorize content based on your preferences.
- To track changes for all items visible to a user, both the user change log and the change logs for all shared drives the user is a member of need to be replayed.
- Even though a user may be a member of a shared drive, certain changes are only reflected in the shared drive change log and never in the user’s change log.

### Shared drives overview \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/about-shareddrives](https://developers.google.com/workspace/drive/api/guides/about-shareddrives)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are the rules for organizerCount and memberCount fields: Only administrators can manage a shared drive with an organizerCount of zero.
- An individual user can be a member of a shared drive and have file access permissions for files contained within the shared drive.
- Related topics Manage folders with limited and expansive access Create a shortcut to a Drive file How file access works in shared drives Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Compare member and file access There are two classes of permissions in shared drives: Member permissions are for users who have been granted access to the shared drive, either directly or through a group.

