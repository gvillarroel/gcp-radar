---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.752Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Release configurations"
feature_slug: "release-configurations"
latest_feature_date: "2023-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/configure-compilation"
  - "https://docs.cloud.google.com/dataform/docs/best-practices-repositories"
  - "https://docs.cloud.google.com/dataform/docs/overview"
  - "https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle"
keywords:
  - "release"
  - "configurations"
  - "let"
  - "dataform"
  - "configure"
  - "execution"
  - "environments"
  - "such"
---

# Release configurations

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Release configurations let Dataform configure execution environments such as staging and production.

## Extended Definition

Release configurations let Dataform configure execution environments such as staging and production.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- [https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle](https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle)

## Supporting Pages

### Configure compilations \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- Source ID: `site-docs-root-2`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataform release configurations and workflow configurations let you configure compilation and schedule executions within Dataform, without the need to rely on additional services.
- You can use release configurations to configure execution environments, for example, staging and production.
- In a release configuration, you can configure the following compilation overrides: Google Cloud project Table prefix Schema suffix Value of a compilation variable You can create multiple release configurations in a Dataform repository, one for each stage of your development lifecycle, creating isolated repository compilation results.
- Release configurations You can create release configurations to configure templates for creating compilation results of a Dataform repository.

### Best practices for repositories \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execution environments in a single repository You can create isolated execution environments such as development, staging, and production in a single Dataform repository with workspace compilation overrides and release configurations .
- To manage code lifecycle in Dataform, you can create execution environments such as development, staging, and production.
- Best practices for repository size Repository size impacts multiple aspects of development in Dataform, such as the following: Collaboration Codebase readability Development processes Workflow compilation Workflow execution Dataform enforces API quotas and limits on compilation resources .
- To customize compilation and execution in each copy of the repository, use workspace compilation overrides , release configurations , and workflow configurations .

### Dataform overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With release configurations , you can configure templates of compilation settings for creating compilation results of a Dataform repository.
- You can schedule Dataform runs in BigQuery in the following ways: Create workflow configurations to schedule runs of compilation results created in release configurations Schedule runs with Cloud Composer Schedule runs with Workflows and Cloud Scheduler You can also automate runs with Cloud Build triggers .
- Dataform repositories contain the following types of files: Config files Config JSON or SQLX files let you configure your workflows.
- The following Dataform API methods don't comply with the AIP.134 guidelines by treating the wildcard entry as a bad request and by updating all fields instead of set fields when field mask is omitted: releaseConfigs - patch repositories - patch updateConfig workflowConfigs - patch If a scheduled workflow configuration run doesn't finish before the start of the next scheduled run, the next scheduled run is skipped and marked with an error.

### "Best practices for the workflow lifecycle \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle](https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In workflow settings.yaml , configure the following settings: defaultProject : enterprise-dev defaultDataset : analytics In dataform.json , configure the following settings: { de fault Schema : "analytics" , de fault Da ta base : "enterprise-dev" } Workspace overrides Schema suffix: "${workspaceName}" staging release configuration Git commitish: "main" Google Cloud project ID: "enterprise-staging" prod release configuration Git commitish: "prod" Google Cloud project ID: "enterprise-prod" To schedule runs of staging and production compilation results, create two separate workflow configurations with custom schedules that best fit your needs.
- These solutions let you create execution environments within a single Dataform repository and Google Cloud project.
- In workflow settings.yaml , configure the following settings: defaultProject : enterprise-dev defaultDataset : analytics In dataform.json , configure the following settings: { de fault Schema : "analytics" , de fault Da ta base : "enterprise-dev" } Workspace overrides Schema suffix: "${workspaceName}" Release configuration Git commitish: "main" Google Cloud project ID: "enterprise-prod" To schedule runs of production compilation results, create a workflow configuration with a custom schedule that best fits your needs.
- In workflow settings.yaml configure the following settings: defaultProject : enterprise-analytics defaultDataset : analytics In dataform.json , configure the following settings: { de fault Schema : "analytics" , de fault Da ta base : "enterprise-analytics" } Workspace overrides Schema suffix: "dev" Release configuration Git commitish: "main" To schedule runs of production compilation results, create a workflow configuration .

