---
title: "Single-zone instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/single-zone-instances
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/single-zone-instances
  title: "Single-zone instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
Single-zone instances
Stay organized with collections
Save and categorize content based on your preferences.
This page gives an overview of single-zone instances for Memorystore for Valkey.
For instructions on provisioning a single-zone instance see Create a single-zone instance .
By default, Memorystore for Valkey distributes an instance's nodes evenly among
available zones. For diagrams that show how nodes are distributed with this
setup, see High availability and replicas .
Alternatively, you can choose to create a single-zone instance. Single-zone
instances have lower latency than multi-zone instances because you can place
your clients in the same zone as the Valkey nodes and avoid cross-zone
communication.
You choose the zone distribution mode (single-zone or multi-zone) during
instance creation. After it's created, the zone distribution mode can't be
changed.
If you connect to a single-zone instance from a client in the same zone, then
you aren't charged for Consumer Data Processing .
For more information, see Network pricing .
Although we recommend provisioning a multi-zone instance with High Availability , you should use the following recommendations for single-zone instances if they apply to you:
If you choose to provision a single-zone instance, you should enable
replicas. Replicas reduce shard hotspots and make shards more
resilient against single-node failures.
If you choose to provision an instance without replicas, you should still
use a single-zone instance. For more information, see When to use a single-zone instance .
Single-zone instance diagram example
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
