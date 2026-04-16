---
title: "Upgrade Mainframe Assessment Tool \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project
source_metadata:
  url: https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade
  title: "Upgrade Mainframe Assessment Tool \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Assessment Tool
Guides
Send feedback
Upgrade Mainframe Assessment Tool
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to upgrade Mainframe Assessment Tool.
Limitations
Upgrade is only supported for VM deployments (not supported for Google Kubernetes Engine)
deployments.
Mainframe Assessment Tool supports only sequential upgrades. You can upgrade only to the
next immediate version and can't skip intermediate versions. For example,
to upgrade from version 2.1.0 to 2.3.0, you must first upgrade to 2.2.0
and then upgrade to 2.3.0.
Before you begin
Use Mainframe Assessment Tool version 2.1.0 or later. Earlier versions don't support
upgrades.
Complete all in-progress assessments before you start the upgrade.
If you upgrade while an assessment is in progress, Mainframe Assessment Tool won't
resume the assessment following the upgrade and the assessment can't be
restarted. You must re-upload your application to restart
the assessment. However, your previously completed assessments are preserved.
Confirm that you have superuser privileges on the Mainframe Assessment Tool VM
instance to complete the upgrade.
Upgrade Mainframe Assessment Tool
To upgrade Mainframe Assessment Tool, follow these steps:
In the Google Cloud console, click
Activate Cloud Shell .
Go to the Google Cloud console
To connect to the Mainframe Assessment Tool VM, run the following command:
gcloud compute ssh VM_NAME --tunnel-through-iap
Replace VM_NAME with the name of the Mainframe Assessment Tool VM.
In the Mainframe Assessment Tool VM's command-line interface, to change your privileges
to superuser, run the following command:
sudo su
To download the upgrade script, run the following command:
gcloud storage cp "gs://mainframe-ai-release/mat/ VM_IMAGE_NAME /upgrade" DESTINATION_DIRECTORY
Replace the following:
VM_IMAGE_NAME : the name of the VM image that you want to upgrade to. For example,
mainframe-assessment-2-2-0 .
DESTINATION_DIRECTORY : the directory in your Mainframe Assessment Tool VM
where you want to download the upgrade script.
To make the script executable, run the following command:
chmod +x DESTINATION_DIRECTORY /upgrade
Replace DESTINATION_DIRECTORY with the directory in your
Mainframe Assessment Tool VM
To start the upgrade, run the following command:
DESTINATION_DIRECTORY /upgrade VERSION us-docker.pkg.dev/migrate-modernize-public/mainframe-assessment-prod
Replace the following:
DESTINATION_DIRECTORY : the directory in your
Mainframe Assessment Tool VM
where you have downloaded the upgrade script.
VERSION : the Mainframe Assessment Tool version that you
want to upgrade to. The version must be in mainframe-assessment-x-y-z format; example: mainframe-assessment-2-2-0 .
To confirm the upgrade, on the Admin & Settings page, refresh the page and
check the Version .
What's next
Learn how to configure settings for Mainframe Assessment Tool .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
