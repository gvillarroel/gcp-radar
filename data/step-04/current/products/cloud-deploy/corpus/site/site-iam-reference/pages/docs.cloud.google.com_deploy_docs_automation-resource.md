---
title: "About the automation resource \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/automation-resource
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/automation-resource
  title: "About the automation resource \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Guides
Send feedback
About the automation resource
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the Cloud Deploy resources used to execute
automations .
You can configure Cloud Deploy to automatically perform certain delivery
pipeline tasks, such as promote a release or advance a rollout to a given phase.
These automations rely on two Cloud Deploy resources:
The Automation itself
The AutomationRun
These resources are described in this document.
The Automation resource
An Automation is a Cloud Deploy resource that defines how to automate
one or more delivery pipeline tasks. The Automation associates one or more
target resources with one or more automation rules .
The Automation resource includes the following:
A reference to the target (or targets) against which to perform the automation
(the selector ).
An automation rule that determines how to do the automation.
Metadata, such as description , annotations , and labels .
A suspended property.
The service account to use to perform the automation. The service account is
required, and it must have the
necessary permissions
to perform the automation. Automation doesn't assume a default service
account.
The Automation resource is a child resource of the
delivery pipeline ; if you
delete a delivery pipeline , all automations that
are children of that pipeline are also deleted.
The configuration file schema
describes how to configure the Automation .
The AutomationRun resource
An AutomationRun represents an execution of an
automation rule .
The automation service account
The service account you use to invoke an automation can be the
default service account
or another service account. However, even if you're using the default service
account, you must specify it, using the serviceAccount property in the
Automation configuration.
The automation service account must have iam.serviceAccount.actAs permission
on the
applicable execution service account .
Also, if the automation service account isn't in the same project as the
delivery pipeline, the Cloud Deploy
service agent must
have iam.serviceAccount.actAs on the automation service account.
Required permissions on the automation service account
Whether you specify the default or a non-default service account for an
automation, the service account must have the following permissions:
Permission to actAs the
execution service account .
Permissions to perform the operations that are being automated. See the
automation rules for specific permission
requirements.
What's next
Try the quickstart: Automate release creation and rollout advancement .
Read about automation rules .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
