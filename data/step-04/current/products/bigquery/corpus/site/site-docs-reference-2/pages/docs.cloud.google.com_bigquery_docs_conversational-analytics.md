---
title: "Conversational analytics overview \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/conversational-analytics
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/conversational-analytics
  title: "Conversational analytics overview \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Conversational analytics overview
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To provide feedback or request support for this feature, send an email to
bqca-feedback-external@google.com .
Conversational analytics in BigQuery lets you chat with agents about
your data using natural language. To get answers about your data, you can do
the following:
Create data agents that automatically define data
context and query processing instructions for a set of knowledge sources,
such as tables, views, or user-defined functions (UDFs) that you select.
If needed, you can create context and instructions for an agent in the form
of custom table and field metadata, instructions to the agent for interpreting
and querying the data, or by creating verified queries
(previously known as golden queries ) to configure the data agent to
effectively answer questions for specific use cases.
Before customizing an agent, it's recommended that you first work with the
context and instructions that the agent creates.
Some examples of context and instructions that you provide to the agent are the
following:
Context. A data agent for sales analysis can be configured to understand
that "top performers" refers to sales representatives with the highest
revenue, rather than just the most closed deals.
Instructions. You can instruct a data agent to always filter data to
the most recent quarter when asked about "trends," or to group results by
"product category" by default.
After creating data agents, you can then have
conversations with them to ask questions about
BigQuery data by using natural language. You can also create
direct conversations with one or more
data sources to answer basic, one-off questions.
Conversational analytics is powered by Gemini for Google
Cloud and supports some BigQuery ML functions. For
more information, see BigQuery ML support .
Learn how and when Gemini
for Google Cloud uses your data .
As an early-stage technology, Gemini for Google Cloud
products can generate output that seems plausible but is factually incorrect. We recommend that you
validate all output from Gemini for Google Cloud products before you use it.
For more information, see
Gemini for Google Cloud and responsible AI .
Data agents
Data agents consist of one or more knowledge sources, and a set of instructions
specific to a use case for processing that data. When you create a data agent,
you can configure it using the following options:
Use knowledge sources such as tables, views, and UDFs with a data agent.
Provide custom table and field metadata to describe the data in the most
appropriate way for the given use case.
Provide instructions for interpreting and querying the data, such as
defining the following:
Synonyms and business terms for field names
Most important fields and defaults for filtering and grouping
Create verified queries that the data agent can use to shape an agent's
response structure and to learn the business logic that your organization
uses. Verified queries were previously known as golden queries . Verified
queries can use supported BigQuery ML functions .
Create BigQuery custom glossary terms for each agent or
import business glossary terms from Knowledge Catalog. These terms
help an agent interpret user prompts. For advice on when to use each type,
see
Create or review glossary terms .
Manage data agents
You can create, manage, and work with the following types of data agents in the
Agent Catalog tab in the Google Cloud console:
A predefined sample agent for each Google Cloud project.
A list of your drafted, created, and published agents.
A list of agents that other people create and share with you.
For more information, see Create data
agents .
Other services in the project that support data agents, such as the
Conversational Analytics API
and
Looker Studio
Pro, can access data agents that you create in BigQuery. You can
also access an agent created in the Google Cloud console by calling it using
the Conversational Analytics
API .
Conversations
Conversations are persisted chats with a data agent or data source. You can
ask data agents multi-part questions that use common terms like "sales" or "most
popular," without having to specify table field names or define conditions to
filter the data. You can also ask questions about data located in objects such
as PDFs.
The chat response returned to you provides the following features:
The answer to your question as text, code, or images (multimodal). The
answer can include supported BigQuery ML functions.
Generated charts where appropriate.
The agent's reasoning behind the results.
Metadata about the conversation, such as the agent and data sources
used.
When you create a direct conversation with a data source, the
Conversational Analytics API
interprets your question without the context and processing instructions that a
data agent offers. Because of this, direct conversation results can be less
accurate. Use data agents for cases that require greater accuracy.
You can create and manage conversations in BigQuery using the
Google Cloud console. For more information, see Analyze data with
conversations .
BigQuery ML support
Conversational analytics supports the following BigQuery ML functions
in response to chats with data agents and data sources, and in verified
SQL queries that you create.
AI.FORECAST
AI.DETECT_ANOMALIES
AI.GENERATE
To use the supported AI.GENERATE function, you must have the required
permissions
to run generative AI queries.
BigQuery ML use cases
To activate supported BigQuery ML functions, use them in the following ways:
When you create an agent and add a verified query—for example, if you are
a data scientist who prepares a recurring report—you can use supported
BigQuery ML functions in a verified query to describe defaults and
automate the report.
When you ask high-level questions about data to an agent, in a conversation,
or in a verified query using keywords, the agent generates the BigQuery ML
SQL in response to your questions.
The following table shows examples of one-shot prompts that activate the use of
BigQuery ML:
Use case
Sample usage
Public dataset
Forecasting
"Predict the number of trips for the next month."
bigquery-public-data.san_francisco_bikeshare.bikeshare_trips
Anomaly detection
"Find outliers in trips per day for 2018 using 2017 as a baseline."
bigquery-public-data.san_francisco_bikeshare.bikeshare_trips
LLM text generation
"For each article in the 'sports' category, summarize the body column in 1-2 sentences."
bigquery-public-data.bbc_news.fulltext
Security
You can manage access to conversational analytics in BigQuery
using Conversational Analytics API IAM roles and
permissions . For
information about the roles needed for specific operations, see the data agent
required roles and the
conversation required
roles .
Locations
Conversational analytics operates globally; you can't choose which region to
use.
Pricing
You are charged at BigQuery compute
pricing for queries that run when
you create data agents and have conversations with data agents or data
sources. There is no additional charge for creating and using data agents and
conversations during the Preview period.
Best practices
Review the following guides to learn about best practices for using the
Conversational Analytics API:
Set project-level, user-level, and query-level spending limits to
manage costs for your agents .
Ask effective questions
in your conversations.
Understand how
data retention and deletion
works for data agents and conversations.
Limitations
For more information about limitations on queries, conversations, data, and
visualizations, see
Conversational Analytics API known limitations .
Dynamic shared quota
Dynamic Shared Quota (DSQ) in Vertex AI manages capacity for the
Gemini model. Unlike conventional quotas, DSQ lets you access a
large shared pool of resources without a fixed per-project limit for model
throughput.
Performance, such as latency, can vary depending on the overall
system load. During times of high demand across the shared pool, you might
occasionally experience temporary 429 Resource Exhausted errors. These errors
indicate that the shared pool capacity is momentarily constrained, but not that
you have reached a specific quota limit on your project. To check on the
capacity, retry the request after a short delay.
What's next
Learn more about the Conversational Analytics
API .
Create data agents .
Analyze data with conversations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
