---
title: "Introduction to AI/ML workloads on GKE \_|\_ GKE AI/ML \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning
  title: "Introduction to AI/ML workloads on GKE \_|\_ GKE AI/ML \_|\_ Google Cloud\
    \ Documentation"
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
Introduction to AI/ML workloads on GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page provides a conceptual overview of Google Kubernetes Engine (GKE) for
AI/ML workloads. GKE is a Google-managed implementation of the
Kubernetes open source container orchestration platform.
Google Kubernetes Engine
provides a scalable, flexible, and cost-effective platform for running all your
containerized workloads, including artificial intelligence and
machine learning (AI/ML) applications. Whether you're training large foundation
models, serving inference requests at scale, or building a comprehensive
AI platform, GKE offers the control and performance you
need.
This page is for Data and AI specialists, Cloud architects,
Operators, and Developers who are looking for a
scalable, automated, managed Kubernetes solution to run AI/ML workloads. To
learn more about common roles, see
Common GKE user roles and tasks .
Get started with AI/ML workloads on GKE
You can start exploring GKE in minutes by using GKE's
free tier ,
which lets you get started with Kubernetes without incurring costs for cluster
management.
Get started in Google Cloud console
Try these quickstarts:
Inference on GKE : deploy an AI large language model (LLM) on GKE for inference using a pre-defined architecture.
Training on GKE : deploy an AI training model on GKE
and store the predictions in Cloud Storage.
Read About accelerator consumption options for AI/ML workloads , which has guidance and resources for planning
and obtaining accelerators (GPUs and TPUs) for your platform.
Common use cases
GKE provides a unified platform that can support all of your
AI workloads.
Building an AI platform : for enterprise platform teams,
GKE provides the flexibility to build a standardized, multi-tenant
platform that serves diverse needs.
Low-latency online serving : For developers building generative AI
applications, GKE with the Inference Gateway provides the
optimized routing and autoscaling needed to deliver a responsive user experience
while controlling costs.
Choose the right platform for your AI/ML workload
Google Cloud offers a spectrum of AI infrastructure products to support your
ML journey, from fully managed to fully configurable. Choosing the right
platform depends on your specific needs for control, flexibility, and level of
management.
Best practice :
Choose GKE when you need deep control, portability, and the
ability to build a customized, high-performance AI platform.
Infrastructure control and flexibility : you require a high degree of
control over your infrastructure, need to use custom pipelines, or require
kernel-level customizations.
Large-scale training and inference : you want to train very large models
or serve models with minimal latency, by using GKE's
scaling and high performance.
Cost efficiency at scale : you want to prioritize cost optimization by
using GKE's integration with Spot VMs and Flex-start VMs
to effectively manage costs.
Portability and open standards : you want to avoid vendor
lock-in and run your workloads anywhere with Kubernetes, and you already have
existing Kubernetes expertise or a multi-cloud strategy.
You can also consider these alternatives:
Google Cloud service
Best for
Vertex AI
A fully managed, end-to-end platform to accelerate development and offload infrastructure management. Works well for teams focused on MLOps and rapid time-to-value. For more information, watch Choosing between self-hosted GKE and managed Vertex AI host AI models .
Cloud Run
A serverless platform for containerized inference workloads that can scale to zero. Works well for event-driven applications and serving smaller models cost-effectively. For a comparative deep-dive, see GKE and Cloud Run .
How GKE powers AI/ML workloads
GKE offers a suite of specialized components that simplify and
accelerate each stage of the AI/ML lifecycle, from large-scale training to
low-latency inference.
Figure 1 : GKE as a scalable managed platform
for AI/ML workloads.
The following table summarizes the GKE features that support
your AI/ML workloads or operational goals.
AI/ML workload or operation
How GKE supports you
Key features
Inference and serving
Optimized to serve AI models elastically, with low latency, high throughput,
and cost efficiency.
Accelerator flexibility : GKE supports both GPUs
and TPUs for inference.
GKE Inference Gateway : a model-aware gateway that provides intelligent routing and load balancing specifically for AI inference workloads.
GKE Inference Quickstart : a tool to simplify performance analysis and deployment by providing a set of benchmarked profiles for popular AI models.
GKE Autopilot : a GKE operational mode that automates cluster operations and
capacity right-sizing, reducing overhead.
Training and fine-tuning
Provides the scale and orchestration capabilities necessary to efficiently train very large models while minimizing costs.
Faster startup nodes : an optimization designed specifically for GPU workloads that reduces node startup times by up to 80%.
flex-start provisioning mode powered by Dynamic Workload Scheduler : improves your ability to secure scarce GPU and TPU accelerators for short-duration training workloads.
Kueue : a Kubernetes-native job queueing system that manages resource allocation, scheduling, quota management, and prioritization for batch workloads.
TPU multislice :
a hardware and networking architecture that allows multiple TPU slices to
communicate with each other over the Data Center Network (DCN) to achieve large
scale training.
Unified AI/ML development
Managed support for Ray, an open-source framework for scaling distributed Python applications.
Ray on GKE add-on : abstracts Kubernetes infrastructure, letting
you scale workloads like large-scale data preprocessing, distributed training,
and online serving with minimal code changes.
What's next
To explore our extensive collections of official guides, tutorials, and other resources for running AI/ML workloads on GKE, visit the AI/ML orchestration on GKE portal .
Learn about techniques to obtain computing accelerators, such as GPUs or TPUs, for your AI/ML workloads on GKE .
Learn about AI/ML model inference on GKE .
Learn about Ray on GKE .
Explore experimental samples for leveraging GKE to accelerate your AI/ML initiatives in GKE AI Labs .
View details for your AI/ML workloads in Google Cloud console , including resources such as JobSets, RayJobs, PyTorchJobs, and Deployments for inference serving.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
