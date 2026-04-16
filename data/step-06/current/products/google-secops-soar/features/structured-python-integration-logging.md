---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.803Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Structured Python integration logging"
feature_slug: "structured-python-integration-logging"
latest_feature_date: "2026-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/administration/audit-logging"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/tipcommon"
keywords:
  - "structured"
  - "python"
  - "integration"
  - "logging"
  - "soar"
  - "logs"
  - "are"
  - "now"
---

# Structured Python integration logging

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

SOAR Python integration logs are now emitted as structured entries in Cloud Logging for better filtering and debugging.

## Extended Definition

SOAR Python integration logs are now emitted as structured entries in Cloud Logging for better filtering and debugging.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/tipcommon](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/tipcommon)

## Supporting Pages

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- For SOAR standalone customers, see Collect SOAR logs Further changes post migration: License type The license type is now determined by the user's assigned permissions in IAM.
- If you have granted the Service Account Token Creator IAM role to the python service account gke-init-python@soar-yyyyyy.iam.gserviceaccount.com , you must grant the same Service Account Token Creator IAM role to the new Python service account soar-python@yyyyyyyyyyy-tp.iam.gserviceaccount.com after the migration.
- The migration aims to modernize the infrastructure and enhance its integration with Google Cloud services, benefiting both Google Security Operations unified customers and standalone SOAR users transitioning to Google Cloud.
- Migrate SOAR permission groups to Google Cloud IAM Note: We are currently implementing upgrades to the Google Cloud IAM migration script to ensure a smoother transition of SOAR Permission groups to IAM.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.
- Response integrations community contribution guidelines Supported in: Google secops SOAR This document outlines the guidelines for submitting Response Integrations to Google SecOps through community contributions.
- Release notes are available in the Integration Details side drawer that's displayed when you click the Details button in the integration.

### "Google SecOps audit logs \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated an access control subject, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateSubject" To find the users who updated an access control role, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRole" To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRule" What's next Cloud Audit Logs overview Understand audit logs Available audit logs Google Cloud Observability pricing: Cloud Logging Need more help?
- Enable the data read setting for your Google Cloud project to record SIEM search queries run by users. chronicle.googleapis.com/feeds.get chronicle.googleapis.com/rules.list chronicle.googleapis.com/curatedRuleSets.countCuratedRuleSetDetections Logs with service name chronicleservicemanager.googleapis.com Google SecOps audit logs written using the chronicleservicemanager.googleapis.com service name are only available at the organization level, not at the project level.
- Actions in Google SecOps that generate this type of log include listing instances and customer metadata. chronicleservicemanager.googleapis.com/gcpAssociations.get chronicleservicemanager.googleapis.com/gcpSettings.get Logs with service name malachitefrontend-pa.googleapis.com The following log types are available for Google SecOps audit logs with the malachitefrontend-pa.googleapis.com service name.
- In the Google Cloud console, use the Logs Explorer to retrieve your audit log entries for the Google Cloud project: In the Google Cloud console, go to the Logging > Logs Explorer page.

### TIPCommon 2.1.0 \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/tipcommon](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/tipcommon)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- TIPCommon 2.1.0 The TIPCommon 2.1.0 library contains the following modules: TIPCommon.adapters PubSubAdapter TIPCommon.base parse case attachment() parse case comment() Action soar action api client name action start time logger params global context entity types entities to update json results attachments contents data tables html reports links entity insights case insights result value output message error output message action start time api client attachments case insights contents data tables entities to update entity insights entity types error output message execution state html reports is first run links logger name output message params result value run() soar action EnrichAction enrichment data entity results global context ActionParamType BOOLEAN CASE PRIORITIES CLOSE CASE REASONS CLOSE ROOT CAUSE CODE CONTENT DDL EMAIL CONTENT ENTITY TYPE MULTI VALUES NULL PASSWORD PLAYBOOK NAME STAGE STRING USER Attachment title filename file contents additional data CaseAttachment attachment id attachment type description is favorite CaseComment comment comment for client modification time unix time in ms for client last editor last editor full name is deleted creator user id creator full name comment id comment type case id is favorite modification time unix time in ms creation time unix time in ms alert identifier CaseInsight title triggered by content severity insight type entity identifier additional data additional data type additional data title CasePriority CRITICAL HIGH INFORMATIONAL LOW MEDIUM CaseStage ASSESSMENT IMPROVEMENT INCIDENT INVESTIGATION RESEARCH TRIAGE CloseCaseOrAlertInconclusiveRootCauses NO CLEAR CONCLUSION CloseCaseOrAlertMaintenanceRootCauses LAB TEST OTHER RULE UNDER CONSTRUCTION CloseCaseOrAlertMaliciousRootCauses EXTERNAL ATTACK INFRASTRUCTURE ISSUE IRRELEVANT TCP UDP PORT MISCONFIGURED SYSTEM OTHER SIMILAR CASE IS ALREADY UNDER INVESTIGATION SYSTEM APPLICATION MALFUNCTION SYSTEM CLOCKED THE ATTACK UNFORESEEN EFFECTS OF CHANGE UNKNOWN CloseCaseOrAlertNotMaliciousRootCauses EMPLOYEE ERROR HUMAN ERROR LAB TEST LEGIT ACTION MISCONFIGURED SYSTEM NONE NORMAL BEHAVIOR OTHER PENETRATION TEST RULE UNDER CONSTRUCTION SIMILAR CASE IS ALREADY UNDER INVESTIGATION UNKNOWN USER MISTAKE CloseCaseOrAlertReasons INCONCLUSIVE MAINTENANCE MALICIOUS NOT MALICIOUS Content title content DataTable title data table EntityInsight entity message triggered by original requesting user EntityTypesEnum ADDRESS ALERT APPLICATION CHILD HASH CHILD PROCESS CLUSTER CONTAINER CREDIT CARD CVE CVE ID DATABASE DEPLOYMENT DESTINATION DOMAIN DOMAIN EMAIL MESSAGE EVENT FILE HASH FILE NAME GENERIC HOST NAME IP SET MAC ADDRESS PARENT HASH PARENT PROCESS PHONE NUMBER POD PROCESS SERVICE SOURCE DOMAIN THREAT ACTOR THREAT CAMPAIGN THREAT SIGNATURE URL USB USER ExecutionState COMPLETED FAILED IN PROGRESS TIMED OUT FullDetailsConfigurationParameter full dict id integration identifier creation time modification time is mandatory description name display name value type optional values HTMLReport title report name report contents IntegrationParamType BOOLEAN EMAIL INTEGER IP NULL PASSWORD STRING Link title link ScriptParameter full dict id creation time modification time custom action id is mandatory default value description name value type optional values Apiable Authable authenticat session() Logger debug() error() exception() info() warn() Session headers verify delete() get() patch() post() put() request() Job api client error msg job start time logger name params soar job start() RefreshTokenRenewalJob api client SuccessFailureTuple failure list success list validate param csv to multi value() JobParameter full dict id is mandatory name type value ActionJsonOutput ActionOutput ConnectorJsonOutput ConnectorOutput alert info from json() TIPCommon.rest build credentials from sa() build credentials from sa attr() generate jwt from credentials() generate jwt from sa() get adc() get auth request() get impersonated credentials() get secops siem tenant credentials() GcpErrorReason IAM PERMISSION DENIED GcpPermissions IAM SA GET ACCESS TOKEN extract project id from sa email() extract project id from sa key() get http client() get workload sa email() retrieve project id() validate impersonation() get auth session() SoarApiErrorServer batch set custom field values() get alert events() get case attachments() get case overview details() get connector cards() get entity data() get env action def files() get federation cases() get full case details() get installed integrations of environment() get installed jobs() get integration full details() get user profile cards() get workflow instance card() list custom field values() list custom fields() remove case tag() save attachment to case wall() set alert priority() set case score bulk() set custom field values() validate response() data models Module AlertCard from json() AlertEvent from json() AlertPriority CRITICAL HIGH INFORMATIVE LOW MEDIUM UNCHANGED BaseAlert raw data alert id to json() BaseDataModel raw data to json() CaseDataStatus ALL CLOSED CREATION PENDING MERGED NEW OPENED CaseDetails from json() is closed is open CasePriority CRITICAL HIGH INFORMATIVE LOW MEDIUM UNCHANGED CaseWallAttachment base64 blob case id file type is important name ConnectorCard from json() ConnectorConnectivityStatusEnum LIVE NO CONNECTIVITY ConnectorParamTypes BOOLEAN DOMAIN EMAIL HOST INTEGER IP NULL PASSWORD SCRIPT STRING URL ConnectorParameter name value type mode is mandatory Container CustomField description display name id scopes type from json() CustomFieldScope ALERTS CASE build parent path() CustomFieldValue custom field id identifier scope values from json() DatabaseContextType ALERT CASE CONNECTOR GLOBAL JOB EventPropertyField from json() FieldGroupItem from json() FieldItem from json() FieldsGroup from json() GoogleServiceAccount to dict() InstalledIntegrationInstance to dict() JobParamType BOOLEAN DOMAIN HOST INTEGER IP NULL PASSWORD STRING URL Parameter raw data SLA from json() ScriptContext action definition name alert id async polling interval in sec async total duration deadline case id connector context default result value environment environment api key execution deadline unix time ms integration identifier integration instance job api key max json result size original requesting user parameters script timeout deadline target entities unique identifier use proxy settings vault settings workflow id workflow instance id to json() update() SmimeEmailConfig ca certificate b64 certificate b64 email private key b64 SmimeType ENCRYPTED SIGNED TypedContainer UserProfileCard from json() encryption Module decrypt() decrypt email() encrypt() get private key() exceptions Module ActionSetupError AlreadyExistsError BadGatewayError CaseResultError ConnectorContextError ConnectorProcessingError ConnectorSetupError ConnectorValidationError DeadlineExceededError EmptyMandatoryValues EnrichActionError FailedPreconditionError GeneralActionException GeneralConnectorException GeneralJobException GoogleCloudException ImpersonationUnauthorizedError InternalJSONDecoderError InvalidArgumentError InvalidTimeException JobSetupError NotFoundError OauthError ParameterExtractionError ParameterValidationError PermissionDeniedError RefreshTokenRenewalJobException ResourceExhaustedError SDKWrapperError SMIMEMailError UnauthenticatedError UnavailableError extraction Module extract action param() extract configuration param() extract connector param() extract job param() extract script param() get connector detailed params() filters Module filter list by type() filter none kwargs() filter old alerts() filter old ids() filter old ids by timestamp() pass whitelist filter() OAuth Module AuthenticationError AuthorizedOauthClient close() request() CredStorage get instance identifier() get token() set token() EncryptionError OAuthAdapter abstractcheck signer() abstractprepare authorized client() abstractrefresh token() abstract static validate bad credentials() OauthManager prepare authorized client() refresh if bad credentials() refresh if expired() save token() OauthToken access token additional data expiration time refresh token signer from cache() to cache() smp io Module read and repair existing content() read content() read ids() read ids by timestamp() write content() write ids() write ids with timestamp() smp time Module change timezone() convert string to timestamp() datetime to rfc3339() get last success time() get timestamps() get timestamps from range() is approaching action timeout() is approaching timeout() save timestamp() siemplify fetch timestamp() siemplify save timestamp() validate timestamp() soar ops Module create slo message() get clean comment body() get file() get secops mode() get soar case comments() get user by id() get user profile cards with pagination() is slo comment() remove prefix from comments() save file() transformation Module add prefix to dict() add prefix to dict keys() adjust to csv() construct csv() convert comma separated to list() convert dict to json result dict() convert list to comma string() dict to flat() flat dict to csv() get unicode() removeprefix() removesuffix() rename dict key() string to multi value() utils Module camel to snake case() cast keys to int() clean result() create and write to tempfiles() get entity original identifier() get function arg names() get unique items by difference() is empty string or none() is first run() is overflowed() is python 37() is test run() none to default value() platform supports 1p api() platform supports db() safe cast bool value from str() safe cast int value from str() validation Module ParameterValidator validate csv() validate ddl() validate email() validate float() validate integer() validate json() lower limit() validate non negative() validate non zero() validate percentage() validate positive() validate range() validate severity() validate upper limit() Need more help?
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

