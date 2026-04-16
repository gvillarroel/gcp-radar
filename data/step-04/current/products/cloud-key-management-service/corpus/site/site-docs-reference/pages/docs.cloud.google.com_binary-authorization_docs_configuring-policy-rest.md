---
title: "Configure a policy using the REST API \_|\_ Binary Authorization \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest
  title: "Configure a policy using the REST API \_|\_ Binary Authorization \_|\_ Google\
    \ Cloud Documentation"
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
Configure a policy using the REST API
Stay organized with collections
Save and categorize content based on your preferences.
Note:
This document or section includes references to one or more terms that Google
considers disrespectful or offensive. The terms are used because they are
keywords in the software that's described in the document.
The terms: whitelist
This page provides instructions for configuring a Binary Authorization policy by
using the REST API . As an
alternative, you can also perform these tasks by using the
Google Cloud CLI
or the Google Cloud console . This step is part of
setting up Binary Authorization .
Overview
A policy is a set of rules that govern the
deployment of one or more container images.
When you configure a policy using the REST API, you populate values in a JSON
format whose structure is identical to the YAML structure used in gcloud
interactions with the service. For more information, see
Policy YAML Reference .
Configuring a policy requires you to:
Export a policy JSON file
Add any additional exempt images (optional)
Set the default rule
Add any cluster-specific rules (optional)
Import the policy JSON file
Most real-world policies check to see whether all required
attestors have verified that a container image is
ready to be deployed. In this case, you must also
create attestors when you configure the policy.
Note: This page describes how to configure a policy for the container-based
platforms that Binary Authorization supports, including
Google Kubernetes Engine (GKE), Distributed Cloud,
Cloud Run, and Cloud Service Mesh. Policy settings, such as rule type,
rule parameters, and parameter format can vary depending on the platforms you
use. Because of this, each section in this page notes the platforms the settings
apply to. Make sure the settings you use are supported for your platforms.
Set the default project
Set the default Google Cloud project if you have not already done so:
PROJECT_ID= PROJECT_ID
gcloud config set project ${PROJECT_ID}
where PROJECT_ID is the ID of your project.
Export the policy
This section applies to GKE,
Distributed Cloud, Cloud Run, and
Cloud Service Mesh .
Export the policy to a JSON file on your local system:
curl \
-H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
-H "x-goog-user-project: ${PROJECT_ID}" \
"https://binaryauthorization.googleapis.com/v1/projects/${PROJECT_ID}/policy" \
-o "/tmp/policy.json"
By default, the file has the following contents:
{
"name": "projects/ PROJECT_ID /policy",
"globalPolicyEvaluationMode": "ENABLE",
"defaultAdmissionRule": {
"evaluationMode": "ALWAYS_ALLOW",
"enforcementMode": "ENFORCED_BLOCK_AND_AUDIT_LOG"
}
}
Manage exempt images
This section applies to GKE,
Distributed Cloud, Cloud Run, and
Cloud Service Mesh .
An exempt image is a container image that is
exempt from policy rules. Binary Authorization always allows exempt images
to be deployed.
You specify exempt images by listing their registry paths in
admissionWhitelistPatterns . The path can refer to
Container Registry or another image registry. The
enforcer processes exempt images in admissionWhitelistPatterns after images
exempted by system policy evaluation mode .
To add an exempt image, add a namePattern node under an
admissionWhitelistPatterns
list in the policy JSON file:
{
"name": "projects/ PROJECT_ID /policy",
"admissionWhitelistPatterns": [
{
"namePattern": " MATCHING_PATTERN "
}
],
...
}
where MATCHING_PATTERN is the path to a single image in your registry
by exact match, or to any images matching a pattern using the wildcard symbol
( * , ** ).
Cloud Run
This section applies to Cloud Run .
You cannot directly specify image names that contain a tag. For example, you cannot specify
IMAGE_PATH :latest.
If you want to specify image names that contain tags, you must specify the image name using a wildcard as follows:
* for all versions of a single image; for example, us-docker.pkg.dev/myproject/container/hello@*
** for all images in a project; for example, us-docker.pkg.dev/myproject/**
You can use path names to specify a digest in the format
IMAGE_PATH @ DIGEST .
System policy evaluation mode
This section applies to GKE and
Distributed Cloud .
System policy evaluation mode
is a policy setting that causes Binary Authorization to evaluate a system
policy before evaluating the policy that you configure. Google manages the
system policy, which exempts a list of Google-maintained system images that
GKE uses. Images listed in the system policy are not
blocked by policy enforcement. If you do not enable the setting, you must manage
the list of exempt images yourself. Learn how to
Manage exempt images .
You can view the contents of the system policy using the following command:
gcloud alpha container binauthz policy export-system-policy
To enable system policy evaluation mode, add the following top-level node to the
policy JSON file:
"globalPolicyEvaluationMode": "ENABLE"
To disable system policy evaluation mode, add the following:
"globalPolicyEvaluationMode": "DISABLE"
Note: For reliability reasons, the system policy is updated one region at a
time. As a result, the system policy can differ between regions during an
update.
You can export the system policy associated with a specific region, as
follows:
gcloud alpha container binauthz policy export-system-policy \
--location = REGION > /tmp/policy.yaml
Replace REGION with the region associated with the system
policy that you want to export (or "global"). Examples include: asia-east1 ,
europe-west1 , us-central1 .
If you omit --location or specify --location=global , the command outputs a
system policy from a region in the last group of regions to receive
updates. Since most changes to the system policy are additions, the output
shows the set of system images that are currently allowed in all regions.
Set the default rule
This section applies to GKE,
Distributed Cloud, Cloud Run, and
Cloud Service Mesh .
A rule is the part of a policy that defines constraints
that container images must pass before they can be deployed. Every admission
request has an associated GKE cluster. If a request
doesn't match a cluster-specific rule, the default rule is used.
The default rule is defined in the
defaultAdmissionRule node in
the policy. For more information on the parts of this rule, see
ADMISSION_RULE in the Policy YAML
Reference. For examples of default rules, see
Example Policies .
To set the default rule, edit the defaultAdmissionRule node in the policy
JSON file as required:
"defaultAdmissionRule": {
"evaluationMode": " EVAL_MODE ",
"enforcementMode": " ENFORCEMENT_MODE "
requireAttestationsBy: [
ATTESTOR ,
...
]
}
where:
EVAL_MODE specifies
the type of constraint that Binary Authorization evaluates before allowing a
container image to be deployed.
ENFORCEMENT_MODE specifies
the action that is taken if a container image does not conform to the
constraints defined in the rule.
ATTESTOR specifies
the attestors (if required) that must sign a container image before it can
be deployed. Use the fully-qualified path to the attestor in the format
projects/ PROJECT_ID /attestors/ ATTESTOR_NAME .
If your rule checks to see whether all required attestors have signed a
container image, you must create attestors before
completing this step.
Set cluster-specific rules (optional)
This section applies to GKE and
Distributed Cloud .
A cluster can also have one or more
cluster-specific rules . This type of
rule applies only to the specified GKE cluster. If a
cluster has no rule of its own, the default rule is used. Cluster-specific rules
are an optional part of a policy.
Cluster-specific rules are defined in
clusterAdmissionRules nodes in
the policy JSON file. For more information on the parts of this rule, see
ADMISSION_RULE in the Policy YAML
Reference. For an example, see
Use a cluster-specific rule
in Example Policies .
To add a cluster-specific rule:
In the policy JSON file, add a clusterAdmissionRules node:
"clusterAdmissionRules": {
"us-central1-a.test-cluster": {
"evaluationMode": "REQUIRE_ATTESTATION",
"requireAttestationsBy": [
" ATTESTOR ",
...
],
"enforcementMode": "ENFORCED_BLOCK_AND_AUDIT_LOG"
}
},
where CLUSTER_SPECIFIER is the resource ID of the cluster to which
the rule applies.
For GKE, GKE attached clusters, and
GKE on AWS, the format is
CLUSTER_LOCATION.CLUSTER_NAME —for example, us-central1-a.test-cluster .
For Google Distributed Cloud and Google Distributed Cloud,
the format is FLEET_MEMBERSHIP_LOCATION.FLEET_MEMBERSHIP_ID —for
example, global.test-membership .
The other properties are as described in Set the default rule
, earlier in this guide. See
Example Policies
for an example of a cluster-specific rule.
If your rule checks to see whether all required attestors have signed a
container image, you must create attestors before
completing this step.
Import the policy JSON file
This section applies to GKE,
Distributed Cloud, Cloud Run, and
Cloud Service Mesh .
Import the policy JSON file back into Binary Authorization by entering the
following:
curl -X PUT \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
-H "x-goog-user-project: ${PROJECT_ID}" \
--data-binary @/tmp/policy.json \
"https://binaryauthorization.googleapis.com/v1/projects/${PROJECT_ID}/policy"
Note: It can take a few minutes for the policy to take effect.
What's next
Create an attestor
Create an attestation
Deploy a container image
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
