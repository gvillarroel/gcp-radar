---
title: "Access your database \_|\_ Datastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/activate
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/activate
  title: "Access your database \_|\_ Datastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Guides
Send feedback
Access your database
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to access a Firestore in Datastore mode database from different
platforms.
Before you begin
This document assumes that you've already created a Datastore mode database.
If you haven't created a database, follow the instructions in the Firestore in Datastore mode
Quickstart .
Access your database from App Engine
To get started with Datastore mode and App Engine, see one of the
following language-specific pages:
App Engine Standard Environment
App Engine Flexible Environment
Python
Java
Go
Node.js
Python
Java
Node.js
Go
Ruby
PHP
Datastore mode permissions for App Engine
App Engine apps can access a Datastore mode database in the same
project by default. Each App Engine app uses an App Engine default service
account to manage access to Google Cloud
services such as Firestore. By default, the App Engine default
service account has the Project Editor IAM role ,
which includes full read and write access to Datastore mode.
You can modify the IAM permissions of your App Engine default service
account ,
but your app might lose access to Firestore unless you assign an IAM role
with the required Firestore
permissions . The
Datastore Owner and
Datastore User IAM roles, for
example, grant read and write access to Firestore in Datastore mode.
If you disable or delete your App Engine default service account, your
App Engine app will lose access to your Datastore mode database.
If you disabled your App Engine service account, you can re-enable it,
see enabling a service account .
If you deleted your App Engine service account within the last 30 days,
you can restore your service account, see
undeleting a service account .
Access your database from a Compute Engine instance
This section shows how to activate and access a Datastore mode
database from a Compute Engine VM instance in a new or existing project.
Datastore mode permissions for Compute Engine
Compute Engine apps can access a Datastore mode database in the same
project by default. Each Compute Engine app uses an Compute Engine default service
account to manage access to Google Cloud services such as
Firestore. By default, the Compute Engine default service account has
the Project Editor IAM role , which
includes full read and write access to Datastore mode.
To access your database from a Compute Engine instance, complete the following steps:
Enable the Google Compute Engine API for your project.
Enable the Compute Engine API
Verify that billing is enabled for your Google Cloud project .
Create a Compute Engine instance.
Console
In the Google Cloud console, go to the VM Instances page.
Click the Create instance button.
In the Identity and API access section, set Access scopes to provide
access for Datastore. Either click Allow full access to all Cloud APIs to
grant access to all Google Cloud APIs, or click Set access for each API ,
click the dropdown for Datastore , and then click Enabled to
grant access to Datastore.
Click the Create button to create the VM instance.
Confirm that your instance is running .
To use this new Compute Engine VM instance, connect
to it using your browser.
gcloud
If you haven't already done this, install the
Google Cloud CLI and set up gcloud compute .
Add a Compute Engine VM instance and start it, following the instructions for
starting an instance
in the Compute Engine documentation. Specify the project ID, the
VM instance name, and either the cloud-platform or the datastore
scope
as shown in the following example.
export PROJECT_ID =[ YOUR_PROJECT_ID ]
export INSTANCE_NAME =[ YOUR_INSTANCE_NAME ]
gcloud compute instances create $ INSTANCE_NAME --project $PROJECT_ID --scopes datastore
Replace [YOUR_PROJECT_ID] with the ID of the project you created
previously and [YOUR_INSTANCE_NAME] with the name you want
to use for your VM instance.
Confirm that your instance is running .
To use this new VM instance, connect
to the VM.
At this point all services and authorizations are configured for your
project and you can start writing code or exploring the API .
Access your database from another platform
This section shows how to access your Datastore mode database from
an external application running on a platform outside of Google Cloud.
First, create a service account:
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select a project.
In the Service account name field, enter a name. The
Google Cloud console fills in the Service account ID field based on this
name.
Optional: In the Service account description field, enter a description.
Click Create .
Click the Select a role field.
Under All roles , select a role that grants access to your database, such
as Datastore > Cloud Datastore User .
Click Continue .
Click Done to finish creating the service account.
Do not close your browser window. You will use it in the next procedure.
Then create a service account key:
In the Google Cloud console, click the email address for the service
account that you created.
Click Keys .
Click Add key , then Create new key .
Click Create . A JSON key file is downloaded to your computer.
Click Close .
Use this service account to configure credentials for your application code as
described in Providing service account credentials .
Quotas and billing
A certain amount of free quota is available, as described in
Pricing and Quota . This means you aren't required to
enable billing to get started or to use Firestore in Datastore mode up to the free
quota limits. However, if you need more resources than is provided by the free
quota, you must enable billing.
What's next
Learn about setting up authentication with client libraries .
Understand the how your credentials are used by client libraries .
To enable billing, see
Enable billing for a project .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
