---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.852Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Cloud Logging configuration via logs.yaml"
feature_slug: "cloud-logging-configuration-via-logs-yaml"
latest_feature_date: "2021-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/convert-runtime"
  - "https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates"
keywords:
  - "logging"
  - "configuration"
  - "via"
  - "logs"
  - "yaml"
  - "migration"
  - "artifacts"
  - "generation"
---

# Cloud Logging configuration via logs.yaml

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Migration artifacts generation now creates a logs.yaml file that lists detected log files and can be edited to configure Cloud Logging output.

## Extended Definition

Migration artifacts generation now creates a logs.yaml file that lists detected log files and can be edited to configure Cloud Logging output.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- [https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates](https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates)

## Supporting Pages

### Customize migration plan for Linux VMs | Migrate to Containers | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `feature-recovery-http`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Containers then writes information about those detected files to the logPaths area of the migration plan: deployment : ... logPaths : - appName : APP_NAME globs : - LOG_PATH For example: deployment : ... logPaths : - appName : tomcat globs : - /var/log/tomcat*/catalina.out When you generate the migration artifacts, Migrate to Containers generates the logs.yaml file from the migration plan.
- The advantage to editing the migration plan is that your edits are reflected in logs.yaml every time you generate the artifacts.
- Edit logs.yaml after you generate the migration artifacts to add, remove, or edit logs entries.
- When you generate the migration artifacts, these edits are reflected in the logs.yaml file.

### "Upgrade container workloads for enhanced runtime \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- Source ID: `site-docs-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ADD blocklist.yaml /.m4a/blocklist.yaml Insert the ADD commands to copy the logs.yaml file to the container image : ADD logs.yaml /code/config/logs/logsArtifact.yaml ADD logs.yaml /code/config/logs/logs.yaml Insert the RUN command for servicemanager generate config: RUN /servicemanager generate config build-all -o /.m4a/ Migrate to Containers image includes entrypoint ENTRYPOINT [ "/.v2k.go" ] Open the deployment spec.yaml file in an editor.
- ADD blocklist.yaml /.m4a/blocklist.yaml Insert the ADD commands to copy the logs.yaml file to the container image : ADD logs.yaml /code/config/logs/logsArtifact.yaml ADD logs.yaml /code/config/logs/logs.yaml Insert the RUN command for servicemanager generate config: RUN /servicemanager generate config build-all -o /.m4a/ Migrate to Containers image includes entrypoint ENTRYPOINT [ "/.v2k.go" ] Open the deployment spec.yaml file in an editor.
- Edit the Dockerfile to set the product version, to copy the logs.yaml file, and to run the servicemanager generate config utility: ...
- Insert two ADD commands to copy the logs.yaml file to the container image.

### "Post-migration image updates \_|\_ Migrate to Containers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates](https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's a sample of a generated Dockerfile: FROM us-docker.pkg.dev/migrate-modernize-public/modernize-plugins-prod/service-manager-runtime:1.0.3 as service-manager-runtime FROM scratch Tar containing data captured from the source VM ADD vmFiles.tar.gz / COPY --from = service-manager-runtime / / ADD blocklist.yaml /.m4a/blocklist.yaml ADD logs.yaml /code/config/logs/logsArtifact.yaml ADD services-config.yaml /.m4a/ ADD tempfiles.yaml /.m4a/ If you want to update parts of the image, add your commands here.
- Updated Dockerfile: FROM us-docker.pkg.dev/migrate-modernize-public/modernize-plugins-prod/service-manager-runtime:1.0.3 as service-manager-runtime FROM scratch Tar containing data captured from the source VM ADD vmFiles.tar.gz / COPY --from = service-manager-runtime / / ADD blocklist.yaml /.m4a/blocklist.yaml ADD logs.yaml /code/config/logs/logsArtifact.yaml ADD services-config.yaml /.m4a/ ADD tempfiles.yaml /.m4a/ If you want to update parts of the image, add your commands here.
- The generated container artifacts are created with CI/CD pipeline build phase integration in mind, as described in the following diagram: The Dockerfile is structured as a multi-stage build , for easier maintenance and manipulation, while keeping the image from inflating.
- You also need them for Day 2 maintenance operations, including applying application and user-mode OS software updates, security patches, editing embedded configurations, adding or replacing files, and for updating the Migrate to Containers runtime software.

