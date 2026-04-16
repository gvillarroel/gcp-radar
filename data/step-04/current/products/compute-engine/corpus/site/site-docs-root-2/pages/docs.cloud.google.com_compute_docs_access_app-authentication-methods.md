---
title: "Choose a workload authentication method \_|\_ Compute Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/access/app-authentication-methods
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/access/app-authentication-methods
  title: "Choose a workload authentication method \_|\_ Compute Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Choose a workload authentication method
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how you authenticate applications or
workloads that are either running in a production environment on
Compute Engine or being tested locally for future deployment to the
production environment. You can do the following:
Authenticate your workloads to use Google APIs
Authenticate your workloads to other workloads over mTLS
Authenticate your workloads to use Google APIs
Use the following table to determine which authentication method to use
for your workloads.
Task
Method
Authenticate apps or workloads that are in production
Use the service account that is attached to the VM.
This is the most common method for authenticating apps and workloads
that are running on virtual machine (VM) instances on Google Cloud.
For detailed instructions, see
Authenticate workloads to Google Cloud APIs using service accounts .
Authenticate apps or workloads that are in development
Use Google Cloud SDK and Application Default Credentials. For more
information, see
Set up ADC
for a local development environment .
Authorizing apps and workloads that need access to end-user resources
If you are building development or administration tools where users
grant you access to their Google Cloud resources, get your application
access to user resources by using OAuth 2.0. For detailed instructions,
see
Using OAuth 2.0 for Web Server Applications .
In your request, specify an access scope that limits your access to
only the methods and user information that your application requires.
For a full list of services and required scopes across Google Cloud,
see
OAuth 2.0 Scopes for Google APIs .
Authenticate your workloads to other workloads over mTLS
Preview
This feature is subject to the "Pre-GA Offerings Terms" in the
General Service Terms section of the
Service Specific Terms .
Pre-GA features are available "as is" and might have limited support. For more
information, see the
launch stage descriptions .
You can authenticate applications or other workloads by using
managed workload identities . This
authentication method uses a service account, certificate authority (CA) pools,
managed workload identities, and a unique instance identifier to identify
instances.
Managed workload identities let you bind strongly attested identities to
your Compute Engine workloads. Google Cloud provisions X.509 credentials
issued from the Certificate Authority Service that can
be used to reliably authenticate your workload with other workloads over
mutual TLS (mTLS)
authentication.
Your workload uses the managed workload identity as its
identity when it authenticates to other workloads using mutual TLS (mTLS) and
uses the service account as its identity when it accesses other
Google Cloud services and resources.
For more information, see
Authenticate workloads to other workloads over mTLS .
What's next
Learn more about the following concepts:
Authenticate to Compute Engine
Authentication methods at Google
Managed workload identities
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
