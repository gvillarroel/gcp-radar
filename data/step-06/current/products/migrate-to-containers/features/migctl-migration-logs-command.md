---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.879Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "migctl migration logs command"
feature_slug: "migctl-migration-logs-command"
latest_feature_date: "2020-07-28"
deprecation_date: "2020-07-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates"
keywords:
  - "migctl"
  - "migration"
  - "logs"
  - "command"
  - "viewing"
  - "was"
  - "removed"
  - "favor"
---

# migctl migration logs command

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The command for viewing migration logs was removed in favor of Google Cloud Console; deprecated on 2020-07-28.

## Extended Definition

The command for viewing migration logs was removed in favor of Google Cloud Console; deprecated on 2020-07-28.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates](https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates)

## Supporting Pages

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Migrate to Containers then writes information about those detected files to the logPaths area of the migration plan: deployment : ... logPaths : - appName : APP NAME globs : - LOG PATH For example: deployment : ... logPaths : - appName : tomcat globs : - /var/log/tomcat /catalina.out When you generate the migration artifacts, Migrate to Containers generates the logs.yaml file from the migration plan.
- The advantage to editing the migration plan is that your edits are reflected in logs.yaml every time you generate the artifacts.
- Edit logs.yaml after you generate the migration artifacts to add, remove, or edit logs entries.
- When you generate the migration artifacts, these edits are reflected in the logs.yaml file.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.
- You can also define custom commands and scripts through the migration plan.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- Edit the user and group directly in your migration plan: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . userName : USERNAME groupName : GROUP NAME Replace the following: USERNAME : the username that you want to use GROUP NAME : the group name that you want to use Configure SSL When you create a new Tomcat migration, a discovery process scans the server against the different applications that are discovered.

### "Post-migration image updates \_|\_ Migrate to Containers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates](https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates)
- Source ID: `site-docs-root-2`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's a sample of a generated Dockerfile: FROM us-docker.pkg.dev/migrate-modernize-public/modernize-plugins-prod/service-manager-runtime:1.0.3 as service-manager-runtime FROM scratch Tar containing data captured from the source VM ADD vmFiles.tar.gz / COPY --from = service-manager-runtime / / ADD blocklist.yaml /.m4a/blocklist.yaml ADD logs.yaml /code/config/logs/logsArtifact.yaml ADD services-config.yaml /.m4a/ ADD tempfiles.yaml /.m4a/ If you want to update parts of the image, add your commands here.
- Updated Dockerfile: FROM us-docker.pkg.dev/migrate-modernize-public/modernize-plugins-prod/service-manager-runtime:1.0.3 as service-manager-runtime FROM scratch Tar containing data captured from the source VM ADD vmFiles.tar.gz / COPY --from = service-manager-runtime / / ADD blocklist.yaml /.m4a/blocklist.yaml ADD logs.yaml /code/config/logs/logsArtifact.yaml ADD services-config.yaml /.m4a/ ADD tempfiles.yaml /.m4a/ If you want to update parts of the image, add your commands here.
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Post-migration image updates This page describes how to perform maintenance operations for your migrated workloads.

