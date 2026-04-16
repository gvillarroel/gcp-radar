---
title: "Publish data profiles to Security Command Center \_|\_ Sensitive Data Protection\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc
  title: "Publish data profiles to Security Command Center \_|\_ Sensitive Data Protection\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Publish data profiles to Security Command Center
Stay organized with collections
Save and categorize content based on your preferences.
This page provides a high-level overview of the actions that you must take if
you want data profiles to generate findings in
Security Command Center . This page also
provides example queries that you can use to find the generated findings.
About data profiles
You can configure Sensitive Data Protection to automatically generate profiles about data across an
organization, folder, or project. Data profiles contain
metrics and metadata about your data and help you determine where sensitive and high-risk data reside.
Sensitive Data Protection reports these metrics at various levels of detail. For information about the
types of data you can profile, see Supported
resources .
Benefits of publishing data profiles to Security Command Center
This feature offers the following benefits in Security Command Center:
You can use Sensitive Data Protection findings to identify and remediate
vulnerabilities and misconfigurations in your
resources that can expose sensitive data to the public or to malicious actors.
You can use Sensitive Data Protection findings to add context to the triage
process and prioritize threats that target resources containing sensitive
data.
You can configure the attack path simulation
feature to automatically
prioritize resources according to the sensitivity of the data that the
resources contain. For more information, see Set resource priority values
automatically by data
sensitivity .
Generated Security Command Center findings
When you configure the discovery service to publish data profiles to
Security Command Center, each table data profile or file store data profile generates
the following Security Command Center findings.
Vulnerability findings from the discovery service
The Sensitive Data Protection discovery service helps you determine whether you are
storing highly sensitive data that is not protected.
Category
Summary
Public sensitive data
Category name in the API:
PUBLIC_SENSITIVE_DATA
Finding description : The specified resource has
high-sensitivity data
that can be accessed by anyone on the internet.
Note: Sensitive Data Protection might produce a data access audit log entry when
analyzing ( profiling ) a tuning job within a Cloud Storage bucket. The action is
performed by an internal Sensitive Data Protection service account.
Supported assets :
aiplatform. googleapis. com/ Dataset
aiplatform. googleapis. com/ TuningJob
bigquery. googleapis. com/ Dataset
bigquery. googleapis. com/ Table
sqladmin. googleapis. com/ Instance
storage. googleapis. com/ Bucket
Amazon S3 bucket
Azure Blob Storage container
Remediation :
For Google Cloud data, remove allUsers and
allAuthenticatedUsers from the data asset's IAM policy.
For Amazon S3 data, configure block public access settings or update the object's ACL to
deny public read access. For more information, see
Configuring block public access settings for your S3 buckets and
Configuring
ACLs in the AWS documentation.
For Azure Blob Storage data, remove public access to the container and the blobs. For
more information, see
Overview:
Remediating anonymous read access for blob data in the Azure documentation.
Compliance standards : Not mapped
Secrets in environment variables
Category name in the API:
SECRETS_IN_ENVIRONMENT_VARIABLES
Finding description : There are
secrets —such
as passwords, authentication tokens, and Google Cloud credentials—in
environment variables.
To enable this detector, see
Report secrets in environment variables to Security Command Center
in the Sensitive Data Protection documentation.
Supported assets :
cloudfunctions. googleapis. com/ CloudFunction
run. googleapis. com/ Revision
Remediation :
For Cloud Run functions environment variables, remove the secret from the environment
variable and
store it in Secret Manager
instead.
For Cloud Run service revision environment variables, move all traffic off
of the revision, and then delete the revision.
Compliance standards :
CIS GCP Foundation 1.3 : 1.18
CIS GCP Foundation 2.0 : 1.18
Secrets in storage
Category name in the API:
SECRETS_IN_STORAGE
Finding description : There are
secrets —such
as passwords, authentication tokens, and cloud credentials—in the specified
resource.
Supported assets :
aiplatform. googleapis. com/ Dataset
aiplatform. googleapis. com/ TuningJob
bigquery. googleapis. com/ Dataset
bigquery. googleapis. com/ Table
sqladmin. googleapis. com/ Instance
storage. googleapis. com/ Bucket
Amazon S3 bucket
Azure Blob Storage container
Remediation :
For Google Cloud data, use Sensitive Data Protection to
run a deep inspection scan of the specified resource
to identify all affected resources. For Cloud SQL data, export that data to a CSV
or AVRO file in a Cloud Storage bucket and run a deep inspection scan of the
bucket.
For data from other cloud providers, manually inspect the specified bucket or
container.
Remove the detected secrets.
Consider resetting the credentials.
For Google Cloud data, consider storing the detected secrets in
Secret Manager instead.
Compliance standards : Not mapped
Misconfiguration findings from the discovery service
The Sensitive Data Protection discovery service helps you determine whether you have
misconfigurations that might expose sensitive data.
Category
Summary
Sensitive data CMEK disabled
Category name in the API:
SENSITIVE_DATA_CMEK_DISABLED
Finding description : The specified resource has
high-sensitivity or moderate-sensitivity data and the resource isn't using a
customer-managed encryption key (CMEK).
Supported assets :
aiplatform. googleapis. com/ Dataset
bigquery. googleapis. com/ Dataset
bigquery. googleapis. com/ Table
sqladmin. googleapis. com/ Instance
storage. googleapis. com/ Bucket
Amazon S3 bucket
Azure Blob Storage container
Remediation :
For BigQuery data, use
CMEK on the table or dataset .
For Cloud SQL data, see the CMEK documentation for Cloud SQL for MySQL or Cloud SQL for PostgreSQL .
For Cloud Storage data,
use CMEK on the
bucket .
Compliance standards : Not mapped
Observation findings from the discovery service
Data sensitivity
An indication of the sensitivity level of the data in a particular data asset.
Data is sensitive if it contains PII or other elements that might require
additional control or management. The severity of the finding is the
sensitivity level that Sensitive Data Protection
calculated when
generating the data profile.
Data risk
The risk associated with the data in its current state. When calculating data
risk, Sensitive Data Protection considers the sensitivity level of
the data in the data asset and the presence of access controls to protect that
data. The severity of the finding is the data risk level that
Sensitive Data Protection
calculated when generating
the data profile.
Finding generation latency
Depending on the size of your organization, Sensitive Data Protection
findings can start appearing in Security Command Center within a few minutes after
you enable sensitive data discovery. For larger organizations or
organizations with specific configurations that affect finding generation, it
can take up to 12 hours before initial findings appear in Security Command Center.
Subsequently, Sensitive Data Protection generates findings in
Security Command Center within a few minutes after the discovery service scans your
resources.
Send data profiles to Security Command Center
The following is a high-level workflow for publishing data profiles to
Security Command Center.
Check the activation type of Security Command Center .
You might have a default organization-level discovery subscription,
depending on your Security Command Center service tier .
If Security Command Center isn't activated, then activate it .
Confirm that Security Command Center is configured to accept findings from
Sensitive Data Protection; that is, Sensitive Data Protection is
enabled in Security Command Center as an integrated service. For more information,
see Add a
Google Cloud integrated
service
in the Security Command Center documentation.
Enable discovery by creating a discovery scan configuration for each data
source that you want to scan. In your scan configuration, make sure that
you keep the Publish to Security Command Center option enabled.
If you have an existing discovery scan configuration that doesn't publish
data profiles to Security Command Center, see Enable publishing to Security Command Center
in an existing configuration on this page.
Enable discovery with default settings in an organization
To enable discovery, you create a discovery configuration for each data
source that
you want to scan. You can edit the
configurations
after creating them. To customize settings in the process of creating a configuration,
see Create a scan
configuration
instead.
To enable discovery with default settings at the organization level, follow
these steps:
In the Google Cloud console, go to the Sensitive Data Protection
Enable discovery page.
Go to Enable discovery
Verify that you are viewing the organization that you activated
Security Command Center on.
In the Enable discovery pane, in the Service agent container field,
set the project to be used as a service agent
container .
Within this project, the system creates a service agent and automatically
grants the required discovery roles to it.
To automatically create a project to use as your service agent container,
follow these steps:
Click Create .
Specify the name, billing account, and parent organization of the new
project. Optionally, edit the project ID.
Click Create .
It can take a few minutes for the roles to be granted to
the new project's service agent.
To select a project that you previously used for discovery operations,
click the Service agent container field and select the project.
To review the default settings, click the expand_more expand icon.
In the Enable discovery section, for each discovery type that you want to
enable, click Enable . Enabling a discovery type does the following:
BigQuery : Creates a discovery configuration for profiling
BigQuery tables across the organization.
Sensitive Data Protection starts profiling your
BigQuery data and sends the profiles to Security Command Center.
Cloud SQL : Creates a discovery configuration for profiling
Cloud SQL tables across the organization.
Sensitive Data Protection starts creating default connections for
each of your Cloud SQL instances. This process can take a few
hours. When the default connections are ready, you must give
Sensitive Data Protection access to your
Cloud SQL instances by updating each connection with the proper
database user credentials.
Secrets/credentials vulnerabilities : Creates a discovery configuration
for detecting and reporting unencrypted secrets in Cloud Run
environment variables. Sensitive Data Protection starts
scanning your environment variables.
Cloud Storage : Creates a discovery configuration for profiling
Cloud Storage buckets across the organization.
Sensitive Data Protection starts profiling your
Cloud Storage data and sends the profiles to Security Command Center.
Vertex AI datasets : Creates a discovery configuration for profiling
Vertex AI datasets across the organization.
Sensitive Data Protection starts profiling your
Vertex AI datasets and sends the profiles to
Security Command Center.
Amazon S3 : Creates a discovery configuration for profiling all Amazon
S3 data that your AWS connector has access to.
Note: This feature requires Security Command Center Enterprise. You must first create
an AWS connector that
has the AWS permissions needed for Sensitive Data Protection
discovery.
Azure Blob Storage : Creates a discovery configuration for profiling all
Azure Blob Storage data that your Azure connector has access to.
Note: This feature requires Security Command Center Enterprise. You must first create
an Azure connector
that has the Azure permissions needed for Sensitive Data Protection
discovery.
To view the newly created discovery configurations, click Go to discovery
configuration .
If you enabled Cloud SQL discovery, the discovery configuration is
created in paused mode with errors indicating the absence of credentials. See
Manage connections for use with
discovery to grant the
required IAM roles to your service agent and to provide
database user credentials for each Cloud SQL instance.
Close the pane.
Enable publishing to Security Command Center in an existing configuration
If you have an existing discovery scan configuration that is not set to publish
discovery results to Security Command Center, follow these steps:
Open the scan configuration for editing .
In the Actions section, enable Publish to Security Command Center .
Click Save .
Query for Security Command Center findings related to data profiles
The following are example queries that you can use to find relevant Data
sensitivity and Data risk findings in Security Command Center. You can enter these
queries in the Query editor field. For more information about the
query editor, see Edit a findings query in the Security Command Center
dashboard .
List all Data sensitivity and Data risk findings for a particular BigQuery table
This query is useful, for example, if Security Command Center detects an event where
a BigQuery table was saved to a different project. In this case,
an Exfiltration: BigQuery Data
Exfiltration
finding is generated, and it contains the full display name of the table that
was exfiltrated. You can search for any Data sensitivity and Data risk
findings related to the table. View the calculated sensitivity and data risk
levels for the table and plan your response accordingly.
state = "ACTIVE"
AND NOT mute = "MUTED"
AND category = "DATA_RISK" OR category = "DATA_SENSITIVITY"
AND resource . display_name = " PROJECT_ID : DATASET_ID . TABLE_ID "
Replace the following:
PROJECT_ID : the ID of the project that contains the
BigQuery table
DATASET_ID : the dataset ID of the table
TABLE_ID : the ID of the table
List all Data sensitivity and Data risk findings for a particular Cloud SQL instance
This query is useful, for example, if Security Command Center detects an event where
live Cloud SQL instance data was exported to a Cloud Storage bucket
outside of the organization. In this case, an Exfiltration: Cloud SQL Data
Exfiltration
finding is generated, and it contains the full resource name of the instance
that was exfiltrated. You can search for any Data sensitivity and Data risk
findings related to the instance. View the calculated sensitivity and data risk
levels for the instance and plan your response accordingly.
state = "ACTIVE"
AND NOT mute = "MUTED"
AND category = "DATA_RISK" OR category = "DATA_SENSITIVITY"
AND resource . name : " INSTANCE_NAME "
Replace the following:
INSTANCE_NAME : a portion of the name of the Cloud SQL
instance
List all Data risk and Data sensitivity findings with a High severity level
state = "ACTIVE"
AND NOT mute = "MUTED"
AND category = "DATA_RISK" OR category = "DATA_SENSITIVITY"
AND severity = "HIGH"
What's next
Learn about how to Set resource priority values automatically by data
sensitivity
in Security Command Center.
Learn how to report the presence of secrets in environment variables to
Security Command Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
