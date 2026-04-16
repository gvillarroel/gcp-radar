---
title: "Manage identity with GKE Identity Service \_|\_ GKE on AWS \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/anthos-identity-service
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/anthos-identity-service
  title: "Manage identity with GKE Identity Service \_|\_ GKE on AWS \_|\_ Google\
    \ Cloud Documentation"
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
Manage identity with GKE Identity Service
Stay organized with collections
Save and categorize content based on your preferences.
GKE on AWS supports
OpenID Connect (OIDC)
and
AWS IAM as an
authentication mechanism for interacting with a cluster's Kubernetes API
server, using GKE Identity Service. GKE Identity Service is an
authentication service that lets you bring your existing identity solutions for
authentication to multiple environments. Users can log in to and
use your GKE clusters from the command line or from the
Google Cloud console, all using your existing identity provider.
For an overview of how GKE Identity Service works, see
Introducing GKE Identity Service .
If you already use or want to use Google identities to log in to your
GKE clusters, we recommend using the
gcloud containers aws clusters get-credentials command for authentication. Find out
more in
Connect and authenticate to your cluster .
OpenID Connect authentication
Before you begin
To use OIDC authentication, users must be able to connect to the cluster's control
plane. See
Connect to your cluster's control plane .
To authenticate through the Google Cloud console, you must
register each cluster
that you want to configure with your project fleet. For GKE on AWS,
this is automatic once you have created a node pool.
To allow users to authenticate through the Google Cloud console, ensure that all
clusters you want to configure are
registered with your project fleet .
For GKE on AWS, this is automatic once you have created a node pool.
Setup process and options
Register GKE Identity Service as a client with your OIDC provider
following the instructions in
Configuring providers for GKE Identity Service .
Choose from the following cluster configuration options:
Configure your clusters at the fleet-level following the instructions in
Configuring clusters for fleet-level GKE Identity Service .
With this option, your authentication configuration is centrally managed by
Google Cloud.
Configure your clusters individually following the instructions in
Configuring clusters for GKE Identity Service with OIDC .
Set up user access to your clusters, including role-based access control
(RBAC), following the instructions in
Setting up user access for GKE Identity Service .
Accessing clusters
After GKE Identity Service has been set up on a cluster, users can log in
to clusters using either the command line or the Google Cloud console.
Learn how to log in to registered clusters with your OIDC ID in
Accessing clusters using GKE Identity Service .
Learn how to log in to clusters from the Google Cloud console in
Logging in to a cluster from the Google Cloud console .
AWS IAM authentication
The AWS IAM support on GKE on AWS uses
GKE Identity Service .
Before you begin
To use AWS IAM authentication, users must be able to connect to the cluster's control
plane. See
Connect to your cluster's control plane .
Setup process and options
To configure your cluster to allow AWS IAM authentication for a particular AWS region,
do the following:
Edit the ClientConfig resource on your cluster:
kubectl --kubeconfig = KUBECONFIG_PATH edit ClientConfigs default -n kube-public
Replace KUBECONFIG_PATH with the path to your
cluster's kubeconfig file—for example $HOME/.kube/config .
Your text editor loads your cluster's ClientConfig resource. Add the
spec.authentication.aws object as shown below. Do not modify any
default data that has already been written.
apiVersion : authentication.gke.io/v2alpha1
kind : ClientConfig
metadata :
name : default
namespace : kube-public
spec :
authentication :
- name : NAME
aws :
region : AWS_REGION
Replace the following:
NAME : an arbitrary name of this authentication method.
e.g. "aws-iam".
AWS_REGION : the AWS region where the user info is
retrieved. It needs to match the region configured on your users' AWS CLI.
To enable your cluster users to use AWS IAM, follow
Setting up user access for GKE Identity Service .
Accessing clusters
After GKE Identity Service has been set up on a cluster, users can log in
to clusters using either the command line or the Google Cloud console.
To learn how to log in to registered clusters with your AWS IAM identity, see
Accessing clusters using GKE Identity Service .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
