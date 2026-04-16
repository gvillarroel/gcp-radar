---
title: "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/configure-shared-vpc
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/configure-shared-vpc
  title: "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\
    \ Documentation"
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
Composer 3 Guides
Send feedback
Configure Shared VPC networking
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes the Shared VPC network and host project requirements for
Cloud Composer.
Shared VPC enables organizations to establish
budgeting and access control boundaries at the project level while
allowing for secure and efficient communication using
private IPs across those boundaries.
In the Shared VPC configuration, Cloud Composer can invoke services hosted
in other Google Cloud projects in the same organization without exposing
services to the public internet.
Guidelines for Shared VPC
Figure 1. Service and host projects for
Cloud Composer 3 (click to enlarge)
Shared VPC requires that you designate a host project to which networks
and subnetworks belong and a service project , which is attached to the
host project.
When Cloud Composer participates in a Shared VPC,
the Cloud Composer environment is in the service project.
Make sure that Cloud Composer environment's internal IP range
and your VPC network ranges
do not have conflicts .
Cloud Composer 3 has
a limitation of one transitive DNS hop , make
sure that your DNS configuration allows for that.
Cloud Composer 3 doesn't support a user-defined
.internal DNS zone . If you create a DNS zone for
.internal , it won't be possible to reach that zone.
Preparation
Find the following project IDs and project numbers :
Host project: The project that contains the Shared VPC network.
Service project: The project that contains
the Cloud Composer environment.
Prepare your organization .
Configure the service project
If Cloud Composer environments were never created in the service
project, then provision the Composer Service Agent Account
in the service project :
gcloud beta services identity create --service = composer.googleapis.com
Configure the host project
Configure the host project as described further.
Caution: Do all of the described actions in the host project . For example,
if you add roles to a service account from the service
project, assign them in the host project's IAM configuration.
Configure networking resources
Choose one of the following options:
Option 1.
Create a new VPC network and a subnet .
Option 2.
Create a subnet in an existing VPC network .
Option 3. Use an existing VPC network and a subnet.
Set up Shared VPC and attach the service project
If not already done, Set up Shared VPC . If
you already have set up Shared VPC, skip to the next step.
Attach the service project , which you
use to host Cloud Composer environments.
When attaching a project, leave the default VPC Network permissions
in place.
Grant permissions to the Composer Service Agent account
Warning: On this and next steps, when editing permissions, keep the
existing account roles. Add another role to an account instead of replacing an
existing role.
In the host project:
Edit permissions for the Composer Service Agent account,
service- SERVICE_PROJECT_NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com )
Add another role, Composer Shared VPC Agent ( composer.sharedVpcAgent ).
at the project level.
Conclusion
You've completed the Shared VPC network configuration for both service and host
projects.
Now you can connect new and existing environments in the service project to the
host project's VPC network. You can use one of the following approaches:
Connect an environment to a Shared VPC network. Cloud Composer
creates a new network attachment for the environment.
Create a network attachment in the service project, connect it to a Shared
VPC network, and connect one or more environments to this network
attachment.
For instructions and more information about differences between the two
described approaches, see
Connect a VPC network to your environment .
What's next
Connect a VPC network to your environment .
Create a Cloud Composer environment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
