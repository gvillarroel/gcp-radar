---
title: "Create a peer database \_|\_ Oracle Database at Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/create-peer-database
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/manage-databases
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/create-peer-database
  title: "Create a peer database \_|\_ Oracle Database at Google Cloud \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Guides
Send feedback
Create a peer database
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a peer database for your Autonomous AI Database
in Google Cloud.
Once you create an Autonomous AI Database, you can set up one or more peer
databases for it as a part of your disaster recovery plan.
You can only create peer databases with Autonomous Data Guard. For APEX and JSON
workloads, you can't create a peer database with Autonomous Data Guard.
Before you begin
In the OCI console, ensure that you are subscribed to the region in which you
want to create the peer database.
Ensure that you have the following Identity and Access Management (IAM) roles and
permissions required to create a peer database:
roles/autonomousDatabaseAdmin
Create an ODB Network .
Create a peer database
To create a peer database, do the following:
Note: To create a peer database with an ODB Network, use
gcloud CLI or API.
Console
Go to the Autonomous AI Database page.
Go to Autonomous AI Database
Click the name of the Autonomous AI Database for which you want to create a peer
database.
On the Autonomous AI Database details page, click the
Disaster Recovery tab.
In the Peer database section, click Create .
On the Add peer database page, do the following:
Select a region. The regions in which you already have peer databases
don't appear in the list.
If you already have peer databases in all regions and no additional
region appears in the list, then you can't create any more peer
databases.
(Optional) Select the
Enable cross-region backup replication to disaster recovery peer
checkbox. This option enables backup replication to your peer database
for up to seven days or for the selected backup retention period
(if less than seven days).
Note: Replicated backups incur additional storage costs.
From the Network project list, select the project that contains
your ODB Network.
Select the ODB Network .
Select a Client subnet .
In the Advanced settings section, you can optionally modify the
following settings:
Private IP address
Hostname prefix
Click Save .
On the Disaster recovery tab, in the Peer database section, the
Status field shows you the progress of the create operation. The
peer database is ready to use when the Status field shows
"Standby".
gcloud
Use the gcloud oracle-database autonomous-databases create
command to create a peer database.
gcloud oracle-database autonomous-databases create PEER_DATABASE_ID \
--project= PROJECT_ID \
--location= REGION \
--odb-subnet=projects/ ODB_NETWORK_PROJECT_ID /locations/ REGION /odbNetworks/ ODB_NETWORK_ID /odbSubnets/ ODB_SUBNET_ID \
--source-config-automatic-backups-replication-enabled= ENABLE_BACKUP_REPLICATION \
--source-config-autonomous-database=projects/ PROJECT_ID /locations/ REGION /autonomousDatabases/ PRIMARY_DATABASE_ID
Replace the following:
PEER_DATABASE_ID : a unique identifier for your peer database.
PROJECT_ID : the ID of your Google Cloud project.
REGION : the region in which you want to create your
peer database.
For odb-subnet property, replace the following:
ODB_NETWORK_PROJECT_ID : the ID of your Google Cloud
project which contains your ODB Network. If you're using a
Shared VPC, then this is the ID of your host project.
REGION : the region of your ODB Network.
ODB_NETWORK_ID : the ID of your ODB Network.
ODB_SUBNET_ID : the ID of your ODB Subnet.
ENABLE_BACKUP_REPLICATION : (Optional) enables backup replication
to your peer database for up to seven days or for the selected backup
retention period (if less than seven days). The default value is false .
For source-config-autonomous-database parameter, replace the following:
PROJECT_ID : the ID of your Google Cloud project which
contains your primary database.
REGION : the region of the primary database.
PRIMARY_DATABASE_ID : the ID of the primary database.
API
To create a peer database, run the following curl command:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://oracledatabase.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /autonomousDatabases/ PEER_DATABASE_ID "
-d \
'{
"name": "projects/ PROJECT_ID /locations/ REGION /autonomousDatabases/ PRIMARY_DATABASE_ID ",
"odb_subnet": "projects/ ODB_NETWORK_PROJECT_ID /locations/ REGION /odbNetworks/ ODB_NETWORK_ID /odbSubnets/ ODB_SUBNET_ID ",
"source_config": {
"autonomous_database": "projects/ PROJECT_ID /locations/ REGION /autonomousDatabases/ PRIMARY_DATABASE_ID ",
"automatic_backups_replication_enabled": ENABLE_BACKUP_REPLICATION
}
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project in which
to create the peer database.
REGION : the region in which to create the peer database.
PEER_DATABASE_ID : a unique identifier for your peer database.
For name parameter, replace the following:
PROJECT_ID : the ID of your Google Cloud project which
contains your primary database.
REGION : the region of the primary database.
PRIMARY_DATABASE_ID : the ID of the primary database.
For odbSubnet property, replace the following:
ODB_NETWORK_PROJECT_ID : the ID of your Google Cloud project
which contains your ODB Network. If you're using a Shared VPC,
then this is the ID of your host project.
REGION : the region of your ODB Network.
ODB_NETWORK_ID : the ID of your ODB Network.
ODB_SUBNET_ID : the ID of your ODB Subnet.
For source_config parameter, replace the following:
PROJECT_ID : the ID of your Google Cloud project which
contains your primary database.
REGION : the region of the primary database.
PRIMARY_DATABASE_ID : the ID of the primary database.
ENABLE_BACKUP_REPLICATION : enables backup replication to your
peer database for up to seven days or for the selected backup retention
period (if less than seven days). The default value is false .
When completed, you can view the new peer Autonomous AI Database in the
Autonomous AI Databases list along with its details. Also, after creating a
peer database in Google Cloud, you can manage and modify its network
settings in the OCI console.
What's next
View peer database details .
Learn how to switchover to a
a peer database.
Delete a peer database .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
