---
title: "Scale Redis instances \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/scale-instances
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/scale-instances
  title: "Scale Redis instances \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
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
Scale Redis instances
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are looking for the Memorystore for Redis Cluster documentation,
see Scale instance capacity .
This page describes how to scale Memorystore for Redis instances. For more
information about an instance's behavior during scaling, see Instance scaling behavior .
Best practices for scaling an instance
We recommend exporting
your instance data before scaling your operation.
For Standard Tier instances, to increase the speed and reliability of
your scaling operation, scale your instance during periods of low instance
traffic. To learn how to monitor instance traffic, see Monitoring Redis instances .
When reducing a Standard Tier instance's capacity, you must choose a size
greater than the amount of data being stored or scaling fails.
For example, if you have a 10 GB instance that has 5.5 GB of data stored
in it, you can resize the instance to a minimum of 6 GB. The amount of storage
your instance uses is visible on its details page in the
Google Cloud console.
Instance scaling instructions
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the Instance ID of the instance you want to resize.
Click Edit .
Under Capacity , enter a new size in the field to update the
instance's capacity.
Click Save .
Gcloud
Enter the following command, replacing variables with appropriate
values:
gcloud redis instances update instance-id --region= region-id --size= size
Where:
instance-id is your instance ID.
region-id is the region ID.
size is the desired instance size in gibibytes (GiB).
For example:
gcloud redis instances update myinstance --region=us-central1 --size=100
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
