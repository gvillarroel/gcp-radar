---
title: "Package types (0.12.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types
  title: "Package types (0.12.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (0.12.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.12.0 (latest)
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
API documentation for geminidataanalytics_v1alpha.types package.
Classes
AgentContextReference
Message representing a reference to Agent Context.
AlloyDbDatabaseReference
Message representing a reference to a single AlloyDB
database.
AlloyDbReference
Message representing reference to an AlloyDB database and agent
context. Only supported for the QueryData method.
AnalysisEvent
An event indicating the progress of an analysis.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AnalysisMessage
A message produced during analysis.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AnalysisOptions
Options for analysis.
AnalysisQuery
A query for performing an analysis.
BigQueryJob
A BigQuery job executed by the system.
BigQueryTableReference
Message representing a reference to a single BigQuery table.
BigQueryTableReferences
Message representing references to BigQuery tables and property
graphs. At least one of table_references or
property_graph_references must be populated.
Blob
A blob of data with a MIME type.
ChartMessage
A message produced during chart generation.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ChartOptions
Options for chart generation.
ChartQuery
A query for generating a chart.
ChartResult
The result of a chart generation query.
ChatRequest
Request for Chat.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ClarificationMessage
A message of questions to help clarify the user's query. This
is returned when the system cannot confidently answer the user's
question.
ClarificationQuestion
Represents a single question to the user to help clarify
their query.
ClientManagedResourceContext
Context with client managed resources.
Some clients may not use GDA managed resources including
conversations and agents, instead they create and manage their
own conversations and agents resources.
CloudSqlDatabaseReference
Message representing a reference to a single CloudSQL
database.
CloudSqlReference
Message representing reference to a CloudSQL database and agent
context. Only supported for the QueryData method.
Context
A collection of context to apply to this conversation
Conversation
Message for a conversation.
ConversationOptions
Options for the conversation.
ConversationReference
Reference to a persisted conversation and agent context.
CreateConversationRequest
Request for creating a conversation.
CreateDataAgentRequest
Message for creating a DataAgent.
Credentials
Represents different forms of credential specification.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DataAgent
Message describing a DataAgent object.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DataAgentContext
Context for the chat request using a data agent.
DataAnalyticsAgent
Message describing a DataAnalyticsAgent object.
DataFilter
A filter on a datasource's underlying data. Filter syntax
documentation:
https://cloud.google.com/looker/docs/filter-expressions
DataFilterType
The type of filter present on a datasource, such as ALWAYS_FILTER.
DataMessage
A message produced during data retrieval.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DataQuery
A query for retrieving data.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DataResult
Retrieved data.
Datasource
A datasource that can be used to answer questions.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DatasourceOptions
Options for datasources configurations.
DatasourceReferences
A collection of references to datasources.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DeleteConversationRequest
Request for deleting a conversation based on parent and
conversation id.
DeleteDataAgentRequest
Message for deleting a DataAgent.
ErrorMessage
An error message from a tool call. This message is used to represent
an error that occurred while an agent was trying to use a tool. It's
important to note that not all errors are terminal. Many are
recoverable, and the agent may use the information from this error
message to self-correct and retry the tool call or try a different
approach.
For example, if a data query fails, the agent might receive an
ErrorMessage , analyze it, and then generate a corrected query.
Clients should be cautious about interpreting this message as a
definitive failure. It can be part of the agent's normal, iterative
process of completing a task. Surfacing these errors directly to
end-users without context (e.g., as a "hard failure") may be
misleading.
ExampleQueries
A message containing derived and authored example queries.
ExampleQuery
Example of relevant and commonly used SQL query and its
corresponding natural language queries optionally present.
Currently only used for BigQuery data sources.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ExecutedQueryResult
The result of a query execution. The design is generic for
all dialects.
Field
A field in a schema.
GenerationOptions
Options to control query generation, execution, and response
format.
GetConversationRequest
Request for getting a conversation based on parent and
conversation id.
GetDataAgentRequest
Message for getting a DataAgent.
GlossaryTerm
Definition of a term within a specific domain.
ListAccessibleDataAgentsRequest
Message for requesting list of accessible DataAgents.
ListAccessibleDataAgentsResponse
Message for response to listing accessible DataAgents.
ListConversationsRequest
Request for listing conversations based on parent.
ListConversationsResponse
Message for response to listing conversations.
ListDataAgentsRequest
Message for requesting list of DataAgents.
ListDataAgentsResponse
Message for response to listing DataAgents.
ListMessagesRequest
Request for listing chat messages based on parent and
conversation_id.
ListMessagesResponse
Response for listing chat messages.
LookerExploreReference
Message representing a reference to a single Looker explore.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
LookerExploreReferences
Message representing references to Looker explores.
LookerGoldenQuery
A golden query for Looker, including natural language
questions and a corresponding Looker Query. Analogous to
ExampleQuery.
LookerQuery
Looker Query Object Looker API
documentation <https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Query/run_inline_query> __.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Message
A message from an interaction between the user and the
system.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
OAuthCredentials
Represents OAuth credentials.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
OperationMetadata
Represents the metadata of the long-running operation.
ParameterizedSecureViewParameters
Parameters for Parameterized Secure Views (PSV). These
parameters are used to enforce row-level security during SQL
generation and query execution.
PrivateLookerInstanceInfo
Message representing a private Looker instance info required
if the Looker instance is behind a private network.
QueryDataContext
References to data sources and context to use for the query.
QueryDataRequest
Request to query data from a natural language query.
QueryDataResponse
Response containing the generated query and related
information.
Schema
The schema of a Datasource or QueryResult instance.
SchemaMessage
A message produced during schema resolution.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SchemaQuery
A query for resolving the schema relevant to the posed
question.
SchemaResult
The result of schema resolution.
SpannerDatabaseReference
Message representing a reference to a single Spanner
database.
SpannerReference
Message representing reference to a Spanner database and agent
context. Only supported for the QueryData method.
StorageMessage
A stored message containing user message or system message.
StudioDatasourceReference
Message representing a reference to a single Looker Studio
datasource.
StudioDatasourceReferences
Message representing references to Looker Studio datasources.
SystemMessage
A message from the system in response to the user. This
message can also be a message from the user as historical
context for multiturn conversations with the system.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
TextMessage
A multi-part text message.
UpdateDataAgentRequest
Message for updating a DataAgent.
UserMessage
A message from the user that is interacting with the system.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
