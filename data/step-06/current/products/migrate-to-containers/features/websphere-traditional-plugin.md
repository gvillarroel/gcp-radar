---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.783Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "WebSphere Traditional plugin"
feature_slug: "websphere-traditional-plugin"
latest_feature_date: "2023-11-29"
deprecation_date: "2023-11-29"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
keywords:
  - "websphere"
  - "traditional"
  - "plugin"
  - "workload"
  - "modernization"
  - "deprecated"
  - "2023"
  - "11"
---

# WebSphere Traditional plugin

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The WebSphere Traditional plugin for workload modernization is deprecated; deprecated on 2023-11-29.

## Extended Definition

The WebSphere Traditional plugin for workload modernization is deprecated; deprecated on 2023-11-29.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)

## Supporting Pages

### "Customize migration plan for WebSphere traditional workloads \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customize migration plan for WebSphere traditional workloads Important: The websphere-traditional plugin is now deprecated.
- If you're new to WebSphere workload modernization, then use the websphere-container plugin with the Migrate to Containers CLI instead.
- For existing customers, this plugin is still supported till December 2023, after which it will no longer be available.
- If you do not want to migrate all applications, you can remove them. applications: - appName: hello-world-servlet-ear httpEndpoints: - httpPort: 9080 httpsPort: 9443 id: defaulthttpendpoint image: name: hello-world-servlet-ear path: /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/config/cells/m4a-twas-ndNode01Cell/applications/Hello-World-Servlet.ear … - appName: commons-ejb-ear-provided-ear httpEndpoints: - httpPort: 9080 httpsPort: 9443 id: defaulthttpendpoint image: name: commons-ejb-ear-provided-ear path: /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/config/cells/m4a-twas-ndNode01Cell/applications/commons-ejb-ear-provided.ear sharedLibraries: - /opt/IBM/WebSphere/AppServer/sharedJars/commons-io-2.8.0.jar Set the scanner options In the migration plan, the scannerOptions field represents the argument to pass to the IBM WebSphere Application Server Migration Toolkit for Application Binaries .

### Create a migration plan \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a migration plan for WebSphere traditional workloads Important: The websphere-traditional plugin is now deprecated.
- If you're new to WebSphere workload modernization, then use the websphere-container plugin with the Migrate to Containers CLI instead.
- If you want to migrate WebSphere traditional workloads, or perform a migration between different Java environments, you can set up the binaryAppScanner.jar .
- To retrieve this value, check the running WebSphere Application Server traditional process: ps aux grep WAS HOME Run the analysis To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p websphere-traditional-container -o ANALYSIS OUTPUT PATH \ -r was-home= PATH TO WAS HOME \ --volume PATH TO BINARYAPPSCANNER :/binaryAppScanner.jar Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory.

### "Review compatible OS, workloads, and Kubernetes versions \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported workloads Migrate to Containers CLI supports modernization of workloads listed in the following table: Workload Type (if applicable) Supported versions Linux VM container VMs running 64-bit Linux-based operating systems Linux-based workloads Tomcat Apache Tomcat version 8.5 - 10.0 Apache Apache HTTP Server version 2.4 JBoss WildFly (formerly known as JBoss Application Server) version 8.1.0 - 26.1.1 JBoss Enterprise Application Platform version 7.0 - 7.4 WebSphere WebSphere Application Server traditional version 8.55 and 9.05 All versions of WebSphere Application Server Liberty WordPress sites WordPress version 4.0 or later running on Apache HTTP Server version 2.4 Windows IIS application Microsoft Internet Information Services version 7 or later Note: For workloads that use a Java-based plugin, Migrate to Containers CLI only supports Java SE version 8 or later.
- Source VM operating systems Linux VM container Migrate to Containers CLI supports migrations of VMs to containers on Google Kubernetes Engine on the 64-bit Linux operating systems listed in the following table: OS Compute Engine VMware CentOS 6.0 7.0 7.0 UEFI 8.0 6.7 6.9 7.6 Debian 7.0 8.0 9.0 10.0 9.4 9.6 RHEL 6.0 7.0 7.0 UEFI 7.4 SAP 7.6 SAP 8.0 6.5 7.5 7.6 8.3 SUSE 12 12 SP3 SAP 12 SP4 SAP 15 15 SAP 15 SP1 SAP 12 SP2 12 SP3 12 SP4 15 Ubuntu 12 LTS 14 LTS 16 LTS 16 LTS minimal 18 LTS 18 LTS minimal 18 LTS UEFI 19.04 19.04 minimal 12.04.5 LTS 14.04 LTS 16.04 LTS 18.04.10 LTS Linux-based workloads For Linux-based workloads, Migrate to Containers CLI supports all Linux-based operating systems.
- Windows IIS application Migrate to Containers CLI supports the Windows operating systems listed in the following table: OS Compute Engine Windows Microsoft Windows Server 2008R2 or later ASP.NET and .NET Framework version 3.5 or later Warning: Dynamic disks have been deprecated by Microsoft, and have severe limitations with snapshots.
- Review compatible OS, workloads, and Kubernetes versions This document lists operating systems, supported workloads, and Kubernetes versions that have been tested with Migrate to Containers CLI.

