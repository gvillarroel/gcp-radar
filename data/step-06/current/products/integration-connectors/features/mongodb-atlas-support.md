---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.229Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "MongoDB Atlas support"
feature_slug: "mongodb-atlas-support"
latest_feature_date: "2023-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/add-connector-iam-conditions"
  - "https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview"
keywords:
  - "mongodb"
  - "atlas"
  - "the"
  - "connector"
  - "supports"
  - "clusters"
---

# MongoDB Atlas support

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The MongoDB connector supports Atlas clusters.

## Extended Definition

The MongoDB connector supports Atlas clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/add-connector-iam-conditions](https://docs.cloud.google.com/integration-connectors/docs/add-connector-iam-conditions)
- [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview)

## Supporting Pages

### ConnectorVersionView \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
- Home Documentation Application development Integration Connectors Reference Send feedback ConnectorVersionView Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enums CONNECTOR VERSION VIEW UNSPECIFIED CONNECTOR VERSION VIEW UNSPECIFIED.

### Apache Kafka \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- Source ID: `site-docs-root-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- The Kafka connector also supports event subscription, which allows the creation of triggers when messages are received in a topic.
- However, the connector can establish connectivity to Kafka clusters from versions 3.0 to 3.3.1.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- For connectors that support event subscription , the connection names cannot begin with the "goog" prefix. (Optional) Description: Enter a description for the connection. (Optional) Enable Cloud Logging: Select this checkbox to store all log data of the connection.

### "IAM Conditions for fine-grained access \_|\_ Integration Connectors \_|\_\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/add-connector-iam-conditions](https://docs.cloud.google.com/integration-connectors/docs/add-connector-iam-conditions)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Integration Connectors supports conditions for the following resources: Resource name Resource type Connection connectors.googleapis.com/Connection ManagedZone connectors.googleapis.com/ManagedZone EndpointAttachment connectors.googleapis.com/EndpointAttachment EventSubscription connectors.googleapis.com/EventSubscription ConnectionSchemaMetadata connectors.googleapis.com/ConnectionSchemaMetadata Note: Google Cloud's resources have a hierarchical structure, and the permissions that you apply to a parent resource doesn't propagate to the parent's child resource(s), and conversely the permissions that you apply to a child resource(s) don't apply to the child's parent.
- Note: Currently, Integration Connectors supports only the startsWith constraint for a service account resource condition.
- Perform get, create, update, and delete operations on connections whose name starts with marketing- . (resource.name.startsWith ("projects/ PROJECT ID /locations/ CONNECTION LOCATION / connections/marketing-") && resource.type == "connectors.googleapis.com/Connection") (resource.name.startsWith ("projects/ PROJECT ID /locations/ CONNECTION LOCATION / connections/marketing-") && resource.type == "connectors.googleapis.com/ConnectionSchemaMetadata") (resource.type != "connectors.googleapis.com/Connection" && resource.type != "connectors.googleapis.com/ConnectionSchemaMetadata") A user or a role to whom you apply this condition, can only do the following operations: List all connections.
- Therefore, before you specify or modify conditions in IAM for your Integration Connectors resources, familiarize yourself with the following IAM concepts: Resource Resource hierarchy Roles Custom roles Permissions Parent-only permissions Adding IAM Conditions To add an IAM condition to an Integration Connectors resource, you need the following information: Named Resource URI - Every resource in Integration Connectors has a unique resource URI.

### All Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Connectors for Google services Gcard count = 36, Extra = 2, Dummy = 1 or 0 12 matrix --> AlloyDB BigQuery Bigtable Cloud Search Cloud Spanner Cloud SQL - MySQL Cloud SQL - PostgreSQL Cloud SQL - SQL Server Cloud Storage Cloud Tasks Cloud Translation Enterprise License Manager Firestore Gmail Google Analytics Google Calendar Google Classroom Google Cloud DataCatalog Google Cloud Natural Language Google Contacts Google Dialogflow Google Docs Google Drive Google Forms Google Safe Browsing Google Sheets Google Slides Google Workspace Admin SDK Identity and Access Management Pub/Sub Search Ads 360 Vertex AI Youtube Youtube Analytics Youtube Reporting Connectors for other applications Gcard count = 114, Extra = 1, Dummy = 2 or 0 38 matrix --> Active Directory Acumatica Airtable Amazon S3 Apache Cassandra Apache CouchDB Apache Kafka Asana AuthorizeNet Azure AD (Entra ID) Azure Data Lake Storage Azure DevOps Azure Synapse BigCommerce Box CockroachDB Commercetools Confluence Commercetools Couchbase Dataverse Docusign Dropbox Dynamics 365 Dynamics 365 Business Central Elasticsearch Email EnterpriseDB Excel Online FinancialForce FreshBooks FTP GitHub Greenplum HDFS HL7 HTTP HubSpot IBM DB2 IBM MQ Instagram Jira Cloud Jira Server (Data Center) Jira Service Management Kintone LDAP LinkedIn Magento MailChimp MariaDB Marketo MetaAds Monday MongoDB Microsoft Exchange Microsoft Teams MySQL Netsuite Neo4j Okta Office 365 OneDrive Oracle DB Oracle Eloqua Oracle Sales Cloud PayPal PostgreSQL QuickBooks Online Rabbit MQ Redis Redshift Sage Intacct Salesforce Salesforce Marketing Cloud SAP Ariba Procurement SAP ASE (Sybase) SAP Business One SAP ERP SAP Gateway SAP HANA SAP HANA XS Advanced SAP Hybris C4C SAP SuccessFactors SendGrid ServiceNow SFTP SharePoint Shopify SingleStore Slack Smartsheet Snowflake Solace Splunk SQL Server Square Streak Stripe TaxJar Teradata Tibco EMS Trello Twilio UKG Webhook WooCommerce WordPress Workday Xero Zendesk Zoho Books Zuora Connectors in General Availability (GA) Some of the Integration Connectors are available only in the preview mode, while others are in general availability (GA) .
- The following connectors are available in GA: Active Directory Acumatica Airtable AlloyDB Amazon S3 Apache Cassandra Apache CouchDB Apache Kafka Asana Azure AD (Entra ID) Azure Data Lake Storage Azure DevOps Azure Synapse BigCommerce BigQuery Bigtable Box Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Cloud Storage CockroachDB Confluence Couchbase Dataverse DocuSign Dropbox Dynamics 365 Dynamics 365 Business Central Elasticsearch Email Excel Online Freshbooks FTP GitHub Greenplum HDFS HL7 HTTP HubSpot IBM Db2 IBM MQ Instagram Jira Cloud Jira Server (Data Center) Jira Service Management Kintone LDAP LinkedIn MailChimp MariaDB Marketo Magento MetaAds Monday MongoDB v2 Microsoft Exchange Microsoft Teams MySQL Neo4j NetSuite Office365 Okta OneDrive Oracle DB v2 Oracle Eloqua Oracle Sales Cloud PayPal PostgreSQL Pub/Sub QuickBooks Online Rabbit MQ Redis Redshift Sage Intacct Salesforce SAP Ariba Procurement SAP Business One SAP ERP SAP Gateway SAP HANA SAP HANA XS Advanced SAP Hybris C4C SAP SuccessFactors SAP Sybase Salesforce Marketing Cloud SendGrid ServiceNow SFTP SharePoint Shopify SingleStore Slack Smartsheet Snowflake Splunk SQL Server Square Stripe Teradata TIBCO EMS Trello Twilio UKG WordPress WooCommerce Workday Xero Zendesk Zoho Books Zuora Note: You will be billed for usage of a generally available connector version as per the prices mentioned in the pricing page .
- To know when a connector version has moved from preview to general availability, you can use of the following approaches: Subscribe to the Integration Connector release notifications .
- For information about the connectors that are available in the Google Cloud Marketplace, see Marketplace Connectors .

