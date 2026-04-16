---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.435Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Conditional role binding troubleshooting"
feature_slug: "conditional-role-binding-troubleshooting"
latest_feature_date: "2021-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/troubleshooting-withcond"
  - "https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles"
  - "https://docs.cloud.google.com/iam/docs/allow-policies"
  - "https://docs.cloud.google.com/iam/docs/creating-custom-roles"
keywords:
  - "conditional"
  - "role"
  - "binding"
  - "troubleshooting"
  - "bindings"
  - "can"
  - "be"
  - "troubleshot"
---

# Conditional role binding troubleshooting

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Conditional role bindings can be troubleshot directly from audit log entries.

## Extended Definition

Conditional role bindings can be troubleshot directly from audit log entries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/troubleshooting-withcond](https://docs.cloud.google.com/iam/docs/troubleshooting-withcond)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles](https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles)
- [https://docs.cloud.google.com/iam/docs/allow-policies](https://docs.cloud.google.com/iam/docs/allow-policies)
- [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles)

## Supporting Pages

### "Troubleshooting \"withcond\" in policies and role bindings \_|\_ Identity\

- URL: [https://docs.cloud.google.com/iam/docs/troubleshooting-withcond](https://docs.cloud.google.com/iam/docs/troubleshooting-withcond)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Policy versions and conditional role bindings An allow policy can be represented in several different forms.
- In an allow policy that uses version 1 , some role bindings might contain the string withcond in a role name, followed by a hash value: { "bindings" : [ { "members" : [ "user:dana@example.com" ], "role" : "roles/iam.serviceAccountAdmin withcond 2b17cc25d2cd9e2c54d8" } ], "etag" : "BwUjMhCsNvY=" , "version" : 1 } This format indicates that the role binding is conditional .
- The tool does not specify an allow policy version when it requests the allow policy, so you receive a version 1 allow policy with a modified role name: { "bindings" : [ { "members" : [ "user:mahan@example.com" ], "role" : "roles/iam.serviceAccountCreator withcond a75dc089e6fa084bd379" } ], "etag" : "BwWcR/B3tNk=" , "version" : 1 } At this point, the management tool might decide that the binding from Mahan to the role roles/iam.serviceAccountCreator has disappeared, and that it should restore the original role binding to the allow policy: Avoid: Additional role binding with no condition { "bindings" : [ { "members" : [ "user:mahan@example.com" ], "role" : "roles/iam.serviceAccountCreator withcond a75dc089e6fa084bd379" }, { "members" : [ "user:mahan@example.com" ], "role" : "roles/iam.serviceAccountCreator" } ], "etag" : "BwWd3HjhKxE=" , "version" : 1 } This change is not correct.
- The updated allow policy looks similar to this example: { "bindings" : [ { "members" : [ "user:mahan@example.com" ], "role" : "roles/iam.serviceAccountCreator" , "condition" : { "title" : "work week only" , "expression" : "request.time.getDayOfWeek('Europe/Berlin') >= 1 && request.time.getDayOfWeek('Europe/Berlin') <= 5" } } ], "etag" : "BwWcR/B3tNk=" , "version" : 3 } You use a tool to retrieve the updated allow policy.

### "Services that allow conditional role bindings \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles](https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security IAM Reference Send feedback Services that allow conditional role bindings Stay organized with collections Save and categorize content based on your preferences.
- However, some Google Cloud services don't allow conditional role bindings in their resources' allow policies.
- This page lists the services that allow conditional role bindings in their resources' allow policies.
- Identity and Access Management (IAM) lets you grant roles conditionally .

### "Understanding allow policies \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/allow-policies](https://docs.cloud.google.com/iam/docs/allow-policies)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- To grant the role to the new service account, update the allow policy as shown in this example: { "bindings" : [ { "members" : [ "deleted:serviceAccount:my-service-account@project-id.iam.gserviceaccount.com?uid=123456789012345678901" ], "role" : "roles/owner" }, { "members" : [ "serviceAccount:my-service-account@project-id.iam.gserviceaccount.com" ], "role" : "roles/resourcemanager.projectCreator" } ], "etag" : "BwUjMhCsNvY=" , "version" : 1 } To make it easier to audit your IAM allow policies, you can also remove the deleted user from the role binding to the Owner role: { "bindings" : [ { "members" : [ "deleted:serviceAccount:my-service-account@project-id.iam.gserviceaccount.com?uid=123456789012345678901" ], "role" : "roles/owner" }, { "members" : [ "user:donald@example.com" ], "role" : "roles/resourcemanager.projectCreator" } ], "etag" : "BwUjMhCsNvY=" , "version" : 1 } Note: If you remove a deleted principal from a role binding, then undelete the principal, the principal is not added back to the role binding.
- If the allow policy contains at least one conditional role binding, its version field is set to 3 : { "bindings" : [ { "members" : [ "user:tal@example.com" ], "role" : "roles/iam.securityReviewer" , "condition" : { "title" : "Expires July 1 2022" , "description" : "Expires on July 1, 2022" , "expression" : "request.time < timestamp('2022-07-01T00:00:00.000Z')" } } ], "etag" : "BwWKmjvelug=" , "version" : 3 } If the allow policy does not contain conditional role bindings, its version field is set to 1 , even though the request specified version 3 : { "bindings" : [ { "members" : [ "user:tal@example.com" ], "role" : "roles/iam.securityReviewer" , } ], "etag" : "BwWKmjvelug=" , "version" : 1 } Scenario 2: Policy version with limited support for IAM Conditions Suppose you call the following REST API method to get the allow policy for a project: POST https://cloudresourcemanager.googleapis.com/v1/projects/ project-id :getIamPolicy The request body is empty; it does not specify a version number.
- Example: Policy with conditional and unconditional role bindings Consider the following allow policy, which contains both conditional and unconditional role bindings for the same role: { "bindings" : [ { "members" : [ "serviceAccount:prod-dev-example@appspot.gserviceaccount.com" ], "role" : "roles/appengine.deployer" }, { "members" : [ "group:prod-dev@example.com" , "serviceAccount:prod-dev-example@appspot.gserviceaccount.com" ], "role" : "roles/appengine.deployer" , "condition" : { "title" : "Expires July 1 2022" , "description" : "Expires on July 1, 2022" , "expression" : "request.time < timestamp('2022-07-01T00:00:00.000Z')" } } ], "etag" : "BwWKmjvelug=" , "version" : 3 } In this example, the service account serviceAccount:prod-dev-example@appspot.gserviceaccount.com is included in two role bindings for the same role.
- Example: Policy with conditional role binding Consider the following allow policy, which binds principals to a predefined role and uses a condition expression to constrain the role binding: { "bindings" : [ { "members" : [ "group:prod-dev@example.com" , "serviceAccount:prod-dev-example@appspot.gserviceaccount.com" ], "role" : "roles/appengine.deployer" , "condition" : { "title" : "Expires July 1 2022" , "description" : "Expires on July 1, 2022" , "expression" : "request.time < timestamp('2022-07-01T00:00:00.000Z')" } } ], "etag" : "BwWKmjvelug=" , "version" : 3 } In this example, the version field is set to 3 , because the allow policy contains a condition expression.

### "Create and manage custom roles \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Important: Deleted roles are suspended and cannot be used to create new role bindings in allow policies.
- During this 30-day window, the role and all associated bindings are permanently removed, and you cannot create a new role with the same role ID.
- After a role is permanently deleted, all role bindings that refer to the role are removed, and you can create a new role using the same role ID.
- Learn about conditional role bindings , which grant a role only if specific conditions are met.

