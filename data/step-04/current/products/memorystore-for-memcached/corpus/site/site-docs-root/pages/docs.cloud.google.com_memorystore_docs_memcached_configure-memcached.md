---
title: "Configure a Memcached instance \_|\_ Memorystore for Memcached \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/memcached
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached
  title: "Configure a Memcached instance \_|\_ Memorystore for Memcached \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Memorystore for Memcached is being deprecated and will be shut down on January 31, 2029. After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects. We recommend that you migrate your workloads to Memorystore for Valkey , which offers superior performance and features.
Learn more about the deprecation | Read the migration guide
Home
Documentation
Databases
Memorystore
Memorystore for Memcached
Guides
Send feedback
Configure a Memcached instance
Stay organized with collections
Save and categorize content based on your preferences.
Memorystore for Memcached supports a subset of native Memcached configuration parameters
that you can modify. You should use the same configurations for all nodes in
your cluster. This page describes how to:
View instance configurations.
Modify instance configurations by:
Staging instance configuration changes.
Updating node configuration changes.
Memorystore for Memcached requires you to update the configurations first, and then
apply the changes to the nodes in your cluster. Applying a parameter update to
a node causes a full cache flush on that node.
The advantage to being able to apply parameter updates to individual nodes is
that you can roll out changes on a node-by-node basis. Doing so keeps your
instance online and functional while you update configurations.
For a full list of the modifiable and unmodifiable parameters, see Memcached configuration parameters .
Viewing configurations
Console
Go to the Memorystore for Memcached page in the Google Cloud console.
Memorystore for Memcached
Click the ID of the instance to view the Instance details page.
View your settings in the Configuration section.
Gcloud
To view configuration parameters using the Google Cloud CLI, enter
the describe command for the instance replacing variables
with appropriate values:
gcloud memcache instances describe instance-id --region= region
Note: You won't see configuration parameters when running describe
unless you have changed a configuration from its default value.
For a list of modifiable configuration parameters and their default values,
see Memcached configuration parameters.
Modifying configuration parameters
Console
Go to the Memorystore for Memcached page in the Google Cloud console.
Memorystore for Memcached
Click the ID of the instance.
Click Edit Configuration .
Adjust the value of any parameter that you want to change.
Click the Continue button to stage the configuration updates.
Select a node, and click Update Selected Nodes one at a time for
each node, or in batches of nodes.
Note: Updating node configurations one at a time, or in batches, helps
you avoid instance unavailability and reduces data loss.
Gcloud
Update the configuration parameters by running the following command:
gcloud memcache instances update instance-id --region= region --parameters= parameter = value , parameter = value
List and take note of all node IDs for your instance by running the
following command:
gcloud memcache instances describe instance-id --region= region --format="value(memcacheNodes.nodeId.list())"
Apply the parameters one by one, or in batches, to nodes in your cluster
by running the following command:
Note: Updating node configurations one at a time, or in batches, helps
you avoid instance unavailability and reduces data loss.
gcloud memcache instances apply-parameters instance-id --region= region --node-ids= node-1-id , node-2-id
Alternatively, you can apply the parameters for all nodes at once by
using the following command, but we don't recommend it:
gcloud memcache instances apply-parameters instance-id --region= region --apply-all
You cannot simultaneously run the --parameters flag with any other flags
when using the Memorystore for Memcached update command.
Configuring parameters using gcloud during instance creation
To set configuration parameters during creation, enter the following command
replacing variables with appropriate values:
gcloud memcache instances create instance-name --size= size --region= region --parameters= parameter = value , parameter = value
You can simultaneously run the --parameters flag with all other flags when
using the Memorystore for Memcached create command.
Clearing configuration parameters to default values using the Google Cloud console
Go to the Memorystore for Memcached page in the Google Cloud console.
Memorystore for Memcached
Click the ID of the instance.
Click Edit Configuration .
Delete the value of any parameter that you want to reset to default, and
leave the field blank.
Click the Continue button to stage the configuration updates.
Select a node, and click Update Selected Nodes one at a time for each
node, or in batches of nodes.
Note: Updating node configurations one at a time, or in batches, helps you
avoid instance unavailability and reduces data loss.
What's next
Review the available Memcached configurations .
Learn how to scale your Memcached instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
