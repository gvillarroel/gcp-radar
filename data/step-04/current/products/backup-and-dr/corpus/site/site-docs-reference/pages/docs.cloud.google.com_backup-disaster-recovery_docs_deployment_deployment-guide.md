---
title: "Deploy a backup/recovery appliance \_|\_ Backup and DR \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide
  title: "Deploy a backup/recovery appliance \_|\_ Backup and DR \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Guides
Send feedback
Deploy a backup/recovery appliance
Stay organized with collections
Save and categorize content based on your preferences.
Before you begin
Use the following procedures to prepare for the deployment:
Plan a Backup and DR deployment
Prepare to deploy Backup and DR
Enable Backup and DR
Console
In the Google Cloud console, click
menu Menu .
Select Operations > Backup and DR .
Click Enable .
The Setup Backup and DR wizard opens.
In the Activate the management console section, complete
the following:
Select the Location where you want the
appliance management console to be located. This is the Google Cloud
region, see
Supported regions .
Click Continue .
In the Deploy your first backup/recovery appliance section, complete
the following:
In Appliance name , enter a name for the appliance. The name must
start with a lowercase letter and can contain up to 23 characters. The
appliance name can only contain lowercase letters, numeric characters,
and dashes (-). Spaces are not allowed.
Select a VPC network . You can select the network within the same
project or from the Shared VPC project.
Select the Target project where you want to deploy your
backup/recovery appliance to.
Select the Region and Zone where you want your backup/recovery appliances
to be located. This is the Google Cloud region and zone, see
Supported regions .
Select Subnetwork . This is displayed based on the selected region
and zone.
Caution: Don't use the subnetwork with IP range of 172.17.0.0/16. This
subnet IP is used for Backup and DR internal purposes. Using
this IP range might fail the backup/recovery appliance deployment.
Select the Backup/recovery appliance type
based on the workload that you want to back up.
Select a Storage type to store backups. This option only appears
if you select Basic for databases, VMware VMs, & other resources for
the Backup/recovery appliance type .
Click Set up .
You are redirected to the status page. This can take about an hour to
complete.
When the deployment is complete, click Log in to the management console
and the appliance management console will open in a new window.
If you want to deploy a second appliance, click
Deploy another backup/recovery appliance . You can add up to 30 appliances
to an appliance management console. If you need to add more than 30 appliances,
create a new project, deploy a new appliance management console, and
then deploy the appliances.
Warning: After the backup/recovery appliance has been deployed, the
Compute Engine VM instances listing page shows a recommendation to
save money by resizing the instance. Don't do this. Resizing the appliance
or changing its machine configuration—changing the series, CPU,
memory—can make the backup/recovery appliance unusable.
gcloud
You can use gcloud CLI to create an appliance management console.
Creating backup/recovery appliances using gcloud CLI is not supported.
You must use the Google Cloud console to create backup/recovery appliances.
Use the following commands to create an appliance management console.
Create an appliance management console:
gcloud backup-dr management-servers create MANAGEMENT_SERVER_NAME \
--location= LOCATION_ID \
Note: By default, the project set in your gcloud CLI config is used.
To specify a different project, use the --project flag.
Replace the following:
MANAGEMENT_SERVER_NAME : a name for the management
console, for example, test name . Once the management server is
deployed, this name can't be changed. The name must be unique for a
project and location.
LOCATION_ID : enter a management console supported
location .
Get the list of supported locations by using
gcloud backup-dr locations list .
PROJECT_ID : the name of your project, for example,
test-project . Use this flag, if you want to specify a different
project.
You can check the status of the operation:
gcloud backup-dr operations describe FULL_OPERATION_ID
Replace the following:
FULL_OPERATION_ID : the operation ID that is
displayed for the appliance management console. It is in this format:
projects/test-project/locations/us-central1/operations/operationID
The output is displayed as:
```none
Create in progress for management server [projects/test-project/locations/us-central1/operations/test-operation] \
Run the [gcloud backup-dr operations describe] command to check the status of this operation.
```
Terraform
You can use the following Terraform resource links to deploy an
appliance management console and a backup/recovery appliance:
Deploy a appliance management console using Terraform resource
Deploy a backup/recovery appliance using Terraform resource
Caution: When deploying multiple backup/recovery appliances using Terraform,
each appliance must be associated with a unique Service Account. Using
the same Service Account for multiple appliances can lead to
registration timeouts or management failures.
Note: For debugging purposes, the Backup and DR Service collects appliance logs and
sends them to Cloud Logging. Standard Cloud Logging pricing applies to
this log collection. For pricing information, see Cloud Logging pricing .
To reduce the cost of logging service, contact customer support
to disable the optional logs.
What's next
After enabling Backup and DR Service, you can start exploring the
appliance management console and protect workloads.
Protect workloads
Use these instructions to protect Compute Engine instances:
Learn about Cloud credentials .
Assign required roles and permission .
Define a backup plan .
Discover and protect Compute Engine instances
Protect databases and file systems within VMs
Add your hosts and discover applications on your hosts .
Install the Backup and DR agent on the hosts .
Ensure firewall rules are set.
Define a backup plan .
Apply a backup plan to the discovered applications
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
