---
title: "Context caching overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview
  title: "Context caching overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
    \ Documentation"
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
Context caching overview
Stay organized with collections
Save and categorize content based on your preferences.
To see an example of context caching,
run the "Intro to context caching" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
Context caching helps reduce the cost and latency of requests to
Gemini that contain repeated content. Vertex AI offers two
types of caching:
Implicit caching: Automatic caching enabled by default that provides
cost savings when cache hits occur.
Explicit caching: Manual caching enabled using the Vertex AI API,
where you explicitly declare the content you want to cache and whether or
not your prompts should refer to the cached content.
For both implicit and explicit caching, the cachedContentTokenCount
field in your response's metadata indicates the number of tokens in the cached
part of your input.
Caching storage costs
For both implicit and explicit caching, you're billed for the input tokens used
to create the cache at the standard input token price. For explicit caching,
there are also storage costs based on how long caches are stored. There are no
storage costs for implicit caching. For more information, see Vertex AI pricing .
Implicit caching
All Google Cloud projects have implicit caching enabled by default. Implicit
caching provides a 90% discount on cached tokens compared to standard
input tokens.
When enabled, implicit cache hit cost savings are automatically passed on to
you. To increase the chances of an implicit cache hit:
Place large and common contents at the beginning of your prompt.
Send requests with a similar prefix in a short amount of time.
Supported models
Implicit caching is supported when using the following models:
Gemini 3.1 Flash-Lite
preview
Gemini 3.1 Pro
preview
Gemini 3 Flash
preview
Gemini 2.5 Pro
Gemini 2.5 Flash
preview
Gemini 2.5 Flash-Lite
preview
Gemini 2.5 Flash
Gemini 2.5 Flash-Lite
Implicit caching also supports the latest aliases, including:
gemini-flash-latest
gemini-flash-lite-latest
Implicit caching also supports Open Models. For more information, see
Vertex AI open models for MaaS .
Explicit caching
Explicit caching offers more control and ensures a discount when explicit
caches are referenced. That is, a discount on the input tokens referencing an
existing context cache. On Gemini 2.5 or later models this discount is 90%, on
Gemini 2.0 models this discount is 75%.
Using the Vertex AI API, you can:
Create context caches and control them more effectively.
Use a context cache by referencing its contents in a prompt request
with its resource name.
Update a context cache's expiration time (Time to Live, or TTL) past
the default 60 minutes.
Delete a context cache when no longer needed.
You can also use the Vertex AI API to
retrieve information about a context cache .
Explicit caches interact with implicit caching, potentially leading to
additional caching beyond the specified contents when creating a cache . To
prevent cache data retention, disable implicit caching and avoid creating
explicit caches. For more information, see Enable and disable caching .
Supported models
Explicit caching is supported when using the following models:
Gemini 3.1 Flash-Lite
preview
Gemini 3.1 Pro
preview
Gemini 3 Flash
preview
Gemini 2.5 Pro
Gemini 2.5 Flash
preview
Gemini 2.5 Flash-Lite
preview
Gemini 2.5 Flash
Gemini 2.5 Flash-Lite
Explicit caching also supports the latest aliases, including:
gemini-flash-latest
gemini-flash-lite-latest
When to use context caching
Context caching is particularly well suited to scenarios where a substantial
initial context is referenced repeatedly by subsequent requests.
Cached context items, such as a large amount of text, an audio file, or a video
file, can be used in prompt requests to the Gemini API to generate output.
Requests that use the same cache in the prompt also include text unique to each
prompt. For example, each prompt request that composes a chat conversation might
include the same context cache that references a video along with unique text
that comprises each turn in the chat.
Consider using context caching for use cases such as:
Chatbots with extensive system instructions
Repetitive analysis of lengthy video files
Recurring queries against large document sets
Frequent code repository analysis or bug fixing
Implicit and explicit caching are supported with Provisioned Throughput
in Preview . Refer to the Provisioned Throughput guide
for more details. Caches work across traffic types. For example, a cache created
while using Provisioned Throughput also works with
PayGo.
Availability
Context caching is available in regions where Generative AI on Vertex AI is
available. For more information, see Generative AI on Vertex AI
locations .
Limits
The content that you explicitly cache must adhere to the limits shown in the following
table:
Context caching limits
Minimum cache token count for implicit and explicit caching
Gemini 3 and Gemini 3.1 models: 4,096 tokens
Gemini 2.0 and 2.5 models: 2,048 tokens
Maximum size of content you can cache using a blob or text
10 MB
Minimum time before a cache expires after it's created
1 minute
Maximum time before a cache expires after it's created
There isn't a maximum cache duration
Important: When caching objects that are stored in a Cloud Storage bucket,
don't make changes to objects until the cached contents are expired or deleted.
Updates to Cloud Storage objects can cause the associated cached contents to
be unusable.
VPC Service Controls support
Context caching supports VPC Service Controls, meaning your cache cannot be
exfiltrated beyond your service perimeter. If you use Cloud Storage to build
your cache, include your bucket in your service perimeter as well to protect
your cache content.
For more information, see VPC Service Controls with Vertex AI
in the Vertex AI documentation.
What's next
Learn about the Gemini API .
Learn how to use multimodal prompts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
