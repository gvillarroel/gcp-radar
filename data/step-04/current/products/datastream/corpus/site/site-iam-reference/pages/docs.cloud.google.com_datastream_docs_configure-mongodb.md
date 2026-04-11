---
title: "Configure a MongoDB database for CDC \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/configure-mongodb
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/configure-spanner
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/configure-mongodb
  title: "Configure a MongoDB database for CDC \_|\_ Datastream \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Configure a MongoDB database for CDC
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure change data capture (CDC) to
stream data from a MongoDB database to a supported destination ,
such as BigQuery or Cloud Storage. You can configure Datastream to replicate
data from a fully managed cloud database service called Atlas, or, if you're
replicating from a self-managed MongoDB instance, using the MongoDB Shell.
Configure a MongoDB Atlas instance
Note: The steps that follow apply to both replica set and sharded clusters.
To use Datastream with a MongoDB Atlas instance, you first need
to create a Datastream user and grant them database access:
In the
MongoDB Atlas dashboard , under
Security , click Database access .
Click New database user and select the password authentication method
for your user.
Enter the username and password for your Datastream user.
Select Grant specific user privileges under Database user
privileges .
Add these roles/privileges under Specific privileges :
readAnyDatabase
Click Add user .
Configure a MongoDB self-hosted instance
This page describes how to configure a MongoDB self-hosted database for use with
Datastream for both replica set and sharded cluster.
Replica set
For information about deploying a MongoDB replica set, see
Deploy a self-managed replica set
in MongoDB documentation.
To configure Datastream for use with a self-managed MongoDB
replica set, follow these steps:
Install the MongoDB Shell.
For information about installing the MongoDB Shell, see the
MongoDB documentation .
Open the terminal and run the mongosh command to connect to your replica
set or primary node.
Create a user for Datastream in the admin database:
use admin
db.createUser ({
user: " USERNAME " ,
pwd: " PASSWORD " ,
roles: [ "readAnyDatabase" , { role: "read" , db: "admin" } ]
})
Replace USERNAME and PASSWORD with your username and password.
Sharded cluster
For information about deploying a sharded cluster, see
Deploy a sharded cluster
in MongoDB documentation.
To configure Datastream for use with a self-managed MongoDB
sharded cluster, follow these steps:
Install the MongoDB Shell.
For information about installing the MongoDB Shell, see the
MongoDB documentation .
Open the terminal and run the mongosh command to connect to your MongoDB
sharded cluster.
Create an identical Datastream user in every primary shard
node and the mongos query router:
use admin
db.createUser ({
user: " USERNAME " ,
pwd: " PASSWORD " ,
roles: [ "readAnyDatabase" ]
})
Replace USERNAME and PASSWORD with your username and
password. You can pick any username and password, but it must be consistent
across all primary shard nodes and the mongos query router.
To find out which shards are connected to the mongos query router, run the
following command:
db.adminCommand({ listShards: 1 })
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
