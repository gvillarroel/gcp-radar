---
title: "Rate-limiting \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting
  title: "Rate-limiting \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Rate-limiting
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
To maintain performance and availability across a diverse base of client
apps, it's critical to maintain app traffic within the limits of the capacity
of your APIs and backend services. It's also important to ensure that apps
don't consume more resources than permitted.
Apigee provides the following policies that enable you to optimize traffic management
to minimize latency for apps while maintaining the health of backend services.
Each policy type addresses a distinct aspect of traffic management. In some
cases, you might use both policy types in a single API proxy.
General-purpose policies
SpikeArrest policy
Quota policy
Specialized rate-limiting policies
LLMTokenQuota policy
PromptTokenLimit policy
SpikeArrest policy
The SpikeArrest policy protects against traffic surges. This policy limits
the number of requests processed by an API proxy and sent to a backend,
protecting against performance lags and downtime.
This policy should be used to prevent sudden traffic bursts caused by
malicious attackers attempting to disrupt a service using a denial-of-service
(DOS) attack or by buggy client applications.
See
SpikeArrest policy .
Quota policy
This policy enforces consumption limits on client apps by maintaining a
distributed 'counter' that tallies incoming requests. The counter can tally
API calls for any identifiable entity, including apps, developers, API keys,
access tokens, and so on. Usually, API keys are used to identify client apps.
This policy is computationally expensive so, for high-traffic APIs, it should
configured for longer time intervals, such as a day or month. This policy
should be used to enforce business contracts or SLAs with developers and
partners, rather than for operational traffic management.
See
Quota policy .
Specialized rate-limiting policies
In addition to the general-purpose Quota and SpikeArrest policies,
Apigee also provides the LLMTokenQuota policy and the
PromptTokenLimit policy for APIs that interact with Large Language Models
(LLMs). These policies allow you to enforce quotas and rate limits on the
number of tokens used, which can be a more granular way to control costs and
usage than simple request counting.
See:
LLMTokenQuota policy
PromptTokenLimit policy
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
