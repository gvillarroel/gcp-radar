---
title: "Migrate to Firestore with MongoDB compatibility \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-data
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-data
  title: "Migrate to Firestore with MongoDB compatibility \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore with MongoDB compatibility
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrate to Firestore with MongoDB compatibility
This guide takes you through the step-by-step process of migrating your
MongoDB-compatible source database to a Firestore with MongoDB
compatibility database with minimal downtime.
About the migration process
The migration process has the following stages:
Preparation : You create resources required for the migration and set up
environment variables that will be used to run commands at later stages of
the migration process.
Import from the MongoDB-compatible source database : You use the
Datastream service to capture the contents of your
MongoDB-compatible source database and transfer them into a
Cloud Storage bucket.
Write data to Firestore with MongoDB compatibility
database : You use the Dataflow
service to transfer data from the Cloud Storage bucket into a
Firestore with MongoDB compatibility database.
This Dataflow pipeline will run concurrently with the
Datastream stream that is pulling data from the
MongoDB-compatible source database.
Migrate traffic to Firestore : At the appropriate point
in the procedure, you migrate your application read and write traffic to
the Firestore with MongoDB compatibility database and stop
the migration pipeline.
The following diagram summarizes the migration process:
Your MongoDB-compatible source database remains in a serving state while the data transfer
takes place:
The Datastream process captures both data at rest and
change events.
There will be a short period of partial unavailability when you have to shut
down write traffic to your source database. During this period, the
remainder of the change events is replicated to Firestore.
After the replication completes, the Firestore with MongoDB
compatibility database can become the new source of truth for your
application workload. All read and write traffic can be directed to the new
database.
Detailed migration steps
This section describes the migration in more detail.
The Datastream service creates a stream between a source and a
destination. In this case, the source is your current MongoDB-compatible
deployment, while the destination is Cloud Storage. This process has
the following steps:
Create a source Datastream connection profile
for your Mongo source. Specific instructions depend on the type and the way
your MongoDB-compatible source is deployed.
Create a Cloud Storage bucket
that will receive the data and the change events from your
MongoDB-compatible source database.
Create a destination Datastream connection profile
that uses this Cloud Storage bucket.
Create and actuate a Datastream stream
that connects the source connection profile to the destination connection
profile.
Initiate a Dataflow pipeline to begin injecting the
captured data into your Firestore with MongoDB
compatibility database.
Monitor the stream
to identify important milestones in the migration process to determine
whether any errors were encountered during the data transfer.
When it's appropriate,
shut down write traffic
to the source database. After all data, including recent changes, was
replicated to the Firestore with MongoDB compatibility
database, redirect read traffic to the new destination.
Enable write traffic
to your Firestore with MongoDB compatibility database.
About code examples
Code examples in this guide are meant to be executed one after another. This
guide assumes that you configure your environment by setting up all environment
variables beforehand. Afterwards, you execute commands required for the
migration that use the already configured environment variables. We recommend
to use this approach. Because many commands use same environment variables, you
can reduce the chance of introducing errors between different stages of the
migration process.
As an alternative, you can replace the variables in command examples with the
same values that you set for corresponding environment variables.
Limitations
Before you begin, review the differences between Firestore with MongoDB compatibility and MongoDB .
Pay special attention to the following:
Unsupported data types
Restrictions on _id
Document size limits
If any of your data doesn't meet restrictions in the preceding categories:
We recommend to address these conditions in your dataset before starting the
migration process.
If you choose to proceed without changes, then documents that are affected by
the limitations will fail writing to Firestore and will be
sidelined.
You can decide on how these documents must be handled. If they are
converted to supported types, values, or sizes, they can be reprocessed.
Datastream has the following requirements:
The minimum major version of MongoDB supported by
Datastream is 4.0. For some minor versions, there are
minimum patch versions that are supported:
4.0.X for patch version X >= 21
4.2.X for patch version X >= 10
4.4.X for patch version X >= 2
Your MongoDB cluster must support Change Streams. Your MongoDB deployment
must be configured as a
replica set or a
sharded cluster for Change
Streams to be enabled.
What's next
Proceed to
Configure resources for migration .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
