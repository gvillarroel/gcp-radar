---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.886Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Java container resource compatibility layer"
feature_slug: "java-container-resource-compatibility-layer"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/convert-runtime"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration"
  - "https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview"
keywords:
  - "java"
  - "container"
  - "resource"
  - "compatibility"
  - "layer"
  - "runtime"
  - "reflects"
  - "correct"
---

# Java container resource compatibility layer

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The runtime layer reflects correct resource allocations in /proc for older Java applications that are not container aware.

## Extended Definition

The runtime layer reflects correct resource allocations in /proc for older Java applications that are not container aware.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration)
- [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)

## Supporting Pages

### "Upgrade container workloads for enhanced runtime \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: vi deployment spec.yaml Locate the following three sections in the file and delete the indicated lines: apiVersion : apps/v1 kind : StatefulSet ... spec : containers : - image : gcr.io/ PROJECT NAME / IMAGE NAME : LABEL name : IMAGE NAME Delete the following lines: readinessProbe : exec : command : - /code/ready.sh resources : {} securityContext : privileged : true Stop the delete here. volumeMounts : Delete the following lines: - mountPath : /sys/fs/cgroup name : cgroups Stop the delete here. - mountPath : /opt/suitecrm-7.10.5-0/mysql/data name : data-pvc-0-1b12-d0af-48b3-9f5e-6c25fa5 subPath : opt/suitecrm-7.10.5-0/mysql/data volumes : Delete the following lines: - hostPath : path : /sys/fs/cgroup type : Directory name : cgroups Stop the delete here. - name : data-pvc-2-d0af-48b3-9f5e09c25fa5 persistentVolumeClaim : claimName : data-pvc-0-1a2-d0af-48b3-9f5e-605fa5 Notice that you only remove the volumeMounts and volumes definitions for cgroups and leave the remaining definitions.
- For example: vi deployment spec.yaml Locate the following section in the file and delete the indicated lines: apiVersion : apps/v1 kind : Deployment metadata : creationTimestamp : null name : IMAGE NAME … spec : containers : - image : gcr.io/ PROJECT NAME / IMAGE NAME : LABEL name : IMAGE NAME Delete the following lines: readinessProbe : exec : command : - /code/ready.sh resources : {} securityContext : privileged : true volumeMounts : - mountPath : /sys/fs/cgroup name : cgroups - mountPath : /code/config/logs name : logs-config volumes : - hostPath : path : /sys/fs/cgroup type : Directory name : cgroups - configMap : name : suitecrm-crddefault-logs name : logs-config Stop the delete here.
- Upgrade container workloads for enhanced runtime If you have existing container workloads created using Migrate to Containers versions 1.7.x and 1.8.x, you can convert them to use the simplified Linux service manager.
- Add the following lines to set the HC V2K SERVICE MANAGER environment variable: Caution: If you are using Migrate to Containers 1.10 or later, skip this step. spec : containers : - image : gcr.io/ PROJECT NAME / IMAGE NAME : LABEL name : IMAGE NAME Add the following lines: env : - name : HC V2K SERVICE MANAGER value : "true" Stop the add here. volumeMounts : - mountPath : /opt/suitecrm-7.10.5-0/mysql/data name : data-pvc-0-1b12-d0af-48b3-9f5e-6c25fa5 subPath : opt/suitecrm-7.10.5-0/mysql/data volumes : - name : data-pvc-2-d0af-48b3-9f5e09c25fa5 persistentVolumeClaim : claimName : data-pvc-0-1a2-d0af-48b3-9f5e-605fa5 Save the file.

### "Customize migration plan for WebSphere workloads \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 0 361 jre : Java ( TM ) SE Runtime Environment jvm : IBM J9 VM List of hosted applications and how to migrate them to containers. applications : - path : / opt / ibm / wlp / usr / servers / defaultServer / apps / app . war Application archives to be migrated into the target container. archives : - / opt / ibm / wlp / usr / servers / defaultServer / apps / app . war Application configuration files to be migrated into the target container. configurations : serverXML : / opt / ibm / wlp / usr / servers / defaultServer / server . xml serverEnv : - / opt / ibm / wlp / usr / servers / defaultServer / server . env bootstrapProperties : - / opt / ibm / wlp / usr / servers / defaultServer / bootstrap . properties variableProperties : - / opt / ibm / wlp / usr / servers / defaultServer / variables / variable . properties jvmOptions : - / opt / ibm / wlp / usr / servers / defaultServer / jvm . options Application resource files to be migrated into the target container. resources : locations : - / opt / ibm / wlp / usr / servers / defaultServer / resources / ports . xml libraries : - / opt / ibm / wlp / usr / servers / defaultServer / resources / postgresql . jar keystores : - / opt / ibm / wlp / output / defaultServer / resources / security / key . p12 sharedResources : - / opt / ibm / wlp / usr / shared / resources / jdbc . jar additionalResources : - / opt / ibm / wlp / output / defaultServer / resources / mongodb . jar javaRuntime : se : SE8 ee : EE7 vendor : IBM Corporation targetJavaRuntime : se : SE8 ee : EE7 vendor : IBM Corporation targetApplicationServer : profile : Liberty version : 23.0 .
- Defaults to true. enableSecrets : true Exclude applications To exclude applications from the migration, remove them from the applications list. applications: Exclude app1.war: - path: app1.war ... - path: app2.war Control application files To control which application files are included or excluded from the migration, update the configurations and resources fields. applications: - path: app.war resources: keystores: Exclude key1.p12: - key1.p12 Include key2.p12: - key2.p12 additionalResources: Exclude resource1.xml: - resource1.xml Include resource2.xml: - resource2.xml Customize the target Java runtime To customize the target Java runtime for the application, update the targetJavaRuntime field. applications : - path : app . war targetJavaRuntime : se : SE ee : EE vendor : VENDOR Replace the following: SE : the Java SE version.
- To migrate these files as is, you can disable this feature. applications: - path: app.war resources: keystores: - key.p12 targetContainer: Do not migrate keystores to Kubernetes secrets: enableSecrets: false Customize Kubernetes ports To control which ports are exposed by Kubernetes Pods and Services, update the ports field. applications: - path: app.war targetContainer: ports: Exclude http-tcp-9080: - name: http-tcp-9080 port: 9080 protocol: TCP Include https-tcp-9443: - name: https-tcp-9443 port: 9443 protocol: TCP What's next Learn how to execute the migration .
- 0.4 edition : Base targetContainer : The target container base image name. baseImage : ibmcom / websphere - liberty : full - java8 - ibmjava - ubi The application server installation path within the target container base image. home : / opt / ibm / wlp The application server default server name. server : defaultServer The UID or name of the user configured within the target container base image.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- Readiness probes When using the current runtime, Migrate to Containers adds a readiness probe in the deployment spec.yaml file.
- New enhanced runtime The original Linux service manager for Migrate to Containers relied on sysv init and systemd .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

