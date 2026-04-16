---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.707Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Users API IAM role support"
feature_slug: "users-api-iam-role-support"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "users"
  - "iam"
  - "role"
  - "recognizes"
  - "roles"
  - "group"
  - "expansion"
  - "when"
---

# Users API IAM role support

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

The Users API recognizes IAM roles and group expansion when determining App Engine administrators.

## Extended Definition

The Users API recognizes IAM roles and group expansion when determining App Engine administrators.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the default service account already has the Editor role, we recommend that you replace the Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of the change, and then grant and revoke the appropriate roles .
- If you disable the automatic role grant, you must decide which roles to grant to the default service accounts, and then grant these roles yourself.
- If the service account also needs access to other Cloud services, select roles that grant access to other Cloud services .
- If the user also needs access to other Cloud services, select roles that grant access to other Cloud services .

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- This service account's email address has the following form: service- PROJECT NUMBER @gcp-sa-vpcaccess.iam.gserviceaccount.com By default, this service account has the Serverless VPC Access Service Agent role ( roles/vpcaccess.serviceAgent ).
- Required roles To get the permissions that you need to manage organization policies, ask your administrator to grant you the Organization policy administrator ( roles/orgpolicy.policyAdmin ) IAM role on the organization resource.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.

### "App Engine audit logging information \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When deciding which Logging-specific permissions and roles apply to your use case, consider the following: The Logs Viewer role ( roles/logging.viewer ) gives you read-only access to Admin Activity, Policy Denied, and System Event audit logs.
- The Private Logs Viewer role (roles/logging.privateLogViewer ) includes the permissions contained in roles/logging.viewer , plus the ability to read Data Access audit logs in the Default bucket.
- Permissions and roles IAM permissions and roles determine your ability to access audit logs data in Google Cloud resources.
- For more information about the IAM permissions and roles that apply to audit logs data, see Access control with IAM .

