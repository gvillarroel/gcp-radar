---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.406Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Principal access boundary policies"
feature_slug: "principal-access-boundary-policies"
latest_feature_date: "2024-06-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/pab-blocked-permissions"
  - "https://docs.cloud.google.com/iam/docs/conditions-attribute-reference"
  - "https://docs.cloud.google.com/iam/docs/conditions-overview"
  - "https://docs.cloud.google.com/iam/docs/manage-access-other-resources"
keywords:
  - "principal"
  - "access"
  - "boundary"
  - "policies"
  - "limit"
  - "the"
  - "resources"
  - "that"
---

# Principal access boundary policies

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Principal access boundary policies limit the resources that a principal is eligible to access.

## Extended Definition

Principal access boundary policies limit the resources that a principal is eligible to access.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions)
- [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference)
- [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview)
- [https://docs.cloud.google.com/iam/docs/manage-access-other-resources](https://docs.cloud.google.com/iam/docs/manage-access-other-resources)

## Supporting Pages

### "Permissions that principal access boundary policies block \_|\_ Identity\

- URL: [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions)
- Source ID: `site-api-reference`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- None reCAPTCHA recaptchaenterprise.googleapis.com/ None Resource Manager cloudresourcemanager.googleapis.com/ cloudresourcemanager.googleapis.com/ . createPolicyBinding cloudresourcemanager.googleapis.com/ . deletePolicyBinding cloudresourcemanager.googleapis.com/ . searchPolicyBindings cloudresourcemanager.googleapis.com/ . updatePolicyBinding Video Stitcher API videostitcher.googleapis.com/ None Enforcement version 1 The following table lists the permissions that principal access boundary policies with enforcement version 1 can block.
- Default enforcement version The default enforcement version is used for the following principal access boundary policies: New policies that don't specify a version number Policies that use the value latest for the version The current default enforcement version is version 3 .
- When principals try to access a resource that they aren't eligible to access, principal access boundary policies prevent them from using some, but not all, Identity and Access Management (IAM) permissions to access the resource.
- Each row contains the following information: The name of a service with permissions that principal access boundary policies can block.

### "Attribute reference for IAM Conditions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported principal subjects Google Accounts Identifier: user's email address Example: alex@example.com Workforce identity pool identities Identifier: identity's subject attribute value Example: raha@altostrat.com Workload identity pool identities Identifier: identity's subject attribute value Service accounts Identifier: service account's email address Example: my-service-account@my-project.iam.gserviceaccount.com Agent identity (Preview) Identifier: the Agent Identity, starting with resources/ Example: resources/aiplatform/projects/9876543210/locations/us-central1/reasoningEngines/my-test-agent Example Evaluates to true if the principal in the request ends with @example.com : principal.subject.endsWith("@example.com") Evaluates to true if the principal in the request starts with resources/aiplatform , which is true for agent identities that use the Vertex AI platform: principal.subject.startsWith("resources/aiplatform/") Evaluates to true if the principal in the request is example-service-account@example-project.iam.gserviceaccount.com : principal.subject == "example-service-account@example-project.iam.gserviceaccount.com" Request attributes Request attributes enable you to create conditions that evaluate details about the request, such as its access level, its date and time, the destination IP address and port (for IAP TCP tunneling), or the expected URL path/host (for IAP and Cloud Run).
- If you use Credential Access Boundaries to downscope short-lived credentials, you can create a Credential Access Boundary that limits permissions to list objects by checking the API attribute storage.googleapis.com/objectListPrefix .
- You can use principal attributes in policy bindings for principal access boundary policies. principal.type attribute The principal.type attribute lets you set a condition based on the type of principal issuing the request.
- For example, you could add a condition to a policy binding for a principal access boundary policy to ensure that the policy is only enforced for principals whose email addresses end with @example.com .

### "Overview of IAM Conditions \_|\_ Identity and Access Management (IAM) \_\

- URL: [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The attributes that you can evaluate include the following: The type of principal in the request The identity of the principal in the request You can use these attributes in policy bindings for principal access boundary policies.
- Conditions in principal access boundary policy bindings You can use conditions in policy bindings for principal access boundary policies to refine the principal set that the principal access boundary policy applies to.
- Example expressions In a role binding, the following condition expression allows access to Compute Engine VM instances, but no other type of resource: resource.type == 'compute.googleapis.com/Instance' In a role binding, the following condition expression allows access to Cloud Storage resources, but no other service's resources: resource.service == 'storage.googleapis.com' In a role binding, the following condition expression allows access only to Cloud Storage objects inside a specific bucket: resource.type == 'storage.googleapis.com/Object' && resource.name.startsWith('projects/ /buckets/exampleco-site-assets/') In a deny rule, the following condition expression denies access to Google Cloud resources that have the tag env: prod : resource.matchTag('123456789012/env', 'prod') Principal attributes The principal attributes let you write conditions based on the principal that issued the request.
- Example expressions In a principal access boundary policy binding, the following condition expression ensures that the policy in the binding is only enforced for service accounts: principal.type == 'iam.googleapis.com/ServiceAccount' In a principal access boundary policy binding, the following condition expression ensures that the policy in the binding isn't enforced for super-admin@example.com : principal.subject != 'super-admin@example.com' Request attributes You can use request attributes to write conditions that evaluate details about the request, such as the following: The access level The date and time The destination IP address and port (for IAP TCP tunneling) The expected URL host or path (for IAP) You can use these attributes in allow policy role bindings.

### "Manage access to other resources \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/manage-access-other-resources](https://docs.cloud.google.com/iam/docs/manage-access-other-resources)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the Show inherited permissions switch is on, the list includes principals with inherited roles; that is, principals whose access comes from roles on parent resources rather than roles on the resource itself.
- This page describes the general process for granting, changing, and revoking access to resources that accept allow policies.
- Grant or revoke multiple IAM roles programmatically To make large-scale access changes that involve granting and revoking multiple roles for multiple principals, use the read-modify-write pattern to update the resource's allow policy: Read the current allow policy by calling getIamPolicy() .
- Grant or revoke multiple IAM roles using Google Cloud console You can use the Google Cloud console to grant and revoke multiple roles for a single principal: In the Google Cloud console, go to the page listing the resource that you want to view access to.

