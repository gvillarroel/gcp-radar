---
title: "Create connection profiles \_|\_ Firestore with MongoDB compatibility \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-create-connection-profiles
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-create-connection-profiles
  title: "Create connection profiles \_|\_ Firestore with MongoDB compatibility \_\
    |\_ Google Cloud Documentation"
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
Create connection profiles
This page describes the preparation part of the
migration process
where you create Datastream connection profiles that will be
used later from importing data from the MongoDB-compatible source database to
the Cloud Storage bucket.
At this stage, you do the following:
Create a Cloud Storage connection profile for the
Cloud Storage bucket that you've created earlier.
Create a connection profile for the MongoDB-compatible source database.
Sign in to gcloud CLI
The migration procedure described in the subsequent sections uses the
gcloud CLI to configure and actuate the migration steps. Begin by
logging into Google Cloud and selecting the project that will host the
migration pipeline.
gcloud auth login
gcloud config set project " $PROJECT_ID "
Create a connection profile for the source database
MongoDB on Compute Engine
Run the following command to create a Datastream connection
profile to the MongoDB database hosted on Compute Engine.
Omit the --mongodb-replica-set flag from the following command when
connecting to a sharded cluster.
gcloud datastream connection-profiles create " $SRC_CONNECTION_PROFILE_NAME " \
--display-name = " $SRC_CONNECTION_PROFILE_NAME " \
--location = " $LOCATION " \
--mongodb-username = " $MONGODB_USERNAME " \
--mongodb-password = " $MONGODB_PASSWORD " \
--mongodb-host-addresses = " $MONGODB_IP_ADDRESS " \
--mongodb-replica-set = " $REPLICA_SET " \
--private-connection = " $PRIVATE_CONNECTION_NAME " \
--mongodb-standard-connection-format \
--type = mongodb \
--mongodb-direct-connection
MongoDB over SSH
This example assumes you have already configured SSH connectivity
to your private network, either directly to the machine hosting the MongoDB
compatible server, or through a Bastion
host.
Run the following command to create a Datastream connection
profile to the MongoDB database hosted on Compute Engine.
Omit the --mongodb-replica-set flag from the following command when
connecting to a sharded cluster.
If you want to connect with an SSH password, pass the
--forward-ssh-password flag instead of the --forward-ssh-private-key flag.
gcloud datastream connection-profiles create " $SRC_CONNECTION_PROFILE_NAME " \
--display-name = " $SRC_CONNECTION_PROFILE_NAME " \
--location = " $LOCATION " \
--mongodb-username = " $MONGODB_USERNAME " \
--mongodb-password = " $MONGODB_PASSWORD " \
--mongodb-host-addresses = " $MONGODB_IP_ADDRESS " \
--mongodb-replica-set = " $REPLICA_SET " \
--forward-ssh-hostname = " $BASTION_IP_ADDRESS " \
--forward-ssh-port = " $BASTION_SSH_PORT " \
--forward-ssh-username = " $BASTION_SSH_USERNAME " \
--forward-ssh-private-key = " $BASTION_SSH_PRIVATE_KEY " \
--mongodb-standard-connection-format \
--type = mongodb \
--mongodb-direct-connection
Amazon DocumentDB
This example assumes you have obtained the parameters and certificates required
for Amazon DocumentDB connectivity .
Prior to creating a connection profile, explicitly enable change streams in
the Amazon DocumentDB database. See the Amazon DocumentDB Change Streams
guide for instructions on enabling this feature.
Run the following command to create a Datastream connection
profile to your DocumentDB database:
gcloud datastream connection-profiles create " $SRC_CONNECTION_PROFILE_NAME " \
--display-name = " $SRC_CONNECTION_PROFILE_NAME " \
--location = " $LOCATION " \
--mongodb-username = " $MONGODB_USERNAME " \
--mongodb-password = " $MONGODB_PASSWORD " \
--mongodb-host-addresses = " $MONGODB_HOST_ADDRESS " \
--mongodb-replica-set = " $REPLICA_SET " \
--forward-ssh-hostname = " $BASTION_IP_ADDRESS " \
--forward-ssh-port = " $BASTION_SSH_PORT " \
--forward-ssh-username = " $BASTION_SSH_USERNAME " \
--forward-ssh-private-key = " $BASTION_SSH_PRIVATE_KEY " \
--mongodb-ca-certificate = " $DOCUMENT_DB_CA_CERTIFICATE " \
--mongodb-tls \
--mongodb-standard-connection-format \
--type = mongodb \
--mongodb-direct-connection
Azure Cosmos DB
Explicitly enable change streams for MongoDB in Azure Cosmos DB's API to
enable initiating Datastream streams.
This step requires
installing Azure CLI .
az resource patch --ids "/subscriptions/ subscription_id /resourceGroups/ resource_group_name /providers/Microsoft.DocumentDB/mongoClusters/ vCore_cluster_name " \
--api-version 2024 -10-01-preview \
--properties "{\"previewFeatures\": [ \"ChangeStreams\"]}"
Replace subscription_id , resource_group_name , and
vCore_cluster_name with values corresponding to your
Azure Cosmos DB deployment.
Run the following command to create a Datastream connection
profile to the source Azure Cosmos DB.
This example assumes that the source is accessible through a public DNS or IP
address that can be expressed in the
MongoDB SRV connection format .
The instructions also assume the Azure Cosmos DB server
uses a combination of a username and password for authentication.
gcloud datastream connection-profiles create " $SRC_CONNECTION_PROFILE_NAME " \
--display-name = " $SRC_CONNECTION_PROFILE_NAME " \
--location = " $LOCATION " \
--mongodb-username = " $MONGODB_USERNAME " \
--mongodb-password = " $MONGODB_PASSWORD " \
--mongodb-host-addresses = " $MONGODB_HOST_ADDRESS " \
--mongodb-srv-connection-format \
--type = mongodb \
--static-ip-connectivity \
--labels = skip_all_validations = true
MongoDB Atlas
Run the following command to create a Datastream connection
profile to the source MongoDB Atlas database.
This example assumes that the source is accessible through a public DNS or IP
address that can be expressed in the
MongoDB SRV connection format .
The instructions also assume that MongoDB Atlas server
uses a combination of a username and password for authentication.
gcloud datastream connection-profiles create " $SRC_CONNECTION_PROFILE_NAME " \
--display-name = " $SRC_CONNECTION_PROFILE_NAME " \
--location = " $LOCATION " \
--mongodb-username = " $MONGODB_USERNAME " \
--mongodb-password = " $MONGODB_PASSWORD " \
--mongodb-host-addresses = " $MONGODB_HOST_ADDRESS " \
--mongodb-srv-connection-format \
--type = mongodb \
--static-ip-connectivity
For more information about monitoring the connection profile creation, see
Troubleshooting .
Create a Cloud Storage connection profile
Configure the Datastream connection profile for the
Cloud Storage destination, which is the bucket that you've created
earlier.
gcloud datastream connection-profiles create " $DST_CONNECTION_PROFILE_NAME " \
--display-name = " $DST_CONNECTION_PROFILE_NAME " \
--location = " $LOCATION " \
--type = google-cloud-storage \
--bucket = " $GCS_BUCKET_NAME " \
--root-path = "/ $GCS_BUCKET_ROOT_PATH "
For more information about monitoring the connection profile creation, see
Troubleshooting .
What's next
Proceed to
Import from the source database .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
