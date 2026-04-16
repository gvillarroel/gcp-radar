---
title: "Replication API reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref
  title: "Replication API reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Reference
Send feedback
Replication API reference
Stay organized with collections
Save and categorize content based on your preferences.
A replication job is a CDAP application, and can be managed with
CDAP REST APIs .
Note: Your Google Cloud CLI access credentials ( AUTH_TOKEN ) and
CDAP API endpoint ( CDAP_ENDPOINT ) are used often in the commands provided
throughout this guide. Before you use the REST API,
set up environment variables .
Create a replication job
Use the CDAP application deployment API to create a replication job.
PUT -H "Authorization: Bearer ${AUTH_TOKEN}" "${CDAP_ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name "
Parameter
Description
namespace-id
The namespace in which to create the replication job.
If your pipeline belongs to a Basic edition instance, the namespace ID
is always default . If your pipeline belongs to an
Enterprise edition instance, you can
create a namespace .
replicator-name
Replicator name
Example Config
The following (partial) config of the app is sent in the API request body:
{
"name": "my-sample-pipeline",
"artifact": {
"name": "delta-app",
"version": "0.6.2",
"scope": "SYSTEM"
},
"config": {
"connections": [
{
"from": "Oracle (by Datastream)",
"to": "BigQuery"
}
],
"stages": [
{
"name": "Oracle (by Datastream)",
"plugin": {
"name": "OracleDatastream",
"type": "cdcSource",
"artifact": {
"name": "datastream-delta-plugins",
"version": "0.4.2",
"scope": "SYSTEM"
},
"properties": {
"usingExistingStream": "false",
"region": "us-central1",
"connectivityMethod": "ip-allowlisting",
"port": "1521",
"sid": "ORCL",
"replicateExistingData": "true",
"project": "auto-detect",
"dsServiceAccountKey": "auto-detect",
"gcsServiceAccountKey": "auto-detect",
"host": " ",
"user": " ",
"password": " "
}
}
},
{
"name": "BigQuery",
"plugin": {
"name": "bigquery",
"type": "cdcTarget",
"artifact": {
"name": "bigquery-delta-plugins",
"version": "0.6.3",
"scope": "SYSTEM"
},
"properties": {
"project": "auto-detect",
"serviceAccountKey": "auto-detect",
"stagingBucketLocation": "us",
"loadInterval": "90",
"stagingTablePrefix": "_staging_",
"requireManualDrops": "false",
"softDeletes": "false",
"datasetName": "mysampledataset"
}
}
}
],
"tables": [
{
"database": "ORCL",
"table": "MYTABLE1",
"schema": "HR"
},
{
"database": "ORCL",
"table": "MYTABLE2",
"schema": "HR"
}
],
"parallelism": {
"numInstances": 1
},
"tableTransformations": []
}
}
Contents of the replication job config depend on the
Cloud Data Fusion instance and plugin versions. To get started, export an
existing replication job or draft to use as a template for creating
the request body.
See the CDAP application deployment API
for more information.
List replication jobs
Use the CDAP application list API to list replication jobs.
GET -H "Authorization: Bearer ${AUTH_TOKEN}" "${CDAP_ENDPOINT}/v3/namespaces/ namespace-id /apps"
Parameter
Description
namespace-id
The namespace of the replication jobs to list.
If your pipeline belongs to a Basic edition instance, the namespace ID
is always default .
See the CDAP application list API
for more information.
View replication job details
Use the CDAP application detail API to view the details of a replication job.
GET -H "Authorization: Bearer ${AUTH_TOKEN}" "${CDAP_ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name "
Parameter
Description
namespace-id
The namespace of the replication job to view.
If your pipeline belongs to a Basic edition instance, the namespace ID
is always default .
replicator-name
Replicator name
See the CDAP application detail API
for more information.
Start a replication job
Use the CDAP program start API to start a replication job.
POST -H "Authorization: Bearer ${AUTH_TOKEN}" "${CDAP_ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/start"
Parameter
Description
namespace-id
The namespace of the replication job to start.
If your pipeline belongs to a Basic edition instance, the namespace ID
is always default .
replicator-name
Replicator name
See the CDAP program start API
for more information.
Stop a replication job
Use the CDAP program stop API to stop a replication job.
POST -H "Authorization: Bearer ${AUTH_TOKEN}" "${CDAP_ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/stop"
Parameter
Description
namespace-id
The namespace of the replication job to stop.
If your pipeline belongs to a Basic edition instance, the namespace ID
is always default .
replicator-name
Replicator name
See the CDAP program stop API
for more information.
What's next
Learn more about Replication in Cloud Data Fusion .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
