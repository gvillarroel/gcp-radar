---
title: "Workload identity overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/aws-iam-roles
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity
  title: "Workload identity overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Workload identity overview
Stay organized with collections
Save and categorize content based on your preferences.
Workload identity enables you to assign distinct, fine-grained identities and
authorization for each application in your cluster. Workload identity is the
recommended way for applications running within GKE on AWS to access
AWS and Google Cloud services.
All GKE clusters have workload identity enabled.
Kubernetes service accounts
Workload identity implements identity federation , or delegating trust or roles
to an external provider. Each cluster has a built-in OpenID Connect (OIDC)
provider. When a Pod runs in the cluster, it runs using a
Kubernetes service account .
The Pod can be configured to obtain a token with short-lived credentials for
its Kubernetes service account using a
Bound Service Account Token Volume .
OpenID Connect providers
Each cluster can act as an
OpenID Connect (OIDC) provider. With
this provider, you can provide Kubernetes service account credentials to
services that support identity federation using OIDC.
This provider's issuer URI also serves as an OIDC discovery endpoint. Services
can use this discovery endpoint to obtain the JSON Web Key Set (JWKS), which
provides public key information that allows them to verify Kubernetes service
account credentials.
Google Cloud IAM identity pools and providers
Google Cloud IAM supports
identity federation using OIDC .
All GKE clusters are configured as identity providers in the
workload identity pool PROJECT_ID .svc.id.goog .
To get the name of your workload identity pool and providers, see
Use workload identity with Google Cloud .
AWS IAM identity providers
AWS IAM supports
identity federation using OIDC .
To access AWS using a workload's service account identities,
you need to
create an OIDC provider
on AWS IAM. By default, GKE on AWS are not configured with an
identity provider for AWS IAM.
Alternatives to workload identity
There are alternative methods to access services from GKE on AWS.
We don't recommended the following methods due to complications.
Export credentials and store them as Kubernetes Secrets. In this case,
you must rotate stored credentials manually in both AWS IAM and
in your cluster. Additionally, if an attacker steals credentials, they can
exploit them.
Attach credentials to the node pools's underlying instances. In this case,
all workloads running on the same node share the credentials,
which can result in a greater set of permissions than workloads might
need. To block access to an instance's permissions, GKE clusters
blocks access from a Pod to the instance metadata service.
What's next
Using workload identity with Google Cloud services
Using workload identity with AWS
Learn more about Workload identity federation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
