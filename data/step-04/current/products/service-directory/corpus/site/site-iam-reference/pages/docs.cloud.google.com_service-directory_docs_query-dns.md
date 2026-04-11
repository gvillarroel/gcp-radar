---
title: "Query using DNS \_|\_ Service Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/query-dns
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/query-dns
  title: "Query using DNS \_|\_ Service Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Guides
Send feedback
Query using DNS
Stay organized with collections
Save and categorize content based on your preferences.
Service Directory supports DNS queries for the following record types:
A / AAAA / SRV records for a service or an endpoint
SOA / NS records for the private zone origin
For a detailed explanation of these record types, see List of DNS record
types .
A / AAAA queries must observe the following format:
SERVICE_NAME . ZONE_DOMAIN_NAME
Optionally:
ENDPOINT_NAME . SERVICE_NAME . ZONE_DOMAIN_NAME
SRV queries must observe the following format:
_ SERVICE_NAME ._tcp. SERVICE_NAME . ZONE_DOMAIN_NAME
Note: SERVICE_NAME appears twice in the query name and the
first label is preceded by a literal underscore character.
Optionally:
_ SERVICE_NAME ._tcp. ENDPOINT_NAME . SERVICE_NAME . ZONE_DOMAIN_NAME
All services and endpoints in Service Directory default to
having their service name as the symbolic service and a protocol of tcp .
What's next
To get an overview of Service Directory, see the
Service Directory overview .
To find solutions for common issues that you might encounter when using
Service Directory, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
