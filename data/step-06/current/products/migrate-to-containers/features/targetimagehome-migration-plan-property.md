---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.792Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "targetImageHome migration plan property"
feature_slug: "targetimagehome-migration-plan-property"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan"
keywords:
  - "targetimagehome"
  - "migration"
  - "plan"
  - "property"
  - "lets"
  - "users"
  - "specify"
  - "alternative"
---

# targetImageHome migration plan property

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The targetImageHome property lets users specify an alternative container image with a different JBOSS_HOME location.

## Extended Definition

The targetImageHome property lets users specify an alternative container image with a different JBOSS_HOME location.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)

## Supporting Pages

### Create a migration plan | Migrate to Containers | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `feature-recovery-http`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To retrieve this value, check the running JBoss server process: ps aux | grep jboss.home.dir To perform the analysis, run the following command: ./m2c analyze \ -s PATH_TO_COPIED_FILESYSTEM \ -p jboss-container \ -o ANALYSIS_OUTPUT_PATH \ -r jboss-home= PATH_TO_JBOSS_HOME Replace the following: PATH_TO_COPIED_FILESYSTEM : the path to copied file system directory ANALYSIS_OUTPUT_PATH : the path to the folder where you want the analysis output to be created PATH_TO_JBOSS_HOME : path to the JBoss installation After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .
- Create a migration plan for JBoss workloads For JBoss app components, creating a migration plan requires the JBOSS_HOME variable as an input.
- Create a migration plan | Migrate to Containers | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Migrate to Containers Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Product overview Benefits of migrating to containers Migration journey phases Process architecture Get started Review compatible OS, app components, and Kubernetes versions Quickstarts Discover, collect, and assess VMware VMs for migration Migrate a Linux VM using Migrate to Containers CLI Tutorials Batching guest discovery and data collection Collect guest data from EC2 VMs for offline assessment Assess workloads Planning best practices Offline assessment overview Migrate workloads Set up for migration Copy the source machine's file system Create a migration plan Customize your migration plan Customize migration plan for Linux VMs Customize migration plan for Tomcat servers Customize migration plan for WebSphere workloads Customize migration plan for WebSphere traditional workloads Customize migration plan for JBoss servers Customize migration plan for Apache servers Customize migration plan for WordPress sites Customize migration plan for Windows IIS services Execute the migration Review the migration artifacts Migrate data Clean up your local machine Manage usage statistics Build and deploy migrated workloads Deploy a Linux application container Deploy a Windows IIS application container Prepare a Windows cluster Build and deploy a Windows IIS application container Deploy a Linux system container Configure logging Mount external volumes Deploy to a cluster Complete post-migration image updates Monitor migrated workloads Optimize workload performance Upgrade container workloads for enhanced runtime Migrate to Autopilot clusters and Cloud Run New and enhanced runtime Migrate and deploy applications to GKE Autopilot clusters Deploy containers to Cloud Run Using services-config.yaml Troubleshoot Warnings Issues Issues with Migrate to Containers CLI Migrated workload fails on GKE 1.20 and later with Ubuntu nodes My workload does not start Execute shell commands on your container Troubleshoot Kubernetes resources Use a custom AppArmor profile MQ configurations are not extracted for Open Liberty targets Issues with Windows IIS services migration Can't find the fromImage migration plan field AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Create a migration plan for WordPress workloads To perform the analysis, run the following command: ./m2c analyze \ -s PATH_TO_COPIED_FILESYSTEM \ -p wordpress-container \ -o ANALYSIS_OUTPUT_PATH Replace the following: PATH_TO_COPIED_FILESYSTEM : the path to copied file system directory ANALYSIS_OUTPUT_PATH : the path to the folder where you want the analysis output to be created After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .

### "Customize migration plan for JBoss servers \_|\_ Migrate to Containers \_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- If includeSensitiveData is set to true the sensitive data is mounted on the container. sensitiveData: includeSensitiveData: false sensitiveDataPaths: - /opt/jboss/wildfly/standalone/configuration/application-roles.properties - /opt/jboss/wildfly/standalone/configuration/application-users.properties - /opt/jboss/wildfly/standalone/configuration/application.keystore - /opt/jboss/wildfly/standalone/configuration/mgmt-groups.properties - /opt/jboss/wildfly/standalone/configuration/mgmt-users.properties To add information as needed, review your migration plan details and guiding comments.
- If you want to change the Docker community image, or provide your own docker image, you can modify the fromImage tag in your migration plan using the following format: Parent Wildfly image for the generated container image. fromImage : docker.io/jboss/wildfly:10.1.0.Final The targetImageHome field specifies the path of the JBoss home directory in the target image, and is derived from the fromImage field.
- Specify the Docker image On the migration plan, we generate a Docker community image tag based on the JBoss version.
- Edit the migration plan After you have copied the file system and analyzed it, you can find the migration plan in the new directory that is created in the specified output path: ANALYSIS OUTPUT PATH / config.yaml .

### "Deploy containers to Cloud Run \_|\_ Migrate to Containers \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploy-run](https://docs.cloud.google.com/migrate/containers/docs/deploy-run)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The only changes that you have to make to the Quickstart process are: In Step 3 of Migrating the VM , where you review the migration plan, set v2kServiceManager to true in the migration plan and then save the plan: v2kServiceManager : true After the migration completes, open the deployment spec.yaml file in an editor to determine the location of the container.
- Upload the edited migration plan: migctl migration update my-migration --main-config my-migration.yaml Generate and review the migration artifacts just as you do today with the existing runtime.
- To enable the new service manager, reset the flag to true : v2kServiceManager : true Perform any other customizations necessary for your migration as described in Customize the migration plan .
- In this instance, you can either choose to keep the unsupported service on the generated image where it may not run or you can exclude the service by removing it from the migration plan.

