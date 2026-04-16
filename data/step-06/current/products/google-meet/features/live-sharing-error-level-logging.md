---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.838Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Live Sharing error-level logging"
feature_slug: "live-sharing-error-level-logging"
latest_feature_date: "2022-05-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/tutorial-events-python"
  - "https://developers.google.com/workspace/meet/api/guides/authenticate-authorize"
  - "https://developers.google.com/workspace/meet/api/guides/quickstart/python"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview"
keywords:
  - "live"
  - "sharing"
  - "error"
  - "level"
  - "logging"
  - "the"
  - "sdk"
  - "enables"
---

# Live Sharing error-level logging

Product: Google Meet
Coverage: MEDIUM

## Step 02 Summary

The SDK enables ERROR-level logging to help partners debug integrations.

## Extended Definition

The SDK enables ERROR-level logging to help partners debug integrations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- [https://developers.google.com/workspace/meet/api/guides/quickstart/python](https://developers.google.com/workspace/meet/api/guides/quickstart/python)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)

## Supporting Pages

### "Observe meeting events with Python and the Google Meet REST API \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- Source ID: `site-docs-root`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Message ) - > None : """Handles an incoming event from the Google Cloud Pub/Sub API.""" event type = message . attributes . get ( "ce-type" ) handler = { "google.workspace.meet.conference.v2.started" : on conference started , "google.workspace.meet.conference.v2.ended" : on conference ended , "google.workspace.meet.participant.v2.joined" : on participant joined , "google.workspace.meet.participant.v2.left" : on participant left , "google.workspace.meet.recording.v2.fileGenerated" : on recording ready , "google.workspace.meet.transcript.v2.fileGenerated" : on transcript ready , } . get ( event type ) try : if handler is not None : handler ( message ) message . ack () except Exception as error : print ( "Unable to process event" ) print ( error ) def listen for events ( subscription name : str = None ): """Subscribe to events on the subscription.""" subscriber = pubsub v1 .
- AuthorizedSession ( USER CREDENTIALS ) body = { "targetResource" : f "//cloudidentity.googleapis.com/users/ { user name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response service = build ( "people" , "v1" , credentials = USER CREDENTIALS ) response = ( service . people () . get ( resourceName = "people/me" , personFields = "names,emailAddresses" ) . execute () ) resource name = response . get ( "resourceName" ) if resource name . startswith ( "people/" ): resource name = resource name [ len ( "people/" ) :] subscription = subscribe to user ( topic name = TOPIC NAME , user name = resource name ) Make sure to add "https://www.googleapis.com/auth/userinfo.profile" in the authorize method in the credential samples above.
- In your working directory, create the file main.py and add the following contents: import os import json from google.auth.transport import requests from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow def authorize () - > Credentials : """Ensure valid credentials for calling the Meet REST API.""" CLIENT SECRET FILE = "./client secret.json" credentials = None if os . path . exists ( 'token.json' ): credentials = Credentials . from authorized user file ( 'token.json' ) if credentials is None : flow = InstalledAppFlow . from client secrets file ( CLIENT SECRET FILE , scopes = [ 'https://www.googleapis.com/auth/meetings.space.created' , ]) flow . run local server ( port = 0 ) credentials = flow . credentials if credentials and credentials . expired : credentials . refresh ( requests .
- AuthorizedSession ( USER CREDENTIALS ) body = { 'targetResource' : f "//meet.googleapis.com/ { space name } " , "eventTypes" : [ "google.workspace.meet.conference.v2.started" , "google.workspace.meet.conference.v2.ended" , "google.workspace.meet.participant.v2.joined" , "google.workspace.meet.participant.v2.left" , "google.workspace.meet.recording.v2.fileGenerated" , "google.workspace.meet.transcript.v2.fileGenerated" , ], "payloadOptions" : { "includeResource" : False , }, "notificationEndpoint" : { "pubsubTopic" : topic name }, "ttl" : "86400s" , } response = session . post ( "https://workspaceevents.googleapis.com/v1/subscriptions" , json = body ) return response Next, add the corresponding code to pull and process the events.

### "Authenticate and authorize Meet REST API requests \_|\_ Google Meet \_|\_\

- URL: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Authenticate and authorize using domain-wide delegation If you're a domain administrator, you can grant domain-wide delegation of authority to authorize an application's service account to access your users' data without requiring each user to give consent.
- Restricted The Usage column in the table indicates the sensitivity of each scope, according to the following definitions: Non-sensitive : These scopes provide the smallest scope of authorization access and only require basic app verification.
- Important terminology The following is a list of terms related to authentication and authorization: Authentication The act of ensuring that a principal , which can be a user or an app acting on behalf of a user, is who they say they are.

### Python quickstart \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/quickstart/python](https://developers.google.com/workspace/meet/api/guides/quickstart/python)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateSpaceRequest () response = client . create space ( request = request ) print ( f 'Space created: { response . meeting uri } ' ) except Exception as error : TODO(developer) - Handle errors from Meet API. print ( f 'An error occurred: { error } ' ) if name == ' main ' : main () Run the sample In your working directory, build and run the sample: python3 quickstart . py The first time you run the sample, it prompts you to authorize access: If you're not already signed in to your Google Account, sign in when prompted.
- SCOPES = [ 'https://www.googleapis.com/auth/meetings.space.created' ] def main (): """Shows basic usage of the Google Meet API. """ creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( 'token.json' ): creds = Credentials . from authorized user file ( 'token.json' , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( 'credentials.json' , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( 'token.json' , 'w' ) as token : token . write ( creds . to json ()) try : client = meet v2 .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Include the following code in quickstart.py : meet/quickstart/quickstart.py View on GitHub from future import print function import os.path from google.auth.transport.requests import Request from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow from google.apps import meet v2 If modifying these scopes, delete the file token.json.

### Google Meet meeting spaces overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram shows the high-level steps of a meeting space lifecycle: Figure 1.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- How to call the meeting space methods The following table details the meeting roles required to use the meeting space methods: Method Owners Participants Others endActiveConference x get x x x with settings x with active conference x x patch x How Meet identifies a meeting space The Google Meet REST API generates a spaces resource for each meeting space.
- Related topics Create and manage meeting spaces Configure meeting spaces and members Join a meeting Countries where you can use a phone with Meet Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

