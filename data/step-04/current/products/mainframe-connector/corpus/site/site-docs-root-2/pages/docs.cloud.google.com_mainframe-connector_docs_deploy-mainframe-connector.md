---
title: "Deploy Mainframe Connector on Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector
  title: "Deploy Mainframe Connector on Cloud Run \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Connector
Guides
Send feedback
Deploy Mainframe Connector on Cloud Run
Stay organized with collections
Save and categorize content based on your preferences.
This page discusses how you can deploy Mainframe Connector on
Cloud Run as a remote service using Terraform .
You can then use the Mainframe Connector remote service to transcode,
store, and export mainframe data on Google Cloud. You can trigger this service
from your mainframe to perform remote transcoding ,
or as a standalone instance that is integrated with an existing extract, transfer, and load (ETL) workflow .
You can also deploy multiple instances of the Mainframe Connector
remote service. For more information, see Deploy multiple instances of the Mainframe Connector .
To deploy Mainframe Connector on Cloud Run using
Terraform , use the following steps:
Download the Mainframe Connector deployment tar file .
Important
Be aware that Mainframe Connector uses Google Analytics
to collect usage data. This helps us improve the software and provide a
better user experience. By default, Google Analytics is enabled.
However, you can opt out by configuring an environment variable when
running Mainframe Connector.
The use of Google Analytics is subject to the Google Analytics
Terms of Service and Privacy Policy .
By downloading Mainframe Connector, you acknowledge that you have
read, understood, and accepted the terms and conditions.
Download
Cancel
Extract the files in the deployment tar file.
tar -xvf ./deployment.tar
The main.tf and vars.tf files are extracted from
deployment tar file.
Review and edit the variables in the vars.tf file. Most of the
variables already have default values. The only mandatory variables you need
to set are project and connector_service_account_email .
project : The Google Cloud project in which you want to
install Mainframe Connector.
connector_service_account_email : The service account that
has all the permissions for the operations you want to perform using
Mainframe Connector.
You can also set the network configuration using the
connector_service_ingress and connector_service_vpc_access
variables.
Run the terraform init
command with a Cloud Storage bucket and prefix as
arguments. Using a Cloud Storage bucket and prefix helps you save the
deployment state in the bucket. You can also reuse the same bucket and prefix
when you upgrade Mainframe Connector.
terraform init \
-backend-config bucket= DEPLOYMENT_STATE_BUCKET \
-backend-config prefix= BUCKET_PREFIX
Replace the following:
DEPLOYMENT_STATE_BUCKET : The name of the Cloud Storage bucket.
BUCKET_PREFIX : The prefix that you want to use in the
Cloud Storage bucket.
Create a .tfvars file to define variables that you want
Terraform to use during the Mainframe Connector deployment.
Open the .tfvars file and define the following variables as
key-value pairs.
instance_id : Define an instance_id to
separate different workloads when you want to have multiple instances of
Mainframe Connector, or to use different service accounts.
project : The project in which you want to deploy
Mainframe Connector.
connector_service_ingress : The ingress type.
additional_labels : Additional labels if you want to test
the deployment.
connector_service_account_email : The service account email
ID of Mainframe Connector.
Save your changes and close the file.
Deploy Mainframe Connector.
terraform apply -var-file= VARIABLE_FILE_NAME
Replace VARIABLE_FILE_NAME with the variables file you created in
the previous step.
(Optional) To check if Mainframe Connector is deployed and running,
go to the Cloud Run page, and select the Services tab. You
should see your deployment listed in the table.
Go to Cloud Run
Deploy multiple instances of the Mainframe Connector
To limit access for specific jobs, you might need to deploy multiple instances
of the Mainframe Connector. You can do this by deploying the
Mainframe Connector multiple times with different variables and service
accounts. Since the Mainframe Connector remote service is based on
Cloud Run, you will only be billed when each service is actually running.
You also don't need to set up high availability (HA) as each instance is already
load balanced and highly available.
What's next
Transcode mainframe data remotely on Google Cloud
Transcode mainframe data moved to Google Cloud using a virtual tape library
Run Mainframe Connector as a standalone job
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
