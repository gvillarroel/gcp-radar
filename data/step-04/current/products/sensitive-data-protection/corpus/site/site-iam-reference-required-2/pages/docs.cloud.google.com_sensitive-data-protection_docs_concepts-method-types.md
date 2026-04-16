---
title: "Method types \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/auth
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types
  title: "Method types \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
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
Method types
Stay organized with collections
Save and categorize content based on your preferences.
Sensitive Data Protection includes different types of methods that you can use to
inspect, transform ( de-identify ), discover, and classify data. Using these
methods, you can scan data both on and off Google Cloud and optimize the
behavior of Sensitive Data Protection for different types of workloads.
Sensitive Data Protection provides the following method types:
Content methods
Storage methods
Hybrid methods
Discovery methods
Inspection and de-identification methods
This section describes the methods that you can use to locate and, optionally,
de-identify each piece of data that matches an information
type listed in your your inspection
configuration .
Content methods
Content methods are synchronous, stateless methods. The data to be inspected
or transformed is sent directly in the request to the DLP API.
Sensitive Data Protection inspection findings or transformed data is returned in
the API response. Request data is encrypted in transit and is not stored.
To learn more, explore the REST API reference for content methods:
content.inspect
content.deidentify
content.reidentify
image.redact
Storage methods
Storage methods are designed to inspect data stored on Google Cloud in systems
like Cloud Storage , BigQuery , and
Firestore in Datastore mode (Datastore) . To enable storage inspection, you create a
Sensitive Data Protection job using the
dlpJobs
resource. Each job runs as a managed service to inspect data and then perform
Sensitive Data Protection actions such as save or publish findings. In
addition to these optional actions, Sensitive Data Protection creates and stores
details about the job including job status, bytes scanned, and summary findings
per infoType. You can manage jobs using the DLP API or
Sensitive Data Protection in the Google Cloud console .
To learn more, explore the REST API reference for the
projects.dlpJobs resource. You specify the
storage details in the
StorageConfig object.
Hybrid methods
Hybrid methods are a set of asynchronous API methods that allow you to scan
payloads of data sent from virtually any source for sensitive information and
store the findings in Google Cloud. Hybrid methods are similar to
content methods in that the data you want to inspect is
included in one or more inspection requests; however, unlike
content methods , hybrid methods do not return inspection
results in the API response. Instead, inspection results are processed
server-side asynchronously and results are tabulated and stored in a
manner similar to storage methods .
To enable hybrid inspection, you create a Sensitive Data Protection job using the
dlpJobs
resource. Each hybrid job runs as a managed service to listen for inspection
requests and performs Sensitive Data Protection actions such as
save or publish findings. In addition to these optional actions,
Sensitive Data Protection creates and stores details about the job including job
status, bytes scanned, and summary findings per infoType. You can manage jobs
using the DLP API or Sensitive Data Protection in the
Google Cloud console .
To learn more, explore the REST API reference for the
projects.dlpJobs resource. You specify the
data source in the hybridOptions field of the
StorageConfig object.
Discovery methods
Discovery methods allow you to configure sensitive data
discovery to generate data profiles . Data
profiles provide insights to help you determine where sensitive data reside in
your organization, what kind of sensitive data you are storing, and whether that
data has access controls in place.
You can configure discovery to scan data stored on Google Cloud in systems like
BigQuery, Cloud SQL, Cloud Storage, and Vertex AI. If you
have a Security Command Center Enterprise activation, you can also use
Sensitive Data Protection to scan data from other cloud providers.
You can specify actions that you want Sensitive Data Protection to perform after
each discovery scan. For example, you can send scan results to other
Google Cloud services—like Security Command Center and
Google Security Operations—to increase your visibility into your
organization's data security posture. You can configure the discovery service to
tag your profiled resources to automatically grant or deny IAM
access to those resources. You can also export the data profiles to
BigQuery. You can connect the exported profiles to Looker to
view the premade
report . You can
also create your own custom queries and reports.
To enable discovery, you create a
DiscoveryConfig
resource. Discovery runs based on the scope and frequency that you set in the
discovery configuration. For information about where Sensitive Data Protection
stores the generated profiles, see Data residency
considerations .
You can manage the discovery configurations, data profiles, and Cloud SQL
connections using the DLP API or the
Google Cloud console .
To learn more, explore the REST API reference for the following:
Discovery configurations
organizations.locations.discoveryConfigs
projects.locations.discoveryConfigs
Connections
Connections are relevant only to discovery for
Cloud SQL .
organizations.locations.connections
projects.locations.connections
Data profiles
organizations.locations.projectDataProfiles
projects.locations.projectDataProfiles
organizations.locations.fileStoreDataProfiles
projects.locations.fileStoreDataProfiles
organizations.locations.tableDataProfiles
projects.locations.tableDataProfiles
organizations.locations.columnDataProfiles
projects.locations.columnDataProfiles
What's next
Read the how-to guides to get started with inspecting text and images for
sensitive data, as well as redacting sensitive data from text and images:
Inspecting text for sensitive data
Inspecting structured text for sensitive
data
Inspecting images for sensitive data
Redacting sensitive data from
images
De-identifying sensitive data
For more information about inspecting storage and how to use actions, see
Inspecting storage and databases for sensitive
data .
For more information about sensitive data discovery, see Data
profiles
Review pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
