---
title: "Configure resources for migration \_|\_ Firestore with MongoDB compatibility\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-resources
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-resources
  title: "Configure resources for migration \_|\_ Firestore with MongoDB compatibility\
    \ \_|\_ Google Cloud Documentation"
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
Configure resources for migration
This page describes the preparation part of the
migration process
where you configure resources for the migration.
At this stage, you do the following:
Install command-line tools required for running commands at later stages of
the migration process.
Configure Firestore with MongoDB compatibility database.
(Optional) Adjust the operation log (oplog) settings on your MongoDB
compatible source.
Create a Cloud Storage bucket for intermediate data storage.
Configure IAM permissions
Your account requires appropriate IAM roles in all
services used in the migration process:
Datastream roles
Dataflow roles
Cloud Storage roles
Datastore roles
Install command-line tools
The migration procedure uses the gcloud CLI to configure and
actuate the migration steps. If required, install the gcloud CLI by
following instructions on the Install the gcloud CLI page.
Source-specific configuration
MongoDB on Compute Engine
A MongoDB database that runs on Compute Engine VMs in a self-managed
cluster isn't normally exposed to the public internet. The migration
procedure will use
Private Service Connect in Datastream
to connect the Datastream pipeline to your source database.
Do the following:
Configure Datastream Private Connectivity by following
instructions outlined in
Create a private connectivity configuration .
Note the Configuration ID parameter of the created configuration. You
will use it in later stages to set up required environment variables.
Azure Cosmos DB
Make sure that
Azure CLI
is installed on your computer.
Amazon DocumentDB
Amazon DocumentDB clusters are not directly accessible from outside the Amazon
VPC network. To connect to a DocumentDB cluster you will have to provision
an EC2 instance within the Amazon VPC network, and use that instance as a
Bastion Host for an SSH tunnel.
Visit the Connecting to an Amazon DocumentDB cluster from outside an Amazon VPC developer guide for instructions on setting
up an EC2 instance for external connectivity to DocumentDB.
To establish a connection to the DocumentDB cluster you will have to obtain
the private SSH key for the EC2 instance as well as the appropriate
Certificate Bundle for the region in which your cluster is deployed. Visit the
Certificate bundles by AWS Region
resource page to download the appropriate bundle in PEM format.
Note that the Certificate Bundle contains multiple certificates. You have to
extract a single certificate to set up the a Datastream connection. It is
recommended that you validate the DocumentDB connectivity manually to ensure
that you have both a valid SSH key and a valid DocumentDB certificate from
the regional bundle. The DocumentDB developer guide provides commandline examples for establish a direct connection from outside
the VPC.
Configure a destination Firestore with MongoDB compatibility database
Make sure that your project has a Firestore with MongoDB
compatibility database where you will migrate data
from your source Mongo database. For more information about creating a
database, see
Create and manage databases .
For the purpose of this migration, we recommend to
create a username and password
for the Firestore with MongoDB compatibility database to
use with the SCRAM-SHA-256 authentication protocol. This username can be
safely deleted after the migration completes, or you may choose to keep
using these credentials to connect your Mongo clients to your new
Firestore with MongoDB compatibility database.
You will use the name of this Firestore with MongoDB
compatibility database and the user credentials in later steps.
Adjust the oplog window size of the source database
We recommend to adjust the oplog window of your source Mongo database to 3 days
worth of total write traffic to this database. If the rate of write traffic
exceeds the rate at which Datastream can consume changes from
your database, this adjustment will prevent data loss.
The value might need to be adjusted further, depending on the pattern of the
traffic and the volume of peak traffic. For example, if a week's worth of
traffic is written in a short period of time, then Datastream
might not capture the changes from the oplog fast enough before changes fall
out of the oplog window. In this case you might need to resize the oplog window
to 7 days worth of total write traffic.
Create a Cloud Storage bucket
Create a new Cloud Storage bucket in the following way:
Choose a Cloud Storage region where the
migration pipeline will run. We recommend to use the region where your
destination Firestore with MongoDB compatibility database
is located.
Choose the name for this bucket. Example: mongo-migration-bucket . You will
use this name in later steps.
Create a new Cloud Storage bucket with the chosen name and in the
chosen region by following instructions provided on the
Create a bucket page in
the Cloud Storage documentation.
What's next
Proceed to
Configure environment variables .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
