---
title: "Attestations overview \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/attestations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/multi-project-setup-cli
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/attestations
  title: "Attestations overview \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Guides
Send feedback
Attestations overview
Stay organized with collections
Save and categorize content based on your preferences.
This guide describes how to create and use Binary Authorization
attestations . After a container image is
built, an attestation can be created to affirm that a required activity was
performed on the image such as a regression test, vulnerability scan, or
other test. The attestation is created by signing the image's unique digest.
During deployment, instead of repeating the activities, Binary Authorization
verifies the attestations using an attestor. If all of the attestations for
an image are verified, Binary Authorization allows the image to be deployed.
Before you begin
Enable Binary Authorization .
Set up Binary Authorization with one of the following products:
Binary Authorization for Google Kubernetes Engine (GKE)
Binary Authorization for Cloud Run
Binary Authorization for Google Distributed Cloud
Cloud Service Mesh users need to only
set up the Binary Authorization policy. To do so, see
Configure a policy , later in this guide.
Create an attestor
To use attestations, you first create attestors .
At deploy time, Binary Authorization uses attestors to verify the
attestation associated with the container image.
Note: Cloud Build users, you can use the built-by-cloud-build attestor to
deploy only images built by Cloud Build .
You can create attestors using the following methods:
The Google Cloud CLI
The Google Cloud console
Configure a policy rule to require attestations
This section describes how to configure the policy to require attestations.
GKE
Configure the default rule to require attestations using the following
methods:
The Google Cloud console
The command-line tool
Configure a cluster-specific rule to require attestations using the following
methods:
The Google Cloud console
The command-line tool
Cloud Run
Configure the default rule to require attestations using one of the
following methods:
The Google Cloud console
The command-line tool
Distributed Cloud
Configure the default rule to require attestations using the following
methods:
The Google Cloud console
The command-line tool
Configure a cluster-specific rule to require attestations using the
following methods:
The Google Cloud console
The command-line tool
Cloud Service Mesh
Cloud Service Mesh users can create
rules—including rules that require attestations—that are scoped to either a
mesh service identity, a Kubernetes service account, or a Kubernetes
namespace.
To configure a specific rule, use the following methods:
The Google Cloud console
The command-line tool
Create attestations
Attestations are created by a signer .
The process of creating an attestation is also known as signing an image .
A signer can be a person who manually creates an attestation. Alternatively, a
signer can be an automated service. For instructions that describe different
approaches to creating attestations, see the following pages:
Create attestations manually
by signing a container image.
Create attestations in a Cloud Build pipeline .
Deploy an image
After you create an attestation, you are ready to deploy the associated image.
GKE
Deploy images using GKE .
Cloud Run
Deploy images using Cloud Run .
Distributed Cloud
Deploy images using Distributed Cloud .
Cloud Service Mesh
Cloud Service Mesh workloads are enforced as soon as the policy is saved.
What's next
View audit logs
View Cloud Run breakglass audit logs
Use breakglass (GKE)
Use breakglass (Cloud Run)
Use image digests in Kubernetes manifests
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
