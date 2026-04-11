---
title: "Class BigQueryDestinationConfig (1.18.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.types.BigQueryDestinationConfig
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastream/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.types.BigQueryDestinationConfig
  title: "Class BigQueryDestinationConfig (1.18.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Class BigQueryDestinationConfig (1.18.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.18.0 (latest)
1.17.0
1.16.0
1.15.0
1.14.1
1.13.2
1.12.0
1.11.0
1.10.1
1.9.5
1.8.0
1.7.0
1.6.1
1.5.1
1.4.1
1.3.0
1.2.2
1.1.1
1.0.2
0.4.3
0.3.1
0.2.0
0.1.3
BigQueryDestinationConfig ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
BigQuery destination configuration
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
single_target_dataset
google.cloud.datastream_v1.types.BigQueryDestinationConfig.SingleTargetDataset
Single destination dataset.
This field is a member of oneof _ dataset_config .
source_hierarchy_datasets
google.cloud.datastream_v1.types.BigQueryDestinationConfig.SourceHierarchyDatasets
Source hierarchy datasets.
This field is a member of oneof _ dataset_config .
data_freshness
google.protobuf.duration_pb2.Duration
The guaranteed data freshness (in seconds)
when querying tables created by the stream.
Editing this field will only affect new tables
created in the future, but existing tables will
not be impacted. Lower values mean that queries
will return fresher data, but may result in
higher cost.
blmt_config
google.cloud.datastream_v1.types.BigQueryDestinationConfig.BlmtConfig
Optional. Big Lake Managed Tables (BLMT)
configuration.
merge
google.cloud.datastream_v1.types.BigQueryDestinationConfig.Merge
The standard mode
This field is a member of oneof _ write_mode .
append_only
google.cloud.datastream_v1.types.BigQueryDestinationConfig.AppendOnly
Append only mode
This field is a member of oneof _ write_mode .
Classes
AppendOnly
AppendOnly ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
AppendOnly mode defines that all changes to a table will be
written to the destination table.
BlmtConfig
BlmtConfig ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The configuration for BLMT.
Merge
Merge ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Merge mode defines that all changes to a table will be merged
at the destination table.
SingleTargetDataset
SingleTargetDataset ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A single target dataset to which all data will be streamed.
SourceHierarchyDatasets
SourceHierarchyDatasets ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Destination datasets are created so that hierarchy of the
destination data objects matches the source hierarchy.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
