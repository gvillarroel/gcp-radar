---
title: "Delete instances \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/deleting-instances
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/deleting-instances
  title: "Delete instances \_|\_ Filestore \_|\_ Google Cloud Documentation"
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
Delete instances
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to delete a Filestore instance.
Delete an instance
Caution: Deleting a Filestore instance deletes all data on that
instance. Once an instance is deleted, the data stored in the instance is not
recoverable.
Before deleting a Filestore instance, unmount it from client VMs
first. Not doing so causes file operations to stop responding.
Google Cloud console
In the Google Cloud console, go to the Filestore Instances page.
Go to the Filestore instances page
Click the Filestore instance ID to open the instance details
page.
Click Delete delete .
When prompted, type the instance ID.
Click Delete .
gcloud
Before you begin
To use the gcloud CLI, you must either
install the gcloud CLI
or use the Cloud Shell
that's built into the Google Cloud console:
Go to the Google Cloud console
You can delete a Filestore instance by running the instances
delete command:
gcloud filestore instances delete instance-id \
--project=" project-id " \
--zone= zone
--force
where:
instance-id is the instance ID of the Filestore
instance you want to delete.
project-id is the project ID of the Google Cloud project that
contains the Filestore instance. You can skip this
flag if the Filestore instance is in the gcloud default
project. You can set the default project by running the config set project
command:
gcloud config set project project-id
zone is the zone where the Filestore
instance resides. Run the gcloud filestore zones list
command to get a list of supported zones. You can skip this flag
if the Filestore instance is in the gcloud default
zone. You can set the default zone by running the config set filestore/zone
command:
gcloud config set filestore/zone zone
--force Optional. Use this flag with the command to delete the
Filestore instance and any associated snapshots.
REST API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Filestore API :
curl -s \
--header "Authorization: Bearer $(gcloud auth print-access-token)" \
--header "Content-Type: application/json" \
--request DELETE "https://file.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /instances/ INSTANCE_NAME "
Where:
PROJECT is the name of the project where your
instance is located. For example, my-genomics-project .
LOCATION is the location where your instance
resides. For example, us-west1-a .
INSTANCE_NAME is the name of the instance you
want to delete. For example, my-genomics-instance .
Zonal with a higher capacity range (previously high scale SSD)
tier instances can take up to 10 minutes to delete, depending on the instance
size.
The Filestore quota is released when instance deletion completes but
you are not be billed for the instance during this time.
Delete instances that have snapshots
If you want to delete a zonal, regional, or enterprise instance that contains
snapshots, you must complete either of the following tasks:
Delete the instance's snapshots before deleting the instance.
Include the --force flag in the gcloud filestore instances delete command.
The Google Cloud console allows for the deletion of instances containing
snapshots and automatically deletes the snapshots.
What's next
Create a different instance .
What is a snapshot?
What is a backup?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
