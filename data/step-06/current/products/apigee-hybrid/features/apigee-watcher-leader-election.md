---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.839Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Apigee-watcher leader election"
feature_slug: "apigee-watcher-leader-election"
latest_feature_date: "2024-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide"
keywords:
  - "coordinate"
  - "election"
  - "watcher"
  - "leader"
  - "component"
  - "enables"
  - "runtime"
---

# Apigee-watcher leader election

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Enables leader election for the apigee-watcher component to coordinate runtime behavior with a single active replica set.

## Extended Definition

Enables leader election for the apigee-watcher component to coordinate runtime behavior with a single active replica set.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)

## Supporting Pages

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- You can override image URL for components individualy with the following properties: ao.image.url apigeeIngressGateway.image.url cassandra.image.url cassandra.auth.image.url cassandra.backup.image.url cassandra.restore.image.url connectAgent.image.url guardrails.image.url ingressGateways[].image.url istiod.image.url kubeRBACProxy.image.url logger.image.url mart.image.url metrics.adapter.image.url metrics.prometheus.image.url metrics.sdSidecar.image.url mintTaskScheduler.image.url redis.image.url redis.envoy.image.url runtime.image.url synchronizer.image.url udca.image.url udca.fluentd.image.url watcher.image.url imagePullSecrets[].name Advanced Introduced in version: 1.0.0 Default value: None Chart: apigee-operator , apigee-redis , apigee-org , apigee-env Kubernetes secret name configured as docker-registry type; used to pull images from private repo. instanceID Basic Introduced in version: 1.3.0 Default value: None Chart: apigee-org Required A unique identifier for this installation.
- Specify the IAM service accounts to map to the Kubernetes service accounts with: gcp.workloadIdentity.gsa connectAgent.gsa envs.gsa.runtime envs.gsa.synchronizer envs.gsa.udca logger.gsa mart.gsa metrics.gsa mintTaskScheduler.gsa udca.gsa watcher.gsa gcp.workloadIdentity.gsa Advanced Introduced in version: 1.10.0 Default value: None Chart: apigee-datastore , apigee-telemetry , apigee-org , apigee-env The email address of the Google IAM service account (GSA) for all components to associate with the corresponding Kubernetes service account when enabling Workload Identity on GKE clusters using Helm charts.
- Leader election automatically selects one watcher pod.
- For example, to change the replica count minimum and maximum for the MART service, you could add this stanza to overrides.yaml : mart: replicaCountMin: 3 replicaCountMax: 6 You can also find these config properties and their default settings in HYBRID ROOT INSTALL /1.0.0/values.yaml For more information, see Manage runtime plane components .

### "New Apigee hybrid installation and administration Preview \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Component Subcomponent Default name (available when you've enabled workload identity patch) organization connectAgent apigee-connect-agent-svc-account-${ORG NAME} watcher apigee-watcher-svc-account-${ORG NAME} mart apigee-mart-svc-account-${ORG NAME} udca apigee-udca-svc-account-${ORG NAME} environment synchronizer apigee-synchronizer-svc-account-${ORG NAME}-${ENV NAME} udca apigee-udca-svc-account-${ORG NAME}-${ENV NAME} runtime apigee-runtime-svc-account-${ORG NAME}-${ENV NAME} datastore cassandra apigee-datastore-svc-account telemetry metricsApp apigee-metricsApp-svc-account metricsProxy apigee-metricsProxy-svc-account metricsAdapter apigee-metricsAdapter-svc-account containerLogs apigee-container-logs-svc-account Workload identities Workload identities allow pods (which use kubernetes service accounts) running in GKE to directly authenticate with Google Cloud APIs without requiring Google Cloud service account keys.
- The following are the names of the components and the default name of the secret where it looks for service account keys: Component Subcomponent Default kubernetes secret name containing service account key organization connectAgent apigee-connect-agent-gcp-sa-key-${ORG NAME} watcher apigee-watcher-gcp-sa-key-${ORG NAME} mart apigee-mart-gcp-sa-key-${ORG NAME} udca apigee-udca-gcp-sa-key-${ORG NAME} ingressGateways N/A environment runtime apigee-runtime-gcp-sa-key-${ORG NAME}-${ENV NAME} udca apigee-udca-gcp-sa-key-${ORG NAME}-${ENV NAME} synchronizer apigee-synchronizer-gcp-sa-key-${ORG NAME}-${ENV NAME} telemetry metrics apigee-metrics-gcp-sa-key containerLogs apigee-logger-gcp-sa-key Kubernetes service accounts Kubernetes service accounts provide identities to pods in your cluster.
- Exit the shell inside vault-0 exit Install secrets store CSI driver Add repo to helm helm repo add secrets-store-csi-driver https://raw.githubusercontent.com/kubernetes-sigs/secrets-store-csi-driver/master/charts Install driver in cluster helm install csi secrets-store-csi-driver/secrets-store-csi-driver Create SecretProviderClass kubernetes resource that references the secret that you created inside vault cat > spc-vault.yaml <<EOF apiVersion: secrets-store.csi.x-k8s.io/v1alpha1 kind: SecretProviderClass metadata: name: vault-apigee-runtime-gcp-sa-key spec: provider: vault parameters: vaultAddress: "http://vault.default:8200" roleName: "apigee-runtime-role" objects: - objectName: "client secret.json" secretPath: "secret/data/runtime-gcp-sa-key" secretKey: "key" EOF Apply the yaml kubectl apply -f spc-vault.yaml Create the kubernetes service account to which we assigned the permissions in step (4.e) kubectl create serviceaccount -n ${ APIGEE NAMESPACE } apigee-runtime-sa Modify the apigee-environment.yaml file for the environment and add the following lines: apiVersion: apigee.cloud.google.com/v1alpha2 kind: ApigeeEnvironment existing content spec: name: {ENV NAME} organizationRef: {ORG NAME} components: runtime: existing content pod containers: - name: apigee-runtime podServiceAccountName: apigee-runtime-sa existing content volumeMounts: - name: secrets-store-inline mountPath: "/opt/apigee/sa" readOnly: true volumes: - name: secrets-store-inline csi: driver: secrets-store.csi.k8s.io readOnly: true volumeAttributes: secretProviderClass: "vault-apigee-runtime-gcp-sa-key" Apply the changes: kubectl apply -k ${ INSTALL DIR } /overlays/instances/ ${ INSTANCE DIR } /environments/ $ENV NAME Apigee Hybrid Upgrade Note: - This procedure covers upgrades between hybrid versions that are supporting the new installation model.
- This is a private istiod used only for Apigee's use cases. instances/{instanceName} datastore apigee-datastore.yaml Contains the ApigeeDatastore custom resource which manages cassandra. secrets.yaml Contains default credentials for datastore. redis apigee-redis.yaml Contains the ApigeeRedis custom resource which manages redis. secrets.yaml Contains default credentials for datastore. organization apigee-organization.yaml Contains the ApigeeOrganization custom resource which manages other subcomponents like connectAgent, watcherAndSynchronizer, MART,UDCA and Ingress. secrets.yaml Contains the Secret s which are referenced in apigee-organization.yaml .

### Scale and autoscale runtime services \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows how to use the kubernetes patch command to change the maxReplicas property for the runtime component: Create environment variables to use with the command: export ENV NAME= my-environment-name export ENV RELEASE NAME= $ENV NAME # the Helm release name for the environment export APIGEE NAMESPACE= apigee #the namespace where Apigee is deployed export COMPONENT=runtime #can be udca or synchronizer export MAX REPLICAS=2 export MIN REPLICAS=1 Apply the patch.
- You can override the default settings by specifying environment-specific scaling in the overrides.yaml file as shown in the following example: envs: Apigee environment name - name: ENV NAME > components: Environment-specific scaling override Otherwise, uses scaling defined at the respective root component runtime: replicaCountMin: 2 replicaCountMax: 20 Metrics-based scaling With metrics-based scaling, the runtime can use CPU and application metrics to scale the apigee-runtime pods.
- For more information on setting configuration properties, see Manage runtime plane components .
- For more information on setting configuration properties, see Manage runtime plane components .

