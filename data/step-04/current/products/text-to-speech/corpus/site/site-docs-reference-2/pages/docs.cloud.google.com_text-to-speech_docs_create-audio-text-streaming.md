---
title: "Quickstart: Synthesize speech with bidirectional streaming quickstart \_|\_\
  \ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-streaming
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-streaming
  title: "Quickstart: Synthesize speech with bidirectional streaming quickstart \_\
    |\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
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
Synthesize speech with bidirectional streaming
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document walks you through the process of synthesizing audio using
bidirectional streaming.
Bidirectional streaming lets you send text input and receive audio data
simultaneously. This means that you can start synthesizing speech before the
complete input text is sent, which reduces latency and enables real-time
interactions. Voice assistants and interactive games use bidirectional streaming
to create more dynamic and responsive applications.
To learn more about the fundamental concepts in Cloud Text-to-Speech, read
Cloud Text-to-Speech Basics .
Before you begin
Before you can send a request to the Cloud Text-to-Speech API, you must have completed
the following actions.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Text-to-Speech API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable texttospeech.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Text-to-Speech API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable texttospeech.googleapis.com
Synthesize speech with bidirectional streaming
Install the client library
Python
Before installing the library, make sure you've prepared your environment for Python development .
pip install --upgrade google-cloud-texttospeech
Send a stream of text and receive a stream of audio
The API accepts a stream of requests with type StreamingSynthesizeRequest ,
which contain either StreamingSynthesisInput or StreamingSynthesizeConfig .
Before sending a stream StreamingSynthesizeRequest with
StreamingSynthesisInput , which provides text input, send exactly one
StreamingSynthesizeRequest with a StreamingSynthesizeConfig .
Streaming Cloud Text-to-Speech is only compatible with Chirp 3: HD voices .
Python
Before running the example, make sure you've prepared your environment for Python development .
#!/usr/bin/env python
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
"""Google Cloud Text-To-Speech API streaming sample application .
Example usage:
python streaming_tts_quickstart.py
"""
def run_streaming_tts_quickstart ():
"""Synthesizes speech from a stream of input text."""
from google.cloud import texttospeech
client = texttospeech . TextToSpeechClient ()
# See https://cloud.google.com/text-to-speech/docs/voices for all voices.
streaming_config = texttospeech . StreamingSynthesizeConfig (
voice = texttospeech . VoiceSelectionParams (
name = "en-US-Chirp3-HD-Charon" ,
language_code = "en-US" ,
)
)
# Set the config for your stream. The first request must contain your config, and then each subsequent request must contain text.
config_request = texttospeech . StreamingSynthesizeRequest (
streaming_config = streaming_config
)
text_iterator = [
"Hello there. " ,
"How are you " ,
"today? It's " ,
"such nice weather outside." ,
]
# Request generator. Consider using Gemini or another LLM with output streaming as a generator.
def request_generator ():
yield config_request
for text in text_iterator :
yield texttospeech . StreamingSynthesizeRequest (
input = texttospeech . StreamingSynthesisInput ( text = text )
)
streaming_responses = client . streaming_synthesize ( request_generator ())
for response in streaming_responses :
print ( f "Audio content size in bytes is: { len ( response . audio_content ) } " )
if __name__ == "__main__" :
run_streaming_tts_quickstart ()
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
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
