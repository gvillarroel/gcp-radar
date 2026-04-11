---
title: "Quickstart: Create audio from text by using the command line \_|\_ Cloud Text-to-Speech\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/quickstart-protocol
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/quickstart-protocol
  title: "Quickstart: Create audio from text by using the command line \_|\_ Cloud\
    \ Text-to-Speech \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Text-to-Speech
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create audio from text by using the command line
This document walks you through the process of making a request to
Cloud Text-to-Speech using the command line. To learn more about the fundamental
concepts in Cloud Text-to-Speech, read
Cloud Text-to-Speech Basics .
Before you begin
Before you can send a request to the Cloud Text-to-Speech API, you must have completed
the following actions. See the
before you begin page for details.
Enable Cloud Text-to-Speech on a GCP project.
Make sure billing is enabled for Cloud Text-to-Speech.
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Synthesize audio from text
You can convert text to audio by making an HTTP POST request to the
https://texttospeech.googleapis.com/v1/text:synthesize endpoint. In
the body of your POST command, specify the type of voice to synthesize in
the voice configuration section, specify the text to synthesize in the
text field of the input section, and specify the type of audio to create
in the audioConfig section.
Execute the REST request below at the command line to synthesize audio from
text using Cloud TTS. The command uses the gcloud auth
application-default print-access-token command to retrieve an authorization
token for the request.
Before using any of the request data,
make the following replacements:
PROJECT_ID : the alphanumeric ID of your Google Cloud project.
HTTP method and URL:
POST https://texttospeech.googleapis.com/v1/text:synthesize
Request JSON body:
{
"input": {
"text": "Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets."
},
"voice": {
"languageCode": "en-gb",
"name": "en-GB-Standard-A",
"ssmlGender": "FEMALE"
},
"audioConfig": {
"audioEncoding": "MP3"
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://texttospeech.googleapis.com/v1/text:synthesize"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://texttospeech.googleapis.com/v1/text:synthesize" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"audioContent": "//NExAASCCIIAAhEAGAAEMW4kAYPnwwIKw/BBTpwTvB+IAxIfghUfW.."
}
The JSON output for the REST command contains the synthesized audio in
base64-encoded format. Copy the contents of the audioContent field into
a new file named synthesize-output-base64.txt . Your new file will look something
like the following:
//NExAARqoIIAAhEuWAAAGNmBGMY4EBcxvABAXBPmPIAF//yAuh9Tn5CEap3/o
...
VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
Decode the contents of the synthesize-output-base64.txt file into a new file
named synthesized-audio.mp3 . For information
on decoding base64, see Decoding Base64-Encoded Audio Content .
Linux
Copy only the base-64 encoded content into a text file.
Decode the source text file using the base64 command line tool
by using the -d flag:
$ base64 SOURCE_BASE64_TEXT_FILE -d > DESTINATION_AUDIO_FILE
Mac OSX
Copy only the base-64 encoded content into a text file.
Decode the source text file using the base64 command line tool:
$ base64 --decode SOURCE_BASE64_TEXT_FILE > DESTINATION_AUDIO_FILE
Windows
Copy only the base-64 encoded content into a text file.
Decode the source text file using the
certutil command.
certutil -decode SOURCE_BASE64_TEXT_FILE DESTINATION_AUDIO_FILE
Play the contents of synthesized-audio.mp3 in an audio application or on
an audio device. You can also open the synthesized-audio.mp3 in the Chrome
browser to play the audio by navigating to the folder that contains
the file, for example file://my_file_path/synthesized-audio.mp3
Clean up
To avoid unnecessary Google Cloud Platform charges, use the
Google Cloud console to delete your project if you do not need it.
What's next
Learn more about Cloud Text-to-Speech by reading the
basics .
Review the list of
available voices
you can use for synthetic speech.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
