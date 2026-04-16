---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.846Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Environment-level scaling for Apigee hybrid components"
feature_slug: "environment-level-scaling-for-apigee-hybrid-components"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale"
keywords:
  - "specific"
  - "scaling"
  - "level"
  - "components"
  - "environment"
  - "added"
---

# Environment-level scaling for Apigee hybrid components

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee hybrid added environment-specific scaling controls in overrides.yaml, including replica count settings for Runtime, Synchronizer, and UDCA per environment.

## Extended Definition

Apigee hybrid added environment-specific scaling controls in overrides.yaml, including replica count settings for Runtime, Synchronizer, and UDCA per environment.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale)

## Supporting Pages

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to change the replica count minimum and maximum for the MART service, you could add this stanza to overrides.yaml : mart: replicaCountMin: 3 replicaCountMax: 6 You can also find these config properties and their default settings in HYBRID ROOT INSTALL /1.0.0/values.yaml For more information, see Manage runtime plane components .
- When configured in overrides.yaml , all internet communication for the Apigee Connect, Logger, MART, Metrics, Synchronizer, and UDCA components pass through the proxy server.
- Important: For production environments, reset the value of runtime.resources.requests.memory to at least 1Gi in your overrides.yaml .
- Top-level properties The following table describes the top-level properties in the overrides.yaml file.

### Manage runtime plane components | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services)
- Source ID: `feature-recovery-http`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- The following chart shows which charts correspond wth which Apigee hybrid components: Scope Components Helm chart Apigee operator Apigee operator apigee-operator Storage Cassandra apigee-datastore In‑memory storage Redis apigee-redis Reporting Logger Metrics apigee-telemetry Ingress Apigee Ingress gateway apigee-ingress-manager Organization Apigee Connect Agent MART UDCA Watcher apigee-org Environment Runtime Synchronizer apigee-env Environment group virtualhost apigee-virtualhost For example, to change the replica count on the Message processor , follow these steps: Open your OVERRIDES .yaml file.
- For example: helm upgrade test-1-env apigee-env/ \ --namespace APIGEE_NAMESPACE \ --atomic \ --set env= test-1-env \ -f test-1-env-overrides.yaml Note: If you see an error saying Error: UPGRADE FAILED: "test-1-env" has no deployed releases , replace upgrade with install and try the command again.
- You can create custom annotations for the following properties listed in Configuration property reference : cassandra connectAgent logger mart metrics runtime synchronizer udca watcher To add a custom annotation, add a stanza to the OVERRIDES .yaml file for the respective component.
- Obfuscating user data for analytics Logging Logging overview View logs Logging with HTTP proxy forwarding enabled Cassandra logs MART logs Runtime logs Synchronizer logs Audit logging information Metrics collection Metrics collection overview Cluster monitoring guidelines Configuring metrics collection OpenTelemetry collector with HTTP proxy forwarding enabled Viewing metrics Other data collection Pod metrics annotations details Runtime services Runtime service configuration overview Managing runtime plane components Cassandra admin Managing Cassandra persistent volume size Scaling Cassandra pods Storing Cassandra secrets in Hashicorp Vault Rotating Cassandra credentials in Hashicorp Vault Rotating Cassandra credentials in Kubernetes secrets Environments About environments Managing environments Creating environments Deleting environments Configuring virtual hosts Configuring proxy forwarding Generating self-signed TLS certificates Configuring TLS and mTLS on the ingress gateway DNS setup quickstart Synchronizer Apigee connect Configure the MART service account Service accounts About service accounts Service account validation Storing service account keys in Hashicorp Vault Storing service account keys in Kubernetes secrets Ingress gateway Managing Apigee Ingress Migrating to Apigee Ingress Enabling non-SNI clients Obtain TLS credentials: An example Running cert-manager in a custom namespace Enhanced per-environment proxy limits Configure large message payload support Configure target timeout limit Cluster management Configuring Kubernetes network policies Securing the runtime installation Configure Seccomp profiles for pod security Data encryption Enabling Workload Identity for GKE Enabling Workload Identity Federation on AKS and EKS Storing data in a Kubernetes secret Storing data in an external secret manager Multi-region deployments Adding multiple hybrid orgs to a cluster Migrating an org to another cluster Scale and autoscale services Decommission a hybrid region Decommission a hybrid org Use a private image repository with Apigee hybrid Apigee deployment services Rolling updates Using Kubernetes Tolerations Manage process ID limits Cassandra backup and restore Backup overview CSI backup and restore Non-CSI backup and restore Scheduling backups in Cloud Storage Scheduling backups in a remote server Monitoring backups Restoring Cassandra backups Restore overview Restoring in a single region Restoring in multiple regions Viewing restore logs Monetization Enable monetization for Apigee hybrid Reference Configuration property reference Apigee hybrid Helm charts reference apigee-pull-push.sh apigeectl common.sh create-service-account dump_kubernetes.sh Upgrading hybrid v1.15 What is Apigee hybrid?

### Scale and autoscale runtime services \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can override the default settings by specifying environment-specific scaling in the overrides.yaml file as shown in the following example: envs: Apigee environment name - name: ENV NAME > components: Environment-specific scaling override Otherwise, uses scaling defined at the respective root component runtime: replicaCountMin: 2 replicaCountMax: 20 Metrics-based scaling With metrics-based scaling, the runtime can use CPU and application metrics to scale the apigee-runtime pods.
- The following example from the runtime stanza in the overrides.yaml illustrates the standard parameters (and permitted ranges) for scaling apigee-runtime pods in a hybrid implementation: runtime: the following parameters configure metrics-based scaling hpaMetrics: serverMainTaskWaitTime: 400M # (range: 300M to 450M) serverNioTaskWaitTime: 400M # (range: 300M to 450M) targetCPUUtilizationPercentage: 75 hpaBehavior: scaleDown: percent: periodSeconds: 60 # (range: 30 - 180) value: 20 # (range: 5 - 50) pods: periodSeconds: 60 # (range: 30 - 180) value: 2 # (range: 1 - 15) selectPolicy: Min stabilizationWindowSeconds: 120 # (range: 60 - 300) scaleUp: percent: periodSeconds: 60 # (range: 30 - 120) value: 20 # (range: 5 - 100) pods: periodSeconds: 60 # (range: 30 - 120) value: 4 # (range: 2 - 15) selectPolicy: Max stabilizationWindowSeconds: 30 # (range: 30 - 120) Apply these settings by updating the apigee-runtime chart for each environment.
- For example: helm upgrade telemetry apigee-telemetry/ \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides .yaml Configure more aggressive scaling Increasing the percent and pods values of the scale-up policy will result in a more aggressive scale-up policy.
- For example: helm upgrade $ENV RELEASE NAME apigee-runtime/ \ --namespace APIGEE NAMESPACE \ --atomic \ --set env= $ENV NAME \ -f overrides .yaml Enable or disable metrics-based scaling Metrics-based scaling is enabled by default.

