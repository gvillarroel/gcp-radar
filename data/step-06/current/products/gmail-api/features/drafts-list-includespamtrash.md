---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.971Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "drafts.list includeSpamTrash"
feature_slug: "drafts-list-includespamtrash"
latest_feature_date: "2016-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list"
  - "https://developers.google.com/workspace/gmail/api/reference/quota"
  - "https://developers.google.com/workspace/gmail/api/guides/list-messages"
keywords:
  - "includespamtrash"
  - "include"
  - "drafts"
  - "trash"
  - "spam"
  - "list"
  - "method"
---

# drafts.list includeSpamTrash

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The drafts.list method can include drafts with the SPAM or TRASH label when includeSpamTrash is enabled.

## Extended Definition

The drafts.list method can include drafts with the SPAM or TRASH label when includeSpamTrash is enabled.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list)
- [https://developers.google.com/workspace/gmail/api/reference/quota](https://developers.google.com/workspace/gmail/api/reference/quota)
- [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)

## Supporting Pages

### Method: users.drafts.list \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, "from:someuser@example.com rfc822msgid:<somemsgid@example.com> is:unread" . includeSpamTrash boolean Include drafts from SPAM and TRASH in the results.
- Home Google Workspace Gmail Reference Send feedback Method: users.drafts.list Stay organized with collections Save and categorize content based on your preferences.
- Response body If successful, the response body contains data with the following structure: JSON representation { "drafts" : [ { object ( Draft ) } ] , "nextPageToken" : string , "resultSizeEstimate" : integer } Fields drafts[] object ( Draft ) List of drafts.
- The messages.get method can fetch additional message details. nextPageToken string Token to retrieve the next page of results in the list. resultSizeEstimate integer ( uint32 format) Estimated total number of results.

### Usage limits \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/quota](https://developers.google.com/workspace/gmail/api/reference/quota)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table outlines the per-method quota unit usage: Method Quota units drafts.create 10 drafts.delete 10 drafts.get 5 drafts.list 5 drafts.send 100 drafts.update 15 getProfile 1 history.list 2 labels.create 5 labels.delete 5 labels.get 1 labels.list 1 labels.update 5 messages.attachments.get 5 messages.batchDelete 50 messages.batchModify 50 messages.delete 10 messages.get 5 messages.import 25 messages.insert 25 messages.list 5 messages.modify 5 messages.send 100 messages.trash 5 messages.untrash 5 settings.delegates.create 100 settings.delegates.delete 5 settings.delegates.get 1 settings.delegates.list 1 settings.filters.create 5 settings.filters.delete 5 settings.filters.get 1 settings.filters.list 1 settings.forwardingAddresses.create 100 settings.forwardingAddresses.delete 5 settings.forwardingAddresses.get 1 settings.forwardingAddresses.list 1 settings.getAutoForwarding 1 settings.getImap 1 settings.getPop 1 settings.getVacation 1 settings.sendAs.create 100 settings.sendAs.delete 5 settings.sendAs.get 1 settings.sendAs.list 1 settings.sendAs.update 100 settings.sendAs.verify 100 settings.updateAutoForwarding 5 settings.updateImap 5 settings.updatePop 100 settings.updateVacation 5 stop 50 threads.delete 20 threads.get 10 threads.list 10 threads.modify 10 threads.trash 10 threads.untrash 10 watch 100 When using the Gmail API, there's also a limit of 500 recipients per email message.
- Per-method quota usage The number of quota units consumed by a request varies depending on the method called.
- The Gmail API is subject to usage limits which restrict the rate at which methods of the API can be called.

### List Gmail messages \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- List messages The messages.list method supports several query parameters to filter the messages: maxResults : Maximum number of messages to return (defaults to 100, maximum 500). pageToken : Token to retrieve a specific page of results. q : Query string to filter messages, such as from:someuser@example.com is:unread . labelIds : Only return messages with labels that match all specified label IDs. includeSpamTrash : Include messages from SPAM and TRASH in the results.
- Lists the user's Gmail messages. """ creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( "token.json" ): creds = Credentials . from authorized user file ( "token.json" , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( "credentials.json" , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( "token.json" , "w" ) as token : token . write ( creds . to json ()) try : Call the Gmail API service = build ( "gmail" , "v1" , credentials = creds ) results = ( service . users () . messages () . list ( userId = "me" , labelIds = [ "INBOX" ]) . execute () ) messages = results . get ( "messages" , []) if not messages : print ( "No messages found." ) return print ( "Messages:" ) for message in messages : print ( f 'Message ID: { message [ "id" ] } ' ) msg = ( service . users () . messages () . get ( userId = "me" , id = message [ "id" ]) . execute () ) print ( f ' Subject: { msg [ "snippet" ] } ' ) except HttpError as error : TODO(developer) - Handle errors from gmail API. print ( f "An error occurred: { error } " ) if name == " main " : main () The messages.list method returns a response body that contains the following: messages[] : An array of Message resources. nextPageToken : For requests with multiple pages of results, a token that can be used with subsequent calls to list more messages. resultSizeEstimate : An estimated total number of results.
- This document explains how to call the Gmail API's messages.list method.
- The code handles pagination to retrieve all messages matching the query. gmail/snippet/list messages.py View on GitHub import os.path from google.auth.transport.requests import Request from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow from googleapiclient.discovery import build from googleapiclient.errors import HttpError If modifying these scopes, delete the file token.json.

