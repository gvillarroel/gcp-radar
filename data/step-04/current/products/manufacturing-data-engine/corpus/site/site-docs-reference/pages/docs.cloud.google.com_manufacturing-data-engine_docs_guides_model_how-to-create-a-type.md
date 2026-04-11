---
title: "Create a type \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts
source_metadata:
  url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-create-a-type
  title: "Create a type \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
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
Create a type
This guide describes how to create a new type in Manufacturing Data Engine (MDE). You
can create a type using the configuration API or MDE web interface.
Before you begin
Among other configuration settings, types lets you define the
contextualization scope for records of that type - the metadata buckets that can
or must be used to contextualize records. If you want to associate a metadata
bucket to a type, you first need to create the bucket. For more information, see
how to create a metadata bucket .
Types naming
When you create a type, the name must be unique in an MDE
deployment. Type names must not contain spaces or special characters such as
& , @ , or % .
Create a type
To create a type with one metadata bucket association and typical storage
specifications you can use either the terminal or the console interface.
REST
Execute the following REST API request:
POST /configuration/v1/types
{
"archetype" : " ARCHETYPE NAME " ,
"name" : " TYPE_NAME " ,
"metadataBuckets" : [
{
"bucketName" : " BUCKET_NAME " ,
"version" : " BUCKET_VERSION "
}
],
"storageSpecs" : [
{
"sink" : "BIG_QUERY" ,
"disabled" : "false" ,
"materializeCloudMetadata" : "true"
},
{
"sink" : "BIG_TABLE" ,
"disabled" : "false" ,
"materializeCloudMetadata" : "false"
},
{
"sink" : "GCS" ,
"disabled" : "false" ,
"materializeCloudMetadata" : "false"
},
{
"sink" : "PUBSUB_PROTO" ,
"disabled" : "false" ,
"materializeCloudMetadata" : "false"
},
{
"sink" : "PUBSUB_JSON" ,
"disabled" : "false" ,
"materializeCloudMetadata" : "false"
}
]
}
Replace the following:
ARCHETYPE : Name of the archetype. One of DISCRETE_DATA_SERIES ,
CLUSTERED_DISCRETE_DATA_SERIES ,
NUMERIC_DATA_SERIES ,
CLUSTERED_NUMERIC_DATA_SERIES ,
CONTINUOUS_DATA_SERIES ,
CLUSTERED_CONTINUOUS_DATA_SERIES .
TYPE_NAME : Name of the type to be created.
BUCKET_NAME : Name of the bucket to be associated to this type.
BUCKET_VERSION : Version of the bucket to be associated to this
type.
Console
To create a new Type using the Console open the Type section
tab.
All available types in the MDE instance are
listed in this section. The list exposes the basic configuration of each
type, including:
Name : Unique name of the type. All types must have different
unique names.
Storage : Displays the current Storage Specs associated to the
type.
Archetype : Shows the name of the archetype defining the type.
Each type is associated to a unique archetype. The archetype
association can't be modified after the type is created.
Version : Version number of the type. A type can be
versioned. The default view in this list only displays the latest
version available for the type. It is possible to show older version
by un-checking the Show Latest check-box.
Metadata : Renders a color-coded badge for each metadata bucket
associated to the type. Tag metadata buckets are differentiated
from Record metadata buckets using a specific icon inside the badge.
Transformations : Displays a badge for each transformation type
associated to the type.
Enabled : Displays a true value if the type is enabled and
a false value if it isn't. You can enable or disable types at
any time.
Active : When types are created take a certain time to provision.
While types are being provisioned their active status is
false . When they are ready they show as true .
Each new type provisions its own infrastructure to store its tags
and Records for all Data Sinks when it is created. For example, a
new type will create a new Table in BigQuery with the new of the
type and will automatically populate the schema corresponding to its
archetype in it. While the type is provisioned it appears as Non Active .
To create a new Type , click Add New Type . The
following form will appear:
To define a new Type provide its name and its
archetype. Once the type is created, its name and archetype can't be
changed. All types must have different unique names. Archetypes must
be selected from the available archetype list. You can't create or modify
existing archetypes as they are part of the system configuration.
Open the Data Schema section to define, if needed,
the JSON schema defining the data field of the mew type:
The Data Schema needs to be a valid JSON Schema or won't be
accepted. This data schema is not enforced as part of the ingestion
pipelines. In future MDE versions, the data object
in the incoming messages
will be validated against the data schema of its type. The data
schema provides visibility over the structure of the data field
available in the different Data Sinks. Each data schema
specification needs also to be defined according to the characteristics of
the archetype.
Complete the definition of the new type by defining the
metadata buckets that are associated with the type opening the
Metadata buckets section:
To add a metadata bucket to the type click ADD .
Pick from the list of available metadata buckets the ones to add.
Only the latest version of those buckets is displayed. metadata bucket
Versions can be updated later creating a new version of the type. A
new badge appears in the Metadata section after the buckets are added.
Define the default storage settings by opening the
Storage Settings section of the form. Inside this section there is a toggle
button for each data sink available in this instance of MDE.
Select each sink where the tags belonging to this type are be stored
by default. The storage specification is inherited by the tags when
they are created. The storage specification can be modified at the
tag level at any time.
To complete the definition of a new Type select which
transformations are associated to this type by opening the
Transform & Connect section.
Select the transformations to be associated to the type and define
its parameters as per
how to configure a Transformation .
After all the parameters have been added, save the new Type by
clicking CREATE . If any of the parameters are incorrect
an error message is displayed. If the operation is successful, a
confirmation message is displayed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
