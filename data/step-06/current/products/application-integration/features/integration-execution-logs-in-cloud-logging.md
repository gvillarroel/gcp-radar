---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.476Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Integration execution logs in Cloud Logging"
feature_slug: "integration-execution-logs-in-cloud-logging"
latest_feature_date: "2024-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/cloud-logging"
  - "https://docs.cloud.google.com/application-integration/docs/audit-logging"
  - "https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger"
keywords:
  - "viewed"
  - "logging"
  - "execution"
  - "logs"
---

# Integration execution logs in Cloud Logging

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration execution logs can now be viewed in Cloud Logging.

## Extended Definition

Application Integration execution logs can now be viewed in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
- [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging)
- [https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger](https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger)

## Supporting Pages

### "View logs in Cloud Logging \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample queries You can use the following queries to view logs in Cloud Logging: To view all integration execution logs: resource.type="integrations.googleapis.com/IntegrationVersion" You can view integration execution logs for a specific execution ID: Searches only the parents executions with the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.executionId=" EXECUTION ID " Searches for both parent and child executions launched from the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" " EXECUTION ID " To view integration execution logs for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" " INTEGRATION NAME " Or resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integration=" INTEGRATION NAME " To view failed integration executions for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integrationExecutionDetails.integrationExecutionState="FAILED" jsonPayload.integration=" INTEGRATION NAME " To view logs with specific request param name.
- In the Log settings , click the Enable Cloud Logging toggle and then from the Severity list, select the severity type of the logs that you want to store in Cloud Logging: Info : Select this option to capture all execution statuses: SUCCEEDED , FAILED , PROCESSING , PENDING , SUSPENDED , RETRY ON HOLD , and CANCELLED .
- View logs in Cloud Logging In Cloud Logging, you can view the Integration execution logs containing integration details, such as status, performance, integration version, request and response parameters, and the trigger and task configurations.
- Go to Application Integration To view the integration execution logs in Cloud Logging, use one of the following methods: In the navigation menu, click Logs , and then, click View Cloud Logs .

### Application Integration audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.integrations.v1alpha.AuthConfigs.GetAuthConfig google.cloud.integrations.v1alpha.AuthConfigs.ListAuthConfigs google.cloud.integrations.v1alpha.Certificates.GetCertificate google.cloud.integrations.v1alpha.Certificates.ListCertificates google.cloud.integrations.v1alpha.Client.GetClient google.cloud.integrations.v1alpha.Client.GetClientMetadata google.cloud.integrations.v1alpha.SfdcChannels.GetSfdcChannel google.cloud.integrations.v1alpha.SfdcChannels.ListSfdcChannels google.cloud.integrations.v1alpha.SfdcInstances.GetSfdcInstance google.cloud.integrations.v1alpha.SfdcInstances.ListSfdcInstances ADMIN WRITE google.cloud.integrations.v1alpha.AuthConfigs.CreateAuthConfig google.cloud.integrations.v1alpha.AuthConfigs.DeleteAuthConfig google.cloud.integrations.v1alpha.AuthConfigs.UpdateAuthConfig google.cloud.integrations.v1alpha.Certificates.CreateCertificate google.cloud.integrations.v1alpha.Certificates.DeleteCertificate google.cloud.integrations.v1alpha.Certificates.UpdateCertificate google.cloud.integrations.v1alpha.Client.DeprovisionClient google.cloud.integrations.v1alpha.Client.ProvisionClient google.cloud.integrations.v1alpha.Client.ReplaceServiceAccount google.cloud.integrations.v1alpha.Client.SwitchEncryption google.cloud.integrations.v1alpha.Client.SwitchVariableMasking google.cloud.integrations.v1alpha.SfdcChannels.CreateSfdcChannel google.cloud.integrations.v1alpha.SfdcChannels.DeleteSfdcChannel google.cloud.integrations.v1alpha.SfdcChannels.UpdateSfdcChannel google.cloud.integrations.v1alpha.SfdcInstances.CreateSfdcInstance google.cloud.integrations.v1alpha.SfdcInstances.DeleteSfdcInstance google.cloud.integrations.v1alpha.SfdcInstances.UpdateSfdcInstance DATA READ google.cloud.integrations.v1alpha.Condition.ValidateCondition google.cloud.integrations.v1alpha.Executions.DownloadExecution google.cloud.integrations.v1alpha.Executions.GetExecution google.cloud.integrations.v1alpha.Executions.ListExecutions google.cloud.integrations.v1alpha.Experiment.ListExperiments google.cloud.integrations.v1alpha.IntegrationVersions.DownloadIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.DownloadJsonPackage google.cloud.integrations.v1alpha.IntegrationVersions.GetIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.ListIntegrationVersions google.cloud.integrations.v1alpha.Integrations.ListIntegrations google.cloud.integrations.v1alpha.Integrations.ListTaskEntities google.cloud.integrations.v1alpha.JsonSchema.GenerateJsonSchema google.cloud.integrations.v1alpha.Suspensions.ListSuspensions google.cloud.integrations.v1alpha.TemplateService.DownloadTemplate google.cloud.integrations.v1alpha.TemplateService.GetTemplate google.cloud.integrations.v1alpha.TemplateService.ListTemplates google.cloud.integrations.v1alpha.TemplateService.SearchTemplates google.cloud.integrations.v1alpha.TransformFunction.ListTransformFunctionDefinitions google.cloud.integrations.v1alpha.TransformFunction.ListTransformFunctions google.cloud.integrations.v2.Executions.ListExecutions DATA WRITE google.cloud.integrations.v1alpha.CloudFunctions.CreateCloudFunction google.cloud.integrations.v1alpha.Executions.ExecuteEvent google.cloud.integrations.v1alpha.Executions.ExecuteIntegrations google.cloud.integrations.v1alpha.Executions.ScheduleIntegrations google.cloud.integrations.v1alpha.Executions.TestIntegrations google.cloud.integrations.v1alpha.IntegrationVersions.CreateIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.DeleteIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.PublishIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.TakeoverEditLock google.cloud.integrations.v1alpha.IntegrationVersions.UnpublishIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.UpdateIntegrationVersion google.cloud.integrations.v1alpha.IntegrationVersions.UploadIntegrationVersion google.cloud.integrations.v1alpha.Integrations.DeleteIntegration google.cloud.integrations.v1alpha.Suspensions.LiftSuspension google.cloud.integrations.v1alpha.Suspensions.ResolveSuspension google.cloud.integrations.v1alpha.TemplateService.CreateTemplate google.cloud.integrations.v1alpha.TemplateService.DeleteTemplate google.cloud.integrations.v1alpha.TemplateService.ImportTemplate google.cloud.integrations.v1alpha.TemplateService.ShareTemplate google.cloud.integrations.v1alpha.TemplateService.UnshareTemplate google.cloud.integrations.v1alpha.TemplateService.UpdateTemplate google.cloud.integrations.v1alpha.TemplateService.UploadTemplate google.cloud.integrations.v1alpha.TemplateService.UseTemplate google.cloud.integrations.v2.Executions.ExecuteIntegration google.cloud.integrations.v2.Executions.ScheduleIntegration API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Application Integration. google.cloud.integrations.v1alpha.AuthConfigs The following audit logs are associated with methods belonging to google.cloud.integrations.v1alpha.AuthConfigs .
- Filter for this method : protoPayload.methodName="google.cloud.integrations.v2.Executions.ScheduleIntegration" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Application Integration audit logs use the service name integrations.googleapis.com .
- Filter for this method : protoPayload.methodName="google.cloud.integrations.v1alpha.TransformFunction.ListTransformFunctions" google.cloud.integrations.v2.Executions The following audit logs are associated with methods belonging to google.cloud.integrations.v2.Executions .

### "Cloud Scheduler trigger \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger](https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These logs are stored in your Google Cloud project and can only be viewed from the Cloud Logging Logs Explorer page.
- A Cloud Scheduler job is created using the following naming convention to avoid any job duplication errors: INTEGRATION NAME V INTEGRATION VERSION CLOUD SCHEDULER TRIGGER NUMBER Example : DemoIntegration V1 1 Trigger logs A Cloud Scheduler trigger generates logs at the start and end of each integration execution.
- You can view the Cloud Scheduler trigger logs in the Cloud Logging Logs Explorer page: In the Google Cloud console, go to the Cloud Scheduler page.
- The Cloud Logging Logs Explorer page appears displaying the logs generated by the Cloud Scheduler trigger .

