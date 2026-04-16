---
title: "Quickstart: Connect to AlloyDB from Cloud Shell using the Auth Proxy \_|\_\
  \ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell
  title: "Quickstart: Connect to AlloyDB from Cloud Shell using the Auth Proxy \_\
    |\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Connect to AlloyDB from Cloud Shell using the Auth Proxy
Learn how to establish a secure connection to your AlloyDB for PostgreSQL
instance from a Cloud Shell terminal using the AlloyDB Auth Proxy. This quickstart
is well-suited for new users who want a simple, pre-configured environment to
connect to their instance and test basic SQL queries.
Before you begin
In the Google Cloud console, on the project selector page, select or create
a Google Cloud project.
Go to project selector
Make sure that billing is enabled for your Google Cloud project. Verifying billing enables all necessary services.
Make sure that you have an AlloyDB instance configured for public IP .
Cloud Shell can't connect to a private IP address.
Required roles
To use the Auth Proxy, your user account must have the following
Identity and Access Management (IAM) roles :
AlloyDB Client ( roles/alloydb.client )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
If you don't have the required roles, ask your administrator to grant the
roles or follow these steps to grant them to your user account.
In the Google Cloud console, go to the IAM page.
Go to IAM
Find your user account in the list of principals.
Click Edit principal .
Click Add another role .
Search for and select the AlloyDB Client role.
Click Apply .
Click Add another role .
Search for and select the Service Usage Consumer role.
Click Apply .
Click Save .
Note: It can take a few minutes for new IAM permissions to become active.
Connect to your AlloyDB instance
The Cloud Shell environment includes the Auth Proxy
( alloydb-auth-proxy ) and psql, the PostgreSQL interactive terminal.
Activate Cloud Shell.
Activate Cloud Shell
Click Authorize Cloud Shell . You only need to do this the first time
you use Cloud Shell.
Confirm your user identity in the Cloud Shell Editor. Verify that
you're signed in with the user account that has the required
IAM roles.
gcloud config list
Get the Connection URI for your instance.
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Select your cluster and find your primary instance.
Click View connectivity configuration .
Copy the Connection URI .
Launch the Auth Proxy. In the Cloud Shell terminal,
use the copied URI and specify the --public-ip flag.
alloydb-auth-proxy CONNECTION_URI --public-ip
Replace the following:
CONNECTION_URI : the Connection URI
that you copied from the Google Cloud console.
The Auth Proxy starts and displays a message confirming that it's listening
on 127.0.0.1:5432 .
Open a new Cloud Shell tab, and connect to the database using psql.
psql "host=localhost user= POSTGRES_USERNAME dbname= POSTGRES_DATABASE port=5432"
To open a new terminal pane in the existing Cloud Shell
window, press Control+b + " or click
Add . This lets you keep the Auth Proxy running in one pane while you
run connection commands in the second pane.
To switch between panes, press Control+b+ keyboard_arrow_up
or Control+b+ keyboard_arrow_down .
Replace the following:
POSTGRES_USERNAME : your AlloyDB user,
typically postgres .
POSTGRES_DATABASE : your AlloyDB database
name, typically postgres .
When prompted, enter the password for your PostgreSQL user.
Verify the connection by running a SQL query.
SELECT now ();
To stop psql, enter \q .
To stop Cloud Shell, enter exit .
To stop the Auth Proxy, enter Control+c .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
In the Google Cloud console, go to the Clusters
page.
Go to Clusters
Click the cluster that you created.
Click Delete Cluster .
In the confirmation dialog, enter the ID of the cluster and click
Delete to delete the cluster and its instances.
What's next
Learn about other ways to connect to AlloyDB .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
