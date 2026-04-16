---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.878Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "migctl migration cleanup command"
feature_slug: "migctl-migration-cleanup-command"
latest_feature_date: "2020-07-28"
deprecation_date: "2020-07-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
keywords:
  - "migctl"
  - "migration"
  - "cleanup"
  - "command"
  - "was"
  - "removed"
  - "no"
  - "longer"
---

# migctl migration cleanup command

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The migration cleanup command was removed and is no longer necessary; deprecated on 2020-07-28.

## Extended Definition

The migration cleanup command was removed and is no longer necessary; deprecated on 2020-07-28.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)

## Supporting Pages

### Create a migration plan \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- To retrieve this value, check the running JBoss server process: ps aux grep jboss.home.dir To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p jboss-container \ -o ANALYSIS OUTPUT PATH \ -r jboss-home= PATH TO JBOSS HOME Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created PATH TO JBOSS HOME : path to the JBoss installation After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .
- Create a migration plan for WordPress workloads To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p wordpress-container \ -o ANALYSIS OUTPUT PATH Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .
- Create a migration plan for Apache workloads To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p apache-container \ -o ANALYSIS OUTPUT PATH Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .
- Create a migration plan for a Linux VM container To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p linux-vm-container \ -o ANALYSIS OUTPUT PATH \ [ -r skip size checks= SKIP SIZE CHECKS ] \ [ -r big files threshold mb= SIZE IN MB ] Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.
- You can also define custom commands and scripts through the migration plan.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- Edit the user and group directly in your migration plan: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . userName : USERNAME groupName : GROUP NAME Replace the following: USERNAME : the username that you want to use GROUP NAME : the group name that you want to use Configure SSL When you create a new Tomcat migration, a discovery process scans the server against the different applications that are discovered.

### Migrate to Containers CLI reference for Linux \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Synopsis m2c COMMAND [options] Flags -q,--quiet Don't output anything -v,--verbose Show verbose output Commands Command Description m2c analyze Analyze the workload's configuration in the given file system. m2c cleanup Clean up a source file system. m2c completion Generate the autocompletion script for the specified shell m2c config View and edit configuration properties m2c copy Copy a VM's file system locally. m2c generate Generate migration artifacts from the given file system. m2c help Help about any command m2c migrate-data Migrate data from the local machine to PVCs. m2c plugins Manage migration plugins m2c version Print the CLI version. m2c analyze Analyze the workload's configuration in the given file system with a given plugin.
- Migrate to Containers CLI reference for Linux m2c is a command-line tool that lets you set up and execute migrations on your local machine. m2c A command-line interface to Migrate to Containers.
- Synopsis m2c help [command] m2c migrate-data Migrate data from the local machine to PVCs on the currently connected cluster according to the data migration plan.
- Can be specified multiple times m2c cleanup Clean up a source file system that was created by the copy command.

