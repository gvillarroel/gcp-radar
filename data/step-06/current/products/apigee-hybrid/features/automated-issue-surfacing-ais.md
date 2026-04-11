---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.252Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Automated Issue Surfacing (AIS)"
feature_slug: "automated-issue-surfacing-ais"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "troubleshooting-linked error"
  - "Automated Issue Surfacing"
  - "issue surfacing tool"
  - "issue surfacing"
  - "kubectl cluster scan"
  - "AIS runtime tool"
  - "AIS"
---

# Automated Issue Surfacing (AIS)

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Automated Issue Surfacing (AIS) is a new Apigee hybrid runtime tool that scans the cluster via kubectl and surfaces issues with detailed, troubleshooting-linked error messages.

## Extended Definition

Automated Issue Surfacing (AIS) is a new Apigee hybrid runtime tool that scans the cluster via kubectl and surfaces issues with detailed, troubleshooting-linked error messages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Automated issue surfacing . watcher.gsa Advanced Introduced in version: 1.10.0 Default value: None Chart: apigee-org Helm only : The email address of the apigee-watcher Google IAM service account (GSA) to associate with the corresponding Kubernetes service account when enabling Workload Identity on GKE clusters using Helm charts.
- Each Watcher instance may have different route creation logic, which can cause downtime. watcher.replicaCountMax . watcher.args.issueScanInterval Advanced Introduced in version: 1.10.0 Default value: 60 Chart: apigee-org The interval in seconds for how often Watcher scans the runtime plane for automated issue surfacing.
- For more information, see Automated issue surfacing . watcher.args.enableLeaderElect Advanced Introduced in version: 1.13.0 Default value: true Chart: apigee-org When true (the default) watcher.args.enableLeaderElect selects a single watcher pod to manage and report the routing information.
- For more information, see Custom annotations . watcher.args.enableIssueScanning Advanced Introduced in version: 1.10.0 Default value: true Chart: apigee-org Enables or disables Automated issue surfacing.

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- See the AppGroups preview launch announcement for details. v1.10.0 Feature Support for environment-level scaling Starting in version 1.9.3, Apigee hybrid added the following environment configuration properties that enable you to specify environment-specific scaling in the overrides.yaml file: envs[].runtime.replicaCountMax envs[].runtime.replicaCountMin envs[].synchronizer.replicaCountMax envs[].synchronizer.replicaCountMin envs[].udca.replicaCountMax envs[].udca.replicaCountMin Documentation: Environment-based scaling v1.10.0 Feature Automated Issue Surfacing (AIS) Starting with Apigee hybrid 1.10, Apigee hybrid offers a new tool that examines the hybrid runtime and surfaces issues by running a kubectl command.
- See Automated issue surfacing and Configuration property reference, watcher . v1.10.0 Feature Pre-install Cluster Check Kubernetes job Starting in version 1.10, Apigee hybrid offers a new tool that examines the hybrid cluster before you install the hybrid runtime.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- The following example shows the configuration for the RaiseFault policy: <RaiseFault name="ModelArmorTemplateErrorCodeHandler"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <FaultResponse> <Set> <Payload contentType="application/json"> <ErrorResponse> <Error> <Status>{sanitizationMetadata.errorCode}</Status> <Message>{sanitizationMetadata.errorMessage}</Message> </Error> </ErrorResponse> </Payload> <StatusCode>401</StatusCode> <ReasonPhrase>Invalid API Key</ReasonPhrase> </Set> </FaultResponse> </RaiseFault> Once the new policy is added and the API proxy is deployed, requests to the proxy that trigger the error specified in the Model Armor template metadata will raise a fault with the error code and error message defined in the RaiseFault policy.
- To implement this example: Add template metadata to your Model Armor template, as shown in the following example: "templateMetadata" : { { "customPromptSafetyErrorCode" : 1099 , "customPromptSafetyErrorMessage" : "Prompt not allowed" , } } Add the RaiseFault policy to the API proxy response PostFlow .

