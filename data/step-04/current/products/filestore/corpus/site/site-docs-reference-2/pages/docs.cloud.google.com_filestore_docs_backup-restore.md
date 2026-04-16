---
title: "Back up data \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/backup-restore
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/backup-restore
  title: "Back up data \_|\_ Filestore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Send feedback
Back up data
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to back up data for disaster recovery using
Filestore backups. To learn more about backups, common use cases,
and best practices, see Backups .
Before you begin
Before you start creating backups, enable APIs and ensure the necessary roles and permissions are granted.
For more information, see Before you start .
Create a standard backup
To create a standard, on-demand, backup, follow these steps:
Console
In Google Cloud console, go to the Filestore Instances page.
Go to Instances
Select the instance you want to back up from the table.
In the Backups tab, click Create on-demand backup .
Click Next .
In the Backup ID field, type a name for the backup.
In the Region field, select the Google Cloud region where you want the backup to be located.
Optional: Add a description.
In the Encryption section, select either a Google-managed encryption key or a Customer-managed encryption key.
Note: This step is not available for basic instances.
Optional: Click Add label to add labels to the backup.
Optional: Add tags for resource organization.
Click Create .
gcloud
Install gcloud .
Update gcloud components :
gcloud components update
Run the following gcloud filestore backups create
command in a terminal window on your local machine. The --kms-key flag is optional:
gcloud filestore backups create BACKUP_NAME \
--instance= INSTANCE_NAME \
--file-share= FILE_SHARE_NAME \
--instance-location= INSTANCE_LOCATION \
--region= BACKUP_LOCATION \
--kms-key=projects/ KMS_PROJECT /locations/ KMS_LOCATION /keyRings/ KEYRING /cryptoKeys/ CRYPTO_KEY
Where:
BACKUP_NAME is the name you want to give the backup.
INSTANCE_NAME is the name of the Filestore instance to back up.
FILE_SHARE_NAME is the name of the file share on the Filestore instance.
INSTANCE_LOCATION is the region or zone where the Filestore instance is located.
BACKUP_LOCATION is the region where the backup will be stored. If
a region is not indicated, the backup is created in the same region as the
Filestore instance.
KMS_PROJECT is the project name where the KMS key resource is stored.
KMS_LOCATION is the region of the KMS key resource.
KEYRING is the name of the key ring.
CRYPTO_KEY is the KMS key resource.
Example
The following command creates a backup of file share vol1 on the Filestore
instance nfs-server , which is located in zone us-central1-c . The backup is
named mybackup , is located in region asia-east2 , and has an associated
encryption key that will encrypt the instance when restored:
gcloud filestore backups create mybackup \
--instance=nfs-server \
--file-share=vol1 \
--instance-zone=us-central1-c \
--region=asia-east2 \
--kms-key=projects/purple-project/locations/us-central1/keyRings/filestore-keyring/cryptoKeys/filestore-key
View backups
To view on-demand backups and their details, follow these steps:
Console
In Google Cloud console, go to the Filestore Backups page.
Go to Backups
Click Standard tab to view a list of backups.
Click the backup name to view the details of the specific backup.
gcloud
List all backups in your current project
To view a list of backups for your current project, run the backups list
command:
```shell
gcloud filestore backups list
```
View information about a backup
To view information about a backup, run the backups describe
command:
`` `shell
gcloud filestore backups describe BACKUP_NAME \
-- region = BACKUP_LOCATION
```
Where:
BACKUP_NAME is the name of the backup whose information you want to view.
BACKUP_LOCATION is the region where the backup is stored.
What's next
Learn how to create standard and enhanced backups .
Learn how to restore standard and enhanced backups .
Explore differences between standard and enhanced backups .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
