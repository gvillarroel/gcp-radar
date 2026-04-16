---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.547Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Optional Vertex Search disablement during provisioning"
feature_slug: "optional-vertex-search-disablement-during-provisioning"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
keywords:
  - "disablement"
  - "optional"
  - "during"
  - "provisioning"
  - "vertex"
  - "search"
---

# Optional Vertex Search disablement during provisioning

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub provisioning now supports disabling Vertex Search for an instance.

## Extended Definition

API hub provisioning now supports disabling Vertex Search for an instance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)

## Supporting Pages

### Provision API hub in the Cloud console \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- Source ID: `site-docs-root-required-3`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Step 2: Location You need to select two locations: First, the physical location (region) where you'd like to host your Apigee API hub instance, and second, the multi-region in which your Vertex AI search data will be stored: From the drop-down list, select the region in which you want your API hub instance to be hosted.
- If the Enable Vertex search capability option is enabled (the default), you must select the multi-region location in which to store your Vertex AI-based search data, the data associated with the Semantic Search feature of API hub.
- Note: When selected, the Vertex search option automatically provisions Vertex AI in a Google Cloud region that exists within the same multi-region as the region in which API hub is hosted.
- Auto-enablement of the Apigee API during the API hub provisioning process has no pricing or billing implications for your project.

### Provision API hub using Terraform \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using CMEK resource "google apihub api hub instance" "apihub-instance-search"{ project = " PROJECT ID " api hub instance id = " API HUB INSTANCE ID " description = " DESCRIPTION " location = " LOCATION " config { encryption type = "CMEK" cmek key name = "projects/ PROJECT ID /locations/ HUB LOCATION /keyRings/ KEY RING ID /cryptoKeys/ KEY ID " disable search = SEMANTIC SEARCH BOOLEAN vertex location = " VERTEX AI LOCATION " } } Replace the following: PROJECT ID : the ID of the Google Cloud project.
- Auto-enablement of the Apigee API during the API hub provisioning process has no pricing or billing implications for your project.
- Enabling the Apigee API during the API hub provisioning process has no pricing or billing implications for your project.
- Grant the apihub.admin and apihub.runtimeProjectServiceAgent roles to the API hub default service account: resource "google project iam member" "apihub service identity permission" { for each = toset([ "roles/apihub.admin", "roles/apihub.runtimeProjectServiceAgent" ]) role = each.key member = "serviceAccount:${google project service identity.apihub service identity.email}" depends on = [google project service identity.apihub service identity] } Optional: Grant the API hub service identity access to the CMEK key.

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- For example, from the helm-charts/ directory: ls apigee-org/templates/ Output: apigee-org-guardrails.yaml mart-sa.yaml apigee-proxy-chaining-certificate.yaml mint-task-scheduler-gsa-secret.yaml apigee-proxy-chaining-route.yaml mint-task-scheduler-sa.yaml ax-hash-salt-secret.yaml NOTES.txt connect-agent-gsa-secret.yaml organization.yaml connect-agent-sa.yaml udca-gsa-secret.yaml data-encryption-secret.yaml udca-sa.yaml encryption-keys-secret.yaml watcher-gsa-secret.yaml helpers.tpl watcher-sa.yaml mart-gsa-secret.yaml (Optional:) cp apigee-org/templates/mint-task-scheduler-gsa-secret.yaml /tmp/ cp apigee-org/templates/mint-task-scheduler-sa.yaml /tmp/ rm apigee-org/templates/mint-task-scheduler-gsa-secret.yaml rm apigee-org/templates/mint-task-scheduler-sa.yaml ls apigee-org/templates/ Output: apigee-org-guardrails.yaml mart-gsa-secret.yaml apigee-proxy-chaining-certificate.yaml mart-sa.yaml apigee-proxy-chaining-route.yaml NOTES.txt ax-hash-salt-secret.yaml organization.yaml connect-agent-gsa-secret.yaml udca-gsa-secret.yaml connect-agent-sa.yaml udca-sa.yaml data-encryption-secret.yaml watcher-gsa-secret.yaml encryption-keys-secret.yaml watcher-sa.yaml helpers.tpl 451375397 hybrid 1.14.3 FIXED in hybrid 1.15.1 The apigee-pull-push.sh script can return a No such image error message, for example: Error response from daemon: No such image: gcr.io/apigee-release/hybrid/apigee-stackdriver-logging-agent:latest Workaround: Edit the HELM CHARTS DIR /apigee-operator/etc/tools/apigee-pull-push.sh script to change line 114 in the docker tag() function from: docker tag "${source}/$i" "${dest}/$i:${TAG}" To: docker tag "${source}/$i:${TAG}" "${dest}/$i:${TAG}" 405936071 hybrid 1.15.0 FIXED in hybrid 1.15.1 When metrics.serviceAccountRef or metrics.serviceAccountSecretProviderClass is specified in the overrides.yaml file, the telemetry role will target the wrong service account.
- Delete CRDs List the istio.io CRDs in your cluster to a CSV file: kubectl get crd -o custom-columns=NAME:metadata.name grep istio.io > istio-crd.csv Optional: Save the CRDs locally in case you need to recreate them: kubectl get crd $(cat istio-crd.csv) -o yaml > istio-crd.yaml Delete the istio.io CRDs: Dry run: kubectl delete crd $(cat istio-crd.csv) --dry-run=client Tip: You can use either --dry-run=client or --dry-run=server .
- MCP infrastructure deployment may be subject to capacity limitations in the following regions: asia-east2 asia-northeast3 asia-southeast2 australia-southeast1 europe-central2 europe-west12 europe-west9 me-central2 us-central2 If you see an error related to load balancer provisioning failure, or the provisioning status never changes to Deployed , it might be due to temporary infrastructure capacity limits in the selected region.
- 245664917 hybrid 1.8.x FIXED Apigee hybrid upgrade error can be ignored During upgrade to Apigee hybrid 1.8.x, after running apigeectl init and confirming that check-ready succeeded, you may notice, if you view the pods, that the Cassandra schema validation job is in an error state.

