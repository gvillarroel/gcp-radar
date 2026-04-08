# Application Integration

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 57
Unique features: 85

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-02 | Pub/Sub ordering key publishing |  | Application Integration can publish to Google Cloud Pub/Sub topics using ordering keys to preserve FIFO message order for message processing. |
| 2025-10-31 | AI-powered troubleshooting for failed executions |  | Application Integration now provides Gemini-based analysis of failed execution logs to identify root causes and provide actionable remediation steps. |
| 2025-10-10 | Custom constraints for Application Integration resources |  | Organization Policy custom constraints can now be applied to specific fields of certain Application Integration resources for finer-grained governance. |
| 2025-04-02 | Dialogflow CX conversational agent integration |  | Application Integration can directly integrate with Dialogflow CX to build conversational agents within workflows using API triggers. |
| 2025-01-23 | Rhino JavaScript execution engine | 2025-01-24 | Application Integration deprecates Rhino as the JavaScript execution engine, moving new JavaScript tasks to V8 while existing published Rhino tasks remain until migrated; deprecated on 2025-01-24. |
| 2024-12-19 | Custom connectors for Google Cloud Marketplace |  | Application Integration now supports building and publishing custom connectors in Google Cloud Marketplace. |
| 2024-12-13 | Integration templates |  | Application Integration now provides pre-defined integration templates as reusable blueprints to accelerate building common integration flows. |
| 2024-12-13 | OpenAPI specification generation for integrations |  | Published integrations using API triggers can now generate and display an OpenAPI Specification for easier understanding and analysis of API interactions. |
| 2024-11-18 | Gemini-assisted JavaScript task authoring |  | Application Integration can recommend and assist with JavaScript tasks using Gemini for complex data-mapping logic and task code understanding. |
| 2024-10-28 | Task-level conditional and default failure policies |  | Tasks can now be configured with multiple ordered conditional failure policies and a fallback default policy based on error codes or execution variables. |
| 2024-10-08 | Gemini Code Assist for integration development |  | Gemini Code Assist is generally available in Application Integration and can recommend Call REST Endpoint tasks and configuration from workflow context, especially with API Hub enabled. |
| 2024-10-06 | Cancel suspended executions |  | Application Integration now allows users to cancel executions that are suspended due to approvals or technical issues. |
| 2024-10-06 | Diagram mode in Data Transformer task |  | Diagram mode adds a console-based data transformation editor experience for selecting input/output variables and defining transformations. |
| 2024-10-06 | Integration test cases |  | Test case support for complex integrations enables creating, configuring, managing, and running integration test cases. |
| 2024-10-06 | Local logging in async mode |  | Local logging for new integrations is enabled by default in async mode, writing log data at fixed intervals or when execution completes. |
| 2024-10-06 | Replay failed executions |  | Application Integration can replay a failed integration execution using the same parameters as the original run. |
| 2024-09-25 | Cloud Logging integration execution logs |  | Integration execution logs are now viewable in Cloud Logging as a generally available capability. |
| 2024-09-24 | Resolve JSON Path data transformer function |  | The Resolve JSON Path data transformer function resolves a JSON path against a JSON object. |
| 2024-09-12 | XSLT Transform data transformer function |  | The XSLT Transform function converts an XML string using a specified XSL string in data transformation workflows. |
| 2024-08-22 | Canvas view in Integration editor |  | The integration editor introduces a new Canvas view for building integration flows with improved responsiveness and a clearer visual layout. |
| 2024-08-18 | Task and connector browsing in editor |  | The Application Integration editor now lets users search, browse, and select tasks and connectors from the Tasks list. |
| 2024-07-22 | Solace trigger |  | The Solace trigger is now available in preview for Application Integration. |
| 2024-07-15 | Custom connector sharing across projects |  | Custom connectors can now be shared between Google Cloud projects by exporting and importing connector specifications. |
| 2024-07-11 | SAP ERP trigger |  | The SAP ERP connector event trigger is generally available for Application Integration. |
| 2024-07-11 | SAP Gateway trigger |  | The SAP Gateway connector event trigger is generally available for Application Integration. |
| 2024-05-26 | TIBCO EMS trigger |  | The TIBCO EMS trigger is now available in preview for Application Integration. |
| 2024-05-20 | Terraform support for Application Integration |  | Application Integration now supports Terraform workflows, including provisioning new regions and creating authentication profiles through Terraform resources. |
| 2024-04-29 | Gemini-powered Application Integration authoring |  | Application Integration now offers Gemini-powered integration authoring in preview, including integration creation, connector task configuration, edge condition/task additions, and integration description generation. |
| 2024-04-28 | Cloud Pub/Sub trigger service account config variables |  | Cloud Pub/Sub trigger configuration now supports a config variable for the service account. |
| 2024-04-21 | Apache Kafka trigger |  | Application Integration now offers Apache Kafka trigger support in preview. |
| 2024-03-06 | Application Integration config variables |  | Application Integration now supports config variables, enabling externalized integration configuration. |
| 2024-02-23 | Private triggers |  | Application Integration now supports private triggers to split large flows into multiple subflows. |
| 2024-02-19 | Sensitive data masking in integration logs |  | Application Integration now provides data masking in integration execution logs to prevent sensitive data from appearing in log output. |
| 2024-02-12 | Integration execution logs in Cloud Logging |  | Application Integration execution logs can now be viewed in Cloud Logging. |
| 2024-01-24 | Custom connectors |  | Application Integration now supports custom connectors based on the OpenAPI specification so custom integrations can be built with non-standard connectors. |
| 2024-01-23 | getIntegrationVersionId data transformer function |  | A new data transformer function, getIntegrationVersionId(), is now available to return the current integration version ID. |
| 2024-01-23 | getIntegrationVersionNumber data transformer function |  | A new data transformer function, getIntegrationVersionNumber(), is now available to return the current integration version number. |
| 2024-01-16 | Webhook triggers |  | Application Integration now supports webhook triggers in preview for sources that emit events via webhooks. |
| 2023-12-01 | Cross-project Cloud Pub/Sub topics |  | Cloud Pub/Sub triggers now support cross-project topics, with service account configuration required for new setups and when updating existing trigger topics. |
| 2023-11-23 | HubSpot trigger |  | Application Integration added a HubSpot trigger in preview for starting integrations from HubSpot events. |
| 2023-11-21 | IBM MQ connector trigger |  | Application Integration introduced an IBM MQ connector trigger in preview so integrations can be invoked by IBM MQ events. |
| 2023-11-21 | RabbitMQ connector trigger |  | Application Integration introduced a RabbitMQ connector trigger in preview so integrations can be invoked by RabbitMQ events. |
| 2023-10-10 | IAM Conditions for Application Integration |  | Application Integration now supports IAM Conditions for fine-grained, attribute-based access control. |
| 2023-10-10 | Integration details summary view |  | The Integration designer now supports a detailed summary view for an integration. |
| 2023-10-10 | Manifest XML data transformer function |  | Application Integration added a Manifest XML data transformer function that converts JSON into an XML string. |
| 2023-10-10 | Parse XML data transformer function |  | Application Integration added a Parse XML data transformer function that converts XML input into a JSON object. |
| 2023-09-22 | Vertex AI Predict task |  | Application Integration added the Vertex AI Predict task to perform online predictions on ML models. |
| 2023-09-06 | Application Integration Quick setup |  | Application Integration Quick setup is generally available and performs one-click provisioning with default product configuration. |
| 2023-07-20 | Connector Event triggers |  | Connector Event triggers were introduced to let integrations be invoked from external business-application event subscriptions. |
| 2023-07-20 | Jira Cloud connector trigger |  | A Jira Cloud connector event trigger became available in preview in Application Integration. |
| 2023-07-20 | ServiceNow connector trigger |  | A ServiceNow connector event trigger became available in preview in Application Integration. |
| 2023-07-20 | Zendesk connector trigger |  | A Zendesk connector event trigger became available in preview in Application Integration. |
| 2023-06-26 | Data Transformer Script task |  | Application Integration added the Data Transformer Script task to support Jsonnet-based custom data-mapping templates. |
| 2023-06-13 | Cloud Monitoring integration for Application Integration |  | Application Integration now integrates with Cloud Monitoring for usage, performance, alerts, and health visibility of integration resources. |
| 2023-06-13 | Inline connection creation with Connectors task |  | Application Integration now supports directly creating new Integration Connectors connections from the Connectors task. |
| 2023-05-23 | AI Platform - Prediction integration task |  | A new AI Platform Predict integration task was added in preview for invoking prediction operations. |
| 2023-05-23 | Cloud KMS - decrypt integration task |  | Application Integration added a Cloud KMS decrypt integration task in preview. |
| 2023-05-23 | Cloud KMS - encrypt integration task |  | Application Integration added a Cloud KMS encrypt integration task in preview. |
| 2023-05-23 | Dataflow - Create Job integration task |  | Application Integration added a Dataflow Create Job integration task in preview. |
| 2023-05-23 | Doc AI - Batch Process integration task |  | Application Integration added a Doc AI Batch Process integration task in preview. |
| 2023-05-23 | Doc AI - Process integration task |  | Application Integration added a Doc AI Process integration task in preview. |
| 2023-05-23 | Document - Get integration task |  | Application Integration added a Document Get integration task in preview. |
| 2023-05-23 | Drive - List integration task |  | Application Integration added a Drive List integration task in preview for listing Drive resources. |
| 2023-05-23 | Firestore - Batch Get integration task |  | Application Integration added a Firestore Batch Get integration task in preview. |
| 2023-05-23 | Firestore - Batch Write integration task |  | Application Integration added a Firestore Batch Write integration task in preview. |
| 2023-05-23 | Language - Annotate Text integration task |  | Application Integration added a Language Annotate Text integration task in preview. |
| 2023-05-23 | Language - Classify Text integration task |  | Application Integration added a Language Classify Text integration task in preview. |
| 2023-05-23 | Operation integration task |  | Application Integration added an Operation integration task in preview. |
| 2023-05-23 | Sheets - Append integration task |  | Application Integration added a Sheets Append integration task in preview. |
| 2023-05-23 | Sheets - Batch Get integration task |  | Application Integration added a Sheets Batch Get integration task in preview. |
| 2023-05-23 | Sheets - Get integration task |  | Application Integration added a Sheets Get integration task in preview. |
| 2023-05-23 | Translate - Document integration task |  | Application Integration added a Translate Document integration task in preview. |
| 2023-05-23 | Translate - Text integration task |  | Application Integration added a Translate Text integration task in preview. |
| 2023-05-23 | Workflows - Execute integration task |  | Application Integration added a Workflows Execute integration task in preview. |
| 2023-05-22 | Customer-managed encryption keys (CMEK) for Application Integration |  | Application Integration supports optional use of customer-managed encryption keys (CMEK) for its encryption configuration. |
| 2023-05-22 | Error Catcher trigger |  | The Error Catcher trigger enables invoking a custom error-handling flow for failures in a trigger, task, or edge condition. |
| 2023-05-22 | Google-managed encryption keys as default encryption |  | Application Integration now uses Google-managed encryption keys by default for provisioned regions. |
| 2023-05-22 | Return task |  | The Return task allows customizing error message mappings for HTTP response codes returned during integration execution failures. |
| 2023-05-09 | Connectors task execution logs |  | Cloud logs support for Connectors tasks adds visibility into execution logs for failed Connectors tasks in Application Integration. |
| 2023-05-01 | Application Integration regional availability |  | Application Integration was added in new Cloud locations, expanding availability to additional regions. |
| 2023-04-03 | Secret Manager - Access task |  | The Secret Manager - Access task enables integrations to retrieve secret versions from Cloud Secret Manager. |
| 2023-02-06 | Delete integration |  | The delete integration capability allows deleting an entire integration and all its versions in a single operation. |
| 2023-02-06 | JavaScript task |  | The JavaScript task lets users add custom JavaScript snippets for mapping logic, variable assignment, and integration variable manipulation. |
| 2023-01-10 | Cloud Scheduler trigger |  | The Cloud Scheduler trigger enables scheduled integration executions using time periods or intervals across multiple regions. |
| 2022-12-26 | Test without publishing |  | Test without publishing allows running and validating an integration before publishing by testing input variables and behavior. |

Source file slug: `application-integration.md`

