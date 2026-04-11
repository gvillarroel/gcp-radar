---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/changelog
  title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Changelog
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
PyPI History
0.12.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
0.11.0 (2026-03-12)
Documentation
update field comments for generated_looker_query in DataMessage ( 505bc9725fec0b2238a1fc102967f68027f9afdf )
Features
add ParameterizedSecureViewParameters message and field for PSV support ( 505bc9725fec0b2238a1fc102967f68027f9afdf )
add ThinkingMode enum and field to control agent thinking mode ( 505bc9725fec0b2238a1fc102967f68027f9afdf )
0.10.0 (2026-02-04)
Documentation
A comment for enum value THOUGHT in enum TextType is changed ( fe0a0b4638a8f5301c30be43fd2f2898ddc6db37 )
Features
add ClarificationMessage, thought-signature, formatted-data ( fe0a0b4638a8f5301c30be43fd2f2898ddc6db37 )
0.9.0 (2026-01-15)
Features
added sync APIs for the CRUD operations of Data Agent ( 1a81689422520562771f36a58575d07e1ee18dd5 )
0.8.0 (2026-01-08)
Documentation
specify the data sources supported only by the QueryData API ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
Features
add LookerGoldenQuery to Context ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
add a new data sources for QueryData API ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message CloudSqlDatabaseReference is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new field spanner_reference is added to message .google.cloud.geminidataanalytics.v1beta.DatasourceReferences ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
add a QueryData API for NL2SQL conversion ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message QueryDataContext is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message SpannerReference is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new field cloud_sql_reference is added to message .google.cloud.geminidataanalytics.v1beta.Datasource ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new field alloydb is added to message .google.cloud.geminidataanalytics.v1beta.DatasourceReferences ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new field spanner_reference is added to message .google.cloud.geminidataanalytics.v1beta.Datasource ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message SpannerDatabaseReference is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message CloudSqlReference is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message AgentContextReference is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message GenerationOptions is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new field cloud_sql_reference is added to message .google.cloud.geminidataanalytics.v1beta.DatasourceReferences ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new method QueryData is added to service DataChatService ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new field alloy_db_reference is added to message .google.cloud.geminidataanalytics.v1beta.Datasource ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message ExecutedQueryResult is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message AlloyDbReference is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message QueryDataResponse is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message QueryDataRequest is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
A new message AlloyDbDatabaseReference is added ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.7.0 (2025-12-11)
Features
add QueryData method ( 4927067384eb6ed2018bb886f90265b7bcfc800e )
0.6.0 (2025-11-12)
Features
Adding a new SchemaRelationship message to define relationships between table schema ( 5797f43bd1009b50b0afc62d873118d8b92b4edd )
Adding an ExampleQueries message to surface derived and authored example queries ( 5797f43bd1009b50b0afc62d873118d8b92b4edd )
Adding DatasourceOptions to provide configuration options for datasources ( 5797f43bd1009b50b0afc62d873118d8b92b4edd )
Adding a new TextType PROGRESS to provide informational messages about an agent’s progress for supporting more granular Agent RAG tools ( 5797f43bd1009b50b0afc62d873118d8b92b4edd )
Adding struct_schema to Datasource to support flexible schemas, particularly for Looker datasources ( 5797f43bd1009b50b0afc62d873118d8b92b4edd )
Adding client_managed_resource_context to allow clients to manage their own conversation and agent resources ( 5797f43bd1009b50b0afc62d873118d8b92b4edd )
Adding a DeleteConversation RPC to allow for the deletion of conversations ( 5797f43bd1009b50b0afc62d873118d8b92b4edd )
Adding a GlossaryTerm message to allow users to provide definitions for domain-specific terms ( 5797f43bd1009b50b0afc62d873118d8b92b4edd )
Adding support for LookerQuery within the DataQuery message for retrieving data from Looker explores ( 5797f43bd1009b50b0afc62d873118d8b92b4edd )
0.5.0 (2025-10-16)
Documentation
A comment for field generated_looker_query in message .google.cloud.geminidataanalytics.v1alpha.DataMessage is changed ( 89cd6f54ea4b20b057c43225acc5d6a7cb5496c3 )
Features
added support for Delete Conversatstion ( 89cd6f54ea4b20b057c43225acc5d6a7cb5496c3 )
removed support for Update Conversation ( 89cd6f54ea4b20b057c43225acc5d6a7cb5496c3 )
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
An existing message UpdateConversationRequest is removed ( 89cd6f54ea4b20b057c43225acc5d6a7cb5496c3 )
An existing method UpdateConversation is removed from service DataChatService ( 89cd6f54ea4b20b057c43225acc5d6a7cb5496c3 )
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
0.4.0 (2025-09-24)
⚠ BREAKING CHANGES
An existing message RetrieveBigQueryTableContextsRequest is removed
An existing message RetrieveBigQueryTableContextsResponse is removed
An existing message RetrieveBigQueryTableContextsFromRecentTablesRequest is removed
An existing message RetrieveBigQueryTableContextsFromRecentTablesResponse is removed
An existing message RetrieveBigQueryTableSuggestedDescriptionsRequest is removed
An existing message RetrieveBigQueryTableSuggestedDescriptionsResponse is removed
An existing message RetrieveBigQueryTableSuggestedExamplesRequest is removed
An existing message RetrieveBigQueryTableSuggestedExamplesResponse is removed
An existing message RetrieveBigQueryRecentRelevantTablesRequest is removed
An existing message RetrieveBigQueryRecentRelevantTablesResponse is removed
An existing message DirectLookup is removed
An existing message TableCandidate is removed
An existing service ContextRetrievalService is removed
Bug Fixes
An existing message DirectLookup is removed ( a336184 )
An existing message RetrieveBigQueryRecentRelevantTablesRequest is removed ( a336184 )
An existing message RetrieveBigQueryRecentRelevantTablesResponse is removed ( a336184 )
An existing message RetrieveBigQueryTableContextsFromRecentTablesRequest is removed ( a336184 )
An existing message RetrieveBigQueryTableContextsFromRecentTablesResponse is removed ( a336184 )
An existing message RetrieveBigQueryTableContextsRequest is removed ( a336184 )
An existing message RetrieveBigQueryTableContextsResponse is removed ( a336184 )
An existing message RetrieveBigQueryTableSuggestedDescriptionsRequest is removed ( a336184 )
An existing message RetrieveBigQueryTableSuggestedDescriptionsResponse is removed ( a336184 )
An existing message RetrieveBigQueryTableSuggestedExamplesRequest is removed ( a336184 )
An existing message RetrieveBigQueryTableSuggestedExamplesResponse is removed ( a336184 )
An existing message TableCandidate is removed ( a336184 )
An existing service ContextRetrievalService is removed ( a336184 )
Documentation
A comment for field description in message .google.cloud.geminidataanalytics.v1alpha.Schema is changed ( a336184 )
A comment for field example_queries in message .google.cloud.geminidataanalytics.v1alpha.Context is changed ( a336184 )
A comment for field filter in message .google.cloud.geminidataanalytics.v1alpha.ListConversationsRequest is changed ( a336184 )
A comment for field name in message .google.cloud.geminidataanalytics.v1alpha.Conversation is changed ( a336184 )
A comment for field name in message .google.cloud.geminidataanalytics.v1alpha.DataAgent is changed ( a336184 )
A comment for field synonyms in message .google.cloud.geminidataanalytics.v1alpha.Field is changed ( a336184 )
A comment for field synonyms in message .google.cloud.geminidataanalytics.v1alpha.Schema is changed ( a336184 )
A comment for field tags in message .google.cloud.geminidataanalytics.v1alpha.Field is changed ( a336184 )
A comment for field tags in message .google.cloud.geminidataanalytics.v1alpha.Schema is changed ( a336184 )
A comment for message ExampleQuery is changed ( a336184 )
0.3.0 (2025-08-29)
⚠ BREAKING CHANGES
An existing method RetrieveBigQueryTableContext is removed from service ContextRetrievalService
An existing message RetrieveBigQueryTableContextRequest is removed
An existing message RetrieveBigQueryTableContextResponse is removed
An existing service ContextRetrievalService is removed
Features
A new enum DataFilterType is added ( 25504f3 )
A new field description is added to message .google.cloud.geminidataanalytics.v1alpha.Schema ( 25504f3 )
A new field example_queries is added to message .google.cloud.geminidataanalytics.v1alpha.Context ( 25504f3 )
A new field filters is added to message .google.cloud.geminidataanalytics.v1alpha.Schema ( 25504f3 )
A new field schema is added to message .google.cloud.geminidataanalytics.v1alpha.BigQueryTableReference ( 25504f3 )
A new field synonyms is added to message .google.cloud.geminidataanalytics.v1alpha.Field ( 25504f3 )
A new field synonyms is added to message .google.cloud.geminidataanalytics.v1alpha.Schema ( 25504f3 )
A new field tags is added to message .google.cloud.geminidataanalytics.v1alpha.Field ( 25504f3 )
A new field tags is added to message .google.cloud.geminidataanalytics.v1alpha.Schema ( 25504f3 )
A new field value_format is added to message .google.cloud.geminidataanalytics.v1alpha.Field ( 25504f3 )
A new message DataFilter is added ( 25504f3 )
A new message ExampleQuery is added ( 25504f3 )
Bug Fixes
An existing message RetrieveBigQueryTableContextRequest is removed ( 25504f3 )
An existing message RetrieveBigQueryTableContextResponse is removed ( 25504f3 )
An existing method RetrieveBigQueryTableContext is removed from service ContextRetrievalService ( 25504f3 )
An existing service ContextRetrievalService is removed ( 25504f3 )
Documentation
many comment updates ( 25504f3 )
0.2.0 (2025-07-16)
⚠ BREAKING CHANGES
Correct the resource reference type for the parent field in data_chat_service proto
Features
Add setIAM and getIAM methods for managing agent sharing ( b803c39 )
Bug Fixes
Correct the resource reference type for the parent field in data_chat_service proto ( b803c39 )
Documentation
Update comments for multiple fields in Gemini Data Analytics API ( b803c39 )
0.1.0 (2025-06-19)
Features
add initial files for google.cloud.geminidataanalytics.v1alpha ( #14008 ) ( 4aee4e3 )
Changelog
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
