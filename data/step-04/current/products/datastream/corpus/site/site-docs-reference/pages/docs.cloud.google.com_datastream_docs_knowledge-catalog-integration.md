---
title: "Manage your Datastream resources using Knowledge Catalog \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/datastream/docs/knowledge-catalog-integration
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/knowledge-catalog-integration
  title: "Manage your Datastream resources using Knowledge Catalog \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Manage your Datastream resources using Knowledge Catalog
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can search for and manage your Datastream resources using
Knowledge Catalog, which is a platform for storing, managing,
and accessing your metadata. Use Knowledge Catalog to help you
with the following:
Discovering, analyzing, and understanding your Datastream
metadata.
Browsing your Datastream resources, such as streams,
connection profiles and connectivity configurations.
Improving operational visibility for troubleshooting and managing data
pipelines.
Establishing both near real-time and periodic mechanisms for consistent
metadata ingestion with live and batch synchronization. For more information,
see Synchronization modes .
Knowledge Catalog modeling
Datastream resources are modeled in
Knowledge Catalog under a reserved,
Knowledge Catalog-owned entry group and specific entry types.
Knowledge Catalog entity
Resource identifier
Entry group
@datastream
Entry type
datastream-stream
Entry type
datastream-connection-profile
Entry type
datastream-private-connection
Types of metadata discovery
Knowledge Catalog metadata discovery is an automated process
that scans connected data sources—like Datastream—to
identify data assets and extract their technical metadata into the
Knowledge Catalog.
This process uses both real-time and periodic synchronization to keep the
catalog consistent with the source system. For Datastream,
metadata for all streams, connection profiles, and private connectivity
configurations is discovered by default:
Resource type
Metadata retrieved
Streams
Name
Location
State (for example, RUNNING , PAUSED , FAILED )
Backfill strategy
Source and destination connection profile names
Source and destination configurations
Connection profiles
Name
Location
Type (for example, MYSQL , ORACLE , BIGQUERY )
Connectivity option
Hostname, port, and database name
Private connectivity configurations
Name
State
Connectivity method (for example, Private Service Connect or VPC peering)
VPC network and subnet details
Note: Knowledge Catalog refers to the resources in
Datastream and in other Google Cloud services as assets .
Synchronization modes
Datastream uses the following synchronization modes to keep the
Knowledge Catalog consistent with the source system.
Live synchronization : in this mode, Datastream publishes
events to Pub/Sub topics when any metadata changes occur. This lets
Knowledge Catalog receive near real-time updates by
subscribing to these topics.
Batch synchronization : in this mode, Datastream
periodically publishes full metadata exports (checkpoints) to designated
Cloud Storage buckets, from which Knowledge Catalog
ingests the data.
Keyword and natural language search
Knowledge Catalog supports keyword and natural language
searches.
Keyword search lets you find resources using specific keywords, filters, and
a defined syntax. For example, you might enter system=Datastream AND
type=Stream to view all Datastream streams.
Natural language search (Preview) uses AI to understand semantic queries. It
lets you find resources using everyday language, eliminating the need for
complex syntax. For example, you can enter queries like List all
Datastream streams with BigQuery destination .
For more information, see Search syntax for
Knowledge Catalog .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Dataplex API for the project.
Enable the Dataplex API
Verify that you have the necessary permissions.
Required IAM roles
This section describes the roles and permissions required to search for
resources and to access the search results.
Required roles for accessing search results
To search for and view Datastream metadata in
Knowledge Catalog, principals must have permissions to view
Datastream resources, including the dataplex.projects.search
permission.
To grant principals—such as users, groups, or service accounts—these
permissions, assign them the
Datastream Viewer
( roles/datastream.viewer )
IAM role on the project that contains the
Datastream resources.
Knowledge Catalog operation
Datastream resource
Roles or permissions required
Search for Datastream resources
Streams
datastream.streams.get
Connection profiles
datastream.connectionProfiles.get
Private connectivity configurations
datastream.privateConnections.get
For more information about granting roles, see Manage
access . For more information about
Datastream IAM roles, see IAM
roles and permissions for
Datastream .
Required roles for searching entries
To search for entries, you need at least one of the following
IAM roles on the
project that is used for search:
Dataplex Catalog Admin
( roles/dataplex.catalogAdmin )
Dataplex Catalog Editor
( roles/dataplex.catalogEditor )
Dataplex Catalog Viewer
( roles/dataplex.catalogViewer )
Permissions on search results are checked independently of the selected project.
For more information, see Search for data assets with
Knowledge Catalog .
Search for Datastream assets
Use the Knowledge Catalog search page in the Google Cloud console
to search for Datastream assets.
Go to the Knowledge Catalog Search page.
Go to Search
In Choose search platform , select Knowledge Catalog .
In the Filters panel, click Systems , and then select
Datastream .
Optional. In Type aliases , you can filter the search results to a
specific type of Datastream asset by selecting one or more of
the following type aliases:
Data stream : to search for Datastream streams.
Connection profile : to search for Datastream
connection profiles.
Connection : to search for Datastream private
connectivity configurations.
Use queries to perform keyword search
You can use the search field in Knowledge Catalog to perform
keyword search queries. For example, you might enter
system=Datastream AND type=Stream to view all
Datastream streams.
For more information, see Search syntax for
Knowledge Catalog .
To view all Datastream assets, enter
system=Datastream .
Then you can enter specific keywords. For example, to view all
Datastream streams:
system=Datastream AND type=Stream
To view all connection profiles, enter the following query:
system=Datastream AND type=ConnectionProfile
You can also use parentheses and the logical operators AND and OR for
complex expressions. To learn more about the expressions that you can use in the
search field, see Search syntax for
Knowledge Catalog .
You can directly enter search queries for specific Datastream
assets into the search field. The format of the query string is as follows:
type = "projects/dataplex-types/locations/global/entryTypes/ QUERY_STRING "
Replace the following:
QUERY_STRING : use the following list to identify a
query string based on the type of Datastream asset that you
want to query:
datastream-stream
datastream-connection-profile
datastream-private-connection
An example query might look like the following:
type="projects/dataplex-types/locations/global/entryTypes/datastream-stream"
Pricing
There is no charge for storing Datastream technical metadata in
Knowledge Catalog. Standard
Knowledge Catalog pricing applies for API calls and additional
business metadata enrichment. For more information, see the
Knowledge Catalog pricing page .
What's next
Learn about metadata management in Knowledge Catalog .
Learn about Knowledge Catalog Identity and Access Management roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
