---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.975Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "messages.import labelIds parameter"
feature_slug: "messages-import-labelids-parameter"
latest_feature_date: "2015-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get"
  - "https://developers.google.com/workspace/gmail/api/guides/list-messages"
keywords:
  - "automatically"
  - "labelids"
  - "apply"
  - "parameter"
  - "import"
  - "messages"
  - "method"
---

# messages.import labelIds parameter

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The messages.import method can automatically apply labels from message.labelIds.

## Extended Definition

The messages.import method can automatically apply labels from message.labelIds.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)

## Supporting Pages

### Method: users.messages.import \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)
- Source ID: `site-docs-reference-required-2`
- Final score: 197
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.import Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Upload URI, for media upload requests: POST https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages/import Metadata URI, for metadata-only requests: POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/import The URL uses gRPC Transcoding syntax.
- This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing.
- Query parameters Parameters internalDateSource enum ( InternalDateSource ) Source for Gmail's internal date of the message. neverMarkSpam boolean Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox. processForCalendar boolean Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user. deleted boolean Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator.

### Method: users.messages.get \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- Source ID: `site-docs-reference-required-2`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.get Stay organized with collections Save and categorize content based on your preferences.
- The ID is also contained in the result when a message is inserted ( messages.insert ) or imported ( messages.import ).
- Query parameters Parameters format enum ( Format ) The format to return the message in. metadataHeaders[] string When given and format is METADATA , only include headers specified.
- HTTP request GET https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{id} The URL uses gRPC Transcoding syntax.

### List Gmail messages \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Lists the user's Gmail messages. """ creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( "token.json" ): creds = Credentials . from authorized user file ( "token.json" , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( "credentials.json" , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( "token.json" , "w" ) as token : token . write ( creds . to json ()) try : Call the Gmail API service = build ( "gmail" , "v1" , credentials = creds ) results = ( service . users () . messages () . list ( userId = "me" , labelIds = [ "INBOX" ]) . execute () ) messages = results . get ( "messages" , []) if not messages : print ( "No messages found." ) return print ( "Messages:" ) for message in messages : print ( f 'Message ID: { message [ "id" ] } ' ) msg = ( service . users () . messages () . get ( userId = "me" , id = message [ "id" ]) . execute () ) print ( f ' Subject: { msg [ "snippet" ] } ' ) except HttpError as error : TODO(developer) - Handle errors from gmail API. print ( f "An error occurred: { error } " ) if name == " main " : main () The messages.list method returns a response body that contains the following: messages[] : An array of Message resources. nextPageToken : For requests with multiple pages of results, a token that can be used with subsequent calls to list more messages. resultSizeEstimate : An estimated total number of results.
- List messages The messages.list method supports several query parameters to filter the messages: maxResults : Maximum number of messages to return (defaults to 100, maximum 500). pageToken : Token to retrieve a specific page of results. q : Query string to filter messages, such as from:someuser@example.com is:unread . labelIds : Only return messages with labels that match all specified label IDs. includeSpamTrash : Include messages from SPAM and TRASH in the results.
- The code handles pagination to retrieve all messages matching the query. gmail/snippet/list messages.py View on GitHub import os.path from google.auth.transport.requests import Request from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow from googleapiclient.discovery import build from googleapiclient.errors import HttpError If modifying these scopes, delete the file token.json.
- To fetch the full message content and metadata, use the message.id field to call the messages.get method.

