---
title: "Configure an AlloyDB for PostgreSQL database for CDC \_|\_ Datastream \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/configure-spanner
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql
  title: "Configure an AlloyDB for PostgreSQL database for CDC \_|\_ Datastream \_\
    |\_ Google Cloud Documentation"
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
Configure an AlloyDB for PostgreSQL database for CDC
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure change data capture (CDC) to
stream data from an AlloyDB for PostgreSQL database to a supported destination ,
such as BigQuery or Cloud Storage.
Set up connectivity between Datastream and AlloyDB
To enable Datastream to connect to the AlloyDB instance, you need to set up a TCP proxy in the consumer project. The TCP proxy image is publicly available to all customers.
Launch the proxy container:
Activate Cloud Shell in the consumer project.
Run the following script to create the TCP proxy and disable bridge
networking to avoid connectivity issues:
gcloud compute instances create-with-container \
--zone = REGION_ID VM_NAME \
--container-image gcr.io/dms-images/tcp-proxy \
--tags = dms-tcp-proxy \
--container-env = SOURCE_CONFIG = ALLOYDB_IP : ALLOYDB_PORT \
--can-ip-forward \
--network = SOURCE_AND_DEST_VPC \
--machine-type = VM_TIER \
--metadata = startup-script = '#! /bin/bash
mkdir -p /etc/docker
cat <<EOF > /etc/docker/daemon.json
{"bridge":"none"}
EOF
systemctl restart docker'
Replace the following:
REGION_ID : The region in which you want to create the TCP proxy.
VM_NAME : The name of the virtual machine.
ALLOYDB_IP : The IP address of the AlloyDB for PostgreSQL instance.
ALLOYDB_PORT : The port number of the AlloyDB for PostgreSQL instance.
SOURCE_AND_DEST_VPC : The VPC network to which the source and destination
are connected.
VM_TIER : The type of your virtual machine.
An example command with updated parameters:
gcloud compute instances create-with-container \
--zone = us-central1-c ds-tcp-proxy \
--container-image gcr.io/dms-images/tcp-proxy \
--tags = ds-tcp-proxy \
--container-env = SOURCE_CONFIG = 10 .16.0.5:5432 \
--can-ip-forward \
--network = default \
--machine-type = e2-micro
--metadata = startup-script = '#! /bin/bash
mkdir -p /etc/docker
cat <<EOF > /etc/docker/daemon.json
{"bridge":"none"}
EOF
systemctl restart docker'
You may receive a prompt to authorize Cloud Shell. Click AUTHORIZE .
Run the script to print the IP address of the TCP Proxy with the following inputs:
gcloud compute instances describe VM_NAME \
--format = "yaml(networkInterfaces[].networkIP)" \
--zone = REGION_ID
Replace the following:
VM_NAME : The name of your virtual machine.
REGION_ID : The region in which you created the TCP proxy.
Use this IP address in the Datastream connection profile configuration.
(Optional) Create a firewall rule to limit ingress traffic to the TCP proxy:
gcloud compute firewall-rules create FIREWALL_RULE_NAME \
--direction = INGRESS \
--priority = 1000 \
--target-tags = dms-tcp-proxy \
--network = SOURCE_VPC \
--action = ALLOW \
--rules = tcp: ALLOYDB_PORT \
--source-ranges = IP_RANGE
Replace the following:
FIREWALL_RULE_NAME : The name of your firewall rule.
SOURCE_VPC : The VPC network to which your source is connected.
ALLOYDB_PORT : The port number of the AlloyDB for PostgreSQL instance.
IP_RANGE : The IP address range to which you want to limit ingress
traffic.
An example command to allow ingress traffic from all IP addresses:
gcloud compute firewall-rules create ds-proxy1 \
--direction = INGRESS \
--priority = 1000 \
--target-tags = ds-tcp-proxy \
--network = default \
--action = ALLOW \
--rules = tcp:5432
Configure AlloyDB for replication
Enable logical decoding for the AlloyDB primary instance. In Google Cloud, set
the value for the alloydb.logical_decoding flag to ON . For information about
updating the database flags, see Configure an instance's database flags .
Note: Updating the alloydb.logical_decoding flag restarts the instance.
Connect to the AlloyDB instance using the TCP proxy IP address by running the
following command from any VM on the same VPC:
psql -h PROXY_IP \
-U DB_USER \
-d DB_NAME
Replace the following:
PROXY_IP : The IP address of the TCP proxy.
DB_USER : The username for the AlloyDB database.
DB_NAME : The AlloyDB database name.
Run the following command to grant replication privileges to your database user:
ALTER USER DB_USER WITH REPLICATION;
Create a publication. We recommend that you create a publication only for the
tables that you want to replicate. This allows Datastream to read-only
the relevant data, and lowers the load on the database and Datastream:
CREATE PUBLICATION PUBLICATION_NAME
FOR TABLE SCHEMA1 . TABLE1 , SCHEMA2 . TABLE2 ;
Replace the following:
PUBLICATION_NAME : The name of your publication. You'll
need to provide this name when you create a stream in the Datastream
stream creation wizard.
SCHEMA : The name of the schema that contains the table.
TABLE : The name of the table that you want to replicate.
You can also create a publication for all tables in your database. Note that
this approach increases the load on both the source database and Datastream:
CREATE PUBLICATION PUBLICATION_NAME FOR ALL TABLES;
For PostgreSQL 15 and later, you can create a publication for all tables
in a schema. This approach lets you replicate changes for tables in the
specified list of schemas, including tables that you create in the future:
CREATE PUBLICATION PUBLICATION_NAME
FOR TABLES IN SCHEMA SCHEMA1 , SCHEMA2 ;
Create a replication slot by executing the following command.
SELECT PG_CREATE_LOGICAL_REPLICATION_SLOT(' REPLICATION_SLOT_NAME ', 'pgoutput');
Replace the following:
REPLICATION_SLOT_NAME : The name of your replication slot.
You'll need to provide this name when you create a stream in the Datastream
stream creation wizard.
Create a Datastream user
To create a Datastream user, enter the following PostgreSQL command:
CREATE USER USER_NAME WITH REPLICATION LOGIN PASSWORD ' USER_PASSWORD ';
Replace the following:
USER_NAME : The name of the Datastream user that you want
to create.
USER_PASSWORD : The login password for the Datastream user
that you want to create.
Grant the following privileges to the user you created:
GRANT SELECT ON ALL TABLES IN SCHEMA SCHEMA_NAME TO USER_NAME ;
GRANT USAGE ON SCHEMA SCHEMA_NAME TO USER_NAME ;
ALTER DEFAULT PRIVILEGES IN SCHEMA SCHEMA_NAME GRANT SELECT ON TABLES TO USER_NAME ;
Replace the following:
SCHEMA_NAME : The name of the schema to which you want to grant
the privileges.
USER_NAME : The user to whom you want to grant the privileges.
The first command might display warnings, however it is safe to ignore them.
What's next
Learn more about how Datastream works with PostgreSQL sources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
