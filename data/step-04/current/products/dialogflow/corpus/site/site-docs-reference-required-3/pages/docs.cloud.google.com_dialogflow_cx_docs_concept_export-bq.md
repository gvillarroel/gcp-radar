---
title: "Conversation history export to BigQuery \_|\_ Dialogflow CX \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq
  title: "Conversation history export to BigQuery \_|\_ Dialogflow CX \_|\_ Google\
    \ Cloud Documentation"
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
Conversation history export to BigQuery
Stay organized with collections
Save and categorize content based on your preferences.
You can export
conversation history
to
BigQuery .
Once configured, all live conversation history is written
to your BigQuery table.
This provides you with advanced analysis tools
that can help you debug and improve your agent
and to discover patterns in conversation data.
Limitations
The following limitations apply:
A maximum of 500 turns can be exported for each conversation.
Cross project permissions
If your Dialogflow agent and BigQuery data are not in the
same project, the service account
associated with your Dialogflow Google Cloud project must also have the
roles/bigquery.dataEditor IAM permission for the BigQuery dataset in
your BigQuery Google Cloud project.
Service account format: service-<dialogflow-project-number>@gcp-sa-dialogflow.iam.gserviceaccount.com
The user configuring the export in Dialogflow must have permissions on
the BigQuery project. If they don't, the BigQuery project
won't appear as an option in the Dialogflow Console.
The minimum permission required on the BigQuery project in order for
the user to see it in Dialogflow is resourcemanager.projects.get .
Alternatively, you can assign one of the following Google Cloud predefined roles
that include this permission but don't require the user to have access to the
BigQuery dataset: roles/browser or roles/bigquery.metadataViewer .
Table description
Each row of the table contains one conversational turn
with the following columns:
Column
Type
Description
project_id
STRING
The project ID.
agent_id
STRING
The agent ID.
conversation_name
STRING
The fully qualified resource name for the session.
turn_position
INTEGER
The conversational turn number.
request_time
TIMESTAMP
The time of the conversational turn.
language_code
STRING
The language tag .
request
JSON
The detect intent request.
response
JSON
The detect intent response.
partial_responses
JSON
Partial responses if applicable.
derived_data
JSON
Additional metadata for this conversational turn.
conversation_signals
JSON
NLU related analytics data. See ConversationSignals for the JSON schema.
bot_answer_feedback
JSON
Answer feedback if provided.
Configuration
To configure conversation history export:
Ensure that
conversation history
is enabled.
Follow the BigQuery
dataset creation guide
to create a dataset.
Note the dataset name, as you will need this in the next step.
Follow the BigQuery
table creation guide
to create a table with a SQL schema definition.
Use the following SQL statement for creation:
CREATE TABLE < your_dataset_name > . dialogflow_bigquery_export_data (
project_id STRING ,
agent_id STRING ,
conversation_name STRING ,
turn_position INTEGER ,
request_time TIMESTAMP ,
language_code STRING ,
request JSON ,
response JSON ,
partial_responses JSON ,
derived_data JSON ,
conversation_signals JSON ,
bot_answer_feedback JSON
);
Configure your
agent settings
to enable BigQuery export, and to provide the dataset and table names
created above.
Note: If your agent is protected by a Customer Managed Encryption Key (CMEK),
you will see a warning if the destination BigQuery table is not protected by
CMEK.
Previous
arrow_back
Cloud logging
Next
Change history
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
