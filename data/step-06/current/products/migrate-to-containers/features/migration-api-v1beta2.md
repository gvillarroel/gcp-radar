---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.825Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Migration API v1beta2"
feature_slug: "migration-api-v1beta2"
latest_feature_date: "2022-05-17"
deprecation_date: "2022-05-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
keywords:
  - "migration"
  - "v1beta2"
  - "deprecated"
  - "after"
  - "v1"
  - "graduation"
  - "remains"
  - "until"
---

# Migration API v1beta2

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The v1beta2 Migration API is deprecated after the v1 API graduation and remains supported until May 2023; deprecated on 2022-05-17.

## Extended Definition

The v1beta2 Migration API is deprecated after the v1 API graduation and remains supported until May 2023; deprecated on 2022-05-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)

## Supporting Pages

### Create a migration plan \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- To retrieve this value, check the running JBoss server process: ps aux grep jboss.home.dir To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p jboss-container \ -o ANALYSIS OUTPUT PATH \ -r jboss-home= PATH TO JBOSS HOME Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created PATH TO JBOSS HOME : path to the JBoss installation After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .
- Create a migration plan for WordPress workloads To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p wordpress-container \ -o ANALYSIS OUTPUT PATH Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .
- Create a migration plan for Apache workloads To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p apache-container \ -o ANALYSIS OUTPUT PATH Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .
- Create a migration plan After creating a copy of the source machine's file system on your local machine, the next step is to analyze the file system to prepare a migration plan.

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Edit the migration plan After you have copied the file system and analyzed it, you can find the migration plan in the new directory that is created in the specified output path: ANALYSIS OUTPUT PATH / config.yaml .
- Alternatively, after you execute a migration to generate the migration artifacts, you can edit the blocklist.yaml file directly, and then build and deploy the container image using Skaffold .
- Edit logs.yaml after you generate the migration artifacts to add, remove, or edit logs entries.
- After discovery, the probe configuration is added to the migration plan.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.
- If set to true, sensitive data specified in sensitiveDataPaths will be uploaded to the artifacts repository. sensitiveDataPaths : - /usr/local/ssl/server.pem - /usr/home/tomcat/keystore - /usr/home/tomcat/truststore After the migration is complete, the secrets are added to the secrets file secrets.yaml in the artifacts repository.
- Set Tomcat environment variables If you would like to set CATALINA OPTS in the Dockerfile that was generated alongside other artifacts after a successful migration, you can first add to the catalinaOpts field in your migration plan.
- Edit the migration plan After you have copied the file system and analyzed it, you can find the migration plan in the new directory that is created in the specified output path: ANALYSIS OUTPUT PATH / config.yaml .

