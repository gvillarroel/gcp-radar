---
title: "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud (software\
  \ only) for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage
  title: "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\
    \ (software only) for bare metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Manage identity with GKE Identity Service
Stay organized with collections
Save and categorize content based on your preferences.
Google Distributed Cloud supports OpenID Connect
(OIDC) and Lightweight Directory
Access Protocol (LDAP) as authentication
mechanisms for interacting with a cluster's Kubernetes API server, using
GKE Identity Service. GKE Identity Service is an authentication service
that lets you bring your existing identity solutions for authentication to
your clusters. Users can log in to and use clusters from the command line
(all providers) or from the Google Cloud console (OIDC only), all using your
existing identity provider.
GKE Identity Service works with any kind of bare metal cluster: admin, user,
hybrid, or standalone. You can use both on-premises and publicly reachable
identity providers. For example, if your enterprise runs an Active Directory
Federation Services
(ADFS)
server, the ADFS server could serve as your OpenID provider. You might also use
publicly-reachable identity provider services such as Okta. Identity provider
certificates may be issued by either a well-known public certificate authority
(CA), or by a private CA.
Note: The GKE Identity Service runs as a Pod inside the cluster control
plane. During cluster lifecycle phases, the API Server is dynamically configured
to use the in-cluster GKE Identity Service as the authentication webhook for
all incoming requests. The API Server isn't able to use in-cluster
DNS . As a result, the API
Server is configured to access GKE Identity Service as a REST resource
access. In audit logs, this invocation is recorded as a CREATE request to the
Services or proxy resource by a system:anonymous user.
For an overview of how GKE Identity Service works, see Introducing
GKE Identity Service .
If you already use or want to use Google IDs to sign in to your GKE clusters
instead of an OIDC or LDAP provider, we recommend using connect gateway
for authentication. Find out more in Connecting to registered clusters with the
connect gateway .
Note: If you use the ClientConfig field to configure GKE Identity Service
directly inside a cluster, cluster updates can overwrite the field. Instead,
use the authentication field on the cluster custom resource or set up your
GKE Identity Service at the fleet level
so your configuration persists during an update.
Before you begin
To prompt users for consent and authorize their user account, a
browser-based authentication flow is used. Headless systems aren't
supported.
To authenticate through the Google Cloud console, each cluster that you want to
configure must be registered with your project
fleet .
Setup process and options
GKE Identity Service supports identity providers using the following
protocols:
OpenID Connect (OIDC) . We provide
specific instructions for setup for some popular OpenID providers, including
Microsoft, but you can use any provider that implements OIDC.
Lightweight Directory Access Protocol
(LDAP) . You can use
GKE Identity Service to authenticate using LDAP with Active Directory
or an LDAP server.
OIDC
Register GKE Identity Service as a client with your OIDC provider
following the instructions in Configuring providers for
GKE Identity Service .
Choose from the following cluster configuration options:
(Recommended) Configure your clusters at fleet level following the instructions in
Configuring clusters for fleet-level
GKE Identity Service .
With this option, your authentication configuration is centrally managed
by Google Cloud.
Configure your clusters individually following the instructions in
Configuring clusters for GKE Identity Service with
OIDC .
Set up user access to your clusters, including role-based access control
(RBAC), following the instructions in Setting up user access for
GKE Identity Service .
LDAP
To get started with LDAP, follow the instructions in Set up
GKE Identity Service with
LDAP .
Access clusters
After GKE Identity Service has been set up, users can sign in to configured
clusters using either the command line or the Google Cloud console.
(Recommended) Learn how to sign in to registered clusters with your OIDC or
LDAP ID in Accessing clusters using GKE Identity Service .
Learn how to sign in to clusters from the Google Cloud console in Work
with clusters from the
Google Cloud console
(OIDC only).
Troubleshoot the login flow
To troubleshoot login flows that authenticate directly on the
GKE Identity Service server with a fully qualified domain name
(FQDN) ,
you can use the GKE Identity Service diagnostic utility. The diagnostic
utility simulates login flows with your OIDC provider to quickly identify
configuration problems. This tool requires a version 1.32 or higher cluster and
only supports OIDC. For more information, see GKE Identity Service
diagnostic
utility .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
