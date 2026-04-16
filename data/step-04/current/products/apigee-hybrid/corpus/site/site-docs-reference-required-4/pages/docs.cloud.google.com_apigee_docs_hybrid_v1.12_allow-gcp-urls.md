---
title: "Google Cloud URLs to allow for Hybrid \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls
  title: "Google Cloud URLs to allow for Hybrid \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Google Cloud URLs to allow for Hybrid
Stay organized with collections
Save and categorize content based on your preferences.
You are currently viewing version 1.12 of the
Apigee hybrid documentation. This version is end of life. You should upgrade to a
newer version. For more information, see
Supported versions .
Version 1.12 keyboard_arrow_down
Supported versions:
v1.16 (latest)
v1.15
v1.14
List of supported versions
Unsupported versions:
v1.13
v1.12
v1.11
v1.10
v1.9
v1.8
v1.7
v1.6
v1.5
v1.4
v1.3
v1.2
v1.1
If you have a restricted VPC environment where external domains need to be allowed, here is a
list of Google Cloud urls that Apigee hybrid may need to connect with during install
and runtime.
Google Cloud URLs for all Apigee hybrid installations
These URLs are used by all Apigee hybrid installations:
URL
Description
apigee.googleapis.com
The runtime uses these APIs to learn which proxies, shared flows,
etc., it should deploy, and to report its current configuration and health.
apigeeconnect.googleapis.com
This APIs is needed for apigee-mart-server and apigee-connect
communication when you have vpc-sc enabled to talk to the control plane.
binaryauthorization.googleapis.com
Optional. Only for Anthos if
binary authorization
is enabled
gcr.io
Contanier images are hosted in Google Container Registry.
iamcredentials.googleapis.com
Required for generating access tokens used
by other Google Cloud API calls. For example, for runtime to make calls to download runtime
contracts from
apigee.googleapis.com, the permission is granted by a service account. So the runtime
needs to get an access token before making the call to apigee.googleapis.com.
logging.googleapis.com
This API is needed for the logging agent to send logs
to Cloud Logging.
monitoring.googleapis.com
Cloud Monitoring service endpoint to export metrics.
oauth2.googleapis.com
Authentication and authorization
pubsub.googleapis.com
The runtime subscribes to a pubsub topic to learn when to
initialize debug sessions.
quay.io
Container registry used by
cert-manager . See
Step 8: Install cert-manager .
serviceusage.googleapis.com
Inspect and manage quota for service consumers on Google Cloud
Platform. Required by Anthos Service Mesh
storage.googleapis.com
The runtime downloads proxies, shared flows, resource files, and
keystore aliases from Google Cloud Storage in tenant project.
sts.googleapis.com
The Security Token Server providers API method for third party developers
to exchange third party credentials to Google Cloud Platform tokens.
www.googleapis.com
Needed by the MART component.
Google Cloud URLs for Anthos installations
All Apigee hybrid installations on Anthos (on-prem and multi-cloud) use additional Google
Cloud URLs. For more information, see:
Proxy and firewall rules
for Anthos on-prem
Proxy
allowlist for Anthos multi-cloud
Google Cloud URLs for data residency
If you are using forward proxy with data residency , you must allowlist:
CONTROL_PLANE_LOCATION -apigee.googleapis.com for each control plane location.
Tip: If your security protocols permit, you can allowlist *-apigee.googleapis.com
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
