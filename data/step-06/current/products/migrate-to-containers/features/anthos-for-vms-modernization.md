---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.815Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Anthos for VMs modernization"
feature_slug: "anthos-for-vms-modernization"
latest_feature_date: "2022-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration"
  - "https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
keywords:
  - "anthos"
  - "vms"
  - "modernization"
  - "traditional"
  - "can"
  - "modernized"
  - "run"
---

# Anthos for VMs modernization

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Traditional VMs can be modernized to run on Anthos for VMs.

## Extended Definition

Traditional VMs can be modernized to run on Anthos for VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)
- [https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits](https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)

## Supporting Pages

### "Customize migration plan for WebSphere traditional workloads \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- If you're new to WebSphere workload modernization, then use the websphere-container plugin with the Migrate to Containers CLI instead.
- Customize migration plan for WebSphere traditional workloads Important: The websphere-traditional plugin is now deprecated.

### "Benefits of migrating to containers \_|\_ Migrate to Containers \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits](https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By taking advantage of the GKE and GKE Enterprise ecosystems, Migrate to Containers provides a fast and simple way to move to modernized orchestration and application management.
- Modernization and management can be done without requiring access to source code, rewriting, or rearchitecting applications.

### Create a migration plan \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- To retrieve this value, check the running WebSphere Application Server traditional process: ps aux grep WAS HOME Run the analysis To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p websphere-traditional-container -o ANALYSIS OUTPUT PATH \ -r was-home= PATH TO WAS HOME \ --volume PATH TO BINARYAPPSCANNER :/binaryAppScanner.jar Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory.
- What's next Learn how to customize the migration plan for the following: Linux VMs Tomcat WebSphere Liberty WebSphere traditional JBoss Apache WordPress Windows IIS services Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Retrieve WAS HOME The WAS HOME environment variable specifies where WebSphere Application Server traditional is installed, such as /opt/IBM/WebSphere/AppServer/ .
- If you want to migrate WebSphere traditional workloads, or perform a migration between different Java environments, you can set up the binaryAppScanner.jar .

