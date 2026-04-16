---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.821Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Migration fit assessment tool"
feature_slug: "migration-fit-assessment-tool"
latest_feature_date: "2022-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/fit-assessment"
  - "https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration"
keywords:
  - "migration"
  - "fit"
  - "assessment"
  - "tool"
  - "migrate"
  - "containers"
  - "includes"
  - "evaluates"
---

# Migration fit assessment tool

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Migrate to Containers includes a fit assessment tool that evaluates whether a VM workload is suitable for container migration.

## Extended Definition

Migrate to Containers includes a fit assessment tool that evaluates whether a VM workload is suitable for container migration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/fit-assessment](https://docs.cloud.google.com/migrate/containers/docs/fit-assessment)
- [https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview](https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)

## Supporting Pages

### Migration Center discovery client CLI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/fit-assessment](https://docs.cloud.google.com/migrate/containers/docs/fit-assessment)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migration Center provides advanced migration recommendations and planning capabilities, however, if you're working with sensitive data and don't want to upload it to Google Cloud, you can choose to run an offline assessment instead.
- These asset discoveries scan the physical servers, virtual machine (VM) instances, and databases in your infrastructure to collect the necessary information for a successful migration assessment to Google Cloud.
- The Migration Center discovery client CLI ( mcdc CLI) is an offline tool that lets you run different types of asset discoveries on your infrastructure.
- Home Documentation Migration Migration Center Guides Send feedback Migration Center discovery client CLI overview Stay organized with collections Save and categorize content based on your preferences.

### "Offline assessment overview \_|\_ Migrate to Containers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview](https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview)
- Source ID: `site-docs-root-2`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Offline assessment overview The Migration Center discovery client CLI or mcdc CLI lets you run an offline assessment with the information that you collected in the discovery phase.
- The offline assessment creates reports that provide you with a high-level fit assessment result for migration and potential blockers for different migration journeys.
- The offline assessment also describes any issues that must be resolved before the migration.

### "Customize migration plan for WebSphere traditional workloads \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you do not want to migrate all applications, you can remove them. applications: - appName: hello-world-servlet-ear httpEndpoints: - httpPort: 9080 httpsPort: 9443 id: defaulthttpendpoint image: name: hello-world-servlet-ear path: /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/config/cells/m4a-twas-ndNode01Cell/applications/Hello-World-Servlet.ear … - appName: commons-ejb-ear-provided-ear httpEndpoints: - httpPort: 9080 httpsPort: 9443 id: defaulthttpendpoint image: name: commons-ejb-ear-provided-ear path: /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/config/cells/m4a-twas-ndNode01Cell/applications/commons-ejb-ear-provided.ear sharedLibraries: - /opt/IBM/WebSphere/AppServer/sharedJars/commons-io-2.8.0.jar Set the scanner options In the migration plan, the scannerOptions field represents the argument to pass to the IBM WebSphere Application Server Migration Toolkit for Application Binaries .
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You can edit the arguments. scannerOptions : Setting 'includeSensitiveData: true' will upload sensitive data, if exists, such as private keys, to the artifacts repository includeSensitiveData : false sourceAppServer : was90 Note: In order to collect sensitive data, in the migration plan, under scannerOptions , modify the value of includeSensitiveData: to be true .
- If you're new to WebSphere workload modernization, then use the websphere-container plugin with the Migrate to Containers CLI instead.

