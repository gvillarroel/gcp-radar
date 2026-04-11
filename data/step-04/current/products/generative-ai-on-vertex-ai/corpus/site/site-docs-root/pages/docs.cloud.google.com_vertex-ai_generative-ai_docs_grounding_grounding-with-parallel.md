---
title: "Grounding with Parallel Web Search \_|\_ Generative AI on Vertex AI \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel
  title: "Grounding with Parallel Web Search \_|\_ Generative AI on Vertex AI \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
Guides
Send feedback
Grounding with Parallel Web Search
Stay organized with collections
Save and categorize content based on your preferences.
Private Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Parallel Web Systems offers a search API that provides
access to publicly available web data that's optimized for use by large language
models for grounding. This page explains how to ground Gemini responses
by using Parallel.
Grounding with Parallel on Vertex AI is a Separate Offering (as defined
in your Google Cloud Agreement) that connects Gemini models to public
web data provided by Parallel Web Systems' search API .
This service gives Gemini access to live information from billions of
web pages to ensure more up-to-date and factual responses.
Please note the following : Your use of Parallel
requires Google Cloud to send certain Customer Data to the
Parallel Separate Offering for processing. Your use of the
Parallel service is governed by Parallel's separate terms of
use and
Parallel's acceptable use policy .
Note: For web publishers, grounding with Parallel on Vertex AI does not
use web pages for grounding that have disallowed ShapBot. Web publishers can
manage their opt outs with a robots.txt file.
Use cases
Grounding with Parallel is suitable for use cases such as the following:
Using web data for information completion or enrichment purposes.
Multi-hop agents that require deeper web searches for more complex questions.
Building an API that integrates web search data.
Employee-facing assistants that allow end users to ask questions and create
complex reports using the latest web information.
Consumer-facing applications, like retail and travel, that allow the user to
make informed purchase decisions.
Automated agents that run autonomously to perform automated tasks, like news
analysis and KYC checks.
Vertical agents (sales agents, coding agents, finance agents) getting the
latest up-to-date context from the web.
Example
Who won the 2025 Las Vegas F1 Grand Prix?
Without Grounding
With Grounding
The 2025 Las Vegas Grand Prix has not happened yet. The race is
scheduled to take place on the weekend of November 20-22, 2025.
Therefore, the winner is currently unknown.
The winner of the 2025 Las Vegas F1 Grand Prix was Max Verstappen of
Red Bull Racing. The race took place on November 22, 2025.
Sources: domain1.com, domain2.com, ...
Supported models
This section lists the models that support Grounding with Parallel Web Search
Before you begin
To use Grounding with Parallel, you need to get an API key from
Parallel's web site . This API key is used
in your request to Gemini.
Ground Gemini responses with Parallel
Request grounded responses from Gemini by using the REST API as
follows. For best performance, we recommend using default settings for optional
parameters unless you strictly require non-default values.
REST
Before using any of the request data,
make the following replacements:
LOCATION : The region to process the request. To use
the global endpoint, exclude the location from the endpoint name and configure the location of
the resource to `global`.
PROJECT_ID : Your Google Cloud project ID.
MODEL_ID : The ID of the model to use.
TEXT : The text prompt to send to the model.
API_KEY : Your API key for Parallel Web Search.
EXCLUDE_DOMAINS : Optional: List of domains to
exclude from grounding sources. If specified, sources from these domains are excluded.
Acceptable values are domains (www.example.com) or domain extensions starting with a period (
.gov, .edu, .co.uk). You can specify up to 10 domains.
INCLUDE_DOMAINS : Optional: List of domains to
include in grounding sources. If specified, sources from these domains are included.
Acceptable values are domains (www.example.com) or domain extensions starting with a period (
.gov, .edu, .co.uk). You can specify up to 10 domains.
MAX_CHARS_PER_RESULT : Optional: The
maximum number of characters to include in each search result excerpt. If not specified, defaults
to 30000 . The allowed range is [1000, 100000] .
MAX_CHARS_TOTAL : Optional: The maximum total
characters from all search result excerpts. If not specified, defaults to 100000 .
The allowed range is [1000, 1000000] .
MAX_RESULTS : Optional: The maximum number of search
results to use for grounding. If not specified, defaults to 10 . The allowed range
is [1, 20] .
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/ MODEL_ID :generateContent
Request JSON body:
{
"contents": [{
"role": "user",
"parts": [{
"text": " TEXT "
}]
}],
"tools": [{
"parallelAiSearch": {
"api_key": " API_KEY ",
"customConfigs": {
"source_policy": {
"exclude_domains": [" EXCLUDE_DOMAINS "],
"include_domains": [" INCLUDE_DOMAINS "],
},
"excerpts": {
"max_chars_per_result": MAX_CHARS_PER_RESULT ,
"max_chars_total": MAX_CHARS_TOTAL
},
"max_results": MAX_RESULTS
}
}
}],
"model": "projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/ MODEL_ID "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/ MODEL_ID :generateContent"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/ MODEL_ID :generateContent" | Select-Object -Expand Content
You should receive a JSON response similar to the following.
Response
{
"candidates": [
{
"content": {
"role": "model",
"parts": [
{
"text": "The most recent Super Bowl was Super Bowl LIX (59), which was played in 2025. The winner of Super Bowl LIX was the **Philadelphia Eagles**, who defeated the Kansas City Chiefs with a score of 40-22."
}
]
},
"finishReason": "STOP",
"groundingMetadata": {
"webSearchQueries": [
"who won the last super bowl"
],
"groundingChunks": [
{
"web": {
"uri": "https://...",
"title": "Super Bowl LIX",
"domain": "domain.com"
}
},
{
"web": {
"uri": "https://...",
"title": "Super Bowl LIX Results",
"domain": "domain.com"
}
}
],
"groundingSupports": [
{
"segment": {
"endIndex": 77,
"text": "The most recent Super Bowl was Super Bowl LIX (59), which was played in 2025."
},
"groundingChunkIndices": [
0,
1
]
},
{
"segment": {
"startIndex": 78,
"endIndex": 198,
"text": "The winner of Super Bowl LIX was the **Philadelphia Eagles**, who defeated the Kansas City Chiefs with a score of 40-22."
},
"groundingChunkIndices": [
0
]
},
]
}
}
],
"usageMetadata": {
"promptTokenCount": 33,
"candidatesTokenCount": 106,
"totalTokenCount": 284,
"billablePromptUsage": {
"textCount": 142
},
"trafficType": "ON_DEMAND",
"promptTokensDetails": [
{
"modality": "TEXT",
"tokenCount": 33
}
],
"candidatesTokensDetails": [
{
"modality": "TEXT",
"tokenCount": 106
}
],
"toolUsePromptTokensDetails": [
{
"modality": "TEXT",
"tokenCount": 39
}
],
"toolUsePromptTokenCount": 39,
"thoughtsTokenCount": 106
},
"modelVersion": " MODEL_VERSION ",
"createTime": " CREATE_TIME ",
"responseId": " RESPONSE_ID "
}
Quota
The default quota is 60 prompts per minute. If you need to
increase your rate limits, contact
support@parallel.ai and your Google account team
with your use case and requirements.
Billing
The use of Grounding with Parallel incurs the following charges:
Gemini token consumption : Prompt tokens, thinking tokens, output tokens. For more information, see Pricing .
Gemini's Grounding with your data : For more information, see Pricing .
Input tokens provided by Parallel are not charged extra.
Pricing for the use of Parallel's search API : For more information, see Parallel's pricing page .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
