---
title: "Binary Authorization concepts \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/key-concepts
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/key-concepts
  title: "Binary Authorization concepts \_|\_ Google Cloud Documentation"
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
Binary Authorization concepts
Stay organized with collections
Save and categorize content based on your preferences.
Note:
This document or section includes references to one or more terms that Google
considers disrespectful or offensive. The terms are used because they are
keywords in the software that's described in the document.
The terms: whitelist
This page contains information on concepts related to Binary Authorization.
Policies
A Binary Authorization policy , also known as a project-singleton policy , is a
set of rules that govern the deployment of container images.
Continuous validation (CV) , uses a
different type of policy, called a platform policy .
A policy has the following parts:
Deployment rules
List of exempt images
You can configure a policy using one of the following:
Google Cloud console
gcloud commands
When you use gcloud commands, you export and modify a definition of the policy
in YAML format before importing it back to your project. The YAML format
reflects the internal structure of a policy in Binary Authorization storage.
For more information on this format, see
Policy YAML Reference .
Each Google Cloud project can have exactly one policy. You must
configure the policy in the project where you run your deployment platform. In a
single-project configuration , the policy and all subordinate
resources— attestors and attestations —reside in
the same project. To establish separation of duties ,
you can use a multi-project configuration . In this configuration, the
deployment platform can run in one project, attestors can reside in another
project, and attestations can reside in still another project.
To set up and use Binary Authorization on supported platforms, see
Set up by platform .
See an example multi-project setup for GKE .
Rules
When you configure a policy , you define its rules. Rules define
constraints that images must satisfy before they can be deployed. A policy has
one default rule and it can have specific rules ,
depending on the platform. For more information, see Supported rule types by platform .
Each rule can be configured with an evaluation mode and
an enforcement mode , for example, a rule can require that
an image have a signed attestation before it can be deployed.
Default rule
Each policy has a default rule . This rule applies to any deployment request
that doesn't match a specific rule. In a policy YAML file, the default rule is
specified in the defaultAdmissionRule node.
For more information about configuring the default rule, see Configuring a policy .
Specific rules
One or more specific rules can be added to a policy. This type of
rule applies to images that are to be deployed to specific
clusters, service account, or identity. Support for specific rules varies by
platform. For more information, see Supported rule types by platform .
In a policy YAML file, each cluster-specific rule is specified in a
clusterAdmissionRule
node.
Supported rule types by platform
The following table shows which rule types are supported for each deployment
platform.
Platform
Default rule
Specific rule
GKE
Supported
Clusters Kubernetes Namespaces Kubernetes Service Accounts
Cloud Run
Supported
Not supported
GKE attached clusters
Supported
Clusters Kubernetes Namespaces Kubernetes Service Accounts
GKE on AWS
Supported
Clusters Kubernetes Namespaces Kubernetes Service Accounts
Google Distributed Cloud
Supported
Clusters Kubernetes Namespaces Kubernetes Service Accounts
Google Distributed Cloud
Supported
Clusters Kubernetes Namespaces Kubernetes Service Accounts
Cloud Service Mesh
Supported
Cloud Service Mesh Service Identities
Evaluation modes
Each rule has an evaluation mode that specifies the type of constraint that
Binary Authorization enforces for the rule. The evaluation mode for a rule is
specified using the evaluationMode
property in the policy YAML file.
There are three evaluation modes:
Allow all images: allows all images to be deployed.
Disallow all images: disallows all images from being deployed.
Require attestations: requires a signer to digitally sign
the image digest and create an attestation before deployment.
At deploy time, the Binary Authorization enforcer uses an attestor
to verify the signature in the attestation before deploying the associated
image.
Enforcement modes
Each rule also has an enforcement mode , which specifies the action that is
taken by GKE when an image does not conform to the rule.
A rule can have the following enforcement modes:
Block and Audit Log : Blocks the deployment of images that do not conform
to the rule and writes a message to the audit log to indicate why the image
was not deployed.
Dry Run: Audit Log Only : Dry run mode is an enforcement mode in a policy
that allows non-conformant images to be deployed, but writes details about
the deployment to the Cloud Audit Logs. Dry run mode allows you to test a
policy, for example in your production environment, before enforcement
actually goes into effect.
Most production rules use the Block and Audit Log enforcement mode.
Dry Run: Audit Log Only is primarily used for testing a policy in your
environment before it goes into effect.
The enforcement mode for a rule is specified using the
enforcementMode property in the
policy YAML file.
See View audit logs (GKE,
Google Distributed Cloud, Cloud Service Mesh)
or View audit logs (Cloud Run)
for more information on messages written to Cloud Audit Logs .
Continuous Validation
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Continuous Validation (CV) is a feature of Binary Authorization that periodically
checks images associated with running Pods for continued policy
conformance.
Learn more about CV .
Exempt images
Note: Using admissionWhitelistPatterns to allowlist Google-managed system
images is not recommended. To allowlist Google-managed system images,
globalPolicyEvaluationMode should be set to ENABLE . See
globalPolicyEvaluationMode for details.
An exempt image is an image that is exempt from policy rules.
Binary Authorization always allows exempt images to be deployed. Each project has
an allowlist of exempt images specified by registry path. Images in the path
gcr.io/google_containers/* , k8s.gcr.io/** , and additional paths are exempt by
default, as these contain resources required so that GKE
can start a cluster successfully with the default policy active.
To add an exempt image to the allowlist, add the
following to the policy file:
admissionWhitelistPatterns :
- namePattern : EXEMPT_IMAGE_PATH
Replace EXEMPT_IMAGE_PATH with the path to am image to exempt. To exempt additional images, add additional - namePattern entries. Learn more about admissionWhitelistPatterns .
Allowlist patterns
To allowlist all images whose registry location matches the specified
path:
gcr.io/example-project/*
To allowlist all images whose registry location is any subdirectory of the
specified path (e.g. gcr.io/example-project/my-directory/helloworld ):
gcr.io/example-project/**
To allowlist a specific image:
gcr.io/example-project/helloworld
To allowlist a specific version of an image by tag:
gcr.io/example-project/helloworld:latest
gcr.io/example-project/helloworld:my-tag
To allowlist all versions and tags of an image:
gcr.io/example-project/helloworld@*
To allowlist a specific version of an image by its digest:
gcr.io/example-project/helloworld@sha256:77b0b75136b9bd0fd36fb50f4c92ae0dbdbbe164ab67885e736fa4374e0cbb8c
Learn more about using container image digests .
Learn how to manage exempt images in the Google Cloud console , using the command-line tool ,
or using the REST API .
Google-maintained system images
Trust all Google-maintained system images causes
Binary Authorization to exempt a list of Google-maintained system images from
further policy evaluation. When you have this setting enabled, images that are
required by GKE are not blocked by policy enforcement.
The system policy is evaluated prior to and in addition to user policy
evaluation.
You can enable or disable this setting using the
globalPolicyEvaluationMode
property in the policy YAML file. You can view the contents of the system
policy using the following command:
gcloud alpha container binauthz policy export-system-policy
Attestations
An attestation is a digital document that certifies an image.
During deployment, Binary Authorization verifies the attestation before it
allows the image to be deployed.
The process of creating an attestation is sometimes called signing an image .
An attestation is created after an image is built. Each such image
has a globally unique digest. A signer signs the image
digest by using a private key from a key pair and uses the
signature to create the attestation. At deploy time, the Binary Authorization
enforcer uses the attestor's public key
to verify the signature in the attestation. Typically one attestor corresponds
to exactly one signer.
An attestation signifies that the associated image was built by
successfully executing a specific, required process. For example, if the signer
is a representative of your quality assurance (QA) function, the attestation
might indicate that the image has passed all required end-to-end
functional testing in a staging environment.
To enable attestations in Binary Authorization, your policy's evaluationMode is
set to REQUIRE_ATTESTATION .
Learn how to create and use attestors and attestations .
Signers
A signer is a person or automated process that creates an
attestation by signing a unique image descriptor
with a private key . The attestation is verified at
deploy time by the corresponding public key stored in
an attestor before the associated image is deployed.
Learn how to create and use attestors and attestations .
Attestors
An attestor is a Google Cloud resource that Binary Authorization uses to verify
the attestation at image deploy time. Attestors contain
the public key that corresponds to the private key used by a signer
to sign the image digest and create the attestation. The
Binary Authorization enforcer uses the attestor at deploy time to limit which
images are allowed to be deployed to those with an accompanying,
verifiable attestation created prior to deployment.
Attestors are often managed by security operations personnel who also
manage the public and private key pairs, whereas signers are typically software
engineers or DevOps QA or compliance personnel responsible for producing
deployable images, signing them with the private key and creating the
attestations before attempting to deploy them.
Attestors have:
A corresponding Artifact Analysis note
One or more cryptographic public keys that correspond
to the private key the signer used to create an attestation.
When you set up a policy that contains a Require Attestations rule, you
must add an attestor for each person or process who is required to verify
that the image is ready for deployment. You can add attestors using
the Google Cloud console, the gcloud interface, or the Binary Authorization REST
API.
Learn how to create and use attestors and attestations .
Cryptographic keys
Binary Authorization uses digital signatures to verify images at deploy time
when the policy contains a Require Attestations rule.
A key pair is generated. The private key is used by the signer to
sign an image descriptor. This creates an attestation .
Then, an attestor is created and stored in the policy. The
public key that corresponds to the private key used for signing is uploaded
and attached to the attestor.
When an attempt is made to deploy an image, Binary Authorization uses attestors
in the policy to verify the image's attestations. If the attestation can be
verified, the image is deployed.
Binary Authorization supports two types of keys:
Public-Key Infrastructure (X.509) (PKIX)
PGP
PKIX keys can be stored locally, externally, or in Cloud Key Management Service .
Create a cryptographic key and an attestor .
Artifact Analysis notes
Binary Authorization uses
Artifact Analysis to store
trusted metadata used in the authorization process. For each attestor you
create, you must create one Artifact Analysis
note .
Each attestation is stored as an occurrence of this
note.
When Binary Authorization evaluates a rule that requires that attestors have
verified an image, it checks Artifact Analysis storage to see whether the
required attestations are present.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
