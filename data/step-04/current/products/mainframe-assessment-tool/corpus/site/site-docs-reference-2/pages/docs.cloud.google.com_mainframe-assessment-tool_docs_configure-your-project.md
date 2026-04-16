---
title: "Configure your Google Cloud project for Mainframe Assessment Tool \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project
source_metadata:
  url: https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project
  title: "Configure your Google Cloud project for Mainframe Assessment Tool \_|\_\
    \ Google Cloud Documentation"
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
Configure your Google Cloud project for Mainframe Assessment Tool
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the process to set up and configure your Google Cloud
project to work with Mainframe Assessment Tool.
Before you begin
In the Google Cloud console, on the project selector page, select or
create a Google Cloud project .
Note: If you don't plan to keep the resources that you create in this
procedure, create a project instead of selecting an existing project. After
you finish these steps, you can delete the project, removing all resources
associated with the project.
Go to project selector
Make sure that billing is enabled for your Google Cloud project. For more
information, see Verify the billing status of your projects .
Create a dedicated service account to access Mainframe Assessment Tool. For more
information, see Create service accounts .
For large assessments, make sure that you have sufficient quota in the region
where you plan to create the Mainframe Assessment Tool instance. Larger quotas can be
allocated by purchasing a Provisioned Throughput
Enable APIs
Enable the Compute Engine API.
Enable Compute Engine API
Enable the Vertex AI API.
Enable Vertex AI API
Configure firewall rules
To enable secure access to the Mainframe Assessment Tool instance through IAP,
create the following firewall rules:
Create a firewall rule to allow
ingress traffic on TCP port 4000 by
using IAP for TCP forwarding :
gcloud compute firewall-rules create allow-ingress-from-iap \
--direction=INGRESS \
--action=allow \
--rules=tcp:4000\
--source-ranges=35.235.240.0/20
Create a firewall rule to deny all other ingress traffic to your
Mainframe Assessment Tool instance:
gcloud compute firewall-rules create deny-all-other-ingress \
--direction=ingress \
--action=deny \
--rules=all \
--source-ranges=0.0.0.0/0 \
--network=your-network-name \
--priority=65535
Assign IAM roles and permissions
To ensure that the dedicated
service account that you created has the necessary
permissions to give the Mainframe Assessment Tool components the required access to the Vertex AI API and other services,
ask your administrator to grant the
following IAM roles to the dedicated
service account that you created:
Important: You must grant these roles
to the dedicated
service account that you created, not to your user account. Failure to grant the roles to the correct principal might result in permission errors.
Vertex AI User ( roles/aiplatform.user )
Cloud Logging:
Cloud Logging Writer ( roles/logging.logWriter )
What's next
Learn how to Set up and access Mainframe Assessment Tool .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
