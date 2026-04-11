---
title: "Create DB systems \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/create-base-db-system
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/create-base-db-system
  title: "Create DB systems \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
    \ Documentation"
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
Create DB systems
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create Base Database Service resources, that is,
DB systems in Google Cloud.
Oracle Database@Google Cloud lets you create an DB systems in the Google Cloud
using Google Cloud console and Oracle Database@Google Cloud API.
You must create your DB system in the same region and zone
as your ODB Network. This ensures optimal performance and seamless
communication.
For a list of regions and zones in which you can create DB systems,
see Supported regions and zones .
Before you begin
Set up the gcloud CLI and enable the API .
Confirm you have an active marketplace order for Oracle Database@Google Cloud.
Enable the Oracle Database@Google Cloud API for the project.
Enable the Oracle Database@Google Cloud API
Create an ODB Network and ODB Subnets .
A DB system requires one client subnet.
Confirm that you have the required Identity and Access Management (IAM) roles and
permissions to create a Base DB system:
roles/oracledatabase.dbSystemAdmin
For information on how to assign roles, see
Apply IAM roles .
Create a Base DB system
The DB system provisioning workflow creates the following three resources:
A DB system
A container database (CDB)
A pluggable database (PDB)
To create a DB system, do the following:
Console
Go to the Base Database Service page.
Go to Base Database Service
Click Create .
Enter a Display name for your DB system. This name appears
in the Google Cloud console. The display name must be unique within your
Google Cloud project.
Note: The Display name field corresponds to the dbName field in
the OCI console. While choosing a display name, make sure to follow the
Oracle naming conventions .
For System ID , enter a unique identifier for your DB system.
The DB system ID can't be changed later.
Select a Region and a GCP Oracle zone .
The region and zone choice is permanent and can't be changed later.
In the Configure Shape section, enter the Number of ECPUs for
Standard.x86 shape.
The ECPU count can range from 4 to 256, in increments of 4. The value of
Memory is automatically updated based on the number of ECPUs.
From the Available data storage menu, select a storage size.
The value of Recovery area storage is updated automatically based on
the storage size you select.
Select an Oracle Database software edition . The following editions
are available:
Standard Edition
Enterprise Edition
Enterprise Edition high performance
For information about these editions, refer to the Oracle documentation.
Select your License type . The available options are License included
and Bring Your Own License .
In the SSH keys section, add the SSH keys you'd like to use for
the DB system. To add a key, enter the SSH key name in the
SSH Key 1 field. For each additional key, click ADD ITEM .
For more information on how to generate SSH keys, see
Generate SSH keys .
In the Networking section, define the network configuration for the
DB system:
From the Network project list, select the project that contains
your ODB Network.
Select the ODB Network .
Select a Client subnet .
Enter a Hostname prefix . This prefix can only contain letters,
numbers, or hyphens, and must start with a letter. The maximum allowed
length is 12 characters.
(Optional) In the Advanced network settings section, you can
provide a Private IP address . This must be an available IP
address within the subnet's CIDR.
If you don't specify an IP address, a private IP address is
automatically assigned from the subnet.
In the Diagnostics collection section, configure monitoring for your
DB system:
Select the Enable diagnostic events checkbox to track all
DB system diagnostic events.
Select the Enable incident logs and trace collection checkbox
to enable incident logging for your DB system.
In the Advanced fields section, select a Timezone which you'd
like to use for diagnostic collection. This timezone is used for event
timestamps.
In the Database information section, do the following to configure
your database:
Enter a unique display name.
Enter a database ID as a unique identifier for your database.
Enter a suffix for generating unique database names. Database names
are generated by combining the database name with this suffix.
Select a database version.
Use the following naming convention to enter a display name for your
pluggable database:
Starts with a letter.
Contains only letters, numbers, or underscores.
Contains maximum 30 characters.
If you don't enter a display name, then Oracle Database@Google Cloud
generates the name automatically.
Use the following naming convention to enter a unique ID for your
pluggable database:
Starts with a lowercase letter.
Contains lowercase letters, numbers, and hyphens.
Ends with a lowercase letter or a number.
Contains maximum 63 characters.
If you don't enter a unique ID, then Oracle Database@Google Cloud
generates the ID automatically. It can't be changed later.
In the Administrator credentials section, do the following:
Confirm the Administrator username .
Enter your password in the Password field.
Re-enter your password in the Confirm password field to confirm.
If you want to Use the administrator password for the TDE wallet ,
then select the checkbox, and enter the TDE wallet password .
Re-enter the TDE wallet password to confirm.
Review the Database backups settings. You can change these settings
through the OCI console after the DB system has been provisioned.
In the Advanced settings section, you can optionally modify the
following settings:
Unified auditing : if you've selected database version 19c ,
you can choose to enable or disable this setting. However, for
database version 23ai , this setting is enabled by default and you
can't disable it.
Character set : the default and the recommended setting is AL32UTF8 .
National character set : the default is AL16UTF16 .
Click Create .
API
To create a DB system, run the following curl command:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://oracledatabase.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /dbSystems/ DB_SYSTEM_ID "
-d \
'{
"display_name": " DB_SYSTEM_DISPLAY_NAME ",
"gcp_oracle_zone": " GCP_ORACLE_ZONE ",
"name": "projects/ PROJECT_ID /locations/ REGION /dbSystems/ DB_SYSTEM_NAME ",
"entitlement_id": " ENTITLEMENT_ID ",
"odb_subnet": "projects/ ODB_NETWORK_PROJECT_ID /locations/ REGION /odbNetworks/ ODB_NETWORK_ID /odbSubnets/ ODB_SUBNET_ID ",
"properties": {
"shape": "VM.Standard.X86",
"computeCount": COMPUTE_COUNT ,
"node_count": NODE_COUNT ,
"initial_data_storage_size_gb": INITIAL_STORAGE_SIZE ,
"database_edition": " DATABASE_EDITION ",
"license_model": " LICENSE_TYPE ",
"hostname_prefix": " HOSTNAME_PREFIX ",
"db_home": {
"display_name": " DB_DISPLAY_NAME ",
"db_version": " DB_VERSION ",
"database": {
"db_name": " DB_NAME ",
"admin_password": " PASSWORD ",
"character_set": " CHARACTER_SET ",
"database_id": " DB_ID ",
},
},
"ssh_public_keys": [" SSH_PUBLIC_KEY "],
"data_collection_options": {
"is_diagnostics_events_enabled": EVENTS_ENABLED ,
"is_incident_logs_enabled": INCIDENT_LOGS_ENABLE
},
"time_zone": {
"id": " TIMEZONE "
},
}
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project in which
to create the DB system.
REGION : the region in which to create the DB system.
DB_SYSTEM_ID : a unique identifier for your DB system.
DB_SYSTEM_DISPLAY_NAME : a name for your DB system that
appears in the Google Cloud console.
Note: DB_SYSTEM_DISPLAY_NAME corresponds to the dbName field in
the OCI console. While choosing a display name, make sure to follow the
Oracle naming conventions .
GCP_ORACLE_ZONE : the GCP Oracle zone for your DB system.
For the list of available regions and zones, see
Available configurations .
DB_SYSTEM_NAME : a name for your DB system.
ENTITLEMENT_ID : your Oracle entitlement ID.
For odbSubnet property, replace the following:
ODB_NETWORK_PROJECT_ID : the ID of your Google Cloud project
which contains your ODB Network. If you're using a Shared VPC,
then this is the ID of your host project.
REGION : the region of your ODB Network.
ODB_NETWORK_ID : the ID of your ODB Network.
ODB_SUBNET_ID : the ID of your ODB Subnet.
COMPUTE_COUNT : the compute capacity for your database.
NODE_COUNT : the number of nodes for your DB system. You
can have either 1 or 2 nodes.
INITIAL_STORAGE_SIZE : the size (in GiB) of the initial storage
for your DB system. You can scale up storage after provisioning,
as required.
DATABASE_EDITION : the Oracle Database software edition.
Following are the acceptable values:
STANDARD_EDITION
ENTERPRISE_EDITION
ENTERPRISE_EDITION_HIGH_PERFORMANCE
LICENSE_TYPE : the license type associated with your
Oracle Database@Google Cloud order. The only accepted values are
bring-your-own-license or license-included .
HOSTNAME_PREFIX : a hostname prefix. This prefix can only contain
letters, numbers, or hyphens, and must start with a letter. The maximum
allowed length is 12 characters.
DB_DISPLAY_NAME : a name for your database that appears in the
Google Cloud console.
DB_VERSION : the Oracle database version for your database.
DB_NAME : a name for your database.
PASSWORD : the password for the default administrator user for
your database.
CHARACTER_SET : the setting for the character set management.
The default and the recommended setting is AL32UTF8 .
DB_ID : a unique identifier for your database.
SSH_PUBLIC_KEY : the SSH public keys for your DB system.
You can enter a single value for a single key, or an array of values for
multiple keys.
EVENTS_ENABLED : set to true to track all DB system
diagnostic events.
INCIDENT_LOGS_ENABLE : set to true to enable incident logging
for your DB system.
TIMEZONE : the timezone you'd like to use for diagnostic collection.
This timezone is used for event timestamps.
The provisioning workflow creates only one pluggable database for the DB system.
After the DB system is created, you can create additional pluggable databases
through the OCI console. For instructions, refer to the Oracle documentation.
What's next
Learn how to manage your DB systems .
Learn how to delete a DB system .
Learn how to view details of a DB system and its databases .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
