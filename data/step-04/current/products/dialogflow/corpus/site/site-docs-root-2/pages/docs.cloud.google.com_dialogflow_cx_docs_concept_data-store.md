---
title: "Data stores \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/basics
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store
  title: "Data stores \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Data stores
Stay organized with collections
Save and categorize content based on your preferences.
Note: The Data Stores feature is excluded from the Dialogflow CX
SLA .
Data stores are used by
data store tools
to find answers for end-user's questions from your data.
Data stores are a collection of websites, documents, or data in third-party
systems, each of which reference your data.
When an end-user asks the agent a question,
the agent searches for an answer from the given source content
and summarizes the findings into a coherent agent response.
It also provides supporting links to the sources of
the response for the end-user to learn more.
The agent can provide up to five answer snippets for a given question.
Data store sources
There are different sources that you can supply for your data:
Website URLs :
Automatically crawl website content from a list of domains
or web pages.
BigQuery :
Import data from your BigQuery table.
Cloud Storage :
Import data from your Cloud Storage bucket.
AlloyDB :
Import data from your AlloyDB cluster.
Bigtable :
Import data from a Bigtable table.
Firestore :
Import data from your Firestore collection.
Cloud SQL :
Import data from a Cloud SQL table.
Spanner :
Import data from a Spanner table.
Restricted access data store sources
Google offers many additional first- and third-party data store sources as a
restricted access feature. To see a list of available sources and to request
access, see the
additional data store sources
section on this page.
Website content
When adding website content as a source,
you can add and exclude multiple sites.
When you specify a site,
you can use individual pages or * as a wildcard for a pattern.
All HTML and PDF content will be processed.
You must
verify your domain
when using website content as a source.
Limitations:
Files from public URLs must have been crawled by the Google Search indexer,
so that they exist in the search index.
You can check this with the
Google Search Console .
A maximum of 200,000 pages are indexed. If the data store contains
more pages, indexing will fail at that point. Any content already indexed
will remain.
Import data
You can import your data from either BigQuery or
Cloud Storage . This data can be in FAQ form
or unstructured , and it can be with metadata
or without metadata .
The following Data Import Options are available:
Add/Update Data :
The provided documents are added to the data store.
If a new document has the same ID as an old document,
the new document replaces the old document.
Override Existing Data :
All old data is deleted,
then new data is uploaded.
This is irreversible.
FAQ data store
FAQ data stores can hold answers to frequently asked questions (FAQ).
When user questions are matched with high confidence to an uploaded question,
the agent returns the answer to that question without any modification.
You can provide a title and a URL for each question and answer pair
that is displayed by the agent.
Data must be uploaded to the data store in CSV format. Each file must have a
header row describing the columns.
For example:
"question","answer","title","url"
"Why is the sky blue?","The sky is blue because of Rayleigh scattering.","Rayleigh scattering","https://en.wikipedia.org/wiki/Rayleigh_scattering"
"What is the meaning of life?","42","",""
The title and url columns are optional and can be omitted:
"answer","question"
"42","What is the meaning of life?"
During the upload process, you can select a folder where each file is treated as
a CSV file regardless of extension.
Limitations:
An extra space character after , causes an error.
Blank lines (even at the end of the file) cause an error.
Unstructured data store
Unstructured data stores can contain content in the following formats:
HTML
PDF
TXT
CSV
Note: CSV files can also be imported as unstructured content.
The same schema requirements outlined in the FAQ data section still
apply. Metadata is generated automatically if title and url columns are
provided. Each question and answer pair gets indexed separately.
The matching requirements are less strict compared to FAQ CSV data
stores, and the answer might be rewritten by the agent rather than returned
word-for-word.
It's possible (but uncommon) to import files from another project's
Cloud Storage bucket. To do this, you need to grant explicit access
to the import process. Follow the instructions in the error message, which will
contain the name of the user that needs read access to the bucket in order to
perform the import.
Limitations:
The maximum file size is 2.5MB for text-based formats,
100MB for other formats.
Data store with metadata
A title and URL can be provided as metadata.
When the agent is in a conversation with a user,
the agent can provide this information to the user.
This can help users
to quickly link to internal web pages not accessible by the Google Search
indexer.
To import content with metadata, you must provide one or more
JSON Lines files. Each line of this file describes one
document. You do not directly upload the actual documents; URIs that link to
the Cloud Storage paths are provided in the JSON Lines file.
In order to provide your JSON Lines files, you must provide a Cloud Storage
folder that contains these files. Do not put any other files in this folder.
Field descriptions:
Field
Type
Description
id
string
Unique identifier for the document.
content.mimeType
string
MIME type of the document. "application/pdf" and "text/html" are supported.
content.uri
string
URI for the document in Cloud Storage.
structData
string
Single line JSON object with optional title and url fields.
For example:
{ "id" : "d001" , "content" : { "mimeType" : "application/pdf" , "uri" : "gs://example-import/unstructured/first_doc.pdf" }, "structData" : { "title" : "First Document" , "url" : "https://internal.example.com/documents/first_doc.pdf" } }
{ "id" : "d002" , "content" : { "mimeType" : "application/pdf" , "uri" : "gs://example-import/unstructured/second_doc.pdf" }, "structData" : { "title" : "Second Document" , "url" : "https://internal.example.com/documents/second_doc.pdf" } }
{ "id" : "d003" , "content" : { "mimeType" : "text/html" , "uri" : "gs://example-import/unstructured/mypage.html" }, "structData" : { "title" : "My Page" , "url" : "https://internal.example.com/mypage.html" } }
Data store without metadata
This type of content has no metadata. Instead, you provide URI links to the
individual documents. The content type is determined by the file extension.
Parse and chunk configuration
Depending on the data source,
you might be able to configure
parse and chunk settings
as defined by Vertex AI Search.
Use Cloud Storage for a data store document
If your content is not public, storing your content in
Cloud Storage is the recommended option.
When you create data store documents,
you provide the URLs for your Cloud Storage objects in the form:
gs://bucket-name/folder-name .
Each document within the folder is added to the data store.
When you create the Cloud Storage bucket:
Be sure that you have selected the project you use for
the agent.
Use the Standard Storage class .
Set the bucket location
to the same location as your agent.
Follow the Cloud Storage quickstart
instructions to create a bucket and upload files.
Languages
For supported languages,
see the data store column in the
language reference .
For best performance, it is recommended that data stores be created in a single
language.
After creating a data store, you can optionally specify the data store language.
If you set the data store language, you can connect the data store to an agent
that is configured for a different language. For example, you can create a
French data store that is connected to an English agent.
Supported regions
For supported regions, see the
region reference .
(Restricted access) Additional data store sources
Additional data store types are listed in the following table. They are
available as restricted access features. You can fill out the
allowlist form
to request access. Once approved, you will be able to see these options
when you create a new data store in Vertex AI Agent Builder.
Third-party data store sources
Data store source
Description
Box
Import data from your organization's Box site.
Confluence Cloud
Import data from your Confluence Cloud workspace.
Dropbox
Import data from your Dropbox storage.
EntraID
Import data from your organization's EntraID system.
Jira Cloud
Import data from your Jira task management system.
OneDrive
Import data from your organization's OneDrive storage.
Microsoft Outlook
Import data from Microsoft Outlook.
Salesforce
Import data from Salesforce.
ServiceNow
Import data from ServiceNow.
SharePoint
Import data from your organization's SharePoint system.
Slack
Import data from Slack.
Microsoft Teams
Import data from Microsoft Teams.
Set up a third-party data store using a connector
This section outlines the process of setting up a data store using third-party
data. Instructions specific to each third-party data source can be found in
the generative AI documentation .
Identity providers
Identity providers allow you to manage users, groups, and authentication. When
you set up a third-party data store, you have the option of using either a
Google identity provider or a third-party identity provider.
Google identity provider:
Any users of the agent need to sign in using their Google credentials. This
can be any @gmail.com email address or any account that uses Google as the
identity provider (for example, Google Workspace). This step is skipped if
users talk to the agent using Google Cloud directly, because Google identity
is automatically built into the system.
You can assign access to Google accounts using
IAM .
Third-party identity provider:
Users of the agent sign in using non-Google credentials, for example a
Microsoft email address.
You must create a Workforce Pool
using Google Cloud containing the non-Google identity providers. You can then
use IAM to grant access to either the entire
pool or individual users within that pool.
This method can't be used with any Google Cloud projects set up under the
@google.com organization.
Connectors
Third-party data stores are implemented using a connector . Each connector
can contain multiple data stores, which are stored as entities in the
Dialogflow CX system.
Note: We only support user accounts for authentication; service accounts are not
supported for connectors.
Before you create a data store, you must set up each region with a single
identity provider in Google Cloud -> Agent Builder -> Settings . All data
stores in that region will use the same identity provider. You can choose
either a Google identity or a third-party identity in a workforce pool. The
same Google credential is considered to be a different identity if it's in
a workforce pool. For example, test@gmail.com is considered to be a
different identity than workforcePools/test-pool/subject/test@gmail.com .
Create a workforce pool (if needed).
Go to Agent Builder
Settings and select either Google Identity or
3rd Party Identity . Click SAVE to save the identity to the region.
You are now able to create a data store in the region.
Each data store saves Access Control List (ACL) data with each document. This
is a record of which users or groups have read access to which entities.
During runtime, a user or group member will only receive responses from
the agent that source from entities that they have read access to. If a user
has no read access to any entities in the data store, the agent will return
an empty response.
Because the data in the data store is a copy of the third-party instance, it
needs to be periodically refreshed. You can configure the refresh intervals
on a time scale of either hours or days.
After you configure your data store and click Create , it can take up to
an hour for the data store to appear in your data stores list.
Data store tracing
This feature includes two parts:
Display of the data store internal execution tracings and step latencies in
the agent simulator.
Export of tracings and latency data into Cloud Logging and BigQuery.
View data in the simulator
To display tracing and execution data in the agent data, expand the details
about a conversation turn by clicking on the expansion caret to the right of the
agent's response.
The execution tab displays the internal data store execution traces,
including the following information:
The original user input.
The query as it was rewritten by the data store engine.
The quality signals during various execution steps, including security check
status, stability check status, grounding check result and safety check
status.
Search snippets from the data store search.
The list of supporting documents the snippets were sourced from.
The latency tab displays a time graph for various data store execution
steps. The list of steps can vary depending on how the data store was configured
as well as the execution flow. Displayed data can include the following:
FAQ match: The data store performed an FAQ matching step.
Query rewriting: The data store rewrote the original user query.
Search: The data store performed snippet searching.
Summarization: The data store summarized the response.
Safety checks: The data store performed safety checking steps.
View tracing data in other locations
If the conversational agent is configured with
conversation history logging ,
you can also view data store tracing in Conversation History .
If the conversational agent is configured with
Cloud Logging ,
you can also view tracings and latencies in the cloud
Logs Explorer .
If the conversational agent is configured with
BigQuery export ,
you can also view tracings and latencies in an exported BigQuery table.
What's next
For instructions about creating a data store and using it with an agent, see the
data store tools
documentation.
Previous
arrow_back
Playbook evaluations
Next
Data store tools
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
