---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.850Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Enhanced runtime"
feature_slug: "enhanced-runtime"
latest_feature_date: "2021-10-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview"
  - "https://docs.cloud.google.com/migrate/containers/docs/convert-runtime"
  - "https://docs.cloud.google.com/migrate/containers/docs/services-manager"
keywords:
  - "enhanced"
  - "runtime"
  - "lets"
  - "you"
  - "deploy"
  - "containers"
  - "gke"
  - "autopilot"
---

# Enhanced runtime

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Enhanced runtime lets you deploy containers to GKE Autopilot and Cloud Run using a non-privileged lightweight system init based on LXC; Enhanced runtime adds preview support for deploying containers to GKE Autopilot and Cloud Run with updated service manager, environment, and logging settings.

## Extended Definition

Enhanced runtime lets you deploy containers to GKE Autopilot and Cloud Run using a non-privileged lightweight system init based on LXC; Enhanced runtime adds preview support for deploying containers to GKE Autopilot and Cloud Run with updated service manager, environment, and logging settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)

## Supporting Pages

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- Readiness probes When using the current runtime, Migrate to Containers adds a readiness probe in the deployment spec.yaml file.
- New enhanced runtime The original Linux service manager for Migrate to Containers relied on sysv init and systemd .
- See Deploy containers to Autopilot clusters for more.

### "Upgrade container workloads for enhanced runtime \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Upgrade container workloads for enhanced runtime If you have existing container workloads created using Migrate to Containers versions 1.7.x and 1.8.x, you can convert them to use the simplified Linux service manager.
- This conversion lets you then run these containers on GKE Autopilot clusters.
- For example: vi deployment spec.yaml Locate the following three sections in the file and delete the indicated lines: apiVersion : apps/v1 kind : StatefulSet ... spec : containers : - image : gcr.io/ PROJECT NAME / IMAGE NAME : LABEL name : IMAGE NAME Delete the following lines: readinessProbe : exec : command : - /code/ready.sh resources : {} securityContext : privileged : true Stop the delete here. volumeMounts : Delete the following lines: - mountPath : /sys/fs/cgroup name : cgroups Stop the delete here. - mountPath : /opt/suitecrm-7.10.5-0/mysql/data name : data-pvc-0-1b12-d0af-48b3-9f5e-6c25fa5 subPath : opt/suitecrm-7.10.5-0/mysql/data volumes : Delete the following lines: - hostPath : path : /sys/fs/cgroup type : Directory name : cgroups Stop the delete here. - name : data-pvc-2-d0af-48b3-9f5e09c25fa5 persistentVolumeClaim : claimName : data-pvc-0-1a2-d0af-48b3-9f5e-605fa5 Notice that you only remove the volumeMounts and volumes definitions for cgroups and leave the remaining definitions.
- For example: vi deployment spec.yaml Locate the following section in the file and delete the indicated lines: apiVersion : apps/v1 kind : Deployment metadata : creationTimestamp : null name : IMAGE NAME … spec : containers : - image : gcr.io/ PROJECT NAME / IMAGE NAME : LABEL name : IMAGE NAME Delete the following lines: readinessProbe : exec : command : - /code/ready.sh resources : {} securityContext : privileged : true volumeMounts : - mountPath : /sys/fs/cgroup name : cgroups - mountPath : /code/config/logs name : logs-config volumes : - hostPath : path : /sys/fs/cgroup type : Directory name : cgroups - configMap : name : suitecrm-crddefault-logs name : logs-config Stop the delete here.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- Readiness probes When using the current runtime, Migrate to Containers adds a readiness probe in the deployment spec.yaml file.
- New enhanced runtime The original Linux service manager for Migrate to Containers relied on sysv init and systemd .
- See Deploy containers to Autopilot clusters for more.

