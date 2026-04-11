---
title: "Create a section \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/create-section
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/create-section
  title: "Create a section \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Guides
Send feedback
Create a section
Stay organized with collections
Save and categorize content based on your preferences.
This guide explains how to use the
create
method on the Section resource of the Google Chat API to create a new
custom section in Google Chat.
Sections help users group their conversations and customize the list of spaces
displayed in the Google Chat navigation panel. For more information, see
Create and organize sections in Google Chat .
Prerequisites
Python
A Business or Enterprise
Google Workspace account with access to
Google Chat .
Set up your environment:
Create a Google Cloud project .
Configure the OAuth consent screen .
Enable and configure the Google Chat API with a name,
icon, and description for your Chat app.
Install the
Python
Cloud Client Library .
Create OAuth client ID credentials for a desktop application. To run the sample in this
guide, save the credentials as a JSON file named credentials.json to your
local directory.
For guidance, complete the steps for setting up your environment in this
quickstart .
Choose an authorization scope that supports user authentication.
The code samples in this page use the gRPC API interface with the Google Cloud client
libraries. Alternatively, you can use the REST API interface. For more information about the gRPC
and REST interfaces, see
Google Chat API overview .
Create a section
To create a section with
user authentication , pass the following in your request:
Specify the chat.users.sections authorization scope.
Call the CreateSection method.
In the request body, provide a Section resource:
Set displayName to a name for the section (up to 80 characters).
Set type to CUSTOM_SECTION .
The following example creates a section:
Python
from google.cloud import chat_v1
def create_section ():
# Create a client
client = chat_v1 . ChatServiceClient ()
# Initialize request
request = chat_v1 . CreateSectionRequest (
parent = "users/me" ,
section = chat_v1 . Section (
display_name = "SECTION_DISPLAY_NAME" ,
type = chat_v1 . Section . SectionType . CUSTOM_SECTION
)
)
# Make the request
response = client . create_section ( request = request )
print ( response )
To run this sample, replace the following:
SECTION_DISPLAY_NAME : The name of the new section.
The Chat API returns an instance of
Section that details the section that was created.
Related topics
Update a section
Delete a section
Change the position of a section
List sections
List spaces in a section
Move a space to a different section
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
