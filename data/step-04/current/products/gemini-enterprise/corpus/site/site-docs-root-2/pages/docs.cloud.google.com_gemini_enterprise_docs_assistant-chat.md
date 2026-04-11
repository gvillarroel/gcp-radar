---
title: "Chat with the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat
  title: "Chat with the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Use Gemini Enterprise
Send feedback
Chat with the assistant
Stay organized with collections
Save and categorize content based on your preferences.
In your app, you can chat about search results and uploaded content with the
assistant. The assistant can provide summaries and answer questions through
natural language conversations, and you can export the assistant's answers in
common formats to share with others.
Chat with the assistant
When you ask a question, the assistant provides a summary based on the
information it can find. You can then ask follow-up questions to refine the
answer and get details based on the data that your app searches across. You can
also provide your own context by uploading files for the assistant to analyze,
or by mentioning specific people and documents in your prompt.
Note: By default, chat sessions older than 60 days are automatically deleted.
Ask questions and view sources
To engage in a conversation with the assistant and view supporting sources:
Type your question into the chat box. The assistant automatically provides a
summary based on your search results.
Ask follow-up questions to refine the answers.
To understand how the model processes your queries and prompts, click
Show thinking .
Note: While the model is Thinking , the content is not localized. However,
the steps are localized when you review them using Show thinking .
To see the data sources the assistant used, click Sources at the end of
the response.
Hover over a listed source to highlight the portion of the result supported
by that source.
View supporting sources for the response
To get ideas about what to ask, do the following:
Click one of the prompt suggestions below the chat box, such as
Help me write . A list of specific prompts appears.
Click one of these specific prompts, such as
Help me write a blog post. Ask me about the topic and purpose , to start a
new conversation using that prompt.
Chat with files in connectors
Gemini Enterprise can analyze content and generate answers from the following
connectors:
Note: A Gemini Enterprise admin must enable the required actions for the
Gemini Enterprise assistant to access the content, allowing you to chat with
the files.
Connectors
Supported files
Required connector actions
Google Drive
CSV
PDF
PPTX
XLSX
Download document
For more information, see the
Google Drive supported actions .
Microsoft SharePoint
CSV
PDF
PPTX
XLSX
Download document
For more information, see the
Microsoft SharePoint supported actions .
Microsoft Outlook
Email attachments
Download attachment
For more information, see the
Microsoft Outlook supported actions .
Box
CSV
PDF
PPTX
XLSX
Download file
For more information, see the
Box supported actions .
To chat with files, do the following:
Ensure that you have authorized Gemini Enterprise to access the data in the
connector. For more information, see
User authorization .
In the chat box:
Click Connectors and make sure that the connector you want to chat
with is turned on.
Turn off the other connectors and Google Search when using this feature.
For example, to chat with files in the Microsoft SharePoint connector,
only enable the Microsoft SharePoint connector.
Turn on the Microsoft SharePoint connector
Enter a prompt or query in the chat box. If you know the filename, include
it in your prompt to help narrow the search.
For example: "Summarize the key points in the file
'Q3-Marketing-Budget.xlsx'."
Best practices
When chatting with files in connectors, follow these best practices:
Avoid ambiguous or overly broad questions to prevent the model from
overthinking. Be ready to ask follow-up questions to narrow the scope.
If the model suggests an action, such as removing duplicate rows, ask
follow-up questions to confirm that the action is necessary for your task.
The assistant displays executed code for XLSX and CSV files. Review this code
to understand your data was processed.
Upload and chat about files
The assistant can analyze files that you upload, such as PDFs, images, and
videos. You can also add files from your connected Google Drive or Microsoft
OneDrive Business accounts.
Note: When you upload a file from your Microsoft OneDrive Business
account for the first time, you might need to have a Microsoft Entra ID Global
Administrator or Application Administrator for your tenant to grant consent
for the Gemini Enterprise app. If you try to upload a file without this
consent, you may encounter an error when signing in to Microsoft Entra ID:
"Please ask an admin to grant permission to this app before you can use
it."
If you encounter this error, copy the URL from your browser's address bar
and share it with your administrator, so that they can provide consent on
behalf of your organization. This step is only required once. For more
information, see the
Microsoft Entra ID documentation .
To chat about uploaded content, do the following:
In the chat box, click the
add_circle_outline icon.
Upload files to the assistant
Upload one or more files to the assistant.
Enter a prompt or query in the chat box.
File formats and size limitations
The following table lists the file formats and size limitations for files that
you can upload to the assistant:
File type
Description
Images
Maximum image size: 30 MB
Supported file extensions: .png , .jpeg , .svg
Documents
Maximum document size:
.pdf : 100 MB
.xlsx : 50 MB The .xlsx limit applies to the size of the file after it's decompressed.
.csv : 7 MB
.docx : 3 MB
.pptx : 100 MB
.txt : 7 MB
.md : 2 MB
.json : 1 MB
.js : 1 MB
.html : 0.5 MB
.css : 1 MB
.java : 1 MB
.py : 2 MB
Supported file extensions: .pdf , .xlsx , .csv , .docx , .pptx , .txt , .md , .json , .js , .html , .css , .java , .py
Video
Maximum document size: 200 MB
Supported file extensions: .mp4
Audio
Maximum document size: 200 MB
Supported file extensions: .mp3
Add context with mentions
You can mention an agent, person, or uploaded file in your chat with the
assistant by typing @ in the chat box.
To add an agent, person, or file to the chat, do the following:
Type @ . Gemini Enterprise opens a list of suggested agents, people, and
files that you can select from.
Mention agents, people, or files in the chat
Continue typing to filter the suggestions, or select one from the list.
After mentioning a person in your prompt, you can hover over their name to
see more information about them.
Limitations
The following limitations apply when using the assistant with the listed data
sources:
Data source
Limitation
Microsoft Outlook
The following search queries are not supported:
Searching for most recent or oldest emails. For example,
first , earliest , latest , and
most recent .
Fetching email threads to generate answers.
Gathering information from multiple emails.
Using words based on their intent or semantics, rather than their
literal meaning (Microsoft Outlook search does not support
this).
Getting information from email attachments.
Microsoft OneDrive
Queries that request to list the items in a directory are not supported.
Microsoft SharePoint
Queries that request to list the items in a directory are not supported.
Export to Google Docs and Google Sheets
You can export the assistant's responses to Google Docs and export tabular and
CSV data to Google Sheets.
To export results, do the following:
To export a response to Google Docs, click the
file_download icon at the bottom of the
response, then click Export to Docs .
To export a table to Google Sheets, click Export to Sheets .
To export CSV data to Google Sheets, click Export to Sheets .
The exported file uses the same name as the chat session.
Provide diagnostic information for support
If you encounter a problem with the assistant's responses, you can help Support
to resolve the problem by providing diagnostic information for troubleshooting.
To obtain this information:
Go to the end of the problematic conversation and click the
more_vert icon.
Click Show diagnostic info . The Diagnostic info dialog appears.
Click Copy token . The information is copied to your system clipboard.
Provide the copied information when you contact Support for help with the
conversation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
