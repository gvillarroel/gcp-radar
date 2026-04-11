---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.244Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Mailbox push notifications"
feature_slug: "mailbox-push-notifications"
latest_feature_date: "2015-05-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/push"
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/forwarding_settings"
keywords:
  - "mailbox"
  - "push"
  - "notifications"
  - "updates"
  - "can"
  - "be"
  - "delivered"
  - "in"
---

# Mailbox push notifications

Product: Gmail API
Coverage: LOW

## Step 02 Summary

Mailbox updates can be delivered in real time through Cloud Pub/Sub notifications filtered by Gmail labels.

## Extended Definition

Mailbox updates can be delivered in real time through Cloud Pub/Sub notifications filtered by Gmail labels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)

## Supporting Pages

### Configure push notifications in Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The message.data field is a Base64URL-encoded string that decodes to a JSON object containing the email address and the new mailbox history ID for the user: { "emailAddress" : "user@example.com" , "historyId" : "9876543210" } You can then use the history.list method to get the change details for the user since their last known historyId , as described in the Synchronize clients with Gmail API .
- Limitations The following are the limitations of working with server push notifications: Maximum notification rate Each Gmail user being watched has a maximum notification rate of one event per second.
- Reliability Typically, all notifications are delivered reliably within a few seconds; however, in some extreme situations, notifications might be delayed or dropped.
- Get Gmail mailbox updates After the initial Cloud Pub/Sub setup is finished, configure Gmail accounts to send notifications for mailbox updates.

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://gmail.googleapis.com REST Resource: v1.users Methods getProfile GET /gmail/v1/users/{userId}/profile Gets the current user's Gmail profile. stop POST /gmail/v1/users/{userId}/stop Stop receiving push notifications for the given user mailbox. watch POST /gmail/v1/users/{userId}/watch Set up or update a push notification watch on the given user mailbox.
- REST Resource: v1.users.messages Methods batchDelete POST /gmail/v1/users/{userId}/messages/batchDelete Deletes many messages by message ID. batchModify POST /gmail/v1/users/{userId}/messages/batchModify Modifies the labels on the specified messages. delete DELETE /gmail/v1/users/{userId}/messages/{id} Immediately and permanently deletes the specified message. get GET /gmail/v1/users/{userId}/messages/{id} Gets the specified message. import POST /gmail/v1/users/{userId}/messages/import POST /upload/gmail/v1/users/{userId}/messages/import Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. insert POST /gmail/v1/users/{userId}/messages POST /upload/gmail/v1/users/{userId}/messages Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification. list GET /gmail/v1/users/{userId}/messages Lists the messages in the user's mailbox. modify POST /gmail/v1/users/{userId}/messages/{id}/modify Modifies the labels on the specified message. send POST /gmail/v1/users/{userId}/messages/send POST /upload/gmail/v1/users/{userId}/messages/send Sends the specified message to the recipients in the To , Cc , and Bcc headers. trash POST /gmail/v1/users/{userId}/messages/{id}/trash Moves the specified message to the trash. untrash POST /gmail/v1/users/{userId}/messages/{id}/untrash Removes the specified message from the trash.
- REST Resource: v1.users.labels Methods create POST /gmail/v1/users/{userId}/labels Creates a new label. delete DELETE /gmail/v1/users/{userId}/labels/{id} Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to. get GET /gmail/v1/users/{userId}/labels/{id} Gets the specified label. list GET /gmail/v1/users/{userId}/labels Lists all labels in the user's mailbox. patch PATCH /gmail/v1/users/{userId}/labels/{id} Patch the specified label. update PUT /gmail/v1/users/{userId}/labels/{id} Updates the specified label.
- REST Resource: v1.users.drafts Methods create POST /gmail/v1/users/{userId}/drafts POST /upload/gmail/v1/users/{userId}/drafts Creates a new draft with the DRAFT label. delete DELETE /gmail/v1/users/{userId}/drafts/{id} Immediately and permanently deletes the specified draft. get GET /gmail/v1/users/{userId}/drafts/{id} Gets the specified draft. list GET /gmail/v1/users/{userId}/drafts Lists the drafts in the user's mailbox. send POST /gmail/v1/users/{userId}/drafts/send POST /upload/gmail/v1/users/{userId}/drafts/send Sends the specified, existing draft to the recipients in the To , Cc , and Bcc headers. update PUT /gmail/v1/users/{userId}/drafts/{id} PUT /upload/gmail/v1/users/{userId}/drafts/{id} Replaces a draft's content.

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Example of creating a label: Email Settings API POST https://apps-apis.google.com/a/feeds/emailsettings/2.0/{domain name}/{username}/label <?xml version="1.0" encoding="utf-8"?> <atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:apps="http://schemas.google.com/apps/2006"> <apps:property name="label" value="status updates" /> </atom:entry> Gmail API POST https://www.googleapis.com/gmail/v1/users/{username}/labels { "name": "status updates" } Use the provided client libraries instead of directly implementing the protocol.
- If either of the delegator or delegate users are disabled (for example, suspended in Google Workspace) this method fails with an HTTP 4XX error instead of an HTTP 500 error. settings.delegates.delete This method can now be used to delete delegates with any VerificationStatus , rather than just delegates which are accepted or expired . settings.delegates.get This is a new method, which might be preferable over the settings.delegates.list method depending on need.
- A delegate user must be referred to by their primary email address. settings.delegates.create This method can now be used to create delegate relationships across multiple domains belonging to the same Google Workspace organization.
- This method can now be used for users which require a password change at their next sign in.

### Manage email forwarding \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/forwarding_settings](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- The following code samples show how to enable auto-forwarding and then move forwarded messages to the trash: Java gmail/snippets/src/main/java/EnableForwarding.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonError ; import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.gmail.Gmail ; import com.google.api.services.gmail.GmailScopes ; import com.google.api.services.gmail.model.AutoForwarding ; import com.google.api.services.gmail.model.ForwardingAddress ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.IOException ; / Class to demonstrate the use of Gmail Enable Forwarding API / public class EnableForwarding { / Enable the auto-forwarding for an account. @param forwardingEmail - Email address of the recipient whose email will be forwarded. @return forwarding id and metadata, {@code null} otherwise. @throws IOException - if service account credentials file not found. / public static AutoForwarding enableAutoForwarding ( String forwardingEmail ) throws IOException { / Load pre-authorized user credentials from the environment.
- For an email address to be used as a forwarding email address, it must fulfill one of the following criteria: The email address is verified.
- Enable automatic forwarding You can choose to forward all of your new messages to another email address.
- The email address belongs to a domain alias configured as part of the same Google Workspace account.

