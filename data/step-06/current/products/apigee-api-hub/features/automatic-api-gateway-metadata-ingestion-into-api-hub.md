---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.533Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Automatic API Gateway metadata ingestion into API hub"
feature_slug: "automatic-api-gateway-metadata-ingestion-into-api-hub"
latest_feature_date: "2026-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub"
  - "https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
keywords:
  - "automatic"
  - "attaching"
  - "into"
  - "ingestion"
  - "gateway"
  - "metadata"
  - "adds"
---

# Automatic API Gateway metadata ingestion into API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Adds automatic ingestion of API metadata from API Gateway by attaching API Gateway projects to API hub.

## Extended Definition

Adds automatic ingestion of API metadata from API Gateway by attaching API Gateway projects to API hub.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- [https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)

## Supporting Pages

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- When multiple authorization headers are present in a request, the Apigee ingress gateway doesn't concatenate them into a single header.
- Edit apigee-operator/templates/ helpers.tpl and remove the following bold lines: {{- define "metricsSA" -}} {{- $metricsName := "apigee-metrics" }} {{- $telemetryName := "apigee-telemetry" -}} {{- $generatedName := include "orgScopeEncodedName" (dict "name" .Values.org) -}} {{- if .Values.gcp.workloadIdentity.enabled -}} {{- printf "%s-sa" $metricsName -}} {{- else if .Values.serviceAccountSecretProviderClass -}} {{- else if .Values.multiOrgCluster -}} {{- printf "%s-%s" $metricsName $generatedName -}} {{- else -}} {{- printf "%s-%s" $metricsName $telemetryName -}} {{- end -}} {{- end -}} The resulting section should look like the following: {{- define "metricsSA" -}} {{- $metricsName := "apigee-metrics" }} {{- $telemetryName := "apigee-telemetry" -}} {{- $generatedName := include "orgScopeEncodedName" (dict "name" .Values.org) -}} {{- if .Values.gcp.workloadIdentity.enabled -}} {{- printf "%s-sa" $metricsName -}} {{- else if .Values.multiOrgCluster -}} {{- printf "%s-%s" $metricsName $generatedName -}} {{- else -}} {{- printf "%s-%s" $metricsName $telemetryName -}} {{- end -}} {{- end -}} Reapply the apigee-operator chart. helm upgrade operator apigee-operator/ \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides .yaml 419856132 hybrid 1.14.2 and newer FIXED in hybrid 1.14.3 and hybrid 1.15.0 If gateway.networking.k8s.io/v1 is installed in your cluster, apigee-ingressgateway-manager may fail to upgrade.
- Execute: kubectl delete crd $(cat istio-crd.csv) Update clusterrole Get the current apigee-ingressgateway-manager clusterrole: kubectl get clusterrole apigee-ingressgateway-manager-apigee -o yaml > apigee-ingressgateway-manager-apigee-clusterrole.yaml Copy the clusterrole to a new location: cp apigee-ingressgateway-manager-apigee-clusterrole.yaml apigee-ingressgateway-manager-apigee-clusterrole-added-istio-permissions.yaml Add the following additional permissions to the end of the file: - apiGroups: - gateway.networking.k8s.io resources: - gatewayclasses - gateways - grpcroutes - httproutes - referencegrants verbs: - get - list - watch - apiGroups: - networking.istio.io resources: - sidecars - destinationrules - gateways - virtualservices - envoyfilters - workloadentries - serviceentries - workloadgroups - proxyconfigs verbs: - get - list - watch - apiGroups: - security.istio.io resources: - peerauthentications - authorizationpolicies - requestauthentications verbs: - get - list - watch - apiGroups: - telemetry.istio.io resources: - telemetries verbs: - get - list - watch - apiGroups: - extensions.istio.io resources: - wasmplugins verbs: - get - list - watch Apply the role: kubectl -n APIGEE NAMESPACE apply -f apigee-ingressgateway-manager-apigee-clusterrole-added-istio-permissions.yaml After you have completed the above options, you will need to restart your apigee-ingressgateway-manager pods.
- List the ingress-manager pods to reinstall or recreate: kubectl get deployments -n APIGEE NAMESPACE Example output: NAME READY UP-TO-DATE AVAILABLE AGE apigee-controller-manager 1/1 1 1 32d apigee-ingressgateway-manager 2/2 2 2 32d Restart the ingress-manager pods: kubectl rollout restart deployment -n APIGEE NAMESPACE apigee-ingressgateway-manager After a few minutes, monitor the apigee-ingressgateway-manager pods: watch -n 10 kubectl -n APIGEE NAMESPACE get pods -l app=apigee-ingressgateway-manager Example output: NAME READY STATUS RESTARTS AGE apigee-ingressgateway-manager-12345abcde-678wx 3/3 Running 0 10m apigee-ingressgateway-manager-12345abcde-901yz 3/3 Running 0 10m 414499328 hybrid 1.14.1 FIXED in hybrid 1.14.3 and hybrid 1.15.0 ApigeeTelemetry can become stuck in creating state.

### "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The execute integration.sh script triggers a one-time ingestion of metadata from Azure APIM and does not set up a continuous synchronization.
- This tutorial shows you how to ingest API metadata from Azure API Management (APIM) platform into Apigee API hub.
- For Each Parallel Task taskId: 19 For each API ID in $api id-list$ , runs a sub-integration ( api trigger/INTEGRATION NAME API 5 ) in parallel to gather detailed metadata for that API, including operations, revisions, specifications, and deployments.
- Download and install the following CLI tools: Azure CLI Google Cloud CLI Download the necessary files from GitHub Download the following files from the Apigee samples directory and save them all into a new, single directory on your local machine.

### "Auto-register APIs from Google Cloud projects \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported Google Cloud services Auto-registration is currently supported for the following Google Cloud services: Google Cloud service Ingested data Apigee and Apigee hybrid Deployed API proxies and their associated OpenAPI specifications API Gateway Gateway definitions and managed endpoints Project associations and plugins Deprecated: Pull-based ingestion is no longer supported for Apigee and Apigee hybrid plugins as of July 31, 2025 .
- During this process, API hub automatically discovers deployed APIs within the project and creates the necessary plugin instances in API hub to manage data ingestion.
- When this option is selected, API hub automatically creates the necessary plugin instance to manage the metadata import.
- For push-based plugins, data ingestion is automatically triggered by changes in the source.

