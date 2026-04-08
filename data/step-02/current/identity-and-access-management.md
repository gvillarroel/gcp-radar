# Identity and Access Management

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 67
Unique features: 70

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-03 | Extended attributes for Workforce Identity Federation | 2026-04-03 | Workforce Identity Federation can use extended attributes for group mapping; deprecated on 2026-04-03. |
| 2026-03-31 | Gemini assistance for predefined role suggestions |  | Gemini suggests predefined IAM roles in the role picker; Gemini suggests predefined IAM roles in the role picker. |
| 2026-03-03 | Service account principal sets |  | Principal sets can reference all service accounts or service agents in a project, folder, or organization. |
| 2026-02-27 | Auto-generated access request emails |  | Permission error messages can send auto-generated access request emails, and administrators can disable them. |
| 2026-02-27 | Self-grant missing permissions |  | Users can request and self-grant missing permissions directly from permission error messages. |
| 2025-12-15 | Infinite-scrolling audit logs UI |  | Privileged Access Manager audit logs use an infinite-scrolling console view with loading indicators and time boundaries. |
| 2025-09-26 | Grant withdrawal in Privileged Access Manager |  | Privileged Access Manager supports withdrawing granted access. |
| 2025-09-26 | Inheritance support in Privileged Access Manager |  | Privileged Access Manager supports inherited access settings. |
| 2025-09-26 | Multi-level approvals in Privileged Access Manager |  | Privileged Access Manager supports approval chains with multiple levels. |
| 2025-09-26 | Multi-party approvals in Privileged Access Manager |  | Privileged Access Manager supports approvals from multiple approvers. |
| 2025-09-26 | Notification preferences customization in Privileged Access Manager |  | Privileged Access Manager lets you customize notification preferences. |
| 2025-09-26 | Scope customization in Privileged Access Manager |  | Privileged Access Manager lets you customize the scope of access grants. |
| 2025-09-26 | Service account approvals in Privileged Access Manager |  | Privileged Access Manager supports approval flows for service accounts. |
| 2025-09-12 | Actionable remediation steps in console permission errors |  | Google Cloud console permission errors include actionable remediation steps. |
| 2025-09-12 | Predefined roles for job functions |  | IAM provides predefined roles tailored to common job functions. |
| 2025-05-28 | Detailed audit logging for Workforce Identity Federation |  | Workforce Identity Federation provides detailed audit logs for troubleshooting attribute mapping issues. |
| 2025-05-07 | X.509 certificate support for Workload Identity Federation |  | Workload Identity Federation supports X.509 certificates. |
| 2025-02-24 | Workforce Identity Federation Microsoft Entra ID group mapping |  | Workforce Identity Federation can map up to 400 groups from Microsoft Entra ID. |
| 2024-12-09 | Managed organization policy constraint for default service accounts |  | The managed organization policy constraint prevents default service accounts from being granted the Editor or Owner roles. |
| 2024-09-16 | Privileged Access Manager |  | Privileged Access Manager provides just-in-time temporary privilege elevation and audit visibility for access grants; Privileged Access Manager provides just-in-time temporary privilege elevation and audit visibility for access grants. |
| 2024-09-16 | Privileged Access Manager access grant modification alerts |  | Privileged Access Manager can alert on external modifications to access grants made outside of PAM. |
| 2024-09-16 | Privileged Access Manager Pub/Sub integration |  | Privileged Access Manager integrates with Pub/Sub for custom alerting and monitoring. |
| 2024-09-16 | Privileged Access Manager VPC Service Controls integration |  | Privileged Access Manager integrates with VPC Service Controls to enforce authorized network access or access context. |
| 2024-08-12 | IAM service account tags |  | IAM service accounts can be tagged to conditionally grant or deny access to specific service accounts. |
| 2024-07-30 | IAM attributes in custom organization policies |  | IAM attributes can be used in custom organization policies to control how allow policies are modified. |
| 2024-06-10 | Principal access boundary policies |  | Principal access boundary policies limit the resources that a principal is eligible to access. |
| 2024-02-15 | Managed workload identities |  | Managed workload identities bind strongly attested identities to Compute Engine workloads and provision X.509 credentials for mTLS authentication. |
| 2023-09-27 | IAM Workforce Identity Federation console configuration |  | IAM Workforce Identity Federation can be configured using the Google Cloud console; IAM Workforce Identity Federation can be configured using the Google Cloud console. |
| 2023-06-22 | Service agent creation trigger |  | You can trigger service agent creation instead of waiting for automatic creation. |
| 2023-04-05 | Encrypted SAML assertions for Workforce Identity Federation |  | Workforce Identity Federation can accept encrypted SAML assertions. |
| 2023-04-05 | Encrypted SAML assertions for Workload Identity Federation |  | Workload Identity Federation can accept encrypted SAML assertions. |
| 2023-03-13 | Browser-based sign-in for Workforce Identity Federation |  | Lets Workforce Identity Federation users sign in to the Google Cloud CLI through a browser-based flow. |
| 2023-03-07 | Service account key expiry time |  | Lets admins set an expiry time for newly created service account keys at the project, folder, or organization level; Lets admins set an expiry time for newly created service account keys at the project, folder, or organization level. |
| 2022-11-09 | Authentication activity view |  | Lets you view when service accounts and keys were last used to call a Google API. |
| 2022-08-18 | Workforce Identity Federation console (federated) |  | Lets users from external identity providers sign in to the federated Google Cloud console for UI access to supported products. |
| 2022-07-07 | Workforce Identity Federation |  | Lets you authenticate and authorize users from external identity providers to access supported Google Cloud products. |
| 2022-04-22 | IAM Conditions resource attributes for Cloud SQL backup sets |  | Adds Cloud SQL backup-set resource attributes to IAM Conditions so you can grant access to a subset of Cloud SQL resources. |
| 2022-03-25 | IAM Conditions resource attributes for Apigee X |  | Adds Apigee X resource attributes to IAM Conditions so you can grant access to a subset of Apigee X resources. |
| 2022-03-03 | Deny policies |  | Lets you prevent principals from using specific permissions regardless of the roles they are granted. |
| 2021-10-26 | Automatic token exchange for Credential Access Boundaries |  | Lets updated authentication libraries automatically exchange OAuth 2.0 access tokens for downscoped tokens. |
| 2021-10-13 | Workload Identity Federation with SAML 2.0 identity providers |  | Lets you use workload identity federation with any SAML 2.0-compatible identity provider. |
| 2021-09-16 | Service account keys enable and disable |  | Lets you disable and re-enable service account keys. |
| 2021-08-02 | Activity Analyzer |  | Activity Analyzer shows when service accounts and keys were last used to call a Google API. |
| 2021-07-27 | Recommender lateral movement insights |  | Recommender generates insights that identify roles allowing a service account in one project to impersonate a service account in another project. |
| 2021-07-22 | IAM client library for C++ |  | A C++ client library is available for the IAM API and the Service Account Credentials API. |
| 2021-05-14 | Workload Identity Federation |  | Workload Identity Federation can now be managed in the Google Cloud Console; Workload Identity Federation lets on-premises and multi-cloud workloads access Google Cloud resources. |
| 2021-04-07 | Role binding recommendations |  | Recommendations for folder- and organization-level role bindings are available through gcloud and the REST API. |
| 2021-03-04 | Workload Identity Federation client libraries |  | Updated client libraries for C++, Go, Java, Node.js, and Python can automatically obtain Google credentials for Workload Identity Federation. |
| 2021-02-24 | Policy Simulator |  | Policy Simulator lets you simulate policy changes before applying them. |
| 2021-02-16 | IAM Conditions role grant and revoke limits |  | IAM Conditions can limit which roles a member is allowed to grant and revoke. |
| 2021-02-09 | Tags-based access control |  | Tags can be attached to resources and used to manage access to those resources. |
| 2021-01-20 | Conditional role binding troubleshooting |  | Conditional role bindings can be troubleshot directly from audit log entries. |
| 2020-12-17 | Service account attachment across projects |  | Service accounts can be attached to resources in other projects. |
| 2020-11-12 | IAM Conditions resource attributes for Pub/Sub Lite |  | IAM Conditions provides resource attributes for Pub/Sub Lite subscriptions and topics. |
| 2020-10-16 | Service account insights |  | IAM Recommender can now generate insights for service accounts that you can manage. |
| 2020-08-28 | Credential Access Boundaries |  | Credential Access Boundaries can now manage Cloud Storage object permissions and work with buckets that do not use uniform bucket-level access; Credential Access Boundaries can now downscope short-lived credentials for Cloud Storage buckets. |
| 2020-08-14 | Service account access token lifetime extension |  | An organization policy can extend the maximum lifetime of OAuth 2.0 access tokens created for a service account. |
| 2020-08-14 | Service account usage monitoring |  | Cloud Monitoring can now show when service accounts and service account keys were used. |
| 2020-08-05 | Policy insights |  | IAM Recommender can now generate policy insights that you can manage. |
| 2020-06-22 | IAM API signBlob and signJwt methods | 2021-07-01 | The IAM API signBlob and signJwt methods are deprecated in favor of the Service Account Credentials API; deprecated on 2021-07-01. |
| 2020-05-19 | Google Groups management in Cloud Console |  | You can now manage Google Groups from the Cloud Console. |
| 2020-04-01 | Service account key usage audit logging |  | Audit logs now identify which service account key was used to access Google Cloud. |
| 2020-02-28 | IAM Conditions extract() function |  | IAM Conditions now supports the extract() function for referring to arbitrary parts of a resource name. |
| 2020-02-04 | IAM Conditions forwarding rule attributes |  | IAM Conditions now supports forwarding rule attributes for controlling which types of forwarding rules a member can create. |
| 2019-12-12 | IAM Conditions |  | Defines and enforces conditional, attribute-based access control for Google Cloud resources. |
| 2019-09-23 | IAM Recommender |  | Helps enforce least privilege by identifying permissions that members actually use. |
| 2019-09-18 | Service account public key upload |  | Lets you upload a public key for a service account so service account keys are signed with that key. |
| 2019-03-28 | Service account descriptions |  | Lets you add a description when creating or updating a service account. |
| 2018-06-29 | Service Account Credentials API short-lived credentials |  | Creates short-lived service account credentials through the Service Account Credentials API. |
| 2017-03-08 | Custom IAM roles |  | Lets you create custom IAM roles from selected permissions and grant them to users in your organization. |

Source file slug: `identity-and-access-management.md`

