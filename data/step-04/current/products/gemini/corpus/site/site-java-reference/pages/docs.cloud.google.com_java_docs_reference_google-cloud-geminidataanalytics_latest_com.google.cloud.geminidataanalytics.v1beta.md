---
title: "Package com.google.cloud.geminidataanalytics.v1beta (0.16.0) \_|\_ Java client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta
  title: "Package com.google.cloud.geminidataanalytics.v1beta (0.16.0) \_|\_ Java\
    \ client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Package com.google.cloud.geminidataanalytics.v1beta (0.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.16.0 (latest)
0.15.0
0.13.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.4.0
0.3.0
0.2.0
0.1.0
GitHub Repository
RPC Documentation
Prerelease Implications
This package is a prerelease version! Use with caution.
Prerelease versions are considered unstable as they may be shut down and/or subject to breaking changes when upgrading.
Use them only for testing or if you specifically need their experimental features.
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Client
Service Description: Service describing handlers for resources.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Client
Service Description: Service to ask a natural language question on top of BigQuery and Looker
Studio datasources to get back streamed responses of various kinds to help provide a rich
conversational answer.
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Settings
Settings class to configure an instance of DataAgentServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Settings
Settings class to configure an instance of DataChatServiceClient .
The default instance has everything set to sensible defaults:
Classes
Class
Description
com. google. cloud. geminidataanalytics. v1beta. Agent Context Proto
com. google. cloud. geminidataanalytics. v1beta. Agent Context Reference
Message representing a reference to Agent Context.
com. google. cloud. geminidataanalytics. v1beta. Agent Context Reference. Builder
Message representing a reference to Agent Context.
com. google. cloud. geminidataanalytics. v1beta. Alloy Db Database Reference
Message representing a reference to a single AlloyDB database.
com. google. cloud. geminidataanalytics. v1beta. Alloy Db Database Reference. Builder
Message representing a reference to a single AlloyDB database.
com. google. cloud. geminidataanalytics. v1beta. Alloy Db Reference
Message representing reference to an AlloyDB database and agent context.
Only supported for the QueryData method.
com. google. cloud. geminidataanalytics. v1beta. Alloy Db Reference. Builder
Message representing reference to an AlloyDB database and agent context.
Only supported for the QueryData method.
com. google. cloud. geminidataanalytics. v1beta. Analysis Event
An event indicating the progress of an analysis.
com. google. cloud. geminidataanalytics. v1beta. Analysis Event. Builder
An event indicating the progress of an analysis.
com. google. cloud. geminidataanalytics. v1beta. Analysis Message
A message produced during analysis.
com. google. cloud. geminidataanalytics. v1beta. Analysis Message. Builder
A message produced during analysis.
com. google. cloud. geminidataanalytics. v1beta. Analysis Options
Options for analysis.
com. google. cloud. geminidataanalytics. v1beta. Analysis Options. Builder
Options for analysis.
com. google. cloud. geminidataanalytics. v1beta. Analysis Options. Python
Options for Python analysis.
com. google. cloud. geminidataanalytics. v1beta. Analysis Options. Python. Builder
Options for Python analysis.
com. google. cloud. geminidataanalytics. v1beta. Analysis Query
A query for performing an analysis.
com. google. cloud. geminidataanalytics. v1beta. Analysis Query. Builder
A query for performing an analysis.
com. google. cloud. geminidataanalytics. v1beta. Big Query Job
A BigQuery job executed by the system.
com. google. cloud. geminidataanalytics. v1beta. Big Query Job. Builder
A BigQuery job executed by the system.
com. google. cloud. geminidataanalytics. v1beta. Big Query Table Reference
Message representing a reference to a single BigQuery table.
com. google. cloud. geminidataanalytics. v1beta. Big Query Table Reference. Builder
Message representing a reference to a single BigQuery table.
com. google. cloud. geminidataanalytics. v1beta. Big Query Table References
Message representing references to BigQuery tables and property graphs.
At least one of table_references or property_graph_references must be
populated.
com. google. cloud. geminidataanalytics. v1beta. Big Query Table References. Builder
Message representing references to BigQuery tables and property graphs.
At least one of table_references or property_graph_references must be
populated.
com. google. cloud. geminidataanalytics. v1beta. Blob
A blob of data with a MIME type.
com. google. cloud. geminidataanalytics. v1beta. Blob. Builder
A blob of data with a MIME type.
com. google. cloud. geminidataanalytics. v1beta. Chart Message
A message produced during chart generation.
com. google. cloud. geminidataanalytics. v1beta. Chart Message. Builder
A message produced during chart generation.
com. google. cloud. geminidataanalytics. v1beta. Chart Options
Options for chart generation.
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Builder
Options for chart generation.
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Image Options
Options for rendering images of generated charts.
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Image Options. Builder
Options for rendering images of generated charts.
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Image Options. No Image
No image.
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Image Options. No Image. Builder
No image.
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Image Options. Svg Options
SVG options.
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Image Options. Svg Options. Builder
SVG options.
com. google. cloud. geminidataanalytics. v1beta. Chart Query
A query for generating a chart.
com. google. cloud. geminidataanalytics. v1beta. Chart Query. Builder
A query for generating a chart.
com. google. cloud. geminidataanalytics. v1beta. Chart Result
The result of a chart generation query.
com. google. cloud. geminidataanalytics. v1beta. Chart Result. Builder
The result of a chart generation query.
com. google. cloud. geminidataanalytics. v1beta. Chat Request
Request for Chat.
com. google. cloud. geminidataanalytics. v1beta. Chat Request. Builder
Request for Chat.
com. google. cloud. geminidataanalytics. v1beta. Clarification Message
A message of questions to help clarify the user's query. This is returned
when the system cannot confidently answer the user's question.
com. google. cloud. geminidataanalytics. v1beta. Clarification Message. Builder
A message of questions to help clarify the user's query. This is returned
when the system cannot confidently answer the user's question.
com. google. cloud. geminidataanalytics. v1beta. Clarification Question
Represents a single question to the user to help clarify their query.
com. google. cloud. geminidataanalytics. v1beta. Clarification Question. Builder
Represents a single question to the user to help clarify their query.
com. google. cloud. geminidataanalytics. v1beta. Client Managed Resource Context
Context with client managed resources.
Some clients may not use GDA managed resources including
conversations and agents, instead they create and manage their own
com. google. cloud. geminidataanalytics. v1beta. Client Managed Resource Context. Builder
Context with client managed resources.
Some clients may not use GDA managed resources including
conversations and agents, instead they create and manage their own
com. google. cloud. geminidataanalytics. v1beta. Cloud Sql Database Reference
Message representing a reference to a single CloudSQL database.
com. google. cloud. geminidataanalytics. v1beta. Cloud Sql Database Reference. Builder
Message representing a reference to a single CloudSQL database.
com. google. cloud. geminidataanalytics. v1beta. Cloud Sql Reference
Message representing reference to a CloudSQL database and agent context.
Only supported for the QueryData method.
com. google. cloud. geminidataanalytics. v1beta. Cloud Sql Reference. Builder
Message representing reference to a CloudSQL database and agent context.
Only supported for the QueryData method.
com. google. cloud. geminidataanalytics. v1beta. Context
A collection of context to apply to this conversation
com. google. cloud. geminidataanalytics. v1beta. Context. Builder
A collection of context to apply to this conversation
com. google. cloud. geminidataanalytics. v1beta. Context. Schema Relationship
The relationship between two tables, including referencing and referenced
columns. This is a derived context retrieved from Dataplex Dataset
Insights.
com. google. cloud. geminidataanalytics. v1beta. Context. Schema Relationship. Builder
The relationship between two tables, including referencing and referenced
columns. This is a derived context retrieved from Dataplex Dataset
Insights.
com. google. cloud. geminidataanalytics. v1beta. Context. Schema Relationship. Schema Paths
Represents an ordered set of paths within the table schema.
com. google. cloud. geminidataanalytics. v1beta. Context. Schema Relationship. Schema Paths. Builder
Represents an ordered set of paths within the table schema.
com. google. cloud. geminidataanalytics. v1beta. Context Proto
com. google. cloud. geminidataanalytics. v1beta. Conversation
Message for a conversation.
com. google. cloud. geminidataanalytics. v1beta. Conversation. Builder
Message for a conversation.
com. google. cloud. geminidataanalytics. v1beta. Conversation Name
com. google. cloud. geminidataanalytics. v1beta. Conversation Name. Builder
Builder for projects/{project}/locations/{location}/conversations/{conversation}.
com. google. cloud. geminidataanalytics. v1beta. Conversation Options
Options for the conversation.
com. google. cloud. geminidataanalytics. v1beta. Conversation Options. Builder
Options for the conversation.
com. google. cloud. geminidataanalytics. v1beta. Conversation Proto
com. google. cloud. geminidataanalytics. v1beta. Conversation Reference
Reference to a persisted conversation and agent context.
com. google. cloud. geminidataanalytics. v1beta. Conversation Reference. Builder
Reference to a persisted conversation and agent context.
com. google. cloud. geminidataanalytics. v1beta. Create Conversation Request
Request for creating a conversation.
com. google. cloud. geminidataanalytics. v1beta. Create Conversation Request. Builder
Request for creating a conversation.
com. google. cloud. geminidataanalytics. v1beta. Create Data Agent Request
Message for creating a DataAgent.
com. google. cloud. geminidataanalytics. v1beta. Create Data Agent Request. Builder
Message for creating a DataAgent.
com. google. cloud. geminidataanalytics. v1beta. Credentials
Represents different forms of credential specification.
com. google. cloud. geminidataanalytics. v1beta. Credentials. Builder
Represents different forms of credential specification.
com. google. cloud. geminidataanalytics. v1beta. Credentials Proto
com. google. cloud. geminidataanalytics. v1beta. Data Agent
Message describing a DataAgent object.
com. google. cloud. geminidataanalytics. v1beta. Data Agent. Builder
Message describing a DataAgent object.
com. google. cloud. geminidataanalytics. v1beta. Data Agent Context
Context for the chat request using a data agent.
com. google. cloud. geminidataanalytics. v1beta. Data Agent Context. Builder
Context for the chat request using a data agent.
com. google. cloud. geminidataanalytics. v1beta. Data Agent Name
com. google. cloud. geminidataanalytics. v1beta. Data Agent Name. Builder
Builder for projects/{project}/locations/{location}/dataAgents/{data_agent}.
com. google. cloud. geminidataanalytics. v1beta. Data Agent Proto
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Client. List Accessible Data Agents Fixed Size Collection
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Client. List Accessible Data Agents Page
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Client. List Accessible Data Agents Paged Response
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Client. List Data Agents Fixed Size Collection
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Client. List Data Agents Page
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Client. List Data Agents Paged Response
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Client. List Locations Fixed Size Collection
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Client. List Locations Page
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Client. List Locations Paged Response
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Grpc
Service describing handlers for resources.
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Grpc. Data Agent Service Impl Base
Base class for the server implementation of the service DataAgentService.
Service describing handlers for resources.
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Proto
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Settings. Builder
Builder for DataAgentServiceSettings.
com. google. cloud. geminidataanalytics. v1beta. Data Analytics Agent
Message describing a DataAnalyticsAgent object.
com. google. cloud. geminidataanalytics. v1beta. Data Analytics Agent. Builder
Message describing a DataAnalyticsAgent object.
com. google. cloud. geminidataanalytics. v1beta. Data Analytics Agent Proto
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Client. List Conversations Fixed Size Collection
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Client. List Conversations Page
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Client. List Conversations Paged Response
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Client. List Locations Fixed Size Collection
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Client. List Locations Page
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Client. List Locations Paged Response
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Client. List Messages Fixed Size Collection
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Client. List Messages Page
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Client. List Messages Paged Response
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Grpc
Service to ask a natural language question on top of BigQuery
and Looker Studio datasources to get back streamed responses of various kinds
to help provide a rich conversational answer.
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Grpc. Data Chat Service Impl Base
Base class for the server implementation of the service DataChatService.
Service to ask a natural language question on top of BigQuery
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Proto
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Settings. Builder
Builder for DataChatServiceSettings.
com. google. cloud. geminidataanalytics. v1beta. Data Filter
A filter on a datasource's underlying data. Filter syntax documentation:
https://cloud.google.com/looker/docs/filter-expressions
com. google. cloud. geminidataanalytics. v1beta. Data Filter. Builder
A filter on a datasource's underlying data. Filter syntax documentation:
https://cloud.google.com/looker/docs/filter-expressions
com. google. cloud. geminidataanalytics. v1beta. Data Message
A message produced during data retrieval.
com. google. cloud. geminidataanalytics. v1beta. Data Message. Builder
A message produced during data retrieval.
com. google. cloud. geminidataanalytics. v1beta. Data Query
A query for retrieving data.
com. google. cloud. geminidataanalytics. v1beta. Data Query. Builder
A query for retrieving data.
com. google. cloud. geminidataanalytics. v1beta. Data Result
Retrieved data.
com. google. cloud. geminidataanalytics. v1beta. Data Result. Builder
Retrieved data.
com. google. cloud. geminidataanalytics. v1beta. Datasource
A datasource that can be used to answer questions.
com. google. cloud. geminidataanalytics. v1beta. Datasource. Builder
A datasource that can be used to answer questions.
com. google. cloud. geminidataanalytics. v1beta. Datasource Options
Options for datasources configurations.
com. google. cloud. geminidataanalytics. v1beta. Datasource Options. Builder
Options for datasources configurations.
com. google. cloud. geminidataanalytics. v1beta. Datasource Proto
com. google. cloud. geminidataanalytics. v1beta. Datasource References
A collection of references to datasources.
com. google. cloud. geminidataanalytics. v1beta. Datasource References. Builder
A collection of references to datasources.
com. google. cloud. geminidataanalytics. v1beta. Delete Conversation Request
Request for deleting a conversation based on parent and conversation id.
com. google. cloud. geminidataanalytics. v1beta. Delete Conversation Request. Builder
Request for deleting a conversation based on parent and conversation id.
com. google. cloud. geminidataanalytics. v1beta. Delete Data Agent Request
Message for deleting a DataAgent.
com. google. cloud. geminidataanalytics. v1beta. Delete Data Agent Request. Builder
Message for deleting a DataAgent.
com. google. cloud. geminidataanalytics. v1beta. Error Message
An error message from a tool call.
This message is used to represent an error that occurred while an agent was
trying to use a tool. It's important to note that not all errors are
com. google. cloud. geminidataanalytics. v1beta. Error Message. Builder
An error message from a tool call.
This message is used to represent an error that occurred while an agent was
trying to use a tool. It's important to note that not all errors are
com. google. cloud. geminidataanalytics. v1beta. Example Queries
A message containing derived and authored example queries.
com. google. cloud. geminidataanalytics. v1beta. Example Queries. Builder
A message containing derived and authored example queries.
com. google. cloud. geminidataanalytics. v1beta. Example Query
Example of relevant and commonly used SQL query and its corresponding natural
language queries optionally present. Currently only used for BigQuery data
sources.
com. google. cloud. geminidataanalytics. v1beta. Example Query. Builder
Example of relevant and commonly used SQL query and its corresponding natural
language queries optionally present. Currently only used for BigQuery data
sources.
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result
The result of a query execution. The design is generic for all dialects.
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result. Builder
The result of a query execution. The design is generic for all dialects.
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result. Column
Describes a single column in the result set.
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result. Column. Builder
Describes a single column in the result set.
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result. Row
Represents a single row in the result set.
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result. Row. Builder
Represents a single row in the result set.
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result. Value
Represents a single value within a row.
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result. Value. Builder
Represents a single value within a row.
com. google. cloud. geminidataanalytics. v1beta. Field
A field in a schema.
com. google. cloud. geminidataanalytics. v1beta. Field. Builder
A field in a schema.
com. google. cloud. geminidataanalytics. v1beta. Generation Options
Options to control query generation, execution, and response format.
com. google. cloud. geminidataanalytics. v1beta. Generation Options. Builder
Options to control query generation, execution, and response format.
com. google. cloud. geminidataanalytics. v1beta. Get Conversation Request
Request for getting a conversation based on parent and conversation id.
com. google. cloud. geminidataanalytics. v1beta. Get Conversation Request. Builder
Request for getting a conversation based on parent and conversation id.
com. google. cloud. geminidataanalytics. v1beta. Get Data Agent Request
Message for getting a DataAgent.
com. google. cloud. geminidataanalytics. v1beta. Get Data Agent Request. Builder
Message for getting a DataAgent.
com. google. cloud. geminidataanalytics. v1beta. Glossary Term
Definition of a term within a specific domain.
com. google. cloud. geminidataanalytics. v1beta. Glossary Term. Builder
Definition of a term within a specific domain.
com. google. cloud. geminidataanalytics. v1beta. List Accessible Data Agents Request
Message for requesting list of accessible DataAgents.
com. google. cloud. geminidataanalytics. v1beta. List Accessible Data Agents Request. Builder
Message for requesting list of accessible DataAgents.
com. google. cloud. geminidataanalytics. v1beta. List Accessible Data Agents Response
Message for response to listing accessible DataAgents.
com. google. cloud. geminidataanalytics. v1beta. List Accessible Data Agents Response. Builder
Message for response to listing accessible DataAgents.
com. google. cloud. geminidataanalytics. v1beta. List Conversations Request
Request for listing conversations based on parent.
com. google. cloud. geminidataanalytics. v1beta. List Conversations Request. Builder
Request for listing conversations based on parent.
com. google. cloud. geminidataanalytics. v1beta. List Conversations Response
Message for response to listing conversations.
com. google. cloud. geminidataanalytics. v1beta. List Conversations Response. Builder
Message for response to listing conversations.
com. google. cloud. geminidataanalytics. v1beta. List Data Agents Request
Message for requesting list of DataAgents.
com. google. cloud. geminidataanalytics. v1beta. List Data Agents Request. Builder
Message for requesting list of DataAgents.
com. google. cloud. geminidataanalytics. v1beta. List Data Agents Response
Message for response to listing DataAgents.
com. google. cloud. geminidataanalytics. v1beta. List Data Agents Response. Builder
Message for response to listing DataAgents.
com. google. cloud. geminidataanalytics. v1beta. List Messages Request
Request for listing chat messages based on parent and conversation_id.
com. google. cloud. geminidataanalytics. v1beta. List Messages Request. Builder
Request for listing chat messages based on parent and conversation_id.
com. google. cloud. geminidataanalytics. v1beta. List Messages Response
Response for listing chat messages.
com. google. cloud. geminidataanalytics. v1beta. List Messages Response. Builder
Response for listing chat messages.
com. google. cloud. geminidataanalytics. v1beta. Location Name
com. google. cloud. geminidataanalytics. v1beta. Location Name. Builder
Builder for projects/{project}/locations/{location}.
com. google. cloud. geminidataanalytics. v1beta. Looker Explore Reference
Message representing a reference to a single Looker explore.
com. google. cloud. geminidataanalytics. v1beta. Looker Explore Reference. Builder
Message representing a reference to a single Looker explore.
com. google. cloud. geminidataanalytics. v1beta. Looker Explore References
Message representing references to Looker explores.
com. google. cloud. geminidataanalytics. v1beta. Looker Explore References. Builder
Message representing references to Looker explores.
com. google. cloud. geminidataanalytics. v1beta. Looker Golden Query
A golden query for Looker, including natural language questions and a
corresponding Looker Query. Analogous to ExampleQuery.
com. google. cloud. geminidataanalytics. v1beta. Looker Golden Query. Builder
A golden query for Looker, including natural language questions and a
corresponding Looker Query. Analogous to ExampleQuery.
com. google. cloud. geminidataanalytics. v1beta. Looker Query
Looker Query Object
Looker API
documentation .
com. google. cloud. geminidataanalytics. v1beta. Looker Query. Builder
Looker Query Object
Looker API
documentation .
com. google. cloud. geminidataanalytics. v1beta. Looker Query. Filter
A Looker query filter.
com. google. cloud. geminidataanalytics. v1beta. Looker Query. Filter. Builder
A Looker query filter.
com. google. cloud. geminidataanalytics. v1beta. Message
A message from an interaction between the user and the system.
com. google. cloud. geminidataanalytics. v1beta. Message. Builder
A message from an interaction between the user and the system.
com. google. cloud. geminidataanalytics. v1beta.O Auth Credentials
Represents OAuth credentials.
com. google. cloud. geminidataanalytics. v1beta.O Auth Credentials. Builder
Represents OAuth credentials.
com. google. cloud. geminidataanalytics. v1beta.O Auth Credentials. Secret Based
The name of the secret containing the access token.
Represents secret-based OAuth credentials.
com. google. cloud. geminidataanalytics. v1beta.O Auth Credentials. Secret Based. Builder
The name of the secret containing the access token.
Represents secret-based OAuth credentials.
com. google. cloud. geminidataanalytics. v1beta.O Auth Credentials. Token Based
Read more about Looker access tokens here:
https://developers.looker.com/api/advanced-usage/looker-api-oauth
com. google. cloud. geminidataanalytics. v1beta.O Auth Credentials. Token Based. Builder
Read more about Looker access tokens here:
https://developers.looker.com/api/advanced-usage/looker-api-oauth
com. google. cloud. geminidataanalytics. v1beta. Operation Metadata
Represents the metadata of the long-running operation.
com. google. cloud. geminidataanalytics. v1beta. Operation Metadata. Builder
Represents the metadata of the long-running operation.
com. google. cloud. geminidataanalytics. v1beta. Parameterized Secure View Parameters
Parameters for Parameterized Secure Views (PSV). These parameters are
used to enforce row-level security during SQL generation and query
execution.
com. google. cloud. geminidataanalytics. v1beta. Parameterized Secure View Parameters. Builder
Parameters for Parameterized Secure Views (PSV). These parameters are
used to enforce row-level security during SQL generation and query
execution.
com. google. cloud. geminidataanalytics. v1beta. Private Looker Instance Info
Message representing a private Looker instance info required if the Looker
instance is behind a private network.
com. google. cloud. geminidataanalytics. v1beta. Private Looker Instance Info. Builder
Message representing a private Looker instance info required if the Looker
instance is behind a private network.
com. google. cloud. geminidataanalytics. v1beta. Project Name
com. google. cloud. geminidataanalytics. v1beta. Project Name. Builder
Builder for projects/{project}.
com. google. cloud. geminidataanalytics. v1beta. Query Data Context
References to data sources and context to use for the query.
com. google. cloud. geminidataanalytics. v1beta. Query Data Context. Builder
References to data sources and context to use for the query.
com. google. cloud. geminidataanalytics. v1beta. Query Data Request
Request to query data from a natural language query.
com. google. cloud. geminidataanalytics. v1beta. Query Data Request. Builder
Request to query data from a natural language query.
com. google. cloud. geminidataanalytics. v1beta. Query Data Response
Response containing the generated query and related information.
com. google. cloud. geminidataanalytics. v1beta. Query Data Response. Builder
Response containing the generated query and related information.
com. google. cloud. geminidataanalytics. v1beta. Schema
The schema of a Datasource or QueryResult instance.
com. google. cloud. geminidataanalytics. v1beta. Schema. Builder
The schema of a Datasource or QueryResult instance.
com. google. cloud. geminidataanalytics. v1beta. Schema Message
A message produced during schema resolution.
com. google. cloud. geminidataanalytics. v1beta. Schema Message. Builder
A message produced during schema resolution.
com. google. cloud. geminidataanalytics. v1beta. Schema Query
A query for resolving the schema relevant to the posed question.
com. google. cloud. geminidataanalytics. v1beta. Schema Query. Builder
A query for resolving the schema relevant to the posed question.
com. google. cloud. geminidataanalytics. v1beta. Schema Result
The result of schema resolution.
com. google. cloud. geminidataanalytics. v1beta. Schema Result. Builder
The result of schema resolution.
com. google. cloud. geminidataanalytics. v1beta. Spanner Database Reference
Message representing a reference to a single Spanner database.
com. google. cloud. geminidataanalytics. v1beta. Spanner Database Reference. Builder
Message representing a reference to a single Spanner database.
com. google. cloud. geminidataanalytics. v1beta. Spanner Reference
Message representing reference to a Spanner database and agent context.
Only supported for the QueryData method.
com. google. cloud. geminidataanalytics. v1beta. Spanner Reference. Builder
Message representing reference to a Spanner database and agent context.
Only supported for the QueryData method.
com. google. cloud. geminidataanalytics. v1beta. Storage Message
A stored message containing user message or system message.
com. google. cloud. geminidataanalytics. v1beta. Storage Message. Builder
A stored message containing user message or system message.
com. google. cloud. geminidataanalytics. v1beta. Studio Datasource Reference
Message representing a reference to a single Looker Studio datasource.
com. google. cloud. geminidataanalytics. v1beta. Studio Datasource Reference. Builder
Message representing a reference to a single Looker Studio datasource.
com. google. cloud. geminidataanalytics. v1beta. Studio Datasource References
Message representing references to Looker Studio datasources.
com. google. cloud. geminidataanalytics. v1beta. Studio Datasource References. Builder
Message representing references to Looker Studio datasources.
com. google. cloud. geminidataanalytics. v1beta. System Message
A message from the system in response to the user. This message can also be a
message from the user as historical context for multiturn conversations with
the system.
com. google. cloud. geminidataanalytics. v1beta. System Message. Builder
A message from the system in response to the user. This message can also be a
message from the user as historical context for multiturn conversations with
the system.
com. google. cloud. geminidataanalytics. v1beta. Text Message
A multi-part text message.
com. google. cloud. geminidataanalytics. v1beta. Text Message. Builder
A multi-part text message.
com. google. cloud. geminidataanalytics. v1beta. Update Data Agent Request
Message for updating a DataAgent.
com. google. cloud. geminidataanalytics. v1beta. Update Data Agent Request. Builder
Message for updating a DataAgent.
com. google. cloud. geminidataanalytics. v1beta. User Message
A message from the user that is interacting with the system.
com. google. cloud. geminidataanalytics. v1beta. User Message. Builder
A message from the user that is interacting with the system.
Interfaces
Interface
Description
com. google. cloud. geminidataanalytics. v1beta. Agent Context Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Alloy Db Database Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Alloy Db Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Analysis Event Or Builder
com. google. cloud. geminidataanalytics. v1beta. Analysis Message Or Builder
com. google. cloud. geminidataanalytics. v1beta. Analysis Options. Python Or Builder
com. google. cloud. geminidataanalytics. v1beta. Analysis Options Or Builder
com. google. cloud. geminidataanalytics. v1beta. Analysis Query Or Builder
com. google. cloud. geminidataanalytics. v1beta. Big Query Job Or Builder
com. google. cloud. geminidataanalytics. v1beta. Big Query Table Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Big Query Table References Or Builder
com. google. cloud. geminidataanalytics. v1beta. Blob Or Builder
com. google. cloud. geminidataanalytics. v1beta. Chart Message Or Builder
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Image Options. No Image Or Builder
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Image Options. Svg Options Or Builder
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Image Options Or Builder
com. google. cloud. geminidataanalytics. v1beta. Chart Options Or Builder
com. google. cloud. geminidataanalytics. v1beta. Chart Query Or Builder
com. google. cloud. geminidataanalytics. v1beta. Chart Result Or Builder
com. google. cloud. geminidataanalytics. v1beta. Chat Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. Clarification Message Or Builder
com. google. cloud. geminidataanalytics. v1beta. Clarification Question Or Builder
com. google. cloud. geminidataanalytics. v1beta. Client Managed Resource Context Or Builder
com. google. cloud. geminidataanalytics. v1beta. Cloud Sql Database Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Cloud Sql Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Context. Schema Relationship. Schema Paths Or Builder
com. google. cloud. geminidataanalytics. v1beta. Context. Schema Relationship Or Builder
com. google. cloud. geminidataanalytics. v1beta. Context Or Builder
com. google. cloud. geminidataanalytics. v1beta. Conversation Options Or Builder
com. google. cloud. geminidataanalytics. v1beta. Conversation Or Builder
com. google. cloud. geminidataanalytics. v1beta. Conversation Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Create Conversation Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. Create Data Agent Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. Credentials Or Builder
com. google. cloud. geminidataanalytics. v1beta. Data Agent Context Or Builder
com. google. cloud. geminidataanalytics. v1beta. Data Agent Or Builder
com. google. cloud. geminidataanalytics. v1beta. Data Agent Service Grpc. Async Service
Service describing handlers for resources.
com. google. cloud. geminidataanalytics. v1beta. Data Analytics Agent Or Builder
com. google. cloud. geminidataanalytics. v1beta. Data Chat Service Grpc. Async Service
Service to ask a natural language question on top of BigQuery
and Looker Studio datasources to get back streamed responses of various kinds
to help provide a rich conversational answer.
com. google. cloud. geminidataanalytics. v1beta. Data Filter Or Builder
com. google. cloud. geminidataanalytics. v1beta. Data Message Or Builder
com. google. cloud. geminidataanalytics. v1beta. Data Query Or Builder
com. google. cloud. geminidataanalytics. v1beta. Data Result Or Builder
com. google. cloud. geminidataanalytics. v1beta. Datasource Options Or Builder
com. google. cloud. geminidataanalytics. v1beta. Datasource Or Builder
com. google. cloud. geminidataanalytics. v1beta. Datasource References Or Builder
com. google. cloud. geminidataanalytics. v1beta. Delete Conversation Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. Delete Data Agent Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. Error Message Or Builder
com. google. cloud. geminidataanalytics. v1beta. Example Queries Or Builder
com. google. cloud. geminidataanalytics. v1beta. Example Query Or Builder
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result. Column Or Builder
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result. Row Or Builder
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result. Value Or Builder
com. google. cloud. geminidataanalytics. v1beta. Executed Query Result Or Builder
com. google. cloud. geminidataanalytics. v1beta. Field Or Builder
com. google. cloud. geminidataanalytics. v1beta. Generation Options Or Builder
com. google. cloud. geminidataanalytics. v1beta. Get Conversation Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. Get Data Agent Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. Glossary Term Or Builder
com. google. cloud. geminidataanalytics. v1beta. List Accessible Data Agents Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. List Accessible Data Agents Response Or Builder
com. google. cloud. geminidataanalytics. v1beta. List Conversations Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. List Conversations Response Or Builder
com. google. cloud. geminidataanalytics. v1beta. List Data Agents Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. List Data Agents Response Or Builder
com. google. cloud. geminidataanalytics. v1beta. List Messages Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. List Messages Response Or Builder
com. google. cloud. geminidataanalytics. v1beta. Looker Explore Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Looker Explore References Or Builder
com. google. cloud. geminidataanalytics. v1beta. Looker Golden Query Or Builder
com. google. cloud. geminidataanalytics. v1beta. Looker Query. Filter Or Builder
com. google. cloud. geminidataanalytics. v1beta. Looker Query Or Builder
com. google. cloud. geminidataanalytics. v1beta. Message Or Builder
com. google. cloud. geminidataanalytics. v1beta.O Auth Credentials. Secret Based Or Builder
com. google. cloud. geminidataanalytics. v1beta.O Auth Credentials. Token Based Or Builder
com. google. cloud. geminidataanalytics. v1beta.O Auth Credentials Or Builder
com. google. cloud. geminidataanalytics. v1beta. Operation Metadata Or Builder
com. google. cloud. geminidataanalytics. v1beta. Parameterized Secure View Parameters Or Builder
com. google. cloud. geminidataanalytics. v1beta. Private Looker Instance Info Or Builder
com. google. cloud. geminidataanalytics. v1beta. Query Data Context Or Builder
com. google. cloud. geminidataanalytics. v1beta. Query Data Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. Query Data Response Or Builder
com. google. cloud. geminidataanalytics. v1beta. Schema Message Or Builder
com. google. cloud. geminidataanalytics. v1beta. Schema Or Builder
com. google. cloud. geminidataanalytics. v1beta. Schema Query Or Builder
com. google. cloud. geminidataanalytics. v1beta. Schema Result Or Builder
com. google. cloud. geminidataanalytics. v1beta. Spanner Database Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Spanner Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Storage Message Or Builder
com. google. cloud. geminidataanalytics. v1beta. Studio Datasource Reference Or Builder
com. google. cloud. geminidataanalytics. v1beta. Studio Datasource References Or Builder
com. google. cloud. geminidataanalytics. v1beta. System Message Or Builder
com. google. cloud. geminidataanalytics. v1beta. Text Message Or Builder
com. google. cloud. geminidataanalytics. v1beta. Update Data Agent Request Or Builder
com. google. cloud. geminidataanalytics. v1beta. User Message Or Builder
Enums
Enum
Description
com. google. cloud. geminidataanalytics. v1beta. Analysis Event. Kind Case
com. google. cloud. geminidataanalytics. v1beta. Analysis Message. Kind Case
com. google. cloud. geminidataanalytics. v1beta. Chart Message. Kind Case
com. google. cloud. geminidataanalytics. v1beta. Chart Options. Image Options. Kind Case
com. google. cloud. geminidataanalytics. v1beta. Chat Request. Context Provider Case
com. google. cloud. geminidataanalytics. v1beta. Chat Request. Thinking Mode
Mode of thinking for the agent.
com. google. cloud. geminidataanalytics. v1beta. Clarification Question. Clarification Question Type
The type of clarification question.
This enum may be extended with new values in the future.
com. google. cloud. geminidataanalytics. v1beta. Clarification Question. Selection Mode
The selection mode for the clarification question.
com. google. cloud. geminidataanalytics. v1beta. Cloud Sql Database Reference. Engine
The database engine.
com. google. cloud. geminidataanalytics. v1beta. Context. Schema Relationship. Source
Source which generated the schema relation edge.
com. google. cloud. geminidataanalytics. v1beta. Credentials. Kind Case
com. google. cloud. geminidataanalytics. v1beta. Data Agent. Type Case
com. google. cloud. geminidataanalytics. v1beta. Data Agent Context. Context Version
List of context versions supported by DCS.
There are two versions of context. This is to maintain versioning for the
data agent.
com. google. cloud. geminidataanalytics. v1beta. Data Filter Type
The type of filter present on a datasource, such as ALWAYS_FILTER.
com. google. cloud. geminidataanalytics. v1beta. Data Message. Kind Case
com. google. cloud. geminidataanalytics. v1beta. Data Query. Query Type Case
com. google. cloud. geminidataanalytics. v1beta. Datasource. Reference Case
com. google. cloud. geminidataanalytics. v1beta. Datasource References. References Case
com. google. cloud. geminidataanalytics. v1beta. Example Query. Query Case
com. google. cloud. geminidataanalytics. v1beta. List Accessible Data Agents Request. Creator Filter
Filter for the creator of the agent.
com. google. cloud. geminidataanalytics. v1beta. Looker Explore Reference. Instance Case
com. google. cloud. geminidataanalytics. v1beta. Message. Kind Case
com. google. cloud. geminidataanalytics. v1beta.O Auth Credentials. Kind Case
com. google. cloud. geminidataanalytics. v1beta. Schema Message. Kind Case
com. google. cloud. geminidataanalytics. v1beta. Spanner Database Reference. Engine
The database engine.
com. google. cloud. geminidataanalytics. v1beta. System Message. Kind Case
com. google. cloud. geminidataanalytics. v1beta. Text Message. Text Type
The type of the text message.
com. google. cloud. geminidataanalytics. v1beta. User Message. Kind Case
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
