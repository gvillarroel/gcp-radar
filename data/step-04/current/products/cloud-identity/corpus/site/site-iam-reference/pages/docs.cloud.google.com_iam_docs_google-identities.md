---
title: "Identity management for Google Cloud \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/google-identities
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/google-identities
  title: "Identity management for Google Cloud \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
Identity management for Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
To use Google Cloud, users and workloads need an identity that
Google Cloud can recognize.
This page outlines the methods that you can use to configure identities for
users and workloads.
User identities
There are several ways to configure user identities so that Google Cloud
can recognize them:
Create Cloud Identity or Google Workspace accounts : Users with
Cloud Identity or Google Workspace accounts can authenticate
to Google Cloud and be authorized to use Google Cloud resources.
Cloud Identity and Google Workspace accounts are user accounts
that are managed by your organization.
Note: Google Workspace accounts may have one or more
alternate email addresses (email alias) .
If you grant a role to a principal's email alias , the role is granted to the
primary email instead. It's not possible to grant a role to only the
email alias . Warning: Granting a role to a principal's email alias reveals the
primary email .
Set up one of the following federated identity strategies :
Federation using Cloud Identity or Google Workspace :
Sync external identities with corresponding Cloud Identity or
Google Workspace accounts so that users can sign in to Google
services with their external credentials. With this method, users need two
accounts: an external account, and a Cloud Identity or
Google Workspace account. You can keep these accounts synchronized
using a tool like Google Cloud Directory Sync
(GCDS) .
Workforce Identity Federation : Use your external identity provider (IdP)
to sign in your users to Google Cloud and let them access
Google Cloud resources and products.
With Workforce Identity Federation, users need only one account: their
external account. This type of user identity is sometimes referred to as a
federated identity .
To learn more about these methods for setting up user identities, see
User identities overview .
Workload identities
Google Cloud provides the following types of identity services for workloads:
Workload Identity Federation
lets your workloads access most Google Cloud services by using an
identity that is provided by an IdP. Workloads that use
Workload Identity Federation can run on Google Cloud,
Google Kubernetes Engine (GKE), or other platforms, such as AWS, Azure, and
GitHub.
Google Cloud service accounts can act as
identities for workloads. Instead of granting access to a workload directly,
you grant access to a service account, then let the workload use the service
account as its identity.
Managed workload identities
let you bind strongly attested identities to your Compute Engine
workloads. You can use managed workload identities to authenticate your
workloads to other workloads using mutual TLS (mTLS) ,
but they cannot be used for authenticating to Google Cloud APIs.
The methods that you can use depend on where your workloads are running.
If you're running workloads on Google Cloud, you can use the following
methods to configure workload identities:
Workload Identity Federation for GKE : Grant IAM access to
GKE clusters and Kubernetes service accounts. Doing so lets the
clusters' workloads access most Google Cloud services directly, without
using IAM service account impersonation.
Attached service accounts : Attach a service account to a resource so that
the service account acts as the resource's default identity. Any workloads
running on the resource use the service account's identity when accessing
Google Cloud services.
Short-lived service account credentials : Generate and use short-lived
service account credentials whenever your resources need to access to
Google Cloud services. The most common types of credentials are
OAuth 2.0 access tokens and OpenID Connect (OIDC) ID tokens.
If you're running workloads outside of Google Cloud, you can use the
following methods to configure workload identities:
Workload Identity Federation : Use credentials from external identity
providers to generate short-lived credentials, which workloads can use to
temporarily impersonate service accounts. Workloads can then access
Google Cloud resources, using the service account as their identity.
Service account keys : Use the private portion of a service account's
public/private RSA key pair to authenticate as the service account.
Important:
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
To learn more about these methods for setting up workload identities, see
Workload identities overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
