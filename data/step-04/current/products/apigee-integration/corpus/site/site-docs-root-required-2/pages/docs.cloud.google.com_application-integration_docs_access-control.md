---
title: "Access control overview \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/access-control
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/access-control
  title: "Access control overview \_|\_ Application Integration \_|\_ Google Cloud\
    \ Documentation"
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
Access control overview
When you create a Google Cloud project, you are the only principal on the project. By default, no other principals (users, groups, or service accounts ) have access to your project or its resources. After successfully provisioning Application Integration in your project, you can add new principals and set access control for your Application Integration resources.
Application Integration uses Identity and Access Management (IAM) to manage access control within your project. You can use IAM to manage access at the project level or at the resource level:
To grant access to resources at the project level, assign one or more roles to a principal.
To grant access to a specific resource, set an IAM policy on that resource. The resource must support resource-level policies. The policy defines which roles are assigned to which principals.
IAM roles
Every principal in your Google Cloud project is granted a role with specific permissions. When you add a principal to a project or to a resource, you specify which roles to grant them. Each IAM role contains a set of permissions that allows the principal to perform specific actions on the resource.
For more information about the different types of roles in IAM, see Understanding roles .
For information on granting roles to principals, see Granting, changing, and revoking access .
Application Integration provides a specific set of predefined IAM roles . You can use these roles to provide access to specific Application Integration resources and prevent unwanted access to other Google Cloud resources.
Service accounts
Service accounts are Google Cloud accounts associated with your project that can perform tasks or operations on your behalf. Service accounts are assigned roles and permissions in the same way as principals, using IAM. For more information about service accounts and the different types of service accounts, see IAM service accounts .
You must grant the appropriate IAM roles to a service account to allow that service account access to relevant API methods.
When you grant an IAM role to a service account, any integration that has that service account attached will have the authorization conferred by that role. If there isn't a predefined role for the access level you want, you can create and grant custom roles .
Application Integration uses two types of service accounts:
User-managed service account
Default service account
User-managed service account
A user-managed service account can be attached to an integration
to provide credentials to execute the task. For more information, see User-managed service accounts .
The authorization provided to the integration is limited by two separate configurations: the
roles granted to the attached service account , and the access scopes.
Both of these configurations must allow access before the integration can execute the task.
A user-managed service account has the following email address:
service-account-name@ PROJECT_ID .iam.gserviceaccount.com
Default service account
New Google Cloud projects that have provisioned Application Integration have an Application Integration default service account , which has the following email address:
service- PROJECT_NUMBER @gcp-sa-integrations.iam.gserviceaccount.com
The Application Integration default service account is created during provisioning and is automatically added to your project with the basic IAM roles and permissions. For more information, see Default service accounts .
For information on granting additional roles or permissions to the default service account, see Granting, changing, and revoking access .
Add a service account
Application Integration provides two ways to add a service account to your integration:
If you have enabled governance for your region , then you must add a service account while creating a new integration .
If you have not enabled governance, then you can optionally add a service account to your
integration. To add a service account to an existing integration, see Edit and view integrations .
Authentication rule
If your integration has both OAuth 2.0 profile and a user-managed service account configured, then by default the OAuth 2.0 profile is used for authentication. If neither OAuth 2.0 profile nor user-managed service account is configured, then the default service account ( service- PROJECT_NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) is used. If the task does not use the default service account, the execution fails.
Authorization rule
If you attach a service account to your integration, you must determine the level
of access the service account has by the IAM roles that you
grant to the service account .
If the service account has no IAM roles, then no resources can
be accessed using the service account.
Access scopes potentially further limit access to API
methods when authenticating through OAuth. However, they do not extend to other
authentication protocols like gRPC.
IAM roles
You must grant the appropriate IAM roles to a service account to allow that service account access to relevant API methods.
When you grant an IAM role to a service account, any integration that has that
service account attached will have the authorization conferred by that role.
Access scopes
Access scopes are the legacy method of specifying authorization for your
integration. They define the default OAuth scopes used in requests from the
gcloud CLI or the client libraries. Scopes let you specify access permissions
for users. You can specify multiple scopes separated by a single space (" "). For more information, see
OAuth 2.0 Scopes for Google APIs . For user-managed service accounts, the scope is predefined to the following scope:
https://www.googleapis.com/auth/cloud-platform
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
