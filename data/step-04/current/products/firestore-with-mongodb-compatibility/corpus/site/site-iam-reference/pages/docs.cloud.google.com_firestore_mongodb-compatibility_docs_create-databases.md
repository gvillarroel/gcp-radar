---
title: "Create and manage databases \_|\_ Firestore with MongoDB compatibility \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases
  title: "Create and manage databases \_|\_ Firestore with MongoDB compatibility \_\
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
Create and manage databases
This page describes how to create, update, and delete Firestore with MongoDB compatibility
databases. You can create multiple Firestore databases per
project. You can use multiple databases to set up production and testing
environments, to isolate customer data, and for data regionalization.
Free tier usage
Firestore offers free tier
that lets you get started at no cost.
The free tier applies to only one Firestore database per project. The
first database that is created in a project without a free tier database will
get the free tier. If the database with the free tier applied is deleted, the
next database created will receive the free tier.
Before you begin
You must complete the following before creating a database:
Verify that billing is enabled for your Google Cloud project .
Assign appropriate Identity and Access Management roles as described in the next section.
Required roles
To create and manage databases, you need the Owner or Datastore Owner
Identity and Access Management role. These roles grant the required permissions.
Required permissions
To manage databases, you need the following permissions:
Create a database: datastore.databases.create
Read database configuration: datastore.databases.getMetadata
Configure a database: datastore.databases.update
Delete a database: datastore.databases.delete
Clone a database: datastore.databases.clone
Create a database
To create a Firestore with MongoDB compatibility database, use one of the following methods:
Google Cloud console
In the Google Cloud console, go to the Databases page.
Go to Databases
Click Create a Firestore Database .
Enter a database ID.
Select Enterprise Edition.
Select Firestore with MongoDB compatibility .
Select a location for your database.
(Optional) If you need to customize your encryption, click
Show Encryption Options and configure encryption options.
Click Create Database .
Firebase CLI
firebase firestore:databases:create --edition EDITION DATABASE_ID \
--location= LOCATION
gcloud CLI
Use the
gcloud firestore databases create
command and set --edition=enterprise .
gcloud firestore databases create \
--database= DATABASE_ID \
--location= LOCATION \
--edition=enterprise \
--enable-mongodb-compatible-data-access
Replace the following:
DATABASE_ID : a valid database ID .
LOCATION : the name of a Firestore with MongoDB compatibility multi-region or
region .
To enable deletion protection, add the --delete-protection flag.
You cannot delete a database with deletion protection enabled until you
disable this setting. This setting is disabled by default.
gcloud firestore databases create \
--database= DATABASE_ID \
--location= LOCATION \
--edition=enterprise \
--delete-protection
To add tags
to the database, use the
--tags
flag. For example:
--tags=123/environment=production,123/costCenter=marketing
--tags=tagKeys/333=tagValues/444
Terraform
Use the
google_firestore_database
resource and set database_edition to ENTERPRISE
resource "google_firestore_database" "database" {
name = " DATABASE_ID "
location_id = " LOCATION "
type = "FIRESTORE_NATIVE"
database_edition = "ENTERPRISE"
// Optional
delete_protection_state = " DELETE_PROTECTION_STATE "
}
Replace the following:
DATABASE_ID : a valid database ID .
LOCATION : the name of a Firestore with MongoDB compatibility multi-region or
region .
DELETE_PROTECTION_ENABLEMENT : Either
DELETE_PROTECTION_ENABLED or DELETE_PROTECTION_DISABLED .
To enable deletion protection, set delete_protection_state to DELETE_PROTECTION_ENABLED .
You cannot delete a database with deletion protection enabled
until you disable this setting. This setting is disabled by default.
Database ID
Valid database IDs include IDs that conform to the
following:
Includes only letters, numbers, and hyphen ( - ) characters.
Letters must be lowercase.
The first character must be a letter.
The last character must be a letter or number.
Minimum of 4 characters.
Maximum of 63 characters.
Must not be a UUID or resemble a UUID. For example, don't use an ID like
f47ac10b-58cc-0372-8567-0e02b2c3d479 .
If you delete a database, you cannot immediately re-use the database ID until after 5 minutes.
Delete protection
Use delete protection to prevent accidental deletion of a database.
Delete protection works in the following way:
You cannot delete a database with delete protection enabled until you disable
delete protection.
Delete protection is disabled by default.
You can enable delete protection when you create the database or you can
update a database configuration to
enable delete protection.
List databases
Use one of the following methods to list your databases:
Console
In the Google Cloud console, go to the Databases page.
Go to Databases
gcloud CLI
Use the
gcloud firestore databases list
command to list all the databases in your project.
gcloud firestore databases list
View database details
To view details about a single database, use one of the following methods:
Google Cloud console
In the Google Cloud console, go to the Databases page.
Go to Databases
Select a database from the list of databases.
gcloud CLI
Use the gcloud firestore databases describe command:
gcloud firestore databases describe --database= DATABASE_ID
Replace DATABASE_ID with a database ID.
Update database configuration
To update the configuration settings of a database, use the
gcloud firestore databases update
command.
Use this command to change, enable, or disable delete protection.
Update the delete protection setting
To enable delete protection on a database, use the
gcloud firestore databases update
command with the --delete-protection flag. For example:
gcloud CLI
gcloud firestore databases update --database= DATABASE_ID --delete-protection
Replace DATABASE_ID with a database ID.
To disable delete protection on a database, use the
gcloud firestore databases update
command with the --no-delete-protection flag. For example:
gcloud CLI
gcloud firestore databases update --database= DATABASE_ID --no-delete-protection
Replace DATABASE_ID with a database ID.
Delete a database
To delete a database, use the console or command-line tool.
Deleting a database does not incur charges for delete operations.
If the database has the delete protection setting enabled, you must
first disable delete protection .
Google Cloud console
In the Google Cloud console, go to the Databases page.
Go to Databases
Click more_vert View more in the
Actions column for the database you want to delete. Click Delete . A dialog
appears.
In the Delete database? dialog, confirm deletion by typing the
database ID in the text field. Click Delete . The console informs you
of operation success or failure.
If the operation fails,
view the database details and verify that
delete protection is disabled. To disable delete protection, see
Update the delete protection setting .
gcloud CLI
Use the
`gcloud firestore databases delete` command.
gcloud firestore databases delete --database= DATABASE_ID
Replace DATABASE_ID with the ID of the database to delete.
Clone a database
You can clone an existing database at a selected timestamp into a new database:
The cloned database is a new database that will be created in the same
location as the source database.
To make a clone, Firestore uses
point-in-time recovery (PITR) data of the source database. The cloned database includes all data and indexes.
By default, the cloned database will be encrypted in the same way as the
source database, using either Google's default encryption or
CMEK encryption . You can specify a different
encryption type or use a different key for CMEK encryption.
The timestamp has a granularity of one minute and specifies a point of time
in the past, in the period defined by the
PITR window :
If PITR is enabled for your database, you select any minute in the last 7
days (or less if PITR was enabled less than 7 days ago).
If PITR isn't enabled, you can select any minute in the past hour.
You can check the earliest timestamp that you can pick
in your database's description .
Note: To clone databases, your Google Account must have the
datastore.databases.clone IAM permission .
Console
In the Google Cloud console, go to the Databases page.
Go to Databases
Click more_vert View more in the
table row for the database that you want to clone. Click Clone . The
Create a clone dialog appears.
In the Create a clone dialog, provide parameters for cloning the
database:
In the Give the clone an ID field, a
database ID
for a new cloned database. This database ID must not be associated
with an existing database.
In the Clone from field, select a point in time to use for cloning.
The selected time corresponds to a PITR timestamp, at the minute
granularity.
Click Create clone .
Note: The cloned database will have the same encryption configuration as
the source database. If you want to specify a different encryption
configuration for the cloned database, you can use Google Cloud CLI commands.
gcloud
Use the
gcloud firestore databases clone
command to clone a database:
gcloud firestore databases clone \
--source-database = ' SOURCE_DATABASE ' \
--snapshot-time = ' PITR_TIMESTAMP ' \
--destination-database = ' DESTINATION_DATABASE_ID '
Replace the following:
SOURCE_DATABASE : the database name of an existing database that you want to clone. The name uses the format projects/ PROJECT_ID /databases/ SOURCE_DATABASE_ID .
PITR_TIMESTAMP : a
PITR timestamp in the
RFC 3339 format , at minute
granularity. For example:
2025-06-01T10:20:00.00Z or 2025-06-01T10:30:00.00-07:00 .
DESTINATION_DATABASE_ID : a
database ID
for a new cloned database. This database ID must not be associated with
an existing database.
Example:
gcloud firestore databases clone \
--source-database = 'projects/example-project/databases/example-source-db' \
--snapshot-time = '2025-06-01T10:20:00.00Z' \
--destination-database = 'example-dest-db'
If you want to bind to some tags while cloning a database, use the previous command with the --tags flag, which is an optional list of tags KEY=VALUE pairs to bind.
Example:
gcloud firestore databases clone \
--source-database = 'projects/example-project/databases/(default)' \
--snapshot-time = '2025-06-01T10:20:00.00Z' \
--destination-database = 'example-dest-db' \
--tags = key1 = value1,key2 = value2
By default, the cloned database will have the same encryption configuration
as the source database. To change the encryption configuration, use the
--encryption-type argument:
(Default) use-source-encryption : use the same encryption configuration
as the source database.
google-default-encryption : use Google's default encryption.
customer-managed-encryption : use CMEK encryption. Specify a
key ID
in the --kms-key-name argument.
The following example shows how to configure CMEK encryption for the cloned
database:
gcloud firestore databases clone \
--source-database = 'projects/example-project/databases/example-source-db' \
--snapshot-time = '2025-06-01T10:20:00.00Z' \
--destination-database = 'example-dest-db' \
--encryption-type = 'customer-managed-encryption' \
--kms-key-name = 'projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key'
Configure per-database access permissions
You can use
Identity and Access Management Conditions
to configure access permissions on a per-database level.
The following examples use the Google Cloud CLI to assign conditional access for
one or more databases. You can also
define IAM conditions in the Google Cloud console .
Warning: The Google Cloud console does not allow nor deny access to databases
based on IAM conditions configured at the database level.
IAM conditions are enforced when accessing databases outside of
the Google Cloud console such as with the REST API or the client libraries.
View existing IAM policies
gcloud projects get-iam-policy PROJECT_ID
Set PROJECT_ID to your project ID.
Grant access to a database
gcloud projects add-iam-policy-binding PROJECT_ID \
--member='user: EMAIL ' \
--role='roles/datastore.user' \
--condition='expression=resource.name=="projects/ PROJECT_ID /databases/ DATABASE_ID ",title= TITLE ,description= DESCRIPTION '
Set the following:
PROJECT_ID : your project ID
EMAIL : an email address that represents a specific account. For example, alice@example.com .
DATABASE_ID : a database ID.
TITLE : an optional title for the expression.
DESCRIPTION : an optional description of the expression.
Grant access to all except one database
gcloud projects add-iam-policy-binding PROJECT_ID \
--member='user: EMAIL ' \
--role='roles/datastore.user' \
--condition='expression=resource.name!="projects/ PROJECT_ID /databases/ DATABASE_ID ",title= TITLE ,description= DESCRIPTION '
Set the following:
PROJECT_ID : your project ID
EMAIL : an email address that represents a specific account. For example, alice@example.com .
DATABASE_ID : a database ID.
TITLE : an optional title for the expression.
DESCRIPTION : an optional description of the expression.
Remove policies for a given member and role
gcloud projects remove-iam-policy-binding PROJECT_ID \
--member='user: EMAIL ' \
--role='roles/datastore.user' --all
Set the following:
PROJECT_ID : your project ID
EMAIL : an email address that represents a specific account. For example, alice@example.com .
Limitations
You can have a maximum of 100 databases per project.
You can contact support to request an
increase to this limit.
What's next
Run the Quickstart: Create a database and connect to it .
Learn about Behavior differences .
Learn about Cloud Monitoring metrics for Firestore with MongoDB compatibility .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
