---
title: "Prerequisites for managed migration \_|\_ Dataproc Metastore \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/managed-migration-prerequisites
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/managed-migration-prerequisites
  title: "Prerequisites for managed migration \_|\_ Dataproc Metastore \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
Prerequisites for managed migration
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to set up your Google Cloud project to prepare for a
Dataproc Metastore managed migration.
Before you begin
Understand how managed migration works .
Set up or have access to the following services:
A Dataproc Metastore configured with the Spanner
database type .
A Cloud SQL for MySQL database instance configured with Private
IP . For the Cloud SQL instance, ensure the following:
The Cloud SQL instance is configured with a VPC network that uses
the required subnets .
The Cloud SQL instance uses a database schema that is compatible with the Hive
Metastore version that runs on the Dataproc Metastore service
(where it's copying data to).
The Cloud SQL instance contains the appropriate users to
establish connectivity between Datastream and Dataproc Metastore
and Dataproc Metastore and Cloud SQL.
Required Roles
To get the permissions that
you need to create a Dataproc Metastore and start a managed migration,
ask your administrator to grant you the
following IAM roles:
To grant full access to all Dataproc Metastore resources, including setting IAM permissions:
Dataproc Metastore Admin ( roles/metastore.admin )
on the Dataproc Metastore user account or service account
To grant full control of Dataproc Metastore resources:
Dataproc Metastore Editor ( roles/metastore.editor )
on the Dataproc Metastore user account or service account
To grant permission to start a migration:
Migration Admin ( roles/metastore.migrationAdmin )
on the Dataproc Metastore service agent in the service project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Grant additional roles depending on your project settings
Depending on how your project is configured, you might need to add the following
additional roles. Examples on how to grant these roles to the appropriate
accounts are shown in the prerequisites section later on this page.
Grant the Network User ( roles/compute.networkUser ) role to the
Dataproc Metastore service agent and the
[Google APIs Service Agent] on the service project.
Grant the Network Admin ( roles/compute.networkAdmin ) role to the
Datastream Service Agent on the host project.
If your Cloud SQL instance is in a different project than the Dataproc Metastore service project:
Grant the roles/cloudsql.client role and the roles/cloudsql.instanceUser
role to the Dataproc Metastore service agent on the Cloud SQL instance project.
If the Cloud Storage bucket for the Change-Data-Capture pipeline is in a different project than your Dataproc Metastore service project:
Make sure your Datastream service agent has the required permissions to write to the bucket. Typically these are the roles/storage.objectViewer ,
roles/storage.objectCreator and roles/storage.legacyBucketReader roles.
Managed migration prerequisites
Dataproc Metastore uses proxies and
a change data capture pipeline to facilitate the data transfer.
It's important to understand how these work before starting a transfer.
Key terms
Service Project : A service project is the Google Cloud project where you
created your Dataproc Metastore service.
Host Project : A host project is the Google Cloud project that holds
your Shared VPC networks. One or more service projects can be linked
to your host project to use these shared networks. For more information,
see Shared VPC .
Note: If you don't use a Shared VPC, then the service and host project
are the same where the Dataproc Metastore service is created.
Enable the Datastream API in your
service project.
Grant the roles/metastore.migrationAdmin role to the Dataproc Metastore
Service Agent in your service project.
gcloud projects add-iam-policy-binding SERVICE_PROJECT --role "roles/metastore.migrationAdmin" --member "serviceAccount:service- SERVICE_PROJECT @gcp-sa-metastore.iam.gserviceaccount.com"
Add the following firewall rules.
To establish a connection between Dataproc Metastore and your private
IP Cloud SQL instance.
A firewall rule to allow traffic from the health check
probe probe to the network load
balancer of SOCKS5 proxy. For example:
gcloud compute firewall-rules create RULE_NAME --direction=INGRESS --priority=1000 --network= CLOUD_SQL_NETWORK --allow=tcp:1080 --source-ranges=35.191.0.0/16,130.211.0.0/22
Port 1080 is where the SOCKS5 proxy server is running.
A firewall rule to allow traffic from the load balancer to the SOCKS5
proxy MIG. For example:
gcloud compute firewall-rules create RULE_NAME --direction=INGRESS --priority=1000 --network= CLOUD_SQL_NETWORK --action=ALLOW --rules=all --source-ranges= PROXY_SUBNET_RANGE
A firewall rule to allow traffic from the Private Service Connect service attachment to the load balancer. For example:
gcloud compute firewall-rules create RULE_NAME --direction=INGRESS --priority=1000 --network= CLOUD_SQL_NETWORK --allow=tcp:1080 --source-ranges= NAT_SUBNET_RANGE
A firewall rule to allow Datastream to use the /29 CIDR IP range
to create a private IP connection. For example:
gcloud compute firewall-rules create RULE_NAME --direction=INGRESS --priority=1000 --network= CLOUD_SQL_NETWORK --action=ALLOW --rules=all --source-ranges= CIDR_RANGE
(Optional) Add roles to Shared VPC
Follow these steps if you use a Shared VPC.
For more details about a Shared VPC, see Service Project Admins .
Note: If you can't assign these roles at the host project level, you can assign them
at the individual subnet levels.
Grant the roles/compute.networkUser role to the Dataproc Metastore
Service Agent and the Google API Service Agent on the host project.
gcloud projects add-iam-policy-binding HOST_PROJECT --role "roles/compute.networkUser" --member "serviceAccount:service- SERVICE_ACCOUNT @gcp-sa-metastore.iam.gserviceaccount.com"
gcloud projects add-iam-policy-binding HOST_PROJECT --role "roles/compute.networkUser" --member "serviceAccount: SERVICE_PROJECT @cloudservices.gserviceaccount.com"
Grant the roles/compute.networkAdmin role to the Datastream Service Agent
on the host project.
gcloud projects add-iam-policy-binding HOST_PROJECT --role "roles/compute.networkAdmin" --member "serviceAccount:service- SERVICE_PROJECT @gcp-sa-datastream.iam.gserviceaccount.com"
If you can't grant the roles/compute.networkAdmin role, create a
custom role with the permissions listed in Shared VPC
prerequisites .
These permissions are required at the start of the migration to establish
peering between the VPC network in the host project with Datastream.
This role can be removed as soon as the migration is started. If you
remove the role before the migration is complete, Dataproc Metastore
can't clean up the peering job. In this case, you must clean the job up yourself.
What's next
Use managed migration
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
