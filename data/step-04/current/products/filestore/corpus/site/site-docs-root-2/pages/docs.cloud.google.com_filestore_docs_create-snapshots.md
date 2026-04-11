---
title: "Create a snapshot to preserve the state of your data \_|\_ Filestore \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/create-snapshots
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/create-snapshots
  title: "Create a snapshot to preserve the state of your data \_|\_ Filestore \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
Create a snapshot to preserve the state of your data
Stay organized with collections
Save and categorize content based on your preferences.
This guide shows you how to create a snapshot to preserve the state of your
Filestore data. To learn more about snapshots, see
Snapshots .
Create a snapshot
You can create a snapshot of an instance using one of the following methods:
Google Cloud console
In the Google Cloud console, go to the Filestore instances
page.
Go to the Filestore instances page
Click the instance that you want to create a snapshot of.
Click the Snapshots tab and then click Create snapshot .
For Snapshot ID , enter a name for the snapshot. The file share name and
snapshot ID can have a combined length of up to 77 characters.
Optional : Add a description or labels to the snapshot.
Click Create .
gcloud CLI
To create a snapshot of an instance, run the instances snapshots create
command. The --description and --labels flags are added as optional
arguments:
gcloud filestore instances snapshots create SNAPSHOT_ID \
--instance = INSTANCE_ID \
--instance-location = LOCATION \
--description = " DESCRIPTION " \
--labels = KEY = VALUE
Replace the following:
SNAPSHOT_ID with the name that you want to give the snapshot. The
file share name and snapshot ID can have a combined length of up to 77
characters. For example, my-snapshot-1 .
INSTANCE_ID with the name of the instance from which you want to
create a snapshot. For example, my-instance-1 .
LOCATION with the zone or region
of the instance. For example, us-east1-b or us-central1 , respectively.
Note that your instance's service tier
determines whether a zone or region is a valid argument.
DESCRIPTION with a description of the snapshot.
KEY=VALUE,... with one or more KEY=VALUE pairs that you want to
include.
Example
The following command creates a snapshot of the instance nfs-server , which
is located in us-central1 . The snapshot is named nfs-server-snapshot .
gcloud filestore instances snapshots create nfs-server-snapshot \
--instance = nfs-server \
--instance-location = us-central1 \
List, view, update, and delete snapshots
You can list, view, update, and delete snapshots.
Google Cloud console
To manage your snapshots in the Google Cloud console:
Go to the Filestore instances page.
Go to the Filestore instances page
Click the instance ID of the instance that you want to view snapshots
of.
Click the Snapshots tab.
From the Snapshots tab:
To see details about a snapshot, click its snapshot ID.
To edit a snapshot, click Edit in the snapshots details page.
To delete a snapshot:
Click the snapshot ID of the snapshot that you want to delete.
Click Delete .
When prompted, type the snapshot ID.
Click Delete .
gcloud CLI
List all snapshots in your current project
To view a list of snapshots for an instance, run the instances snapshots list
command:
gcloud filestore instances snapshots list \
--instance = INSTANCE_ID \
--instance-location = LOCATION
Replace the following:
INSTANCE_ID with the name of the instance from which you want to
create a list of snapshots. For example, my-instance-1 .
LOCATION with the zone or region
of the instance. For example, us-east1-b or us-central1 , respectively.
Note that your instance's service tier
determines whether a zone or region is a valid argument.
View information about a snapshot
To view information about a snapshot, run the instances snapshots describe
command:
gcloud filestore instances snapshots describe SNAPSHOT_ID \
--instance = INSTANCE_ID \
--instance-location = LOCATION
Replace the following:
SNAPSHOT_ID with the name that you want to give the snapshot. For
example, my-snapshot-1 .
INSTANCE_ID with the name of the instance from which the snapshot
was created. For example, my-instance-1 .
LOCATION with the zone or region
of the instance from which the snapshot was created. For example, us-east1-b
or us-central1 , respectively. Note that your instance's service tier
determines whether a zone or region is a valid argument.
Update a snapshot
To update a snapshot, run the instances snapshots update
command. The --description and --update-labels flags are added as optional
arguments:
gcloud filestore instances snapshots update SNAPSHOT_ID \
--instance = INSTANCE_ID \
--instance-location = LOCATION \
--description = " NEW-DESCRIPTION " \
--update-labels = KEY1 = VALUE1,KEY2 = VALUE2...
Replace the following:
SNAPSHOT_ID with the name that you want to give the snapshot. For
example, my-snapshot-1 .
INSTANCE_ID with the name of the instance from which the snapshot
was created. For example, my-instance-1 .
LOCATION with the zone or region
of the instance from which the snapshot was created. For example, us-east1-b
or us-central1 , respectively. Note that your instance's service tier
determines whether a zone or region is a valid argument.
NEW-DESCRIPTION with a new description of the snapshot.
KEY1=VALUE1,... with one or more KEY=VALUE pairs that you want to
update. If a label exists, its value is updated, otherwise a new label is
created.
Delete a snapshot
Snapshot deletion is a long running operation that can take multiple hours to
complete, depending the number of files involved.
To delete a snapshot, run the instances snapshots delete
command:
gcloud filestore instances snapshots delete SNAPSHOT_ID \
--instance = INSTANCE_ID \
--instance-location = LOCATION \
Replace the following:
SNAPSHOT_ID with the name that you want to give the snapshot. For
example, my-snapshot-1 .
INSTANCE_ID with the name of the instance from which the snapshot
was created. For example, my-instance-1 .
LOCATION with the zone or region
of the instance from which the snapshot was created. For example, us-east1-b
or us-central1 , respectively. Note that your instance's service tier
determines whether a zone or region is a valid argument.
Restore data
You can restore individual files from a snapshot or revert the entire file share
to a prior snapshot state.
For more information, see Restore a file from a snapshot
and Revert an instance to a prior snapshot state .
Monitoring
You can monitor an instance's snapshot capacity using Metrics Explorer. For more
information, see Create charts with Metrics Explorer .
What's next
Snapshots overview
Restore a file from a snapshot
Revert an instance to a prior snapshot state
Schedule Filestore enterprise snapshots
Backups overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
