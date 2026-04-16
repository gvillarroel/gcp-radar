---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.197Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Airtable connector"
feature_slug: "airtable-connector"
latest_feature_date: "2025-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview"
  - "https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions"
keywords:
  - "airtable"
  - "connector"
  - "the"
  - "is"
  - "generally"
  - "available"
---

# Airtable connector

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The Airtable connector is generally available.

## Extended Definition

The Airtable connector is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview)
- [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)

## Supporting Pages

### Airtable \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Connection Details section, complete the following: Connector : Select Airtable from the drop down list of available Connectors.
- Personal Access Token connection type Field name Details Location europe-west1 Connector Airtable Connector version 1 Connection Name airtable-connection-new Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Base Id appK32XeZXReEQzja Base Name Automobile Test Data Path Delimiter NA User Defined Views NA Value Delimiter NA Minimum number of nodes 2 Maximum number of nodes 50 Personal Access Token Yes Personal Access Token projects/617888XXXX/secrets/airtable-new-conn/versions/3 Secret version 3 System limitations The Airtable connector can process a maximum of 3 transactions per second, per node , and throttles any transactions beyond this limit.
- In the Data Mapper section of the Data Mapping task, click Open Data Mapping Editor and then enter a value similar to the following in the Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable. { "Singlelinetext": "Airtable Application", "Long text": "Airtable is a cloud-based collaboration platform that combines the features of a spreadsheet with the capabilities of a database. " } Instead of specifying the entityId , you can also set the filterClause to Internal Id='reckqGnFusjDlnmvs' .
- Before you begin Before using the Airtable connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.

### All Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The following connectors are available in GA: Active Directory Acumatica Airtable AlloyDB Amazon S3 Apache Cassandra Apache CouchDB Apache Kafka Asana Azure AD (Entra ID) Azure Data Lake Storage Azure DevOps Azure Synapse BigCommerce BigQuery Bigtable Box Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Cloud Storage CockroachDB Confluence Couchbase Dataverse DocuSign Dropbox Dynamics 365 Dynamics 365 Business Central Elasticsearch Email Excel Online Freshbooks FTP GitHub Greenplum HDFS HL7 HTTP HubSpot IBM Db2 IBM MQ Instagram Jira Cloud Jira Server (Data Center) Jira Service Management Kintone LDAP LinkedIn MailChimp MariaDB Marketo Magento MetaAds Monday MongoDB v2 Microsoft Exchange Microsoft Teams MySQL Neo4j NetSuite Office365 Okta OneDrive Oracle DB v2 Oracle Eloqua Oracle Sales Cloud PayPal PostgreSQL Pub/Sub QuickBooks Online Rabbit MQ Redis Redshift Sage Intacct Salesforce SAP Ariba Procurement SAP Business One SAP ERP SAP Gateway SAP HANA SAP HANA XS Advanced SAP Hybris C4C SAP SuccessFactors SAP Sybase Salesforce Marketing Cloud SendGrid ServiceNow SFTP SharePoint Shopify SingleStore Slack Smartsheet Snowflake Splunk SQL Server Square Stripe Teradata TIBCO EMS Trello Twilio UKG WordPress WooCommerce Workday Xero Zendesk Zoho Books Zuora Note: You will be billed for usage of a generally available connector version as per the prices mentioned in the pricing page .
- Connectors for Google services Gcard count = 36, Extra = 2, Dummy = 1 or 0 12 matrix --> AlloyDB BigQuery Bigtable Cloud Search Cloud Spanner Cloud SQL - MySQL Cloud SQL - PostgreSQL Cloud SQL - SQL Server Cloud Storage Cloud Tasks Cloud Translation Enterprise License Manager Firestore Gmail Google Analytics Google Calendar Google Classroom Google Cloud DataCatalog Google Cloud Natural Language Google Contacts Google Dialogflow Google Docs Google Drive Google Forms Google Safe Browsing Google Sheets Google Slides Google Workspace Admin SDK Identity and Access Management Pub/Sub Search Ads 360 Vertex AI Youtube Youtube Analytics Youtube Reporting Connectors for other applications Gcard count = 114, Extra = 1, Dummy = 2 or 0 38 matrix --> Active Directory Acumatica Airtable Amazon S3 Apache Cassandra Apache CouchDB Apache Kafka Asana AuthorizeNet Azure AD (Entra ID) Azure Data Lake Storage Azure DevOps Azure Synapse BigCommerce Box CockroachDB Commercetools Confluence Commercetools Couchbase Dataverse Docusign Dropbox Dynamics 365 Dynamics 365 Business Central Elasticsearch Email EnterpriseDB Excel Online FinancialForce FreshBooks FTP GitHub Greenplum HDFS HL7 HTTP HubSpot IBM DB2 IBM MQ Instagram Jira Cloud Jira Server (Data Center) Jira Service Management Kintone LDAP LinkedIn Magento MailChimp MariaDB Marketo MetaAds Monday MongoDB Microsoft Exchange Microsoft Teams MySQL Netsuite Neo4j Okta Office 365 OneDrive Oracle DB Oracle Eloqua Oracle Sales Cloud PayPal PostgreSQL QuickBooks Online Rabbit MQ Redis Redshift Sage Intacct Salesforce Salesforce Marketing Cloud SAP Ariba Procurement SAP ASE (Sybase) SAP Business One SAP ERP SAP Gateway SAP HANA SAP HANA XS Advanced SAP Hybris C4C SAP SuccessFactors SendGrid ServiceNow SFTP SharePoint Shopify SingleStore Slack Smartsheet Snowflake Solace Splunk SQL Server Square Streak Stripe TaxJar Teradata Tibco EMS Trello Twilio UKG Webhook WooCommerce WordPress Workday Xero Zendesk Zoho Books Zuora Connectors in General Availability (GA) Some of the Integration Connectors are available only in the preview mode, while others are in general availability (GA) .
- If a connector doesn't have the Preview label, it means that the connector is generally available.
- All Integration Connectors This page provides a consolidated list of all the available Integration Connectors.

### All Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The following connectors are available in GA: Active Directory Acumatica Airtable AlloyDB Amazon S3 Apache Cassandra Apache CouchDB Apache Kafka Asana Azure AD (Entra ID) Azure Data Lake Storage Azure DevOps Azure Synapse BigCommerce BigQuery Bigtable Box Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Cloud Storage CockroachDB Confluence Couchbase Dataverse DocuSign Dropbox Dynamics 365 Dynamics 365 Business Central Elasticsearch Email Excel Online Freshbooks FTP GitHub Greenplum HDFS HL7 HTTP HubSpot IBM Db2 IBM MQ Instagram Jira Cloud Jira Server (Data Center) Jira Service Management Kintone LDAP LinkedIn MailChimp MariaDB Marketo Magento MetaAds Monday MongoDB v2 Microsoft Exchange Microsoft Teams MySQL Neo4j NetSuite Office365 Okta OneDrive Oracle DB v2 Oracle Eloqua Oracle Sales Cloud PayPal PostgreSQL Pub/Sub QuickBooks Online Rabbit MQ Redis Redshift Sage Intacct Salesforce SAP Ariba Procurement SAP Business One SAP ERP SAP Gateway SAP HANA SAP HANA XS Advanced SAP Hybris C4C SAP SuccessFactors SAP Sybase Salesforce Marketing Cloud SendGrid ServiceNow SFTP SharePoint Shopify SingleStore Slack Smartsheet Snowflake Splunk SQL Server Square Stripe Teradata TIBCO EMS Trello Twilio UKG WordPress WooCommerce Workday Xero Zendesk Zoho Books Zuora Note: You will be billed for usage of a generally available connector version as per the prices mentioned in the pricing page .
- Connectors for Google services Gcard count = 36, Extra = 2, Dummy = 1 or 0 12 matrix --> AlloyDB BigQuery Bigtable Cloud Search Cloud Spanner Cloud SQL - MySQL Cloud SQL - PostgreSQL Cloud SQL - SQL Server Cloud Storage Cloud Tasks Cloud Translation Enterprise License Manager Firestore Gmail Google Analytics Google Calendar Google Classroom Google Cloud DataCatalog Google Cloud Natural Language Google Contacts Google Dialogflow Google Docs Google Drive Google Forms Google Safe Browsing Google Sheets Google Slides Google Workspace Admin SDK Identity and Access Management Pub/Sub Search Ads 360 Vertex AI Youtube Youtube Analytics Youtube Reporting Connectors for other applications Gcard count = 114, Extra = 1, Dummy = 2 or 0 38 matrix --> Active Directory Acumatica Airtable Amazon S3 Apache Cassandra Apache CouchDB Apache Kafka Asana AuthorizeNet Azure AD (Entra ID) Azure Data Lake Storage Azure DevOps Azure Synapse BigCommerce Box CockroachDB Commercetools Confluence Commercetools Couchbase Dataverse Docusign Dropbox Dynamics 365 Dynamics 365 Business Central Elasticsearch Email EnterpriseDB Excel Online FinancialForce FreshBooks FTP GitHub Greenplum HDFS HL7 HTTP HubSpot IBM DB2 IBM MQ Instagram Jira Cloud Jira Server (Data Center) Jira Service Management Kintone LDAP LinkedIn Magento MailChimp MariaDB Marketo MetaAds Monday MongoDB Microsoft Exchange Microsoft Teams MySQL Netsuite Neo4j Okta Office 365 OneDrive Oracle DB Oracle Eloqua Oracle Sales Cloud PayPal PostgreSQL QuickBooks Online Rabbit MQ Redis Redshift Sage Intacct Salesforce Salesforce Marketing Cloud SAP Ariba Procurement SAP ASE (Sybase) SAP Business One SAP ERP SAP Gateway SAP HANA SAP HANA XS Advanced SAP Hybris C4C SAP SuccessFactors SendGrid ServiceNow SFTP SharePoint Shopify SingleStore Slack Smartsheet Snowflake Solace Splunk SQL Server Square Streak Stripe TaxJar Teradata Tibco EMS Trello Twilio UKG Webhook WooCommerce WordPress Workday Xero Zendesk Zoho Books Zuora Connectors in General Availability (GA) Some of the Integration Connectors are available only in the preview mode, while others are in general availability (GA) .
- If a connector doesn't have the Preview label, it means that the connector is generally available.
- All Integration Connectors This page provides a consolidated list of all the available Integration Connectors.

### "IAM roles and permissions for Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all the predefined IAM roles for Integration Connectors: Role Permissions Connector Admin ( roles/ connectors.admin ) Full access to all resources of Connectors Service. connectors.actions. connectors.actions.execute connectors.actions.list connectors.connections.create connectors.connections.delete connectors. connections. executeSqlQuery connectors. connections. generateOpenAPISpec connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors. connections. getIamPolicy connectors. connections. getRuntimeActionSchema connectors. connections. getRuntimeEntitySchema connectors.connections.list connectors. connections. setIamPolicy connectors.connections.update connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. connectors. customConnectorVersions. create connectors. customConnectorVersions. delete connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectorVersions. setIamPolicy connectors. customConnectorVersions. update connectors.customConnectors. connectors. customConnectors. create connectors. customConnectors. delete connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. customConnectors. setIamPolicy connectors. customConnectors. update connectors. endpointAttachments. connectors. endpointAttachments. create connectors. endpointAttachments. delete connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. endpointAttachments. setIamPolicy connectors. endpointAttachments. update connectors.entities. connectors.entities.create connectors.entities.delete connectors. entities. deleteEntitiesWithConditions connectors.entities.get connectors.entities.list connectors.entities.update connectors. entities. updateEntitiesWithConditions connectors.entityTypes.list connectors. eventSubscriptions. connectors. eventSubscriptions. create connectors. eventSubscriptions. delete connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors. eventSubscriptions. update connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones. connectors.managedZones.create connectors.managedZones.delete connectors.managedZones.get connectors. managedZones. getIamPolicy connectors.managedZones.list connectors. managedZones. setIamPolicy connectors.managedZones.update connectors.operations. connectors.operations.cancel connectors.operations.delete connectors.operations.get connectors.operations.list connectors.providers. connectors.providers.get connectors.providers.list connectors.regionalSettings. connectors. regionalSettings. get connectors. regionalSettings. update connectors.runtimeconfig.get connectors. schemaMetadata. refresh connectors.settings. connectors.settings.get connectors.settings.update connectors.versions. connectors.versions.get connectors.versions.list resourcemanager.projects.get resourcemanager.projects.list secretmanager. secrets. getIamPolicy Connectors Viewer ( roles/ connectors.viewer ) Read-only access to Connectors all resources. connectors. connections. generateOpenAPISpec connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors. connections. getIamPolicy connectors. connections. getRuntimeActionSchema connectors. connections. getRuntimeEntitySchema connectors.connections.list connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones.get connectors. managedZones. getIamPolicy connectors.managedZones.list connectors.operations.get connectors.operations.list connectors.providers. connectors.providers.get connectors.providers.list connectors. regionalSettings. get connectors.runtimeconfig.get connectors.settings.get connectors.versions. connectors.versions.get connectors.versions.list resourcemanager.projects.get resourcemanager.projects.list Custom Connectors Admin ( roles/ connectors.customConnectorAdmin ) Custom Connector is a global resource which creates custom connector within the given target project.
- This role grants Admin access to Custom Connector resources connectors. customConnectorVersions. connectors. customConnectorVersions. create connectors. customConnectorVersions. delete connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectorVersions. setIamPolicy connectors. customConnectorVersions. update connectors.customConnectors. connectors. customConnectors. create connectors. customConnectors. delete connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. customConnectors. setIamPolicy connectors. customConnectors. update connectors.locations. connectors.locations.get connectors.locations.list Custom Connector Viewer ( roles/ connectors.customConnectorViewer ) Custom Connector is a global resource which creates custom connector within the given target project.
- This role grants Read-only access to Event Subscription resources. connectors. eventSubscriptions. get connectors. eventSubscriptions. list Connector Invoker ( roles/ connectors.invoker ) Full Access to invoke all operations on Connections. connectors.actions. connectors.actions.execute connectors.actions.list connectors. connections. executeSqlQuery connectors.entities. connectors.entities.create connectors.entities.delete connectors. entities. deleteEntitiesWithConditions connectors.entities.get connectors.entities.list connectors.entities.update connectors. entities. updateEntitiesWithConditions connectors.entityTypes.list Connector Event Listener ( roles/ connectors.listener ) Full Access to listen events by connections. connectors. connections. listenEvent Connectors Managed Zone Admin ( roles/ connectors.managedZoneAdmin ) Managed Zone is a global resource which creates Cloud DNS Peering Zone with the given target project.
- This role grants Admin access to Connectors Endpoint Attachment resources. connectors. endpointAttachments. connectors. endpointAttachments. create connectors. endpointAttachments. delete connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. endpointAttachments. setIamPolicy connectors. endpointAttachments. update connectors.locations. connectors.locations.get connectors.locations.list Connectors Endpoint Attachment Viewer ( roles/ connectors.endpointAttachmentViewer ) Endpoint Attachment is a regional resource which creates PSC connection endpoint for the given PSC Service Attachment.

