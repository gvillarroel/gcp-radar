---
title: "Set up Binary Authorization policy enforcement \_|\_ Google Distributed Cloud\
  \ (software only) for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/binary-authorization-policy
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/binary-authorization-policy
  title: "Set up Binary Authorization policy enforcement \_|\_ Google Distributed\
    \ Cloud (software only) for bare metal \_|\_ Google Cloud Documentation"
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
Set up Binary Authorization policy enforcement
Stay organized with collections
Save and categorize content based on your preferences.
Binary Authorization for Google Distributed Cloud is a Google Cloud feature
that extends the hosted, deploy-time enforcement of
Binary Authorization to your on-premises
clusters. The primary use case for Binary Authorization on
Google Distributed Cloud is to secure workloads, but Binary Authorization works
with all cluster types. Follow the steps in this guide to apply the enforcement
rules of a Binary Authorization policy configured in your Google Cloud project to
your clusters. For more information about Binary Authorization policies and
rules, see Binary Authorization
overview .
Note: If you enabled the ( Preview )
Binary Authorization for Google Distributed Cloud, disable it and clean up the
resources before you
enable the GA feature. Use the instructions in this document to enable the GA
feature on version 1.16.0 or higher clusters.
Prerequisites
Before you can enable Binary Authorization policy enforcement for a cluster,
ensure you've met the following prerequisite criteria:
Register the cluster with a fleet: A cluster created with bmctl , the
cluster is registered to the Google Cloud project that you specify in
the gkeConnect.projectID field in the cluster configuration file. This
project is referred to as the fleet host
project .
To learn more about fleets, including uses cases, best practices, and
examples, see the Fleet management
documentation.
Enable the Binary Authorization API in your Google Cloud project: enable
the Binary Authorization service in
your fleet host project.
Add the Binary Authorization Policy Evaluator role to your fleet host
project: To grant the Binary Authorization Policy Evaluator
( roles/binaryauthorization.policyEvaluator ) role to the Kubernetes service
account on your fleet host project, run the following command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: PROJECT_ID .svc.id.goog[binauthz-system/binauthz-agent]" \
--role = "roles/binaryauthorization.policyEvaluator"
If your cluster is running behind a proxy server, make sure the proxy server
allows connections to the Binary Authorization API
( binaryauthorization.googleapis.com ). This API provides policy-based
deployment validation and control for images deployed to your cluster. For
more information about using a proxy configuration, see Install behind a
proxy .
Once you satisfy the prerequisites, you can enable (or disable) the
Binary Authorization policy when you create a new cluster or update an existing
cluster.
Enable the Binary Authorization policy during cluster creation
You can enable the Binary Authorization policy enforcement with either bmctl
or gcloud CLI.
bmctl
To enable Binary Authorization when you create a cluster with bmctl :
Before you create your cluster, add
spec.binaryAuthorization.evaluationMode to the cluster configuration file
as shown in the following example:
...
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : user-basic
namespace : cluster-user-basic
spec :
type : user
...
binaryAuthorization :
evaluationMode : "PROJECT_SINGLETON_POLICY_ENFORCE"
Allowed values for evaluationMode are:
PROJECT_SINGLETON_POLICY_ENFORCE : enforce the rules specified in the
Binary Authorization policy , also known as a project-singleton
policy , on your Google Cloud project to govern the deployment of
container images on your cluster.
DISABLE : disable the use of Binary Authorization for your cluster.
This is the default value. If you omit binaryAuthorization , the
feature is disabled.
Make any other changes needed in the cluster configuration file and then
run the bmctl create cluster command.
For more information about creating clusters, see
Cluster creation overview .
gcloud CLI
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To create a user cluster and enable Binary Authorization, add the
--binauthz-evaluation-mode=PROJECT_SINGLETON_POLICY_ENFORCE flag when
you run the gcloud container bare-metal clusters create command.
This creates a user cluster that enforces the rules specified in the
Binary Authorization policy , also known as a project-singleton
policy . This policy is associated with your Google Cloud project and
specifies rules to govern the deployment of container images. For more
information about using gcloud CLI to create a user cluster,
see Create a user cluster using GKE On-Prem API clients .
For more information about Binary Authorization policies and rules, see
Binary Authorization overview .
Enable or disable the Binary Authorization policy for an existing cluster
If you have an existing version 1.16 or higher cluster, you can enable or
disable Binary Authorization at any time, using bmctl or
gcloud CLI.
bmctl
To enable:
Edit the cluster configuration file to add the binaryAuthorization
fields:
...
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : user-basic
namespace : cluster-user-basic
spec :
type : user
...
binaryAuthorization :
evaluationMode : "PROJECT_SINGLETON_POLICY_ENFORCE"
Update the cluster:
bmctl update cluster -c CLUSTER_NAME --admin-kubeconfig = CLUSTER_KUBECONFIG
Replace the following:
CLUSTER_NAME : the name of the cluster to update.
CLUSTER_KUBECONFIG : the path to the cluster
kubeconfig file.
Wait for the Deployment named binauthz-module-deployment in the
binauthz-system namespace to become ready.
When the deployment is ready, Binary Authorization enforces the rules
specified in the Binary Authorization policy , also known as a
project-singleton policy . This policy is associated with your
Google Cloud project and specifies rules to govern the deployment of
container images. For more information about using bmctl to update a
cluster, see Update clusters .
For more information about Binary Authorization policies and rules,
see Binary Authorization overview .
To disable:
This feature can be turned off by setting evaluationMode to DISABLED
or removing the binaryAuthorization section from the cluster spec. Once
this change is made, wait for a few minutes until the Deployment named
binauthz-module-deployment in binauthz-system namespace is removed.
gcloud CLI
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To enable Binary Authorization for an existing cluster, add the
--binauthz-evaluation-mode=PROJECT_SINGLETON_POLICY_ENFORCE flag when
you run the gcloud container bare-metal clusters update command.
This updates a user cluster so that Binary Authorization enforces
the rules specified in the Binary Authorization policy , also known as a
project-singleton policy . This policy is associated with your
Google Cloud project and specifies rules to govern the deployment of container
images. For more information about using gcloud CLI to update a
user cluster, see
gcloud container bare-metal clusters update
in the gcloud CLI Reference.
For more information about Binary Authorization policies and rules, see
Binary Authorization overview .
To disable Binary Authorization for an existing cluster, run the
gcloud container bare-metal clusters update command with the
--binauthz-evaluation-mode=DISABLED flag.
Troubleshooting
If you don't complete all of the prerequisites , you may not
see any early indication of a problem. If Binary Authorization starts failing
to respond to Pod creation requests, check status.conditions for the
ReplicaSet. A message like the following indicates there is a problem with the
Binary Authorization configuration:
failed to validate Binary Authorization policy
( 1 ) Ensure the Binary Authorization API is enabled for your Google Cloud project:
gcloud services enable binaryauthorization.googleapis.com --project = PROJECT_ID
( 2 ) Ensure an IAM policy binding is in place granting binaryauthorization.policyEvaluator role to the binauthz-system/binauthz-agent Kubernetes service account:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: PROJECT_ID .svc.id.goog[binauthz-system/binauthz-agent]" \
--role = roles/binaryauthorization.policyEvaluator
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
