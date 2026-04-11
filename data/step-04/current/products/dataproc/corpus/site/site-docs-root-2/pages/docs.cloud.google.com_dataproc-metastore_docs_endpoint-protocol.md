---
title: "Choose an endpoint protocol for Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/endpoint-protocol
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/endpoint-protocol
  title: "Choose an endpoint protocol for Dataproc Metastore \_|\_ Google Cloud Documentation"
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
Choose an endpoint protocol for Dataproc Metastore
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to choose an endpoint protocol for
Dataproc Metastore.
You first choose your endpoint protocol when you create a
Dataproc Metastore service. This choice affects the features that
you can integrate and use with your service. It's important to note that once
you choose an endpoint protocol, there are some restrictions if you want to
change it. Make sure you choose the appropriate protocol for your needs.
To understand the differences between endpoint protocols, see About endpoint protocols .
Before you begin
Enable Dataproc Metastore
in your project.
Understand networking requirements
specific to your project.
Required Roles
To get the permission that
you need to create a Dataproc Metastore,
ask your administrator to grant you the
following IAM roles on your project, based on the principle of least privilege:
Grant full control of Dataproc Metastore resources ( roles/metastore.editor )
Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
metastore.services.create
permission,
which is required to
create a Dataproc Metastore.
You might also be able to get
this permission
with custom roles or
other predefined roles .
For more information about specific Dataproc Metastore roles and permissions, see Manage Managed Service for Apache Spark access with IAM .
Choose an endpoint protocol
The following examples show an abbreviated version of the steps that you follow
to choose an endpoint protocol. For complete step-by-step instructions on the
entire process you must follow, see Create a Dataproc Metastore .
For a new Dataproc Metastore service
To create a Dataproc Metastore service and choose the
endpoint protocol for the first time, follow these instructions:
Console
In the Google Cloud console, open the Dataproc Metastore page:
Open Dataproc Metastore
In the Dataproc Metastore Navigation menu, click Create .
The Create service page opens.
In the Endpoint protocol section, select Thrift or gRPC .
Thrift is the default preselected endpoint protocol.
You can only update an existing endpoint protocol from Thrift to gRPC.
If you want to move from gRPC to Thrift, create a new
Dataproc Metastore service.
Tip: We recommend that you use the gRPC protocol. gRPC provides additional
security through Identity and Access Management (IAM). It also supports federation
integrations with other Google Cloud products. For more information
about choosing an endpoint protocol, see About endpoint protocols .
Choose the remaining configurations
for your service, as needed.
To create and start the service, click Submit .
If you selected a gRPC endpoint, you must grant additional IAM permissions
to your service. For more information, see Access gRPC endpoints .
gcloud CLI
To choose an endpoint protocol, run the following gcloud metastore services create command:
gcloud metastore services create SERVICE \
--endpoint-protocol= ENDPOINT_PROTOCOL ; default="thrift"
Replace the following:
SERVICE_ID : The name or ID for your
Dataproc Metastore service.
ENDPOINT_PROTOCOL : The endpoint protocol that you
want to use for your Dataproc Metastore. You can specify either thrift or grpc .
Thrift is the default preselected endpoint protocol.
You can only update an existing endpoint protocol from Thrift to gRPC.
If you want to move from gRPC to Thrift, you must create a new service.
Tip: We recommend that you use the gRPC protocol. gRPC provides
additional security through Identity and Access Management (IAM). It also supports
federation integrations with other Google Cloud products. For more
information about choosing an endpoint protocol, see About endpoints .
Verify that your service was successfully created.
If you selected a gRPC endpoint protocol, you must add additional
IAM permissions to your account. For more information, see Access gRPC endpoints .
For an existing Dataproc Metastore service
To update the endpoint protocol of an existing Dataproc Metastore
service, follow these instructions:
Note: You can only update an existing endpoint protocol from Thrift to gRPC.
If you want to move from gRPC to Thrift, you must create a new service.
Console
In the Google Cloud console, open the Dataproc Metastore page:
Open Dataproc Metastore
On the Dataproc Metastore page, click the service to update.
The Service detail page opens.
On the Configuration tab, click Edit .
The Edit service page opens.
In the Endpoint protocol section, select gRPC .
To update the service, click Submit .
After updating to the gRPC endpoint protocol, you must add additional IAM permissions
to your account. For more information, see Access gRPC endpoints .
gcloud CLI
To update an endpoint protocol, run the following gcloud metastore services update command:
gcloud metastore services update SERVICE \
--endpoint-protocol= ENDPOINT_PROTOCOL
Replace the following:
SERVICE : The name of your Dataproc Metastore
service.
ENDPOINT_PROTOCOL : The endpoint protocol that you
want update for your Dataproc Metastore service. You can
only specify grpc .
Verify that your update was successful.
After updating to a gRPC endpoint, you must grant additional IAM
permissions to your service. For more information, see Access gRPC endpoints .
Find your endpoint URI value
Console
You can view your endpoint URI on the Dataproc Metastore page.
For Thrift endpoints, the URL value starts with thrift://
For gRPC endpoints, the URL value starts with https://
The following image shows an example of a Dataproc Metastore service
configured with a gRPC endpoint protocol.
gcloud CLI
To view your endpoint URI, run the following gcloud metastore services describe command:
gcloud metastore services describe SERVICE --format="get(endpointUri)"
Replace the following:
SERVICE : The name of your Dataproc Metastore
service.
What's next
Access gRPC endpoints
Attach a Managed Service for Apache Spark cluster
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
