---
title: "Create metadata instances \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts
source_metadata:
  url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/contextualize/how-to-create-a-metadata-instance
  title: "Create metadata instances \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Manufacturing Data Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create metadata instances
This guide describes how to create cloud metadata instances in Metadata
buckets . Manufacturing Data Engine (MDE) provides two ways of creating metadata instances:
Over the Metadata API or web interface (all buckets).
Dynamically from parsers (record and tag buckets only).
Before you begin
To complete this guide, you need the have already
created a metadata bucket .
Metadata instances creation over the metadata API or Console
You can create metadata instances over the Metadata API or the
MDE UI. You
can use the API to load metadata instances into MDE from
external sources and to populate lookup buckets with reference data.
Create a cloud metadata instance with the following instructions for REST API
calls or the console:
REST
POST metadata/v1/buckets/ BUCKET_NAME / BUCKET_VERSION /instances
{
"naturalKey" : " NATURAL_KEY " ,
"instance" : METADATA_INSTANCE_OBJECT
}
Replace the following:
BUCKET_NAME with the name of the bucket in which to create a metadata
instance.
BUCKET_VERSION with the version of the metadata bucket in which to
create a metadata instance.
NATURAL_KEY with the natural key of the metadata instance. It must be
tagName if BUCKET_NAME corresponds to a tag bucket. If BUCKET_NAME
corresponds to a record bucket and the natural key is omitted, the
natural key is automatically set to the hash of the value.
METADATA_INSTANCE_OBJECT with the metadata instance object. The metadata
instance object must conform to the schema defined for the BUCKET_NAME
and BUCKET_VERSION .
Console
Open the 'CLOUD TAGS' section of the top menu of the
UI to create a Metadata Instance . The default
view provides a list of the available Tags in the MDE
instance:
The UI only supports editing Tag Metadata Buckets. Other Bucket types
instances can only be created using the API. To create a
Tag Metadata Instance :
Click the 'ACTIONS' icon in the selected Tag from the list.
Select 'View / Edit' .
In the 'Edit Tag' side menu, locate the 'Tag Metadata' section to
edit or add a new Metadata Instance .
Click the Badge of the Bucket you want to implement. The attributes of the bucket
appear underneath.
Modify the existing attributes or add new ones as needed.
Those attributes are editable and can be modified.
Add the selected values in each box of the form.
After the instance is complete click the 'SAVE' .
The instance is then validated against the Bucket
schema(s). If the validation is successful, the instance is stored and a
success message is displayed. This instance becomes the current valid
instance qualifying the new Records received for this Tag.
Metadata instances creation dynamically from parsers
Metadata instances can be created dynamically from parsers when you use the
lookup by value method of resolving metadata instance references. When you use
the lookup by value method, and the latest metadata instance value for the
provided natural key does not exist, MDE automatically creates
a new metadata instance for the natural key from the instance object defined
the in the proto record. See the documentation on
how to resolve metadata instance_id by instance value
for more details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
