---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.796Z"
product_name: "Policy Intelligence"
product_slug: "policy-intelligence"
feature_name: "Policy Simulator for principal access boundary policies"
feature_slug: "policy-simulator-for-principal-access-boundary-policies"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview"
  - "https://docs.cloud.google.com/policy-intelligence/docs/iam-simulator-overview"
  - "https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview"
  - "https://docs.cloud.google.com/policy-intelligence/docs/overview"
keywords:
  - "policy"
  - "simulator"
  - "for"
  - "principal"
  - "access"
  - "boundary"
  - "policies"
  - "can"
---

# Policy Simulator for principal access boundary policies

Product: Policy Intelligence
Coverage: MEDIUM

## Step 02 Summary

Policy Simulator can simulate changes to principal access boundary policies before they are applied.

## Extended Definition

Policy Simulator can simulate changes to principal access boundary policies before they are applied.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/iam-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/iam-simulator-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/overview](https://docs.cloud.google.com/policy-intelligence/docs/overview)

## Supporting Pages

### "Policy Simulator for principal access boundary policies \_|\_ Policy Intelligence\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview)
- Source ID: `site-iam-reference`
- Final score: 435
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Policy Simulator calculates access changes using the following information: The result of the most recent access attempt The impact of the current principal access boundary policies and bindings The impact of the proposed principal access boundary policies and bindings For access to be gained , all of the following must be true: The most recent access attempt was blocked Access is blocked by the current principal access boundary policies and bindings Access is not blocked by the proposed principal access boundary policies and bindings For access to be revoked , all of the following must be true: The most recent access attempt was not blocked Access is not blocked by the current principal access boundary policies and bindings Access is blocked by the proposed principal access boundary policies and bindings A set of principal access boundary policies and bindings block a principal's access if all of the following are true: principal access boundary policies do affect the principal's access.
- To learn how to simulate changes to other policy types, see the following: Policy Simulator for allow policies Policy Simulator for deny policies Policy Simulator for organization policies How Policy Simulator for principal access boundary policies works Policy Simulator for principal access boundary policies helps you determine how a change to a principal access boundary policy or policy binding affects access for principals in your organization.
- When you run a simulation for a principal access boundary policy or policy binding, Policy Simulator does the following: Reviews access logs from the organization that were generated during the replay period in the context of the current principal access boundary policies and bindings and the simulated principal access boundary policy or binding.
- Supported principal types Policy Simulator for principal access boundary policies only reviews access logs for the following types of principals: Google Accounts Service accounts When simulating principal access boundary policies and bindings, Policy Simulator doesn't review access logs for any other principal types.

### "Policy Simulator for allow policies \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/iam-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/iam-simulator-overview)
- Source ID: `site-docs-root`
- Final score: 355
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to simulate other policy types, see the following: Policy Simulator for deny policies Policy Simulator for organization policies Policy Simulator for principal access boundary policies How Policy Simulator for allow policies works Policy Simulator for allow policies helps you determine what impact a change to an allow policy might have for your users.
- Policy Simulator for Identity and Access Management allow policies lets you see how a change to an allow policy might affect a principal's access before you commit to making the change.
- Supported resource types Policy Simulator supports only the following resource types: Service Supported resource types Cloud Storage buckets Pub/Sub snapshots subscriptions topics Cloud SQL backupRuns databases instances sslCerts users Spanner backups backupOperations databases databaseOperations instanceConfigs instanceOperations instances sessions Resource Manager folders organizations projects Compute Engine instances Unsupported resource types Unsupported resource types are resource types that Policy Simulator cannot retrieve access logs for.
- Access potentially gained This result can occur for the following reasons: The principal did not have access under the current allow policy, but their access after the proposed change is unknown .

### "Policy Simulator for deny policies \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview)
- Source ID: `site-iam-reference`
- Final score: 351
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to simulate other policy types, see the following: Policy Simulator for organization policies Policy Simulator for allow policies Policy Simulator for principal access boundary policies How Policy Simulator for deny policies works Policy Simulator for deny policies helps you determine whether a change to a deny policy will block access that your principals are using.
- Supported principal types Policy Simulator for deny policies only reviews access logs for the following types of principals: Google Workspace Accounts Service accounts Service account principal sets for projects, folders, and organizations Service agents Service agent principal sets for projects, folders, and organizations When simulating deny policies, Policy Simulator doesn't review access logs for any other principal types, including those based on federated identities in a workload identity pool.
- Policy Simulator for deny policies lets you see how a change to an IAM deny policy might affect a principal's access before you commit to making the change.
- Policy Simulator reports that access is revoked if the following are true: The principal's most recent attempt to access the resource was successful The proposed changes or another deny policy block the principal's access to the resource For each access change, Policy Simulator also reports the following information: The principal, resource, and permission involved in the access attempt.

### Policy Intelligence overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/overview](https://docs.cloud.google.com/policy-intelligence/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test changes to access-related policies To let you see how a change to an access-related policy might affect your principals' access, Policy Intelligence provides the following policy simulators: Policy Simulator for allow policies Policy Simulator for deny policies Policy Simulator for principal access boundary policies Each of these simulators lets you see how a change to a policy of that type would affect access for your principals before you commit to making the change.
- Analyze access Cloud Asset Inventory provides Policy Analyzer for IAM allow policies, which lets you find out what principals have access to which Google Cloud resources based on your IAM allow policies .
- To learn how to manage role recommendations, see one of the following guides: Review and apply role recommendations for projects, folders, and organizations Review and apply role recommendations for Cloud Storage buckets Review and apply role recommendations for BigQuery datasets Prevent policy misconfigurations There are several Policy Intelligence tools that you can use to see how changes to policies will impact your organization.
- Policy Intelligence provides Policy Analyzer for Organization Policy, which you can use to create an analysis query to get information on both custom and predefined organization policies.

