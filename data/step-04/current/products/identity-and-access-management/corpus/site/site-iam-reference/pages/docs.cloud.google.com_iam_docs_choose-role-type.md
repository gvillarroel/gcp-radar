---
title: "Choose which type of role to use \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/choose-role-type
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/choose-role-type
  title: "Choose which type of role to use \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
Choose which type of role to use
Stay organized with collections
Save and categorize content based on your preferences.
This page offers guidance on which type of role—predefined, custom, or
basic—you should use to control access to Google Cloud resources.
The following summarizes our recommendations for choosing which type of
role to use:
We recommend that you prioritize using predefined roles because they're
managed by Google and offer a balance of security and convenience.
If you need a role that closely adheres to the principle of least privilege,
and you can't find a predefined role that fits your security requirements,
use custom roles.
Don't use basic roles unless you have no alternative or are using them in a
test environment.
When to use predefined roles
Generally, we recommend that you use predefined
roles instead of basic or custom roles. Predefined
roles give granular access to specific
Google Cloud resources, are maintained by Google, and are updated
automatically when new permissions, features, or services are added to
Google Cloud.
However, there are some cases where you might want to use custom or basic
roles. The following sections describe these cases.
When to use custom roles
Unlike predefined roles, custom roles are not maintained by Google. That means
when Google Cloud adds new permissions, features, or services, your
custom roles won't be updated automatically. For this reason, we recommend
granting the most limited predefined roles that meet
your needs.
However, it might be appropriate to create and grant custom roles in the
following cases:
A principal needs a permission, but each predefined role that includes that
permission also includes permissions that the principal doesn't need and
shouldn't have.
You use role recommendations to replace overly permissive role
grants with more appropriate role grants. In some cases, you might receive a
recommendation to create a custom role .
When using custom roles, be aware of the following limits:
Custom roles can contain up to 3,000 permissions.
The maximum total size of the title, description, and permission names
for a custom role is 64 KB.
There are limits to the number of custom roles you can create:
You can create up to 300 organization-level
custom roles in your organization.
You can create up to 300 project-level custom
roles in each project in your organization.
When to use basic roles
Basic roles include thousands of permissions across all Google Cloud services. In production
environments, do not grant basic roles unless there is no alternative. Instead, grant the most
limited predefined roles or
custom roles that meet your needs.
If you need to replace a basic role, you can use role
recommendations to determine which roles to
grant instead. You can also use the Policy Simulator to
ensure that changing the role won't affect the principal's access.
It might be appropriate to grant basic roles when you want to grant broader
permissions for a project. This often happens when you're granting permissions
in development or test environments.
What's next
Learn how to find the right predefined roles .
Learn how to create custom roles .
Learn more about basic roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
