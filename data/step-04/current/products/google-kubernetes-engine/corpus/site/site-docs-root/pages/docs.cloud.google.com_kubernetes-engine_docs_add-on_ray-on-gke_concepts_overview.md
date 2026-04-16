---
title: "About Ray on Google Kubernetes Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/concepts/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/concepts/overview
  title: "About Ray on Google Kubernetes Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE AI/ML
Guides
Send feedback
About Ray on Google Kubernetes Engine (GKE)
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page provides an overview of the Ray Operator and relevant custom
resources to deploy and manage Ray clusters and applications on
Google Kubernetes Engine (GKE).
Ray is an open-source unified compute framework for
scaling AI/ML and Python applications. Ray provides a set of libraries to
distribute the compute runtime for AI/ML across multiple compute nodes.
To learn how to enable the Ray operator on GKE, see
Enable the Ray operator on GKE .
Why use the Ray Operator on GKE
The Ray Operator is the recommended way to deploy and manage Ray clusters on
GKE. When you run the Ray Operator on GKE, you
benefit from Ray's support for Python and GKE's enterprise-grade
reliability, portability, and scalability.
The Ray Operator on GKE is based on
KubeRay , which provides
declarative Kubernetes APIs specifically designed for managing Ray clusters.
This means that you can provision, scale, and manage your Ray Deployments with
other containerized workloads on GKE.
How the Ray Operator on GKE works
When you enable the Ray Operator in your GKE clusters,
GKE automatically installs and hosts the KubeRay operator.
KubeRay provides Kubernetes custom resources to manage Ray Deployments
on Kubernetes, including:
RayCluster
RayJob
RayService
RayCluster custom resource
The RayCluster custom resource lets you specify a Ray cluster that
GKE deploys as Kubernetes Pods. A Ray cluster typically consists
of a single head Pod and multiple worker Pods.
RayJob custom resource
The RayJob custom resource lets you execute a single Ray job. KubeRay
creates a RayCluster to provide compute resources for the job, then creates a
Kubernetes Job that submits the Ray job to the head Pod of the RayCluster.
For efficient resource management, you can configure KubeRay to
automatically clean up the RayCluster after your job is successfully completed.
RayService custom resource
The RayService custom resource lets you configure
Ray Serve applications ,
such as applications for model serving and inference. KubeRay creates a
RayCluster to provide the compute resources and then deploys the Ray Serve
application as specified by the Ray Serve configuration.
Ray on GKE shared responsibility
When you choose to run Ray workloads on GKE with the Ray operator, it's
important to understand how responsibilities are divided between Google Cloud
and you, the customer:
Google's responsibilities
Maintaining the reliability and uptime of the KubeRay operator.
Managing version upgrades for the KubeRay operator.
Capabilities specific to KubeRay for managing the RayCluster, RayJob, and
RayService custom resources.
Customer's responsibilities
Maintaining container images used for the Ray head and Ray worker Pods.
Maintaining versioning and upgrades for the Ray head and Ray worker Pods.
Configuring resource requirements (CPU, GPU, memory, etc.) for your Ray clusters.
Following best practices for
securing Ray clusters .
Reliability and monitoring for your Ray applications.
See GKE shared responsibility to learn more.
What's next
Learn how to
Enable the Ray operator on GKE .
Explore the
Ray on Kubernetes
documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
