---
title: "Overview \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/batch-update-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/batch-update-overview
  title: "Overview \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Guides
Send feedback
Overview
Stay organized with collections
Save and categorize content based on your preferences.
You can use a single request from the Google Cloud CLI or
the Compute Engine API
to batch update all the firewall policy rules for hierarchical and
network firewall policies. This ensures the integrity of the firewall
policy's rule set. Using the batch updates, Cloud Next Generation Firewall
provides an efficient and manageable way for you to handle firewall policy
rule updates in your cloud environments.
For more information about how to configure batch update, see
Configure batch updates to firewall policy rules .
Permissions
Make sure that you have the following permissions to batch update the
firewall policy rules.
The compute.firewallPolicies.get permission to export the hierarchical
firewall policy rules.
The compute.firewallPolicies.update permission to import the hierarchical
firewall policy rules.
The compute.firewallPolicies.get permission to export the network
firewall policy rules.
The compute.regionFirewallPolicies.get permission to export regional
network firewall policy rules.
The compute.firewallPolicies.update permission to import the network
firewall policy rules.
The compute.regionFirewallPolicies.update permission to import the
regional network firewall policy rules.
For more information about the roles and permissions, see
Compute Engine roles .
Specification
Batch update of firewall policy rules has the following specifications:
The update process is atomic. This means that if an error occurs
while the rules are being imported, all changes are rolled back, and
your firewall policy rule remains in its previous state.
When you use the REST APIs to update firewall policy rules, the REST APIs
require a fingerprint for optimistic locking. For more information, see
Optimistic concurrency control .
To get the latest fingerprint, we recommend that you first make a get
request to the firewall policy. A get request to the firewall policy gets
the most recent version of the policy, which helps ensure that updates are
based on the most recent version of the policy. This helps prevent conflicts
if concurrent modifications are made to the policy.
When you use the REST API patch method, you can replace all existing
rules by providing a completely new list in your request.
If a firewall policy patch operation is in progress, you can't
modify rules using methods such as
addRule ,
patchRule ,
removeRule , or
cloneRules .
This helps ensure that there are no conflicting modifications during
the patch operation.
Configure batch update
The batch update process involves three key steps:
Export : export your current firewall policy rules.
Modify : make the required batch updates to the exported firewall policy
rules.
Import : import the modified file back into the firewall policy rules.
To configure the batch update to firewall policy rules, do the following:
Export your firewall policy rules. For more information, see
Export firewall policy rule .
Modify the exported file. You can perform the following steps to update
the file:
Add new rules : make sure that each new rule adheres to the
FirewallPolicyRule.yaml schema.
Modify existing rules : change the attributes of the rules that you
want to update. These attributes include the action, description,
and match conditions against which incoming traffic is evaluated.
Delete rules : remove the entries for the firewall policy rules you want
to delete.
For more information, see
Modify firewall policy rules .
Import the rules back into your firewall policy. For more information, see
Import firewall policy rules .
What's next
For an introduction to firewall rules, see
Firewall policy rule components .
To learn how to configure batch updates to firewall policy rules, see
Configure batch updates for firewall policies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
