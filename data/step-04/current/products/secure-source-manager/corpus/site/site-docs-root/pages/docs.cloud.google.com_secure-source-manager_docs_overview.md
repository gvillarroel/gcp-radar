---
title: "Secure Source Manager overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/overview
  title: "Secure Source Manager overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Secure Source Manager
Guides
Send feedback
Secure Source Manager overview
Stay organized with collections
Save and categorize content based on your preferences.
Secure Source Manager is a regionally deployed, single-tenant managed source
code repository hosted on Google Cloud.
Instances and repositories
Secure Source Manager instances are deployed to an available Google Cloud
region and are accessible through their instance URIs. Repositories are created
in the Secure Source Manager instance by using the web interface, or the
Secure Source Manager API.
Separate roles and permissions are available for instances and repositories.
See Access control with IAM for information on all
Secure Source Manager roles and permissions.
Git actions
Repositories support all
Git SCM
client commands and have built-in pull requests and issue tracking. Both HTTPS
and SSH authentication are supported.
For more information on SSH authentication, see
SSH authentication .
To get started using Git source code with Secure Source Manager, see
Use Git SCM .
Issues and pull requests
You can create issues and pull requests in the Secure Source Manager web
interface. You can add reviewers, labels, milestones, assignees, and due dates to
your pull requests. You can open an issue on a specific branch or tag, and add
labels, milestones, and assignees to the issue. For more information on issues
and pull requests, see
Work with issues and pull requests .
Notifications
Secure Source Manager can send you notifications for events in pull requests
and issues in which you're participating or for repositories you're watching.
For more information on notifications, read the
Notifications overview or get started with notifications
by following the instructions in Set up notifications .
Developer Connect integration
You can connect Secure Source Manager to
Developer Connect to unify
repository connections across Google Cloud services. Connecting to
Developer Connect lets you use its Git proxy feature for secure
access to your Secure Source Manager repositories. This enables features like
Private Google Access for
Secure Source Manager repositories, letting you fetch code from
Secure Source Manager without exposing your instance to the public internet.
The Developer Connect Git proxy only supports read operations such as
git clone . git push operations are not supported with Git proxy.
For information on connecting Secure Source Manager to
Developer Connect, see
Configure Developer Connect for Secure Source Manager .
For more information on using Git proxy, see
Configure and use Developer Connect proxy .
Connect to other services
You can invoke builds automatically using the following methods:
Create a Secure Source Manager triggers file to connect to
Cloud Build.
Use Secure Source Manager webhooks to connect to
Jenkins or other services.
For information on connecting to Cloud Build, see
Connect to Cloud Build .
For information on connecting to Jenkins, see
Connect to Jenkins .
Protect branches
When enabled, protected branches block commits based on configurable rules. You
can configure multiple branch protection rules for different sets of branches.
The following branch protection options are configurable:
Specify a single branch to apply the branch protection rule to, or
apply the branch protection rule to all branches.
Require pull requests before merging into protected branches.
Set the required number of reviewers and approvers before a pull request can
be merged into a protected branch.
Block merging a pull request if new commits are added after approvals are
granted.
Require comments to be resolved before merging into a protected branch.
Require a linear Git history.
Require successful build status checks before merging a pull request into a
protected branch.
For more information on protecting branches in Secure Source Manager, see
Branch protection overview .
Encrypt data
By default, Google Cloud automatically encrypts data when it is at
rest
using encryption keys managed by Google. If you have specific compliance or
regulatory requirements related to the keys that protect your data, you can use
customer-managed encryption keys (CMEK) for creating a Secure Source Manager
instance.
When you enable CMEK, data at rest in the instance is encrypted using a key that
you manage within Cloud Key Management Service. You can control access to the CMEK key
using Identity and Access Management. If you temporarily disable or permanently destroy the CMEK
key, data encrypted with that key cannot be accessed. For more information on
creating Secure Source Manager instances using CMEK, see
Customer-managed encryption keys .
Security compliance
Secure Source Manager is in compliance with the following certifications:
FedRAMP High compliant
HIPAA compliant
Configure a private Secure Source Manager instance in a VPC Service Controls perimeter
You can use Secure Source Manager in a VPC Service Controls
perimeter in order to guard against data exfiltration. For more information, see
Configure Secure Source Manager in a VPC Service Controls perimeter .
What's next
Enable the Secure Source Manager API .
Create a Secure Source Manager instance .
Create and clone a Secure Source Manager repository .
Read about Software supply chain security .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
