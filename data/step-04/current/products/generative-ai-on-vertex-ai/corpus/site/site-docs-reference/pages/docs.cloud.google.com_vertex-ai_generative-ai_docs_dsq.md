---
title: "Standard PayGo \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/dsq
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/dsq
  title: "Standard PayGo \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
Guides
Send feedback
Standard PayGo
Stay organized with collections
Save and categorize content based on your preferences.
Standard pay-as-you-go (Standard PayGo) is a consumption option
for utilizing Vertex AI's suite of generative AI models, including the
Gemini and Imagen on Vertex AI model families.
Standard PayGo lets you pay only for the resources that you
consume, without requiring upfront financial commitments. To provide more
predictable performance for scalable workloads, Standard PayGo
incorporates a usage tier system. Vertex AI dynamically adjusts
your organization's baseline throughput capacity, based on its total spend on
eligible Vertex AI services over a rolling 30-day period. As your
organization's spend grows, it's automatically promoted to higher tiers that
provide increased access to shared resources and higher performance thresholds.
Usage tiers and throughput
Each Standard PayGo usage tier aims to provide a Baseline Throughput, measured in tokens per
minute (TPM), which serves as a predictable performance floor for your
organization's traffic. The throughput limits are based on requests sent to the
global endpoint. Using the global endpoint is a best practice, as it provides
access to a larger, multi-region pool of throughput capacity and allows routing
of your requests to the location with the most availability to maximize
performance.
Your traffic isn't strictly capped at the Baseline Throughput limit.
Vertex AI lets traffic burst beyond this limit on a best-effort
basis. However, during periods of high demand across the
Vertex AI platform, this excess burst traffic might have higher
variability in performance. To optimize performance and minimize the likelihood
of receiving these errors, it's also a best practice to smoothen your traffic as
evenly as possible throughout each minute. Avoid sending requests in sharp,
second-level spikes. High and instantaneous traffic can lead to throttling even
if your average per-minute usage is below your limit. Distributing your API
calls more evenly helps the system manage your load predictably and improves
overall performance.
The following tiers are available in Standard PayGo:
Model Family
Tier
Customer Spend (30 Days)
Traffic TPM (Org-Level)
Gemini Pro models
Tier 1
$10 - $250
500,000
Tier 2
$250 - $2000
1,000,000
Tier 3
> $2000
2,000,000
Gemini Flash and Flash-Lite models
Tier 1
$10 - $250
2,000,000
Tier 2
$250 - $2000
4,000,000
Tier 3
> $2000
10,000,000
Note that the throughput limit shown for a model family applies independently to
each model within that family. For example, a customer in Tier 3 has a baseline
throughput of 10,000,000 TPM for Gemini 2.5 Flash and a separate
baseline of 10,000,000 TPM for Gemini 2.0 Flash. Usage against one of
these limits doesn't impact the throughput for other models. There's no
separate requests-per-minute (RPM) limit for each tier. However, the
system limit of 30,000 RPM per model per region
applies. Gemini requests with multimodal inputs are subject to
the corresponding system rate limits, including
image ,
audio ,
video , and
document .
If you require higher throughput for an enterprise use case, contact your
account team for more information regarding a custom tier.
Note: For mission-critical workloads that require a strict Service Level
Agreement (SLA) and can't tolerate performance variation or throttling, we
recommend using
Provisioned Throughput .
Provisioned Throughput provides dedicated and assured capacity with
improved performance and reliability.
How usage tiers work
Your usage tier is automatically determined by your organization's total spend
on eligible Vertex AI services over a rolling 30-day period. As
your organization's spending increases, the system promotes you to a higher tier
with greater throughput.
Spend calculation
This calculation includes a wide range of services, from predictions on all
Gemini model families to Vertex AI CPU, GPU, and
TPU instances, and also commitment-based SKUs, such as
Provisioned Throughput.
Click to learn more about the SKUs included in spend calculation.
The following table lists the categories of Google Cloud SKUs that are included in the calculation of the total spend.
Category
Description of included SKUs
Gemini Models
All Gemini model families (e.g., 2.0, 2.5, 3.0 in Pro, Flash, and Lite
versions) for predictions across all modalities (Text, Image, Audio, Video),
including batch, long-context, tuned, and "thinking" variations
Gemini Model Features
All related Gemini SKUs for features like Caching, Caching Storage, and
Priority Tiers, across all modalities and model versions
Vertex AI CPU
Online and Batch Predictions on all CPU-based instance families (e.g., C2,
C3, E2, N1, N2, and their variants)
Vertex AI GPU
Online and Batch Predictions on all NVIDIA GPU-accelerated instances
(e.g., A100, H100, H200, B200, L4, T4, V100, and RTX series)
Vertex AI TPU
Online and Batch Predictions on all TPU-based instances (e.g., TPU-v5e,
v6e)
Management & Fees
All "Management fee" SKUs associated with various Vertex AI prediction
instances
Provisioned Throughput
All commitment-based SKUs for Provisioned Throughput
Other Services
Specialized services such as "LLM Grounding for Gemini... with Google
Search tool"
Verify usage tier
To verify the usage tier for your organization, go to the
Vertex AI Dashboard on the Google Cloud console.
Go to Vertex AI Dashboard
Verify spend
To review your Vertex AI spend, go to Cloud Billing on the
Google Cloud console. Note that spend is aggregated at the organization level.
Go to Cloud Billing
Resource Exhausted (429) errors
If you receive a 429 error, it doesn't indicate that you've hit a fixed quota.
It indicates temporary high contention for a specific shared resource. We
recommend implementing an exponential backoff retry strategy to handle these
errors, as availability in this dynamic environment can change quickly. In
addition to a retry strategy, we recommend using the global endpoint. Unlike a
regional endpoint (for example, us-central1), the global endpoint dynamically
routes your requests to the region with the most available capacity at that
moment. This allows your application to access a larger, multi-region pool of
shared capacity, significantly increasing your potential for successful bursting
and reducing the likelihood of 429 errors.
For best results, combine the use of the global endpoint with traffic smoothing.
Avoid sending requests in sharp, second-level spikes, because high and
instantaneous traffic can lead to throttling, even if your average per-minute
usage is within your Baseline Throughput limit. Distributing your API calls more
evenly helps the system manage your load predictably and improves overall
performance. For additional information about how to handle Resource Exhaustion
errors, see
Build Resilient LLM Applications on Vertex AI and Reduce 429 Errors
and Error code 429 .
Supported models
The following generally available (GA) Gemini models and their
supervised fine-tuned models
support Standard PayGo with Usage Tiers :
Gemini 2.5 Pro
Gemini 2.5 Flash
Gemini 2.5 Flash-Lite
The following GA
Gemini models and their
supervised fine-tuned models
also support Standard PayGo, but the usage tiers don't apply to
these models:
Gemini 2.5 Flash Image
Imagen 4
Imagen 4 Fast
Imagen 4 Ultra
Virtual Try-On
Note that these tiers don't apply to preview models. Refer to the specific
official documentation of each model for the most accurate and up-to-date
information.
Monitor throughput and performance
To monitor your organization's real-time token consumption, go to the
Metrics Explorer in Cloud Monitoring.
Go to Metrics Explorer
For more information about monitoring model endpoint traffic, see
Monitor models .
Note that usage tiers apply at an organization level. For information about
setting your observability scope to chart throughput across multiple projects in
your organization, see
Configure observability scopes for multi-project queries .
What's next
Resource
Vertex AI quotas and limits
Quotas and limits related to the Vertex AI platform, excluding product-specific limitations.
Overview
Google Cloud quotas
Learn about how Google Cloud restricts how much of a resource your Google Cloud project can use, and how quotas apply to a range of resource types, including hardware, software, and network components.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
