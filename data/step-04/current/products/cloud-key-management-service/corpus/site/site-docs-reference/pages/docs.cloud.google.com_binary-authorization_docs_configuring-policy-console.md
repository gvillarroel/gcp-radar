---
title: "Configure a policy using the Google Cloud console \_|\_ Binary Authorization\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console
  title: "Configure a policy using the Google Cloud console \_|\_ Binary Authorization\
    \ \_|\_ Google Cloud Documentation"
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
Configure a policy using the Google Cloud console
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for configuring a Binary Authorization policy
by using the Google Cloud console. As an alternative, you can perform these tasks
by using the Google Cloud CLI or the
REST API . This step is part of
setting up Binary Authorization .
A policy is a set of rules that govern the deployment
of one or more container images.
Note: This page describes how to configure a policy for the container-based
platforms that Binary Authorization supports, including
Google Kubernetes Engine (GKE), Distributed Cloud,
Cloud Run, and Cloud Service Mesh. Policy settings, such as rule type,
rule parameters, and parameter format can vary depending on the platforms you
use. Because of this, each section in this page notes the platforms the settings
apply to. Make sure the settings you use are supported for your platforms.
Before you begin
Enable Binary Authorization .
Enable Binary Authorization for your platform:
Google Kubernetes Engine (GKE) users : Create a cluster with Binary Authorization enabled .
Cloud Run users: Enable Binary Authorization on your
service .
If you intend to use attestations , we recommend
that you create attestors before configuring the
policy. You can create attestors using the Google Cloud console
or through a command-line tool .
Select the project ID for the project in which you enabled
Binary Authorization.
Set the default rule
This section applies to GKE, GKE Multi-Cloud,
Distributed Cloud, Cloud Run, and
Cloud Service Mesh .
A rule is the part of a policy that defines constraints
that images must satisfy before they can be deployed. The
default rule defines constraints that apply to
all non-exempt container images that don't have
their own cluster-specific rules. Every policy has a default rule.
To set the default rule, do the following:
In the Google Cloud console , go to the Binary Authorization page.
Go to the Binary Authorization page
Click the Policy tab.
Click Edit Policy .
Set the evaluation mode for the default
rule.
The evaluation mode specifies the type of constraint that Binary Authorization
enforces at deploy time. To set the evaluation mode, select one of the
following options:
Allow all images : Allows all images to be deployed.
Deny all images : Disallows all images from being deployed.
Allow only images that have been approved by the following attestors :
Allows an image to be deployed if the image has one or more attestations
that can be verified by all of the attestors that you add to this rule.
To learn about creating attestors, see
Creating attestors .
If you selected Allow only images that have been approved by the following
attestors :
Get the name or resource ID of your attestor.
In the Google Cloud console , on the Attestors page, you can view
your existing attestors, or create a new one.
Go to the Binary Authorization Attestors page
Click Add Attestors .
Select one of the following options:
Add by project and attestor name
The project refers to the project ID of the project that stores
your attestors. An example of an attestor name is build-qa .
Add by attestor resource ID
A resource ID has the format:
projects/ PROJECT_ID /attestors/ ATTESTOR_NAME
Under Attestors , enter appropriate value(s) for the option
you selected.
Click Add Another Attestor if you want to add additional attestors.
Click Add Attestor(s) to save the rule.
Note: We don't recommend using the Allow all evaluation mode in the default
rule. Doing so allows all container images to deploy unless they fail to satisfy
a cluster-specific or other specific rule in the policy.
If you want to enable dry run mode , do the
following:
Select Dry Run Mode .
Click Save Policy .
Note: It can take a few minutes for the policy to take effect.
Set cluster-specific rules (optional)
This section applies to GKE,
Distributed Cloud, and Cloud Service Mesh .
A policy can also have one or more cluster-specific rules .
This type of rule applies to container images that are to be deployed to
specific Google Kubernetes Engine (GKE) clusters only.
Cluster-specific rules are an optional part of a policy.
Add a cluster-specific rule (GKE)
This section applies to GKE and
Distributed Cloud .
To add a cluster-specific rule for a GKE cluster, do the
following:
In the Google Cloud console , go to the Binary Authorization page.
Go to the Binary Authorization page
Click the Policy tab.
Click Edit Policy .
Expand the Additional settings for GKE
deployments section.
If no specific rule type is set, click Create Specific Rules .
To select the rule type, click Specific Rule Type .
To change the rule type, click Change .
Click Add Specific Rule .
In the Cluster resource ID field, enter the resource ID for the cluster.
The resource ID for the cluster has the format
LOCATION . NAME , for example,
us-central1-a.test-cluster .
Set the evaluation mode for the default
rule.
The evaluation mode specifies the type of constraint that Binary Authorization
enforces at deploy time. To set the evaluation mode, select one of the
following options:
Allow all images : Allows all images to be deployed.
Deny all images : Disallows all images from being deployed.
Allow only images that have been approved by the following attestors :
Allows an image to be deployed if the image has one or more attestations
that can be verified by all of the attestors that you add to this rule.
To learn about creating attestors, see
Creating attestors .
If you selected Allow only images that have been approved by the following
attestors :
Get the name or resource ID of your attestor.
In the Google Cloud console , on the Attestors page, you can view
your existing attestors, or create a new one.
Go to the Binary Authorization Attestors page
Click Add Attestors .
Select one of the following options:
Add by project and attestor name
The project refers to the project ID of the project that stores
your attestors. An example of an attestor name is build-qa .
Add by attestor resource ID
A resource ID has the format:
projects/ PROJECT_ID /attestors/ ATTESTOR_NAME
Under Attestors , enter appropriate value(s) for the option
you selected.
Click Add Another Attestor if you want to add additional attestors.
Click Add Attestor(s) to save the rule.
Click Add to add the cluster-specific rule.
You might see a message that reads, "It looks like this cluster doesn't
exist. This rule will still take effect if this cluster becomes available in
GKE in the future." If so, click Add again to save the
rule.
If you want to enable dry run mode ,
select Dry Run Mode .
Click Save Policy .
Note: It can take a few minutes for the policy to take effect.
Add a cluster-specific rule (GKE Multi-Cloud,Distributed Cloud)
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This section applies to Distributed Cloud .
To add a cluster-specific rule for an GKE cluster, do the
following:
In the Google Cloud console , go to the Binary Authorization page.
Go to the Binary Authorization page
Click the Policy tab.
Click Edit Policy .
Expand the Additional settings for GKE
deployments section.
If no specific rule type is set, click Create Specific Rules .
To select the rule type, click Specific Rule Type .
To update the rule type, click Change .
Click Add Specific Rule .
In the Cluster resource ID field, enter the resource ID for the cluster.
For GKE attached clusters, and
GKE on AWS, the format is
CLUSTER_LOCATION.CLUSTER_NAME —for example, us-central1-a.test-cluster .
For Google Distributed Cloud and Google Distributed Cloud,
the format is FLEET_MEMBERSHIP_LOCATION.FLEET_MEMBERSHIP_ID —for
example, global.test-membership .
Set the evaluation mode for the default
rule.
The evaluation mode specifies the type of constraint that Binary Authorization
enforces at deploy time. To set the evaluation mode, select one of the
following options:
Allow all images : Allows all images to be deployed.
Deny all images : Disallows all images from being deployed.
Allow only images that have been approved by the following attestors :
Allows an image to be deployed if the image has one or more attestations
that can be verified by all of the attestors that you add to this rule.
To learn about creating attestors, see
Creating attestors .
If you selected Allow only images that have been approved by the following
attestors :
Get the name or resource ID of your attestor.
In the Google Cloud console , on the Attestors page, you can view
your existing attestors, or create a new one.
Go to the Binary Authorization Attestors page
Click Add Attestors .
Select one of the following options:
Add by project and attestor name
The project refers to the project ID of the project that stores
your attestors. An example of an attestor name is build-qa .
Add by attestor resource ID
A resource ID has the format:
projects/ PROJECT_ID /attestors/ ATTESTOR_NAME
Under Attestors , enter appropriate value(s) for the option
you selected.
Click Add Another Attestor if you want to add additional attestors.
Click Add Attestor(s) to save the rule.
Click Add to save the rule.
You might see a message that reads "It looks like this
cluster doesn't exist. This rule still takes effect if the specified
cluster becomes available in GKE in the future." In this case, click
Add again to save the rule.
If you want to enable dry run mode ,
select Dry Run Mode .
Click Save Policy .
Note: It can take a few minutes for the policy to take effect.
Add specific rules
Note : This feature can only be enabled on clusters running on
the following GKE releases:
1.18.12-gke.700+
1.19.4-gke.700+
1.20.0-gke.600+
1.21+
You can create rules that are scoped to either a mesh service identity, a
Kubernetes service account, or a Kubernetes namespace. You can add or modify a
specific rule as follows:
In the Google Cloud console , go to the Binary Authorization page.
Go to the Binary Authorization page
Click the Policy tab.
Click Edit Policy .
Expand the Additional settings for GKE and Anthos deployments section.
If no specific rule type is set, click Create Specific Rules .
Click Specific Rule Type to select the rule type.
Click Change to update the rule type.
If the specific rule type exists, you can change the rule type by
clicking Edit Type .
Note: You can set one specific rule type per policy. If the rule type
is changed, the rules created for the original type will be deleted
when the policy page is saved.
To add a specific rule, click Add Specific Rule . Depending on the
rule type you choose, you enter an ID, as follows:
ASM Service Identity : Enter your ASM service identity, which
has the following format:
PROJECT_ID .svc.id.goog/ns/ NAMESPACE /sa/ SERVICE_ACCOUNT
Kubernetes Service Account : Enter your Kubernetes service account,
which has the following format: NAMESPACE : SERVICE_ACCOUNT .
Kubernetes Namespace : Enter your Kubernetes namespace, which has the
following format: NAMESPACE
Replace the following, as required, depending on the rule type:
PROJECT_ID : the project ID in which you define your
Kubernetes resources.
NAMESPACE : the Kubernetes namespace.
SERVICE_ACCOUNT : the service account.
Set the evaluation mode for the default
rule.
The evaluation mode specifies the type of constraint that Binary Authorization
enforces at deploy time. To set the evaluation mode, select one of the
following options:
Allow all images : Allows all images to be deployed.
Deny all images : Disallows all images from being deployed.
Allow only images that have been approved by the following attestors :
Allows an image to be deployed if the image has one or more attestations
that can be verified by all of the attestors that you add to this rule.
To learn about creating attestors, see
Creating attestors .
If you selected Allow only images that have been approved by the following
attestors :
Get the name or resource ID of your attestor.
In the Google Cloud console , on the Attestors page, you can view
your existing attestors, or create a new one.
Go to the Binary Authorization Attestors page
Click Add Attestors .
Select one of the following options:
Add by project and attestor name
The project refers to the project ID of the project that stores
your attestors. An example of an attestor name is build-qa .
Add by attestor resource ID
A resource ID has the format:
projects/ PROJECT_ID /attestors/ ATTESTOR_NAME
Under Attestors , enter appropriate value(s) for the option
you selected.
Click Add Another Attestor if you want to add additional attestors.
Click Add Attestor(s) to save the rule.
Click Dry run mode to enable
dry run mode .
Click Add to save the specific rule.
Click Save Policy .
Note: It can take a few minutes for the policy to take effect.
Manage exempt images
This section applies to GKE,
Distributed Cloud, Cloud Run, and
Cloud Service Mesh .
An exempt image is an image, specified by a path,
that is exempt from policy rules. Binary Authorization always allows exempt
images to be deployed.
This path can specify a location either in
Container Registry or another container image
registry.
Cloud Run
This section applies to Cloud Run .
You cannot directly specify image names that contain a tag. For example, you cannot specify
IMAGE_PATH :latest.
If you want to specify image names that contain tags, you must specify the image name using a wildcard as follows:
* for all versions of a single image; for example, us-docker.pkg.dev/myproject/container/hello@*
** for all images in a project; for example, us-docker.pkg.dev/myproject/**
You can use path names to specify a digest in the format
IMAGE_PATH @ DIGEST .
Enable the system policy
This section applies to GKE and
Distributed Cloud .
Trust all Google-provided system images
is a policy setting that enables the Binary Authorization system policy.
When this setting is enabled at deploy time, Binary Authorization exempts a
list of Google-maintained system images that are required by
GKE from further policy evaluation. The system policy is
evaluated before any of your other policy settings.
Note: We recommend that you select Trust all Google-provided system images .
Doing so allows Google to manage the allowlist of system images that
GKE uses. Google updates this allowlist with each
GKE release. If you don't enable the setting, you must
manage the allowlist yourself.
To enable the system policy, do the following:
Go to the Binary Authorization page in Google Cloud console .
Go to Binary Authorization
Click Edit Policy .
Expand the Additional settings for GKE and Anthos deployments section.
Select Trust all Google provided system images in the Google system
image exemption section.
To view the images exempted by the system policy, click View Details .
Note: The system policy information might temporarily differ from region to
region while Google updates the allowlist.
The list of images displayed is from the last group of regions that was updated.
Since most changes to the system policy are additions the list shows the set of
system images that are currently allowed in all regions.
You can view the system policy for a specific region using a gcloud command .
To manually specify additional exempt images, expand the
Custom exemption rules section under Images exempt from this policy .
Then, click Add Image Pattern and enter the registry path to any
additional image you want to exempt.
Click Save Policy .
Note: It can take a few minutes for the policy to take effect.
What's next
Use the built-by-cloud-build attestor to deploy only images built by Cloud Build ( Preview ).
Use attestations .
Deploy a GKE image .
View Cloud Audit Logs events .
Use continuous validation .
Use legacy continuous validation
( deprecated ) to check policy conformance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
