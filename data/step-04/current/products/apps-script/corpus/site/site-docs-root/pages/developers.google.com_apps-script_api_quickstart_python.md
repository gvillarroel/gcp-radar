---
title: "Python quickstart \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/quickstart/python
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/api/quickstart/python
  title: "Python quickstart \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Python quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This quickstart guide helps you create a Python command-line application that interacts with the Google Apps Script API using simplified authentication suitable for testing.
To run the quickstart, you need Python 3.10.7 or greater, pip, a Google Cloud project, and a Google account with Google Drive enabled.
Setting up the environment involves enabling the Google Apps Script API in your Google Cloud project and configuring the OAuth consent screen.
You must create authorized credentials for a desktop application and save the downloaded JSON file as credentials.json in your working directory.
Install the Google client library for Python using pip to handle authentication and authorization flows.
Create a Python command-line application that makes requests to the
Google Apps Script API.
Quickstarts explain how to set up and run an app that calls a
Google Workspace API. This quickstart uses a
simplified authentication approach that is appropriate for a testing
environment. For a production environment, we recommend learning about
authentication and authorization
before
choosing the access credentials
that are appropriate for your app.
This quickstart uses Google Workspace's recommended API client libraries
to handle some details of the authentication and authorization flow.
Objectives
Set up your environment.
Install the client library.
Set up the sample.
Run the sample.
Prerequisites
To run this quickstart, you need the following prerequisites:
Python 3.10.7 or greater
The pip
package management tool
A Google Cloud project .
A Google account with Google Drive enabled.
Set up your environment
To complete this quickstart, set up your environment.
Enable the API
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Apps Script API.
Enable the API
Configure the OAuth consent screen
If you're using a new Google Cloud project to complete this quickstart, configure
the OAuth consent screen. If you've already
completed this step for your Cloud project, skip to the next section.
In the Google API Console, go to Menu menu
> Google Auth platform
> Branding .
Go to Branding
If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in Branding , Audience , and Data Access . If you see a message that says Google Auth platform not configured yet , click Get Started :
Under App Information , in App name , enter a name for the app.
In User support email , choose a support email address where users can contact you if they have questions about their consent.
Click Next .
Under Audience , select Internal .
Click Next .
Under Contact Information , enter an Email address where you can be notified about any changes to your project.
Click Next .
Under Finish , review the Google API Services User Data Policy and if you agree, select I agree to the Google API Services: User Data Policy .
Click Continue .
Click Create .
For now, you can skip adding scopes.
In the future, when you create an app for use outside of your
Google Workspace organization, you must change the User type to External . Then
add the authorization scopes that your app requires. To learn more, see the full
Configure OAuth consent guide.
Authorize credentials for a desktop application
To authenticate end users and access user data in your app, you need to
create one or more OAuth 2.0 Client IDs. A client ID is used to identify a
single app to Google's OAuth servers. If your app runs on multiple platforms,
you must create a separate client ID for each platform.
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Desktop app .
In the Name field, type a name for the credential. This name is only shown in the Google API Console.
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Save the downloaded JSON file as credentials.json , and move the
file to your working directory.
Install the Google client library
Install the Google client library for Python:
python3 - m pip install -- upgrade google - api - python - client google - auth - httplib2 google - auth - oauthlib
Configure the sample
In your working directory, create a file named quickstart.py .
Include the following code in quickstart.py :
apps_script/quickstart/quickstart.py
View on GitHub
"""
Shows basic usage of the Apps Script API.
Call the Apps Script API to create a new script project, upload a file to the
project, and log the script's URL to the user.
"""
import os.path
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient import errors
from googleapiclient.discovery import build
# If modifying these scopes, delete the file token.json.
SCOPES = [ "https://www.googleapis.com/auth/script.projects" ]
SAMPLE_CODE = """
function helloWorld() {
console.log("Hello, world!");
}
""" . strip ()
SAMPLE_MANIFEST = """
{
"timeZone": "America/New_York",
"exceptionLogging": "CLOUD"
}
""" . strip ()
def main ():
"""Calls the Apps Script API."""
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
flow = InstalledAppFlow . from_client_secrets_file (
"credentials.json" , SCOPES
)
creds = flow . run_local_server ( port = 0 )
# Save the credentials for the next run
with open ( "token.json" , "w" ) as token :
token . write ( creds . to_json ())
try :
service = build ( "script" , "v1" , credentials = creds )
# Call the Apps Script API
# Create a new project
request = { "title" : "My Script" }
response = service . projects () . create ( body = request ) . execute ()
# Upload two files to the project
request = {
"files" : [
{ "name" : "hello" , "type" : "SERVER_JS" , "source" : SAMPLE_CODE },
{
"name" : "appsscript" ,
"type" : "JSON" ,
"source" : SAMPLE_MANIFEST ,
},
]
}
response = (
service . projects ()
. updateContent ( body = request , scriptId = response [ "scriptId" ])
. execute ()
)
print ( "https://script.google.com/d/" + response [ "scriptId" ] + "/edit" )
except errors . HttpError as error :
# The API encountered a problem.
print ( error . content )
if __name__ == "__main__" :
main ()
Run the sample
In your working directory, build and run the sample:
python3 quickstart . py
The first time you run the sample, it prompts you to authorize access:
If you're not already signed in to your Google Account, sign in when prompted. If
you're signed in to multiple accounts, select one account to use for authorization.
Click Accept .
Your Python application runs and calls the Google Apps Script API.
Authorization information is stored in the file system, so the next time you run the sample
code, you aren't prompted for authorization.
Next steps
Try the Google Workspace APIs in the APIs explorer
Apps Script API reference documentation
Google APIs Client for Python documentation
Google Apps Script API PyDoc documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
