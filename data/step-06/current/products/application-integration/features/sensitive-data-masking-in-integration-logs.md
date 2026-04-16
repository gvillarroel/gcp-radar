---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.476Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Sensitive data masking in integration logs"
feature_slug: "sensitive-data-masking-in-integration-logs"
latest_feature_date: "2024-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/audit-logging"
  - "https://docs.cloud.google.com/application-integration/docs/cancel-executions"
  - "https://docs.cloud.google.com/application-integration/docs/cloud-logging"
keywords:
  - "sensitive"
  - "masking"
  - "provides"
  - "execution"
  - "logs"
---

# Sensitive data masking in integration logs

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration now provides data masking in integration execution logs to prevent sensitive data from appearing in log output.

## Extended Definition

Application Integration now provides data masking in integration execution logs to prevent sensitive data from appearing in log output.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging)
- [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions)
- [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)

## Supporting Pages

### Application Integration audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.integrations.v1alpha.AuthConfigs.GetAuthConfig google.cloud.integrations.v1alpha.AuthConfigs.ListAuthConfigs google.cloud.integrations.v1alpha.Certificates.GetCertificate google.cloud.integrations.v1alpha.Certificates.ListCertificates google.cloud.integrations.v1alpha.Client.GetClient google.cloud.integrations.v1alpha.Client.GetClientMetadata google.cloud.integrations.v1alpha.SfdcChannels.GetSfdcChannel google.cloud.integrations.v1alpha.SfdcChannels.ListSfdcChannels google.cloud.integrations.v1alpha.SfdcInstances.GetSfdcInstance google.cloud.integrations.v1alpha.SfdcInstances.ListSfdcInstances ADMIN WRITE google.cloud.integrations.v1alpha.AuthConfigs.CreateAuthConfig google.cloud.integrations.v1alpha.AuthConfigs.DeleteAuthConfig google.cloud.integrations.v1alpha.AuthConfigs.UpdateAuthConfig google.cloud.integrations.v1alpha.Certificates.CreateCertificate google.cloud.integrations.v1alpha.Certificates.DeleteCertificate google.cloud.integrations.v1alpha.Certificates.UpdateCertificate google.cloud.integrations.v1alpha.Client.DeprovisionClient google.cloud.integrations.v1alpha.Client.ProvisionClient google.cloud.integrations.v1alpha.Client.ReplaceServiceAccount google.cloud.integrations.v1alpha.Client.SwitchEncryption google.cloud.integrations.v1alpha.Client.SwitchVariableMasking google.cloud.integrations.v1alpha.SfdcChannels.CreateSfdcChannel google.cloud.integrations.v1alpha.SfdcChannels.DeleteSfdcChannel google.cloud.integrations.v1alpha.SfdcChannels.UpdateSfdcChannel google.cloud.integrations.v1alpha.SfdcInstances.CreateSfdcInstance google.cloud.integrations.v1alpha.SfdcInstances.DeleteSfdcInstance google.cloud.integrations.v1alpha.SfdcInstances.UpdateSfdcInstance DATA READ google.cloud.integrations.v1alpha.Condition.ValidateCondition google.cloud.integrations.v1alpha.Executions.DownloadExecution google.cloud.integrations.v1alpha.Executions.GetExecution google.cloud.integrations.v1alpha.Executions.ListExecutions google.cloud.integrations.v1alpha.Experiment.ListExperiments google.cloud.integrations.v1alpha.IntegrationVersions.DownloadIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.DownloadJsonPackage google.cloud.integrations.v1alpha.IntegrationVersions.GetIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.ListIntegrationVersions google.cloud.integrations.v1alpha.Integrations.ListIntegrations google.cloud.integrations.v1alpha.Integrations.ListTaskEntities google.cloud.integrations.v1alpha.JsonSchema.GenerateJsonSchema google.cloud.integrations.v1alpha.Suspensions.ListSuspensions google.cloud.integrations.v1alpha.TemplateService.DownloadTemplate google.cloud.integrations.v1alpha.TemplateService.GetTemplate google.cloud.integrations.v1alpha.TemplateService.ListTemplates google.cloud.integrations.v1alpha.TemplateService.SearchTemplates google.cloud.integrations.v1alpha.TransformFunction.ListTransformFunctionDefinitions google.cloud.integrations.v1alpha.TransformFunction.ListTransformFunctions google.cloud.integrations.v2.Executions.ListExecutions DATA WRITE google.cloud.integrations.v1alpha.CloudFunctions.CreateCloudFunction google.cloud.integrations.v1alpha.Executions.ExecuteEvent google.cloud.integrations.v1alpha.Executions.ExecuteIntegrations google.cloud.integrations.v1alpha.Executions.ScheduleIntegrations google.cloud.integrations.v1alpha.Executions.TestIntegrations google.cloud.integrations.v1alpha.IntegrationVersions.CreateIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.DeleteIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.PublishIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.TakeoverEditLock google.cloud.integrations.v1alpha.IntegrationVersions.UnpublishIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.UpdateIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.UploadIntegrationVersion google.cloud.integrations.v1alpha.Integrations.DeleteIntegration google.cloud.integrations.v1alpha.Suspensions.LiftSuspension google.cloud.integrations.v1alpha.Suspensions.ResolveSuspension google.cloud.integrations.v1alpha.TemplateService.CreateTemplate google.cloud.integrations.v1alpha.TemplateService.DeleteTemplate google.cloud.integrations.v1alpha.TemplateService.ImportTemplate google.cloud.integrations.v1alpha.TemplateService.ShareTemplate google.cloud.integrations.v1alpha.TemplateService.UnshareTemplate google.cloud.integrations.v1alpha.TemplateService.UpdateTemplate google.cloud.integrations.v1alpha.TemplateService.UploadTemplate google.cloud.integrations.v1alpha.TemplateService.UseTemplate google.cloud.integrations.v2.Executions.ExecuteIntegration google.cloud.integrations.v2.Executions.ScheduleIntegration API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Application Integration. google.cloud.integrations.v1alpha.AuthConfigs The following audit logs are associated with methods belonging to google.cloud.integrations.v1alpha.AuthConfigs .
- Filter for this method : protoPayload.methodName="google.cloud.integrations.v2.Executions.ScheduleIntegration" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.
- Filter for this method : protoPayload.methodName="google.cloud.integrations.v1alpha.Client.SwitchVariableMasking" google.cloud.integrations.v1alpha.CloudFunctions The following audit logs are associated with methods belonging to google.cloud.integrations.v1alpha.CloudFunctions .
- Filter for this method : protoPayload.methodName="google.cloud.integrations.v1alpha.TransformFunction.ListTransformFunctions" google.cloud.integrations.v2.Executions The following audit logs are associated with methods belonging to google.cloud.integrations.v2.Executions .

### "View logs in Cloud Logging \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample queries You can use the following queries to view logs in Cloud Logging: To view all integration execution logs: resource.type="integrations.googleapis.com/IntegrationVersion" You can view integration execution logs for a specific execution ID: Searches only the parents executions with the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.executionId=" EXECUTION ID " Searches for both parent and child executions launched from the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" " EXECUTION ID " To view integration execution logs for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" " INTEGRATION NAME " Or resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integration=" INTEGRATION NAME " To view failed integration executions for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integrationExecutionDetails.integrationExecutionState="FAILED" jsonPayload.integration=" INTEGRATION NAME " To view logs with specific request param name.
- In the Log settings , click the Enable Cloud Logging toggle and then from the Severity list, select the severity type of the logs that you want to store in Cloud Logging: Info : Select this option to capture all execution statuses: SUCCEEDED , FAILED , PROCESSING , PENDING , SUSPENDED , RETRY ON HOLD , and CANCELLED .
- View logs in Cloud Logging In Cloud Logging, you can view the Integration execution logs containing integration details, such as status, performance, integration version, request and response parameters, and the trigger and task configurations.
- Go to Application Integration To view the integration execution logs in Cloud Logging, use one of the following methods: In the navigation menu, click Logs , and then, click View Cloud Logs .

### Cancel executions \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can cancel an integration execution if the integration is in one of the following execution states : Suspended On hold Retry on hold Cancel an execution To cancel an execution, select one of the following options: Console In Application Integration , go to the Logs page.
- You can't cancel an integration execution if the integration is in one of the following states: In process Succeeded Failed Canceled What's next Learn about logs in Application Integration .
- The Execution Logs page appears.
- API Call the projects.locations.integrations.executions.cancel method and provide the ID of the execution that you want to cancel: curl -X POST https://integrations.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /integrations/ INTEGRATION NAME /executions/ EXECUTION ID :cancel -H "Authorization: Bearer $TOKEN" Limitations Cancel execution is subject to the following limitations: Canceling an execution that is triggered by a Schedule trigger isn't supported.

