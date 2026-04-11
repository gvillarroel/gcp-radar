---
title: "AI zones \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/ai-zones
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/ai-zones
  title: "AI zones \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Guides
Send feedback
AI zones
Stay organized with collections
Save and categorize content based on your preferences.
Important: Access to AI zones is restricted by an allowlist. To request access,
contact Cloud Sales or your
account manager .
This document provides an overview of AI zones for Cloud Storage. AI zones
are specialized Google Cloud zones that are designed to offer computing capacity
for artificial intelligence (AI) and machine learning (ML) workloads. They
provide significant ML accelerator (GPU and TPU) capacity.
AI zones are optimized for AI and ML workloads like the following:
Large-scale training
Small-scale training, fine-tuning, bulk inference, and retraining
Real-time ML inference
For background information about AI zones, see AI zones in the
Compute Engine documentation.
Within a region, AI zones might be geographically located away from standard
(non-AI) zones.
AI zones are compatible with other Cloud Storage and Google Cloud
features.
Storage architecture recommendations
We recommend that you use a tiered storage architecture to balance cost,
durability, and performance:
Cold storage layer : use regional Cloud Storage buckets in
standard zones for persistent, highly durable storage (the "source of truth")
of your training datasets and model checkpoints.
Performance layer : use specialized zonal storage services to act as a
high-speed cache or temporary scratch space. This approach eliminates
inter-zonal latency and maximizes throughput during active jobs.
The following storage solutions are recommended for optimizing AI and ML
system performance with AI zones:
Storage service
Description
Use cases
Rapid Cache feature
of Cloud Storage
A fully managed, SSD-backed zonal read cache that brings frequently
read data from a bucket into the AI zone.
Create a Rapid Cache instance in an AI zone for the regional
source bucket that contains the training datasets or models that you
want to serve. When your training job reads a file, the file is
pulled into the fast, in-zone cache. Subsequent reads are served
directly from the cache, bypassing the regional network. This is ideal
for the repetitive data access patterns in model training and for
low-latency model serving.
Recommended for:
Read-heavy workloads
Low-latency model training and serving
Not recommended for:
Applications that require full POSIX compliance
Best practices
Follow these best practices for storage when using AI zones:
Provision your performance layer in the same AI zone as your compute
resources. Colocating compute and storage helps to ensure that GPUs and TPUs
remain fully saturated, maximizing "goodput" (useful throughput).
For Rapid Cache, before you start the primary training epoch, perform a
pre-read of your dataset to populate, or warm, the SSD-backed cache.
Available AI zones
The following table shows the AI zones and their parent Google Cloud
regions.
Geographic area
Parent region
AI zone
United States
us-central1
us-central1-ai1a
United States
us-south1
us-south1-ai1b
Considerations
You can access Google Cloud products in a Google Cloud region from
the region's AI zone. However, accessing services in a Google Cloud
region from an AI zone can add network latency, because the location of the AI
zone might be physically separate from the locations of the region's standard
zones.
We recommend that you run non-ML workloads in standard zones, not AI
zones, because AI zones don't offer all Google Cloud services locally.
What's next
Create a bucket .
Learn more about Rapid Cache .
Read about Cloud Storage bucket locations .
Read the Architecture Center design guidance for AI and ML workloads .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
