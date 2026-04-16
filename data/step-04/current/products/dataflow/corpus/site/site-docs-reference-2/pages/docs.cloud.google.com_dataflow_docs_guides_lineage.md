---
title: "Use data lineage in Dataflow \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/lineage
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/lineage
  title: "Use data lineage in Dataflow \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Use data lineage in Dataflow
Stay organized with collections
Save and categorize content based on your preferences.
Data lineage is a Dataflow feature that lets you track
how data moves through your systems: where it comes from, where it is passed to,
and what transformations are applied to it.
Each pipeline that you run by using Dataflow has several associated
data assets. The lineage of a data asset includes its origin, what happens to
it, and where it moves over time. With data lineage, you can track
the end-to-end movement of your data assets, from origin to eventual destination.
When you enable data lineage for your
Dataflow jobs, Dataflow
captures lineage events and publishes them to the Knowledge Catalog
Data Lineage API .
To access lineage information through Knowledge Catalog, see
Use data lineage with Google Cloud systems .
Before you begin
Set up your project:
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Verify that billing is enabled for your Google Cloud project .
Enable the Dataplex, BigQuery, and Data lineage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Verify that billing is enabled for your Google Cloud project .
Enable the Dataplex, BigQuery, and Data lineage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Caution: Data lineage is enabled on a per-project basis, not a
per-service basis.
After you enable the Data Lineage API, lineage information is automatically
reported for multiple Google Cloud services in the project, depending on their
product-level lineage control.
For more details, see Data lineage considerations .
In Dataflow, you also need to enable lineage at the job level.
See Enable data lineage in Dataflow in
this document.
Required roles
To get the permissions that
you need to view lineage visualization graphs,
ask your administrator to grant you the
following IAM roles:
Dataplex Catalog viewer ( roles/dataplex.catalogViewer )
on the Knowledge Catalog resource project
Data Lineage Viewer ( roles/datalineage.viewer )
on the project where you use Dataflow
Dataflow viewer ( roles/dataflow.viewer )
on the project where you use Dataflow
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about data lineage roles, see
Predefined roles for data lineage .
Support and limitations
Data lineage in Dataflow has the following limitations:
Data lineage is supported in the Apache Beam SDK versions
2.63.0 and later.
You must enable data lineage on a per-job basis.
Data capture isn't instantaneous. It can take
a few minutes for Dataflow job lineage data to appear in
Knowledge Catalog.
The following sources and sinks are supported:
Apache Kafka
BigQuery (Streaming jobs in Python use the legacy
STREAMING_INSERT
method, which doesn't support data lineage. To use data lineage, switch to
the recommended STORAGE_WRITE_API method.
For more information, see
Write from Dataflow to BigQuery .)
Bigtable
Cloud Storage
JDBC (Java Database Connectivity)
Pub/Sub
Spanner (Change Stream is not supported)
Dataflow templates
that use these sources and sinks also automatically capture and publish
lineage events.
Enable data lineage in Dataflow
You need to enable lineage at the job level. To enable data lineage,
use the enable_lineage
Dataflow service option
as follows:
Java
--dataflowServiceOptions=enable_lineage=true
Python
--dataflow_service_options=enable_lineage=true
Go
--dataflow_service_options=enable_lineage=true
gcloud
Use the
gcloud dataflow jobs run command
with the additional-experiments option. If you're using Flex Templates, use
the
gcloud dataflow flex-template run
command.
--additional-experiments=enable_lineage=true
Optionally, you can specify one or both of the following parameters with the
service option:
process_id : A unique identifier that Knowledge Catalog uses to group
job runs. If not specified, the job name is used.
process_name : A human-readable name for the data lineage process.
If not specified, the job name prefixed with "Dataflow " is used.
Specify these options as follows:
Java
--dataflowServiceOptions=enable_lineage=process_id= PROCESS_ID ;process_name= DISPLAY_NAME
Python
--dataflow_service_options=enable_lineage=process_id= PROCESS_ID ;process_name= DISPLAY_NAME
Go
--dataflow_service_options=enable_lineage=process_id= PROCESS_ID ;process_name= DISPLAY_NAME
gcloud
--additional-experiments=enable_lineage=process_id= PROCESS_ID ;process_name= DISPLAY_NAME
View lineage in Knowledge Catalog
Data lineage provides information about the relations between your project
resources and the processes that created them. You can view data lineage
information in the Google Cloud console in the form of a graph or a
single table. You can also retrieve data lineage information from the
Data Lineage API in the form of JSON data.
For more information, see
Use data lineage with Google Cloud systems .
Disable data lineage in Dataflow
If data lineage is enabled for a specific job and you want to disable
it, cancel the existing job and run a new version of the job without the
enable_lineage service option.
Billing
Using data lineage in Dataflow doesn't impact your
Dataflow bill, but it might incur additional charges on your
Knowledge Catalog bill. For more information, see
Data lineage considerations
and Knowledge Catalog pricing .
What's next
Learn more about data lineage .
Learn how to use
data lineage .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
