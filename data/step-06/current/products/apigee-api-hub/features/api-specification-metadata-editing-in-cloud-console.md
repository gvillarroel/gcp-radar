---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.548Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API specification metadata editing in Cloud Console"
feature_slug: "api-specification-metadata-editing-in-cloud-console"
latest_feature_date: "2024-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
keywords:
  - "edit"
  - "editing"
  - "specification"
  - "console"
  - "users"
  - "metadata"
---

# API specification metadata editing in Cloud Console

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Users can now edit metadata for an uploaded API specification directly in the Cloud Console.

## Extended Definition

Users can now edit metadata for an uploaded API specification directly in the Cloud Console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It structures the provided specification content into a new spec object, identifies it as an OpenAPI YAML, and embeds it into a specMetadata object along with its modification timestamp.
- This specMetadata is then integrated into the specs array of the API's first version within curatedAPIMetadata , effectively linking the API proxy with its detailed specification.
- Click to download To upload the API specification files into your Cloud Storage bucket, do the following: In the Google Cloud console, go to the Cloud Storage Buckets page.
- To edit the curation settings of the existing Apigee and hybrid plugin instance, do the following: In the Google Cloud console, go to the API hub page.

### "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Each Parallel Task taskId: 19 For each API ID in $api id-list$ , runs a sub-integration ( api trigger/INTEGRATION NAME API 5 ) in parallel to gather detailed metadata for that API, including operations, revisions, specifications, and deployments.
- Call REST Endpoint taskId: 37 Sends the transformed API data (including specification and metadata) to the API hub collectApiData endpoint using a POST request.
- Make sure that you have the following role or roles on the project: API hub Admin ( roles/apihub.admin ) Application Integration Admin ( roles/integrations.admin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Check for the roles In the Google Cloud console, go to the IAM page.
- Run the following commands in order: chmod +x ./deploy integration.sh ./deploy integration.sh Note: (For macOS users) You may encounter a No such file or directory error due to differences in the sed command.

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- N/A Integrated portal OPEN Portal admin Simultaneous portal updates (such as page, theme, CSS, or script edits) by multiple users is not supported at this time.
- As a result, users cannot access the app's App Detail page in the console.
- For example, from the helm-charts/ directory: ls apigee-org/templates/ Output: apigee-org-guardrails.yaml mart-sa.yaml apigee-proxy-chaining-certificate.yaml mint-task-scheduler-gsa-secret.yaml apigee-proxy-chaining-route.yaml mint-task-scheduler-sa.yaml ax-hash-salt-secret.yaml NOTES.txt connect-agent-gsa-secret.yaml organization.yaml connect-agent-sa.yaml udca-gsa-secret.yaml data-encryption-secret.yaml udca-sa.yaml encryption-keys-secret.yaml watcher-gsa-secret.yaml helpers.tpl watcher-sa.yaml mart-gsa-secret.yaml (Optional:) cp apigee-org/templates/mint-task-scheduler-gsa-secret.yaml /tmp/ cp apigee-org/templates/mint-task-scheduler-sa.yaml /tmp/ rm apigee-org/templates/mint-task-scheduler-gsa-secret.yaml rm apigee-org/templates/mint-task-scheduler-sa.yaml ls apigee-org/templates/ Output: apigee-org-guardrails.yaml mart-gsa-secret.yaml apigee-proxy-chaining-certificate.yaml mart-sa.yaml apigee-proxy-chaining-route.yaml NOTES.txt ax-hash-salt-secret.yaml organization.yaml connect-agent-gsa-secret.yaml udca-gsa-secret.yaml connect-agent-sa.yaml udca-sa.yaml data-encryption-secret.yaml watcher-gsa-secret.yaml encryption-keys-secret.yaml watcher-sa.yaml helpers.tpl 451375397 hybrid 1.14.3 FIXED in hybrid 1.15.1 The apigee-pull-push.sh script can return a No such image error message, for example: Error response from daemon: No such image: gcr.io/apigee-release/hybrid/apigee-stackdriver-logging-agent:latest Workaround: Edit the HELM CHARTS DIR /apigee-operator/etc/tools/apigee-pull-push.sh script to change line 114 in the docker tag() function from: docker tag "${source}/$i" "${dest}/$i:${TAG}" To: docker tag "${source}/$i:${TAG}" "${dest}/$i:${TAG}" 405936071 hybrid 1.15.0 FIXED in hybrid 1.15.1 When metrics.serviceAccountRef or metrics.serviceAccountSecretProviderClass is specified in the overrides.yaml file, the telemetry role will target the wrong service account.
- Edit apigee-operator/templates/ helpers.tpl and remove the following bold lines: {{- define "metricsSA" -}} {{- $metricsName := "apigee-metrics" }} {{- $telemetryName := "apigee-telemetry" -}} {{- $generatedName := include "orgScopeEncodedName" (dict "name" .Values.org) -}} {{- if .Values.gcp.workloadIdentity.enabled -}} {{- printf "%s-sa" $metricsName -}} {{- else if .Values.serviceAccountSecretProviderClass -}} {{- else if .Values.multiOrgCluster -}} {{- printf "%s-%s" $metricsName $generatedName -}} {{- else -}} {{- printf "%s-%s" $metricsName $telemetryName -}} {{- end -}} {{- end -}} The resulting section should look like the following: {{- define "metricsSA" -}} {{- $metricsName := "apigee-metrics" }} {{- $telemetryName := "apigee-telemetry" -}} {{- $generatedName := include "orgScopeEncodedName" (dict "name" .Values.org) -}} {{- if .Values.gcp.workloadIdentity.enabled -}} {{- printf "%s-sa" $metricsName -}} {{- else if .Values.multiOrgCluster -}} {{- printf "%s-%s" $metricsName $generatedName -}} {{- else -}} {{- printf "%s-%s" $metricsName $telemetryName -}} {{- end -}} {{- end -}} Reapply the apigee-operator chart. helm upgrade operator apigee-operator/ \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides .yaml 419856132 hybrid 1.14.2 and newer FIXED in hybrid 1.14.3 and hybrid 1.15.0 If gateway.networking.k8s.io/v1 is installed in your cluster, apigee-ingressgateway-manager may fail to upgrade.

