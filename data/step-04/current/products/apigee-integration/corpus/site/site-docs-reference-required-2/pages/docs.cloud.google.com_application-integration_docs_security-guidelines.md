---
title: "Application Integration security guidelines \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/security-guidelines
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/vpc-service-controls
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/security-guidelines
  title: "Application Integration security guidelines \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Application Integration security guidelines
This document describes the security guidelines and considerations for the
Application Integration product. If you are new to
Application Integration, we suggest that you start with
Application Integration overview .
Service accounts
A service account is a special kind of account used by an application, rather than a person.
A service account is identified by a unique email address. For more information, see
Service accounts .
Service accounts can be used to provide secure access to the Google Cloud resources without
sharing your own login credentials. This prevents unauthorized access to your resources.
The following are some of the best practices that you can follow when using a service account:
Create a separate service account for each task or application. This lets you better manage
access and keep track of which service accounts are being used for which tasks.
Grant the service account only the permissions that it needs to perform its intended tasks.
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
Monitor the usage of your service accounts and review the audit logs to ensure that
they are being used as intended. This can help you to detect any unauthorized access or
misuse of service accounts.
For more information, see
Best practices for working with service accounts .
Custom roles
Custom roles let you create fine-grained permissions that are tailored to your specific
needs. For example, you may create a custom role that allows a service account to read
and write data to a Cloud Storage bucket, but not delete it.
Custom roles are useful in managing access to your Google Cloud resources and ensuring that
users and applications have only the permissions required to perform their intended tasks.
You can create custom roles using the Identity and Access Management (IAM)
and assign the roles to users, groups, or service accounts. For more information,
see Creating a custom role .
Authentication profiles
An authentication profile lets you configure and store the authentication details
for the connection in an integration. So, instead of using a hard-coded authentication
configuration, you can use the in-built authentication profile configuration which provides
enhanced security. Application Integration supports various
authentication types depending on the task. For more information, see
Compatibility
of authentication types with tasks .
To prevent unauthorized access and provide enhanced security, it's recommended
to use an authentication profile if a task supports it.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
