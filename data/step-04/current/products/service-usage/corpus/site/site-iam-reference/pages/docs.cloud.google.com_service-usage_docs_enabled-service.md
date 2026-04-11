---
title: "Enabled services \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/enabled-service
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/enabled-service
  title: "Enabled services \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Service Usage
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Enabled services
To use most Google Cloud APIs and services, you must first enable them in a
Google Cloud project. Enabling APIs and services in a Google Cloud project,
results in the following changes:
Associates them with the project.
Adds monitoring pages in the Google Cloud console.
Enables billing for the APIs and services if billing is enabled for the
project.
In some cases, Identity and Access Management roles only become visible when you enable
the associated service.
Calling a service
The following list outlines the typical high-level requirements for using
Google Cloud APIs and services:
A Google Cloud project. For details on creating Google Cloud projects,
see
Creating and Managing Projects .
To enable the service for the project. To learn how to enable APIs and
services, see
Enabling and Disabling Services .
Authentication credentials for the enabled service you are using. To learn
how to authenticate to a Cloud API , see
Authentication methods .
The credentials you use to call Google Cloud APIs and services are
associated with the project you use to create them.
IAM role visibility
Some IAM roles are only visible if the associated service is
enabled in a Google Cloud project. For example, the roles/compute.admin role
is only visible after the compute.googleapis.com API is enabled in a project.
To learn how to list the available roles to grant in a project, see
Viewing the Grantable Roles on Resources .
Services enabled by default
When you create a Google Cloud project using the Google Cloud console or
Google Cloud CLI, the following APIs and services are enabled by default:
Note: You can disable any of the following services, just like any other service
you enable.
BigQuery sharing (formerly Analytics Hub)
BigQuery API
BigQuery Connection API
BigQuery Data Policy API
BigQuery Migration API
BigQuery Reservation API
BigQuery Storage API
Cloud Datastore API
Cloud Dataform API
Cloud Dataplex API
Cloud Logging API
Cloud Monitoring API
Cloud SQL
Cloud Storage
Cloud Storage API
Cloud Trace API
Google Cloud APIs
Google Cloud Storage JSON API
Service Management API
Service Usage API
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
