---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.764Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Pay-as-you-go provisioning completion notifications"
feature_slug: "apigee-pay-as-you-go-provisioning-completion-notifications"
latest_feature_date: "2023-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
keywords:
  - "notifications"
  - "completion"
  - "provisioning"
---

# Apigee Pay-as-you-go provisioning completion notifications

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee now sends Google Cloud Console notifications when Pay-as-you-go provisioning completes, allowing users to monitor progress outside the provisioning page.

## Extended Definition

Apigee now sends Google Cloud Console notifications when Pay-as-you-go provisioning completes, allowing users to monitor progress outside the provisioning page.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)

## Supporting Pages

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: N/A

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- Configure the traffic extension This section describes how to configure the traffic service extension for your Extension Processor, using the following steps: Create the traffic extension with the Extension Processor provisioning API .
- Create the traffic extension with the Extension Processor provisioning API In this step, create a traffic service extension for your Extension Processor using the Extension Processor provisioning API.
- For more details about provisioning paid Apigee instances, see Before you begin .

### Audit logging for API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.apihub.v1.ApiHubPlugin.GetPlugin google.cloud.apihub.v1.Provisioning.LookupApiHubInstance google.cloud.apihub.v1.RuntimeProjectAttachmentService.ListRuntimeProjectAttachments google.cloud.apihub.v1.RuntimeProjectAttachmentService.LookupRuntimeProjectAttachment ADMIN WRITE google.cloud.apihub.v1.ApiHubPlugin.DisablePlugin google.cloud.apihub.v1.ApiHubPlugin.EnablePlugin google.cloud.apihub.v1.HostProjectRegistrationService.CreateHostProjectRegistration google.cloud.apihub.v1.Provisioning.CreateApiHubInstance (LRO) google.cloud.apihub.v1.RuntimeProjectAttachmentService.CreateRuntimeProjectAttachment DATA READ google.cloud.apihub.v1.ApiHub.GetApi google.cloud.apihub.v1.ApiHub.GetAttribute google.cloud.apihub.v1.ApiHub.GetDeployment google.cloud.apihub.v1.ApiHub.GetExternalApi google.cloud.apihub.v1.ApiHub.GetSpec google.cloud.apihub.v1.ApiHub.GetSpecContents google.cloud.apihub.v1.ApiHub.GetVersion google.cloud.apihub.v1.ApiHub.ListApis google.cloud.apihub.v1.ApiHub.ListAttributes google.cloud.apihub.v1.ApiHub.ListDeployments google.cloud.apihub.v1.ApiHub.ListExternalApis google.cloud.apihub.v1.ApiHub.ListSpecs google.cloud.apihub.v1.ApiHub.ListVersions DATA WRITE google.cloud.apihub.v1.ApiHub.CreateApi google.cloud.apihub.v1.ApiHub.CreateAttribute google.cloud.apihub.v1.ApiHub.CreateDeployment google.cloud.apihub.v1.ApiHub.CreateExternalApi google.cloud.apihub.v1.ApiHub.CreateSpec google.cloud.apihub.v1.ApiHub.CreateVersion google.cloud.apihub.v1.ApiHub.DeleteApi google.cloud.apihub.v1.ApiHub.DeleteAttribute google.cloud.apihub.v1.ApiHub.DeleteDeployment google.cloud.apihub.v1.ApiHub.DeleteExternalApi google.cloud.apihub.v1.ApiHub.DeleteSpec google.cloud.apihub.v1.ApiHub.DeleteVersion google.cloud.apihub.v1.ApiHub.UpdateApi google.cloud.apihub.v1.ApiHub.UpdateAttribute google.cloud.apihub.v1.ApiHub.UpdateDeployment google.cloud.apihub.v1.ApiHub.UpdateExternalApi google.cloud.apihub.v1.ApiHub.UpdateSpec google.cloud.apihub.v1.ApiHub.UpdateVersion API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for API hub. google.cloud.apihub.v1.ApiHub The following audit logs are associated with methods belonging to google.cloud.apihub.v1.ApiHub .
- CreateApiHubInstance Method : google.cloud.apihub.v1.Provisioning.CreateApiHubInstance Audit log type : Admin activity Permissions : apihub.apiHubInstances.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.apihub.v1.Provisioning.CreateApiHubInstance" LookupApiHubInstance Method : google.cloud.apihub.v1.Provisioning.LookupApiHubInstance Audit log type : Data access Permissions : apihub.apiHubInstances.list - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.apihub.v1.Provisioning.LookupApiHubInstance" google.cloud.apihub.v1.RuntimeProjectAttachmentService The following audit logs are associated with methods belonging to google.cloud.apihub.v1.RuntimeProjectAttachmentService .
- Filter for this method : protoPayload.methodName="google.cloud.apihub.v1.HostProjectRegistrationService.CreateHostProjectRegistration" google.cloud.apihub.v1.Provisioning The following audit logs are associated with methods belonging to google.cloud.apihub.v1.Provisioning .

