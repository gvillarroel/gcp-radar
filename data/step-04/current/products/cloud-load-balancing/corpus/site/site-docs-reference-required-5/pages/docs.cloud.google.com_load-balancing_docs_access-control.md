---
title: "Roles and permissions \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/access-control
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/features
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/access-control
  title: "Roles and permissions \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
When you use Cloud Load Balancing, you make API requests. Each API request requires
that the Identity and Access Management (IAM) principal who
makes the request has appropriate permission to create, modify, or delete the
associated resources.
In IAM, permission to access a Google Cloud resource
isn't granted directly to the end user. Instead, permissions are grouped
into roles, and roles are granted to authenticated principals. Principals can be
of the following types: a user, group, service account, or Google domain.
An IAM policy defines and enforces what roles are
granted to which principals, and this policy is then attached to a resource.
This page provides an overview of relevant IAM roles and
permissions for Cloud Load Balancing. For a detailed description of
IAM, see the IAM documentation .
Roles and permissions
To follow the examples in the load balancing how-to guides , principals
need to create instances, firewall rules, and VPC networks. You
can provide the necessary permissions in one of the following ways:
Grant the predefined roles that are related to load
balancing.
To view the specific permissions included in the predefined roles, see the
following sections:
Compute Load Balancer Admin role
( roles/compute.loadBalancerAdmin )
Compute Network Admin role
( roles/compute.networkAdmin )
Compute Security Admin role
( roles/compute.securityAdmin )
Compute Instance Admin role
( roles/compute.instanceAdmin )
Create and grant custom roles that at least contain the
permissions included in the predefined roles.
Use basic roles , making the principals project owners
or editors. Whenever possible, avoid using the basic roles; they grant a
large number of permissions, which violates the principle of least privilege.
Role change latency
Cloud Load Balancing caches IAM permissions for five minutes,
so it takes up to five minutes for a role change to become effective.
Managing Access Control for Cloud Load Balancing using IAM
You can get and set IAM policies using the Google Cloud console, the
IAM API, or the Google Cloud CLI. See Granting,
changing, and revoking access for details.
What's next
Learn more about IAM .
Grant IAM roles .
Learn about IAM Conditions for forwarding
rules .
Learn about organization policy constraints for Cloud Load
Balancing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
