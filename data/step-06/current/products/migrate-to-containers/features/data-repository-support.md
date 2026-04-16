---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.860Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Data repository support"
feature_slug: "data-repository-support"
latest_feature_date: "2021-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/convert-runtime"
  - "https://docs.cloud.google.com/migrate/containers/docs/migration-journey"
keywords:
  - "repository"
  - "migrate"
  - "anthos"
  - "supports"
  - "additional"
  - "repositories"
  - "including"
  - "amazon"
---

# Data repository support

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Migrate for Anthos supports additional data repositories, including Amazon ECR, Amazon S3, and Docker registries with basic authentication.

## Extended Definition

Migrate for Anthos supports additional data repositories, including Amazon ECR, Amazon S3, and Docker registries with basic authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- [https://docs.cloud.google.com/migrate/containers/docs/migration-journey](https://docs.cloud.google.com/migrate/containers/docs/migration-journey)

## Supporting Pages

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- To run additional services in the migrated container, add entries to the windowsServices section, and copy the necessary binaries in the useractions section . version: v1 globalSettings: target: … globalIIS: … images: - name: migrated-image-zgwb2 workloads: sites: site: - applications: ... bindings: - port: 80 protocol: http name: Default Web Site … windowsServices: - MyService useractions: files: - source: C:\Program Files\MyService target: C:\Program Files\MyService registry: currentcontrolset: - key: services\MyService The useractions section The useractions section specifies additional files and registry keys that you might want to migrate.
- You can modify the PATH environment variables by editing the members of pathEnvVarAdditionalEntries : pathEnvVarAdditionalEntries : - "C:\\myDllsFolder" - "C:\\ProgramData\\SomeSoftware" Edit the image section You might want to edit the image section in the following cases: Some suggested features are not be required by the migrated sites.
- Migrate to Containers only supports a value of System.Data.SqlClient . supports the .NET Framework data provider: System.Data.SqlClient System.Data.OleDb System.Data.Odbc System.Data.OracleClient connectionstring specifies the Connection Strings used to connect to the data provider.
- However, some workloads might require running additional services (including a database, logging mechanism, proxy, and more) in order to function correctly.

### "Upgrade container workloads for enhanced runtime \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Set the product version to 1.15.0: FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...
- Set the product version to 1.15.0: FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...
- FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...
- FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...

### "Migration journey for GKE, GKE Enterprise, and Cloud Run \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migration-journey](https://docs.cloud.google.com/migrate/containers/docs/migration-journey)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migration journey for GKE, GKE Enterprise, and Cloud Run To migrate your VMs from your source environment to containers running in Google Cloud, we recommend that you follow the framework described in the Migration to Google Cloud series .
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- In this phase, you assess your source environment, assess the workloads that you want to migrate to Google Cloud, and assess which VMs support each workload.
- In this phase, you create the basic infrastructure for Migrate to Containers, such as provisioning the resource hierarchy and setting up network access.

