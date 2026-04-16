---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.876Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Google Cloud Console support"
feature_slug: "google-cloud-console-support"
latest_feature_date: "2020-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration"
  - "https://docs.cloud.google.com/migrate/containers/docs/monitoring-migrated-workloads"
keywords:
  - "console"
  - "enables"
  - "workload"
  - "migration"
  - "management"
  - "through"
  - "installing"
  - "migrate"
---

# Google Cloud Console support

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Enables workload migration management through Google Cloud Console; Enables installing Migrate for Anthos on a processing cluster and creating a Compute Engine migration source from Google Cloud Console.

## Extended Definition

Enables workload migration management through Google Cloud Console; Enables installing Migrate for Anthos on a processing cluster and creating a Compute Engine migration source from Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration)
- [https://docs.cloud.google.com/migrate/containers/docs/monitoring-migrated-workloads](https://docs.cloud.google.com/migrate/containers/docs/monitoring-migrated-workloads)

## Supporting Pages

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Migrate to Containers creates an additional archive file with modified log configurations and convert all file type appenders to console appenders.
- Memory allocation During the migration process, you can specify the memory limits of applications migrated to individual containers.
- The details of your migration plan are used to extract the workload container artifacts from the source.

### "Monitor migrated workloads \_|\_ Migrate to Containers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/monitoring-migrated-workloads](https://docs.cloud.google.com/migrate/containers/docs/monitoring-migrated-workloads)
- Source ID: `site-docs-root-2`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitor migrated workloads You can view logs and metrics from your migrated workloads in the Google Cloud console.
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You can execute bash commands on the container with your migrated workload.
- You can use Cloud Logging to view logs for the following aspects of your migration: Logs written to stdout by processes launched by init .

### "Customize migration plan for WebSphere workloads \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- To migrate these files as is, you can disable this feature. applications: - path: app.war resources: keystores: - key.p12 targetContainer: Do not migrate keystores to Kubernetes secrets: enableSecrets: false Customize Kubernetes ports To control which ports are exposed by Kubernetes Pods and Services, update the ports field. applications: - path: app.war targetContainer: ports: Exclude http-tcp-9080: - name: http-tcp-9080 port: 9080 protocol: TCP Include https-tcp-9443: - name: https-tcp-9443 port: 9443 protocol: TCP What's next Learn how to execute the migration .
- Defaults to true. enableSecrets : true Exclude applications To exclude applications from the migration, remove them from the applications list. applications: Exclude app1.war: - path: app1.war ... - path: app2.war Control application files To control which application files are included or excluded from the migration, update the configurations and resources fields. applications: - path: app.war resources: keystores: Exclude key1.p12: - key1.p12 Include key2.p12: - key2.p12 additionalResources: Exclude resource1.xml: - resource1.xml Include resource2.xml: - resource2.xml Customize the target Java runtime To customize the target Java runtime for the application, update the targetJavaRuntime field. applications : - path : app . war targetJavaRuntime : se : SE ee : EE vendor : VENDOR Replace the following: SE : the Java SE version.
- Customize migration plan for WebSphere workloads Before you begin This document assumes that you've already created a migration and have the migration plan file.
- Migration plan structure The migration plan for WebSphere workloads has the following structure, which you can customize as described in the following sections.

