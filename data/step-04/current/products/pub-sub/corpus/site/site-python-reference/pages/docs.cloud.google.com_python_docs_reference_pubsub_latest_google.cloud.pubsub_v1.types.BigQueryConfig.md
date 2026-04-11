---
title: "Class BigQueryConfig (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.types.BigQueryConfig
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/pubsub/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.types.BigQueryConfig
  title: "Class BigQueryConfig (2.35.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class BigQueryConfig (2.35.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
2.27.3
2.26.1
2.25.2
2.23.1
2.22.0
2.21.5
2.20.3
2.19.8
2.18.4
2.17.1
2.16.1
2.15.2
2.14.1
2.13.12
2.12.1
2.11.1
2.10.0
2.9.0
2.8.0
2.7.1
2.6.1
2.5.0
2.4.2
2.3.0
2.2.0
2.1.0
2.0.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.1
1.2.0
1.1.0
1.0.2
0.45.0
0.44.0
0.43.0
BigQueryConfig ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for a BigQuery subscription.
Attributes
Name
Description
table
:noindex:
str
Optional. The name of the table to which to
write data, of the form
{projectId}.{datasetId}.{tableId}
use_topic_schema
:noindex:
bool
Optional. When true, use the topic's schema as the columns
to write to in BigQuery, if it exists. use_topic_schema
and use_table_schema cannot be enabled at the same time.
write_metadata
:noindex:
bool
Optional. When true, write the subscription name,
message_id, publish_time, attributes, and ordering_key to
additional columns in the table. The subscription name,
message_id, and publish_time fields are put in their own
columns while all other message properties (other than data)
are written to a JSON object in the attributes column.
drop_unknown_fields
:noindex:
bool
Optional. When true and use_topic_schema is true, any fields
that are a part of the topic schema that are not part of the
BigQuery table schema are dropped when writing to BigQuery.
Otherwise, the schemas must be kept in sync and any messages
with extra fields are not written and remain in the
subscription's backlog.
state
:noindex:
google.pubsub_v1.types.BigQueryConfig.State
Output only. An output-only field that
indicates whether or not the subscription can
receive messages.
use_table_schema
:noindex:
bool
Optional. When true, use the BigQuery table's schema as the
columns to write to in BigQuery. use_table_schema and
use_topic_schema cannot be enabled at the same time.
service_account_email
:noindex:
str
Optional. The service account to use to write to BigQuery.
The subscription creator or updater that specifies this
field must have iam.serviceAccounts.actAs permission on
the service account. If not specified, the Pub/Sub `service
agent
Classes
State
State ( value )
Possible states for a BigQuery subscription.
- Pub/Sub SA has not been granted the `appropriate BigQuery
IAM
permissions <https://cloud.google.com/pubsub/docs/create-subscription#assign_bigquery_service_account>`__
- bigquery.googleapis.com API is not enabled for the project
(`instructions <https://cloud.google.com/service-usage/docs/enable-disable>`__)
NOT_FOUND (3):
Cannot write to the BigQuery table because it
does not exist.
SCHEMA_MISMATCH (4):
Cannot write to the BigQuery table due to a
schema mismatch.
IN_TRANSIT_LOCATION_RESTRICTION (5):
Cannot write to the destination because enforce_in_transit
is set to true and the destination locations are not in the
allowed regions.
VERTEX_AI_LOCATION_RESTRICTION (6):
Cannot write to the BigQuery table because the table is not
in the same location as where Vertex AI models used in
`message_transform`\ s are deployed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
