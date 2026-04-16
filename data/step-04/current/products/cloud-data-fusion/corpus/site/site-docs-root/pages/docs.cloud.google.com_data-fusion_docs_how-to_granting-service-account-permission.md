---
title: "Grant service account roles for Managed Service for Apache Spark \_|\_ Cloud\
  \ Data Fusion \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/how-to/granting-service-account-permission
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/how-to/granting-service-account-permission
  title: "Grant service account roles for Managed Service for Apache Spark \_|\_ Cloud\
    \ Data Fusion \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
Grant service account roles for Managed Service for Apache Spark
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to grant the Service Account User
role on Managed Service for Apache Spark Service Account to Cloud Data Fusion Service
Agent to allow it to provision and run pipelines on Managed Service for Apache Spark
clusters.
For service accounts that are used by Managed Service for Apache Spark, you also need to
grant datafusion.instances.runtime permission to access
Cloud Data Fusion runtime resources.
Note: Starting in Cloud Data Fusion versions 6.2.3, you can grant these
permissions in the UI when you create an instance.
To get the permissions that you need to create a Cloud Data Fusion instance,
ask your administrator to grant you the
Service Account Admin
( roles/iam.serviceAccountAdmin ) IAM role
on the Managed Service for Apache Spark service account.
Whether you use a user-managed service account, or the default Compute Engine
service account on the virtual machines in a cluster, you must grant the
Service Account User role to Cloud Data Fusion. Otherwise,
Cloud Data Fusion cannot provision a Managed Service for Apache Spark cluster
and the following error appears when you execute a data pipeline:
PROVISION task failed in REQUESTING_CREATE state for program run [pipeline-name] due to Managed Service for Apache Spark operation failure: INVALID_ARGUMENT: User not authorized to act as service account '[service-account-name]'
Get the service account name
In the Google Cloud console, go to the Identity and Access Management page.
Go to the IAM page
From the project selector at the top of the page, choose the project,
folder, or organization to which the Cloud Data Fusion instance
belongs.
Find and copy the Cloud Data Fusion service account
name. Use the following format:
service-[project-number]@gcp-sa-datafusion.iam.gserviceaccount.com .
Give service account user permission
In the Google Cloud console, go to the Service Accounts page.
Go to the Service Accounts page
Click Select a project , choose a project where the service account you
want to use for the Managed Service for Apache Spark cluster is located, and then
click Open .
Click the email address of the Managed Service for Apache Spark service account .
When Cloud Data Fusion provisions
a Managed Service for Apache Spark cluster, you can specify which user-managed
service account to use for the Managed Service for Apache Spark virtual machines in
that cluster. If a service account is not specified, the default
Compute Engine service account is used, which is in the format of
[project-number]-compute@developer.gserviceaccount.com .
Click the Principals with access tab. The page displays a list of
principals that have been granted roles on the service account.
Click person_add Grant access .
In the New principals field, paste the Cloud Data Fusion service
account name that you previously copied.
Select the Service Account User role.
Click Save .
Grant roles to Managed Service for Apache Spark service accounts
Grant runner role permission
Grant the Cloud Data Fusion runner role
( roles/datafusion.runner ) to service accounts that are used by
Managed Service for Apache Spark. This authorizes the Managed Service for Apache Spark service
account to run Cloud Data Fusion pipelines in your project .
For more information, see Requiring permission to attach service accounts to resources .
Grant Cloud Storage admin permission
In Cloud Data Fusion versions 6.2.0 and above, grant the
Cloud Storage admin role
( roles/storage.admin ) to service accounts that are used by
Managed Service for Apache Spark in your project .
What's next
Learn more about Access control in Cloud Data Fusion.
Learn more about Cloud Data Fusion service accounts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
