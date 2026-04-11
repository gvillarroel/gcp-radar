---
title: "Configure a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/configure-redis
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/configure-redis
  title: "Configure a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\
    \ Documentation"
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
Configure a Redis instance
Stay organized with collections
Save and categorize content based on your preferences.
Memorystore for Redis supports a subset of the native Redis configuration
parameters that you can modify to customize the
behavior of your Redis instance. Other Redis configuration parameters are set
to default values and cannot be modified.
Configuration changes take place immediately, don't require a restart of the
instance, and are saved if the instance restarts. You can update modifiable
configuration parameters after instance creation.
For tables showing acceptable values for modifiable parameters
and default values for unmodifiable parameters, see the Redis configurations
reference page.
Viewing and updating configurations in the Google Cloud console
Note: You can only modify the maxmemory-gb configuration using the
gcloud CLI. The configuration is not available in the
Google Cloud console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the Instance ID of the instance.
Click Edit .
The Configurations section is now visible. Click the trash bin to the
right of a configuration to delete it, or click Add Configuration to add
a new configuration.
Setting and updating configuration parameters with the Google Cloud CLI
Note: Make sure that you have installed the latest version of the Google Cloud CLI
by running gcloud components update .
You can set modifiable configuration parameters when creating or updating an
instance. To set a configuration parameter during creation, enter the following
command, replacing the highlighted-variables with the appropriate
values:
gcloud redis instances create instance-id --size= size --region= region-id --zone= zone --redis-config maxmemory-policy= policy
To change a configuration parameter for an existing instance, enter the
following command:
gcloud redis instances update instance-id --update-redis-config maxmemory-policy= policy
Viewing current configuration parameters with the Google Cloud CLI
To view configuration parameters that you set when creating or updating an instance,
enter the describe command for the instance:
gcloud redis instances describe instance-id --region= region-id
You won't see configuration parameters when running describe unless you have changed a configuration from its default value.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
