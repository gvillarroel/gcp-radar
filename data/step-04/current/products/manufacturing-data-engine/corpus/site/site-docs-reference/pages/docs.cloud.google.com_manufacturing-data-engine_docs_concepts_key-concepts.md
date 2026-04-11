---
title: "Key concepts \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts
source_metadata:
  url: https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts
  title: "Key concepts \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
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
Key concepts
This page describes the key concepts for understanding the components of
Manufacturing Data Engine (MDE).
Manufacturing data
MDE information
architecture is designed to process two types of manufacturing data:
Manufacturing facts : Sensor readings or events acquired from the
factory floor or derived from factory floor data.
Context about facts (metadata) : Origin, the way they were
captured, their type, nature (the measurements they represent), assets
that refer to, and provide context about them.
MDE is designed to be used as a data repository of
factual and contextual manufacturing data and to capture relationships between
them. The main design objective of MDE is to provide
rapid data ingestion, performant data access, and enable value-added use cases.
Manufacturing data and metadata are stored in and sent to different data sinks
that are optimized for specific use-cases.
To provide the flexibility in organizing and storing data,
MDE defines a model that
allows configurability and extensibility of
logical schemas while maintaining physical data schema stability.
This diagram shows at a high level the message flow as processed by
MDE:
Source message
Any message published to the input-messages Pub/Sub
topic, which is the data entry point to
MDE.
Source message class
A group of source messages that share a common structure or semantics. For
more information, see
Source Message Class .
Parser
A configuration entity that transforms messages of a specific source message class
into records of a specific type by means of a Whistle
script. A parser can produce records with differing tags , but all records must
share the same type . For more information, see
Parser .
Archetype
A base for a type that defines specific fields and behaviors.
There are six archetypes grouped in three archetype families:
Numeric (standard and clustered)
Discrete (standard and clustered)
Continuous (standard and clustered)
Natural key
A key uniquely identifying an entity outside of MDE.
Tag
An entity, such as a sensor, device, or machine emitting a stream of
source messages . The entity is identified by a tag name which also
serves as the natural key in tag cloud tag metadata buckets. Configuration
settings can be attached to tags in the context of type versions. For more
information, see
Tag .
Type
A configuration entity describing a common set of records . A
type is associated to exactly one archetype . A type may be
associated with one or more metadata buckets , it may hold a data field
schema, and provide storage specifications . For more information, see
Type .
Data field
A field in a record. The object written to the field can be
constrained by schema on types of Discrete and Continuous archetype .
Metadata bucket
A configuration entity that models a related set of contextual
information about a manufacturing fact (such as a sensor reading) associated
with a source message . Metadata buckets are modeled as dimensions in the
analytics domain. Buckets contain schemas that define the structure of
metadata instances contained within them. Changes to metadata instances
within a bucket are versioned. For more information, see
Metadata buckets .
Metadata instance
An entry within a metadata bucket that describes
an entity with a given natural key . For more information, see
Metadata instances .
Proto metadata instance
A metadata instance that is constructed in the parser.
Record table
A table in BigQuery tied to a type . Each
type is associated to one record table .
Record
A single processed record. Also a row in a record table .
All records share the same type .
Proto record
A precursor record that is constructed and emitted by
a parser .
Embedded Metadata
A field that stores rapidly changing metadata in
the record . For more information, see
Embedded Metadata .
Cloud metadata reference
A field in a record that stores metadata
instance identifiers per bucket (foreign keys).
Materialized metadata
A field in a record that stores materialized
metadata instances listed in cloud metadata reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
