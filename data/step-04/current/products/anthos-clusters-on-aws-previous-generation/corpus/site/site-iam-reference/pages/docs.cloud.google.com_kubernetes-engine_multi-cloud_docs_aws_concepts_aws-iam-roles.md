---
title: "About AWS IAM roles \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/aws-iam-roles
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/aws-iam-roles
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/aws-iam-roles
  title: "About AWS IAM roles \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
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
About AWS IAM roles
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how Google Cloud manages AWS Identity and Access
Management (IAM) permissions and roles for your GKE on AWS.
GKE on AWS uses the AWS API to create resources such as EC2 instances,
auto-scaling groups, and load balancers for both GKE on AWS components and
your workloads. You must provide Google Cloud with AWS IAM permissions to
create these resources.
How GKE on AWS accesses the AWS API
GKE on AWS uses
identity federation in AWS
to manage fine-grained access to your AWS account. When GKE on AWS
needs to take an action for your cluster, it requests a short-lived token
from AWS. The GKE Multi-Cloud API role uses this token to authenticate
to AWS.
Service agents
In order to grant Google Cloud access to create, update, delete, and
manage clusters in your AWS account, GKE on AWS creates a
Service agent in your Google Cloud project. The
service agent is a
Google-managed service account that
uses the GKE Multi-Cloud API AWS IAM role .
You must create an AWS IAM role for the
service agent in each Google Cloud project where you manage GKE clusters from.
The service agent uses the email address
service- PROJECT_NUMBER @gcp-sa-gkemulticloud.iam.gserviceaccount.com .
For more information on the Google Cloud IAM permissions,
see
Anthos Multi-Cloud Service Agent .
AWS IAM permissions for GKE on AWS
You can create roles that use default AWS IAM roles, or create your own
custom AWS IAM policies that meet your organization's requirements.
Use default policies
An AWS IAM policy is a collection of permissions. To grant permissions to
create and manage clusters, you must first create AWS IAM
policies for the following roles:
GKE Multi-Cloud API service agent role
The GKE Multi-Cloud API uses this AWS IAM role to manage resources using AWS APIs.
This role is used by a Google-managed service account known as a
service agent .
Control plane AWS IAM role
Your cluster control plane uses this role to control node pools.
Node pool AWS IAM role
The control plane uses this role to create node pool VMs.
To use suggested AWS IAM roles for GKE on AWS to manage clusters,
see Create AWS IAM roles .
Create custom IAM policies
To further restrict permissions, instead of using suggested policies you can
create custom AWS IAM policies that allow GKE on AWS. For example, you can
restrict permissions to permissions to resources with a certain tag, or
resources in a specific AWS VPC
Controlling access with tags
You can restrict AWS IAM policies to allow actions only on a limited set of
resources, using AWS tags. Any role with that tag specified in its
condition field will be restricted to operating on resources with the same tag.
You can use this to restrict administrative roles to acting on resources in a
specific cluster or node pool.
To restrict an AWS IAM policy to apply only to resources with a specific tag,
include the tag's value in the Condition field of the policy, then pass the
tag value when you create your cluster and node pools. GKE on AWS
applies this tag when it creates resources.
For more information on tags, see
Tagging AWS resources .
For more information on using tags with an AWS policy, see
Controlling access to AWS resources .
For more on creating cluster resources with a particular tag, see the
gcloud container aws clusters create
and
gcloud container aws node-pools create
reference documentation.
For a list of specific permissions that GKE on AWS needs for each policy,
see the AWS IAM role list .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
