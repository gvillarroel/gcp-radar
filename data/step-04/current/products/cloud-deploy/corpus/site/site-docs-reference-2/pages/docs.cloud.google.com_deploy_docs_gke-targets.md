---
title: "Deploy to a Google Kubernetes Engine cluster \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/gke-targets
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/gke-targets
  title: "Deploy to a Google Kubernetes Engine cluster \_|\_ Google Cloud Documentation"
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
Deploy to a Google Kubernetes Engine cluster
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to deploy your applications to Google Kubernetes Engine
clusters.
Cloud Deploy lets you deploy your container-based workloads to any
Google Kubernetes Engine
cluster. All Cloud Deploy features are supported when you deploy to
GKE targets.
Before you begin
Have one or more GKE clusters to deploy to.
If you don't have any GKE clusters to deploy to, you can
create them .
Have a Cloud Deploy delivery pipeline .
Make sure your execution service account
has the roles and permissions it needs.
In this skaffold.yaml file, the deploy stanza includes kubectl , which
indicates that Skaffold is rendering for, and deploying to, Kubernetes
(GKE). And the manifests you use for this application are
listed under there.
Create your target configuration
Each target can be configured in your delivery pipeline YAML, or can be in a
separate file. Also, you can configure more than one target in the same file,
but they must be in different kind: Target stanzas.
Targets must be defined in the same project and region as the delivery pipeline.
But the clusters the targets deploy to can be in different projects and regions,
as long as the service account has access to those projects.
In the target definition, create a gke stanza to point to the
GKE cluster:
gke :
cluster : projects/[project_name]/locations/[location]/clusters/[cluster_name]
This GKE resource identifier uses the following elements:
[ project_name ] is the name of the Google Cloud project in which
you're running this cluster.
The cluster you are deploying to does not need to be in the same project as
your delivery pipeline.
[ location ] is the region in which the cluster was created.
[ cluster_name ] is the name given to the cluster when it was created.
You can find this name in the list of clusters for your project, in the
Google Cloud console.
The following is an example target configuration, pointing to a GKE
cluster:
apiVersion: deploy.cloud.google.com/v1
kind: Target
metadata:
name: dev
description: development cluster
gke:
cluster: projects/my-app/locations/us-central1/clusters/my-app-dev-cluster
Create your Skaffold configuration
This section provides and explains an example of a simple Skaffold configuration
to use when deploying to a GKE cluster.
The following is an example skaffold.yaml file for deployment to a
GKE cluster:
apiVersion : skaffold/v4beta7
kind : Config
metadata :
name : gke-application
manifests :
rawYaml :
- deployment.yaml
deploy :
kubectl : {}
Using Skaffold with Cloud Deploy
describes in more detail how to use Skaffold with your delivery pipeline.
Prepare your Kubernetes manifests
To deploy your application to GKE, you provide
Cloud Deploy with one or more Kubernetes manifests, which are
rendered and then applied to the target
cluster or clusters to deploy your application.
If you don't have those manifests, create them before you try to deploy using
a Cloud Deploy delivery pipeline.
You can use Kustomize or Helm
to help you create manifests. You can also use Kustomize or Helm if your
manifests are templated and need to be rendered.
Putting it all together
Now that you have your Kubernetes manifests, your skaffold.yaml configuration,
and your Cloud Deploy target definitions, and you've
registered your targets
as Cloud Deploy resources, you can now
invoke your delivery pipeline
to create a release and progress it through the progression of targets defined
in the pipeline.
Deploy using a proxy
You can specify a proxy for your target GKE cluster. This
is for organizations that are set up to access their clusters through an HTTP
proxy only.
To do so, add a proxyUrl property to the gke stanza in the target config:
gke :
cluster : projects/my-app/locations/us-central1/clusters/my-app-dev-cluster
proxyUrl : [ URL ]
Where URL is the URL of the proxy.
Deploy to a private cluster
You can deploy your application to a private GKE cluster,
using one of three options:
Using a DNS-based endpoint
Using a Virtual Private Cloud network
Using GKE attached clusters and connect gateway
Use a DNS endpoint
This is the simplest way to connect to a private cluster.
Enable the DNS-based endpoint on your cluster .
Set dnsEndpoint to true under gke in the target configuration .
If your cluster doesn't have an IP-based endpoint configured, you can skip
this step; Cloud Deploy will connect to the DNS endpoint by
default since it is the control plane's only endpoint.
Use a Virtual Private Cloud network
You can configure a target to deploy to a
private GKE cluster
connected to a Virtual Private Cloud network:
Create your private cluster
A private cluster is a VPC-native cluster whose nodes and Pods are isolated
by default from the public internet.
If you plan to use the internal IP of the private cluster target, then set
internalIp to true under gke in the target configuration .
In Cloud Build,
create a private worker pool
that you can use to deploy to this private cluster.
Configure the execution environment to use that private pool .
You must use this pool for RENDER . You can also use it for DEPLOY and for
VERIFY . Here's an example that uses RENDER and DEPLOY :
executionConfigs :
- usages :
- RENDER
- DEPLOY
workerPool : "projects/p123/locations/us-central1/workerPools/wp123"
See
Access private GKE clusters from Cloud Build private pools using Identity Service for GKE
and
Access private GKE clusters with Cloud Build private pools
for more information.
Project and permissions considerations
You can configure a target to use a private worker pool that can deploy to a
private cluster. But there are some things to note if resources are in different
projects.
When Cloud Deploy and the worker pool are in separate projects
To communicate with a private pool that has access to a VPC and that's in a
different project from your target, the Cloud Deploy
service agent needs
sufficient permissions to talk to that project.
The execution service account
also needs permissions to access the Cloud Storage bucket.
When the worker pool and the cluster are in separate projects
If the private GKE cluster is in a different project from
the private worker pool, the
execution service account
requires sufficient permissions to talk to the project the cluster is in.
Use GKE attached clusters targets and connect gateway
You can configure a target to deploy to a
private GKE cluster
with targets that use GKE attached clusters
and connect gateway .
This approach does not require that you use a Virtual Private Cloud or virtual private
network connections.
What's next
Try the quickstart: deploy an application to GKE
Invoke your delivery pipeline to create a release
Learn more about configuring Cloud Deploy targets
Learn more about using Skaffold with Cloud Deploy
Learn about Cloud Deploy execution environments .
Learn more about GKE
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
