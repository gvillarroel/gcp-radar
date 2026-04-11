---
title: "Public and private services \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/public-vs-private
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/public-vs-private
  title: "Public and private services \_|\_ Service Usage \_|\_ Google Cloud Documentation"
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
Public and private services
This page compares the concepts of public and private services on Google Cloud.
Public APIs and services
Public APIs and services are globally visible across all Google Cloud
projects. Examples of public Google Cloud APIs and services include:
BigQuery API
Cloud Storage
Cloud Monitoring API
You need the appropriate permissions to list or use public
APIs and services in a Google Cloud project. For example, to enable a service,
you need the serviceusage.services.enable Identity and Access Management permission. To
learn about the required IAM permissions for
Service Usage, see
Access Control .
Private APIs and services
Private services are
typically APIs implemented using Cloud Endpoints running in
another Google Cloud project. To discover or use private APIs and services,
you must be first be granted access by a principal with the necessary
permissions. To learn how to grant access to enable Cloud Endpoints APIs from
a Google Cloud project, see the following pages for each of the respective
Cloud Endpoints API frameworks:
Controlling Who Can Enable Your API for the OpenAPI Specification.
Controlling Who Can Enable Your API for Endpoints Frameworks.
Controlling Who Can Enable Your API for gRPC.
You must also have the appropriate IAM permissions to list or use
private APIs and services. For example, to call the
services.enable
method for a private service, the servicemanagement.services.bind permission
is required. To learn about the necessary permissions for
Service Usage, see Access Control .
When you list available or enabled APIs and services in a Google Cloud project
, the results include any public and private APIs you have access to. To learn
more about listing enabled and available services in your
Google Cloud projects, see
Listing Services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
