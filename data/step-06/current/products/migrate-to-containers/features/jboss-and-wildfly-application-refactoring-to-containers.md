---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.801Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "JBoss and WildFly application refactoring to containers"
feature_slug: "jboss-and-wildfly-application-refactoring-to-containers"
latest_feature_date: "2022-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/getting-started"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components"
keywords:
  - "jboss"
  - "wildfly"
  - "application"
  - "refactoring"
  - "containers"
  - "applications"
  - "running"
  - "enterprise"
---

# JBoss and WildFly application refactoring to containers

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Applications running on JBoss Enterprise Application Platform or WildFly can be refactored into containers deployable on GKE, GKE Autopilot, Anthos clusters, and Cloud Run.

## Extended Definition

Applications running on JBoss Enterprise Application Platform or WildFly can be refactored into containers deployable on GKE, GKE Autopilot, Anthos clusters, and Cloud Run.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/getting-started](https://docs.cloud.google.com/migrate/containers/docs/getting-started)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)

## Supporting Pages

### "Customize migration plan for JBoss servers \_|\_ Migrate to Containers \_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Edit this to change the artifacts naming. serverName: jboss-server JBoss home directory. home: /opt/jboss/wildfly Parent Wildfly image for the generated container image. fromImage: docker.io/jboss/wildfly:10.1.0.Final JBoss home directory in the target image. targetImageHome: /opt/wildfly Configuration file path from source VM. configurationFile: /opt/jboss/wildfly/standalone/configuration/standalone.xml Ports list to expose on the generated container image. ports: - name: management-http port: 9990 - name: management-https port: 9993 - name: ajp port: 8009 - name: http port: 8080 - name: https port: 8433 - name: txn-recovery-environment port: 4712 - name: txn-status-manager port: 4713 List of deployments files to copy. deployments: directory: /opt/jboss/wildfly/standalone/deployments applications: - test.war List of modules to copy in rsync filter format.
- If includeSensitiveData is set to true the sensitive data is mounted on the container. sensitiveData: includeSensitiveData: false sensitiveDataPaths: - /opt/jboss/wildfly/standalone/configuration/application-roles.properties - /opt/jboss/wildfly/standalone/configuration/application-users.properties - /opt/jboss/wildfly/standalone/configuration/application.keystore - /opt/jboss/wildfly/standalone/configuration/mgmt-groups.properties - /opt/jboss/wildfly/standalone/configuration/mgmt-users.properties To add information as needed, review your migration plan details and guiding comments.
- Note: files under '/system/layers/base/' are JBoss/Wildfly binaries and should be copied only if they have been modified. modules: - '- system/layers/base' External paths required for running the JBoss server or apps. additionalFiles: [] Sensitive data which is filtered out of the container image.
- If you want to change the Docker community image, or provide your own docker image, you can modify the fromImage tag in your migration plan using the following format: Parent Wildfly image for the generated container image. fromImage : docker.io/jboss/wildfly:10.1.0.Final The targetImageHome field specifies the path of the JBoss home directory in the target image, and is derived from the fromImage field.

### Migrate to Containers overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/getting-started](https://docs.cloud.google.com/migrate/containers/docs/getting-started)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can migrate applications from supported source platforms to the following: Google Kubernetes Engine (GKE) and Autopilot clusters Cloud Run About Migrate to Containers integration with Cloud Code The Migrate to Containers integration with the Cloud Code gives you the ability to migrate applications from VMs to containers running on GKE, directly in Visual Studio, using a Linux machine.
- Migrate to Containers supports modernization of IBM WebSphere, JBoss, Apache, Tomcat, WordPress, Windows IIS applications, as well as containerisation of Linux-based applications.
- Migrate to Containers overview Use Migrate to Containers to modernize traditional applications away from virtual machine (VM) instances and into native containers that run on Google Kubernetes Engine (GKE) or Cloud Run platform.
- GKE Enterprise relies on GKE clusters on Google Cloud or Google Distributed Cloud to manage Kubernetes installations in the environments where you intend to deploy your applications.

### "Review compatible OS, workloads, and Kubernetes versions \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported workloads Migrate to Containers CLI supports modernization of workloads listed in the following table: Workload Type (if applicable) Supported versions Linux VM container VMs running 64-bit Linux-based operating systems Linux-based workloads Tomcat Apache Tomcat version 8.5 - 10.0 Apache Apache HTTP Server version 2.4 JBoss WildFly (formerly known as JBoss Application Server) version 8.1.0 - 26.1.1 JBoss Enterprise Application Platform version 7.0 - 7.4 WebSphere WebSphere Application Server traditional version 8.55 and 9.05 All versions of WebSphere Application Server Liberty WordPress sites WordPress version 4.0 or later running on Apache HTTP Server version 2.4 Windows IIS application Microsoft Internet Information Services version 7 or later Note: For workloads that use a Java-based plugin, Migrate to Containers CLI only supports Java SE version 8 or later.
- Windows IIS application For Windows IIS applications, Migrate to Containers CLI supports all versions of Windows-based nodes.
- Windows IIS application Migrate to Containers CLI supports the Windows operating systems listed in the following table: OS Compute Engine Windows Microsoft Windows Server 2008R2 or later ASP.NET and .NET Framework version 3.5 or later Warning: Dynamic disks have been deprecated by Microsoft, and have severe limitations with snapshots.
- Note: It is recommended to avoid running the Migrate to Containers CLI in Cloud Shell where the provisioned disk has only 5 GB of storage.

