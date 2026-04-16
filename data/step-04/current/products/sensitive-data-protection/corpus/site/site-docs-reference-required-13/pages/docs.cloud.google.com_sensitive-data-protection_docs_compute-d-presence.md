---
title: "Computing \u03B4-presence for a dataset \_|\_ Sensitive Data Protection \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/compute-d-presence
knowledge_key: corpus
source_id: site-docs-reference-required-13
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/compute-d-presence
  title: "Computing \u03B4-presence for a dataset \_|\_ Sensitive Data Protection\
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
Computing δ-presence for a dataset
Stay organized with collections
Save and categorize content based on your preferences.
Delta-presence ( δ -presence) is a metric that quantifies the probability that
an individual belongs to an analyzed dataset. Like k -map ,
you can estimate δ -presence values using Sensitive Data Protection, which
uses a statistical model to estimate the attack dataset.
δ -presence contrasts with the other risk analysis methods, in which the
attack dataset is explicitly known. Depending on the type of data,
Sensitive Data Protection uses publicly available datasets (for example, from the
US Census) or a custom statistical model (for example, one or more
BigQuery tables that you specify), or it extrapolates from the
distribution of values in your input dataset.
This topic demonstrates how to compute δ -presence values for a dataset using
Sensitive Data Protection. For more information about δ -presence or risk analysis in
general, see the risk analysis concept topic
before continuing on.
Note: At this time, you can only compute δ -presence values using the
DLP API or Sensitive Data Protection-supported client
libraries . Sensitive Data Protection in the
Google Cloud console doesn't support computing δ -presence values.
Note: Prematurely
canceling an operation midway through a job still incurs costs for the portion of
the job that was completed. For more information about billing, see Sensitive Data Protection pricing .
Before you begin
Before continuing, be sure you've done the following:
Sign in to your Google Account.
In the Google Cloud console, on the project selector page, select or create a
Google Cloud project.
Go to the project selector
Make sure that billing is enabled for your Google Cloud project. Learn how to confirm billing is enabled for your
project.
Enable Sensitive Data Protection.
Enable Sensitive Data Protection
Select a BigQuery dataset to analyze. Sensitive Data Protection
estimates the δ -presence metric by scanning a BigQuery
table.
Determine the types of datasets you want to use to model the attack
dataset. For more information, see the reference page for the
DeltaPresenceEstimationConfig
object, as well as Risk
analysis terms and techniques .
Compute δ -presence metrics
To compute a δ -presence estimate using Sensitive Data Protection, send a request
to the following URL, where PROJECT_ID indicates your project
identifier :
https://dlp.googleapis.com/v2/projects/ PROJECT_ID /dlpJobs
The request contains a
RiskAnalysisJobConfig
object, which is composed of the following:
A
PrivacyMetric
object. This is where you specify that you want to calculate δ -presence by
specifying a
DeltaPresenceEstimationConfig
object containing the following:
quasiIds[] : Required. Fields
( QuasiId
objects) considered to be quasi-identifiers to scan and use to compute
δ -presence. No two columns can have the same tag. These can be any of the
following:
An infoType : This
causes Sensitive Data Protection to use the relevant public dataset as
a statistical model of population, including US ZIP codes, region codes,
ages, and genders.
A custom infoType: A custom tag wherein you indicate an auxiliary table
(an
AuxiliaryTable
object) that contains statistical information about the possible values of
this column.
The inferred tag: If no semantic tag is indicated, specify inferred .
Sensitive Data Protection infers the statistical model from the
distribution of values in the input data.
regionCode : An
ISO 3166-1 alpha-2 region code
for Sensitive Data Protection to use in statistical modeling. This value
is required if no column is tagged with a region-specific infoType (for
example, a US ZIP code) or a region code.
auxiliaryTables[] : Auxiliary tables
( StatisticalTable
objects) to use in the analysis. Each custom tag used to tag a
quasi-identifier column (from quasiIds[] ) must appear in exactly one
column of one auxiliary table.
A BigQueryTable
object. Specify the BigQuery table to scan by including all of
the following:
projectId : The project ID of the project containing the table.
datasetId : The dataset ID of the table.
tableId : The name of the table.
A set of one or more
Action
objects, which represent actions to run, in the order given, at the
completion of the job. Each Action object can contain one of the
following actions:
SaveFindings
object: Saves the results of the risk analysis scan to a
BigQuery table.
PublishToPubSub
object:
Publishes a notification to a Pub/Sub topic .
Note:
If there are configuration or permission issues with the Pub/Sub topic,
Sensitive Data Protection retries sending the Pub/Sub notification for up to
two weeks. After two weeks, the notification is discarded.
PublishSummaryToCscc
object: Saves a results summary to Security Command Center.
PublishFindingsToCloudDataCatalog
object: Saves results to Data Catalog .
JobNotificationEmails
object: Sends you an email with results.
PublishToStackdriver
object: Saves results to Google Cloud Observability.
Viewing δ -presence job results
To retrieve the results of the δ -presence risk analysis job using the REST
API, send the following GET request to the
projects.dlpJobs
resource. Replace PROJECT_ID with your project ID and
JOB_ID with the identifier of the job you want to obtain results for.
The job ID was returned when you started the job, and can also be retrieved by
listing all jobs .
GET https://dlp.googleapis.com/v2/projects/ PROJECT_ID /dlpJobs/ JOB_ID
The request returns a JSON object containing an instance of the job. The results
of the analysis are inside the "riskDetails" key, in an
AnalyzeDataSourceRiskDetails
object. For more information, see the API reference for the
DlpJob
resource.
What's next
Learn how to calculate the k -anonymity
value for a dataset.
Learn how to calculate the l -diversity
value for a dataset.
Learn how to calculate the k -map value for a
dataset.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
