---
title: "Create a DNS threat detector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dns/docs/create-threat-detector
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dns/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dns/docs/create-threat-detector
  title: "Create a DNS threat detector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud DNS
Guides
Send feedback
Create a DNS threat detector
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create and modify a DNS threat detector to monitor
VPC networks for malicious, internet-bound DNS activity.
For more information about DNS threat detection, see
DNS Armor overview .
DNS threat monitoring can impact your billing. See Cloud DNS Pricing
for more information.
Before you begin
Complete the following before you create a DNS threat detector.
Enable
the Network Security API
in your project.
Make sure that you have the required roles to enable a DNS threat detector.
If you want to use Google Cloud CLI to perform tasks, update Google Cloud CLI to the latest version.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
networksecurity.dnsThreatDetectors.create
networksecurity.dnsThreatDetectors.delete
networksecurity.dnsThreatDetectors.get
networksecurity.dnsThreatDetectors.list
networksecurity.dnsThreatDetectors.update
Roles
roles/networksecurity.dnsThreatDetectorAdmin
Create DNS threat detector
To create a DNS threat detector for all of your VPC networks
in a project, complete the following steps. Any new VPC
networks added to the project are monitored automatically.
You can have only one DNS threat detector enabled for a project.
Console
In the Google Cloud console, go to the Advanced threat detection page.
Go to Advanced threat detection
Click Create DNS threat detector .
Enter a name for your DNS threat detector.
Select All VPC networks in the project .
Click Create .
gcloud
gcloud network-security dns-threat-detectors create NAME \
--location=global \
--project= PROJECT_ID \
--provider="INFOBLOX"
Replace the following:
NAME : the name for your DNS threat detector.
PROJECT_ID : your project ID.
API
POST https://networksecurity.googleapis.com/v1/projects/ PROJECT_ID /locations/global/dnsThreatDetectors?dnsThreatDetectorId= NAME
{
"provider" : "INFOBLOX"
}
Replace the following:
NAME : the name of your DNS threat detector.
PROJECT_ID : your project ID.
Exclude a VPC network from threat monitoring
You can exclude a VPC network from threat monitoring by editing
your DNS threat detector. You can also exclude the network when creating a DNS
threat detector.
New VPC networks added to the project are monitored automatically.
Console
In the Google Cloud console, go to the Advanced threat detection page.
Go to Advanced threat detection
Click More more_vert , and select
Edit .
In the Scope section, select All VPC networks in the project except excluded networks .
Select the VPC networks that you don't want to monitor.
Click Save .
gcloud
gcloud network-security dns-threat-detectors update NAME \
--add-excluded-networks= LIST_OF_NETWORKS \
--provider="INFOBLOX" \
--location=global
Replace the following:
NAME : the name of your DNS threat detector.
LIST_OF_NETWORKS : the list of VPC networks you want to exclude.
PROJECT_ID : your project ID.
API
PATCH https://networksecurity.googleapis.com/v1/projects/ PROJECT_ID /locations/global/dnsThreatDetectors/ NAME
{
"name" : " NAME ",
"excluded_networks" : [ " LIST_OF_NETWORKs " ],
"provider" : "INFOBLOX"
}
Replace the following:
NAME : the name of your DNS threat detector.
PROJECT_ID : your project ID.
LIST_OF_NETWORKS : a comma-delimited list of VPC networks you want to exclude. Each network must be in quotes.
Remove your DNS threat detector
You can delete your DNS threat detector.
Console
In the Google Cloud console, go to the Advanced threat detection page.
Go to Advanced threat detection
Click More more_vert , and select Delete .
gcloud
gcloud network-security dns-threat-detectors delete NAME \
--project= PROJECT_ID \
--location=global
Replace the following:
NAME : the name of your DNS threat detector.
PROJECT_ID : your project ID.
API
DELETE https://networksecurity.googleapis.com/v1/projects/ PROJECT_ID /locations/global/dnsThreatDetectors/ NAME
{
"name" : " NAME ",
}
Replace the following:
NAME : the name of your DNS threat detector.
PROJECT_ID : your project ID.
Add labels
You can add labels to your DNS threat detector after it has been created.
Console
In the Google Cloud console, go to the Network Security page.
Go to Network Security
Click More more_vert , and select Label .
Enter or select labels for your DNS threat detector.
What's next
To view any threats detected, see View threats .
For more information about logging, see Use logging and monitoring .
To find solutions for common issues that you might encounter with your DNS threat detector, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
