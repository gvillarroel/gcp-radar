---
title: "Set up a Google Cloud project for TPUs \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tpu/docs/quick-starts
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/tpu/docs
source_metadata:
  url: https://docs.cloud.google.com/tpu/docs/quick-starts
  title: "Set up a Google Cloud project for TPUs \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud TPU
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up a Google Cloud project for TPUs
This topic describes how to set up your Google Cloud project to use Cloud TPU
VMs:
Create a Google Cloud project
Configure your Google Cloud project for Cloud TPU
Create a Google Cloud project
In the Google Cloud console, sign in
to your Google Account or sign up for a new account .
Create a Google Cloud project. For more information, see
Create a project .
Enable billing for your Google Cloud project .
For more information, see the Cloud Billing documentation .
Billing for all Cloud TPU versions uses the standard regional
pricing on the Cloud TPU pricing page .
Configure your Google Cloud project for Cloud TPU
You can configure your Google Cloud project using the Cloud Shell, a
Compute Engine VM, or your local machine. The Cloud Shell lets
you interact with TPU VMs without installing any software. The
Cloud Shell disconnects after a period of inactivity. If you're running
long-running commands, we recommend installing the Google Cloud CLI on your local
machine. For more information on the Google Cloud CLI, see the gcloud
Reference .
If you are using a local machine or a Compute Engine VM, install the
Google Cloud CLI . The Google Cloud CLI includes the
gcloud command you use to work with Google Cloud resources and services.
Note: If you need to use a specific release of gcloud CLI
components, install these components to ensure that relevant commands and
flags are supported. For example, for alpha components, run gcloud
components install alpha . Note: If you installed the gcloud CLI previously, make sure you
have the latest version by running gcloud components update .
Configure the gcloud command to use your project.
export PROJECT_ID = your-project-id
gcloud config set project $PROJECT_ID
Activate the Cloud TPU API using gcloud or the Google Cloud console:
gcloud
gcloud services enable tpu.googleapis.com
Console
In the Google Cloud console, go to the Cloud TPU API page.
Go to Cloud TPU API
Click Enable .
Make sure your Google Cloud account has the following roles in your project:
Service Account Admin : This
role lets you create a service account
Project IAM Admin :
This role lets you grant a role in a project
TPU Admin : This role
lets you create a TPU
To view your current roles, see View current access .
To add any missing roles, see Grant a single IAM role
or ask your administrator to do it for you.
Create a Cloud TPU service agent:
A TPU service agent is a Google-managed service
account that lets the Cloud TPU service create and manage resources in
your Google Cloud project.
gcloud beta services identity create --service tpu.googleapis.com \
--project $PROJECT_ID
Create a TPU service account:
Service accounts provide credentials for your TPU VMs to access other
Google Cloud resources. To improve security, create a user-managed service
account that has only the permissions your TPU VM requires. To use it,
specify the service account with the --service-account flag when you
create the TPU VM.
Follow the instructions in Create service accounts
to create a user-managed service account.
Grant your service account the following roles so your TPU VM can access
common Google Cloud services:
TPU Admin : This role
provides full access to TPU resources
Storage Admin :
This role provides access to Cloud Storage
Logs Writer :
This role lets you write logs with the Cloud Logging API
Monitoring Metric Writer :
This role lets you write metrics to Cloud Monitoring
Note: If you don't specify a custom service account, your Cloud TPU uses
the default Compute Engine service account .
What's next
Learn how to plan your Cloud TPU resources
Learn how to create TPUs
Learn how to manage TPUs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
