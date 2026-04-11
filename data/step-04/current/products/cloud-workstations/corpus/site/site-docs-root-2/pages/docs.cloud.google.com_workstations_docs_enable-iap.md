---
title: "Enable IAP \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/enable-iap
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/enable-iap
  title: "Enable IAP \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Enable IAP
Stay organized with collections
Save and categorize content based on your preferences.
Use Identity-Aware Proxy (IAP) to control access to applications
on your workstations. IAP establishes a central authorization
layer, allowing you to manage access at the application level rather than
relying on network-level firewalls.
You can control access based on user identity, group membership, device
security, location, IP address, and other signals. Users access applications
using their web browser and HTTPS, while IT teams centrally define and enforce
access policies in one place.
This document describes how to enable IAP for applications on
workstations in your cluster. The following diagram illustrates a cluster
with IAP enabled:
Figure 1. Cluster with IAP enabled
Before you begin
Before you can enable IAP for your workstations, your cluster
needs the following:
A custom domain: IAP is only supported on workstation
clusters that use a custom domain.
An Application Load Balancer: This load balancer will handle all
ingress HTTP traffic using a Private Service Connect (PSC) endpoint
and lets you to configure the IAP.
To set up these components, see Set up custom domains for Cloud Workstations .
Enable the proxy
To enable IAP for your workstations, follow these steps:
Enable IAP on the cluster's Application Load Balancer, by
running the following command:
gcloud compute backend-services update BACKEND_SERVICE_NAME \
--iap = enabled,oauth2-client-id = CLIENT_ID ,oauth2-client-secret = CLIENT_SECRET \
--global
Replace the following:
BACKEND_SERVICE_NAME : the name of the backend service you created while setting up a custom domain for your cluster.
CLIENT_ID : the OAuth 2.0 client ID.
CLIENT_SECRET : the OAuth 2.0 client secret.
For more information on setting up a Application Load Balancer with
IAP enabled, see Enable IAP on a load balancer .
Grant access to users in your domain:
gcloud iap web add-iam-policy-binding \
--resource-type = backend-services \
--service = BACKEND_SERVICE_NAME \
--member = ' PRINCIPAL ' \
--role = 'roles/iap.httpsResourceAccessor' \
--condition = "expression= EXPRESSION ,title= TITLE ,description= DESCRIPTION "
Replace the following:
BACKEND_SERVICE_NAME : the name of the backend service.
PRINCIPAL : the principal to grant access to. For example, group:my-group@example.com , user:test-user@example.com , or domain:example.com .
EXPRESSION : the condition expression, written in the Common Expression Language (CEL). For example, this expression can be used to specify access levels to configure context-aware access.
TITLE : a title for the condition.
DESCRIPTION : an optional description for the condition.
Cloud Workstations still performs the IAM checks based on the IAM policy configured on the individual workstation resources. To avoid redundancy, consider configuring the IAP policy to grant permissions to a broad group that
encompasses all approved workstation users, or your entire domain. You can primarily use this policy to specify access levels to configure context-aware access.
For more information on granting access to users, see gcloud iap web add-iam-policy-binding .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
