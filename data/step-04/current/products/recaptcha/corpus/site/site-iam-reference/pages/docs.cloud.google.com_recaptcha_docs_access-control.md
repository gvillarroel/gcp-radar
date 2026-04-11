---
title: "Access control with IAM \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/access-control
  title: "Access control with IAM \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Guides
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
reCAPTCHA offers Role-Based Access Control (RBAC) with
Identity and Access Management (IAM) and
access control for reCAPTCHA APIs using VPC Service Controls .
Role-based access control with IAM
IAM lets you give granular access to specific
Google Cloud resources and prevents unwanted access to other resources,
such as logs and analytics.
This section describes the IAM roles for reCAPTCHA.
To learn how to assign IAM roles to a user or service account,
read Granting, changing, and revoking access to resources
in the IAM documentation.
Roles and permissions
The following table lists the necessary IAM roles and their permissions for
reCAPTCHA:
Role
Permissions
reCAPTCHA Enterprise Admin
( roles/ recaptchaenterprise.admin )
Access to view and modify reCAPTCHA Enterprise keys
monitoring.timeSeries.list
recaptchaenterprise. firewallpolicies.*
recaptchaenterprise. firewallpolicies. create
recaptchaenterprise. firewallpolicies. delete
recaptchaenterprise. firewallpolicies. get
recaptchaenterprise. firewallpolicies. list
recaptchaenterprise. firewallpolicies. update
recaptchaenterprise.keys.*
recaptchaenterprise. keys. create
recaptchaenterprise. keys. createTagBinding
recaptchaenterprise. keys. delete
recaptchaenterprise. keys. deleteTagBinding
recaptchaenterprise.keys.get
recaptchaenterprise.keys.list
recaptchaenterprise. keys. listEffectiveTags
recaptchaenterprise. keys. listTagBindings
recaptchaenterprise. keys. retrievelegacysecretkey
recaptchaenterprise. keys. update
recaptchaenterprise. metrics. get
recaptchaenterprise. projectmetadata.*
recaptchaenterprise. projectmetadata. get
recaptchaenterprise. projectmetadata. update
resourcemanager.projects.get
resourcemanager.projects.list
reCAPTCHA Enterprise Viewer
( roles/ recaptchaenterprise.viewer )
Access to view reCAPTCHA Enterprise keys and metrics
monitoring.timeSeries.list
recaptchaenterprise. firewallpolicies. get
recaptchaenterprise. firewallpolicies. list
recaptchaenterprise.keys.get
recaptchaenterprise.keys.list
recaptchaenterprise. keys. listEffectiveTags
recaptchaenterprise. keys. listTagBindings
recaptchaenterprise. metrics. get
recaptchaenterprise. projectmetadata. get
resourcemanager.projects.get
resourcemanager.projects.list
reCAPTCHA Enterprise Agent
( roles/ recaptchaenterprise.agent )
Access to create and annotate reCAPTCHA Enterprise assessments
recaptchaenterprise. assessments.*
recaptchaenterprise. assessments. annotate
recaptchaenterprise. assessments. create
recaptchaenterprise. firewallpolicies. list
recaptchaenterprise. relatedaccountgroupmemberships. list
recaptchaenterprise. relatedaccountgroups. list
resourcemanager.projects.get
resourcemanager.projects.list
Custom roles
You might require custom roles for use cases such as regulatory requirements.
To create a custom role that includes reCAPTCHA permissions,
perform the appropriate action as shown in the following table:
Role description
Action
Role that only grants permissions for the reCAPTCHA Enterprise API
Choose from the permissions
in the API permissions section.
Role that grants permissions for the reCAPTCHA Enterprise API and console
Choose permissions groups in the
in the Roles and permissions section.
Role that grants the ability to create and annotate assessments
Include the
permissions in the role roles/recaptchaenterprise.agent in
the Roles and permissions section.
For more information on custom roles, go to
Creating and managing custom roles .
API permissions
The following table lists the permissions that the caller must have to call each
method in the reCAPTCHA Enterprise API, recaptchaenterprise.googleapis.com/v1 :
Method (REST/RPC)
Required Permissions
For resource type
[recaptchaenterprise.assessments.annotate] / [AnnotateAssessmentRequest]
recaptchaenterprise.assessments.annotate
project
[recaptchaenterprise.assessments.create] / [CreateAssessmentRequest]
recaptchaenterprise.assessments.create
project
[recaptchaenterprise.keys.create] / [CreateKeyRequest]
recaptchaenterprise.keys.create
project
[recaptchaenterprise.keys.delete] / [DeleteKeyRequest]
recaptchaenterprise.keys.delete
project
[recaptchaenterprise.keys.get] / [GetKeyRequest]
recaptchaenterprise.keys.get
project
[recaptchaenterprise.keys.list] / [ListKeysRequest]
recaptchaenterprise.keys.list
project
[recaptchaenterprise.keys.update] / [UpdateKeyRequest]
recaptchaenterprise.keys.update
project
VPC Service Controls
VPC Service Controls support reCAPTCHA to provide additional
access control for reCAPTCHA
APIs. For more information, see
Supported products and limitations > reCAPTCHA Enterprise .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
