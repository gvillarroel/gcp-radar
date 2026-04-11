---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.255Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "IMPORTANT label"
feature_slug: "important-label"
latest_feature_date: "2014-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/labels"
  - "https://developers.google.com/workspace/gmail/api/guides/filter_settings"
  - "https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings"
  - "https://developers.google.com/workspace/gmail/api/guides"
keywords:
  - "important"
  - "label"
  - "gmail"
  - "api"
  - "adds"
  - "an"
  - "system"
  - "to"
---

# IMPORTANT label

Product: Gmail API
Coverage: LOW

## Step 02 Summary

Gmail API adds an IMPORTANT system label to match the Gmail UI.

## Extended Definition

Gmail API adds an IMPORTANT system label to match the Gmail UI.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels)
- [https://developers.google.com/workspace/gmail/api/guides/filter_settings](https://developers.google.com/workspace/gmail/api/guides/filter_settings)
- [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)

## Supporting Pages

### Manage labels \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table lists several of the most common Gmail system labels: Name Can be manually applied Notes INBOX yes SPAM yes TRASH yes UNREAD yes STARRED yes IMPORTANT yes SENT no Applied automatically to messages that are: sent with drafts.send or messages.send . inserted with messages.insert and the user's email in the From header. sent by the user through the web interface.
- To manage labels, you must use the https://www.googleapis.com/auth/gmail.labels non-sensitive scope.
- This document explains how to manage labels on threads and messages using the Gmail API.
- System labels typically correspond to predefined elements in the Gmail web interface such as INBOX .

### Manage Gmail filters \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/filter_settings](https://developers.google.com/workspace/gmail/api/guides/filter_settings)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { // Filter the mail from sender and archive them(skip the inbox) Filter filter = new Filter () . setCriteria ( new FilterCriteria () . setFrom ( "gduser2@workspacesamples.dev" )) . setAction ( new FilterAction () . setAddLabelIds ( Arrays . asList ( labelId )) . setRemoveLabelIds ( Arrays . asList ( "INBOX" ))); Filter result = service . users (). settings (). filters (). create ( "me" , filter ). execute (); // Prints the new created filter ID System . out . println ( "Created filter " + result . getId ()); return result . getId (); } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to create filter: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/create filter.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def create filter (): """Create a filter.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) label name = "IMPORTANT" filter content = { "criteria" : { "from" : "gsuder1@workspacesamples.dev" }, "action" : { "addLabelIds" : [ label name ], "removeLabelIds" : [ "INBOX" ], }, } pylint: disable=E1101 result = ( service . users () . settings () . filters () . create ( userId = "me" , body = filter content ) . execute () ) print ( f 'Created filter with id: { result . get ( "id" ) } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result . get ( "id" ) if name == " main " : create filter () Related topics Search and filter messages Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Code samples The following code samples show how to label and archive messages from a mailing list: Java gmail/snippets/src/main/java/CreateFilter.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.Filter ; import com.google.api.services.gmail.model.FilterAction ; import com.google.api.services.gmail.model.FilterCriteria ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; import java.util.Arrays ; / Class to demonstrate the use of Gmail Create Filter API / public class CreateFilter { / Create a new filter. @param labelId - ID of the user label to add @return the created filter id, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static String createNewFilter ( String labelId ) throws IOException { / Load pre-authorized user credentials from the environment.
- For example, common filter patterns include: Filter Matches criteria.from='sender@example.com' Emails from sender@example.com criteria.size=10485760 criteria.sizeComparison='larger' Emails larger than 10 MB criteria.hasAttachment=true Emails with an attachment criteria.subject='[People with Pets]' Emails with [People with Pets] in the subject criteria.query='"my important project"' Emails containing my important project criteria.negatedQuery='"secret knock"' Emails not containing secret knock If multiple criteria are present in a filter, a message must satisfy all criteria for the filter to apply.

### Manage aliases and signatures with the Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Gmail samples" ) . build (); try { SendAs primaryAlias = null ; ListSendAsResponse aliases = service . users (). settings (). sendAs (). list ( "me" ). execute (); for ( SendAs alias : aliases . getSendAs ()) { if ( alias . getIsPrimary ()) { primaryAlias = alias ; break ; } } // Updating a new signature SendAs aliasSettings = new SendAs (). setSignature ( "Automated Signature" ); SendAs result = service . users (). settings (). sendAs (). patch ( "me" , primaryAlias . getSendAsEmail (), aliasSettings ) . execute (); //Prints the updated signature System . out . println ( "Updated signature - " + result . getSignature ()); return result . getSignature (); } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately GoogleJsonError error = e . getDetails (); if ( error . getCode () == 403 ) { System . err . println ( "Unable to update signature: " + e . getDetails ()); } else { throw e ; } } return null ; } } Python gmail/snippet/settings snippets/update signature.py View on GitHub import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError def update signature (): """Create and update signature in gmail.
- TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , = google . auth . default () try : create gmail api client service = build ( "gmail" , "v1" , credentials = creds ) primary alias = None pylint: disable=E1101 aliases = service . users () . settings () . sendAs () . list ( userId = "me" ) . execute () for alias in aliases . get ( "sendAs" ): if alias . get ( "isPrimary" ): primary alias = alias break send as configuration = { "displayName" : primary alias . get ( "sendAsEmail" ), "signature" : "Automated Signature" , } pylint: disable=E1101 result = ( service . users () . settings () . sendAs () . patch ( userId = "me" , sendAsEmail = primary alias . get ( "sendAsEmail" ), body = send as configuration , ) . execute () ) print ( f 'Updated signature for: { result . get ( "displayName" ) } ' ) except HttpError as error : print ( f "An error occurred: { error } " ) result = None return result . get ( "signature" ) if name == " main " : update signature () Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following code samples show how to set the signature for the user's primary address: Java gmail/snippets/src/main/java/UpdateSignature.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.ListSendAsResponse ; import com.google.api.services.gmail.model.SendAs ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Update Signature API / public class UpdateSignature { / Update the gmail signature. @return the updated signature id , {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static String updateGmailSignature () throws IOException { / Load pre-authorized user credentials from the environment.
- This document explains how to configure send-as aliases and email signatures in Gmail API.

### Gmail API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as: Read-only mail extraction, indexing, and backup Automated or programmatic message sending Email account migration Email organization including filtering and sorting of messages Standardization of email signatures across an organization Common terms The following is a list of common terms used in this API: Delegator and Delegate A delegator is a Gmail user who grants mailbox access to another user within the same Google Workspace organization.
- Applications can "watch" a mailbox, and the Gmail API will send automatic webhooks or alerts whenever a change occurs (like a new email arriving), eliminating the need for the app to continuously poll the server for updates.
- However, some system labels, such as INBOX can be applied to, or removed from, messages and threads.
- Sending a draft automatically deletes the draft and creates a message with the SENT system label.

