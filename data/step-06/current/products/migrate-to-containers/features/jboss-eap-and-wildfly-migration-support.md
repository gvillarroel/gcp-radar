---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.791Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "JBoss EAP and WildFly migration support"
feature_slug: "jboss-eap-and-wildfly-migration-support"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components"
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart"
keywords:
  - "jboss"
  - "eap"
  - "wildfly"
  - "migration"
  - "migrate"
  - "containers"
  - "supports"
  - "26"
---

# JBoss EAP and WildFly migration support

Product: Migrate to Containers
Coverage: LOW

## Step 02 Summary

Migrate to Containers supports migration of JBoss EAP 7.0-7.4 and WildFly 8.1.0-26.1.1 to equivalent WildFly-based container images.

## Extended Definition

Migrate to Containers supports migration of JBoss EAP 7.0-7.4 and WildFly 8.1.0-26.1.1 to equivalent WildFly-based container images.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)

## Supporting Pages

### "Customize migration plan for JBoss servers \_|\_ Migrate to Containers \_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- If includeSensitiveData is set to true the sensitive data is mounted on the container. sensitiveData: includeSensitiveData: false sensitiveDataPaths: - /opt/jboss/wildfly/standalone/configuration/application-roles.properties - /opt/jboss/wildfly/standalone/configuration/application-users.properties - /opt/jboss/wildfly/standalone/configuration/application.keystore - /opt/jboss/wildfly/standalone/configuration/mgmt-groups.properties - /opt/jboss/wildfly/standalone/configuration/mgmt-users.properties To add information as needed, review your migration plan details and guiding comments.
- If you want to change the Docker community image, or provide your own docker image, you can modify the fromImage tag in your migration plan using the following format: Parent Wildfly image for the generated container image. fromImage : docker.io/jboss/wildfly:10.1.0.Final The targetImageHome field specifies the path of the JBoss home directory in the target image, and is derived from the fromImage field.
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Edit this to change the artifacts naming. serverName: jboss-server JBoss home directory. home: /opt/jboss/wildfly Parent Wildfly image for the generated container image. fromImage: docker.io/jboss/wildfly:10.1.0.Final JBoss home directory in the target image. targetImageHome: /opt/wildfly Configuration file path from source VM. configurationFile: /opt/jboss/wildfly/standalone/configuration/standalone.xml Ports list to expose on the generated container image. ports: - name: management-http port: 9990 - name: management-https port: 9993 - name: ajp port: 8009 - name: http port: 8080 - name: https port: 8433 - name: txn-recovery-environment port: 4712 - name: txn-status-manager port: 4713 List of deployments files to copy. deployments: directory: /opt/jboss/wildfly/standalone/deployments applications: - test.war List of modules to copy in rsync filter format.

### "Review compatible OS, workloads, and Kubernetes versions \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Supported workloads Migrate to Containers CLI supports modernization of workloads listed in the following table: Workload Type (if applicable) Supported versions Linux VM container VMs running 64-bit Linux-based operating systems Linux-based workloads Tomcat Apache Tomcat version 8.5 - 10.0 Apache Apache HTTP Server version 2.4 JBoss WildFly (formerly known as JBoss Application Server) version 8.1.0 - 26.1.1 JBoss Enterprise Application Platform version 7.0 - 7.4 WebSphere WebSphere Application Server traditional version 8.55 and 9.05 All versions of WebSphere Application Server Liberty WordPress sites WordPress version 4.0 or later running on Apache HTTP Server version 2.4 Windows IIS application Microsoft Internet Information Services version 7 or later Note: For workloads that use a Java-based plugin, Migrate to Containers CLI only supports Java SE version 8 or later.
- Source VM operating systems Linux VM container Migrate to Containers CLI supports migrations of VMs to containers on Google Kubernetes Engine on the 64-bit Linux operating systems listed in the following table: OS Compute Engine VMware CentOS 6.0 7.0 7.0 UEFI 8.0 6.7 6.9 7.6 Debian 7.0 8.0 9.0 10.0 9.4 9.6 RHEL 6.0 7.0 7.0 UEFI 7.4 SAP 7.6 SAP 8.0 6.5 7.5 7.6 8.3 SUSE 12 12 SP3 SAP 12 SP4 SAP 15 15 SAP 15 SP1 SAP 12 SP2 12 SP3 12 SP4 15 Ubuntu 12 LTS 14 LTS 16 LTS 16 LTS minimal 18 LTS 18 LTS minimal 18 LTS UEFI 19.04 19.04 minimal 12.04.5 LTS 14.04 LTS 16.04 LTS 18.04.10 LTS Linux-based workloads For Linux-based workloads, Migrate to Containers CLI supports all Linux-based operating systems.
- Local machine operating system Linux local machine Migrate to Containers CLI supports migrations using local machines with all 64-bit Linux operating systems.
- Windows local machine Migrate to Containers CLI supports migrations using local machines with 64-bit Windows Server 2019 LTSC operating systems.

### "Discover, collect, and assess VMware VMs for migration \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Discover, collect, and assess VMware VMs for migration Learn how to download the Migration Center discovery client CLI and use it to remotely discover, collect, and assess virtual machine (VM) instances running on VMware for migration and containerization.
- These reports display the results for each of the migration targets and outlines actions to take to eliminate blockers and risks.
- What's next Learn how to migrate a Linux VM .

