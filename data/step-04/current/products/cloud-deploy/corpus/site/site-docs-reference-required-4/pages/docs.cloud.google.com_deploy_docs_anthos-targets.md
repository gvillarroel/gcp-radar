---
title: "Deploy to GKE attached clusters \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/anthos-targets
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/promote-release
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/anthos-targets
  title: "Deploy to GKE attached clusters \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Guides
Send feedback
Deploy to GKE attached clusters
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to deploy your applications to
GKE attached clusters . Support for
GKE attached clusters enables deployment to AWS, Azure,
and on-premises clusters.
Cloud Deploy lets you deploy your container-based workloads to any
GKE attached clusters that you can access using
Connect
gateway.
Before you begin
Have a user cluster that you will deploy to.
Clusters can be created as GKE attached clusters, or you can
register an existing Kubernetes cluster .
Clusters that you create as GKE attached clusters
automatically receive memberships. For existing clusters that you
register to a fleet , you
designate a membership name when registering. You need this membership name
when you configure the target.
If you're using Google Cloud CLI version 407.0.0 or newer, you need to
include the --install-connect-agent flag on the
gcloud container fleet memberships register command ,
when you register a Google Kubernetes Engine cluster. The Connect agent is no longer
installed by default.
Set up Connect gateway to
connect the registered cluster or clusters to Google Cloud.
Be sure to set up the gateway using the same service account that will be used
as the Cloud Deploy execution service account . If you don't, then the execution service
account won't have the necessary permissions to deploy to the cluster.
Note: Enable Workload Identity
on the GKE clusters in order to set up Connect gateway.
Set up your Cloud Deploy to deploy to GKE attached clusters
Create your target configuration .
The target can be configured in your delivery pipeline YAML, or can be in a
separate file. Also, you can configure more than one target in the same file,
but they must be in different kind: Target stanzas.
Grant the execution service account
the roles that it needs
so that it can interact with connected clusters through the gateway.
This grant is necessary whether you're using the default Cloud Deploy
service account or a custom service account .
Set up RBAC
for the execution service account on the
underlying Kubernetes cluster.
Optional: if the underlying cluster is not a GKE
cluster, you might need to configure an imagePullSecret
to allow your cluster to pull from Artifact Registry.
In the target definition, create an anthosCluster stanza to point to the
cluster:
The syntax for specifying GKE attached clusters is as
follows:
anthosCluster :
membership : projects/[project_name]/locations/global/memberships/[membership_name]
This GKE attached clusters resource identifier uses the following elements:
[ project_name ] is the name of the Google Cloud project in which
you're running this cluster.
The cluster you're deploying to, including
GKE attached clusters, does not need to be in the same
project as your delivery pipeline.
[ membership_name ] is the name that you chose when you
registered the cluster
to a fleet.
For location , all cluster memberships are global , so you don't need to
change /locations/global/ in this resource identifier.
The following is an example target configuration:
apiVersion: deploy.cloud.google.com/v1
kind: Target
metadata:
name: qsdev
description: development cluster
anthosCluster:
membership: projects/my-app/locations/global/memberships/my-app-dev-cluster
What's next
Learn more about configuring Cloud Deploy targets
Learn about Cloud Deploy execution environments .
Learn more about GKE attached clusters
Learn more about Connect gateway .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
