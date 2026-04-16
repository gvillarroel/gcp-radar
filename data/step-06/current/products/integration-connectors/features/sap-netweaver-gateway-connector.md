---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.236Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "SAP NetWeaver Gateway connector"
feature_slug: "sap-netweaver-gateway-connector"
latest_feature_date: "2022-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview"
keywords:
  - "sap"
  - "netweaver"
  - "gateway"
  - "connector"
  - "provides"
  - "for"
---

# SAP NetWeaver Gateway connector

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Provides a connector for SAP NetWeaver Gateway.

## Extended Definition

Provides a connector for SAP NetWeaver Gateway.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview)

## Supporting Pages

### "Cloud SQL for SQL Server \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This section provides actions available in this connector.
- To establish a private connection, select Host Address and add the endpoint attachment created for the SAP Gateway using the HTTPS protocol.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "ID": 3 } If the action is successful, the connector task's connectorOutputPayload response parameter will have a value similar to the following: [{ "ID": 3, "Name": "Charlie", "City": "Paris", "SALARY": 6500.0, "Department": "IT" }] Entity operation examples This section provides examples of entity operations available in this connector.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- To establish a private connection, select Host Address and add the endpoint attachment created for the SAP Gateway using the HTTPS protocol.
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Supported versions PostgreSQL versions 7.4 and later TimescaleDB Before you begin Before using the Cloud SQL for PostgreSQL connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.

### Cloud SQL for MySQL \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- To establish a private connection, select Host Address and add the endpoint attachment created for the SAP Gateway using the HTTPS protocol.
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Supported versions MySQL versions 5.0 to 8.0 Before you begin Before using the Cloud SQL for MySQL connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.

### All Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Connectors for Google services Gcard count = 36, Extra = 2, Dummy = 1 or 0 12 matrix --> AlloyDB BigQuery Bigtable Cloud Search Cloud Spanner Cloud SQL - MySQL Cloud SQL - PostgreSQL Cloud SQL - SQL Server Cloud Storage Cloud Tasks Cloud Translation Enterprise License Manager Firestore Gmail Google Analytics Google Calendar Google Classroom Google Cloud DataCatalog Google Cloud Natural Language Google Contacts Google Dialogflow Google Docs Google Drive Google Forms Google Safe Browsing Google Sheets Google Slides Google Workspace Admin SDK Identity and Access Management Pub/Sub Search Ads 360 Vertex AI Youtube Youtube Analytics Youtube Reporting Connectors for other applications Gcard count = 114, Extra = 1, Dummy = 2 or 0 38 matrix --> Active Directory Acumatica Airtable Amazon S3 Apache Cassandra Apache CouchDB Apache Kafka Asana AuthorizeNet Azure AD (Entra ID) Azure Data Lake Storage Azure DevOps Azure Synapse BigCommerce Box CockroachDB Commercetools Confluence Commercetools Couchbase Dataverse Docusign Dropbox Dynamics 365 Dynamics 365 Business Central Elasticsearch Email EnterpriseDB Excel Online FinancialForce FreshBooks FTP GitHub Greenplum HDFS HL7 HTTP HubSpot IBM DB2 IBM MQ Instagram Jira Cloud Jira Server (Data Center) Jira Service Management Kintone LDAP LinkedIn Magento MailChimp MariaDB Marketo MetaAds Monday MongoDB Microsoft Exchange Microsoft Teams MySQL Netsuite Neo4j Okta Office 365 OneDrive Oracle DB Oracle Eloqua Oracle Sales Cloud PayPal PostgreSQL QuickBooks Online Rabbit MQ Redis Redshift Sage Intacct Salesforce Salesforce Marketing Cloud SAP Ariba Procurement SAP ASE (Sybase) SAP Business One SAP ERP SAP Gateway SAP HANA SAP HANA XS Advanced SAP Hybris C4C SAP SuccessFactors SendGrid ServiceNow SFTP SharePoint Shopify SingleStore Slack Smartsheet Snowflake Solace Splunk SQL Server Square Streak Stripe TaxJar Teradata Tibco EMS Trello Twilio UKG Webhook WooCommerce WordPress Workday Xero Zendesk Zoho Books Zuora Connectors in General Availability (GA) Some of the Integration Connectors are available only in the preview mode, while others are in general availability (GA) .
- The following connectors are available in GA: Active Directory Acumatica Airtable AlloyDB Amazon S3 Apache Cassandra Apache CouchDB Apache Kafka Asana Azure AD (Entra ID) Azure Data Lake Storage Azure DevOps Azure Synapse BigCommerce BigQuery Bigtable Box Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Cloud Storage CockroachDB Confluence Couchbase Dataverse DocuSign Dropbox Dynamics 365 Dynamics 365 Business Central Elasticsearch Email Excel Online Freshbooks FTP GitHub Greenplum HDFS HL7 HTTP HubSpot IBM Db2 IBM MQ Instagram Jira Cloud Jira Server (Data Center) Jira Service Management Kintone LDAP LinkedIn MailChimp MariaDB Marketo Magento MetaAds Monday MongoDB v2 Microsoft Exchange Microsoft Teams MySQL Neo4j NetSuite Office365 Okta OneDrive Oracle DB v2 Oracle Eloqua Oracle Sales Cloud PayPal PostgreSQL Pub/Sub QuickBooks Online Rabbit MQ Redis Redshift Sage Intacct Salesforce SAP Ariba Procurement SAP Business One SAP ERP SAP Gateway SAP HANA SAP HANA XS Advanced SAP Hybris C4C SAP SuccessFactors SAP Sybase Salesforce Marketing Cloud SendGrid ServiceNow SFTP SharePoint Shopify SingleStore Slack Smartsheet Snowflake Splunk SQL Server Square Stripe Teradata TIBCO EMS Trello Twilio UKG WordPress WooCommerce Workday Xero Zendesk Zoho Books Zuora Note: You will be billed for usage of a generally available connector version as per the prices mentioned in the pricing page .
- For information about the connectors that are available in the Google Cloud Marketplace, see Marketplace Connectors .
- Regularly check for the presence of the Preview label next to the connector name in the List connections page .

