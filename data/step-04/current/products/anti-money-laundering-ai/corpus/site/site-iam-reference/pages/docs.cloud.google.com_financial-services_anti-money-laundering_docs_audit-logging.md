---
title: "Use AML AI audit logs \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/audit-logging
  title: "Use AML AI audit logs \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Use AML AI audit logs | Anti Money Laundering AI | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Anti Money Laundering AI
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Product overview
Process overview
Architectural overview
Security and compliance features
Documentation policy
Glossary
Quickstart
Train and test models designed to detect money laundering
Get started
Set up a project and permissions
Create an instance
Prepare BigQuery datasets and tables
Prepare data for AML AI
Understand the AML data model and requirements
Understand data scope and duration
Select data for best performance and typology coverage
Create and manage AML AI datasets
Generate a model and evaluate performance
Overview of model preparation
Configure an engine
Manage engine versions
Create and manage engine configs
Generate a model
Create and manage models
Evaluate a model
Copy models to new instances
Create and manage backtest results
Generate risk scores and explainability
Register your parties
Party registration sharing for multiple instances
Prepare to generate prediction outputs
Create and manage prediction results
Understand prediction outputs
Best practices for your investigation process
Prepare for model and risk governance
Collect model and risk governance artifacts
Evaluate model fairness
Troubleshoot
Troubleshoot AML AI
Data validation errors
Administer AML AI
Access control
Access control with IAM
Authenticate to AML AI
Data residency
VPC service controls
Encryption
Understand encryption in transit
Encrypt data at rest (CMEK)
Monitor AML AI resources
Use audit logs
Use platform logs
Manage instances
Manage long-running operations
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Service name
Methods by permission type
API interface audit logs google.cloud.financialservices.v1.AML
google.cloud.financialservices.v1alpha.AML
google.longrunning.Operations
Methods that don't produce audit logs
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Use AML AI audit logs
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Service name
Methods by permission type
API interface audit logs google.cloud.financialservices.v1.AML
google.cloud.financialservices.v1alpha.AML
google.longrunning.Operations
Methods that don't produce audit logs
This document describes audit logging for Financial Services. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Financial Services audit logs use the service name financialservices.googleapis.com .
Filter for this service:
See more code actions.
Light code theme
Dark code theme
protoPayload . serviceName = "financialservices.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Financial Services generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
ADMIN_ READ
google. longrunning. Operations. Get Operation google. longrunning. Operations. List Operations
ADMIN_ WRITE
google. longrunning. Operations. Cancel Operation
DATA_ READ
google. cloud. financialservices. v1. AML. Export Backtest Result Metadata (LRO) google. cloud. financialservices. v1. AML. Export Engine Config Metadata (LRO) google. cloud. financialservices. v1. AML. Export Model Metadata (LRO) google. cloud. financialservices. v1. AML. Export Prediction Result Metadata (LRO) google. cloud. financialservices. v1. AML. Get Backtest Result google. cloud. financialservices. v1. AML. Get Dataset google. cloud. financialservices. v1. AML. Get Engine Config google. cloud. financialservices. v1. AML. Get Instance google. cloud. financialservices. v1. AML. Get Model google. cloud. financialservices. v1. AML. Get Prediction Result google. cloud. financialservices. v1. AML. List Backtest Results google. cloud. financialservices. v1. AML. List Datasets google. cloud. financialservices. v1. AML. List Engine Configs google. cloud. financialservices. v1. AML. List Engine Versions google. cloud. financialservices. v1. AML. List Instances google. cloud. financialservices. v1. AML. List Models google. cloud. financialservices. v1. AML. List Prediction Results google. cloud. financialservices. v1alpha. AML. Export Backtest Result Metadata (LRO) google. cloud. financialservices. v1alpha. AML. Export Engine Config Metadata (LRO) google. cloud. financialservices. v1alpha. AML. Export Model Metadata (LRO) google. cloud. financialservices. v1alpha. AML. Export Prediction Result Metadata (LRO) google. cloud. financialservices. v1alpha. AML. Export Registered Parties (LRO) google. cloud. financialservices. v1alpha. AML. Get Backtest Result google. cloud. financialservices. v1alpha. AML. Get Dataset google. cloud. financialservices. v1alpha. AML. Get Engine Config google. cloud. financialservices. v1alpha. AML. Get Instance google. cloud. financialservices. v1alpha. AML. Get Model google. cloud. financialservices. v1alpha. AML. Get Prediction Result google. cloud. financialservices. v1alpha. AML. List Backtest Results google. cloud. financialservices. v1alpha. AML. List Datasets google. cloud. financialservices. v1alpha. AML. List Engine Configs google. cloud. financialservices. v1alpha. AML. List Engine Versions google. cloud. financialservices. v1alpha. AML. List Instances google. cloud. financialservices. v1alpha. AML. List Models google. cloud. financialservices. v1alpha. AML. List Prediction Results
DATA_ WRITE
google. cloud. financialservices. v1. AML. Create Backtest Result (LRO) google. cloud. financialservices. v1. AML. Create Dataset (LRO) google. cloud. financialservices. v1. AML. Create Engine Config (LRO) google. cloud. financialservices. v1. AML. Create Instance (LRO) google. cloud. financialservices. v1. AML. Create Model (LRO) google. cloud. financialservices. v1. AML. Create Prediction Result (LRO) google. cloud. financialservices. v1. AML. Delete Backtest Result (LRO) google. cloud. financialservices. v1. AML. Delete Dataset (LRO) google. cloud. financialservices. v1. AML. Delete Engine Config (LRO) google. cloud. financialservices. v1. AML. Delete Instance (LRO) google. cloud. financialservices. v1. AML. Delete Model (LRO) google. cloud. financialservices. v1. AML. Delete Prediction Result (LRO) google. cloud. financialservices. v1. AML. Import Registered Parties (LRO) google. cloud. financialservices. v1alpha. AML. Create Backtest Result (LRO) google. cloud. financialservices. v1alpha. AML. Create Dataset (LRO) google. cloud. financialservices. v1alpha. AML. Create Engine Config (LRO) google. cloud. financialservices. v1alpha. AML. Create Instance (LRO) google. cloud. financialservices. v1alpha. AML. Create Model (LRO) google. cloud. financialservices. v1alpha. AML. Create Prediction Result (LRO) google. cloud. financialservices. v1alpha. AML. Delete Backtest Result (LRO) google. cloud. financialservices. v1alpha. AML. Delete Dataset (LRO) google. cloud. financialservices. v1alpha. AML. Delete Engine Config (LRO) google. cloud. financialservices. v1alpha. AML. Delete Instance (LRO) google. cloud. financialservices. v1alpha. AML. Delete Model (LRO) google. cloud. financialservices. v1alpha. AML. Delete Prediction Result (LRO) google. cloud. financialservices. v1alpha. AML. Import Registered Parties (LRO) google. cloud. financialservices. v1alpha. AML. Update Backtest Result (LRO) google. cloud. financialservices. v1alpha. AML. Update Dataset (LRO) google. cloud. financialservices. v1alpha. AML. Update Engine Config (LRO) google. cloud. financialservices. v1alpha. AML. Update Instance (LRO) google. cloud. financialservices. v1alpha. AML. Update Model (LRO) google. cloud. financialservices. v1alpha. AML. Update Prediction Result (LRO)
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Financial Services.
google.cloud.financialservices.v1.AML
The following audit logs are associated with methods belonging to
google.cloud.financialservices.v1.AML .
CreateBacktestResult
Method : google.cloud.financialservices.v1.AML.CreateBacktestResult
Audit log type : Data access
Permissions : financialservices.v1backtests.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.CreateBacktestResult"
CreateDataset
Method : google.cloud.financialservices.v1.AML.CreateDataset
Audit log type : Data access
Permissions : financialservices.v1datasets.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.CreateDataset"
CreateEngineConfig
Method : google.cloud.financialservices.v1.AML.CreateEngineConfig
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.CreateEngineConfig"
CreateInstance
Method : google.cloud.financialservices.v1.AML.CreateInstance
Audit log type : Data access
Permissions : financialservices.v1instances.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.CreateInstance"
CreateModel
Method : google.cloud.financialservices.v1.AML.CreateModel
Audit log type : Data access
Permissions : financialservices.v1models.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.CreateModel"
CreatePredictionResult
Method : google.cloud.financialservices.v1.AML.CreatePredictionResult
Audit log type : Data access
Permissions : financialservices.v1predictions.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.CreatePredictionResult"
DeleteBacktestResult
Method : google.cloud.financialservices.v1.AML.DeleteBacktestResult
Audit log type : Data access
Permissions : financialservices.v1backtests.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.DeleteBacktestResult"
DeleteDataset
Method : google.cloud.financialservices.v1.AML.DeleteDataset
Audit log type : Data access
Permissions : financialservices.v1datasets.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.DeleteDataset"
DeleteEngineConfig
Method : google.cloud.financialservices.v1.AML.DeleteEngineConfig
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.DeleteEngineConfig"
DeleteInstance
Method : google.cloud.financialservices.v1.AML.DeleteInstance
Audit log type : Data access
Permissions : financialservices.v1instances.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.DeleteInstance"
DeleteModel
Method : google.cloud.financialservices.v1.AML.DeleteModel
Audit log type : Data access
Permissions : financialservices.v1models.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.DeleteModel"
DeletePredictionResult
Method : google.cloud.financialservices.v1.AML.DeletePredictionResult
Audit log type : Data access
Permissions : financialservices.v1predictions.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.DeletePredictionResult"
ExportBacktestResultMetadata
Method : google.cloud.financialservices.v1.AML.ExportBacktestResultMetadata
Audit log type : Data access
Permissions : financialservices.v1backtests.exportMetadata - DATA_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ExportBacktestResultMetadata"
ExportEngineConfigMetadata
Method : google.cloud.financialservices.v1.AML.ExportEngineConfigMetadata
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.exportMetadata - DATA_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ExportEngineConfigMetadata"
ExportModelMetadata
Method : google.cloud.financialservices.v1.AML.ExportModelMetadata
Audit log type : Data access
Permissions : financialservices.v1models.exportMetadata - DATA_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ExportModelMetadata"
ExportPredictionResultMetadata
Method : google.cloud.financialservices.v1.AML.ExportPredictionResultMetadata
Audit log type : Data access
Permissions : financialservices.v1predictions.exportMetadata - DATA_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ExportPredictionResultMetadata"
GetBacktestResult
Method : google.cloud.financialservices.v1.AML.GetBacktestResult
Audit log type : Data access
Permissions : financialservices.v1backtests.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.GetBacktestResult"
GetDataset
Method : google.cloud.financialservices.v1.AML.GetDataset
Audit log type : Data access
Permissions : financialservices.v1datasets.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.GetDataset"
GetEngineConfig
Method : google.cloud.financialservices.v1.AML.GetEngineConfig
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.GetEngineConfig"
GetInstance
Method : google.cloud.financialservices.v1.AML.GetInstance
Audit log type : Data access
Permissions : financialservices.v1instances.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.GetInstance"
GetModel
Method : google.cloud.financialservices.v1.AML.GetModel
Audit log type : Data access
Permissions : financialservices.v1models.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.GetModel"
GetPredictionResult
Method : google.cloud.financialservices.v1.AML.GetPredictionResult
Audit log type : Data access
Permissions : financialservices.v1predictions.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.GetPredictionResult"
ImportRegisteredParties
Method : google.cloud.financialservices.v1.AML.ImportRegisteredParties
Audit log type : Data access
Permissions : financialservices.v1instances.importRegisteredParties - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ImportRegisteredParties"
ListBacktestResults
Method : google.cloud.financialservices.v1.AML.ListBacktestResults
Audit log type : Data access
Permissions : financialservices.v1backtests.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ListBacktestResults"
ListDatasets
Method : google.cloud.financialservices.v1.AML.ListDatasets
Audit log type : Data access
Permissions : financialservices.v1datasets.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ListDatasets"
ListEngineConfigs
Method : google.cloud.financialservices.v1.AML.ListEngineConfigs
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ListEngineConfigs"
ListEngineVersions
Method : google.cloud.financialservices.v1.AML.ListEngineVersions
Audit log type : Data access
Permissions : financialservices.v1engineversions.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ListEngineVersions"
ListInstances
Method : google.cloud.financialservices.v1.AML.ListInstances
Audit log type : Data access
Permissions : financialservices.v1instances.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ListInstances"
ListModels
Method : google.cloud.financialservices.v1.AML.ListModels
Audit log type : Data access
Permissions : financialservices.v1models.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ListModels"
ListPredictionResults
Method : google.cloud.financialservices.v1.AML.ListPredictionResults
Audit log type : Data access
Permissions : financialservices.v1predictions.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1.AML.ListPredictionResults"
google.cloud.financialservices.v1alpha.AML
The following audit logs are associated with methods belonging to
google.cloud.financialservices.v1alpha.AML .
CreateBacktestResult
Method : google.cloud.financialservices.v1alpha.AML.CreateBacktestResult
Audit log type : Data access
Permissions : financialservices.v1backtests.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.CreateBacktestResult"
CreateDataset
Method : google.cloud.financialservices.v1alpha.AML.CreateDataset
Audit log type : Data access
Permissions : financialservices.v1datasets.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.CreateDataset"
CreateEngineConfig
Method : google.cloud.financialservices.v1alpha.AML.CreateEngineConfig
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.CreateEngineConfig"
CreateInstance
Method : google.cloud.financialservices.v1alpha.AML.CreateInstance
Audit log type : Data access
Permissions : financialservices.v1instances.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.CreateInstance"
CreateModel
Method : google.cloud.financialservices.v1alpha.AML.CreateModel
Audit log type : Data access
Permissions : financialservices.v1models.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.CreateModel"
CreatePredictionResult
Method : google.cloud.financialservices.v1alpha.AML.CreatePredictionResult
Audit log type : Data access
Permissions : financialservices.v1predictions.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.CreatePredictionResult"
DeleteBacktestResult
Method : google.cloud.financialservices.v1alpha.AML.DeleteBacktestResult
Audit log type : Data access
Permissions : financialservices.v1backtests.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.DeleteBacktestResult"
DeleteDataset
Method : google.cloud.financialservices.v1alpha.AML.DeleteDataset
Audit log type : Data access
Permissions : financialservices.v1datasets.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.DeleteDataset"
DeleteEngineConfig
Method : google.cloud.financialservices.v1alpha.AML.DeleteEngineConfig
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.DeleteEngineConfig"
DeleteInstance
Method : google.cloud.financialservices.v1alpha.AML.DeleteInstance
Audit log type : Data access
Permissions : financialservices.v1instances.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.DeleteInstance"
DeleteModel
Method : google.cloud.financialservices.v1alpha.AML.DeleteModel
Audit log type : Data access
Permissions : financialservices.v1models.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.DeleteModel"
DeletePredictionResult
Method : google.cloud.financialservices.v1alpha.AML.DeletePredictionResult
Audit log type : Data access
Permissions : financialservices.v1predictions.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.DeletePredictionResult"
ExportBacktestResultMetadata
Method : google.cloud.financialservices.v1alpha.AML.ExportBacktestResultMetadata
Audit log type : Data access
Permissions : financialservices.v1backtests.exportMetadata - DATA_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ExportBacktestResultMetadata"
ExportEngineConfigMetadata
Method : google.cloud.financialservices.v1alpha.AML.ExportEngineConfigMetadata
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.exportMetadata - DATA_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ExportEngineConfigMetadata"
ExportModelMetadata
Method : google.cloud.financialservices.v1alpha.AML.ExportModelMetadata
Audit log type : Data access
Permissions : financialservices.v1models.exportMetadata - DATA_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ExportModelMetadata"
ExportPredictionResultMetadata
Method : google.cloud.financialservices.v1alpha.AML.ExportPredictionResultMetadata
Audit log type : Data access
Permissions : financialservices.v1predictions.exportMetadata - DATA_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ExportPredictionResultMetadata"
ExportRegisteredParties
Method : google.cloud.financialservices.v1alpha.AML.ExportRegisteredParties
Audit log type : Data access
Permissions : financialservices.v1instances.exportRegisteredParties - DATA_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ExportRegisteredParties"
GetBacktestResult
Method : google.cloud.financialservices.v1alpha.AML.GetBacktestResult
Audit log type : Data access
Permissions : financialservices.v1backtests.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.GetBacktestResult"
GetDataset
Method : google.cloud.financialservices.v1alpha.AML.GetDataset
Audit log type : Data access
Permissions : financialservices.v1datasets.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.GetDataset"
GetEngineConfig
Method : google.cloud.financialservices.v1alpha.AML.GetEngineConfig
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.GetEngineConfig"
GetInstance
Method : google.cloud.financialservices.v1alpha.AML.GetInstance
Audit log type : Data access
Permissions : financialservices.v1instances.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.GetInstance"
GetModel
Method : google.cloud.financialservices.v1alpha.AML.GetModel
Audit log type : Data access
Permissions : financialservices.v1models.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.GetModel"
GetPredictionResult
Method : google.cloud.financialservices.v1alpha.AML.GetPredictionResult
Audit log type : Data access
Permissions : financialservices.v1predictions.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.GetPredictionResult"
ImportRegisteredParties
Method : google.cloud.financialservices.v1alpha.AML.ImportRegisteredParties
Audit log type : Data access
Permissions : financialservices.v1instances.importRegisteredParties - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ImportRegisteredParties"
ListBacktestResults
Method : google.cloud.financialservices.v1alpha.AML.ListBacktestResults
Audit log type : Data access
Permissions : financialservices.v1backtests.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ListBacktestResults"
ListDatasets
Method : google.cloud.financialservices.v1alpha.AML.ListDatasets
Audit log type : Data access
Permissions : financialservices.v1datasets.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ListDatasets"
ListEngineConfigs
Method : google.cloud.financialservices.v1alpha.AML.ListEngineConfigs
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ListEngineConfigs"
ListEngineVersions
Method : google.cloud.financialservices.v1alpha.AML.ListEngineVersions
Audit log type : Data access
Permissions : financialservices.v1engineversions.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ListEngineVersions"
ListInstances
Method : google.cloud.financialservices.v1alpha.AML.ListInstances
Audit log type : Data access
Permissions : financialservices.v1instances.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ListInstances"
ListModels
Method : google.cloud.financialservices.v1alpha.AML.ListModels
Audit log type : Data access
Permissions : financialservices.v1models.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ListModels"
ListPredictionResults
Method : google.cloud.financialservices.v1alpha.AML.ListPredictionResults
Audit log type : Data access
Permissions : financialservices.v1predictions.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.ListPredictionResults"
UpdateBacktestResult
Method : google.cloud.financialservices.v1alpha.AML.UpdateBacktestResult
Audit log type : Data access
Permissions : financialservices.v1backtests.update - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.UpdateBacktestResult"
UpdateDataset
Method : google.cloud.financialservices.v1alpha.AML.UpdateDataset
Audit log type : Data access
Permissions : financialservices.v1datasets.update - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.UpdateDataset"
UpdateEngineConfig
Method : google.cloud.financialservices.v1alpha.AML.UpdateEngineConfig
Audit log type : Data access
Permissions : financialservices.v1engineconfigs.update - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.UpdateEngineConfig"
UpdateInstance
Method : google.cloud.financialservices.v1alpha.AML.UpdateInstance
Audit log type : Data access
Permissions : financialservices.v1instances.update - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.UpdateInstance"
UpdateModel
Method : google.cloud.financialservices.v1alpha.AML.UpdateModel
Audit log type : Data access
Permissions : financialservices.v1models.update - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.UpdateModel"
UpdatePredictionResult
Method : google.cloud.financialservices.v1alpha.AML.UpdatePredictionResult
Audit log type : Data access
Permissions : financialservices.v1predictions.update - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.financialservices.v1alpha.AML.UpdatePredictionResult"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Admin activity
Permissions : financialservices.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : financialservices.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : financialservices.operations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.ListOperations"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.location.Locations.GetLocation
google.cloud.location.Locations.ListLocations
google.longrunning.Operations.WaitOperation
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
