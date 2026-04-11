---
title: "Filter by prefix \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/filtering-objects-from-transfers
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/filtering-objects-from-transfers
  title: "Filter by prefix \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Send feedback
Filter by prefix
Stay organized with collections
Save and categorize content based on your preferences.
This guide explains how to use include and exclude prefixes to control which
files are transferred.
Overview
Storage Transfer Service allows you to filter data from Amazon S3, Microsoft Azure Blob Storage and
Cloud Storage sources using prefixes. A prefix is a string of characters
at the beginning of a path that specifies a set of objects.
You can use prefix filters in three ways:
Include prefixes : Only objects matching the specified prefixes are
transferred.
Exclude prefixes : Objects matching the specified prefixes are omitted
from the transfer.
Both together : You can use include and exclude prefixes simultaneously
for more granular control. When used together, every exclude prefix must begin
with one of the specified include prefixes.
If you don't specify any prefixes, all objects in the source bucket are
transferred.
Rules
The following rules apply to prefixes:
No leading slashes : Do not include a leading slash in a prefix. For the
path s3://my-bucket/logs/2025/requests.gz , the correct prefix is
logs/2025/requests.gz .
Partial matches : Prefixes work by partial matching. For example, the
prefix path matches both path_1/ and path_2/ .
No wildcards : Wildcards are not supported.
Relative to source folder : If your transfer source is a specific folder,
prefixes are evaluated relative to that folder. For a source of
gs://my-bucket/data/ , an include prefix of reports matches all files
under gs://my-bucket/data/reports .
Distinct include prefixes : Each include prefix must define a unique part
of the object namespace. You cannot use an include prefix that is already
covered by another include prefix. For example, you cannot specify both
data/ and data/reports/ as include prefixes.
Exclude prefix dependency : When using include and exclude prefixes
together, every exclude prefix must begin with one of the specified include
prefixes. For example, if path is an include prefix, valid exclude
prefixes could be path/b or pathway . This rule does not apply if you are
only using exclude prefixes.
Maximum of 1000 prefixes : A single transfer job supports up to 1000
prefixes. You can split a transfer into multiple jobs if additional prefixes
are required.
For more general information about prefixes, see
Listing Keys Hierarchically Using a Prefix and
Delimiter
in the Amazon S3 documentation or the Objects list method for Cloud Storage.
How to specify prefixes
Cloud console
To specify include and exclude prefixes using the
Cloud console, enter the values when creating a new transfer
or when updating an existing transfer .
gcloud CLI
To specify include and exclude prefixes using the gcloud CLI, pass the
--include-prefixes and --exclude-prefixes flags to the
gcloud transfer jobs create command or the gcloud transfer jobs update
command:
gcloud transfer jobs create SOURCE DESTINATION \
--include-prefixes = "path_1/,path_2/" --exclude-prefixes = "path_1/subpath_2/"
Separate multiple prefixes with commas, omitting spaces after the commas.
For example, --include-prefixes="foo,bar" .
REST
To specify include and exclude prefixes using the REST API, use the
includePrefixes[] and excludePrefixes[] fields:
{
"description" : "YOUR DESCRIPTION" ,
"status" : "ENABLED" ,
"projectId" : "PROJECT_ID" ,
"schedule" : {
"scheduleStartDate" : {
"day" : 1 ,
"month" : 1 ,
"year" : 2015
},
"startTimeOfDay" : {
"hours" : 1 ,
"minutes" : 1
}
},
"transferSpec" : {
"gcsDataSource" : {
"bucketName" : "GCS_SOURCE_NAME"
},
"gcsDataSink" : {
"bucketName" : "GCS_SINK_NAME"
},
"transferOptions" : {
"deleteObjectsFromSourceAfterTransfer" : true
},
"objectConditions" : {
"includePrefixes" : [
"path_1/" ,
"path_2/"
],
"excludePrefixes" : [
"path_1/subpath_2/object_5"
]
}
}
}
For more information, refer to the ObjectConditions reference.
Example objects and paths
The following examples use this sample list of objects:
xx://bucketname/object_1
xx://bucketname/object_2
xx://bucketname/path_1/object_3
xx://bucketname/path_1/subpath_1/object_4
xx://bucketname/path_1/subpath_2/object_5
xx://bucketname/path_2/object_6
xx://bucketname/path_2/subpath_3/object_7
xx://bucketname/path_2/subpath_4/object_8
Use include prefixes
To transfer only objects under path_1/ , use the following prefix:
path_1/
This includes objects under path_1/ . The following objects are included in
the transfer:
xx://bucketname/object_1
xx://bucketname/object_2
xx://bucketname/path_1/object_3
xx://bucketname/path_1/subpath_1/object_4
xx://bucketname/path_1/subpath_2/object_5
xx://bucketname/path_2/object_6
xx://bucketname/path_2/subpath_3/object_7
xx://bucketname/path_2/subpath_4/object_8
You can specify multiple paths to include. For example, you can pass
the following:
path_1/subpath_2/
path_1/subpath_3/
In this case, the transfer includes the following objects:
xx://bucketname/object_1
xx://bucketname/object_2
xx://bucketname/path_1/object_3
xx://bucketname/path_1/subpath_1/object_4
xx://bucketname/path_1/subpath_2/object_5
xx://bucketname/path_2/object_6
xx://bucketname/path_2/subpath_3/object_7
xx://bucketname/path_2/subpath_4/object_8
Partial matches are supported. For example:
path
The following objects are transferred:
xx://bucketname/object_1
xx://bucketname/object_2
xx://bucketname/path_1/object_3
xx://bucketname/path_1/subpath_1/object_4
xx://bucketname/path_1/subpath_2/object_5
xx://bucketname/path_2/object_6
xx://bucketname/path_2/subpath_3/object_7
xx://bucketname/path_2/subpath_4/object_8
When you use include prefixes, paths that you don't specifically include aren't
transferred to the Cloud Storage destination bucket.
Exclude prefixes
Using exclude prefixes when creating a transfer instructs Storage Transfer Service to
ignore the listed paths for transfer.
To exclude objects under path_1/ , pass the following prefix:
path_1/
This excludes objects under path_1/ . In this case, the following objects are
included in the transfer:
xx://bucketname/object_1
xx://bucketname/object_2
xx://bucketname/path_1/object_3
xx://bucketname/path_1/subpath_1/object_4
xx://bucketname/path_1/subpath_2/object_5
xx://bucketname/path_2/object_6
xx://bucketname/path_2/subpath_3/object_7
xx://bucketname/path_2/subpath_4/object_8
You can specify multiple paths to exclude. For example, you can pass
the following:
path_1/subpath_2/
path_2/subpath_3/
In this case, the transfer includes the following objects:
xx://bucketname/object_1
xx://bucketname/object_2
xx://bucketname/path_1/object_3
xx://bucketname/path_1/subpath_1/object_4
xx://bucketname/path_1/subpath_2/object_5
xx://bucketname/path_2/object_6
xx://bucketname/path_2/subpath_3/object_7
xx://bucketname/path_2/subpath_4/object_8
Including and excluding paths simultaneously
You can apply an exclude prefix and an include prefix together, in which case
the exclude prefix limits what the include prefix includes in the
transfer.
When specifying both types of prefix, each exclude prefix must start with a
path that is specified in an include prefix.
For example, to include objects under path_1/ and exclude objects under
subpath_1/ pass the following:
include: path_1/
exclude: path_1/subpath_1/
In this case, the transfer includes the following objects:
xx://bucketname/object_1
xx://bucketname/object_2
xx://bucketname/path_1/object_3
xx://bucketname/path_1/subpath_1/object_4
xx://bucketname/path_1/subpath_2/object_5
xx://bucketname/path_2/object_6
xx://bucketname/path_2/subpath_3/object_7
xx://bucketname/path_2/subpath_4/object_8
To include all objects under path_1/ and path_2/ , except items in either
path_1/subpath_1/ or path_2/subpath_3/ , pass the following:
include: path_1/
path_2/
exclude: path_1/subpath_1/
path_2/subpath_3/
In this case, the transfer includes the following objects:
xx://bucketname/object_1
xx://bucketname/object_2
xx://bucketname/path_1/object_3
xx://bucketname/path_1/subpath_1/object_4
xx://bucketname/path_1/subpath_2/object_5
xx://bucketname/path_2/object_6
xx://bucketname/path_2/subpath_3/object_7
xx://bucketname/path_2/subpath_4/object_8
Common mistakes to avoid
Here are examples of incorrect configurations and how to fix them.
Including a path that is used in another include prefix
An include prefix cannot be a subdirectory of another include prefix.
Incorrect : The prefix path_1/subpath_1 is already covered by path_1/.
include: path_1/
path_1/subpath_1
Correct : To fix this, remove the redundant, more specific prefix.
include: path_1/
The exclude prefix doesn't match an include prefix
When used together, an exclude prefix must start with one of the include
prefixes.
Incorrect : The subpath_1 prefix does not start with either path_1/ or
path_2/ .
include: path_1/
path_2/
exclude: subpath_1
Correct : Ensure the exclude prefix contains the full path from an include
prefix.
include: path_1/
path_2/
exclude: path_1/subpath_1/
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
