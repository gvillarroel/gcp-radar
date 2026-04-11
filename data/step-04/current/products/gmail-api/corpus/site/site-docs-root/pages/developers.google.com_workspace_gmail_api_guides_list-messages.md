---
title: "List Gmail messages \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/guides/list-messages
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/guides
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/guides/list-messages
  title: "List Gmail messages \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Guides
Send feedback
List Gmail messages
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to call the Gmail API's
messages.list
method.
The method returns an array of Gmail messages objects that
contain the message id and threadId . To retrieve full message details, use
the messages.get
method.
Prerequisites
Python
A Google Cloud project with the Gmail API enabled. For steps, complete
the Gmail API Python
quickstart .
List messages
The messages.list method supports several query parameters to filter the
messages:
maxResults : Maximum number of messages to return (defaults to 100, maximum
500).
pageToken : Token to retrieve a specific page of results.
q : Query string to filter messages, such as from:someuser@example.com
is:unread .
labelIds : Only return messages with labels that match all specified label
IDs.
includeSpamTrash : Include messages from SPAM and TRASH in the results.
Code sample
Python
The following code sample shows how to list messages for the authenticated
Gmail user. The code handles pagination to retrieve all
messages matching the query.
gmail/snippet/list_messages.py
View on GitHub
import os.path
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
# If modifying these scopes, delete the file token.json.
SCOPES = [ "https://www.googleapis.com/auth/gmail.readonly" ]
def main ():
"""Shows basic usage of the Gmail API.
Lists the user's Gmail messages.
"""
creds = None
# The file token.json stores the user's access and refresh tokens, and is
# created automatically when the authorization flow completes for the first
# time.
if os . path . exists ( "token.json" ):
creds = Credentials . from_authorized_user_file ( "token.json" , SCOPES )
# If there are no (valid) credentials available, let the user log in.
if not creds or not creds . valid :
if creds and creds . expired and creds . refresh_token :
creds . refresh ( Request ())
else :
flow = InstalledAppFlow . from_client_secrets_file ( "credentials.json" , SCOPES )
creds = flow . run_local_server ( port = 0 )
# Save the credentials for the next run
with open ( "token.json" , "w" ) as token :
token . write ( creds . to_json ())
try :
# Call the Gmail API
service = build ( "gmail" , "v1" , credentials = creds )
results = (
service . users () . messages () . list ( userId = "me" , labelIds = [ "INBOX" ]) . execute ()
)
messages = results . get ( "messages" , [])
if not messages :
print ( "No messages found." )
return
print ( "Messages:" )
for message in messages :
print ( f 'Message ID: { message [ "id" ] } ' )
msg = (
service . users () . messages () . get ( userId = "me" , id = message [ "id" ]) . execute ()
)
print ( f ' Subject: { msg [ "snippet" ] } ' )
except HttpError as error :
# TODO(developer) - Handle errors from gmail API.
print ( f "An error occurred: { error } " )
if __name__ == "__main__" :
main ()
The messages.list method returns a response body that contains the following:
messages[] : An array of Message resources.
nextPageToken : For requests with multiple pages of results, a token that
can be used with subsequent calls to list more messages.
resultSizeEstimate : An estimated total number of results.
To fetch the full message content and metadata, use the message.id field to
call the
messages.get
method.
Related topics
Search and filter messages
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
