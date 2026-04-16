---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.976Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "IMPORTANT label"
feature_slug: "important-label"
latest_feature_date: "2014-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/labels"
  - "https://developers.google.com/workspace/gmail/api/guides/filter_settings"
  - "https://developers.google.com/workspace/gmail/api/guides"
keywords:
  - "important"
  - "system"
  - "match"
  - "adds"
  - "label"
---

# IMPORTANT label

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

Gmail API adds an IMPORTANT system label to match the Gmail UI.

## Extended Definition

Gmail API adds an IMPORTANT system label to match the Gmail UI.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels)
- [https://developers.google.com/workspace/gmail/api/guides/filter_settings](https://developers.google.com/workspace/gmail/api/guides/filter_settings)
- [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)

## Supporting Pages

### Manage labels \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table lists several of the most common Gmail system labels: Name Can be manually applied Notes INBOX yes SPAM yes TRASH yes UNREAD yes STARRED yes IMPORTANT yes SENT no Applied automatically to messages that are: sent with drafts.send or messages.send . inserted with messages.insert and the user's email in the From header. sent by the user through the web interface.
- System label names are reserved; no USER label can be created with the same name as any SYSTEM label.
- System labels typically correspond to predefined elements in the Gmail web interface such as INBOX .
- Types of labels Labels come in two varieties: reserved SYSTEM labels and custom USER labels.

### Manage Gmail filters \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/filter_settings](https://developers.google.com/workspace/gmail/api/guides/filter_settings)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Filter the mail from sender and archive them(skip the inbox) Filter filter = new Filter () . setCriteria ( new FilterCriteria () . setFrom ( "gduser2@workspacesamples.dev" )) . setAction ( new FilterAction () . setAddLabelIds ( Arrays . asList ( labelId )) . setRemoveLabelIds ( Arrays . asList ( "INBOX" ))); Filter result = service . users (). settings (). filters (). create ( "me" , filter ). execute (); // Prints the new created filter ID System . out . println ( "Created filter " + result . getId ()); return result . getId (); } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to create filter: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/create filter.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def create filter (): """Create a filter.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) label name = "IMPORTANT" filter content = { "criteria" : { "from" : "gsuder1@workspacesamples.dev" }, "action" : { "addLabelIds" : [ label name ], "removeLabelIds" : [ "INBOX" ], }, } pylint: disable=E1101 result = ( service . users () . settings () . filters () . create ( userId = "me" , body = filter content ) . execute () ) print ( f 'Created filter with id: { result . get ( "id" ) } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result . get ( "id" ) if name == " main " : create filter () Related topics Search and filter messages Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, common filter patterns include: Filter Matches criteria.from='sender@example.com' Emails from sender@example.com criteria.size=10485760 criteria.sizeComparison='larger' Emails larger than 10 MB criteria.hasAttachment=true Emails with an attachment criteria.subject='[People with Pets]' Emails with [People with Pets] in the subject criteria.query='"my important project"' Emails containing my important project criteria.negatedQuery='"secret knock"' Emails not containing secret knock If multiple criteria are present in a filter, a message must satisfy all criteria for the filter to apply.
- For example, some common actions include: Action Effect action.removeLabelIds=['INBOX'] Archive the email (skip the inbox) action.removeLabelIds=['UNREAD'] Mark as read action.removeLabelIds=['SPAM'] Never mark as spam action.removeLabelIds=['IMPORTANT'] Never mark as important action.addLabelIds=['IMPORTANT'] Mark as important action.addLabelIds=['TRASH'] Delete the email action.addLabelIds=['STARRED'] Mark as starred action.addLabelIds=['<user label id>'] Tag the mail with a user-defined label.

### Gmail API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When a message matches, filters automatically trigger actions such as adding or removing labels, or forwarding the email to a specified address.
- There are two types of labels: System labels Internally-created labels, such as INBOX , TRASH , or SPAM .
- However, some system labels, such as INBOX can be applied to, or removed from, messages and threads.
- Sending a draft automatically deletes the draft and creates a message with the SENT system label.

