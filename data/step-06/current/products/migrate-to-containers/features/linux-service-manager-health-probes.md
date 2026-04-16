---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.818Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Linux Service Manager health probes"
feature_slug: "linux-service-manager-health-probes"
latest_feature_date: "2022-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/services-manager"
  - "https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview"
keywords:
  - "linux"
  - "manager"
  - "health"
  - "probes"
  - "deployments"
  - "use"
  - "kubernetes"
  - "readiness"
---

# Linux Service Manager health probes

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Linux Service Manager deployments use Kubernetes readiness and liveness probes by default, with selectable services for probing.

## Extended Definition

Linux Service Manager deployments use Kubernetes readiness and liveness probes by default, with selectable services for probing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)

## Supporting Pages

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set Linux v2kServiceManager health probes You can monitor the downtime and ready status of your managed containers by specifying probes in your Tomcat web server's migration plan.
- To disable probes, remove the probes section from the yaml. deployment : probes : livenessProbe : exec : command : - /ko-app/service-manager-runtime - /probe readinessProbe : exec : command : - gamma - /probe initialDelaySeconds : 60 periodSeconds : 5 image : Disable system services that do not need to be executed at the migrated workload containers.
- To learn more about kubelet probes, see Configure Liveness, Readiness and Startup Probes in the Kubernetes documentation.
- Readiness probe - Readiness probes are used to know when a container is ready to start accepting traffic.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You can add the simplified Linux service manager readiness probe to your Service definition: readinessProbe: exec: command: - /.m4a/gamma status However, this probe might return a false negative result. syslog support The simplified Linux service manager creates a Unix socket at /dev/log to support the syslog.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- The simplified Linux service manager forwards these log messages to stdout so that they are recorded by Kubernetes as container logs.
- When you enable the simplified Linux service manager, no readiness probe is added.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You can add the simplified Linux service manager readiness probe to your Service definition: readinessProbe: exec: command: - /.m4a/gamma status However, this probe might return a false negative result. syslog support The simplified Linux service manager creates a Unix socket at /dev/log to support the syslog.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- The simplified Linux service manager forwards these log messages to stdout so that they are recorded by Kubernetes as container logs.
- When you enable the simplified Linux service manager, no readiness probe is added.

