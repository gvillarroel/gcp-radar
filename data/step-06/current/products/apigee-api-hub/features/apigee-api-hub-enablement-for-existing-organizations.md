---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.540Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Apigee API hub enablement for existing organizations"
feature_slug: "apigee-api-hub-enablement-for-existing-organizations"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "enabled"
  - "enablement"
  - "organizations"
  - "existing"
  - "regions"
---

# Apigee API hub enablement for existing organizations

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Apigee API hub is now enabled for existing Apigee organizations in supported regions and is being rolled out to all eligible organizations.

## Extended Definition

Apigee API hub is now enabled for existing Apigee organizations in supported regions and is being rolled out to all eligible organizations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Edit apigee-operator/templates/ helpers.tpl and remove the following bold lines: {{- define "metricsSA" -}} {{- $metricsName := "apigee-metrics" }} {{- $telemetryName := "apigee-telemetry" -}} {{- $generatedName := include "orgScopeEncodedName" (dict "name" .Values.org) -}} {{- if .Values.gcp.workloadIdentity.enabled -}} {{- printf "%s-sa" $metricsName -}} {{- else if .Values.serviceAccountSecretProviderClass -}} {{- else if .Values.multiOrgCluster -}} {{- printf "%s-%s" $metricsName $generatedName -}} {{- else -}} {{- printf "%s-%s" $metricsName $telemetryName -}} {{- end -}} {{- end -}} The resulting section should look like the following: {{- define "metricsSA" -}} {{- $metricsName := "apigee-metrics" }} {{- $telemetryName := "apigee-telemetry" -}} {{- $generatedName := include "orgScopeEncodedName" (dict "name" .Values.org) -}} {{- if .Values.gcp.workloadIdentity.enabled -}} {{- printf "%s-sa" $metricsName -}} {{- else if .Values.multiOrgCluster -}} {{- printf "%s-%s" $metricsName $generatedName -}} {{- else -}} {{- printf "%s-%s" $metricsName $telemetryName -}} {{- end -}} {{- end -}} Reapply the apigee-operator chart. helm upgrade operator apigee-operator/ \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides .yaml 419856132 hybrid 1.14.2 and newer FIXED in hybrid 1.14.3 and hybrid 1.15.0 If gateway.networking.k8s.io/v1 is installed in your cluster, apigee-ingressgateway-manager may fail to upgrade.
- 310191899 Apigee Apigee hybrid OPEN Timeouts when deploying API proxies and shared flows The following endpoints may experience timeouts when used with a high volume of queries per second (QPS): organizations.environments.apis.revisions. deployments.deploy organizations.environments.apis.revisions. deployments.undeploy organizations.environments.sharedflows.revisions. deployments.deploy organizations.environments.sharedflows.revisions. deployments.undeploy To reduce the likelihood of timeouts, we recommend setting a target of 1 QPS when using these endpoints or checking the status of a deployment before attempting another deployment.
- Update the initial if condition to include the check for federatedWorkloadIdentity : {{ - if or (.Values.serviceAccountSecretProviderClass) (.Values.gcp.workloadIdentity.enabled) (.Values.gcp.federatedWorkloadIdentity.enabled) } } Edit the apigee-operator Helm chart template file apigee-operator/templates/apigee-operator-guardrails.yaml ( Note: This is the apigee-operator-guardrails.yaml template file, not the apigee-operator-guardrails-sa file).
- MCP infrastructure deployment may be subject to capacity limitations in the following regions: asia-east2 asia-northeast3 asia-southeast2 australia-southeast1 europe-central2 europe-west12 europe-west9 me-central2 us-central2 If you see an error related to load balancer provisioning failure, or the provisioning status never changes to Deployed , it might be due to temporary infrastructure capacity limits in the selected region.

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable, disable, and delete observation jobs To change whether an existing observation job is enabled (active), select either Enable or Disable from the Actions menu in the row for that job in the Observation jobs page.
- The following regions are currently supported for API observation and Shadow APIs: australia-southeast1 europe-west2 europe-west9 us-central1 us-east1 us-west1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View API Observations To view API Observations for enabled observation jobs, choose the API Observations tab and then select the Observation job from the list.
- See Manage Advanced API Security for Subscription organizations Pay-as-you-go customers must enable the add-on for at least one environment.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-required-3`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.
- Here are some examples: Update networkConfigs (Global LB) To update the networkConfigs attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = networkConfigs \ -H "Content-Type:application/json" -d \ '{ "networkConfigs": [ { "region": " REGION ", "subnet": "projects/$PROJECT/regions/ REGION /subnetworks/ SUBNET " } ] }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Create an Apigee environment using the following command: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" -H "Content-Type:application/json" -d \ '{ "name": " ENV NAME ", "displayName": " ENV NAME ", "state": "ACTIVE", "deploymentType": "PROXY", "apiProxyType": "PROGRAMMABLE", "type": "COMPREHENSIVE", "properties": {"property": [ { "name": "apigee-service-extension-enabled", "value": "true" } ] } }' Where ENV NAME is the name of the environment you are creating.

