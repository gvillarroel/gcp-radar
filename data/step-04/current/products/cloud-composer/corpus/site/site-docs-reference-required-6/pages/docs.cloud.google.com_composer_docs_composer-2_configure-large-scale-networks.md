---
title: "Configure large-scale networks for Cloud Composer environments \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-2/configure-large-scale-networks
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-2/configure-large-scale-networks
  title: "Configure large-scale networks for Cloud Composer environments \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 2 Guides
Send feedback
Configure large-scale networks for Cloud Composer environments
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This section explains how to organize large-scale networks for
Cloud Composer environments.
Use Private Service Connect instead of VPC peering networking
Important: This guide applies only to environments that use VPC peerings. PSC
is the default connectivity type for environments in Cloud Composer 2 (when
you create an environment in Google Cloud console), and it
does not use VPC peering quotas (your environment's cluster still
uses VPC quotas ).
For more information, see
Configure Private Service Connect .
Quotas for VPC, subnet and forwarding rules
Cloud Composer and GKE services use VPC peerings to
establish connections between the
components of Cloud Composer environments
(Customer Project and Tenant Project) and between a GKE
cluster and a GKE Control Plane.
If your project has a large-scale network configuration, such as one with
hundreds of networks and many VPC peerings configured, then when you try to
create new Cloud Composer environments, the operations might fail
because of VPC, subnet or forwarding rules quota errors.
The errors that you might encounter are:
The maximum number of VPC peerings per single VPC network is reached.
The default quota for a number of VPC peerings within a single VPC is 25
(unless you request an increase of this quota).
The maximum number of primary and secondary subnet IP ranges is reached.
The quota for this parameter is 400.
The maximum number of forwarding rules in the peering group for Internal TCP/
UDP Load Balancing is reached.
The quota for this parameter is 175.
For more information about default quotas for VPCs in Google Cloud, see
Quotas and limits .
About large-scale networks for Cloud Composer environments
To overcome challenges related to these limits, you can organize your
Cloud Composer environments into several VPC networks connected to
your main/backbone VPC as it is described in the following sections.
This solution is applicable to Shared VPC and non-Shared VPC scenarios.
Large-scale network setup in a non-Shared VPC scenario
To create a large-scale network setup for Cloud Composer:
Create a backbone VPC network .
This network acts as a hub for individual VPC networks that host
Cloud Composer environments.
Create dedicated VPC networks for
Cloud Composer environments. You can combine several
Cloud Composer environments into one VPC network. For example,
you can name these networks composer-vpc-1 , composer-vpc-2 , and so on.
Establish connectivity between Cloud Composer environment VPC
networks and the backbone VPC by
creating HA VPN tunnels .
Note: The recommended way of configuring VPC network is to use custom mode
when creating subnets.
Large-scale network setup in a Shared VPC scenario
To solve the network peering limits issue in a Shared VPC networks, organize
your Cloud Composer environments into several projects and VPC
networks connected to one backbone VPC.
To create a large-scale Shared VPC network setup for Cloud Composer:
In the host project,
create a backbone VPC network .
This network connects individual VPC networks for service projects running
Cloud Composer environments.
In the host project,
create VPC networks
for Cloud Composer environments. For example, you can name these
networks composer-shared-vpc-1 , composer-shared-vpc-2 , and so on.
Establish connectivity between these VPC networks and the backbone VPC
network by manually
creating HA VPN tunnels .
Configure Cloud Composer environments
in the Shared VPC setup .
Note: The recommended way of configuring VPC network is to use custom mode
when creating subnets.
What's next
Configure Shared VPC
Create an environment
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
