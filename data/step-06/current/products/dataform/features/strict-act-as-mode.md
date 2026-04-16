---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.732Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Strict act-as mode"
feature_slug: "strict-act-as-mode"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/strict-act-as-mode"
  - "https://docs.cloud.google.com/dataform/docs/create-repository"
  - "https://docs.cloud.google.com/dataform/docs/repositories"
  - "https://docs.cloud.google.com/dataform/docs/access-control"
keywords:
  - "strict"
  - "act"
  - "as"
  - "mode"
  - "requires"
  - "users"
  - "to"
  - "have"
---

# Strict act-as mode

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Strict act-as mode requires users to have iam.serviceAccounts.actAs on the service account used to run Dataform workflows; Strict act-as mode adds an additional security check for certain user actions in Dataform.

## Extended Definition

Strict act-as mode requires users to have iam.serviceAccounts.actAs on the service account used to run Dataform workflows; Strict act-as mode adds an additional security check for certain user actions in Dataform.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode)
- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)
- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)

## Supporting Pages

### Use strict act-as mode \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode)
- Source ID: `site-docs-root-2`
- Final score: 354
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the required roles for creating a workflow configuration and required roles for creating a release configuration Effects of strict act-as mode on automatic releases and runs When strict act-as mode is enabled, it impacts automatic repository releases and automatic workflow executions as follows: For repositories that aren't connected to third-party repositories: You can't set a Cron schedule for automatic releases in release configurations.
- Important: For existing repositories, we recommend enabling strict act-as mode, as this helps to ensure a more secure and predictable permissions model for your Dataform projects.
- The strict act-as mode enables an additional security check for the following user actions in Dataform: Creating or updating a repository.
- This additional security check requires that the user performing these actions has the iam.serviceAccounts.actAs permission on the effective service account, which is the service account whose credentials are used to run workflows.

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For existing repositories, we recommend using custom service accounts and enabling strict act-as mode to ensure a more secure and predictable permissions model.
- Strict act-as mode Enables an additional security check that requires the iam.serviceAccounts.actAs permission on the service account.
- For new repositories, strict act-as mode is enforced.
- For details on these checks, see Use strict act-as mode .

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For existing repositories, we recommend using custom service accounts and enabling strict act-as mode to ensure a more secure and predictable permissions model.
- Strict act-as mode Enables an additional security check that requires the iam.serviceAccounts.actAs permission on the service account.
- For new repositories, strict act-as mode is enforced.
- For details on these checks, see Use strict act-as mode .

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: We recommend enabling strict act-as mode on existing repositories, as this helps to ensure a more secure and predictable permissions model for your Dataform projects.
- To mitigate this risk, we recommend enabling strict act-as mode on existing repositories.
- These roles are required for strict act-as mode to work.
- The following command passes the repositories.setIamPolicy Dataform API request that grants the Dataform Viewer role on the sales repository to allAuthenticatedUsers : curl -H "Content-Type: application/json" -X POST -d '{ "policy": { "bindings": [{ "role": "roles/dataform.viewer", "members": ["allAuthenticatedUsers"]}] }}' "https://dataform.googleapis.com/v1/projects/examplepetstore/locations/us-central1/repositories/sales:setIamPolicy" Prevent public access to repositories To ensure that no access is granted to the public on any Dataform repository, you can restrict the allAuthenticatedUsers principal in your project.

