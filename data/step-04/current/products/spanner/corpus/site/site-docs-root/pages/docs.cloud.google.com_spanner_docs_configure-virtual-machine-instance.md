---
title: "Using Spanner in a virtual machine instance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/configure-virtual-machine-instance
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/configure-virtual-machine-instance
  title: "Using Spanner in a virtual machine instance \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Guides
Send feedback
Using Spanner in a virtual machine instance
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to grant your Compute Engine
virtual machine instance permission to access a
Spanner database.
Your instance can access the Cloud Spanner API from Compute Engine by
using a service account to act on your behalf. The service account provides
application default credentials
for your applications so that you don't need to configure each
Compute Engine instance to use your personal user credentials.
Configure the service account on your instance with one of the following
options:
For easy development and testing, configure your instance to
use the default service account with full access to all Cloud APIs .
For production environments,
create a service account with read and write access to your Spanner databases
and apply it to your instance.
Configure an instance with access to all Cloud APIs
To quickly allow your instance to access the Cloud Spanner API, create a new instance
to use the default service account and a scope with full access to all Cloud
APIs.
Go to the Compute Engine VM instances page.
Go to the VM instances page
Select your project and click Continue .
Click Create Instance to start creating a new instance.
In the Identity and API access section, click Allow full access to all Cloud APIs .
Configure other instance settings as needed, then click Create .
Now that the service account on your Compute Engine instance has access
to the Cloud Spanner API, use a client library to read
and write data in your Spanner database. The instance uses the
credentials from the default service account to authenticate with the
Cloud Spanner API.
Configure an instance with a service account
To restrict instance access to specific APIs and roles, create a service
account with permission only to access your Spanner
databases. Then, apply the service account to your instance.
Select a service account that will act on your behalf to access
Spanner. Use one of the following options:
Create a new service account .
Identify an existing service account
that you can use for your instance.
Grant a role to the service account
so that it has the necessary permissions to access Spanner. For a
list of roles that apply to Spanner, see
Access Control for Spanner .
Go to the Compute Engine VM instances page.
Go to the VM instances page
Select your project and click Continue .
Click Create Instance to start creating a new instance.
In the Identity and API access section, select the service account
from the list under Service account .
Configure other instance settings as needed, then click Create .
Now that the service account on your Compute Engine instance has access
to the Cloud Spanner API, use a client library to read
and write data in your Spanner database. The instance uses the
service account credentials to authenticate with the Cloud Spanner API.
What's next
Connect to your instance
and follow a client library tutorial to learn how
to read and write data to Spanner from your instance.
Learn more about service accounts on Compute Engine
and how you can use them to grant Identity and Access Management (IAM) roles and API access scopes to
the applications that run on your instances.
Learn how to
change service accounts on existing instances .
Learn more about
creating and starting an Compute Engine instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
