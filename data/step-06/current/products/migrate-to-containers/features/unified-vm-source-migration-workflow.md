---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.890Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "unified VM source migration workflow"
feature_slug: "unified-vm-source-migration-workflow"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
keywords:
  - "unified"
  - "vm"
  - "source"
  - "migration"
  - "workflow"
  - "introduced"
  - "across"
  - "vmware"
---

# unified VM source migration workflow

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The product introduced a unified migration workflow across VMware, AWS EC2, Azure VMs, and Compute Engine VMs.

## Extended Definition

The product introduced a unified migration workflow across VMware, AWS EC2, Azure VMs, and Compute Engine VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)

## Supporting Pages

### "Discover, collect, and assess VMware VMs for migration \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Discover, collect, and assess VMware VMs for migration Learn how to download the Migration Center discovery client CLI and use it to remotely discover, collect, and assess virtual machine (VM) instances running on VMware for migration and containerization.
- Download the latest version of the mcdc CLI and make it executable: curl -O "https://mc-release.storage.googleapis.com/mcdc/ $( curl -s https://mc-release.storage.googleapis.com/mcdc/latest ) /mcdc" chmod +x mcdc Perform VMware inventory discovery Run the inventory discovery: ./mcdc discover vsphere -u USERNAME --url https:// VSPHERE URL Replace the following: USERNAME : your vCenter username VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client The output of the discover command looks like the following: [+] Found 13 VMs Collecting data...
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- These reports display the results for each of the migration targets and outlines actions to take to eliminate blockers and risks.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Edit the memory limits directly in your migration plan using the following format: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . resources : memory : limit : 2048M requests : 1280M The recommended value for limit is 200% of Xmx , which is the maximum Java heap size.
- The details of your migration plan are used to extract the workload container artifacts from the source.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.

### Set up for migration \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Set up for offline migration If you want to perform migration on your local network without pulling resources from the internet, then you can complete the following steps to prepare your local machine for offline migrations.
- Set up the Linux source machine Note: If you're going to migrate Windows IIS applications, you don't need to perform the steps to set up the Windows source machine for migration.
- Unpack the offline Migrate to Containers CLI plugins bundle: ./m2c plugins unpack -i m2c-offline-bundle-linux.tar To add support for offline data migration, specify a container registry that is available in your local network: ./m2c plugins unpack -i m2c-offline-bundle-linux.tar --registry HOSTNAME Replace HOSTNAME with the container registry hostname.
- Set up for migration Before you start the modernization process, you need to check whether your application component is compatible for modernization and prepare your setup for modernization.

