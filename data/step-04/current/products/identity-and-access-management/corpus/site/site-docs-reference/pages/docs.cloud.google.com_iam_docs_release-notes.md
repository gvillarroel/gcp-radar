---
title: "IAM release notes \_|\_ Identity and Access Management (IAM) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/release-notes
  title: "IAM release notes \_|\_ Identity and Access Management (IAM) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Resources
Send feedback
IAM release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Identity and Access Management. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
Note: To learn about changes to the IAM permissions for each
Google Cloud service, see the permissions change log .
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 13, 2026
Feature
Requesters can schedule grant requests in Privileged Access Manager up to seven days in
advance. This lets requesters align access with scheduled maintenance or on-call
shifts.
This feature is in preview .
For more information, see Privileged Access Manager overview .
April 07, 2026
Feature
Organization Policy Service custom constraints are available for managed workload identity
and Workload Identity Federation. You can use custom constraints to control how
managed workload identity and Workload Identity Federation are used in your
organization. For more information, see
Custom organization policy constraints for managed workload identity
and
Custom organization policy constraints for Workload Identity Federation .
April 03, 2026
Deprecated
Extended attributes for Workforce Identity Federation are deprecated.
For group mapping, we recommend using
SCIM instead of
extended attributes. For more information, see
IAM deprecations .
March 31, 2026
Feature
Gemini assistance in the IAM role picker is generally
available .
For more information, see Get predefined role suggestions with
Gemini assistance .
March 03, 2026
Feature
Service
account principal sets are generally
available . You can use service account principal sets to reference all
service accounts or service agents in a project, folder, or organization when
writing allow policies, deny policies, and access policies.
February 27, 2026
Feature
The ability to self-grant missing permissions from permission error messages is
generally available .
To learn how to request missing permissions, see Request missing
permissions .
Feature
You can disable the option to send auto-generated access requests from
permission error messages. This feature is in
preview .
To learn how to disable these requests, see Disable auto-generated access
request emails .
December 15, 2025
Change
You can ask Gemini for predefined role suggestions
( preview ) without
enabling any APIs.
In addition, you can get custom role suggestions from Gemini
using the Cloud Assist panel in the Google Cloud console.
For more information, see Get predefined role suggestions with
Gemini assistance .
Feature
A new infinite-scrolling UI for audit logs is available on the
Privileged Access Manager > Audit logs page in the Google Cloud console.
This interface update replaces pagination with clear data loading indicators
and time boundaries to help facilitate event investigations.
This feature is in preview .
September 26, 2025
Feature
Privileged Access Manager (PAM)
offers the following features in preview :
Multi-level and multi-party approvals
Scope customization
Service account approvals
Inheritance support
Notification preferences customization
Grant withdrawal
Change
For Privileged Access Manager, notification emails for grant activation, activation failure,
or denial no longer include approver details.
To learn how to view the approver details, see Check grant status .
September 12, 2025
Feature
IAM offers predefined roles that are tailored to specific job functions. These roles cover all of the permissions that a user might need to perform their job. This feature is generally available .
For more information, see Predefined roles for job functions .
Feature
Permission errors in the Google Cloud console contain actionable steps for remediation. For more information, see Troubleshoot permission error messages .
July 21, 2025
Feature
You can ask Gemini for predefined role suggestions using the IAM role picker in the Google Cloud console. This feature is in preview .
For more information, see Get predefined role suggestions with Gemini assistance .
June 13, 2025
Change
Conditions that check the tags for a resource can also check other attributes, such as the resource name of the timestamp of the request. This feature is available in Preview. For more information, see Resource tags .
May 28, 2025
Feature
Workforce Identity Federation supports detailed audit logging , which you can use to troubleshoot attribute mapping issues. This feature is generally available .
May 15, 2025
Change
The predefined role reference and the permissions reference have been reorganized to improve performance and searchability. To see the new experience, visit the IAM roles and permissions index .
May 07, 2025
Feature
Workload Identity Federation support for X.509 certificates is generally available .
May 05, 2025
Change
A new enforcement version, enforcement version 3, is available for principal access boundary policies. To learn more about enforcement versions and see the permissions that enforcement version 3 can block, see Permissions that principal access boundary policies can block .
February 24, 2025
Feature
Workforce Identity Federation can map up to 400 groups from Microsoft Entra ID. The feature is generally available. To learn more, see Configure Workforce Identity Federation with Microsoft Entra ID and a large number of groups .
Change
Workforce Identity Federation supports an attribute mapping of up to 400 groups and a maximum size of 16 KB.
December 16, 2024
Change
Principal access boundary policies are generally available. You can use principal access boundary policies to limit the resources that a principal is eligible to access.
December 09, 2024
Change
Using IAM attributes in custom organization policies is generally available. For more information, see Use custom organization policies .
Feature
You can use the iam.managed.preventPrivilegedBasicRolesForDefaultServiceAccounts managed organization policy constraint to prevent default service accounts from being granted the Editor ( roles/editor ) or Owner ( roles/owner ) roles. For more information, see Prevent the Owner and Editor role from being granted to default service accounts .
September 16, 2024
Feature
Privileged Access Manager (PAM) is now released to General Availability. The following features have been added:
Alerting on any external modifications to access grants outside of PAM.
VPC Service Controls integration for PAM , which allows customers to enforce authorized network access or require specific access context while using PAM.
Pub/Sub integration for custom alerting and monitoring.
September 12, 2024
Change
You can manage IAM deny policies using the Google Cloud console. For more information, see Deny access to resources .
August 12, 2024
Feature
You can attach tags to Identity and Access Management (IAM) service accounts to conditionally grant or deny access to specific service accounts. This feature is in Preview . For more information, see Creating and managing tags for service accounts .
July 30, 2024
Feature
You can use IAM attributes in custom organization policies to control how your allow policies can be modified. For more information, see Use custom organization policies .
June 10, 2024
Feature
You can use principal access boundary policies to limit the resources that a principal is eligible to access. This feature is available in Preview.
May 08, 2024
Feature
Privileged Access Manager (PAM) lets you manage just-in-time temporary privilege elevation for select principals, and to view audit logs afterwards to find out who had access to what and when. This feature is in Preview.
May 03, 2024
Change
As of May 3, 2024, when you create a new organization, it enforces the following organization policy constraints by default:
iam.disableServiceAccountKeyCreation
iam.disableServiceAccountKeyUpload
iam.automaticGrantsForDefaultServiceAccounts
iam.allowedPolicyMemberDomains
For more information, see Restricting service account usage and Restricting identities by domain .
March 15, 2024
Change
You can use the iam.serviceAccountKeyExposureResponse organization policy
constraint to help manage leaked service account credentials.
March 05, 2024
Change
To improve performance, we've removed the ability to expand abbreviated permissions in the predefined roles table . You can still filter the predefined roles table based on the full list of permissions included in a role.
February 15, 2024
Feature
Managed workload identities let you bind strongly attested identities to your Compute Engine workloads. The feature is in Preview. Google Cloud provisions X.509 credentials, issued from Certificate Authority Service, that can be used to reliably authenticate your workload with other workloads over mutual TLS (mTLS) authentication. For more information, see Managed workload identities overview .
January 17, 2024
Change
IAM deny policies let you deny groups of permissions for certain services. For more information, see Permission groups .
December 11, 2023
Change
You can use identities from workforce and workload identity pools in IAM deny policies . For more information, see Principal identifiers .
September 27, 2023
Feature
You can now configure IAM workforce identity federation using the Google Cloud console. To learn more, see the configuration guides for Azure AD , Okta , or other OIDC and SAML 2.0 providers . The feature is in General Availability (GA).
September 13, 2023
Feature
You can now configure IAM workforce identity federation using the Google Cloud console. To learn more, see the configuration guides for Azure AD , Okta , or other OIDC and SAML 2.0 providers . The feature is in Preview.
August 14, 2023
Change
For Credential Access Boundaries , removed the requirement to enable uniform bucket-level access for your Cloud Storage bucket.
July 11, 2023
Change
Workforce identity federation now supports browser-based sign-in with the Google Cloud CLI. The feature is generally available ( GA ). To use it, see Browser-based sign-in in Obtain short-lived tokens for workforce identity federation , or locate the Browser-based sign-in section in the configuration guide for your identity provider.
June 22, 2023
Feature
You can trigger service agent creation instead of waiting for service agents to be created automatically. This feature is in Preview .
April 05, 2023
Feature
Workforce identity federation and workload identity federation can now accept encrypted SAML assertions. The feature is generally available ( GA ). To use the feature, locate the Create the workload identity pool and provider section in the configuration guide for your identity provider and follow the gcloud CLI instructions for the SAML workflow.
March 13, 2023
Feature
Workforce identity federation now supports browser-based sign-in with the Google Cloud CLI. The feature is in Preview . To use it, see Browser-based sign-in in Obtain short-lived tokens for workforce identity federation , or locate the Browser-based sign-in section in the configuration guide for your identity provider.
March 07, 2023
Feature
You can now set an expiry time for all newly created service account keys in your project, folder, or organization. This feature is generally available ( GA ).
March 03, 2023
Change
The IAM documentation has been reorganized. We made the following changes:
Reorganized the left-hand navigation for the Guides tab.
Removed the Support tab and relocated its documents to the Resources and Guides tabs.
February 10, 2023
Announcement
Workforce identity federation is generally available ( GA ). The feature lets you use an external identity provider to authenticate and authorize users to access supported Google Cloud products .
December 14, 2022
Issue
For information about issues with workforce identity federation, see Troubleshoot workforce identity federation
December 01, 2022
Issue
For some users, the IAM basic and predefined roles reference is crashing or is very slow to load. We are working to mitigate this issue.
November 09, 2022
Feature
You can use the Google Cloud console to view authentication activities , which indicate when your service accounts and keys were last used to call a Google API.
October 25, 2022
Change
Deny policies are generally available (GA). Use deny policies to prevent principals from using certain permissions, regardless of the roles they're granted.
September 20, 2022
Change
Conceptual and reference information for IAM basic and predefined roles has been improved. You can now filter the predefined roles table, expand abbreviated permissions to see all included permissions, and quickly identify owner permissions .
August 18, 2022
Feature
Workforce identity federation now lets users from external identity providers sign in to the Google Cloud workforce identity federation console, also known as the console (federated) . The console (federated) provides UI access to supported Google Cloud products . This feature is available in Preview.
July 07, 2022
Feature
Workforce identity federation lets you authenticate and authorize users from external identity providers to access supported Google Cloud products. This feature is available in Preview.
June 30, 2022
Fixed
In June 2022, IAM had an issue that resulted in excess usage metrics for service accounts and service account keys when any of the following actions were performed:
Listing service account keys
Getting a service account key
Disabling a service account key
Enabling a service account key
Each time you took any of these actions, Cloud Monitoring recorded an authentication usage metric for the parent service account, and for each of its service account keys, regardless of whether you used the service account or its keys to authenticate. These excess metrics were visible in Cloud Monitoring , and in the metrics for individual service accounts and keys , from June 7, 2022, through June 17, 2022.
In addition, these excess metrics were visible in other systems that use data from Cloud Monitoring, including Activity Analyzer , which shows when service accounts and keys were used to authenticate, and service account insights , which provide findings about unused service accounts. Excess metrics were visible in these systems from June 7, 2022, through June 22, 2022.
This issue has been corrected, and Cloud Monitoring is no longer recording these excess metrics. However, the last authentication time for each service account and key will continue to reflect the excess metrics indefinitely, until you authenticate with the service account or key again.
May 05, 2022
Change
Documentation for Activity Analyzer, IAM insights, IAM Policy Troubleshooter, IAM role recommendations, and IAM Policy Simulator has moved to the Policy Intelligence documentation .
April 29, 2022
Change
Support for using workload identity federation with any SAML 2.0-compatible identity provider is now generally available.
April 25, 2022
Change
The IAM documentation now refers to "IAM policies" as "allow policies." You might continue to see references to "IAM policies" in other documentation.
This change does not affect REST APIs, client libraries, or flags for the gcloud CLI.
April 22, 2022
Feature
IAM Conditions now provides resource attributes for Cloud SQL backup sets. You can use these resource attributes to grant access to a subset of your Cloud SQL resources.
March 25, 2022
Feature
IAM Conditions now provides resource attributes for Apigee X. You can use these resource attributes to grant access to a subset of your Apigee X resources.
March 03, 2022
Feature
You can now use deny policies to prevent principals from using certain permissions, regardless of the roles they're granted. This feature is in Preview.
January 27, 2022
Feature
You can now set an expiry time for all newly created service account keys in your project, folder, or organization. This feature is in Preview. To use this feature, request access to the Preview release .
December 03, 2021
Change
The IAM documentation now explains how to choose the most appropriate predefined roles .
October 26, 2021
Feature
For Credential Access Boundaries , you can now use updated authentication libraries for Go, Java, Node.js, and Python to automatically exchange OAuth 2.0 access tokens for downscoped tokens.
For details, see Exchange and refresh the access token automatically .
October 19, 2021
Change
The IAM page of the Cloud Console now lists lateral movement insights in addition to policy insights. Lateral movement insights are in Preview.
October 13, 2021
Feature
You can now use workload identity federation with any SAML 2.0-compatible identity provider. This feature is in Preview.
September 30, 2021
Change
IAM role recommendations for folder- and organization-level roles are now generally available.
September 20, 2021
Change
The IAM documentation now refers to the identities that can be granted access to a resource as principals . Previously, these identities were known as members .
This change does not affect the REST API, the client libraries, or the flags for the gcloud command-line tool.
Change
The reference documentation for predefined roles now uses a new format that is easier to browse.
September 16, 2021
Feature
You can now disable and enable service account keys .
August 27, 2021
Change
Managing Google Groups from the Cloud Console is now generally available.
August 02, 2021
Feature
You can now use Activity Analyzer to see when your service accounts and keys were last used to call a Google API. This feature is in Preview.
July 27, 2021
Feature
Recommender now generates lateral movement insights , which identify roles that allow a service account in one project to impersonate a service account in another project. You can manage lateral movement insights using the gcloud command-line tool or the Recommender REST API. This feature is available in Preview.
July 22, 2021
Feature
A C++ client library for IAM is now available. The client library supports the IAM API and the Service Account Credentials API .
July 21, 2021
Change
You can now set limits on the Cloud Storage roles that a member can grant and revoke . This is possible because Cloud Storage now recognizes the modifiedGrantsByRole API attribute in conditions.
June 10, 2021
Change
The documentation for IAM role recommendations now has more detail about how insights are used to generate recommendations.
May 14, 2021
Feature
You can now use the Google Cloud Console to manage workload identity federation . For details, see the documentation for your identity provider:
Access resources from AWS
Access resources from Microsoft Azure
Access resources from an OIDC identity provider
May 10, 2021
Change
The ability to attach service accounts to resources in other projects is now generally available.
April 09, 2021
Change
Workload identity federation is now generally available. You can use workload identity federation to grant access to Google Cloud resources from on-premises and multi-cloud workloads.
April 07, 2021
Feature
You can now get recommendations for folder- and organization-level role bindings using the gcloud command-line tool and REST API. This feature is available in Preview.
April 01, 2021
Change
Policy Simulator is now generally available. You can use Policy Simulator to simulate policy changes before you apply them.
March 16, 2021
Change
Tags are now generally available. You can attach tags to resources, then use the tags to manage access to your resources .
March 04, 2021
Feature
For workload identity federation , available in beta, you can now use updated client libraries for C++, Go, Java, Node.js, and Python to automatically obtain Google credentials.
For details, see the documentation for your identity provider:
Generating Google credentials on AWS
Generating Google credentials on Azure
Generating Google credentials with other providers
February 24, 2021
Feature
You can now use Policy Simulator to simulate policy changes before you apply them. This feature is available in Preview.
February 16, 2021
Feature
You can now use IAM conditions to set limits on the roles that a member can grant and revoke . This feature is generally available.
February 09, 2021
Feature
You can now attach tags to resources, then use the tags to manage access to your resources . This feature is available in Preview.
Issue
If you run one of the gcloud tool's add-iam-policy-binding commands, and the IAM policy contains conditional role bindings for that role, the gcloud tool prompts you to choose one of the condition expressions that exists in the policy. If you choose a condition expression that contains a comma, the command fails.
To work around this issue, use the --condition flag to specify a condition expression on the command line.
January 20, 2021
Feature
You can now troubleshoot conditional role bindings by troubleshooting directly from audit log entries. This feature is available in Preview.
December 17, 2020
Feature
You can now attach service accounts to resources in other projects . This feature is available in Preview.
December 14, 2020
Change
You can now use Cloud Monitoring to check when your service accounts and service account keys were used . This feature is generally available.
November 24, 2020
Change
IAM Conditions: Starting on February 26, 2021, if a permission check encounters an unsupported attribute in a conditional role binding, it will never interpret that part of the condition as granting access.
To prevent access issues, limit the scope of conditions when necessary, especially if a condition checks the resource.name attribute.
November 12, 2020
Feature
IAM Conditions now provides resource attributes for Pub/Sub Lite. You can use these resource attributes to grant access to a subset of your Pub/Sub Lite subscriptions and topics.
October 16, 2020
Feature
You can now manage service account insights generated by the IAM recommender. This feature is available in beta.
Change
Credential Access Boundaries are now generally available . Use Credential Access Boundaries to downscope the permissions that a short-lived credential can use to access a Cloud Storage bucket.
October 15, 2020
Change
If a role binding in an IAM policy refers to a deleted member (for example, deleted:user:tamika@example.com?uid=123456789012345678901 ), you can now add role bindings for a newly created member with the same name (in this case, user:tamika@example.com ). The role bindings always apply to the newly created member.
For details, see the documentation for policies with deleted members .
October 09, 2020
Change
The documentation now provides details about service agents for all publicly available services. A service agent is a special type of service account that is created and managed by Google, and is used by Google Cloud services to access your resources.
September 21, 2020
Feature
You can now use workload identity federation , available in beta, to grant access to Google Cloud resources from on-premises and multi-cloud workloads.
September 17, 2020
Fixed
The issue with undeleting service accounts has been resolved. You can now undelete most service accounts that meet the criteria for undeletion .
September 16, 2020
Change
The documentation now includes a quickstart demonstrating how to modify IAM policies using client libraries.
September 09, 2020
Issue
You cannot undelete most service accounts at this time. Our engineering team is working to resolve this issue.
August 28, 2020
Feature
New features are available for Credential Access Boundaries , currently in beta:
You can now manage permissions for Cloud Storage objects, in addition to buckets.
You can now use IAM Conditions to control which permissions are available in a short-lived OAuth 2.0 access token. For an example, see Limit permissions for specific objects .
You can now use Credential Access Boundaries with a Cloud Storage bucket that does not use uniform bucket-level access .
Change
For Credential Access Boundaries , currently in beta, you must migrate to a new API endpoint, sts.googleapis.com . To learn how to use the new API endpoint, see Exchanging the OAuth 2.0 access token .
August 25, 2020
Change
Uploading public keys for service accounts is now generally available.
August 18, 2020
Change
The documentation now provides a list of the resource types that accept IAM policies .
August 14, 2020
Feature
You can now use Cloud Monitoring to check when your service accounts and service account keys were used . This feature is available in beta.
Feature
You can now use an organization policy to extend the maximum lifetime for OAuth 2.0 access tokens that you create for a service account.
August 05, 2020
Feature
You can now manage policy insights generated by the IAM recommender. This feature is generally available.
July 31, 2020
Change
We are delaying the upcoming changes for deleted members that are bound to a role . These changes will take effect starting on September 14, 2020.
Change
The documentation now describes best practices for using the IAM recommender .
July 20, 2020
Change
We are delaying the upcoming changes for deleted members that are bound to a role . These changes will take effect starting on August 31, 2020.
July 01, 2020
Change
The organization policy constraint to prevent automatic role grants to IAM service accounts is now generally available . To improve security, we strongly recommend that you enable this constraint.
Issue
Starting on July 27, 2020, if a binding in a policy refers to a deleted member (for example, deleted:user:tamika@example.com?uid=123456789012345678901 ), you cannot add a binding for a newly created member with the same name (in this case, user:tamika@example.com ). If you try to add a binding for the newly created member, IAM will apply the binding to the deleted member instead.
To resolve this issue, see our guidance on updating policies that contain deleted members .
Change
Starting on July 27, 2020, IAM policies will identify deleted members that are bound to a role. Deleted members have the prefix deleted: and the suffix ?uid= numeric-id .
For example, if you delete the account for the user tamika@example.com , and a policy binds that user to a role, the policy shows an identifier similar to deleted:user:tamika@example.com?uid=123456789012345678901 .
For SetIamPolicy requests, you can use this new syntax starting on July 27. For GetIamPolicy and SetIamPolicy responses, you might see the new prefix and suffix in some, but not all, responses until we finish rolling out the change. We expect to complete the rollout by July 31, 2020.
See the documentation for a detailed example , as well as guidance on updating policies that contain deleted members .
June 22, 2020
Deprecated
Using the IAM API to sign JSON Web Tokens (JWTs) or binary blobs is now deprecated.
If you use the IAM API or its client libraries to sign JWTs or binary blobs, you must migrate to the Service Account Credentials API before July 1, 2021.
If you use the gcloud command-line tool to sign JWTs, you must prepare for changes to the gcloud tool before July 1, 2021.
May 19, 2020
Feature
You can now manage Google Groups from the Cloud Console . This feature is available in beta.
May 18, 2020
Change
Recommendations from the IAM recommender can now include suggestions to create custom roles .
April 01, 2020
Feature
When you use a service account key to access Google Cloud , your audit logs now identify the key that was used.
March 17, 2020
Change
Forwarding rule attributes for IAM Conditions are now generally available . You can use these attributes to specify the types of forwarding rules that a member can create.
March 05, 2020
Feature
For Cloud Storage buckets, you can now use Credential Access Boundaries , currently in beta, to downscope the permissions that a short-lived credential can use.
February 28, 2020
Change
IAM Conditions are now generally available . You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources.
Feature
For IAM Conditions, you can now use the extract() function to extract a value from a resource name . This function enables condition expressions to refer to an arbitrary part of the resource name.
February 21, 2020
Change
A version 1 IAM policy can now include conditional role bindings . The role name in these bindings includes the string withcond , followed by a hash value. For example: roles/iam.serviceAccountAdmin_withcond_2b17cc25d2cd9e2c54d8
If you see the string withcond in an IAM policy, follow the steps in the troubleshooting guide .
February 18, 2020
Change
You can now learn about IAM audit logging for service accounts and see examples of audit logs for service accounts .
February 13, 2020
Change
The IAM recommender is now generally available . The IAM recommender helps you enforce the principle of least privilege by ensuring that members have only the permissions that they actually use.
February 04, 2020
Feature
IAM Conditions now supports forwarding rule attributes , currently in beta. You can use these attributes to specify the types of forwarding rules that a member can create.
December 17, 2019
Change
Policy Troubleshooter is now generally available . Use Policy Troubleshooter to determine why a user has access to a resource or doesn't have permission to call an API.
December 13, 2019
Change
On December 9, we announced that IAM policies would now identify deleted members. We have temporarily reverted this change. IAM policies no longer identify deleted members.
December 12, 2019
Feature
IAM Conditions are now available in public beta. You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources.
December 09, 2019
Change
IAM policies now identify deleted members that are bound to a role. Deleted members have the prefix deleted: and the suffix ?uid= [NUMERIC_ID] .
For example, if you delete the account for the user bob@example.com , and a policy binds that user to a role, the policy shows an identifier similar to deleted:user:bob@example.com?uid=123456789012345678901 .
For SetIamPolicy requests, you can use this new syntax starting today. For GetIamPolicy and SetIamPolicy responses, because we are still rolling out this change, you might see the new prefix and suffix in some, but not all, responses. We expect to complete the rollout by December 13, 2019.
Issue
If a binding in a policy refers to a deleted member (for example, deleted:user:bob@example.com?uid=123456789012345678901 ), you cannot add a binding for a newly created member with the same name (in this case, user:bob@example.com ). If you try to add a binding for the newly created member, IAM will apply the binding to the deleted member instead.
September 23, 2019
Feature
The IAM recommender is now available in beta. The IAM recommender helps you enforce the principle of least privilege by ensuring that members have only the permissions that they actually use.
September 18, 2019
Feature
You can now upload a public key for a service account , which causes service account keys to be signed with that public key. This feature is available in beta.
August 20, 2019
Change
The Service Account Credentials API is now generally available . Use this API to create short-lived service account credentials .
March 28, 2019
Feature
When you create or update a service account, you can now provide a description of the service account.
June 29, 2018
Feature
You can now create short-lived service account credentials with the Service Account Credentials API, available in beta.
February 27, 2018
Change
You can now learn how to configure IAM roles to facilitate audit logging .
January 31, 2018
Change
Custom roles are now generally available . You can create a custom IAM role with one or more permissions, then grant that custom role to users in your organization.
For more information, see the following topics:
Understanding custom roles
Creating and managing custom roles
Maintaining custom roles with Deployment Manager
Support level for permissions in custom roles
September 27, 2017
Change
Custom roles are now available in beta. You can create a custom IAM role with one or more permissions, then grant that custom role to users in your organization.
September 14, 2017
Change
You can now refer to the IAM permissions change log to determine what permissions have changed recently. Use this change log to help you maintain and troubleshoot your custom roles.
July 06, 2017
Change
You can now learn how to configure IAM roles for networking-related job functions .
June 28, 2017
Change
Custom roles are now available in a public alpha. You can create a custom IAM role with one or more permissions, then grant that custom role to users in your organization.
May 24, 2017
Change
You can now learn how to configure IAM roles for billing-related job functions .
March 08, 2017
Feature
Custom roles are now available in a private alpha. You can create a custom IAM role with one or more permissions, then grant that custom role to users in your organization.
May 10, 2016
Change
IAM is now generally available .
March 28, 2016
Change
Documentation is now available to help you understand service accounts and use IAM securely .
March 08, 2016
Feature
IAM is now available in beta.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
