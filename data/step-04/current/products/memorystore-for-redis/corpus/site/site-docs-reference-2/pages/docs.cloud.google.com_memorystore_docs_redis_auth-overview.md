---
title: "About Redis AUTH \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/auth-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/release-notes
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/auth-overview
  title: "About Redis AUTH \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Guides
Send feedback
About Redis AUTH
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are looking for the Memorystore for Redis Cluster documentation,
see About IAM authentication .
This page gives an overview of AUTH
on Memorystore for Redis.
For instructions on managing AUTH for your Redis instance, see Managing Redis AUTH .
AUTH behavior
Using AUTH is optional for Memorystore for Redis.
A connecting client starts by sending the AUTH
command followed by the Redis instance's AUTH string. Every AUTH string is a Universally Unique Identifier (UUID) .
Each Redis instance with AUTH enabled has a unique AUTH string.
If you enable the AUTH feature on your Memorystore instance,
incoming client connections must authenticate in order to connect. Existing
connections that had not previously authenticated need to properly authenticate
before they can continue issuing commands. Once a client authenticates with an
AUTH string, it remains authenticated for the lifetime of that connection, even
if you change the AUTH string.
For Memorystore for Redis, the AUTH string is automatically generated after AUTH is
enabled on the instance. The AUTH string is a randomly generated string of 36
characters that is exclusive to each Memorystore instance. The
AUTH string is uniquely generated each time that AUTH is enabled. Therefore, the
AUTH string can be changed if necessary by toggling AUTH from off to on.
Like every command, if in-transit encryption
is not enabled, there is no guarantee that the command is encrypted in-transit
end to end. This is because there is no guarantee that the client traffic is
meeting the VPC network level based encryption on Google Cloud encryption standards .
Security and privacy
AUTH helps you ensure that known entities in your organization do not
unintentionally access and modify your Redis instance. AUTH does not provide
security during data transportation. Also, AUTH does not protect your instance
against any malicious entities that have access to your VPC network.
Make sure to limit access to your VPC network to known users and clients. See
Redis security
for additional details.
Using AUTH with read replica enabled instances
If AUTH is enabled on an instance that also has read replicas
enabled, any connection to the Redis instance requires initial authentication
using the AUTH string.
What's next
Perform common tasks associated with Redis AUTH
See the permissions
required to perform Redis AUTH tasks.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
