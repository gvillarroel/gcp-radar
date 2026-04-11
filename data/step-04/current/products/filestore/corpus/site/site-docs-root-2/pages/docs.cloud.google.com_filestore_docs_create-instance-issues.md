---
title: "Troubleshoot instance creation \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/create-instance-issues
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/create-instance-issues
  title: "Troubleshoot instance creation \_|\_ Filestore \_|\_ Google Cloud Documentation"
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
Troubleshoot instance creation
Stay organized with collections
Save and categorize content based on your preferences.
This page provides troubleshooting information to help address issues you might
encounter while attempting to create a Filestore instance.
PERMISSION DENIED when creating a Filestore instance
Check if the Filestore API is enabled:
gcloud services enable file.googleapis.com
Each Filestore instance must have an IP address range associated
with it that does not overlap with another range in use. For a detailed list
of restrictions, see Configuring a reserved IP address range .
Check if you have the roles/file.editor role. For details see
Access control or
IAM roles and permissions .
If you are still encountering the error, then the Filestore
service account might have had its
file.serviceAgent role removed. To check if this is the case, run:
gcloud projects get-iam-policy project-id-or-number \
--flatten="bindings[].members" \
--format='table(bindings.role)' \
--filter="bindings.members:service- project-number @cloud-filer.iam.gserviceaccount.com"
where:
project-id-or-number is the ID or number of your Google Cloud
project.
project-number is the number of your Google Cloud
project.
The command should return something similar to the following:
ROLE
roles/file.serviceAgent
If roles/file.serviceAgent is not listed, you can restore it by running:
gcloud projects add-iam-policy-binding project-id-or-number \
--member serviceAccount:service- project-number @cloud-filer.iam.gserviceaccount.com \
--role roles/file.serviceAgent
System limit for internal resources has been reached error when creating an instance
This error is caused by Filestore reaching an internal network
quota. For every VPC network that you create a Filestore instance
on, Filestore must create an
internal network
that peers with that network. These internal networks are preserved even
when the Filestore instances and VPC networks associated with them
are deleted.
Once the number of internal networks reaches 49 for a project,
Filestore is no longer able to create new internal networks, which
prevents you from creating Filestore instances on new VPC networks.
Attempting to do so results in one of the following errors:
System limit for internal resources has been reached. Please request to adjust limit here: https://forms.gle/PFPJ2QD4KnCHzYEx9
You can clear the internal networks by disabling and then re-enabling the
Filestore API.
Important: Before you can disable the API, you must delete all
Filestore related resources, such as Filestore
instances and backups. Caution: Disabling the Filestore API removes previously granted
quota increase requests.
Use the gcloud services disable
command to disable the Filestore API:
gcloud services disable file.googleapis.com
Then, use the gcloud services enable
command to re-enable the Filestore API:
gcloud services enable file.googleapis.com
If you can't disable the API because you have Filestore instances
that you cannot delete or you don't want to lose quota that you've been granted
through quota increase requests, then you can fill out the following form to
have your network limits adjusted:
https://forms.gle/PFPJ2QD4KnCHzYEx9
If you need to regularly delete and create VPC networks and
Filestore instances, there are two ways to avoid running out of
network quota:
When you create a VPC network, use the same name as a previous network that's
been used for Filestore instance creation.
Cycle through a pool of no more than 49 VPC networks instead of deleting and
then recreating them.
What's next
Known issues
Troubleshoot slow performance
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
