---
title: "Google Cloud release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/release-notes
source_metadata:
  url: https://docs.cloud.google.com/release-notes
  title: "Google Cloud release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Send feedback
Google Cloud release notes
Stay organized with collections
Save and categorize content based on your preferences.
The following release notes cover the most recent changes over the last 60 days.
For a comprehensive list of product-specific release notes, see the
individual product release note pages .
You can also see and filter all release notes in the
Google Cloud console or you
can programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 13, 2026
BigQuery
Feature
Support for the AI.AGG function preview
has been temporarily disabled. We are working to restore this feature as soon as
possible.
Feature
To reduce LLM token consumption and query latency when processing large
datasets, enable optimized mode
using the following managed AI functions :
AI.IF
AI.CLASSIFY
This feature is in
Preview .
Feature
The following managed AI functions
use Gemini to help you filter, join, rank, and classify your data:
AI.IF :
Filter and join text and unstructured data (such as images, PDFs, audio, or
video) based on a condition described in natural language.
AI.SCORE :
Rate text and unstructured data (such as images, PDFs, audio, or video) to
rank your data by quality, similarity, or other criteria.
AI.CLASSIFY :
Classify text and unstructured data (such as images, PDFs, audio, or video)
into user-defined categories.
These functions are generally available
(GA).
Feature
You can use visualization cells to
automatically generate a visualization
of any DataFrame in your notebook. You can customize the columns, chart type,
aggregations, colors, labels, and title.
This feature is generally available
(GA).
Bigtable
Feature
You can now use GoogleSQL geography functions to work with geospatial data in Bigtable.
This feature is generally available (GA) .
For more information, see Work with geospatial data
and Geography functions reference .
Feature
Bigtable supports pipe syntax ,
an extension to GoogleSQL that lets you build simpler and more concise queries.
This feature is generally available (GA) .
Cloud CDN
Feature
Google Kubernetes Engine (GKE) Gateway supports Cloud CDN to help you cache
content closer to your users, improve application latency, and reduce origin
load. Using GKE Gateway APIs, you can configure, manage, and fine-tune caching
configurations for different segments of your traffic. This feature is in Preview .
For more information, see Configure Cloud CDN for Gateway .
Cloud Logging
Libraries
Go
{: track-name='go'}
#### v1.15.0 (2026-04-09)
Cloud Monitoring
Feature
Application Monitoring can display a single, dynamic topology map showing your
App Hub applications and your registered and discovered services and
workloads. This interactive map identifies services and workloads that have open
incidents. It also displays the error rates and P95 latency between your
services and workloads.
To learn more, see the following:
View application topology
Application Monitoring overview
View application telemetry
Cloud NAT
Feature
General Availability : Cloud NAT gateways for Public NAT support
source-based NAT rules for IPv4 addresses.
Cloud Run
Feature
Support for NVIDIA RTX PRO 6000 Blackwell GPU is in General Availability .
For more information, see GPU support for services ,
jobs , and worker pools .
Cloud Service Mesh
Announcement
1.28.5-asm.12 is now available for in-cluster Cloud Service Mesh.
This patch release contains fixes for the following platform CVEs:
CVE
Proxy
Control Plane
Distroless
CNI
Severity
CVE-2026-33186
Yes
Yes
Yes
Yes
Critical (9.1)
CVE-2026-3731
Yes
Yes
No
Yes
High (7.5)
CVE-2026-3784
Yes
Yes
No
Yes
Medium (6.5)
CVE-2026-1965
Yes
Yes
No
Yes
Medium (6.5)
CVE-2026-29111
Yes
Yes
No
Yes
Medium (5.5)
CVE-2026-3783
Yes
Yes
No
Yes
Medium (5.3)
CVE-2025-0167
Yes
Yes
No
Yes
Low (3.4)
For details on upgrading Cloud Service Mesh, see
Upgrade Cloud Service Mesh . Cloud Service
Mesh 1.28.5-asm.12 uses Envoy 1.36.5-dev.
Announcement
1.27.8-asm.9 is now available for in-cluster Cloud Service Mesh.
This patch release contains fixes for the following platform CVEs:
CVE
Proxy
Control Plane
Distroless
CNI
Severity
CVE-2026-33186
Yes
Yes
Yes
Yes
Critical (9.1)
CVE-2026-3731
Yes
Yes
No
Yes
High (7.5)
CVE-2026-3784
Yes
Yes
No
Yes
Medium (6.5)
CVE-2026-1965
Yes
Yes
No
Yes
Medium (6.5)
CVE-2026-29111
Yes
Yes
No
Yes
Medium (5.5)
CVE-2026-3783
Yes
Yes
No
Yes
Medium (5.3)
CVE-2025-0167
Yes
Yes
No
Yes
Low (3.4)
For details on upgrading Cloud Service Mesh, see
Upgrade Cloud Service Mesh . Cloud Service
Mesh 1.27.8-asm.9 uses Envoy 1.35.10-dev.
Announcement
The following images are now rolling out for managed Cloud Service Mesh:
1.21.6-asm.19 is rolling out to the rapid release channel.
1.20.8-asm.73 is rolling out to the regular release channel.
1.19.10-asm.66 is rolling out to the stable release channel.
These patch releases contain the fixes for the following CVEs:
CVE
Proxy
Control Plane
Distroless
CNI
MDPC
Severity
CVE-2022-27943
Yes
Yes
Yes
No
No
Medium (5.5)
CVE-2023-4039
Yes
Yes
Yes
No
No
Medium (4.8)
CVE-2023-4527
Yes
Yes
Yes
No
No
Medium (6.5)
CVE-2023-4806
Yes
Yes
Yes
No
No
Medium (5.9)
CVE-2023-4911
Yes
Yes
Yes
No
No
High (7.8)
CVE-2023-5156
Yes
Yes
Yes
No
No
High (7.5)
CVE-2023-6246
Yes
Yes
Yes
No
No
High (7.8)
CVE-2024-2961
Yes
Yes
Yes
No
No
High (7.3)
CVE-2024-33599
Yes
Yes
Yes
No
No
High (8.1)
CVE-2024-33600
Yes
Yes
Yes
No
No
Medium (5.9)
CVE-2024-33601
Yes
Yes
Yes
No
No
High (7.3)
CVE-2024-33602
Yes
Yes
Yes
No
No
High (7.4)
CVE-2025-0167
Yes
Yes
No
No
No
Low (3.4)
CVE-2025-0395
Yes
Yes
Yes
Yes
No
Medium (6.2)
CVE-2025-15281
Yes
Yes
Yes
No
No
High (7.5)
CVE-2025-4802
Yes
Yes
Yes
Yes
No
High (7.8)
CVE-2025-68972
Yes
Yes
No
No
No
Medium (4.7)
CVE-2025-8058
Yes
Yes
Yes
No
No
Low (0.0)
CVE-2025-8941
Yes
Yes
No
No
No
Low (0.0)
CVE-2026-0861
Yes
Yes
Yes
No
No
High (8.4)
CVE-2026-0915
Yes
Yes
Yes
No
No
High (7.5)
CVE-2026-1965
Yes
Yes
No
Yes
Yes
Medium (6.5)
CVE-2026-29111
Yes
Yes
No
Yes
Yes
Medium (5.5)
CVE-2026-33186
Yes
Yes
Yes
No
No
Critical (9.1)
CVE-2026-3731
Yes
Yes
No
Yes
Yes
High (7.5)
CVE-2026-3783
Yes
Yes
No
Yes
Yes
Medium (5.3)
CVE-2026-3784
Yes
Yes
No
No
No
Medium (6.5)
Announcement
1.26.8-asm.5 is now available for in-cluster Cloud Service Mesh.
This patch release contains fixes for the following platform CVEs:
CVE
Proxy
Control Plane
Distroless
CNI
Severity
CVE-2026-33186
Yes
Yes
Yes
Yes
Critical (9.1)
CVE-2026-3731
Yes
Yes
No
Yes
High (7.5)
CVE-2026-3784
Yes
Yes
No
Yes
Medium (6.5)
CVE-2026-1965
Yes
Yes
No
Yes
Medium (6.5)
CVE-2026-29111
Yes
Yes
No
Yes
Medium (5.5)
CVE-2026-3783
Yes
Yes
No
Yes
Medium (5.3)
CVE-2025-68972
Yes
No
No
Yes
Medium (4.7)
CVE-2025-0167
Yes
Yes
No
Yes
Low (3.4)
CVE-2025-8941
Yes
No
No
Yes
Low (0.0)
For details on upgrading Cloud Service Mesh, see
Upgrade Cloud Service Mesh . Cloud Service
Mesh 1.26.8-asm.5 uses Envoy 1.34.14-dev.
Colab Enterprise
Feature
Visualization cells
Generally available :
You can use visualization cells to generate interactive and editable
visualizations from within a Colab Enterprise notebook. You can
configure the chart type, aggregation, colors, labels, and other aspects of the
visualization to help you explore data and discover insights. For more
information, see Use visualization cells .
Gemini
Fixed
Quota issues fixed in VS Code
Various bug fixes related to quota issues.
Fixed
Quota issues fixed in VS Code
Various bug fixes related to quota issues.
Gemini Enterprise
Feature
Gemini Enterprise: Enhanced filtering for Google Chat data stores (Preview)
You can configure filters for your Google Chat data stores using either the Google Cloud console or the API. These filters allow you to define exactly which Google Chat data is accessible to the Assistant by including or excluding specific content.
This feature is in Public Preview and is applicable for federated search only. For more information, see Set up a Google Chat data store and Add filters to a Google Chat data store .
Google Kubernetes Engine
Change
The validation of the HealthCheckPolicy custom resource from the
GKE Gateway API is more rigorous in GKE
version 1.34 and later. Existing HealthCheckPolicy resources that already
contain mismatched type fields in the config are exempted and continue to
function. However, updates to any existing policy must not introduce a
mismatched type field in the config or change currently mismatched
fields to new invalid values.
When the HealthCheckPolicy custom resource is validated, the type field
is now verified against the specified health check. For example, if
type: TCP is specified but httpHealthCheck is configured, then the fields
are mismatched and kubectl rejects the policy. However, for this same example,
if type: TCP is specified and tcpHealthCheck is configured, then the
fields are valid.
Earlier versions of GKE accept custom resources that don't have matching fields. If you use an earlier version, the type field is used
and the configuration in the health check field is ignored.
For more details, see
Configure health checks .
Identity and Access Management
Feature
Requesters can schedule grant requests in Privileged Access Manager up to seven days in
advance. This lets requesters align access with scheduled maintenance or on-call
shifts.
This feature is in preview .
For more information, see Privileged Access Manager overview .
Memorystore for Valkey
Feature
Version 1.0 of Bloom filters and JSON documents is Generally Available .
April 12, 2026
Google SecOps SOAR
Announcement
Release 6.3.83 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
April 11, 2026
Google SecOps SOAR
Announcement
Release 6.3.82 is now available for all regions.
April 10, 2026
BigQuery
Feature
SQL cells in BigQuery notebooks are now
generally available
(GA).
Cloud Load Balancing
Feature
Published service backends let you configure supported load balancers
or regional Cloud Service Mesh to route
traffic to published services through Private Service Connect endpoints.
For more information, see
Published service backends .
This feature is in Preview .
Cloud Trace
Feature
Use Cloud Trace to troubleshoot your MCP server usage, tool failures, and
latency causes. For more information, see
Investigate MCP calls using Trace .
Colab Enterprise
Feature
SQL cells
Generally available :
You can use SQL cells to write, edit, and run SQL queries directly from your
Colab Enterprise notebooks. For more information, see
Use SQL cells .
Dataplex
Announcement
Dataplex Universal Catalog is now called Knowledge Catalog. The API, client
library, CLI, and Identity and Access Management (IAM) names remain unchanged.
Feature
The lightweight profiling mode for data profile scans is available in
preview .
The lightweight mode provides low-latency profile scans that return results in
seconds, making it ideal for grounding AI agent responses and interactive data
exploration. For more information, see Profiling modes .
Datastream
Feature
Datastream is now integrated with Knowledge Catalog.
This integration lets you search for and browse your Datastream
resources, such as streams, connection profiles, and connectivity configurations
directly in Knowledge Catalog.
For more information, see
the documentation .
Google Cloud Contact Center as a Service
Announcement
Google Cloud CCaaS prerelease notes
Here are the prerelease notes for the next version of Google Cloud CCaaS. When
we release this version, we expect the new capabilities to be as shown here.
Feature
Language selection support for direct calls
End-users making direct calls to agent phone numbers and agent extension numbers
can select their language at the start of a call.
Administrators: The Add Number and Edit a Number dialogs, located at
Settings > Call > Phone Numbers > Phone
Number Management , have a new Set a default language checkbox (when the
Set as a direct number checkbox is selected). A list of languages appears
when you select the Set a default language checkbox.
Feature
"Improved controls for predictive campaigns" is available without assistance
from the Google account team
This feature was announced on March 24,
2026 but
previously required the Google account team to enable it. You no longer need
assistance from the Google account team to use this capability. For more
information, see Predictive
campaigns .
Feature
Virtual agents can transfer calls to a specific human agent
Virtual agents can transfer calls directly to a specific human agent using the
agent ID or agent extension number. Include the agent_extension or agent_id
field in the transfer payload to direct the call to the correct agent.
Fixed
The following issues were addressed in this release:
Fixed an issue where backslash characters in chat shortcuts and chat
messages weren't displayed correctly, resulting in missing or empty message
chat bubbles.
Fixed an issue where virtual agent chat transcripts didn't match the actual
conversation.
Fixed an issue where call times in session metadata for virtual agent to
human agent escalations were shorter than the actual call times.
Fixed an issue where agents were able to join a conference call despite
receiving microphone permission errors.
Fixed an issue where direct inbound calls to Twilio numbers assigned at the
user level continuously rang without reaching the agent.
Fixed an issue where chat transfers from auto-answer queues to manual-answer
queues were incorrectly recorded as manual-to-manual in reporting.
Fixed an agent desktop issue where French (Canadian) translations were
missing or incorrect during outbound calls.
Fixed an issue where the All Teams filter didn't block interactions with
background elements, which could cause unintended end-user interactions with
the UI.
Fixed an issue where missed call volumes didn't appear on the agent
monitoring page.
Fixed an issue that occurred when the Display transfer history in agent
adapter capability was enabled. After a virtual agent escalation,
escalated queue names were shown in English instead of the correct target
language.
Fixed an issue where virtual agent audio sessions ended after 15 minutes,
causing calls to be escalated unexpectedly.
Fixed an issue where underscores within email addresses were incorrectly
removed in CRM transcripts.
Fixed an issue where chat transcript PDFs weren't generated when real-time
redaction was enabled and conversations included non-text message types such
as inline buttons or content cards.
Fixed an issue where content cards sent by virtual agents during
conversations were missing from the PDF chat transcript.
Fixed an issue where chat transcripts created through the API weren't
appearing in agent conversations.
Fixed an issue where voicemails disappeared from the agent's queue and
didn't appear in voicemail history or reports.
Fixed an issue where the agent adapter displayed Escalated Virtual Agent
Call instead of IVR Callback after connecting during a callback.
Fixed an issue where chat disposition selections reset during wrap-up,
particularly when Agent Assist was enabled.
Fixed an issue where custom fields in dialer list uploads worked only if the
column headers were in all caps.
Fixed an issue where the email adapter didn't start up.
Service Extensions
Feature
When configuring extensions by using plugins or callouts, you can specify some
request and connection attributes to forward to backend services. For more
information, see supported attributes .
Virtual Private Cloud
Feature
Private Service Connect consumers can configure supported load
balancers or regional Cloud Service Mesh to access published services through
Private Service Connect endpoints. This feature is available in Preview .
For more information, see
Published service backends .
April 09, 2026
Apigee X
Change
Relaxed limitation on header name for Client IP resolution
The client IP can now be resolved from any header, not just the X-Forwarded-For header. The most common headers are X-Forwarded-For or True-Client-Ip .
For more information, see Client IP resolution .
BigQuery
Feature
The BigQuery Data Transfer Service can now
transfer data from Snowflake to BigQuery .
This feature is generally available (GA).
Feature
You can now use stateful operations in continuous
queries ,
which let you perform complex analysis by retaining information across multiple
rows or time intervals using JOIN s and windowing aggregations. This feature is
in Preview .
Feature
You can now use BigQuery Graph to model your
data as a graph and perform analysis on a large scale.
Create a graph directly from tables that store
entities and relationships between entities. You don't need to modify your
existing workflows or replicate your data to use it in graph queries.
Use
Graph Query Language (GQL)
to find complex, hidden relationships between data points that would be
challenging to find using SQL.
Visualize your graph schema and graph
query results in a notebook.
This feature is in
Preview .
Bigtable
Feature
You can use Gemini in Bigtable Studio to help you write GoogleSQL queries. This
feature is available in Preview .
For more information, see Write SQL with Gemini assistance .
Cloud Hub
Feature
Security & compliance in Cloud Hub is now in Preview .
Compute Engine
Feature
Generally available : Hyperdisk ML disks are supported by the following machine
series:
A3 Ultra
C4D
N4
N4D
Hyperdisk ML offers the highest throughput of all Google Cloud Hyperdisk types,
up to 2 TiB/s (2,097,152 MiB/s). For more information,
see Hyperdisk ML overview .
Dataplex
Feature
You can now specify a custom execution identity for data quality and
data profile scans. By default, scans are executed using the Service
Agent. You can now use a custom service account (Bring Your Own Service Account)
or End-User Credentials (EUC). Using a custom execution identity lets you
enforce the principle of least privilege, use fine-grained BigQuery access
controls, and unify scan processing costs directly under BigQuery.
For more information, see Configure execution identity for data quality scans and Configure execution identity for data profile scans .
Filestore
Feature
Filestore is integrated with Backup and Disaster Recovery (DR) Service allowing you to centrally manage your backups with advanced features for data protection.
This feature is generally available for Filestore instances.
For more information, see Backups overview .
Firestore with MongoDB compatibility
Feature
You can now use
Gemini Code Assist to get AI-powered assistance in Firestore
to generate MQL queries using natural language prompts .
This feature is available in Preview .
Gemini
Fixed
Agent mode logs now attributed to Gemini Code Assist
VS Code Gemini Code Assist 2.77.1 now attributes agent mode logs to Gemini
Code Assist. In previous versions, agent mode logs are being attributed to
Gemini CLI instead of Gemini Code Assist. This discrepancy is resolved in the
latest release, and we recommend that you update to version 2.77.1 or higher
to ensure your usage metrics are correctly reported.
Fixed
Agent mode logs now attributed to Gemini Code Assist
VS Code Gemini Code Assist 2.77.1 now attributes agent mode logs to Gemini
Code Assist. In previous versions, agent mode logs are being attributed to
Gemini CLI instead of Gemini Code Assist. This discrepancy is resolved in the
latest release, and we recommend that you update to version 2.77.1 or higher
to ensure your usage metrics are correctly reported.
Gemini Enterprise
Feature
Gemini Enterprise: Support for new actions (Preview)
New actions are available for the following data stores:
Microsoft Outlook
Salesforce
This feature is in Public Preview. For a list of actions for these data stores, see Supported actions .
Google Kubernetes Engine
Change
(2026-R14) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for
manual control plane upgrades and node upgrades for existing clusters. For more
information about versioning and upgrades, see GKE versioning and
support and About GKE
cluster upgrades .
Rapid channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Rapid channel:
1.32.13-gke.1258000
1.33.10-gke.1115000
1.34.6-gke.1154000
1.35.3-gke.1234000
Regular channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Regular channel:
1.32.13-gke.1147000
1.33.9-gke.1166000
1.34.5-gke.1208000
1.35.2-gke.1842000
Stable channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Stable channel:
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.35 to 1.35.2-gke.1269001
Extended channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Extended channel:
1.30.14-gke.2320000
1.31.14-gke.1723000
1.32.13-gke.1147000
1.33.9-gke.1166000
1.34.5-gke.1208000
1.35.2-gke.1842000
No channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available:
1.32.13-gke.1258000
1.33.10-gke.1115000
1.34.6-gke.1154000
1.35.3-gke.1234000
The following node versions are now available:
1.30.14-gke.2320000
1.31.14-gke.1723000
1.32.13-gke.1258000
1.33.10-gke.1115000
1.34.6-gke.1154000
1.35.3-gke.1234000
Security
(2026-R14) Security updates
This release includes new GKE versions that use updated
Container-Optimized OS images. These updated images are cumulative,
incorporating security fixes from all Container-Optimized OS
versions released since the previous GKE release.
To identify the specific vulnerabilities that were resolved in each updated
Container-Optimized OS image, see the Security release notes
for that image. The following table includes links to the release notes for
each updated Container-Optimized OS image:
GKE version
Container-Optimized OS version
Details
1.30.14-gke.2320000
cos-117-18613-534-53
cos-117-18613-534-53 release notes
1.31.14-gke.1723000
cos-117-18613-534-53
cos-117-18613-534-53 release notes
1.32.13-gke.1258000
cos-117-18613-534-53
cos-117-18613-534-53 release notes
1.33.10-gke.1115000
cos-121-18867-381-56
cos-121-18867-381-56 release notes
1.34.6-gke.1154000
cos-125-19216-220-106
cos-125-19216-220-106 release notes
1.35.3-gke.1234000
cos-125-19216-220-72
cos-125-19216-220-72 release notes
Change
(2026-R14) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Stable channel:
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.35 to 1.35.2-gke.1269001
Change
(2026-R14) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Regular channel:
1.32.13-gke.1147000
1.33.9-gke.1166000
1.34.5-gke.1208000
1.35.2-gke.1842000
Change
(2026-R14) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Rapid channel:
1.32.13-gke.1258000
1.33.10-gke.1115000
1.34.6-gke.1154000
1.35.3-gke.1234000
Change
(2026-R14) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available:
1.32.13-gke.1258000
1.33.10-gke.1115000
1.34.6-gke.1154000
1.35.3-gke.1234000
The following node versions are now available:
1.30.14-gke.2320000
1.31.14-gke.1723000
1.32.13-gke.1258000
1.33.10-gke.1115000
1.34.6-gke.1154000
1.35.3-gke.1234000
Change
(2026-R14) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Extended channel:
1.30.14-gke.2320000
1.31.14-gke.1723000
1.32.13-gke.1147000
1.33.9-gke.1166000
1.34.5-gke.1208000
1.35.2-gke.1842000
Looker
Announcement
Starting with the Looker 26.8 release, which will release in May 2026, the following changes will occur:
Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
Looker (original) admins will be able to manage which users have access to individually owned API credentials.
Users with access to API credentials will be able to access and manage their own API credentials.
Before your Looker instance is upgraded to the Looker 26.8 release, your admin must follow the steps in the Migrating users to service accounts documentation page. This is to ensure admins can either create or migrate service accounts from existing standard users if they require access to users' API credentials.
For more information, see the Discontinuing the admin capability to create, view, and manage API credentials for a standard user deprecation notice.
Service Extensions
Feature
Google Kubernetes Engine (GKE) Gateway support for using extensions by using
callouts to add custom logic into the load balancing processing path is in
General Availability . For more information, see
GKE extensions .
April 08, 2026
BigQuery
Feature
The BigQuery Data Transfer Service now supports incremental data transfers
when transferring data from Microsoft SQL Server to BigQuery. This feature is supported in
Preview .
Feature
You can now use the
@@session_id system variable with
SQL user-defined functions, table functions, and logical views. This feature is
generally available
(GA).
Cloud Storage
Feature
You can delete up to 1,000 objects in a single request by using the
Cloud Storage multi-object delete XML API. If you use Amazon S3-compatible tools or
libraries, you can point your request to the Cloud Storage endpoint to use this
feature with your existing workflows. For more information, see
Delete objects and
Delete multiple objects .
Cloud Trace
Feature
Google Cloud CLI lets you configure trace scopes, manage observability buckets,
and set default observability settings. These features are in Public Preview.
For more information, see the following documents:
Configure trace scopes by using the Google Cloud console, the Google Cloud CLI,
Terraform, or the Observability API. For more information, see Create and
manage trace scopes .
Manage trace storage by using the Google Cloud CLI or the Observability API.
For more information, see Manage trace storage .
Configure default settings by using the Google Cloud CLI, Terraform, or the
Observability API. For more information, see
Set defaults for observability buckets .
Gemini
Other
Bug fixes in VS Code
Various bug fixes and minor product enhancements.
Gemini Cloud Assist
Breaking
Custom IAM roles permission update for Gemini Cloud Assist
Gemini Cloud Assist has replaced the cloudaicompanion.instances.completeTask
IAM permission with geminicloudassist.agents.invoke . If you have access to
Gemini Cloud Assist through a custom IAM role, you must update the role to
continue having access. For more information, see the
deprecated IAM permissions
page.
Google Kubernetes Engine
Feature
Gateway API v1.5
is supported in GKE version 1.35.2-gke.1842000 and later.
The GKE Gateway controller passes core conformance tests for
this version of the Gateway API.
Feature
GKE managed DRANET is now Generally Available (GA)
for GKE version 1.35.2-gke.1842000 or later.
GKE DRANET is a managed feature that implements the
Kubernetes Dynamic Resource Allocation (DRA) API for high-performance
networking. The GA release expands support beyond the preview phase to
include the following hardware:
NVIDIA GPU Instances: Support for instances starting from A3 Ultra, including A4, A4X, and A4X Max.
Cloud TPU Instances: Support for TPU v6e and TPU v7x.
For more information, see
Allocate network resources by using GKE managed DRANET .
Change
The feature announced on November 7, 2025 ,
providing faster log processing, has been rolled back. The rollback is due
to an issue in an underlying dependency. The described performance
improvements are not currently in effect.
Google SecOps
Announcement
Emerging Threats Center general availability
The Emerging Threats Center is now in General Availability (GA) and includes
the following new features and enhancements:
Expanded campaign filtering: Filter the Emerging Threats feed by new
categories, including associated malware, tools, and threat actors.
MITRE ATT&CK matrix visualization: Evaluate your detection rule coverage
for specific tactics, techniques, and procedures (TTPs) using the new
visualization matrix in the Associated Rules panel. You can customize
heat map metrics, filter the matrix by rule or alerting status, and view
detailed context for specific sub-techniques.
Enhanced Entity context panel: Investigate an indicator of compromise (IoC)
using the Entity context panel to view its point-in-time state and related
cases.
GTI-associated IoC categories: Filter GTI-associated IoCs by specific
categories, including Files , URLs , Domains , and IPs .
For more information, see Emerging Threats Center overview
and Emerging Threats Center detail view .
Google SecOps SIEM
Announcement
Emerging Threats Center general availability
The Emerging Threats Center is now in General Availability (GA) and includes
the following new features and enhancements:
Expanded campaign filtering: Filter the Emerging Threats feed by new
categories, including associated malware, tools, and threat actors.
MITRE ATT&CK matrix visualization: Evaluate your detection rule coverage
for specific tactics, techniques, and procedures (TTPs) using the new
visualization matrix in the Associated Rules panel. You can customize
heat map metrics, filter the matrix by rule or alerting status, and view
detailed context for specific sub-techniques.
Enhanced Entity context panel: Investigate an indicator of compromise (IoC)
using the Entity context panel to view its point-in-time state and related
cases.
GTI-associated IoC categories: Filter GTI-associated IoCs by specific
categories, including Files , URLs , Domains , and IPs .
For more information, see Emerging Threats Center overview
and Emerging Threats Center detail view .
April 07, 2026
BigQuery
Feature
The BigQuery Data Transfer Service now supports incremental data transfers for
the following data source connectors:
MySQL
Oracle
PostgreSQL
ServiceNow
These features are supported in
Preview .
Feature
You can now use the built-in text embedding model embeddinggemma-300m in the
AI.EMBED
and
AI.SIMILARITY
functions. This model uses your BigQuery slots to generate embeddings at scale.
This feature is in
Preview .
Bigtable
Feature
You can connect to Bigtable from Java applications and other reporting tools
that support a generic JDBC adapter by using the Bigtable JDBC driver .
This feature is generally available (GA) .
Feature
You can use protocol buffer (protobuf) schemas
to query individual fields within protobuf messages stored as bytes in Bigtable.
You can query your protobuf data using GoogleSQL for Bigtable, continuous
materialized views, logical views, or BigQuery external tables. This feature is
generally available (GA) .
Cloud Database Migration Service
Feature
You can use the
Database Migration Service MCP server to enable agents and AI applications to view and
manage running migration jobs. This feature is in
Preview .
Cloud Logging
Feature
You can now ingest OTLP-formatted logs into Cloud Logging by using an
OpenTelemetry Collector, an OTLP exporter, and the Telemetry API. For more
information, see
OTLP log ingestion overview .
The Telemetry API for log ingestion is in Preview .
Confidential VM
Feature
Live migration
is generally available (GA)
on Confidential VM instances that meet the following configuration criteria:
A C3D machine type
AMD SEV Confidential Computing technology
An operating system image that supports live migration
Dataflow
Feature
When you use min_ram or cpu_count resource hints for pipeline steps that don't require accelerators, Auto VM Selection (Instance Flexibility) is enabled automatically. With Auto VM Selection, workers are provisioned from a curated list of machine types that meet your RAM and CPU requirements. For more information, see Auto VM Selection for worker machine types .
Datastream
Feature
You can now use the
Datastream remote MCP server
to enable LLM agents to perform data-related tasks, such as managing and
monitoring your streams, connection profiles, and stream objects.
This feature is in
Preview .
Gemini Enterprise
Feature
Gemini Enterprise: Dropbox federated data store
The Dropbox federated data store is generally available (GA) in Gemini Enterprise.
For more information, see Set up a Dropbox data store .
Google Cloud Contact Center as a Service
Announcement
Advance reporting dashboards 4.12
We've released version 4.12 of the advanced reporting dashboards.
Feature
Repeat contacts data added to advanced reporting dashboards
Repeat contacts data is now available in the following advanced reporting
dashboards:
Real-time Queue Monitoring - Calls and Real-time Queue Monitoring -
Chats : new Total Repeat Contacts tile. For more information, see
Queue monitoring
dashboards .
All Interactions - Calls and All Interactions - Chats : new Repeat
Contact column in the Call Metric Detail and Chat Metric Detail
tables.
Real-time Calls - Calls Connected and Real-time Chats - Chats
Connected : new Repeat Contact column in the Connected Calls and
Connected Chats tables.
Feature
New Total Queued Answered metric in the Chat Queue Metrics Explore
The Chat Queue Metrics Explore now includes the Total Queued Answered
metric. This metric provides a precise count of chats answered from the queue,
providing accurate Service Level Agreement (SLA) and answer rate calculations
where the standard "handled" metric might not apply—for example, if a
chat is answered and then immediately disconnected.
Fixed
The following issues were addressed in this release:
Fixed an issue where dashboard names and favorite buttons were missing,
preventing users from renaming dashboards and marking them as favorites.
Fixed an issue where fields for hourly and 30-minute intervals in call queue
metrics didn't display detailed data over long date ranges.
Fixed an issue where the Teams Filter filter displayed incorrect data.
Fixed an issue where calls that started at a specific time didn't appear in
their corresponding time windows.
Fixed an issue in the Agent Activity dashboard where the Created By
column attributed status changes to an agent when an administrator performed
the changes.
Fixed an issue where historical call and chat metrics displayed incorrect
timestamps.
On the Real-time Queue Monitoring - Calls and Real-time Queue
Monitoring - Chats dashboards, in the Historical Data tables, the
Avg CSAT column was renamed CSAT .
Fixed an issue on the Channel Interval - Calls and Channel Interval -
Chats dashboards where drill-down views in the trend tiles displayed
incorrect information or were empty.
Fixed an issue in the Queue Group Performance - All dashboard where blue
highlighting wasn't applied to populated fields in the Queue Group
Performance Calls and Queue Group Performance Chats tables.
Google SecOps
Change
Search query editor enhancements
Google SecOps has enhanced the search query editor to provide intelligent
auto-suggestions and improved error handling.
Auto-suggestions : The query editor now provides context-aware auto-suggestions
for fields, operators, and valid values as you type.
Error handling : The editor now highlights syntax errors with a red squiggly
line and displays a tooltip with the specific error description when you hover
over it. Additionally, runtime errors now display persistently in the Results panel
to assist with troubleshooting.
For more information, see
Use auto-suggestions to build queries .
Note: This change follows a phased rollout from April 07, 2026 , to April 10, 2026 .
Reach out to support if you do not see the new limits applied to your environment
after April 10, 2026 .
Feature
Health Hub
This feature is currently in Preview.
The Health Hub is the central location in Google Security Operations for you to monitor the status and health of all configured data sources. The Health Hub provides crucial information on data sources and log types, offering the context needed to diagnose and remediate data pipeline issues.
The Health Hub includes information about the following:
Ingestion volumes and ingestion health.
Parsing volumes from raw logs to Unified Data Model (UDM) events .
Context and links to interfaces with additional relevant information and functionality.
Irregular and failed sources and log types.
For more information, see Use the Health Hub .
Google SecOps SIEM
Change
Search query editor enhancements
Google SecOps has enhanced the search query editor to provide intelligent
auto-suggestions and improved error handling.
Auto-suggestions : The query editor now provides context-aware auto-suggestions
for fields, operators, and valid values as you type.
Error handling : The editor now highlights syntax errors with a red squiggly
line and displays a tooltip with the specific error description when you hover
over it. Additionally, runtime errors now display persistently in the Results panel
to assist with troubleshooting.
For more information, see
Use auto-suggestions to build queries .
Note: This change follows a phased rollout from April 07, 2026 , to April 10, 2026 .
Reach out to support if you do not see the new limits applied to your environment
after April 10, 2026 .
Feature
Health Hub
This feature is currently in Preview.
The Health Hub is the central location in Google Security Operations for you to monitor the status and health of all configured data sources. The Health Hub provides crucial information on data sources and log types, offering the context needed to diagnose and remediate data pipeline issues.
The Health Hub includes information about the following:
Ingestion volumes and ingestion health.
Parsing volumes from raw logs to Unified Data Model (UDM) events .
Context and links to interfaces with additional relevant information and functionality.
Irregular and failed sources and log types.
For more information, see Use the Health Hub .
Identity and Access Management
Feature
Organization Policy Service custom constraints are available for managed workload identity
and Workload Identity Federation. You can use custom constraints to control how
managed workload identity and Workload Identity Federation are used in your
organization. For more information, see
Custom organization policy constraints for managed workload identity
and
Custom organization policy constraints for Workload Identity Federation .
Looker
Feature
The Table Visualization Improvements preview feature is now available and is disabled by default.
When this preview feature is enabled, you can use the following features for table visualizations :
Pagination
Show/Hide Table Headers
Table Borders
Cell Highlighting
Conditional formatting for string fields
Note: When Cell Highlighting is enabled, conditional formatting is not available.
Secret Manager
Feature
Parameter Manager supports the latest identifier, which lets you fetch the
most recent parameter value without specifying a version ID. When you use the
gcloud CLI or REST API, you can use latest to retrieve the most recent version
of a parameter.
For more information, see Access a parameter version .
April 06, 2026
AlloyDB for PostgreSQL
Feature
The QueryData tool lets you to query the data in your database using
conversational language and build data agents. For more information, see
QueryData tool
overview .
This feature is available in
( Preview ).
The preview release increases the accuracy of SQL generation with value search queries which match values and their context within a database. Value search queries trigger automatically. QueryData also adds support for Parameterized secure views (PSVs) to help secure applications that use natural language queries. For more information, see Secure and control access to application data using parameterized secure views .
Apigee API hub
Feature
Agent Registry integration support for MCP metadata (Preview)
API hub now includes a managed integration with Agent Registry to automatically synchronize Model Context Protocol (MCP) servers and tools metadata. This feature enables AI agents to discover and interact with the APIs registered in your hub without manual configuration.
This feature is in Public Preview . For more information, see Manage Agent Registry integration .
Apigee X
Fixed
Correction to April 2, 2026 release note: Deployment disruption for Apigee Drupal Portal via Google Cloud Marketplace
For the deployment disruption announced on April 2, the announcement noted that deployment and management functionality using Google Cloud Deployment Manager would definitely be unavailable during the transition. This statement is incorrect. The functionality might be unavailable.
See the Known issue for more information.
Change
On April 6th, 2026, we released an updated version of Apigee.
This change introduces the new apigee.coreServiceAgent IAM role for
Apigee. Effective immediately, use apigee.coreServiceAgent instead of the
apigee.serviceAgent role.
For information on the new role, see
apigee.coreServiceAgent .
Artifact Registry
Feature
You can manually prewarm images
in Artifact Registry to reduce the cold-start latency for deployments. This
feature is only available using the API.
BigQuery
Feature
You can now use the
AI.AGG function
to semantically aggregate unstructured input data based on natural language
instructions. This feature is in
Preview .
Feature
You can now use a custom organization policy
to allow or deny specific operations on these BigQuery resources:
tables, data policies, and row access policies. This feature is in preview .
Cloud Logging
Libraries
Go
{: track-name='go'}
#### v1.14.0 (2026-04-02)
Cloud SQL for MySQL
Feature
The QueryData tool lets you to query the data in your database using conversational language and build data agents. For more information, see QueryData tool overview . This feature is available in ( Preview ).
The preview release increases the accuracy of SQL generation with value search queries which match values and their context within a database. Value search queries trigger automatically.
Feature
If the storage capacity of a Cloud SQL instance is larger than your application
needs, then you can manually reduce, or shrink, your storage capacity to a smaller
size.
Depending on underlying disk size, storage shrink operations might incur
considerable downtime. If your instance requires limited downtime, rather than
using storage shrink capabilities, we recommend migrating your data to a new,
smaller instance using Database Migration Service.
For more information, see
About storage shrink .
Cloud SQL for PostgreSQL
Feature
If the storage capacity of a Cloud SQL instance is larger than your application
needs, then you can manually reduce, or shrink, your storage capacity to a smaller
size.
Depending on underlying disk size, storage shrink operations might incur
considerable downtime. If your instance requires limited downtime, rather than
using storage shrink capabilities, we recommend migrating your data to a new,
smaller instance using Database Migration Service.
For more information, see
About storage shrink .
Feature
The QueryData tool lets you to query the data in your database using conversational language and build data agents. For more information, see QueryData tool overview . This feature is available in ( Preview ).
The preview release increases the accuracy of SQL generation with value search queries which match values and their context within a database. Value search queries trigger automatically.
Cloud SQL for SQL Server
Feature
If the storage capacity of a Cloud SQL instance is larger than your application
needs, then you can manually reduce, or shrink, your storage capacity to a smaller
size.
Depending on underlying disk size, storage shrink operations might incur
considerable downtime. If your instance requires limited downtime, rather than
using storage shrink capabilities, we recommend migrating your data to a new,
smaller instance using Database Migration Service.
For more information, see
About storage shrink .
Feature
Cloud SQL for SQL Server now supports SQL Server 2025 ( GA ):
SQL Server 2025 Standard
SQL Server 2025 Enterprise
SQL Server 2025 Express
For more information, see Database versions and version policies
and Choose a machine series .
Feature
Cloud SQL for SQL Server integration with Microsoft Entra ID
( GA )
provides centralized identity and access management (IAM) for your databases
using your existing Microsoft Entra ID tenant.
Cloud Storage
Feature
You can now use Storage batch operations
to update object contexts for multiple objects
in a single job. You can clear all existing contexts from the specified objects,
remove contexts with specific keys, or update and insert new context key-value
pairs. For more information, see
Create and manage batch operation jobs .
Feature
Object contexts are now
generally available .
You can attach key-value pairs to your objects to categorize, track, and search
your data. Object contexts are preserved by default during copy, rewrite, and
compose operations. You can help control this behavior by using the
dropContextGroups
JSON API parameter or by providing new contexts in the request.
Container Optimized OS
Change
cos-117-18613-534-62
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.123
v24.0.9
v1.7.29
See List
Security
Fixed CVE-2024-43826 in the Linux kernel.
Security
Fixed CVE-2025-38704 in the Linux kernel.
Security
Fixed CVE-2025-39748 in the Linux kernel.
Security
Fixed CVE-2025-39764 in the Linux kernel.
Security
Fixed CVE-2025-40135 in the Linux kernel.
Security
Fixed CVE-2025-68206 in the Linux kernel.
Security
Fixed CVE-2025-68239 in the Linux kernel.
Security
Fixed CVE-2025-71161 in the Linux kernel.
Security
Fixed CVE-2026-23004 in the Linux kernel.
Security
Fixed CVE-2026-23050 in the Linux kernel.
Security
Fixed CVE-2026-23138 in the Linux kernel.
Security
Fixed CVE-2026-23245 in the Linux kernel.
Security
Fixed CVE-2026-23270 in the Linux kernel.
Security
Fixed CVE-2026-23271 in the Linux kernel.
Security
Fixed CVE-2026-23277 in the Linux kernel.
Security
Fixed CVE-2026-23340 in the Linux kernel.
Security
Fixed CVE-2026-23397 in the Linux kernel.
Security
Fixed CVE-2026-23398 in the Linux kernel.
Security
Fixed CVE-2026-23412 in the Linux kernel.
Security
Fixed CVE-2026-23413 in the Linux kernel.
Security
Fixed CVE-2026-23414 in the Linux kernel.
Change
cos-113-18244-582-62
Kernel
Docker
Containerd
GPU Drivers
COS-6.1.161
v24.0.9
v1.7.27
See List
Security
Fixed CVE-2025-38192 in the Linux kernel.
Security
Fixed CVE-2025-40135 in the Linux kernel.
Security
Fixed CVE-2025-68206 in the Linux kernel.
Security
Fixed CVE-2025-68239 in the Linux kernel.
Security
Fixed CVE-2025-68265 in the Linux kernel.
Security
Fixed CVE-2025-71161 in the Linux kernel.
Security
Fixed CVE-2026-23100 in the Linux kernel.
Security
Fixed CVE-2026-23113 in the Linux kernel.
Security
Fixed CVE-2026-23245 in the Linux kernel.
Security
Fixed CVE-2026-23270 in the Linux kernel.
Security
Fixed CVE-2026-23271 in the Linux kernel.
Security
Fixed CVE-2026-23277 in the Linux kernel.
Security
Fixed CVE-2026-23381 in the Linux kernel.
Security
Fixed CVE-2026-23397 in the Linux kernel.
Security
Fixed CVE-2026-23398 in the Linux kernel.
Security
Fixed KCTF-9df9578 in the Linux kernel.
Change
cos-121-18867-381-63
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.122
v27.5.1
v2.0.7
See List
Security
Fixed CVE-2025-40135 in the Linux kernel.
Security
Fixed CVE-2025-68206 in the Linux kernel.
Security
Fixed CVE-2025-68239 in the Linux kernel.
Security
Fixed CVE-2025-71161 in the Linux kernel.
Security
Fixed CVE-2026-23004 in the Linux kernel.
Security
Fixed CVE-2026-23050 in the Linux kernel.
Security
Fixed CVE-2026-23138 in the Linux kernel.
Security
Fixed CVE-2026-23245 in the Linux kernel.
Security
Fixed CVE-2026-23270 in the Linux kernel.
Security
Fixed CVE-2026-23271 in the Linux kernel.
Security
Fixed CVE-2026-23277 in the Linux kernel.
Security
Fixed CVE-2026-23388 in the Linux kernel.
Security
Fixed CVE-2026-23391 in the Linux kernel.
Security
Fixed CVE-2026-23397 in the Linux kernel.
Security
Fixed CVE-2026-23398 in the Linux kernel.
Change
cos-beta-129-19506-0-121
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.2
See List
Change
cos-dev-133-19681-0-0
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.77
v27.5.1
v2.2.1
See List
Change
Upgraded sys-apps/iproute2 to version 6.18.0.
Change
Fixes a kernel panic in virtio_pci teardown when virtually queues are conditionally skipped.
Fixed
Fixed a kernel panic in virtio_pci teardown when virtually queues are conditionally skipped.
Security
Fixed CVE-2026-33997 and CVE-2026-34040 in Docker.
Security
Fixed CVE-2024-14027 in the Linux kernel.
Security
Fixed KCTF-7cb9a23 in the Linux kernel.
Security
Fixed CVE-2026-23270 in the Linux kernel.
Change
Upgraded sys-apps/iproute2 to version 6.18.0.
Security
Fixed KCTF-7cb9a23 in the Linux kernel.
Change
cos-125-19216-220-117
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Made it so that /dev/hugepages is mounted as noexec for cchost boards.
Change
Made it so that /mnt/disks is mounted as noexec for cchost boards.
Change
Made it so that /run is mounted as noexec for cchost boards.
Change
Upgraded sys-apps/iproute2 to version 6.18.0.
Fixed
Fixed a kernel panic in virtio_pci teardown when virtually queues are conditionally skipped.
Security
Fixed CVE-2024-14027 in the Linux kernel.
Security
Fixed CVE-2026-23270 in the Linux kernel.
Security
Fixed CVE-2026-23304 in the Linux kernel.
Security
Fixed CVE-2026-33997 and CVE-2026-34040 in Docker.
Security
Fixed KCTF-7cb9a23 in the Linux kernel.
Gemini Cloud Assist
Deprecated
Custom IAM roles permission update for Gemini Cloud Assist
On April 8, 2026, Gemini Cloud Assist is replacing the
cloudaicompanion.instances.completeTask IAM permission with
geminicloudassist.agents.invoke . Updates to standard IAM roles will be done
automatically, but if you have access to Gemini Cloud Assist through a custom
IAM role, you must update the role before April 8, 2026 to ensure continued
access. For more information, see the
deprecated IAM permissions
page.
Generative AI on Vertex AI
Feature
Metadata search for RAG Engine
Use schema-based metadata search in Vertex AI RAG Engine.
You can define a metadata schema for a corpus, attach metadata to files within
that corpus, and use this metadata to filter contexts during retrieval.
For more information, see
Filter with metadata search .
Google Cloud Armor
Feature
Cloud Armor preconfigured rules support ModSecurity Core Rule Set (CRS)
4.22
as a rule source. For more information, see Tuning Google Cloud Armor WAF
rules . This feature is available in Preview.
Google SecOps
Change
Updates to search query limits and error messaging
Google SecOps has updated search query limits for programmatic and web interface
access:
Increased Queries Per Hour (QPH) limits of up to 2,000 for APIs and 1,000
for the web interface.
New concurrency limits for both simple and complex queries.
More descriptive error messages for quota failures in the API and web interface.
For more information, see Search limits and quotas
Note: This change follows a phased rollout from April 06, 2026 , to
April 30, 2026 . Contact Support if you don't see the new limits applied
to your environment after April 30, 2026 .
Deprecated
v1 Cloud Storage Feed Types (GCS, S3, SQS, Azure)
The v1 feed types for GOOGLE_CLOUD_STORAGE , AMAZON_S3 , AMAZON_SQS , and AZURE_BLOBSTORE are deprecated and will be discontinued on March 15, 2027 . The new v2 feed types uses the Google Cloud Storage Transfer Service (STS) to provide improved performance, scalability, and reliability.
To ensure continued ingestion, transition your feeds before the March 15, 2027 shutdown date:
Google SecOps will automatically migrate your feeds using v1 feed types to v2 in waves starting from April 6, 2026. To facilitate this, some feeds may require additional IP allowlist or service account permission updates. You can also self-migrate by replacing your existing data feeds with new feeds using v2 feed types.
You can also self-migrate by creating new feeds using v2 feed types to substitute your existing feeds using v1 feed types by following the steps documented in our feed configuration guides before March 15, 2027.
Key Dates:
April 6, 2026: Transition begins; auto-migration available.
September 15, 2026: Support for v1 feeds is discontinued.
March 15, 2027: v1 feeds reach End of Life (EOL) and will stop returning data.
For more information, see Feature deprecations .
Google SecOps SIEM
Change
Updates to search query limits and error messaging
Google SecOps has updated search query limits for programmatic and web interface
access:
Increased Queries Per Hour (QPH) limits of up to 2,000 for APIs and 1,000
for the web interface.
New concurrency limits for both simple and complex queries.
More descriptive error messages for quota failures in the API and web interface.
For more information, see Search limits and quotas
Note: This change follows a phased rollout from April 06, 2026 , to April 30, 2026 .
Contact Support if you don't see the new limits applied to your environment after April 30, 2026 .
Deprecated
v1 Cloud Storage Feed Types (GCS, S3, SQS, Azure)
The v1 feed types for GOOGLE_CLOUD_STORAGE , AMAZON_S3 , AMAZON_SQS , and AZURE_BLOBSTORE are deprecated and will be discontinued on March 15, 2027 . The new v2 feed types uses the Google Cloud Storage Transfer Service (STS) to provide improved performance, scalability, and reliability.
To ensure continued ingestion, transition your feeds before the March 15, 2027 shutdown date:
Google SecOps will automatically migrate your feeds using v1 feed types to v2 in waves starting from April 6, 2026. To facilitate this, some feeds may require additional IP allowlist or service account permission updates. You can also self-migrate by replacing your existing data feeds with new feeds using v2 feed types.
You can also self-migrate by creating new feeds using v2 feed types to substitute your existing feeds using v1 feed types by following the steps documented in our feed configuration guides before March 15, 2027.
Key Dates:
April 6, 2026: Transition begins; auto-migration available.
September 15, 2026: Support for v1 feeds is discontinued.
March 15, 2027: v1 feeds reach End of Life (EOL) and will stop returning data.
For more information, see Feature deprecations .
Memorystore for Redis
Feature
You can use the Memorystore for Redis remote MCP server .
This server lets you connect to Memorystore for Redis instances from LLMs, AI
applications, and AI-enabled development platforms. This feature is available in Preview .
Memorystore for Valkey
Feature
You can use the Memorystore for Valkey remote MCP server .
This server lets you connect to Memorystore for Valkey instances from LLMs, AI
applications, and AI-enabled development platforms. This feature is available in Preview .
Pub/Sub
Feature
Pub/Sub now offers the AI Inference Single Method Transform (SMT). This SMT lets
you get inferences on Pub/Sub messages from Vertex AI models. The model's
inferences are added to each message, making them available for downstream
processing along with the original message data.
The change is being rolled out in a phased manner over the rest of the week. For
more information, see AI Inference SMT .
This feature is
generally available .
Spanner
Feature
The QueryData tool lets you to query the data in your database using conversational language and build data agents. For more information, see QueryData tool overview . This feature is available in ( Preview ).
The preview release increases the accuracy of SQL generation with value search queries which match values and their context within a database. Value search queries trigger automatically.
April 05, 2026
Cloud Load Balancing
Feature
Certificate Manager certificates are available in Google Cloud console
while provisioning a load balancer.
You can select a certificate map for the following load balancers:
Global external Application Load Balancers
Classic Application Load Balancers
Global external proxy Network Load Balancers
Classic proxy Network Load Balancers
You can select a Certificate Manager certificate
for the following load balancers:
Regional external Application Load Balancers
Regional internal Application Load Balancers
Cross-region internal Application Load Balancers
This feature is in General availability .
Google SecOps SOAR
Announcement
Release 6.3.82 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
Feature
Playbook Condition and Multi-Choice Question Flows
The maximum number of branches supported in Playbook Conditions and Multiple Choice Questions has been increased from 6 to 20. This allows for more complex branching logic within a single step.
For more information, see Use flows in playbooks .
April 04, 2026
Google SecOps
Feature
Playbook Condition and Multi-Choice Question Flows
The maximum number of branches supported in Playbook Conditions and Multiple Choice Questions has been increased from 6 to 20. This allows for more complex branching logic within a single step.
For more information, see Use flows in playbooks .
Google SecOps SOAR
Announcement
Release 6.3.81 is now available for all regions.
April 03, 2026
AlloyDB for PostgreSQL
Feature
The gcloud beta alloydb connect
command is now available in
Preview . This command
provides a simplified way to connect securely to AlloyDB
instances by using the AlloyDB Auth Proxy and psql . For more information,
see Connect using gcloud CLI .
Buildpacks
Feature
The Node.js buildpack supports the Bun package manager in General Availability . For more information, see
Building a Node.js application .
Cloud Logging
Announcement
Cloud Logging adds support for the ca multi-region. For a complete list
of supported regions, see Supported regions .
Cloud Monitoring
Feature
Application Monitoring has added a Services and Workloads tab, which
lists your registered and discovered services and workloads. From this tab,
you can do the following:
Register discovered services and workloads.
Search for services and workloads by functional type, such as Agent or
MCP server .
Open dashboards that display telemetry. For discovered
services and workload, Google Cloud Observability uses the
Cloud Asset Inventory name
to identify relevant information.
To learn more, see the following:
List registered and discovered services and workloads
Application Monitoring overview
View application telemetry
Dataproc
Announcement
Dataproc and Google Cloud Serverless for Apache Spark are now unified under the Managed Service for Apache Spark brand. This change consolidates our managed Spark deployment options into a single umbrella brand that includes the full breadth of our Spark capabilities. No existing functionality is being removed as part of this change, and there will be no impact to the Dataproc API, client library, CLI, or IAM names.
Gemini Enterprise
Feature
Gemini Enterprise: Jira and Confluence federated data stores
The Jira and Confluence federated data stores are generally available (GA)
in Gemini Enterprise.
For more information, see:
* Jira Cloud
* Confluence Cloud
Generative AI on Vertex AI
Feature
Gemma 4 26B A4B IT is available as an experimental launch in Model Garden. This is an open model built by Google DeepMind. Gemma 4 models are multimodal, handling text and image input (with audio supported on small models) and generating text output.
Gemma 4 26B A4B IT is available as a managed API in Model Garden. To learn more, see
Gemma 4 26B A4B IT .
Feature
Vertex AI RAG Engine Serverless mode
Vertex AI RAG Engine Serverless mode is now available in public
preview . Serverless
mode provides a fully managed database for storing RAG resources that abstracts
away database provisioning and scaling. You can seamlessly switch between
Serverless mode and Spanner mode, which provides dedicated, isolated database
instances.
For more information, see the following:
Deployment modes in Vertex AI RAG Engine
Serverless mode
Managing Spanner mode
Switching between modes
Google SecOps
Change
Google SecOps has updated the list of supported default parsers . Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.
Abnormal Security ( ABNORMAL_SECURITY )
Active Countermeasures ( AI_HUNTER )
AIX system ( AIX_SYSTEM )
Apache ( APACHE )
Apache Cassandra ( CASSANDRA )
Aruba ( ARUBA_WIRELESS )
Aruba EdgeConnect SD-WAN ( ARUBA_EDGECONNECT_SDWAN )
Auth0 ( AUTH_ZERO )
AWS Aurora ( AWS_AURORA )
AWS CloudFront ( AWS_CLOUDFRONT )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS VPC Flow ( AWS_VPC_FLOW )
AWS WAF ( AWS_WAF )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure Front Door ( AZURE_FRONT_DOOR )
Azure SQL ( AZURE_SQL )
BeyondTrust ( BOMGAR )
BeyondTrust BeyondInsight ( BEYONDTRUST_BEYONDINSIGHT )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Broadcom Support Portal Audit Logs ( BROADCOM_SUPPORT_PORTAL )
Check Point Harmony ( CHECKPOINT_HARMONY )
Chronicle SOAR Audit ( CHRONICLE_SOAR_AUDIT )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Cisco Secure Access ( CISCO_SECURE_ACCESS )
Cisco Switch ( CISCO_SWITCH )
Cisco Umbrella Audit ( CISCO_UMBRELLA_AUDIT )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cisco WSA ( CISCO_WSA )
Cloud DNS ( GCP_DNS )
Cloud SQL ( GCP_CLOUDSQL )
Cloudflare ( CLOUDFLARE )
Cloudflare Warp ( CLOUDFLARE_WARP )
Code42 Incydr ( CODE42_INCYDR )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Cybereason EDR ( CYBEREASON_EDR )
CYJAX Threat Intelligence ( CYJAX_THREAT_INTELLIGENCE )
Cyware Threat Intelligence Exchange ( CTIX )
Databricks ( DATABRICKS )
Duo Auth ( DUO_AUTH )
Elastic Defend ( ELASTIC_DEFEND )
ESET AV ( ESET_AV )
F5 ASM ( F5_ASM )
F5 BIGIP Access Policy Manager ( F5_BIGIP_APM )
FireEye eMPS ( FIREEYE_EMPS )
FireEye ETP ( FIREEYE_ETP )
FireEye NX ( FIREEYE_NX )
Forescout NAC ( FORESCOUT_NAC )
ForgeRock Identity Cloud ( FORGEROCK_IDENTITY_CLOUD )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
GitHub ( GITHUB )
Google Threat Intelligence IOC ( GTI_IOC )
HP Aruba (ClearPass) ( CLEARPASS )
Huawei Switches ( HUAWEI_SWITCH )
IBM DataPower Gateway ( IBM_DATAPOWER )
IBM Safenet ( IBM_SAFENET )
IBM Websphere Application Server ( IBM_WEBSPHERE_APP_SERVER )
Imperva Advanced Bot Protection ( IMPERVA_ABP )
Imperva SecureSphere Management ( IMPERVA_SECURESPHERE )
Juniper ( JUNIPER_FIREWALL )
Kolide Endpoint Security ( KOLIDE )
Kubernetes Audit ( KUBERNETES_AUDIT )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
Maria Database ( MARIA_DB )
McAfee ePolicy Orchestrator ( MCAFEE_EPO )
McAfee Skyhigh CASB ( MCAFEE_SKYHIGH_CASB )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Defender For Cloud ( MICROSOFT_DEFENDER_CLOUD_ALERTS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft SQL Server ( MICROSOFT_SQL )
Mimecast Mail V2 ( MIMECAST_MAIL_V2 )
Mobile Endpoint Security ( LOOKOUT_MOBILE_ENDPOINT_SECURITY )
Mobileiron ( MOBILEIRON )
NetApp ONTAP ( NETAPP_ONTAP )
Netskope V2 ( NETSKOPE_ALERT_V2 )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Obsidian ( OBSIDIAN )
Office 365 ( OFFICE_365 )
Oort Security Tool ( OORT )
Oracle ( ORACLE_DB )
Orca Cloud Security Platform ( ORCA )
Palo Alto Cortex XDR Events ( PAN_CORTEX_XDR_EVENTS )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
PostFix Mail ( POSTFIX_MAIL )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Red Hat OpenShift ( REDHAT_OPENSHIFT )
Salesforce ( SALESFORCE )
SAP Change Document ( SAP_CHANGE_DOCUMENT )
SAP Gateway ( SAP_GATEWAY )
SAP Hana Audit ( SAP_HANA_AUDIT )
SAP Security Audit ( SAP_SECURITY_AUDIT )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Sensitive Data Risk ( GCP_SECURITYCENTER_SENSITIVE_DATA_RISK )
Security Command Center Threat ( GCP_SECURITYCENTER_THREAT )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
Snyk Group level audit Logs ( SNYK_SDLC )
Suricata EVE ( SURICATA_EVE )
Symantec EDR ( SYMANTEC_EDR )
Sysdig ( SYSDIG )
Tenable Active Directory Security ( TENABLE_ADS )
ThreatConnect IOC V3 ( THREATCONNECT_IOC_V3 )
Trellix HX Alerts ( TRELLIX_HX_ALERTS )
Trellix HX Audit Events ( TRELLIX_HX_AUDIT )
Trellix HX Event Streamer ( TRELLIX_HX_ES )
Trellix HX Hosts ( TRELLIX_HX_HOSTS )
Trend Micro Vision One Endpoint Vulnerabilities ( TRENDMICRO_VISION_ONE_ENDPOINT_VULNERABILITIES )
Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO_VISION_ONE_OBSERVERD_ATTACK_TECHNIQUES )
Trend Micro Vision One Workbench ( TRENDMICRO_VISION_ONE_WORKBENCH )
TrendMicro Apex Central ( TRENDMICRO_APEX_CENTRAL )
TXOne Stellar ( TRENDMICRO_STELLAR )
Ubika Waf ( UBIKA_WAF )
Unix system ( NIX_SYSTEM )
Varonis ( VARONIS )
Vmware Avinetworks iWAF ( VMWARE_AVINETWORKS_IWAF )
VMware ESXi ( VMWARE_ESX )
VMware Horizon ( VMWARE_HORIZON )
Wallix Bastion ( WALLIX_BASTION )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
wiz.io ( WIZ_IO )
Zeek JSON ( BRO_JSON )
Zscaler ( ZSCALER_WEBPROXY )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Action1 ( ACTION1 )
CDNetworks Cloud Security ( CDNETWORKS_CLOUD_SECURITY )
Claude Compliance Logs ( CLAUDE_COMPLIANCE_LOGS )
Dell RecoverPoint ( DELL_RECOVERPOINT )
IBM Storwize ( IBM_STORWIZE )
LeapXpert Audit Logs ( LEAPXPERT_AUDIT )
Oracle Key Vault Audit Logs ( ORACLE_KEY_VAULT_AUDIT_LOGS )
RSA Cloud ( RSA_CLOUD )
ServiceNow Antivirus Activity ( SERVICENOW_ANTIVIRUS_ACTIVITY )
ServiceNow Attachment ( SERVICENOW_ATTACHMENT )
ServiceNow Email ( SERVICENOW_EMAIL )
Versa Director ( VERSA_DIRECTOR )
ZPE Systems NodeGrid ( ZPE_SYSTEMS_NODEGRID )
Google SecOps SIEM
Change
Google Security Operations has updated the list of supported default parsers . Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.
Abnormal Security ( ABNORMAL_SECURITY )
Active Countermeasures ( AI_HUNTER )
AIX system ( AIX_SYSTEM )
Apache ( APACHE )
Apache Cassandra ( CASSANDRA )
Aruba ( ARUBA_WIRELESS )
Aruba EdgeConnect SD-WAN ( ARUBA_EDGECONNECT_SDWAN )
Auth0 ( AUTH_ZERO )
AWS Aurora ( AWS_AURORA )
AWS CloudFront ( AWS_CLOUDFRONT )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS VPC Flow ( AWS_VPC_FLOW )
AWS WAF ( AWS_WAF )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure Front Door ( AZURE_FRONT_DOOR )
Azure SQL ( AZURE_SQL )
BeyondTrust ( BOMGAR )
BeyondTrust BeyondInsight ( BEYONDTRUST_BEYONDINSIGHT )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Broadcom Support Portal Audit Logs ( BROADCOM_SUPPORT_PORTAL )
Check Point Harmony ( CHECKPOINT_HARMONY )
Chronicle SOAR Audit ( CHRONICLE_SOAR_AUDIT )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Cisco Secure Access ( CISCO_SECURE_ACCESS )
Cisco Switch ( CISCO_SWITCH )
Cisco Umbrella Audit ( CISCO_UMBRELLA_AUDIT )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cisco WSA ( CISCO_WSA )
Cloud DNS ( GCP_DNS )
Cloud SQL ( GCP_CLOUDSQL )
Cloudflare ( CLOUDFLARE )
Cloudflare Warp ( CLOUDFLARE_WARP )
Code42 Incydr ( CODE42_INCYDR )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Cybereason EDR ( CYBEREASON_EDR )
CYJAX Threat Intelligence ( CYJAX_THREAT_INTELLIGENCE )
Cyware Threat Intelligence Exchange ( CTIX )
Databricks ( DATABRICKS )
Duo Auth ( DUO_AUTH )
Elastic Defend ( ELASTIC_DEFEND )
ESET AV ( ESET_AV )
F5 ASM ( F5_ASM )
F5 BIGIP Access Policy Manager ( F5_BIGIP_APM )
FireEye eMPS ( FIREEYE_EMPS )
FireEye ETP ( FIREEYE_ETP )
FireEye NX ( FIREEYE_NX )
Forescout NAC ( FORESCOUT_NAC )
ForgeRock Identity Cloud ( FORGEROCK_IDENTITY_CLOUD )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
GitHub ( GITHUB )
Google Threat Intelligence IOC ( GTI_IOC )
HP Aruba (ClearPass) ( CLEARPASS )
Huawei Switches ( HUAWEI_SWITCH )
IBM DataPower Gateway ( IBM_DATAPOWER )
IBM Safenet ( IBM_SAFENET )
IBM Websphere Application Server ( IBM_WEBSPHERE_APP_SERVER )
Imperva Advanced Bot Protection ( IMPERVA_ABP )
Imperva SecureSphere Management ( IMPERVA_SECURESPHERE )
Juniper ( JUNIPER_FIREWALL )
Kolide Endpoint Security ( KOLIDE )
Kubernetes Audit ( KUBERNETES_AUDIT )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
Maria Database ( MARIA_DB )
McAfee ePolicy Orchestrator ( MCAFEE_EPO )
McAfee Skyhigh CASB ( MCAFEE_SKYHIGH_CASB )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Defender For Cloud ( MICROSOFT_DEFENDER_CLOUD_ALERTS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft SQL Server ( MICROSOFT_SQL )
Mimecast Mail V2 ( MIMECAST_MAIL_V2 )
Mobile Endpoint Security ( LOOKOUT_MOBILE_ENDPOINT_SECURITY )
Mobileiron ( MOBILEIRON )
NetApp ONTAP ( NETAPP_ONTAP )
Netskope V2 ( NETSKOPE_ALERT_V2 )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Obsidian ( OBSIDIAN )
Office 365 ( OFFICE_365 )
Oort Security Tool ( OORT )
Oracle ( ORACLE_DB )
Orca Cloud Security Platform ( ORCA )
Palo Alto Cortex XDR Events ( PAN_CORTEX_XDR_EVENTS )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
PostFix Mail ( POSTFIX_MAIL )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Red Hat OpenShift ( REDHAT_OPENSHIFT )
Salesforce ( SALESFORCE )
SAP Change Document ( SAP_CHANGE_DOCUMENT )
SAP Gateway ( SAP_GATEWAY )
SAP Hana Audit ( SAP_HANA_AUDIT )
SAP Security Audit ( SAP_SECURITY_AUDIT )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Sensitive Data Risk ( GCP_SECURITYCENTER_SENSITIVE_DATA_RISK )
Security Command Center Threat ( GCP_SECURITYCENTER_THREAT )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
Snyk Group level audit Logs ( SNYK_SDLC )
Suricata EVE ( SURICATA_EVE )
Symantec EDR ( SYMANTEC_EDR )
Sysdig ( SYSDIG )
Tenable Active Directory Security ( TENABLE_ADS )
ThreatConnect IOC V3 ( THREATCONNECT_IOC_V3 )
Trellix HX Alerts ( TRELLIX_HX_ALERTS )
Trellix HX Audit Events ( TRELLIX_HX_AUDIT )
Trellix HX Event Streamer ( TRELLIX_HX_ES )
Trellix HX Hosts ( TRELLIX_HX_HOSTS )
Trend Micro Vision One Endpoint Vulnerabilities ( TRENDMICRO_VISION_ONE_ENDPOINT_VULNERABILITIES )
Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO_VISION_ONE_OBSERVERD_ATTACK_TECHNIQUES )
Trend Micro Vision One Workbench ( TRENDMICRO_VISION_ONE_WORKBENCH )
TrendMicro Apex Central ( TRENDMICRO_APEX_CENTRAL )
TXOne Stellar ( TRENDMICRO_STELLAR )
Ubika Waf ( UBIKA_WAF )
Unix system ( NIX_SYSTEM )
Varonis ( VARONIS )
Vmware Avinetworks iWAF ( VMWARE_AVINETWORKS_IWAF )
VMware ESXi ( VMWARE_ESX )
VMware Horizon ( VMWARE_HORIZON )
Wallix Bastion ( WALLIX_BASTION )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
wiz.io ( WIZ_IO )
Zeek JSON ( BRO_JSON )
Zscaler ( ZSCALER_WEBPROXY )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Action1 ( ACTION1 )
CDNetworks Cloud Security ( CDNETWORKS_CLOUD_SECURITY )
Claude Compliance Logs ( CLAUDE_COMPLIANCE_LOGS )
Dell RecoverPoint ( DELL_RECOVERPOINT )
IBM Storwize ( IBM_STORWIZE )
LeapXpert Audit Logs ( LEAPXPERT_AUDIT )
Oracle Key Vault Audit Logs ( ORACLE_KEY_VAULT_AUDIT_LOGS )
RSA Cloud ( RSA_CLOUD )
ServiceNow Antivirus Activity ( SERVICENOW_ANTIVIRUS_ACTIVITY )
ServiceNow Attachment ( SERVICENOW_ATTACHMENT )
ServiceNow Email ( SERVICENOW_EMAIL )
Versa Director ( VERSA_DIRECTOR )
ZPE Systems NodeGrid ( ZPE_SYSTEMS_NODEGRID )
Identity and Access Management
Deprecated
Extended attributes for Workforce Identity Federation are deprecated.
For group mapping, we recommend using
SCIM instead of
extended attributes. For more information, see
IAM deprecations .
Virtual Private Cloud
Feature
Hybrid Subnets is available in
General Availability . Hybrid subnet routing
lets a VPC network share a CIDR block with a connected on-premises network.
This configuration helps you migrate workloads to Google Cloud without needing
to change any IP addresses. During migration, workloads that have migrated
to your VPC network can communicate with those remaining in the on-premises
network by using internal IP addresses. After all workloads have migrated,
you can disable hybrid subnet routing to restore normal routing behavior.
April 02, 2026
AlloyDB for PostgreSQL
Change
You can now enable Advanced Query Insights on primary
clusters
which have secondary clusters configured. Advanced Query Insights is not supported on secondary
clusters. If you perform a switchover, you must re-enable Advanced Query
Insights on the new primary cluster.
Apigee X
Breaking
Deployment disruption for Apigee Drupal Portal via Google Cloud Marketplace
Google Cloud Deployment Manager was deprecated as of March 31, 2026. We are currently transitioning the Apigee Drupal Portal Marketplace solution to use Infrastructure Manager. During this transition period, some deployment and management functionalities are unavailable.
Impact:
New Deployments: Starting April 1, 2026, attempting to deploy a new Apigee Drupal Portal instance using the "Deploy" button on the Google Cloud Marketplace will fail.
Existing Deployments: Your underlying resources (such as VMs and Cloud SQL databases) are unaffected and will continue to run normally. However, you can no longer use Deployment Manager-based features to manage the deployment via the Marketplace UI or the gcloud deployment-manager tool.
Workaround & Resolution:
Any configuration changes or management tasks must be performed directly on the individual Google Cloud resources (Compute Engine, Cloud SQL, etc.) rather than through the Marketplace UI.
We are actively working to release the updated Infrastructure Manager-based solution.
BigQuery
Feature
You can now use the
CREATE CONNECTION ,
ALTER CONNECTION SET OPTIONS ,
and DROP CONNECTION
data definition language (DDL) statements to manage Cloud resource connections
with GoogleSQL. Additionally, you can now use the
connection user type
and PROJECT resource type
with GRANT and REVOKE data control language (DCL) statements to manage
connection and project access. These features are
generally available
(GA).
Feature
The BigQuery Migration Service supports SQL translations from Snowflake
SQL to GoogleSQL .
This feature is now generally available (GA).
With this change, the translation service supports a wider variety of
Snowflake SQL and has improved support for several data types.
Among other changes, the translation service maps Snowflake
INTEGER and zero-scale NUMERIC types up to precision 38 to INT64 type in
GoogleSQL for improved performance by default.
Feature
You can set the
column granularity when you
create a search index ,
which stores additional column information in your search index to further
optimize your search query performance. This feature is
generally available
(GA).
Cloud Logging
Feature
The filter capabilities for log views have been extended to include support for
disjunctive clauses, negation statements, and labels. To learn more, see
Filters for log views .
Cloud Monitoring
Feature
Application Monitoring has added support for the following resources:
Vertex AI Workbench
GKE Gateway
GKE Ingress
Layer 7 cross-regional Application Load Balancers
Additionally, dashboards for Kubernetes workloads display L4 and L7 traffic
metrics, when both are available. For more information, see
Application Monitoring supported infrastructure .
Cloud SQL for SQL Server
Feature
Cloud SQL for SQL server read pools are now generally available and provide
operational simplicity and scaling for your read workloads.
Read pools provide a single endpoint in front of up to seven read pool nodes and
automatically load balance traffic.
You can scale your read pool in several ways:
Scale in or out : scale load balancing capacity horizontally by modifying
the number of read pool nodes in the read pool. Each read pool supports between
1 and 7 read pool nodes.
Scale up or down : scale load balancing capacity vertically by modifying the
machine type associated with a read pool node. Once defined, configuration is
uniformly applied across each read pool node in the read pool.
For more information, see About read pools .
Cloud Service Mesh
Announcement
Managed Cloud Service Mesh using the TRAFFIC_DIRECTOR implementation now
supports a limited implementation of the EnvoyFilter API. To learn about the
supported fields, extensions, and how to use EnvoyFilter for features like
local rate limiting see
Data plane extensibility with EnvoyFilter .
To troubleshoot any issue while configuring, see
Resolving data plane extensibility issues .
Cloud Storage
Feature
You can configure which encryption types are allowed or prohibited for
creating new objects in a bucket. For more information, see
Enforce or restrict the encryption types for a bucket .
Cluster Toolkit
Feature
Cluster Toolkit version v1.86.0 is available. This release implements
and configures the Google Container Filesystem (GCFS) to stream images at the
cluster level for Google Kubernetes Engine. This release also migrates the
kubectl_apply_manifest module to Helm and upgrades the command-line interface
(DCGMI) for the NVIDIA Data Center GPU Manager (DCGM).
For more information about version v1.86.0, see the Release
announcement on GitHub .
Compute Engine
Feature
Preview : To control the use of the deprecated container startup agent, an option for
deploying containers on Compute Engine instances, you can enforce the
constraints/compute.managed.disableVmsWithContainerStartupAgent organization
policy constraint. This constraint prevents the creation of
Compute Engine instances that use the container startup
agent and the gce-container-declaration metadata.
You can also enforce this organization policy in dry-run mode to identify
projects that use the deprecated metadata, without blocking resource creation.
For more information, see Prevent the creation of VMs that use the container
metadata and Migrate containers
deployed on VMs during VM creation .
Dataform
Feature
The
Dataform folders and repositories
feature is now
generally available
(GA). This feature lets you organize code assets like notebooks and saved
queries into a hierarchical structure with IAM policy inheritance. This release
also introduces deleteTree API methods for deleting folders and
team folders.
Dataproc
Announcement
New Dataproc on Compute Engine subminor image versions :
2.3.28-debian12, 2.3.28-ml-ubuntu22, 2.3.28-rocky9, 2.3.28-ubuntu22, 2.3.28-ubuntu22-arm
Change
Dataproc on Compute Engine : Upgraded Apache Zookeeper to version 3.9.5 in image version 2.3 .
Fixed
Upgraded Dataproc Metastore Proxy to v0.0.79 to fix CVEs.
Fixed CVEs CVE-2026-24308 and CVE-2026-24281.
Gemini Enterprise
Feature
NotebookLM Enterprise: Autocomplete for email addresses and group
names when sharing notebooks
When sharing notebooks with users and groups, autocomplete is available to help
users quickly select the correct email addresses and group names.
If your organization uses the Google Identity Provider, no action is required.
If your organization uses Third-party identity and Microsoft Entra ID, a
Gemini Enterprise administrator must provision a System for Cross-domain
Identity Management (SCIM) tenant for
Workforce Identity Federation
to enable autocomplete. For more information
about identity setup, see Set up
NotebookLM Enterprise .
This feature is generally available (GA). For more information, see Share a
notebook .
Generative AI on Vertex AI
Feature
Veo 3.1 Lite
Veo 3.1 Lite is available in public
preview . This release
is our most cost-efficient Veo on Vertex AI model.
For more information, see 3.1 Lite
Generate
Announcement
Gemini 2.5 model retirement dates updated
The retirement dates for Gemini 2.5 Pro, Gemini 2.5 Flash-Lite,
and Gemini 2.5 Flash have been updated to October 16, 2026. For more information,
see Model versions and lifecycle .
Google Cloud Contact Center as a Service
Announcement
Google Cloud CCaaS 4.16
We've released version 4.16 of Google Cloud CCaaS.
The timing of the update to your instance depends on the deployment schedule
that you have chosen. For more information, see Deployment
schedules .
Feature
Agent Assist is available for calls and chats that are unassociated
with a queue
You can now turn on Agent Assist for calls and chats at the team level.
That means that Agent Assist is available for interactions that aren't
associated with a queue, such as direct inbound calls and outbound calls with no
queue selected.
Administrators: In the Settings > Users & Teams > Manage
Users & Teams > edit TEAM_NAME pane,
there's a new Agent Assist section.
For more information, see Configure Agent Assist at the team
level .
Feature
New HubSpot CRM ticket view: Help desk view
You can now configure which CRM ticket view your HubSpot integration uses:
Standard view , or the new real-time Help desk view .
Administrators: In the Settings > Developer Settings >
select HubSpot pane, there's a new CRM Ticket View section.
For more information, see Configure
HubSpot .
Feature
Play pre-recorded audio for virtual agents
Dialogflow lets virtual agents respond with pre-recorded audio. This
lets you use high-quality audio files instead of standard text-to-speech. This
capability is available for all voice channels, including inbound and outbound
calls. It's available for support virtual agents, task virtual agents, and
post-session virtual agents. For more information, see Play pre-recorded
audio .
Feature
Configure the ringing timeout for virtual agent transfers to SIP endpoints
Twilio users can configure the ringing timeout for outbound calls that virtual
agents transfer to SIP endpoints. Add the sip_ring_timeout field to the
virtual agent's custom payload to set the ringing period for up to 600 seconds.
This allows calls to internal extensions or Unified Communications (UC)
destinations sufficient time to be answered before disconnection. For more
information, see Transfer a call to a SIP
endpoint .
Fixed
The following issues were addressed in this release:
Fixed an issue with React Native integrations where the email adapter
wouldn't load. TBD - confirm that there's only one bug related to the email
adapter not loading with React Native integrations.
Fixed an issue where enabling chat redaction caused the unredacted messages
to be redacted in the chat adapter.
Fixed an issue where calls continued to be recorded after being transferred
to a third-party number, even when the Continue Call recording to Third
Party Numbers after the agent leaves the call setting was cleared.
Fixed an issue where emails were automatically assigned to users without
agent roles.
Fixed an issue where the global Overcapacity Deflection Messages setting
was configured for Uploading Audio Recordings , but queues inheriting
global settings incorrectly displayed Text-to-speech in the UI.
Fixed an issue where agents couldn't transfer a chat within the same queue.
Fixed an issue where incoming calls unexpectedly ended with 603 decline
errors after ringing for 13 seconds.
Fixed an issue in the Agent Desktop where the session ID didn't match the
call ID for the same interaction.
Fixed an issue where user search results didn't display users in locations
with the same first three letters of the name when searching for partial
locations.
Fixed an issue that let end-users interact with a mailbox immediately after
switching to a different mailbox, causing synchronization issues.
Fixed an issue where overcapacity deflection didn't work for direct inbound
calls.
Fixed an issue where the Reporting API changed the data types of some
response fields. This caused data type mismatches in the reports that the
API returned.
Announcement
Mobile SDK version 2.15.2 patch
This patch updates the following for the Android SDK:
Updates minSdkVersion to 25 .
Upgrades the following dependencies:
Twilio Conversations to 6.2.1
Twilio Voice to 6.10.2
Google Kubernetes Engine
Change
(2026-R13) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for
manual control plane upgrades and node upgrades for existing clusters. For more
information about versioning and upgrades, see GKE versioning and
support and About GKE
cluster upgrades .
Rapid channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Rapid channel:
1.32.13-gke.1205000
1.33.10-gke.1067000
1.34.6-gke.1068000
1.35.2-gke.1962000
Regular channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Regular channel:
1.32.13-gke.1090000
1.33.9-gke.1117000
1.34.5-gke.1153000
1.35.2-gke.1485000
Stable channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Stable channel:
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
Extended channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Extended channel:
1.30.14-gke.2286000
1.31.14-gke.1681000
1.32.13-gke.1090000
1.33.9-gke.1117000
1.34.5-gke.1153000
1.35.2-gke.1485000
No channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available:
1.32.13-gke.1205000
1.33.10-gke.1067000
1.34.6-gke.1068000
1.35.2-gke.1962000
The following node versions are now available:
1.30.14-gke.2286000
1.31.14-gke.1681000
1.32.13-gke.1205000
1.33.10-gke.1067000
1.34.6-gke.1068000
1.35.2-gke.1962000
Security
(2026-R13) Security updates
This release includes new GKE versions that use updated
Container-Optimized OS images. These updated images are cumulative,
incorporating security fixes from all Container-Optimized OS
versions released since the previous GKE release.
To identify the specific vulnerabilities that were resolved in each updated
Container-Optimized OS image, see the Security release notes
for that image. The following table includes links to the release notes for
each updated Container-Optimized OS image:
GKE version
Container-Optimized OS version
Details
1.30.14-gke.2286000
cos-117-18613-534-44
cos-117-18613-534-44 release notes
1.31.14-gke.1681000
cos-117-18613-534-44
cos-117-18613-534-44 release notes
1.32.13-gke.1205000
cos-117-18613-534-44
cos-117-18613-534-44 release notes
1.33.10-gke.1067000
cos-121-18867-381-45
cos-121-18867-381-45 release notes
1.34.6-gke.1068000
cos-125-19216-220-72
cos-125-19216-220-72 release notes
Change
(2026-R13) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Stable channel:
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
Change
(2026-R13) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Regular channel:
1.32.13-gke.1090000
1.33.9-gke.1117000
1.34.5-gke.1153000
1.35.2-gke.1485000
Change
(2026-R13) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Rapid channel:
1.32.13-gke.1205000
1.33.10-gke.1067000
1.34.6-gke.1068000
1.35.2-gke.1962000
Change
(2026-R13) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available:
1.32.13-gke.1205000
1.33.10-gke.1067000
1.34.6-gke.1068000
1.35.2-gke.1962000
The following node versions are now available:
1.30.14-gke.2286000
1.31.14-gke.1681000
1.32.13-gke.1205000
1.33.10-gke.1067000
1.34.6-gke.1068000
1.35.2-gke.1962000
Change
(2026-R13) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Extended channel:
1.30.14-gke.2286000
1.31.14-gke.1681000
1.32.13-gke.1090000
1.33.9-gke.1117000
1.34.5-gke.1153000
1.35.2-gke.1485000
Google SecOps
Feature
Chrome Enterprise Premium Integration general availability
The Chrome Enterprise Premium integration is now GA. This release includes the following new features and updates:
New Chrome Enterprise
Connector
which configures recommended data export settings and sends data through
Google Cloud to Google Security Operations. Chrome Enterprise Premium customers can export data
with additional security context provided by Google Safe Browsing.
Updates to the CHROME_MANAGEMENT parser documentation in Collect Chrome Enterprise data and
Chrome Enterprise Premium Threats .
Curated Detections for Chrome Enterprise Premium.
Curated Dashboards for Chrome Enterprise Premium.
Response actions to
block and remove
malicious extensions or to delete blocked extensions
from the extension policy
ExtensionInstallBlocklist .
Security Command Center
Feature
Security Command Center Risk Engine
supports Managed Service for Apache Spark resources in attack paths and Managed Service for Apache Spark
clusters and jobs in high-value resource sets.
April 01, 2026
Cloud Composer
Feature
Airflow 2.11.1 is available in Cloud Composer 3 and Cloud Composer 2.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.11.1-build.0
composer-3-airflow-3.1.7-build.4
composer-3-airflow-2.10.5-build.33 (default)
composer-3-airflow-2.9.3-build.53
Change
New images
are available in Cloud Composer 2:
composer-2.16.10-airflow-2.11.1
composer-2.16.10-airflow-2.10.5 (default)
composer-2.16.10-airflow-2.9.3
Container Optimized OS
Change
cos-beta-129-19506-0-115
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.2
See List
Change
cos-dev-133-19672-0-0
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.77
v27.5.1
v2.2.1
See List
Security
Fixed CVE-2024-14027 in the Linux kernel.
Security
Fixed KCTF-7cb9a23 in the Linux kernel.
Security
Fixed KCTF-7cb9a23 in the Linux kernel.
Change
cos-125-19216-220-106
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Security
Fixed CVE-2024-14027 in the Linux kernel.
Security
Fixed CVE-2026-23304 in the Linux kernel.
Security
Fixed KCTF-7cb9a23 in the Linux kernel.
Gemini
Other
Bug fixes in VS Code
Various bug fixes and minor product enhancements.
Gemini Enterprise
Feature
Gemini Enterprise: Data connector request count metric
Monitor the total number of requests to your Gemini Enterprise data connectors or
data stores using the Gemini Enterprise DataConnector - Gemini Enterprise
DataConnector Request Count metric in Metrics Explorer.
This feature is generally available (GA). For more information, see
Access metrics in Metrics Explorer .
Google SecOps Marketplace
Feature
Microsoft 365 Defender : Version 26.0
The following new job has been added:
Sync Alerts
Feature
SentinelOneV2 : Version 48.0
The following new job has been added:
Sync Alerts
Change
Microsoft Teams : Version 36.0
Optimized user lookup logic for the following actions:
Add Users To Channel
Create Chat
Change
Akamai : Version 6.0
Updated the JSON results of the following actions:
Add Items To Client List
Remove Items From Client List
Change
Source code is now publicly available on GitHub
for the following integrations:
CyberX : Version 6.0
JuniperVSRX : Version 11.0
McAfee NSM : Version 11.0
Micro Focus ITSMA : Version 7.0
Portnox : Version 9.0
ReversingLabs A1000 : Version 10.0
Stealthwatch V6.10 : Version 6.0
Symantec Content Analysis : Version 7.0
Change
Azure Active Directory : Version 25.0
Added the ability to fetch last login time information to the following
actions:
Enrich User
Get Manager Contact Details
March 31, 2026
AlloyDB for PostgreSQL
Feature
Hot standby enhances the AlloyDB high availability (HA) architecture to improve
failover times and to ensure consistent performance after failover. AlloyDB
continuously replicates transactions to the standby node to keep caches warm
and to ensure that the node is ready to take over quickly during a failover.
This feature is generally available ( GA ) in PostgreSQL 18 and is automatically
enabled for all new instances. For more information, see the
AlloyDB high availability overview .
Apigee X
Announcement
On March 31st, 2026, we released an updated version of Apigee.
Note: Rollouts of this release began today and may take four or more business days to be completed across all Google Cloud zones. Your instances may not have the features and fixes available until the rollout is complete.
Feature
General Availability (GA) launch of Model Context Protocol (MCP) in Apigee
With this release, Model Context Protocol (MCP) in Apigee is generally available , enabling you to expose your Apigee APIs as MCP tools to agentic applications.
Any MCP client that supports remote MCP endpoints over HTTP/S can access these tools. Because the endpoints are managed, you don't need to install or manage local MCP servers, remote MCP servers, or additional infrastructure to enable agentic applications to access your services.
MCP in Apigee is available for Subscription, Pay-as-you-go, and Evaluation organizations, including organizations with Data Residency and VPC Service Controls enabled.
For more information on using MCP in Apigee, see MCP in Apigee overview .
Feature
Enhanced OAS server URL path handling for MCP in Apigee
With this feature enhancement, your OpenAPI specification (OAS) configurations behave exactly
as defined in the OAS standard, automatically combining the server.url base path value with individual operation paths.
For example, a server URL of https://example.com/api/v1 paired with a path of /users will now correctly route to https://example.com/api/v1/users without additional manual intervention.
If you previously prepended base paths to your OAS paths entries, remove the path segment from your servers.url field to prevent
duplication. For example, change https://example.com/api/v1 to https://example.com .
For more information, see Create an OpenAPI 3.0 specification .
Change
Updated MCP server target endpoint for MCP Discovery Proxies
With the GA launch of Model Context Protocol (MCP) in Apigee, the structure of the MCP server target endpoint for MCP Discover Proxies has changed to ORG_NAME.mcp.apigee.internal .
Private preview customers using the previous format ( mcp.apigee.internal ) are encouraged to update their proxies to reflect the new structure. Existing endpoints using the old format will continue to work, but new endpoints will use the new structure.
Issue
Known Issue 496552286: Deployment fails for MCP Discovery Proxies in regions with capacity limitations.
For more information, see Apigee known issues .
Assured Workloads
Feature
The Data Boundary for FedRAMP High
supports the following products:
Model Armor
Feature
The Data Boundary for Impact Level 2 (IL2)
supports the following products:
Model Armor
Feature
The Data Boundary for Impact Level 4 (IL4)
supports the following products:
Access Context Manager
AlloyDB for PostgreSQL
Cloud Service Mesh
Knowledge Catalog
Filestore
Google Cloud Armor
Google Security Operations SOAR
Network Connectivity Center
Feature
The Data Boundary for FedRAMP Moderate
supports the following products:
Model Armor
Feature
The Data Boundary for Impact Level 5 (IL5)
supports the following products:
Access Context Manager
AlloyDB for PostgreSQL
Cloud Service Mesh
Knowledge Catalog
Filestore
Google Cloud Armor
Google Security Operations SOAR
Network Connectivity Center
BigQuery
Feature
BigQuery ObjectRef values
now support the following:
You can run ObjectRef functions
with either
direct access or delegated access .
The
OBJ.MAKE_REF function
automatically fetches the latest Cloud Storage metadata and populates this in
the ref.details field.
The
OBJ.GET_READ_URL function
returns a STRUCT value with a read URL and status columns and renders image
results in the Cloud console. Use this function when you don't require a
write URL.
These features are
generally available
(GA).
Cloud Load Balancing
Feature
SNI-based routing for proxy Network Load Balancers is now available in
Preview .
You can now route TLS traffic based on Server Name Indication (SNI) hostnames
by using the new TLSRoute resource. The load balancer inspects the
initial unencrypted ClientHello message to extract the SNI hostname and
route connections to the appropriate backend service.
This feature provides pure TLS passthrough without terminating the connection
at the load balancer. Key benefits include:
End-to-end encryption : Clients can establish secure mTLS or TLS sessions
directly with origin servers.
Role-oriented management : The TLSRoute API lets platform administrators
to manage frontend infrastructure while service owners manage their own routes
and backends independently.
Simplified IP management : Consolidate multiple services behind a single
Private Service Connect (PSC) endpoint ,
reducing IPv4 address exhaustion.
This feature is available for regional and cross-region proxy Network Load Balancers.
For more information, see:
Create a regional external proxy Network Load Balancer load balancer with TLS routes
Create a regional internal proxy Network Load Balancer load balancer with TLS routes
Create a cross-region internal proxy Network Load Balancer load balancer with TLS routes
Cloud NAT
Announcement
The default TCP TIME_WAIT
timeout for Cloud NAT is scheduled to decrease from 120 seconds to 30 seconds,
across all regions, as follows:
From June 30 to September 29, 2026 : new Cloud NAT gateways will use either
the 120-second or 30-second default, depending on when the update is
deployed in a specific region.
On or after September 30, 2026 : all new Cloud NAT gateways in all regions
will use the 30-second default.
Impact on gateways
New gateways : after the update is deployed in a region, all new Cloud NAT
gateways created in that region will use the 30-second default.
This change also applies if a pre-update gateway is deleted and then recreated.
Existing gateways : Cloud NAT gateways created before the regional update
will retain the 120-second default. You can adjust this value by using the
--tcp-time-wait-timeout
flag at any time.
Cloud NAT gateways configured with a custom TIME_WAIT value
aren't affected and will continue to use your configured custom value.
The following table outlines the applicable default timeout for new gateways
throughout the deployment timeline.
Gateway type
Default timeout (before June 30)
Default timeout (June 30—September 29)
Default timeout (on or after September 30)
New
120 seconds
30 or 120 seconds
30 seconds
Cloud SQL for MySQL
Feature
You can now migrate a subset of databases from an external server to a
destination Cloud SQL for MySQL instance.
For more information, see
Configure Cloud SQL and the external server for replication .
Cloud Storage
Feature
You can now use Storage Insights datasets to help manage your data security and compliance. The ability to identify publicly accessible objects is now generally available . Additionally, new fields in bucket and object metadata schemas, such as encryption , retentionPeriod , encryptionType , and retentionExpirationTime , help you audit encryption configurations and monitor data retention policies. For more information, see
Storage Insights datasets and
Dataset tables and schemas .
Cloud TPU
Feature
Generally available : TPU7x is generally available (GA). TPU7x is the first
release within the Ironwood family, Google Cloud's seventh generation TPU. TPU7x
supports large-scale AI training and inference, providing performance and
cost-effectiveness for demanding workloads such as large language (LLMs),
mixture of experts (MoEs), and diffusion models. For more information, see the
TPU7x (Ironwood) documentation .
Compute Engine
Feature
Generally available : The maximum throughput for a Hyperdisk ML
disk is increased to 2,097,152 MiB/s from 1,200,000 MiB/s.
Hyperdisk ML provides the highest throughput per disk for machine learning and
for workloads that require high read throughput on immutable datasets.
For more information, see About Hyperdisk ML .
Document AI
Feature
Upgrading fine tuned custom extractor processors
is now available in Preview .
The feature allows you to fine tune a new processor version with a newer base
version, while keeping the configurations of the previously fine-tuned processor
version selected. This is available through the UI in the Deploy & use tab
in the console.
This is currently supported for upgrading pretrained-foundation-model-v1.4-2025-02-05
to pretrained-foundation-model-v1.5-2025-05-05 .
For more information, see training overview .
Gemini Enterprise
Feature
Gemini Enterprise: Support for new actions (Preview)
New actions are available for the following data stores:
Gmail
Google Drive
GitHub
HubSpot
Monday
For a list of actions for these data stores, see Supported actions .
Feature
Gemini Enterprise: Connect Salesforce data using data federation (Preview)
You can connect Salesforce data stores to Gemini Enterprise using data
federation.
This feature is in Public Preview. For more information, see
Connect Salesforce .
Feature
Gemini Enterprise: Federated connector error logs in Logs Explorer
You can view detailed error logs for your federated connectors in
Logs Explorer. These logs include connection problems, data transformation
issues, or API errors.
For more information, see
Access Gemini Enterprise connector error logs with Cloud Logging .
Feature
Gemini Enterprise and NotebookLM Enterprise: BSI C5:2020 compliance
Gemini Enterprise and NotebookLM Enterprise are certified for
BSI C5:2020 compliance.
Google Cloud Armor
Feature
Cloud Armor supports a visual Match Condition Builder that allows you to
create complex expressions in Common Expression Language (CEL) without writing raw
code. For more information, see Use the Match Condition Builder .
Google SecOps
Feature
Multi-stage queries in YARA-L
The Multi-stage queries feature is now GA. This feature lets you feed the output of one query stage into the input of another, providing more granular data transformation than a single, monolithic query.
You can use multi-stage queries in both Dashboards and Search to build sophisticated detection and visualization logic. No action is required to enable this feature.
Learn more about how to create multi-stage queries with YARA-L 2.0 .
Google SecOps SIEM
Feature
Multi-stage queries in YARA-L
The Multi-stage queries feature is now GA. This feature lets you feed the output of one query stage into the input of another, providing more granular data transformation than a single, monolithic query.
You can use multi-stage queries in both Dashboards and Search to build sophisticated detection and visualization logic. No action is required to enable this feature.
Learn more about how to create multi-stage queries with YARA-L 2.0 .
Identity and Access Management
Feature
Gemini assistance in the IAM role picker is generally
available .
For more information, see Get predefined role suggestions with
Gemini assistance .
Oracle Database@Google Cloud
Feature
Oracle Database@Google Cloud supports VPC Service Controls. For more information,
see Configure VPC Service Controls . This feature is Generally Available (GA) .
SAP on Google Cloud
Announcement
ABAP SDK for Google Cloud version 1.13 (On-premises or any cloud edition)
Version 1.13 of the on-premises or any cloud edition of the
ABAP SDK for Google Cloud is generally available (GA).
For the latest Gemini 3.1 Pro models, this version includes support for
function calling with thought signatures and enhanced thinking configurations
to optimize model reasoning.
Additionally, this version introduces support for the Parameter Manager API and fixes an issue with the recordstamp field in the BigQuery toolkit for SAP when multiple records with the same primary key are replicated to BigQuery.
For more information, see What's new with the on-premises or any cloud edition of the ABAP SDK for Google Cloud .
Security Command Center
Feature
Risk Engine now supports aiplatform.googleapis.com/ReasoningEngine in both attack paths and high value resource sets .
March 30, 2026
AlloyDB for PostgreSQL
Feature
AlloyDB now offers conversational analytics, which lets users query their
operational data using natural language. This feature is powered by the
Conversational Analytics API ,
which can help you translate complex human dialog into precise database queries
to provide actionable insights. This feature is in
Preview .
For more information, see Conversational analytics for AlloyDB overview .
BigQuery
Feature
The following forecasting and anomaly detection functions and updates are
generally available
(GA):
The
AI.DETECT_ANOMALIES function
supports providing a custom context window that determines how many of the
most recent data points should be used by the model.
The
AI.FORECAST function
supports specifying the latest timestamp value for forecasting.
The
AI.EVALUATE function
supports the following:
You can provide a custom context window that determines how many of the most
recent data points should be used by the model.
The function outputs the
mean absolute scaled error
for the time series.
Feature
You can now create BigQuery non-incremental materialized views over Spanner data
to improve query performance by periodically caching results. This feature is
generally available (GA).
Bigtable
Feature
You can view the details of Bigtable continuous materialized views
in the Google Cloud console.
Cloud Billing
Feature
Scenario modeling for CUD recommendations is generally available
Scenario modeling for committed use discount (CUD) recommendations is now
generally available (GA). You can simulate scenarios for both spend-based and
resource-based CUDs, and customize recommendations to purchase a commitment that
maximizes your savings.
For more information, see
Simulate scenarios for CUDs savings .
Cloud Build
Feature
Cloud Build now supports uploading generic artifacts to generic
repositories, and also downloading generic repositories as build dependencies.
For more information, see genericArtifacts
and Specify a generic artifact as a dependency .
Cloud CDN
Feature
For global external Application Load Balancers , you can configure Cloud CDN
cache policies at various levels of a URL map, providing more granular control
over caching. You can now apply specific caching logic based on hostnames,
URL paths, HTTP headers, and query parameters. This feature is in Preview .
For more information, see Cache policies in URL maps .
Cloud Database Migration Service
Feature
Database Migration Service for homogeneous MySQL migrations now lets you migrate
individual databases from your source. You can select the databases when you
create a migration job for homogeneous MySQL migrations .
Cloud Logging
Change
For any new project that is created on or after March 30, 2026, if the
project enables the
Cloud Logging API,
then Google Cloud Observability also enables the
Telemetry API .
Cloud Monitoring
Change
For any new project that is created on or after March 30, 2026, if the
project enables the
Cloud Monitoring API,
Telemetry API .
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now offers conversational analytics, which lets users query
their operational data using natural language. This feature is powered by the
Conversational Analytics API ,
which can help you translate complex human dialog into precise database queries
to provide actionable insights. This feature is in
Preview .
For more information, see Conversational analytics for Cloud SQL for MySQL overview .
Cloud SQL for PostgreSQL
Feature
Cloud SQL for PostgreSQL now offers conversational analytics, which lets users query
their operational data using natural language. This feature is powered by the
Conversational Analytics API ,
which can help you translate complex human dialog into precise database queries
to provide actionable insights. This feature is in
Preview .
For more information, see Conversational analytics for Cloud SQL for PostgreSQL overview .
Breaking
Vector assist ( Preview )
is temporarily disabled for all Cloud SQL for PostgreSQL instances.
Cloud Trace
Change
For any new project that is created on or after March 30, 2026, if the
project enables the
Cloud Trace API,
then Google Cloud Observability also enables the
Telemetry API .
Feature
You can use the
Cloud Trace API MCP server
to let agents and AI applications interact with your trace data.
This feature is in Preview .
Container Optimized OS
Change
cos-beta-129-19506-0-109
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.2
See List
Change
cos-dev-133-19666-0-0
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.77
v27.5.1
v2.2.1
See List
Change
Fixed CVE-2026-27135 in net-libs/nghttp2.
Change
Updated the Linux kernel to v6.12.77.
Feature
Enabled dynamic configuration of FUSE max pages limit.
Feature
Enabled dynamic configuration of FUSE max pages limit.
Security
Fixed CVE-2026-23292 in the Linux kernel.
Security
Fixed CVE-2026-27135 in net-libs/nghttp2.
Security
Fixed CVE-2026-23293 in the Linux kernel.
Change
Runtime sysctl changes:
Added: fs.fuse.max_pages_limit: 256
Security
Fixed CVE-2026-23296 in the Linux kernel.
Security
Fixed CVE-2026-23297 in the Linux kernel.
Security
Fixed CVE-2026-23300 in the Linux kernel.
Security
Fixed CVE-2026-23303 in the Linux kernel.
Security
Fixed CVE-2026-23304 in the Linux kernel.
Security
Fixed CVE-2026-23310 in the Linux kernel.
Security
Fixed CVE-2026-23316 in the Linux kernel.
Security
Fixed CVE-2026-23319 in the Linux kernel.
Security
Fixed CVE-2026-23340 in the Linux kernel.
Security
Fixed CVE-2026-23352 in the Linux kernel.
Security
Fixed CVE-2026-23359 in the Linux kernel.
Security
Fixed CVE-2026-23360 in the Linux kernel.
Security
Fixed CVE-2026-23380 in the Linux kernel.
Security
Fixed CVE-2026-23381 in the Linux kernel.
Security
Fixed CVE-2026-23383 in the Linux kernel.
Security
Fixed CVE-2026-23388 in the Linux kernel.
Security
Fixed CVE-2026-23390 in the Linux kernel.
Security
Fixed KCTF-9df9578 in the Linux kernel.
Change
Runtime sysctl changes:
Added: fs.fuse.max_pages_limit: 256
Change
cos-125-19216-220-99
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Feature
Enabled dynamic configuration of FUSE max pages limit.
Security
Fixed CVE-2026-23292 in the Linux kernel.
Security
Fixed CVE-2026-23293 in the Linux kernel.
Security
Fixed CVE-2026-23296 in the Linux kernel.
Security
Fixed CVE-2026-23297 in the Linux kernel.
Security
Fixed CVE-2026-23300 in the Linux kernel.
Security
Fixed CVE-2026-23303 in the Linux kernel.
Security
Fixed CVE-2026-23310 in the Linux kernel.
Security
Fixed CVE-2026-23316 in the Linux kernel.
Security
Fixed CVE-2026-23319 in the Linux kernel.
Security
Fixed CVE-2026-23340 in the Linux kernel.
Security
Fixed CVE-2026-23352 in the Linux kernel.
Security
Fixed CVE-2026-23359 in the Linux kernel.
Security
Fixed CVE-2026-23360 in the Linux kernel.
Security
Fixed CVE-2026-23380 in the Linux kernel.
Security
Fixed CVE-2026-23381 in the Linux kernel.
Security
Fixed CVE-2026-23383 in the Linux kernel.
Security
Fixed CVE-2026-23388 in the Linux kernel.
Security
Fixed CVE-2026-23390 in the Linux kernel.
Security
Fixed CVE-2026-27135 in net-libs/nghttp2.
Security
Fixed CVE-2026-27448 in dev-python/pyopenssl.
Security
Fixed CVE-2026-27459 in dev-python/pyopenssl.
Security
Fixed KCTF-9df9578 in the Linux kernel.
Change
Runtime sysctl changes:
Added: fs.fuse.max_pages_limit: 256
Change
cos-121-18867-381-56
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.122
v27.5.1
v2.0.7
See List
Feature
Added support for loading the ublk kernel module.
Security
Fixed CVE-2026-23292 in the Linux kernel.
Security
Fixed CVE-2026-23293 in the Linux kernel.
Security
Fixed CVE-2026-23296 in the Linux kernel.
Security
Fixed CVE-2026-23300 in the Linux kernel.
Security
Fixed CVE-2026-23303 in the Linux kernel.
Security
Fixed CVE-2026-23304 in the Linux kernel.
Security
Fixed CVE-2026-23310 in the Linux kernel.
Security
Fixed CVE-2026-23340 in the Linux kernel.
Security
Fixed CVE-2026-23352 in the Linux kernel.
Security
Fixed CVE-2026-23359 in the Linux kernel.
Security
Fixed CVE-2026-23368 in the Linux kernel.
Security
Fixed CVE-2026-23381 in the Linux kernel.
Security
Fixed CVE-2026-23386 in the Linux kernel.
Security
Fixed CVE-2026-23392 in the Linux kernel.
Security
Fixed CVE-2026-27135 in net-libs/nghttp2.
Security
Fixed CVE-2026-27448 in dev-python/pyopenssl.
Security
Fixed CVE-2026-27459 in dev-python/pyopenssl.
Security
Fixed CVE-2026-32597 with pyjwt package upgrade to 2.12.1.
Security
Fixed KCTF-329f0b9 in the Linux kernel.
Security
Fixed KCTF-9df9578 in the Linux kernel.
Security
Fixed the "CrackArmor" vulnerability in the Linux kernel.
Change
Runtime sysctl changes:
Changed: kernel.threads-max: 63487 -> 63199
Changed: user.max_cgroup_namespaces: 31743 -> 31599
Changed: user.max_ipc_namespaces: 31743 -> 31599
Changed: user.max_mnt_namespaces: 31743 -> 31599
Changed: user.max_net_namespaces: 31743 -> 31599
Changed: user.max_pid_namespaces: 31743 -> 31599
Changed: user.max_time_namespaces: 31743 -> 31599
Changed: user.max_user_namespaces: 31743 -> 31599
Changed: user.max_uts_namespaces: 31743 -> 31599
Change
cos-117-18613-534-53
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.123
v24.0.9
v1.7.29
See List
Security
Fixed CVE-2026-23292 in the Linux kernel.
Security
Fixed CVE-2026-23293 in the Linux kernel.
Security
Fixed CVE-2026-23296 in the Linux kernel.
Security
Fixed CVE-2026-23300 in the Linux kernel.
Security
Fixed CVE-2026-23303 in the Linux kernel.
Security
Fixed CVE-2026-23304 in the Linux kernel.
Security
Fixed CVE-2026-23310 in the Linux kernel.
Security
Fixed CVE-2026-23351 in the Linux kernel.
Security
Fixed CVE-2026-23352 in the Linux kernel.
Security
Fixed CVE-2026-23359 in the Linux kernel.
Security
Fixed CVE-2026-23368 in the Linux kernel.
Security
Fixed CVE-2026-23381 in the Linux kernel.
Security
Fixed CVE-2026-23386 in the Linux kernel.
Security
Fixed CVE-2026-23388 in the Linux kernel.
Security
Fixed CVE-2026-23391 in the Linux kernel.
Security
Fixed CVE-2026-23392 in the Linux kernel.
Security
Fixed CVE-2026-27135 in net-libs/nghttp2.
Security
Fixed CVE-2026-27448 in dev-python/pyopenssl.
Security
Fixed the "CrackArmor" vulnerability in the Linux kernel.
Security
Fixed the "CrackArmor" vulnerability in the Linux kernel.
Change
Runtime sysctl changes:
Changed: kernel.threads-max: 63487 -> 63199
Changed: user.max_cgroup_namespaces: 31743 -> 31599
Changed: user.max_ipc_namespaces: 31743 -> 31599
Changed: user.max_mnt_namespaces: 31743 -> 31599
Changed: user.max_net_namespaces: 31743 -> 31599
Changed: user.max_pid_namespaces: 31743 -> 31599
Changed: user.max_time_namespaces: 31743 -> 31599
Changed: user.max_user_namespaces: 31743 -> 31599
Changed: user.max_uts_namespaces: 31743 -> 31599
Change
cos-113-18244-582-55
Kernel
Docker
Containerd
GPU Drivers
COS-6.1.161
v24.0.9
v1.7.27
See List
Fixed
Updated cos-gpu-installer to v2.6.1.
Security
Fixed CVE-2026-23292 in the Linux kernel.
Security
Fixed CVE-2026-23293 in the Linux kernel.
Security
Fixed CVE-2026-23296 in the Linux kernel.
Security
Fixed CVE-2026-23300 in the Linux kernel.
Security
Fixed CVE-2026-23303 in the Linux kernel.
Security
Fixed CVE-2026-23304 in the Linux kernel.
Security
Fixed CVE-2026-23340 in the Linux kernel.
Security
Fixed CVE-2026-23352 in the Linux kernel.
Security
Fixed CVE-2026-23359 in the Linux kernel.
Security
Fixed CVE-2026-23368 in the Linux kernel.
Security
Fixed CVE-2026-23388 in the Linux kernel.
Security
Fixed CVE-2026-23391 in the Linux kernel.
Security
Fixed CVE-2026-23392 in the Linux kernel.
Security
Fixed CVE-2026-27135 in net-libs/nghttp2.
Security
Fixed CVE-2026-27448 in dev-python/pyopenssl.
Security
Fixed CVE-2026-27459 in dev-python/pyopenssl.
Security
Fixed CVE-2026-32597 with pyjwt package upgrade to 2.12.1.
Security
Fixed KCTF-329f0b9 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: kernel.threads-max: 63503 -> 63215
Changed: user.max_cgroup_namespaces: 31751 -> 31607
Changed: user.max_ipc_namespaces: 31751 -> 31607
Changed: user.max_mnt_namespaces: 31751 -> 31607
Changed: user.max_net_namespaces: 31751 -> 31607
Changed: user.max_pid_namespaces: 31751 -> 31607
Changed: user.max_time_namespaces: 31751 -> 31607
Changed: user.max_user_namespaces: 31751 -> 31607
Changed: user.max_uts_namespaces: 31751 -> 31607
Dataplex
Feature
Automated cataloging of Looker (Google Cloud core) metadata as well as data
lineage ingestion from BigQuery sources are now available in
preview . For more
information, see the Looker (Google Cloud core) documentation .
Gemini Enterprise
Feature
Gemini Enterprise: Include cross-domain documents feature for Google Drive (Preview)
When configuring a Google Drive data store, the Include cross-domain
documents feature lets you search and index documents outside your
organization. Enable this setting during app creation or on the Manage web app
features page for existing apps.
This feature is in Public Preview. For more information, see Create an app and Manage web app
features .
Guest Environment
Feature
Version 20260329.00 of the guest agent
is now available for all supported operating systems. This version introduces
the following features:
A new local extension, guest telemetry, is introduced, which collects
important telemetry data about Independent Software Vendors (ISVs) running
on a compute instance. For more information about the telemetry the guest
agent collects, see
System telemetry collection .
The enable_local_plugins configuration now defaults to true .
A new configuration flag connection_type is introduced to the
PluginConfig section of the guest agent configuration file. This option
forces a specific connection type when the guest agent connects to the
extensions it is managing. Supported connection types are UDS and TCP.
Fixed
Version 20260329.00 of the guest agent
is now available for all supported operating systems. This version introduces
the following fixes:
The guest agent no longer terminates abruptly when an extension's gRPC
client is null. Instead, it logs an error.
The credentials setup for HTTPS access to the metadata server was moved to
prevent it from blocking the guest agent's readiness signal. This mitigates
an issue on machines without vTPM, where the guest agent can take an extra
10 seconds to signal that it's ready.
The core plugin now logs during the startup phase to provide a better signal
on when it's started.
Locally bundled extensions are now direct child processes of the agent
manager process. This helps resolve an issue where plugins remain as
running processes but fail to start correctly.
Looker
Announcement
Starting March 30, 2026, the following features will begin rolling out.
Feature
Available in preview for Looker (Google Cloud core), you can now track end-to-end data lineage from BigQuery to Looker content, including views, Explores, dashboards, and Looks, through the Looker and Dataplex lineage integration. This enables impact analysis to see how BigQuery changes affect downstream Looker (Google Cloud core) contents.
Feature
The Looker mobile application now supports sending alert notifications as push notifications to users who have the Looker mobile application on their mobile device. (This release note was updated on April 9, 2026 to reflect that this update is a feature and to correct a documentation link.)
Feature
Available in preview, you can publish the Conversational Analytics data agents that you create in Looker to Gemini Enterprise.
Feature
Available in preview, you can chat with Conversational Analytics data agents in user-defined dashboards and in LookML dashboards.
Feature
The Enhanced Content Cleanup preview feature is now available. When this feature is enabled for your instance, it lets admins and content owners access an enhanced content management experience in Looker. The Enhanced Content Cleanup preview feature provides the following capabilities:
Lets admins and users access a new Unused content folder to quickly identify and manage the unused content on a Looker instance.
Lets admins programmatically schedule content cleanups for individual content or in bulk, and send automatic notifications to content owners.
Lets content owners opt out of automated scheduled cleanups for specific content.
Lets admins and users move content to the trash.
This feature is disabled by default. Learn more about managing unused content with Enhanced Content Cleanup .
Feature
Now generally available, Looker has full support for connections with AlloyDB for PostgreSQL . When you create a connection in Looker, you can now select Google Cloud AlloyDB for PostgreSQL from the Dialect drop-down menu. This update doesn't affect existing AlloyDB connections that were created using the PostgreSQL 9.5+ option in the Dialect menu.
Feature
The New Looker Explore and Merge Query Experience preview feature is now available.
When this feature is enabled for your instance, it lets individual users have the option to try the redesigned Looker Explore and Merge Query interfaces. The streamlined interfaces let Looker users find connections and gain insights from their data more quickly. For an AI-assisted experience, enable additional options on the Gemini in Looker page in the Platform section of the Admin panel.
This feature is disabled by default.
Learn more about the new Explore and Merge Query experience .
Feature
For customer-hosted Looker instances, Looker 26.6 supports MySQL 8.4.X for the Looker backend database. For customer-hosted instances that use MySQL 8.0.X for the Looker backend database, it is recommended that you update to MySQL 8.4.X as soon as you update your Looker instance to 26.6 or later. Note: This item was added on April 6, 2026.
Feature
Available in preview, Looker (Google Cloud core) now integrates with Dataplex Universal Catalog , providing a unified discovery and management experience for your Looker metadata. This allows you to search for Looker assets like LookML models and dashboards directly within Dataplex, giving you a comprehensive view of your data landscape.
Feature
When connecting Looker to your database, you can specify additional Java Database Connectivity (JDBC) parameters that you want Looker to include when it communicates with your database driver. In order to keep your connection secure, Looker now has an allowlist for the additional JDBC parameters that are supported for each database dialect.
If you try to create or update a connection that uses unsupported JDBC parameters, Looker will display an error message that shows the non-allowed parameters.
If you have an existing connection that uses unsupported JDBC parameters, Looker will remove the parameters and then connect to your database.
For a list of the supported JDBC parameters for your dialect, see the "Supported JDBC parameters" section of the database configuration instructions page for your dialect.
Spanner
Feature
Spanner offers conversational analytics, which lets users query their
operational data using natural language. This feature is powered by the
Conversational Analytics API ,
which can help you translate complex human dialog into precise database queries
to provide actionable insights. This feature is in
Preview .
For more information, see Conversational analytics for Spanner overview .
Feature
You can create BigQuery
non-incremental materialized views over Spanner data
to improve query performance by periodically caching results. This feature is
generally available (GA).
Feature
You can use
Cloud resource connections with EXPORT DATA statements
to reverse ETL (extract, transform, load) BigQuery data to
Spanner. This feature is
generally available (GA) .
Vertex AI Workbench
Feature
M140 release
The M140 release of Vertex AI Workbench instances includes the following:
Gemini CLI Update : Minor updates to Gemini CLI's dependencies.
Feature
Workbench Image Release 26.03
Released the new 26.03 image version under the following image family `workbench-instances-2603. This major update introduces:
OS Upgrade : Migration to Debian 12 (Bookworm) for improved security and performance.
Python Upgrade : Python 3.12 as the default version for base frameworks.
Framework Updates : Removed support for JupyterLab 3, Tensorflow, and Pytorch frameworks.
New Versioning Scheme : Transitioned to a date-based versioning format (e.g., v26.03 ) to provide better historical context for image updates. For more information on new versioning schema see the latest documentation
Micromamba CLI : Conda CLI is replaced and aliased to Micromamba CLI.
Virtual Private Cloud
Feature
Service producers can
accept or reject connections from individual Private Service Connect endpoints .
This feature is available in General Availability .
March 29, 2026
Google SecOps SOAR
Announcement
Release 6.3.81 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
March 28, 2026
Google SecOps SOAR
Announcement
Release 6.3.80 is now available for all regions.
Sensitive Data Protection
Feature
You can configure Sensitive Data Protection to detect specific
client-provided metadata. For more information, see Create a custom metadata
label detector .
March 27, 2026
Assured Workloads
Feature
The Data Boundary for IRS 1075
supports the following products:
AI Protection
Artifact Analysis
AutoML Tables
Backup and DR Service
Certificate Manager
Cloud Domains
Cloud Scheduler
Cloud TPU
Data Security Posture Management
GKE Image streaming
Google Cloud Managed Service for Apache Kafka
Memorystore for Redis Cluster
Security Command Center Premium
VM Manager
Vertex AI Tuning
Feature
The US Data Boundary for Healthcare and Life Sciences
and US Data Boundary for Healthcare and Life Sciences with Support
support the following products:
Access Approval
Access Context Manager
Access Transparency
Agent Assist
AlloyDB for PostgreSQL
Apigee
Application Integration
AutoML Tables
Backup and DR Service
Backup for GKE
Certificate Manager
Cloud Asset Inventory
Cloud DNS
Cloud Deploy
Cloud HSM
Cloud Healthcare API
Cloud Monitoring
Cloud Run functions
Cloud Tasks
Dialogflow CX
Dataform
Knowledge Catalog
Document AI
External passthrough Network Load Balancer
Firestore
GKE Hub
Generative AI on Vertex AI
Google Cloud Armor
Identity-Aware Proxy
Internal passthrough Network Load Balancer
Key Access Justifications
Looker (Google Cloud core)
Model Armor
Network Connectivity Center
Persistent Disk
Regional external Application Load Balancer
Regional external proxy Network Load Balancer
Regional internal Application Load Balancer
Regional internal proxy Network Load Balancer
Secure Source Manager
Security Command Center Premium
Storage Transfer Service
Vertex AI Batch prediction
Vertex AI Online prediction
Vertex AI Search
Vertex AI Training
Vertex AI Workbench
Feature
The Data Boundary for ITAR
supports the following products:
AlloyDB for PostgreSQL
Bigtable
Essential Contacts
Resource Manager
Secure Source Manager
Cloud Composer
Announcement
Cloud Composer 2 environments can no longer be created in
Melbourne (australia-southeast2). We're switching this region to
supporting only Cloud Composer 3 environments. Existing Cloud Composer 2
environments in this region aren't affected by this change.
Announcement
A new Cloud Composer release has started on March 27, 2026 . Get ready
for upcoming changes and features as we roll out the new release to all regions.
This release is in progress at the moment. Listed changes and features might
not be available in some regions yet.
Change
(Airflow 3.1.7) Starting from version composer-3-airflow-3.1.7-build.1,
Airflow workers no longer have direct access to the Airflow database of your
environment.
This feature was
announced previously
and has finished gradually rolling out to all regions supported by
Cloud Composer 3.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.7-build.3
composer-3-airflow-2.10.5-build.32 (default)
composer-3-airflow-2.9.3-build.52
Change
New images
are available in Cloud Composer 2:
composer-2.16.9-airflow-2.10.5 (default)
composer-2.16.9-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.19 and composer-2.12.0-*.
Compute Engine
Security
A vulnerability (CVE-2026-23268) about CrackArmor was discovered and has been addressed.
For more information, see the GCP-2026-015 security bulletin .
Dataproc
Announcement
New Serverless for Apache Spark runtime versions :
1.2.77
2.2.77
2.3.30
3.0.13
Document AI
Feature
Custom splitter model
pretrained-splitter-v1.5-2025-07-14 is available in
General Availability (GA) .
Google Distributed Cloud (software only) for VMware
Fixed
The following issues were fixed in 1.33.600-gke.40:
Fixed an issue where if updates or upgrades to advanced admin clusters failed and the external bootstrap cluster was deleted, you could lose critical data.
Fixed
The following issues were fixed in 1.32.1000-gke.57:
Fixed an issue where the node-problem-detector was incorrectly deployed onto
non-Advanced (V1) VMware clusters, causing the containerd runtime to
continuously restart on affected nodes, leading to ETCD/CRI failures and
unsuccessful cluster upgrades.
Fixed an issue where setting the deprecated stackdriver.enableVPC field to
true in a cluster configuration file would block upgrades to an Advanced
Cluster. The stackdriver.enableVPC field has been deprecated and its setting is
now ignored during the upgrade validation process.
Fixes an issue where Advanced Clusters incorrectly deployed the node problem
detector onto non-Advanced clusters, which caused containerd to continuously
restart and led to cluster upgrade failures.
Fixed an issue where the system certificate pool was ignored when a custom CA
certificate was configured for a registry mirror.
Fixed an issue where retrying the gkectl upgrade admin command after a
previous failure could fail with "AlreadyExists" errors in the bootstrap cluster.
Fixed an issue where cluster creation or upgrade failed if the proxy or
noProxy configuration fields contained extraneous whitespaces. These spaces
interfered with internal command-line argument parsing, causing the control
plane load balancer initialization to fail.
Fixed an issue where if updates or upgrades to advanced admin clusters failed
and the external bootstrap cluster was deleted, you could lose critical data.
Announcement
Google Distributed Cloud (software only) for VMware 1.32.1000-gke.57 is now available
for download. To upgrade, see Upgrade clusters .
Google Distributed Cloud 1.32.1000-gke.57 runs on Kubernetes v1.32.13-gke.1000.
If you are using a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release.
After a release, it takes approximately 7 to 14 days for the version to become
available for use with GKE On-Prem API clients: the Google Cloud console, the
gcloud CLI, and Terraform.
Announcement
Google Distributed Cloud (software only) for VMware 1.33.600-gke.40 is now available
for download. To upgrade, see Upgrade clusters .
Google Distributed Cloud 1.33.600-gke.40 runs on Kubernetes 1.33.5-gke.2200.
If you are using a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release.
After a release, it takes approximately 7 to 14 days for the version to become
available for use with GKE On-Prem API clients: the Google Cloud console, the
gcloud CLI, and Terraform.
Google Distributed Cloud (software only) for bare metal
Fixed
The following issues were fixed in 1.32.1000-gke.57:
Fixed vulnerabilities listed in Vulnerability fixes .
Cluster and
node pool failures are now surfaced in the RecentFailures field
in the cluster status. This change provides a centralized location for viewing
errors from both worker node pools and control plane nodes, improving the
troubleshooting and debugging experience.
Fixed an issue where Metrics API operations—including
kubectl top , Horizontal Pod Autoscaling (HPA), and Vertical Pod Autoscaling
(VPA)—could fail with TLS verification errors during CA rotation.
Resolved an issue where Certificate Authority (CA) rotation became stuck
on self-managed clusters (admin, hybrid, or standalone). This fix resolves an
internal resource synchronization error that previously prevented the rotation
process from completing successfully.
Announcement
Google Distributed Cloud (software only) for bare metal 1.32.1000-gke.57 is now available for
download. To upgrade, see Upgrade clusters .
Google Distributed Cloud for bare metal
1.32.1000-gke.57 runs on Kubernetes v1.32.13-gke.1000.
After a release, it takes approximately 7 to 14 days for the version to become
available for installations or upgrades with the GKE On-Prem API clients: the
Google Cloud console, the gcloud CLI, and Terraform.
If you use a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release of Google Distributed Cloud for bare metal.
Security Command Center
Announcement
Risk Engine has launched enhanced heuristics to help identify default
high-value resources.
If you are using the default high-value resource set, you might observe changes in the
exposure scores of their findings, resources, and issues. For information about
these changes, see Default high-value resource set .
reCAPTCHA
Change
reCAPTCHA Mobile SDK v18.9.0-beta02 is available for Android. This version
includes the following:
Reliability improvements and bug fixes
Score distribution calibration and improvements
March 26, 2026
Anthos Config Management
Breaking
Upgraded the Open Telemetry image from v0.127.0 to v0.133.0 to pick up vulnerability fixes. This change promotes the pkg.translator.prometheus.NormalizeName feature gate to stable.
To understand the changes in each release, review the full changelog for opentelemetry-collector-contrib .
Change
Addressed multiple Common Vulnerabilities and Exposures (CVEs) by updating dependencies.
Change
Upgraded bundled Helm version from v3.18.6 to v3.20.0 to pick up vulnerability fixes. To understand the changes in each release, review the changelogs .
Apigee X
Announcement
On March 26th, 2026, we released an updated version of Apigee (1-17-0-apigee-6).
Note: Rollouts of this release began today and may take four or more business days to be completed across all Google Cloud zones. Your instances may not have the features and fixes available until the rollout is complete.
Security
Bug ID
Description
495897297, 495909767
Security fix for Apigee infrastructure. This addresses the following vulnerabilities: CVE-2026-33210
CVE-2026-25679
CVE-2026-27139
CVE-2026-27142
2026-33186
Fixed
Bug ID
Description
N/A
Updates to infrastructure and libraries.
BigQuery
Feature
You can now use
Cloud resource connections with EXPORT DATA statements
to reverse ETL BigQuery data to Spanner. This
feature is
generally available (GA).
Cloud SQL for MySQL
Feature
MySQL 8.0.44 is now the default minor version for Cloud SQL for MySQL 8.0.
For more information about minor version support in Cloud SQL for MySQL, see
MySQL 8.0 .
Container Optimized OS
Change
cos-beta-129-19506-0-98
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.2
See List
Change
Added support for the Lustre 2.14.0_p249 drivers.
Change
Fixed CVE-2026-32597 with pyjwt package upgrade to 2.12.1.
Feature
Added support for loading the ublk kernel module.
Fixed
Fixed an ek-cpu-balloon bug which would result in CPUs being underreported on ek machines with SMT enabled.
Fixed
Upgraded app-admin/google-osconfig-agent to v20260119.00.
Security
Fixed CVE-2025-71265 in the Linux kernel.
Security
Fixed CVE-2025-71266 in the Linux kernel.
Security
Fixed CVE-2025-71267 in the Linux kernel.
Security
Fixed CVE-2025-71268 in the Linux kernel.
Security
Fixed CVE-2026-23069 in the Linux kernel.
Security
Fixed CVE-2026-23083 in the Linux kernel.
Security
Fixed CVE-2026-23085 in the Linux kernel.
Security
Fixed CVE-2026-23086 in the Linux kernel.
Security
Fixed CVE-2026-23095 in the Linux kernel.
Security
Fixed CVE-2026-23097 in the Linux kernel.
Security
Fixed CVE-2026-23099 in the Linux kernel.
Security
Fixed CVE-2026-23103 in the Linux kernel.
Security
Fixed CVE-2026-23105 in the Linux kernel.
Security
Fixed CVE-2026-23107 in the Linux kernel.
Security
Fixed CVE-2026-23110 in the Linux kernel.
Security
Fixed CVE-2026-23243 in the Linux kernel.
Security
Fixed CVE-2026-23254 in the Linux kernel.
Security
Fixed CVE-2026-23262 in the Linux kernel.
Security
Fixed KCTF-329f0b9 in the Linux kernel.
Security
Fixed KCTF-c9bc175 in the Linux kernel.
Security
Updated dev-libs/openssl to v3.5.5. This resolves CVE-2025-15467.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
Change
cos-117-18613-534-48
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.123
v24.0.9
v1.7.29
See List
Change
Added support for the Lustre 2.14.0_p249 drivers.
Feature
Added support for loading the ublk kernel module.
Fixed
Updated cos-gpu-installer to v2.6.1.
Fixed
Upgraded app-admin/google-osconfig-agent to v20260119.00.
Fixed
Upgraded sys-apps/file to v5.47-r1.
Security
Fixed CVE-2026-23231 in the Linux kernel.
Security
Fixed CVE-2026-23243 in the Linux kernel.
Security
Fixed CVE-2026-23254 in the Linux kernel.
Security
Fixed CVE-2026-27459 in dev-python/pyopenssl.
Security
Fixed CVE-2026-32597 with pyjwt package upgrade to 2.12.1.
Security
Fixed KCTF-329f0b9 in the Linux kernel.
Error Reporting
Feature
You can use the
Error Reporting API MCP server
to let agents and AI applications interact with your error data.
This feature is in Preview .
Gemini Enterprise
Feature
Gemini Enterprise: Chat with files in the Google Drive connector
Gemini Enterprise can analyze content and generate answers from CSV, PDF, PPTX,
and XLSX files in the Google Drive connector, eliminating the need to upload
these files to the assistant.
This feature is generally available (GA). For more information, see Chat with
files in connectors .
Looker
Feature
As part of Looker 26.6, Conversational Analytics now offers new modes for asking questions . Fast mode allows you to get answers more quickly. Thinking mode allows you to ask more complex questions and test your agent's capabilities.
Feature
As part of Looker 26.6, Conversational Analytics will now ask you questions to clarify any ambiguities in your original query.
Memorystore for Valkey
Feature
In addition to the per-instance CA mode , Memorystore for Valkey offers the following new CA modes:
Shared CA : a managed,
regionalized CA infrastructure. For each region, you can download a single CA
certificate bundle. This bundle is valid for all instances located in a region
that you configure to use the shared CA. Using a shared CA reduces the number of
certificates that clients need to manage. This CA mode is available in Preview .
Customer-managed CA :
use your own CA pool that's hosted on Certificate Authority Service . If your client applications are configured to trust this CA, then your
applications can connect to an instance without you having to download and
install additional CA certificates. This gives you greater control and helps you
meet compliance requirements. This CA mode is available in Preview .
Feature
Memorystore for Valkey supports version 1.0 of Bloom filters and JSON documents . This feature is available in Preview .
VPC Service Controls
Feature
General availability support
for the following integration:
Oracle Database@Google Cloud
Vertex AI Search
Feature
Vertex AI Search: Gemini 3.1 Pro and Gemini 3 Flash for answer generation (Preview)
You can generate answers with the Gemini 3.1 Pro (Preview) and Gemini 3 Flash (Preview)
models.
For more information, see Answer generation model versions and
lifecycle , Gemini
3.1 Pro , and Gemini 3
Flash .
Announcement
Vertex AI Search: Gemini 3 Pro (Preview) for answer generation discontinued
The Gemini 3 Pro (Preview) model has been discontinued and is no longer
available for answer generation. If you have been using that model, upgrade to
the Gemini 3.1 Pro (Preview) model.
For information about available models, see Answer generation model versions
and lifecycle .
March 25, 2026
AlloyDB for PostgreSQL
Feature
Database server compatibility with PostgreSQL version 18 is now generally
available ( GA ):
You can create AlloyDB clusters
with PostgreSQL 18 compatibility.
You can upgrade existing
AlloyDB clusters running PostgreSQL major versions 14, 15, 16, or 17 to
PostgreSQL major version 18 with one click.
You can use Database Migration Service to
migrate databases to AlloyDB .
Feature
The following AlloyDB AI features are available in Preview :
You can now use the ai.hybrid_search() function, which fuses results from
each search type into a single list using the Reciprocal Rank Fusion (RRF)
algorithm. For more information, see Run hybrid vector similarity search .
AlloyDB supports the rum extension for complex full-text search
operations. The rum extension extends standard GIN indexes by storing
positional information directly in the index. This enables faster phrase
searches and relevance ranking without needing to access the table data. For
more information, see Create and manage a RUM index .
Change
When no major version is specified, AlloyDB for PostgreSQL now defaults to
PostgreSQL major version 17
for new clusters.
BigQuery
Announcement
The Gemini for Google Cloud API
(cloudaicompanion.googleapis.com) is now enabled for existing
BigQuery projects in the European jurisdiction.
Feature
You can now use the BigQuery Migration Service MCP server
to perform SQL translation tasks, including translating SQL queries into
GoogleSQL syntax, generating DDL statements from SQL input queries, and getting
explanations of SQL translations.
This feature is in
preview .
Feature
In BigQuery Data Transfer Service, you can
monitor resource-level status reporting for Hive managed tables
to track progress and view granular error details for individual tables.
This feature is in
preview .
Feature
You can use the BigQuery migration assessment for
Snowflake to assess the complexity of
migrating from Snowflake to BigQuery. This feature is
generally available
(GA).
Bigtable
Announcement
Bigtable client for Java has modernized its Admin API. For detailed migration
steps and code examples, see
Upgrading client libraries .
Cloud Location Finder
Announcement
Cloud Location Finder checks service activation and quota for the project that
you're using to run Cloud Location Finder API queries (the client project), not
the projects that queries target (the resource project). As a result, you only
need to enable the Cloud Location Finder API in your client project.
Cloud Run
Feature
Deploying services using a Compose file
is in General Availability .
Cluster Toolkit
Feature
Cluster Toolkit version v1.85.0 is available. This release updates the
cloud_dns_config setting in the gke-cluster module to default to KUBE_DNS
(CoreDNS). This version also adds Google Cloud Managed Lustre integration for
Google Kubernetes Engine with the A4X Max machine type.
For more information about this release and other minor changes, see the Release
announcement on GitHub .
Container Optimized OS
Change
cos-125-19216-220-87
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Added support for the Lustre 2.14.0_p249 drivers.
Feature
Added support for loading the ublk kernel module.
Fixed
Added CPU balloon support for Arm CPUs.
Fixed
Upgraded app-admin/google-osconfig-agent to v20260119.00.
Fixed
Upgraded sys-apps/file to v5.47-r1.
Security
Fixed CVE-2025-71265 in the Linux kernel.
Security
Fixed CVE-2025-71266 in the Linux kernel.
Security
Fixed CVE-2025-71267 in the Linux kernel.
Security
Fixed CVE-2025-71268 in the Linux kernel.
Security
Fixed CVE-2026-23243 in the Linux kernel.
Security
Fixed CVE-2026-23254 in the Linux kernel.
Security
Fixed CVE-2026-23262 in the Linux kernel.
Security
Fixed CVE-2026-32597 with pyjwt package upgrade to 2.12.1.
Security
Fixed KCTF-329f0b9 in the Linux kernel.
Security
Fixed KCTF-c9bc175 in the Linux kernel.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
Change
cos-dev-133-19654-0-0
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.76
v27.5.1
v2.2.1
See List
Fixed
Fixed an ek-cpu-balloon bug which would result in CPUs being underreported on ek machines with SMT enabled.
Fixed
Upgraded dev-db/sqlite to v3.51.3.
Fixed
Upgraded dev-libs/expat to v2.7.5.
Fixed
Upgraded virtual/logger to v0-r3.
Security
Fixed CVE-2026-32597 with pyjwt package upgrade to v2.12.1.
Security
Fixed KCTF-329f0b9 in the Linux kernel.
Security
Fixed KCTF-c9bc175 in the Linux kernel.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
Generative AI on Vertex AI
Feature
Lyria 3
Lyria is available in public
preview . You can use
lyria-3-pro-preview to generate 184 seconds of audio, or
lyria-3-clip-preview to generate 30 seconds of audio.
For more information, see the following:
Lyria 3 Pro
Preview
Lyria 3 Clip Preview
Google Cloud Contact Center as a Service
Announcement
Web SDK version 2 will be shut down on June 26, 2026
On June 26, 2025, we announced the launch of Web SDK version
3 . Starting on
June 26, 2026 , the web SDK v2 will no longer function. Be sure to update
your website to use the
web SDK v3 before that date to avoid breaking your integration with the web SDK.
We are no longer adding new features to the web SDK v2.
Google Kubernetes Engine
Change
(2026-R12) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for
manual control plane upgrades and node upgrades for existing clusters. For more
information about versioning and upgrades, see GKE versioning and
support and About GKE
cluster upgrades .
Rapid channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.2-gke.1485000 is now the default version for cluster creation in the Rapid channel.
The following versions are now available in the Rapid channel:
1.32.13-gke.1147000
1.33.9-gke.1166000
1.34.5-gke.1208000
1.35.2-gke.1842000
The following versions are no longer available in the Rapid channel:
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.13-gke.1090000
1.32 to 1.33.9-gke.1117000
1.33 to 1.34.5-gke.1153000
1.34 to 1.35.2-gke.1485000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.13-gke.1090000
1.33 to 1.33.9-gke.1117000
1.34 to 1.34.5-gke.1153000
1.35 to 1.35.2-gke.1485000
Regular channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.1-gke.1396002 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269001
The following versions are no longer available in the Regular channel:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1127000
1.32 to 1.33.8-gke.1169000
1.33 to 1.34.4-gke.1193000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1127000
1.33 to 1.33.8-gke.1169000
1.34 to 1.34.4-gke.1193000
Stable channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.8-gke.1026000 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
The following versions are no longer available in the Stable channel:
1.32.11-gke.1264000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.5-gke.2469000
1.34.3-gke.1444000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1026000
1.32 to 1.33.8-gke.1026000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1026000
1.33 to 1.33.8-gke.1026000
1.34 to 1.34.4-gke.1047000
Extended channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.1-gke.1396002 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.2192000
1.30.14-gke.2250000
1.31.14-gke.1576000
1.31.14-gke.1634000
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269001
The following versions are no longer available in the Extended channel:
1.30.14-gke.2117000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2215000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1476000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1599000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.29 to 1.30.14-gke.2154000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.30 to 1.30.14-gke.2154000
1.31 to 1.31.14-gke.1526000
1.32 to 1.32.12-gke.1127000
1.33 to 1.33.8-gke.1169000
1.34 to 1.34.4-gke.1193000
No channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.1-gke.1396002 is now the default version for cluster creation.
The following versions are now available:
1.32.13-gke.1147000
1.33.9-gke.1166000
1.34.5-gke.1208000
1.35.2-gke.1842000
The following node versions are now available:
1.30.14-gke.2250000
1.31.14-gke.1634000
1.32.13-gke.1147000
1.33.9-gke.1166000
1.34.5-gke.1208000
1.35.2-gke.1842000
The following versions are no longer available:
1.32.11-gke.1264000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.33.5-gke.2392000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.34.3-gke.1444000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.35.1-gke.1396001 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1127000
1.32 to 1.33.8-gke.1026000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1127000
1.33 to 1.33.8-gke.1026000
1.34 to 1.34.4-gke.1193000
Security
(2026-R12) Security updates
This release includes new GKE versions that use updated
Container-Optimized OS images. These updated images are cumulative,
incorporating security fixes from all Container-Optimized OS
versions released since the previous GKE release.
To identify the specific vulnerabilities that were resolved in each updated
Container-Optimized OS image, see the Security release notes
for that image. The following table includes links to the release notes for
each updated Container-Optimized OS image:
GKE version
Container-Optimized OS version
Details
1.30.14-gke.2250000
cos-117-18613-534-36
cos-117-18613-534-36 release notes
1.31.14-gke.1634000
cos-117-18613-534-36
cos-117-18613-534-36 release notes
1.32.13-gke.1147000
cos-117-18613-534-24
cos-117-18613-534-24 release notes
1.33.9-gke.1166000
cos-121-18867-381-24
cos-121-18867-381-24 release notes
Change
(2026-R12) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.8-gke.1026000 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
The following versions are no longer available in the Stable channel:
1.32.11-gke.1264000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.5-gke.2469000
1.34.3-gke.1444000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1026000
1.32 to 1.33.8-gke.1026000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1026000
1.33 to 1.33.8-gke.1026000
1.34 to 1.34.4-gke.1047000
Change
(2026-R12) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.1-gke.1396002 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269001
The following versions are no longer available in the Regular channel:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1127000
1.32 to 1.33.8-gke.1169000
1.33 to 1.34.4-gke.1193000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1127000
1.33 to 1.33.8-gke.1169000
1.34 to 1.34.4-gke.1193000
Change
(2026-R12) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.2-gke.1485000 is now the default version for cluster creation in the Rapid channel.
The following versions are now available in the Rapid channel:
1.32.13-gke.1147000
1.33.9-gke.1166000
1.34.5-gke.1208000
1.35.2-gke.1842000
The following versions are no longer available in the Rapid channel:
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.13-gke.1090000
1.32 to 1.33.9-gke.1117000
1.33 to 1.34.5-gke.1153000
1.34 to 1.35.2-gke.1485000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.13-gke.1090000
1.33 to 1.33.9-gke.1117000
1.34 to 1.34.5-gke.1153000
1.35 to 1.35.2-gke.1485000
Change
(2026-R12) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.1-gke.1396002 is now the default version for cluster creation.
The following versions are now available:
1.32.13-gke.1147000
1.33.9-gke.1166000
1.34.5-gke.1208000
1.35.2-gke.1842000
The following node versions are now available:
1.30.14-gke.2250000
1.31.14-gke.1634000
1.32.13-gke.1147000
1.33.9-gke.1166000
1.34.5-gke.1208000
1.35.2-gke.1842000
The following versions are no longer available:
1.32.11-gke.1264000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.33.5-gke.2392000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.34.3-gke.1444000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.35.1-gke.1396001 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1127000
1.32 to 1.33.8-gke.1026000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1127000
1.33 to 1.33.8-gke.1026000
1.34 to 1.34.4-gke.1193000
Feature
To provide more controls over the control plane version upgrade, you can now do
the following:
Configure a frequency of disruption from auto-upgrades by using the cluster
disruption budget. For more information, see
Control the frequency of disruption from auto-upgrades .
Continue using an existing control plane patch for a longer period, which
facilitates large-scale upgrade and downgrade operations. For more
information, see
Patch version support .
Change
(2026-R12) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.1-gke.1396002 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.2192000
1.30.14-gke.2250000
1.31.14-gke.1576000
1.31.14-gke.1634000
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269001
The following versions are no longer available in the Extended channel:
1.30.14-gke.2117000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2215000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1476000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1599000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.29 to 1.30.14-gke.2154000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.30 to 1.30.14-gke.2154000
1.31 to 1.31.14-gke.1526000
1.32 to 1.32.12-gke.1127000
1.33 to 1.33.8-gke.1169000
1.34 to 1.34.4-gke.1193000
Google SecOps
Feature
Credential validation for third-party API feed types
Credential validation is now available for all 49 third-party API connectors.
When you create a feed using a third-party API feed type, Google SecOps now automatically validates the provided credentials. This ensures that if credentials are incorrect:
Immediate feedback : The web interface displays an error message explaining the configuration failure.
Prevention of broken feeds : The system blocks the creation of the feed until valid credentials are provided, preventing the creation of broken feeds that fail to ingest data later.
Google SecOps Marketplace
Feature
Azure API : Version 3.0
Added predefined widget to the following action:
Ping
Feature
Microsoft Graph Security : Version 26.0
Added predefined widget to the following action:
Get Incident
Feature
Google Cloud IAM : Version 20.0
The following new action has been added:
Rotate Service Account Keys
Feature
Siemplify : Version 106.0
The following new action has been added:
Search Cases
Added predefined widget to the following action:
Search Cases
Feature
Microsoft Defender ATP : Version 30.0
The following new actions have been added:
Get Machine Recommendations
Get Machine Vulnerabilities
Get User Related Alerts
Change
BitSight : Version 12.0
IIntroduced Light Theme compatibility for the predefined widget of the following
action:
Get Company Details
Change
RSA NetWitness Platform : Version 16.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Update Incident
Change
CyberArk Credential Provider : Version 3.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Application Password Value
Run CLI Application Password SDK Command
Change
CrowdStrike Falcon : Version 75.0
Added offline queueing support to the following actions:
Execute Command
Run Script
Change
MobileIron : Version 6.0
Integration : The integration's source code is now publicly available on
Github .
Change
FireEye HX : Version 22.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Acknowledge Alert Groups
Get Indicator
Change
Anomali ThreatStream : Version 14.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Related Associations
Get Related Entities
Change
HashiCorp Vault : Version 6.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Generate AWS Credentials
List AWS Roles
List Key-Value Secret Keys
Read Key-Value Secret
Change
AWS WAF : Version 11.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Rule Groups
List Web ACLs
Change
Microsoft Graph Security : Version 26.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Alert
Change
JoeSandbox : Version 10.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Detonate File
Change
ThreatQ : Version 18.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Attribute
Add Source
Create Adversary
Create Event
Create Indicator
Create Object
Link Objects
Change
Symantec Endpoint Security Complete Cloud : Version 8.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Symantec Endpoint Security Complete Cloud
Change
EmailV2 : Version 40.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Delete Email
Forward Email
Save Email Attachments To Case
Send Email
Send Thread Reply
Wait for Email from User
Change
Cofense Triage : Version 20.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Tags To Report
Categorize Report
Download Report Email
Download Report Preview
Get Report Reporters
Change
CA Service Desk Manager : Version 26.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Wait For Status Change
Change
Microsoft Defender ATP : Version 30.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Update Alert
Change
Akamai : Version 5.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Activate Client List
Activate Network List
Add Items To Network List
Remove Items From Network List
Change
SSH : Version 20.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Connections
List iptables Rules
List Processes
Run Command
Change
Microsoft Azure Sentinel : Version 62.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Comment to Incident
Create Alert Rule
Create Custom Hunting Rule
Get Alert Rule Details
Get Custom Hunting Rule Details
Get Incident Statistic
Update Alert Rule
Update Custom Hunting Rule
Update Incident Details
Update Incident Details v2
Update Incident Labels
Update Incident Labels v2
Change
Google Cloud Compute : Version 16.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add IP To Firewall Rule
Add Network Tags
Delete Instance
Execute VM Patch Job
Remove IP From Firewall Rule
Remove Network Tags
Start Instance
Stop Instance
Update Firewall Rule
Change
Microsoft Graph Mail Delegated : Version 16.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Forward Email
Save Email to the Case
Send Email
Send Email HTML
Send Thread Reply
Send Vote Email
Wait For Email From User
Wait For Vote Email Results
Change
Extrahop : Version 8.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Update Detection
Change
Palo Alto Cortex XDR : Version 26.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Incident Details
Query
Change
Recorded Future : Version 21.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Alert Details
Change
VSphere : Version 11.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get System Info
Change
FireEye CM : Version 14.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add IOC Feed
Download Alert Artifacts
Change
Tenable.io : Version 16.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Scan Endpoints
Change
Remote Agent Utilities : Version 7.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Serialize A File
Change
FireEye Helix : Version 18.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Archive Search
Get Alert Details
Index Search
Change
Okta : Version 16.0
Integration : Added support for OAuth authentication.
Change
Office 365 CloudApp Security : Version 25.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add IP To IP Address Range
Create IP Address Range
Remove IP From IP Address Range
Change
Palo Alto Prisma Cloud : Version 6.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Enrich Assets
Change
Google Cloud Armor : Version 5.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add a Rule to a Security Policy
Create a Security Policy
Update a Security Policy
Change
Redis : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add To List
Get List
Change
Carbon Black Response : Version 38.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get FileMod Data For Process
Get Process Tree Data
Change
Microsoft Graph Mail : Version 39.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Forward Email
Save Email to the Case
Send Email
Send Email HTML
Send Thread Reply
Send Vote Email
Wait For Email From User
Wait For Vote Email Results
Change
NessusScanner : Version 12.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Scan Templates
Change
Atlassian Confluence Server : Version 5.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Child Pages
Get Page by ID
Get Page Comments
List Pages
Change
Slack : Version 29.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Build Block
Create Channel
Get User Details
Get User Details By Id
Rename Channel
Wait For Reply
Wait For Reply With Webhook
Change
McAfee ATD : Version 16.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Report
Submit File
Change
Symantec ICDX : Version 9.0
Integration : The integration's source code is now publicly available on
Github .
Change
McAfee NSM : Version 10.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Alert Info Data
Change
Cloudflare : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Firewall Rule
Create Rule List
Update Firewall Rule
Change
Rapid7 InsightIDR : Version 12.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Saved Query
Set Investigation Assignee
Set Investigation Status
Update Investigation
Change
Exchange Extension Pack : Version 13.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Domains to Exchange-Siemplify Mail Flow Rules
Add Senders to Exchange-Siemplify Mail Flow Rule
Purge Compliance Search Results
Remove Domains from Exchange-Siemplify Mail Flow Rules
Remove Senders from Exchange-Siemplify Mail Flow Rules
Run Compliance Search
Change
CSV : Version 40.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Save Json To CSV
Change
Mandiant ASM : Version 12.0
IIntroduced Light Theme compatibility for the predefined widget of the following
action:
Update Issue
Change
Shodan : Version 16.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
DNS Resolve
DNS Reverse
Get Api Info
Change
Google Kubernetes Engine : Version 9.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Operation Status
List Clusters
List Node Pools
List Operations
Set Cluster Addons
Set Cluster Labels
Set Node Autoscaling
Set Node Count
Set Node Pool Management
Change
SiemplifyUtilities : Version 28.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Delete File
Filter JSON
Get Deployment URL
List Operations
Parse EML to JSON
Change
Anomali : Version 14.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Related Associations
Change
Reversinglabs A1000 : Version 9.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Upload File
Change
CyberArk PAM : Version 9.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Account Password Value
Change
Jira : Version 55.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Alert Issue
Create Issue
List Issues
Update Issue
Change
Ivanti Endpoint Manager : Version 9.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Query
List Column Set Fields
List Column Sets
List Delivery Methods
List Packages
List Queries
Change
Check Point Firewall : Version 15.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add a SAM Rule
Remove SAM Rule
Run Script
Change
Any.Run : Version 11.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
AnalyzeFile
AnalyzeFileURL
AnalyzeURL
Change
Carbon Black Protection : Version 12.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get System Info
Change
LogRhythm : Version 22.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Note To Case
Create Cas
Download Case Files
Update Case
Change
BMC Remedy ITSM : Version 12.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Incident
Create Record
Wait For Incident Fields Update
Wait For Record Fields Update
Change
AlienVault USM Anywhere : Version 35.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Alarm Details
Change
Zoho Desk : Version 11.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Comment To Ticket
Create Ticket
Update Ticket
Change
AWS GuardDuty : Version 11.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create a Detector
Create a Trusted IP List
Create Threat Intelligence Set
Get all Trusted IP lists
Get Finding Details
List Detectors
List Findings for a Detector
List Threat Intelligence Sets
Change
AWS Elastic Compute Cloud (EC2) : Version 10.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Instances
List Security Groups
Take Snapshot
Change
Cybereason : Version 24.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Malop
List Malop Processes
List Reputation Items
Change
Rapid7 InsightVm : Version 15.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Scan Results
Launch Scan
Change
Cisco AMP : Version 22.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Group
Get File Lists By Policy
Get Groups
Get Policies
Change
Trend Micro Cloud App Security : Version 11.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Enrich Entities
Change
CiscoUmbrella : Version 18.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Malicious Domains
Change
Solar Winds Orion : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Enrich Endpoint
Execute Entity Query
Execute Query
Change
Tenable Security Center : Version 21.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add IP To IP List Asset
Create IP List Asset
Get Report
Get Scan Results
Run Asset Scan
Change
Gmail : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Forward Email
Save Email To The Case
Send Email
Send Thread Reply
Change
FireEye AX : Version 8.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Appliance Details
Change
FortiAnalyzer : Version 11.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Comment To Alert
Update Alert
Change
WMI : Version 14.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
GetSystemInfo
Change
Google Chat : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Send Advanced Message
Send Message
Change
SentinelOneV2 : Version 47.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Device Control Rule
Download Threat File
Enrich Endpoint
Get System Status
Update Alert
Update Device Control Rule
Change
Google Translate : Version 6.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Translate Text
List Languages
Change
Exchange : Version 122.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Save Mail Attachments To The Case
Send Mail
Send Thread Reply
Send Vote Mail
Wait for mail from user
Wait for Vote Mail Results
Change
Symantec ATP : Version 12.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Incident Comments
Change
Azure API : Version 3.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Execute HTTP Request
Change
Tanium : Version 18.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Question
Download File
Get Question Results
Change
Site24x7 : Version 6.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Generate Refresh Token
Change
ConnectWise : Version 21.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Attachment To Ticket
Get Ticket
Change
Cisco Threat Grid : Version 17.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Upload Sample
Change
Zendesk : Version 12.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Ticket Details
Search Tickets
Change
Symantec Endpoint Protection 12 : Version 15.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
GetReport
Change
ServiceNow : Version 62.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Comment To Record
Add Parent Incident
Create Alert Incident
Create Incident
Create Record
Get Incident
Get Oauth Token
Get Record Details
Update Incident
Update Record
Wait For Field Update
Wait For Status Update
Change
Cuckoo : Version 13.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Detonate File
Get Report
Change
Sophos : Version 20.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Alert Actions
Change
IronPort : Version 15.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get All Recipients By Sender
Get All Recipients By Subject
Get Report
Change
Lastline : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Search Analysis History
Submit File
Submit URL
Change
F5 BIG-IP iControl API : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add IP To Address List
Add IP To Data Group
Add Port To Port List
Create Address List
Create Data Group
Create iRule
Create Port List
Remove IP From Address List
Remove IP From Data Group
Remove Port From Port List
Update iRule
Change
Palo Alto Panorama : Version 35.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Ips to group
Block ips in policy
Block Urls
Edit Blocked Applications
Get Blocked Applications
Remove Ips from group
Unblock ips in policy
Unblock Urls
Change
Cynet : Version 12.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Hash Query
Remediation Status
Change
Trend Vision One : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Email
Update Workbench Alert
Change
MalShare : Version 10.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Upload File
Change
Tor : Version 9.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Is Exit Node
Change
Qualys VM : Version 24.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Download Report
List Ips
Change
BMC Helix Remedyforce : Version 17.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Record
Wait For Fields Update
Change
AlienVault USM Appliance : Version 25.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get PCAP Files For Events
Change
Service Desk Plus : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Request
Get Request
Update Request
Change
FireEye NX : Version 11.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Download Alert Artifacts
Change
Intezer : Version 13.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Alert
Submit Alert
Submit File
Submit Suspicious Email
Change
MISP : Version 37.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Event
Create File Misp Object
Create IP-Port Misp Object
Create network-connection Misp Object
Create Virustotal-Report Object
Download File
Publish Event
Unpublish Event
Upload File
Change
Palo Alto Next Gen Firewall : Version 28.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Ips to group
Block ips in policy
Block Urls
Edit Blocked Applications
Get Blocked Applications
Remove Ips from group
Unblock ips in policy
Unblock Urls
Change
Illusive Networks : Version 6.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Deceptive Items
Change
Freshworks Freshservice : Version 18.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Agent
Deactivate Agent
Update Agent
Change
Splunk : Version 64.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Submit Event
Change
AlgoSec : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Allow IP
Block IP
Wait for Change Request Status Update
Change
Salesforce : Version 17.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Case
Search Records
Change
RSA Archer : Version 14.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Incident Journal Entry
Create Incident
Get Incident Details
Update Incident
Change
QRadar : Version 66.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
QRadar AQL Search
QRadar Simple AQL Search
Update Offense
Change
Mimecast : Version 15.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Create Block Sender Policy
Change
Sumo Logic Cloud SIEM : Version 12.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Tags To Insight
Add Comment To Insight
Update Insight
Change
ArcSight : Version 45.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Resources
Change
Microsoft Teams : Version 35.0
Integration : Updated dependencies.
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Channel
Create Channel
Send Chat Message
Send Message Reply
Wait For Reply
Change
Service Desk Plus V3 : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Note
Add Note And Wait For Reply
Close Request
Create Alert Request
Create Request
Create Request - Dropdown Lists
Get Request
Update Request
Wait For Field Update
Wait For Status Update
Change
AWS CloudWatch : Version 9.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Log Group
Create Log Stream
Change
Endgame : Version 14.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Investigation Details
Change
Falcon Sandbox : Version 20.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Wait For Job and Fetch Report
Change
Google Cloud Recommender : Version 10.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Apply IAM Recommendations
Change
HTTP Rest API : Version 14.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Data
Post Data
Change
Google Threat Intelligence : Version 13.0
Improved loading for predefined widgets of the following actions:
Enrich Entities
Enrich IOC
Removed the usage of a deprecated API endpoint and the Retrieve AI Summary
parameter from the following action:
Submit File
Change
IntSights : Version 26.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Download Alert CSV
Google SecOps SIEM
Feature
Credential validation for third-party API feed types
Credential validation is now available for all 49 third-party API connectors.
When you create a feed using a third-party API feed type, Google SecOps now automatically validates the provided credentials. This ensures that if credentials are incorrect:
Immediate feedback : The web interface displays an error message explaining the configuration failure.
Prevention of broken feeds : The system blocks the creation of the feed until valid credentials are provided, preventing the creation of broken feeds that fail to ingest data later.
Looker
Announcement
Looker 26.6 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Sunday, March 22, 2026
Expected Looker (original) final deployment and download available: Sunday, April 5, 2026
Expected Looker (Google Cloud core) deployment start: Monday, March 23, 2026
Expected Looker (Google Cloud core) final deployment: Friday, April 3, 2026
Fixed
An issue has been fixed where creating or updating database connections that use OAuth (such as Snowflake or BigQuery) could fail with the error JDBC Parameter Validation Failed . This feature now performs as expected.
Fixed
When no theme is selected, the Theme picker will now display "Default" rather than "None".
Fixed
An issue has been fixed where dashboard themes were not applying color collections correctly. This feature now performs as expected.
Fixed
An issue has been fixed where buttons on dashboards that used the extension framework could unnecessarily add /embed/ to link URLs. This feature now performs as expected.
Fixed
An issue has been fixed where the font and background color picker was not accessible when you edited visualizations on merge queries. This feature now performs as expected.
Fixed
An issue has been fixed where opening the Interaction Details dialog on the Historical Analytics Interactions Search dashboard in a new window could result in a 401 error. This feature now performs as expected.
Fixed
An issue has been fixed where searching for content could return a 500 error. This feature now performs as expected.
Fixed
An issue has been fixed where pressing Enter to confirm IME composition when writing a message in Conversational Analytics would prematurely submit the message. This feature now performs as expected.
Fixed
An issue has been fixed where the LookML Assistant could return a 404 error. This feature now performs as expected.
Fixed
An issue has been fixed where tabs could be automatically added to existing dashboards. This feature now performs as expected.
Fixed
An issue has been fixed where visualization tooltips on dashboards could use incorrect background or text colors. This feature now performs as expected.
Fixed
An issue has been fixed where the LookML dashboards folder could fail to display the complete list of LookML dashboards. This feature now performs as expected.
Breaking
Tabbed dashboards with unsupported layouts will now display a warning message prompting users to update to a new layout .
Network Connectivity Center
Feature
Include and exclude spoke filters
for hybrid spokes are available in public preview .
You can use export filters to control which subnets or routes a spoke can
send to the hub. Import filters control which subnets or routes can be
accepted by a spoke from the hub.
Spanner
Feature
The Spark Spanner connector supports writing a Spark Dataframe to a Spanner
table using the Spark data source API. For more information, see
Use the Spark Spanner connector .
March 24, 2026
BigQuery
Feature
You can now use the BigQuery Data Transfer Service remote MCP
server to enable AI agents to
create, manage, and run data transfers. This feature is in
Preview .
Bigtable
Feature
You can manage Bigtable tiered storage
configuration in the Google Cloud console and view tiered storage metrics in
system insights .
For more information, see Create and manage tables .
Cloud Monitoring
Feature
The Telemetry API's supports up to 60,000 metric-ingestion requests per minute
per region. The regional quota replaces the global quota. To learn more, see
Telemetry API quotas and limits for metric ingestion .
Cloud NGFW
Feature
You can use the URL filtering service to filter your workload traffic by using
domain and Server Name Indication (SNI) information available in the egress
HTTP(S) messages. For more information, see
URL filtering service overview . This
feature is available in General Availability .
Cloud Router
Feature
Cloud Router supports named sets in Preview
for BGP route policies. Named sets are used to group together expressions of
either communities or BGP prefixes, allowing them to be managed or
referenced as a single entity. For more information, see
BGP route policies overview .
Cloud Storage
Announcement
Anywhere Cache has been renamed to Rapid Cache.
Cloud Trace
Feature
The Telemetry API supports trace ingestion of up to 2.4GB per minute for the
following regions:
asia-east1, asia-northeast1, asia-southeast1, and asia-south1
europe-west1, europe-west2, europe-west3, and europe-west4
us-central1, us-east4, and us-west1.
For all other regions, the Telemetry API supports trace ingestion of up to
300 MB per minute.
These regional byte-based quotas replace a global quota which limited the
number of requests per minute. To learn more, see
Telemetry API limits and quotas .
Compute Engine
Feature
Generally available : The maximum throughput for a Hyperdisk Balanced High
Availability disk is increased to 2,400 MiB/s from 1,200 MiB/s.
Hyperdisk Balanced High Availability provides high availability block storage for
mission-critical workloads by synchronously replicating data between two zones
within a region.
For more information, see Hyperdisk Balanced High Availability overview .
Confidential Space
Announcement
A new Confidential Space image (260300) is available.
Dataproc
Announcement
New Dataproc on Compute Engine subminor image versions :
2.1.112-debian11, 2.1.112-rocky8, 2.1.112-ubuntu20, 2.1.112-ubuntu20-arm
2.2.80-debian12, 2.2.80-rocky9, 2.2.80-ubuntu22, 2.2.80-ubuntu22-arm
2.3.27-debian12, 2.3.27-ml-ubuntu22, 2.3.27-rocky9, 2.3.27-ubuntu22, 2.3.27-ubuntu22-arm
Gemini Enterprise
Feature
Gemini Enterprise: Enhanced filtering for Microsoft OneDrive data stores (Preview)
You can configure filters for your Microsoft OneDrive data stores using either the Google Cloud console or the API. These filters allow you to define exactly which content is accessible to the Assistant by including or excluding specific OneDrive paths.
This feature is in Public Preview. For more information, see Set up a Microsoft OneDrive data store and Add filters to a Microsoft OneDrive data store .
Feature
Gemini Enterprise: Get insights with the Data Insights agent (GA with allowlist)
The Data Insights agent is a Made by Google agent that provides insights from
your BigQuery data.
This feature is available as a GA with allowlist.
Contact your Google Cloud sales representative to access this
feature.
For more information, see
Get insights with the Data Insights agent .
Generative AI on Vertex AI
Deprecated
Imagen generation GA endpoints deprecation
The following table describes image generation endpoints that are deprecated and
their replacements. We recommend updating your model endpoints before June 30,
2026, to avoid service disruption.
Discontinued endpoints
Recommended endpoint migration
imagegeneration@002
gemini-2.5-flash-image
imagegeneration@003
gemini-2.5-flash-image
imagegeneration@004
gemini-2.5-flash-image
imagegeneration@005
gemini-2.5-flash-image
imagegeneration@006
gemini-2.5-flash-image
imagetext@001
gemini-2.5-flash-image
imagen-3.0-capability-001
gemini-2.5-flash-image
imagen-3.0-capability-002
gemini-2.5-flash-image
imagen-3.0-fast-generate-001
gemini-2.5-flash-image
imagen-3.0-generate-001
gemini-2.5-flash-image
imagen-3.0-generate-002
gemini-2.5-flash-image
imagen-4.0-fast-generate-001
gemini-2.5-flash-image
imagen-4.0-generate-001
gemini-2.5-flash-image
imagen-4.0-ultra-generate-001
gemini-2.5-flash-image
Deprecated
Video generation GA endpoints deprecation
The following table describes video generation endpoints that are deprecated and
their replacements. We recommend updating your model endpoints before June 30,
2026, to avoid service disruption.
Discontinued endpoints
Recommended endpoint migration
veo-3.0-generate-001
veo-3.1-generate-001
veo-3.0-fast-generate-001
veo-3.1-fast-generate-001
veo-2.0-generate-001
veo-3.1-generate-001
Google Cloud Contact Center as a Service
Announcement
Google Cloud CCaaS 4.12
We've released version 4.12 of Google Cloud CCaaS.
The timing of the update to your instance depends on the deployment schedule
that you have chosen. For more information, see Deployment
schedules .
Feature
Support for creating chat virtual agents using CX Agent Studio
Contact Center AI Platform supports creating chat virtual agents using
Customer Experience Agent Studio
(CX Agent Studio). This expands on its existing support for creating voice virtual
agents with CX Agent Studio.
For more information, see Create and integrate Customer Experience Agent Studio
agents .
Feature
Callback fulfillment hours
You can configure callback fulfillment hours, which are the hours when your
contact center fulfills callbacks. If you enable callback rollovers to the next
day, callbacks that are scheduled outside of these hours are rolled over to the
next day. If you don't enable callback rollovers, callbacks that are scheduled
outside of these hours are canceled. Callback fulfillment hours aren't available
by default. To use this capability, ask your Google contact to turn it on for
your instance. For more information, see Callback fulfillment
hours .
Feature
Improved support for multiple agent matches for agent extension searches
When an end-user inputs an agent extension number at the beginning of a call and
there are multiple agent matches, the system now reads agent matches in groups
of eight. This gets the end-user to the correct agent faster. We've added the
following new extension directory messages to help guide the end-user to the
correct agent:
Multiple agents found
Search results next page
End of search results
For more information, see Extension directory
messages .
Feature
HubSpot lookup against company profiles
HubSpot integrations now support lookups against Company profiles.
Administrators can configure primary and secondary lookup objects, allowing the
system to search for end-users across both Contacts and Companies to ensure
accurate identification during active sessions.
For more information, see HubSpot lookup against company
profiles .
Feature
HubSpot: Mobile Phone Number Lookup
Admins can now enable mobile phone number lookups for HubSpot integrations to
ensure callers are accurately matched with existing contacts. To activate this,
navigate to Settings > Developer Settings > CRM and check the Mobile phone
number lookup box in the new Phone Number Lookup section. Once enabled,
the system will automatically search both the "Phone number" and "Mobile phone
number" fields in HubSpot during incoming voice or chat sessions. For more
information, see HubSpot mobile phone number
lookup .
Feature
Improved controls for predictive campaigns
We've added the following controls to predictive campaigns to reduce the risk of
call abandonment due to overdialing. These controls let you ramp up dialing
rates more naturally and consistently.
Max Calls Per Agent
Target Agent Occupancy
We've also made the Max Abandonment % setting optional, for campaigns that
don't require maintaining a maximum abandonment percentage.
Administrators: When you click Campaigns > Add Campaign
> Mode > Predictive , the new controls appear in the
Add Campaign dialog.
For more information, see Predictive
campaigns .
Feature
Resume chat endpoint
You can use the new chats/CHAT_ID/resume endpoint to resume chat sessions that
are in dismissed or va_dismissed status. Resumed chat sessions display the
chat history to both the end-user and the agent.
For more information, see
Resume a chat .
Fixed
The following issues were addressed in this release:
Fixed an issue for Zendesk users where using click-to-dial from a private
note failed to display existing tickets for outbound calls, forcing agents
to create new tickets.
Fixed an issue for Brightspeed users where the CRM link in the agent adapter
didn't open during calls or chats.
Fixed an issue where call recordings between agents and end-users didn't
upload to Salesforce promptly.
Fixed an issue where agents placing an outbound call couldn't select queues
from their parent team.
Fixed an issue where agent status durations continued to accrue even after
agents logged out or went offline.
Fixed an issue where web queue redirects didn't work with domains ending in
.today .
Fixed an issue in the Agent dashboard where team names with a forward
slash displayed the HTML character entity ( &#x2F; ) instead of the forward
slash.
Fixed an issue where changing agent status after completing wrap-up
displayed the wrap-up screen instead of the new status.
Fixed an issue where the default global contact list was missing, despite
being enabled, preventing end-users from accessing this directory.
Fixed an issue where virtual agent calls weren't recorded and uploaded to
external storage even when call recording was turned on.
Fixed an issue where outbound calls were incorrectly prompting for customer
satisfaction (CSAT) feedback when a menu was assigned.
Fixed an issue where the French Canadian translation for "wrap-up" was
inconsistent between the chat adapter and notes panel.
Fixed an issue where filtering agents by Team on the Agents tab resulted in
significant delays.
Fixed an issue where users were unable to download reports from the virtual
agent dashboard and chat history if the requested date range exceeded the
storage retention period.
Fixed an issue where SMS, WhatsApp, and AMB queues that were copied from Web
or IVR channels incorrectly inherited transfer restrictions, preventing
agents from transferring chats.
Fixed an issue where users were unable to upload a key when adding or
editing a redaction platform under developer settings.
Fixed an issue where call recording links were not being pushed to HubSpot
cases as expected.
Fixed an issue where agents intermittently failed to connect to incoming
calls and were immediately disconnected, causing calls to requeue or drop
unexpectedly.
Fixed an issue where chat and call queues appeared unavailable for transfers
when destination agents reached maximum capacity or were in an unavailable
status.
Fixed an issue where toggling the Whisper Announcement or Countdown settings
in Automatic Redirection would unintentionally disable the Customize
Greetings Announcement option.
Fixed an issue where callback selections made after a virtual agent handover
were not accurately reflected in downloadable reports.
Fixed an issue where the Available filter didn't display agents that
were available to receive a transfer.
Fixed an issue with Alvaria Workforce integrations where files were rejected
due to a random suffix added to the RECORDKEY value.
Fixed an issue where two end-users could be connected simultaneously to a
single agent during campaign calls.
Fixed an issue where the inactive chat dismissal timer did not reset after a
conversation was escalated from a virtual agent to a live agent queue.
Fixed an issue where transcript metadata files were sometimes stored in the
folder for the following day instead of matching the transcript file date,
ensuring all metadata and transcript files are now consistently organized by
the correct chat end date.
Fixed an issue where agents appeared available but were unable to receive or
be re-offered calls due to repeated WebSocket presence updates and
connection expirations.
Fixed an issue where Direct Access Points configured with SIP URIs
containing spaces or non-standard formats failed to route calls correctly.
Fixed an issue where the Agents tab filter in the UJET Portal displayed "All
undefined" and was unclickable, preventing manual agent selection.
Fixed an issue where managers could access queue reports requested by other
managers, even if they were not involved in the relevant queues.
Fixed an issue where searching by Location on the Users & Teams page could
return agents who no longer matched the search criteria. Search results now
accurately reflect current agent locations.
Fixed an issue where users did not see a message indicating that no time
slots were available when selecting a queue with no available time slots.
Fixed an issue where the fetch time slots endpoint incorrectly included
non-working days when calculating available future time slots.
Fixed an issue where call recordings failed to convert from MP3 to WAV,
preventing playback in Call Quality Assurance tools that require WAV format.
Fixed an issue where, after a warm call transfer, if Agent 1 left the call
and Agent 2 resumed the conversation, there was no audio between Agent 2 and
the end user.
Fixed a 500 Internal Server Error that occurred when administrators tried to
add a new language (for example, Danish) under the "Languages and Message"
settings. This error prevented the language from being added to the list.
Fixed an issue where the chat widget landmark was missing an accessible
label. The chat widget now includes an aria-label matching the chat button
label.
We have updated the session metadata to provide a strict distinction between
Escalations and Transfers. This ensures that reporting accurately reflects
the business context of how a session moves between resources. The session
metadata will now categorize these events as follows:
Escalation : Recorded only when a Virtual Agent transfers a session
to a Human Agent.
Transfer : Recorded for all other routing scenarios, including:
Human Agent > Human Agent
Virtual Agent > Virtual Agent (Support or Task)
Human Agent > Virtual Agent
Fixed an issue where updating a contact's mobile phone number during an
interaction would incorrectly overwrite the existing phone number field.
Fixed an issue where chats that ended due to end user timeout or
disconnection were incorrectly shown as "undefined" in the Interaction
Outcome column of platform reports.
Fixed an issue in WFM data where the handle count was showing incorrect
information if a chat spanned multiple intervals.
Fixed a data discrepancy in NICE WFM interval reports where chat metrics
(specifically ContactsReceived and HandledLong) were incorrectly showing
activity during time intervals where no chats actually occurred.
Fixed an issue where calls transferred using warm transfer to another queue
were incorrectly deflected due to overcapacity, resulting in a cold transfer
instead.
Fixed an issue where agents with multiple custom roles were incorrectly
prevented from changing to certain statuses due to role restriction logic.
Fixed an issue where changing the "Custom After Hours Deflection" setting in
queue configuration would incorrectly reset wrap up settings from "Queue" to
"Global."
Fixed an issue where users with custom roles and correct permissions for
Queues were unable to add teams.
Fixed an issue where the right-side columns on the outbound phone numbers
page were not visible and could not be accessed when the browser window was
too small.
Fixed a web SDK issue where the chat modal on Android Chrome was not
recognized by screen readers due to a missing dialog role.
Fixed a web SDK issue where elements behind the Text size menu overlay were
focusable, ensuring that keyboard focus now remains on the Text size menu
until it is dismissed by the user.
Fixed a web SDK issue where the "Request a call" option in the chat widget
was not accessible to screen reader or keyboard-only users.
Fixed an issue where agents were incorrectly presented with a manual
"Answer" button and placed in "Missed Call" status after a single missed
Deltacast, even when auto answer was enabled.
Fixed an issue where transferring a direct outbound call to a queue could
fail with a "Not Found" error, even when the target menu and agents were
available.
Fixed an issue where the disposition list was not displaying in the
configured custom order and instead appeared alphabetically in both Agent
Desktop and standard Agent Adapter.
Fixed an issue where the user inactivity timeout setting did not
consistently log out users as configured.
Fixed an issue where queue channels and menu options would intermittently
disappear or fail to load correctly due to delays in feature flag
initialization.
Fixed an issue where adding multiple agents to a team would fail if any
selected user was already a member, resulting in a vague error and no agents
being added.
Fixed an issue in Progressive Campaigns where agents were intermittently
connected to two outbound call targets simultaneously. This occurred when a
dial attempt terminated immediately but failed to detach from the conference
bridge before the next attempt connected.
Fixed an issue where deleting a queue that was the target of an automatic
redirection could cause transfer options to fail to load for agents.
Fixed an issue where adding multiple agents to a team would fail if any
selected user was already a member, resulting in a vague error and no agents
being added.
Fixed the following issues that occurred with dual-channel and segmented
call recordings:
Calls escalated from virtual agents weren't being recorded properly.
Recordings of conversations with transferred agents were missing.
Fixed an issue where chats escalated from a virtual agent to a human agent
queue were incorrectly set to auto answer.
Fixed an issue where the call recording warning message didn't play for
callbacks initiated by virtual agent escalation when the destination queue
exceeded capacity.
Fixed an issue where search results in the Directory tab of the
Transfer/Add party screen in the call adapter persisted after closing
and reopening the screen.
Fixed an issue where the call adapter displayed an error when the Call
button was clicked.
Fixed an issue where uploading an automatic-redirection audio recording in
one IVR queue caused the recording to incorrectly appear in a different IVR
queue.
Fixed an issue where custom agent statuses restricted to specific roles
weren't visible to users assigned those roles.
Fixed an issue where contacts added to an outbound campaign using the
/outbound_dialer/campaigns/CAMPAIGN_ID/contacts endpoint weren't dialed.
Fixed an issue where users who authenticated with Single Sign-On (SSO)
couldn't update their profiles due to an invalid password error.
Fixed an issue where the queue list on the Settings > Queues
page didn't load for instances with a large number of queues.
Fixed an issue where the interaction history in the agent adapter
incorrectly displayed as empty.
Fixed an issue where Salesforce account lookup settings couldn't be saved
when selecting the Person Account object and record types.
Fixed an issue in the chat adapter where the Previous Interactions
summary displayed duplicate section headings ( Customer Satisfaction and
Action ) and an incorrect section heading ( Label ).
Fixed an issue where team managers couldn't download agent reports when
selecting the All Agents filter.
Fixed an issue where the system didn't record the failure reason when a
virtual agent tried to escalate a chat to a human agent outside of
operating hours.
Fixed an issue where using the Bulk User Management tool to deactivate
users failed.
Fixed an issue where the Monitoring Chat screen displayed chats
incorrectly, with misaligned chat bubbles, incorrectly formatted bullets,
and missing sender names and timestamps.
Fixed an issue where the Directory screen in the call adapter appeared
empty when an agent tried to start an internal call transfer to another
agent.
Fixed an issue where agent prioritization for deltacast selection was
incorrect.
Fixed an issue that occurred when a human agent didn't respond to a
transferred or auto-answered session. The system incorrectly recorded the
termination reason as "agent stopped responding" instead of "timeout waiting
for agent message".
Fixed a web SDK issue where underscores in text (for example, in email
addresses like user_name@example.com) were incorrectly removed in messages
to end-users.
Fixed a web SDK issue for iOS users where the Yes and No buttons in
the survey request at the end of a chat were hidden.
March 23, 2026
Agent Assist
Feature
Agent Assist offers Gemini Enterprise for Customer Experience tools for AI coach in GA. These tools enable virtual agents to connect with external systems to retrieve, update, format, or analyze information.
BigQuery
Feature
The following functions are now
generally available
(GA):
AI.EMBED :
create embeddings from text or image data.
AI.SIMILARITY :
compute the semantic similarity between pairs of text, pairs of images, or
across text and images.
Feature
You can clean, transform, and enrich data from files in Cloud Storage and Google
Drive in your BigQuery data preparations. For more information, see
Prepare data with Gemini .
This feature is generally available
(GA).
Cloud Billing
Change
Billing account permissions now streamline access to Google payments
profiles and payments accounts
We've launched a billing IAM permissions update that simplifies
and streamlines Cloud Billing account access to the associated
Google payments profiles and accounts , for users who have the billing.accounts.updatePaymentInfo permission on their
Cloud Billing account.
Prior to this update : While working in the Cloud Billing console ,
to access and edit the associated Google payments profile and account
information, all Cloud Billing account users needed two sets of
permissions :
Identity and Access Management (IAM)
permissions on the Cloud Billing account
to access and manage the billing account.
Edit or Admin
access permissions on the associated Google payments profile
in order to add and edit payment methods, make a manual payment, and update
payments profile info such as the business name, address,
tax info, and payments account settings.
After this permissions update : Cloud Billing account users with
the billing.accounts.updatePaymentInfo permission on the billing account
can access and edit Google payments profile and account information
directly from the Cloud Billing console, without needing additional permissions on the payments profile itself.
This includes users with the
Billing Account Administrator role
( roles/billing.admin ) and those granted this permission via a
custom role .
Note that this permissions update applies only to Cloud Billing
accounts associated with an
Organization (or Business)
Google payments profile type. You can verify your account type on the
Payment settings
page in the Cloud Billing console.
With the billing.accounts.updatePaymentInfo permission on the billing account,
users can do the following:
View payments history and
documents related to the associated
Google payments profile.
Add and edit payment methods on a
self-serve (online) billing account.
Make a manual payment to a
self-serve (online) billing account.
Update payments profile info
such as the business name, address, tax info, and payments
account settings.
Billing account users with the billing.accounts.updatePaymentInfo permission
won't have the Manage users or Admin with all permissions level of access
on the Google payments profile. To fully manage a payments
profile and gain
Manage users and Admin permissions , billing account users still require additional
Google payments user permissions
granted on the associated payments profile.
Cloud Deploy
Feature
You can now analyze the performance of your deployed applications
using the monitoring platform of your choice and
automatically trigger actions
such as rollbacks. This feature is
generally available .
Feature
You can now provide user-defined actions using tasks .
This includes deploy hooks ,
deployment verification ,
analysis , and custom target types .
This feature is
generally available .
Cloud NGFW
Feature
Secure tags with a purpose-data attribute specifying a VPC network or an
organization now support VPC networks that are connected using VPC Network
Peering. For more information, see
Secure tags for firewalls .
This feature is available in General Availability .
Compute Engine
Feature
Preview : The instance flexibility policy of a managed instance group (MIG)
lets you override the minimum CPU platform and disk definition that is specified
in the MIG's instance template. With these overrides, you can select machine
types that run on different CPU platforms and that have different architectures.
For more information, see About instance flexibility in MIGs .
Container Optimized OS
Change
cos-125-19216-220-72
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Added support for the Lustre 2.14.0_p249 drivers.
Fixed
Added CPU balloon support for Arm CPUs.
Fixed
Upgraded app-admin/google-osconfig-agent to v20260119.00.
Fixed
Upgraded sys-apps/file to v5.47-r1.
Security
Fixed CVE-2025-71265 in the Linux kernel.
Security
Fixed CVE-2025-71266 in the Linux kernel.
Security
Fixed CVE-2025-71267 in the Linux kernel.
Security
Fixed CVE-2025-71268 in the Linux kernel.
Security
Fixed CVE-2026-23243 in the Linux kernel.
Security
Fixed CVE-2026-23254 in the Linux kernel.
Security
Fixed CVE-2026-23262 in the Linux kernel.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
Change
cos-121-18867-381-45
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.122
v27.5.1
v2.0.7
See List
Change
Added support for the Lustre 2.14.0_p249 drivers.
Fixed
Updated cos-gpu-installer to v2.6.1.
Fixed
Upgraded app-admin/google-osconfig-agent to v20260119.00.
Fixed
Upgraded sys-apps/file to v5.47-r1.
Security
Fixed CVE-2025-22026 in the Linux kernel.
Security
Fixed CVE-2025-69647 in binutils-libs.
Security
Fixed CVE-2025-69648 in binutils-libs.
Security
Fixed CVE-2026-23254 in the Linux kernel.
Security
Fixed KCTF-71e99ee in the Linux kernel.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
Change
cos-dev-133-19633-0-0
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.76
v27.5.1
v2.2.1
See List
Change
Added support for the Lustre 2.14.0_p249 drivers.
Feature
Added support for 8th generation TPU devices.
Fixed
Upgraded app-admin/google-osconfig-agent to v20260119.00.
Fixed
Upgraded chromeos-base/google-breakpad to v2026.03.03.162944-r270.
Fixed
Upgraded dev-libs/expat to v2.7.4.
Fixed
Upgraded net-firewall/iptables to v1.8.13.
Fixed
Upgraded sys-apps/file to v5.47-r1.
Security
Fixed KCTF-c9bc175 in the Linux kernel.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
Change
cos-117-18613-534-44
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.123
v24.0.9
v1.7.29
See List
Change
Added support for the Lustre 2.14.0_p249 drivers.
Fixed
Updated cos-gpu-installer to v2.6.1.
Fixed
Upgraded sys-apps/file to v5.47-r1.
Security
Fixed CVE-2026-23231 in the Linux kernel.
Security
Fixed CVE-2026-23243 in the Linux kernel.
Security
Fixed CVE-2026-23254 in the Linux kernel.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
Change
cos-113-18244-582-47
Kernel
Docker
Containerd
GPU Drivers
COS-6.1.161
v24.0.9
v1.7.27
See List
Fixed
Upgraded sys-apps/file to v5.47-r1.
Security
Fixed CVE-2024-26822 in the Linux kernel.
Security
Fixed CVE-2025-69647 in binutils-libs.
Security
Fixed CVE-2026-23243 in the Linux kernel.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
Document AI
Feature
Custom classifier models
pretrained-classifier-v1.6-2026-03-09 and pretrained-classifier-v1.6-pro-2026-03-09
are available in Preivew .
Feature
Custom splitter models
pretrained-splitter-v1.6-2026-03-09 and pretrained-splitter-v1.6-pro-2026-03-09
are available in Preview .
Firestore
Feature
Regional and Multi-Regional endpoints for the Firestore API
are now Generally Available ( GA ).
You can use a Regional or a Multi-Regional endpoint to ensure that your
application's requests are transmitted, stored and processed in the same region
or multi-region as your database's location.
To learn more, see the
Firestore regional endpoints
guide.
You can also use
Private Service Connect regional endpoints
and Private Service Connect backends
to connect to the regional and the multi-regional endpoints of the
Firestore API.
Firestore in Datastore mode
Feature
Regional and Multi-Regional endpoints for the Datastore API
are now Generally Available ( GA ).
You can use a Regional or a Multi-Regional endpoint to ensure that your
application's requests are transmitted, stored and processed in the same region
or multi-region as your database's location.
To learn more, see the
Datastore regional endpoints
guide.
You can also use
Private Service Connect regional endpoints
and Private Service Connect backends
to connect to the regional and the multi-regional endpoints of the
Datastore API.
Gemini Enterprise
Feature
Gemini Enterprise: Data connector for Docusign (Preview)
You can connect Docusign data stores to Gemini Enterprise.
Support for Docusign data stores is in Public Preview. For more information,
see Connect Docusign .
Google Distributed Cloud (software only) for VMware
Announcement
Google Distributed Cloud (software only) for VMware 1.33.600-gke.39 is now available
for download. To upgrade, see Upgrade clusters .
Google Distributed Cloud 1.33.600-gke.39 runs on Kubernetes v1.33.5-gke.2200.
If you are using a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release.
After a release, it takes approximately 7 to 14 days for the version to become
available for use with GKE On-Prem API clients: the Google Cloud console, the
gcloud CLI, and Terraform.
Fixed
The following issues were fixed in 1.33.600-gke.39:
Fixed an issue where the node-problem-detector was incorrectly deployed onto
non-Advanced (V1) VMware clusters, causing the containerd runtime to
continuously restart on affected nodes, leading to ETCD/CRI failures and
unsuccessful cluster upgrades.
Fixed an issue where setting the deprecated stackdriver.enableVPC field to
true in a cluster configuration file would block upgrades to an Advanced
Cluster. The stackdriver.enableVPC field has been deprecated and its setting is
now ignored during the upgrade validation process.
Fixes an issue where Advanced Clusters incorrectly deployed the node problem
detector onto non-Advanced clusters, which caused containerd to continuously
restart and led to cluster upgrade failures.
Fixed an issue where retrying the gkectl upgrade admin command after a
previous failure could fail with "AlreadyExists" errors in the bootstrap cluster.
Fixed an issue where cluster creation or upgrade failed if the proxy or
noProxy configuration fields contained extraneous whitespaces. These spaces
interfered with internal command-line argument parsing, causing the control
plane load balancer initialization to fail.
Fixed an issue where the system certificate pool was ignored when a custom CA
certificate was configured for a registry mirror.
Google Distributed Cloud (software only) for bare metal
Announcement
Google Distributed Cloud (software only) for bare metal 1.33.600-gke.39 is now available for
download. To upgrade, see Upgrade clusters .
Google Distributed Cloud for bare metal
1.33.600-gke.39 runs on Kubernetes v1.33.5-gke.2200.
After a release, it takes approximately 7 to 14 days for the version to become
available for installations or upgrades with the GKE On-Prem API clients: the
Google Cloud console, the gcloud CLI, and Terraform.
If you use a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release of Google Distributed Cloud for bare metal.
Fixed
The following issues were fixed in 1.33.600-gke.39:
Resolved an issue where Certificate Authority (CA) rotation became stuck
on self-managed clusters (admin, hybrid, or standalone). This fix resolves an
internal resource synchronization error that previously prevented the rotation
process from completing successfully.
Fixed vulnerabilities listed in Vulnerability fixes .
Google SecOps
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Cisco Umbrella Cloud Firewall logs
Collect Cisco Umbrella IP logs
Collect Claroty xDome for Healthcare logs
Collect CloudM logs
Collect Digital Guardian EDR logs
Collect DNSFilter logs
Collect Dope Security SWG logs
Collect Druva Backup logs
Collect EfficientIP DDI logs
Collect Elastic Defend logs
Collect Elastic Windows Event Log Beats logs
Collect Ergon Informatik Airlock IAM logs
Collect ESET Threat Intelligence logs
Collect F5 Distributed Cloud Services logs
Collect F5 Shape logs
Collect F5 Silverline logs
Collect Falco IDS logs
Collect Fastly CDN logs
Collect File Scanning Framework logs
Collect FireEye ETP logs
Collect FireEye HX Audit logs
Collect FireEye NX Audit logs
Collect Fivetran logs
Collect Forcepoint Mail Relay logs
Collect GitGuardian Enterprise logs
Collect Google Cloud Looker audit logs
Collect Guardicore Centra logs
Collect HCL BigFix logs
Collect HID DigitalPersona logs
Collect IBM AS/400 logs
Collect IBM Informix logs
Collect IBM MaaS360 logs
Collect IBM Mainframe Storage logs
Collect IBM OpenPages logs
Collect IBM Security Access Manager logs
Collect IBM Security Identity Manager logs
Collect iBoss Web Proxy logs
Collect Intel 471 Watcher Alerts logs
Collect Intel Endpoint Management Assistant logs
Collect IONIX Attack Surface Management logs
Collect Island Enterprise Browser logs
Collect Jamf Protect Telemetry V2 logs
Collect Keycloak logs
Collect Kong Gateway logs
Collect LenelS2 OnGuard logs
Collect Lookout Mobile Endpoint Security logs
Collect Lucid audit logs
Collect ManageEngine Exchange Reporter Plus logs
Collect Mandiant Threat Intelligence Custom IOC logs
Collect Menlo Security Isolation Platform (MSIP) logs
Collect Metabase logs
Collect Microsoft Defender for Endpoint on iOS logs
Collect Microsoft Dynamics 365 User Activity logs
Collect Microsoft IAS / Network Policy Server (NPS) logs
Collect Microsoft Network Policy Server (NPS) logs
Collect OAuth2 Proxy logs
Collect Office 365 Message Trace logs
Collect Progress MOVEit Transfer logs
Collect Netscout Arbor Sightline logs
Collect Skyhigh Secure Web Gateway (On-Premises) logs
Collect ThreatDown EDR logs
Collect Trellix Endpoint Security (HX) alert logs
Collect Trellix Endpoint Security (HX) audit event logs
Collect Trellix Endpoint Security (HX) host inventory logs
Google SecOps SIEM
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Cisco Umbrella Cloud Firewall logs
Collect Cisco Umbrella IP logs
Collect Claroty xDome for Healthcare logs
Collect CloudM logs
Collect Digital Guardian EDR logs
Collect DNSFilter logs
Collect Dope Security SWG logs
Collect Druva Backup logs
Collect EfficientIP DDI logs
Collect Elastic Defend logs
Collect Elastic Windows Event Log Beats logs
Collect Ergon Informatik Airlock IAM logs
Collect ESET Threat Intelligence logs
Collect F5 Distributed Cloud Services logs
Collect F5 Shape logs
Collect F5 Silverline logs
Collect Falco IDS logs
Collect Fastly CDN logs
Collect File Scanning Framework logs
Collect FireEye ETP logs
Collect FireEye HX Audit logs
Collect FireEye NX Audit logs
Collect Fivetran logs
Collect Forcepoint Mail Relay logs
Collect GitGuardian Enterprise logs
Collect Google Cloud Looker audit logs
Collect Guardicore Centra logs
Collect HCL BigFix logs
Collect HID DigitalPersona logs
Collect IBM AS/400 logs
Collect IBM Informix logs
Collect IBM MaaS360 logs
Collect IBM Mainframe Storage logs
Collect IBM OpenPages logs
Collect IBM Security Access Manager logs
Collect IBM Security Identity Manager logs
Collect iBoss Web Proxy logs
Collect Intel 471 Watcher Alerts logs
Collect Intel Endpoint Management Assistant logs
Collect IONIX Attack Surface Management logs
Collect Island Enterprise Browser logs
Collect Jamf Protect Telemetry V2 logs
Collect Keycloak logs
Collect Kong Gateway logs
Collect LenelS2 OnGuard logs
Collect Lookout Mobile Endpoint Security logs
Collect Lucid audit logs
Collect ManageEngine Exchange Reporter Plus logs
Collect Mandiant Threat Intelligence Custom IOC logs
Collect Menlo Security Isolation Platform (MSIP) logs
Collect Metabase logs
Collect Microsoft Defender for Endpoint on iOS logs
Collect Microsoft Dynamics 365 User Activity logs
Collect Microsoft IAS / Network Policy Server (NPS) logs
Collect Microsoft Network Policy Server (NPS) logs
Collect OAuth2 Proxy logs
Collect Office 365 Message Trace logs
Collect Progress MOVEit Transfer logs
Collect Netscout Arbor Sightline logs
Collect Skyhigh Secure Web Gateway (On-Premises) logs
Collect ThreatDown EDR logs
Collect Trellix Endpoint Security (HX) alert logs
Collect Trellix Endpoint Security (HX) audit event logs
Collect Trellix Endpoint Security (HX) host inventory logs
Looker
Announcement
To enhance security, the Looker language SDKs and the Looker API /login endpoint are being modified. They will exclusively accept passing credentials in the HTTP request body and will no longer support using URL query parameters.
Release date : This update is expected to take effect with the Looker 26.18 release in October 2026.
Potential impact : Any scripts or applications currently passing credentials in the URL query parameters in the Looker SDK libraries, or directly calling the /login API endpoint, will fail after this update.
Who is affected : All customers using Looker SDKs, custom scripts, or applications that call the /login API endpoint directly.
Action required :
We have sent a message to your affected customers. However, to help avoid service disruptions, please recommend that they evaluate their environment and take the following actions before October 2026:
Upgrade SDKs: Upgrade the Looker SDKs to version 26.4 or later as soon as possible.
Update custom scripts: Modify any scripts or applications that rely on passing Looker API credentials in URL query parameters so that they will pass credentials in the HTTP request body.
Test the environment: Validate these changes in an environment that can identify these potential misconfigurations.
VPC Service Controls
Feature
Preview stage support
for the following integration:
Oracle Database@Google Cloud
March 20, 2026
AlloyDB for PostgreSQL
Feature
AlloyDB lets you monitor node-level metrics in Google Cloud console
and Metrics Explorer to provide detailed troubleshooting guidance for read
pools and to identify nodes causing performance regressions. For more
information, see System insights metrics reference .
Batch
Feature
Flex-start VMs and calendar-mode reservations are generally available
( GA ).
Both consumption options use
Dynamic Workload Scheduler pricing ,
which offers discounts of up to 53% off of on-demand pricing.
For more information, see Create and run a job that uses GPUs
and Ensure resource availability using VM reservations .
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL now supports minor version
8.0.45 .
To upgrade your existing instance to the new minor version, see
Upgrade the database minor version .
Dataproc
Announcement
New Serverless for Apache Spark runtime versions :
1.2.76
2.2.76
2.3.29
3.0.12
Google Distributed Cloud (software only) for VMware
Change
Important: Mandatory flag for admin cluster upgrades
If an update or upgrade to advanced admin clusters fails in versions 1.32 and newer, don't delete the external bootstrap cluster from the workstation. The bootstrap cluster contains required information about states that you need to resume the update or upgrade. If an update or upgrade to admin clusters fails, and you re-run gkectl upgrade admin , you must add the flag --reuse-bootstrap-cluster or you can lose critical data.
Google SecOps
Feature
View Triage and Investigation Agent (TIN) results in the Case Summary
This feature is currently in Preview and is part of a gradual rollout.
You can now view TIN results and verdict summaries directly within the Case Summary view. This integration provides real-time progress updates and automated verdicts for true or false positives without leaving the case.
For more information, see Use Triage and Investigation Agent (TIN) to investigate alerts .
Feature
Agentic Automation
This feature is in Public Preview.
You can now use Agentic Automation to embed AI Agents directly into your workflows. This feature lets you integrate AI-driven capabilities into your existing playbooks while staying in charge of critical actions by combining agents with deterministic automation steps.
For more information, see Agentic Automation .
Looker
Feature
A new version of the Looker mobile app is available for iOS (version 2.2.0) and Android (version 2.0.88). The mobile app now includes the following features and improvements:
The app supports tabbed dashboards.
You can open dashboard links directly in the app.
Load time has been improved.
Dashboard opening zoom bugs and other issues have been fixed.
March 19, 2026
Access Approval
Feature
Flow Analyzer is generally available
(GA) .
Access Transparency
Feature
Flow Analyzer is generally available (GA) .
Apigee X
Announcement
On March 19th, 2026, we began maintenance updates of Apigee instances configured for maintenance windows .
If you set a preferred window for maintenance for your instance, and your instance version is
below 1-16-0-apigee-6 , your instance will be updated to 1-16-0-apigee-6 within the
next seven to 21 days. A notification containing the expected date of upgrade will be sent within the next two business days.
Note: Instances that meet either of the following two criteria will not be updated:
Your instance has a DNS misconfiguration, as described in Known Issue 445936920 .
Your instance uses an Apigee Java Library that has been removed, as described in Apigee release notes dated October 16, 2025 .
For more information on participating in scheduled maintenance windows, see Maintenance overview and Manage Apigee instance maintenance windows .
BigQuery
Feature
You can now use a custom organization policy
to allow or deny specific operations on routines. This feature is in
preview .
Cloud Composer
Announcement
Cloud Composer 2 environments can no longer be created in
Berlin (europe-west10) and Dallas (us-south1). We're switching these regions to
supporting only Cloud Composer 3 environments. Existing Cloud Composer 2
environments in these regions aren't affected by this change.
Change
(Airflow 3.1.7 in Cloud Composer 3)
The apache-airflow-providers-cncf-kubernetes package was
upgraded to version 10.14.0 .
For changes in other packages, see the
preinstalled packages changelog .
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.7-build.2
composer-3-airflow-2.10.5-build.31 (default)
composer-3-airflow-2.9.3-build.51
Change
New images
are available in Cloud Composer 2:
composer-2.16.8-airflow-2.10.5 (default)
composer-2.16.8-airflow-2.9.3
Cloud Trace
Feature
Google Cloud Observability has expanded the supported locations for observability buckets,
which store your trace data, to include the following:
africa-south1
asia-east1
asia-east2
asia-northeast2
asia-northeast3
asia-south1
asia-south2
asia-southeast2
asia-southeast3
australia-southeast2
europe-north2
europe-west1
europe-west4
europe-west6
europe-west8
me-central1
northamerica-northeast2
northamerica-south1
southamerica-west1
us-east5
us-south1
us-west2
us-west3
For a list of supported locations, see
Locations for observability buckets .
Feature
You can create alerting policies that monitor the results of your SQL
queries. For more information, see
Monitor your SQL query results with an alerting policy .
This feature is in public preview.
Compute Engine
Breaking
Changed : The following operations on the boot disk of a Compute Engine instance
that has a service account attached require the iam.serviceAccounts.actAs permission
on the service account. In the following list, the boot disk of such an instance is
referred to as the source disk .
Creating a standard or archive snapshot of the source disk, including application
consistent snapshots
Cloning the source disk
Creating a machine image of the instance
Creating a custom image of the source disk
Starting asynchronous replication of the source disk to another region
Creating a new disk when you create an instance, if the new disk is
created from an instant snapshot of the source disk
If you have already have the Compute Instance Admin (v1)
( roles/compute.instanceAdmin.v1 ) role and the Service Account User (v1)
( roles/iam.serviceAccountUser ) role on the project, no action is required.
Otherwise, ask your administrator to grant you the iam.serviceAccounts.actAs
permission on the service account. For instructions, see
Manage access to other resources .
Spanner
Feature
Spanner now offers AI functions ,
as a part of machine learning functions, that help you perform semantic
operations using Large Language Models (LLMs) in SQL to classify, evaluate, and
rank your data:
AI.CLASSIFY :
Classify a natural language input into user-defined categories.
AI.IF : Evaluate a
condition described in natural language.
AI.SCORE : Rate
natural language input and assign it a score.
March 18, 2026
Cloud Database Migration Service
Announcement
Database Migration Service for heterogeneous SQL Server migrations now supports
failback migration jobs in
Preview .
Failback migrations let you push CDC updates back to the original SQL Server
source from the destination PostgreSQL database after you complete the standard
migration. This feature keeps your original source database alive and up to date in case
you need to switch your application back to the source SQL Server database.
For more information, see the page relevant for your migration scenario:
Failback migration guide for SQL Server to Cloud SQL for PostgreSQL
Failback migration guide for SQL Server to AlloyDB for PostgreSQL
Dataproc
Announcement
New Dataproc on Compute Engine subminor image versions :
2.1.111-debian11, 2.1.111-rocky8, 2.1.111-ubuntu20, 2.1.111-ubuntu20-arm
2.2.79-debian12, 2.2.79-rocky9, 2.2.79-ubuntu22, 2.2.79-ubuntu22-arm
2.3.26-debian12, 2.3.26-ml-ubuntu22, 2.3.26-rocky9, 2.3.26-ubuntu22, 2.3.26-ubuntu22-arm
Fixed
Fixed CVEs CVE-2025-58057, CVE-2025-53864, CVE-2025-68161, CVE-2025-48924, and CVE-2025-33042.
Upgraded Dataproc Metastore Proxy to v0.0.78 to fix CVEs.
Default JDK is set to Temurin JDK - 11.0.30 in all 2.1 , 2.2 and 2.3 images.
Google Distributed Cloud (software only) for VMware
Fixed
The following issues were fixed in 1.34.200-gke.68:
Fixed vulnerabilities listed in Vulnerability fixes .
Google Distributed Cloud (software only) for VMware V2 (Advanced Clusters) versions 1.31
and earlier were missing a configuration step in the node startup script that
defined the Docker default bridge IP range. As a result, Docker defaulted to
using the 172.17.0.0/16 (and in some cases 172.16.0.0/16) address range.
Fixed an issue where an admin cluster upgrade appeared to be stuck indefinitely
and users would see the VSphereMachine remaining in the Creating phase
without actionable error messages.
Announcement
Google Distributed Cloud (software only) for VMware 1.34.200-gke.68 is now available
for download. To upgrade, see Upgrade clusters .
Important: There is a mandatory flag for admin cluster upgrades; see the updated entry for March 20, 2026 .
Google Distributed Cloud 1.34.200-gke.68 runs on Kubernetes v1.34.3-gke.400.
If you are using a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release.
After a release, it takes approximately 7 to 14 days for the version to become
available for use with GKE On-Prem API clients: the Google Cloud console, the
gcloud CLI, and Terraform.
Google Distributed Cloud (software only) for bare metal
Announcement
Google Distributed Cloud (software only) for bare metal 1.34.200-gke.68 is now available for
download. To upgrade, see Upgrade clusters .
Google Distributed Cloud for bare metal
1.34.200-gke.68 runs on Kubernetes v1.34.3-gke.400.
After a release, it takes approximately 7 to 14 days for the version to become
available for installations or upgrades with the GKE On-Prem API clients: the
Google Cloud console, the gcloud CLI, and Terraform.
If you use a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release of Google Distributed Cloud for bare metal.
Fixed
The following issues were fixed in 1.34.200-gke.68:
Fixed vulnerabilities listed in Vulnerability fixes .
Google Kubernetes Engine
Change
(2026-R11) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for
manual control plane upgrades and node upgrades for existing clusters. For more
information about versioning and upgrades, see GKE versioning and
support and About GKE
cluster upgrades .
Rapid channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.2-gke.1269001 is now the default version for cluster creation in the Rapid channel.
The following versions are now available in the Rapid channel:
1.32.13-gke.1090000
1.33.9-gke.1117000
1.34.5-gke.1153000
1.35.2-gke.1269001
1.35.2-gke.1485000
The following versions are no longer available in the Rapid channel:
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.1-gke.1396001
1.35.2-gke.1269000 is deprecated in the Rapid channel. This version will be removed in 90 days, or at the end of support, if sooner.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.13-gke.1059000
1.32 to 1.33.9-gke.1060000
1.33 to 1.34.5-gke.1076000
1.34 to 1.35.2-gke.1269001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.13-gke.1059000
1.33 to 1.33.9-gke.1060000
1.34 to 1.34.5-gke.1076000
1.35 to 1.35.2-gke.1269001
Regular channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1130000 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.1-gke.1396002
The following versions are no longer available in the Regular channel:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2745005 is deprecated in the Regular channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.0-gke.3047002 is deprecated in the Regular channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.1-gke.1396001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1076000
1.32 to 1.33.8-gke.1112000
1.33 to 1.34.4-gke.1130000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1076000
1.33 to 1.33.8-gke.1112000
1.34 to 1.34.4-gke.1130000
1.35 to 1.35.1-gke.1396002
Stable channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.5-gke.2469000 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
The following versions are no longer available in the Stable channel:
1.32.11-gke.1211000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.5-gke.2392000
1.34.3-gke.1318000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1264000
1.32 to 1.33.5-gke.2469000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1264000
1.33 to 1.33.5-gke.2469000
1.34 to 1.34.3-gke.1444000
Extended channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1130000 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.2117000
1.30.14-gke.2154000
1.30.14-gke.2215000
1.31.14-gke.1476000
1.31.14-gke.1526000
1.31.14-gke.1599000
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.1-gke.1396002
The following versions are no longer available in the Extended channel:
1.30.14-gke.2026000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2071000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2192000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1376000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1423000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1576000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2745005 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.0-gke.3047002 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.1-gke.1396001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.29 to 1.30.14-gke.2117000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.30 to 1.30.14-gke.2117000
1.31 to 1.31.14-gke.1476000
1.32 to 1.32.12-gke.1076000
1.33 to 1.33.8-gke.1112000
1.34 to 1.34.4-gke.1130000
1.35 to 1.35.1-gke.1396002
No channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1130000 is now the default version for cluster creation.
The following versions are now available:
1.32.13-gke.1090000
1.33.9-gke.1117000
1.34.5-gke.1153000
1.35.1-gke.1396002
1.35.2-gke.1269001
1.35.2-gke.1485000
The following node versions are now available:
1.30.14-gke.2215000
1.31.14-gke.1599000
1.32.13-gke.1090000
1.33.9-gke.1117000
1.34.5-gke.1153000
1.35.1-gke.1396002
1.35.2-gke.1269001
1.35.2-gke.1485000
The following versions are no longer available:
1.32.11-gke.1211000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.33.5-gke.2326000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.34.3-gke.1318000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.35.0-gke.2745005 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.35.0-gke.3047001 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.35.0-gke.3047002 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.35.2-gke.1269000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1076000
1.32 to 1.33.5-gke.2469000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1076000
1.33 to 1.33.5-gke.2469000
1.34 to 1.34.4-gke.1130000
1.35 to 1.35.1-gke.1396002
Security
(2026-R11) Security updates
This release includes new GKE versions that use updated
Container-Optimized OS images. These updated images are cumulative,
incorporating security fixes from all Container-Optimized OS
versions released since the previous GKE release.
To identify the specific vulnerabilities that were resolved in each updated
Container-Optimized OS image, see the Security release notes
for that image. The following table includes links to the release notes for
each updated Container-Optimized OS image:
GKE version
Container-Optimized OS version
Details
1.34.5-gke.1153000
cos-125-19216-220-57
cos-125-19216-220-57 release notes
1.35.2-gke.1485000
cos-125-19216-220-57
cos-125-19216-220-57 release notes
Change
(2026-R11) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.5-gke.2469000 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
The following versions are no longer available in the Stable channel:
1.32.11-gke.1211000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.5-gke.2392000
1.34.3-gke.1318000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1264000
1.32 to 1.33.5-gke.2469000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1264000
1.33 to 1.33.5-gke.2469000
1.34 to 1.34.3-gke.1444000
Change
(2026-R11) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1130000 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.1-gke.1396002
The following versions are no longer available in the Regular channel:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2745005 is deprecated in the Regular channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.0-gke.3047002 is deprecated in the Regular channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.1-gke.1396001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1076000
1.32 to 1.33.8-gke.1112000
1.33 to 1.34.4-gke.1130000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1076000
1.33 to 1.33.8-gke.1112000
1.34 to 1.34.4-gke.1130000
1.35 to 1.35.1-gke.1396002
Change
(2026-R11) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.2-gke.1269001 is now the default version for cluster creation in the Rapid channel.
The following versions are now available in the Rapid channel:
1.32.13-gke.1090000
1.33.9-gke.1117000
1.34.5-gke.1153000
1.35.2-gke.1269001
1.35.2-gke.1485000
The following versions are no longer available in the Rapid channel:
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.1-gke.1396001
1.35.2-gke.1269000 is deprecated in the Rapid channel. This version will be removed in 90 days, or at the end of support, if sooner.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.13-gke.1059000
1.32 to 1.33.9-gke.1060000
1.33 to 1.34.5-gke.1076000
1.34 to 1.35.2-gke.1269001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.13-gke.1059000
1.33 to 1.33.9-gke.1060000
1.34 to 1.34.5-gke.1076000
1.35 to 1.35.2-gke.1269001
Change
(2026-R11) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1130000 is now the default version for cluster creation.
The following versions are now available:
1.32.13-gke.1090000
1.33.9-gke.1117000
1.34.5-gke.1153000
1.35.1-gke.1396002
1.35.2-gke.1269001
1.35.2-gke.1485000
The following node versions are now available:
1.30.14-gke.2215000
1.31.14-gke.1599000
1.32.13-gke.1090000
1.33.9-gke.1117000
1.34.5-gke.1153000
1.35.1-gke.1396002
1.35.2-gke.1269001
1.35.2-gke.1485000
The following versions are no longer available:
1.32.11-gke.1211000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.33.5-gke.2326000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.34.3-gke.1318000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.35.0-gke.2745005 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.35.0-gke.3047001 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.35.0-gke.3047002 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
1.35.2-gke.1269000 is deprecated . This version will be removed in 90 days, or at the end of support, if sooner.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1076000
1.32 to 1.33.5-gke.2469000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1076000
1.33 to 1.33.5-gke.2469000
1.34 to 1.34.4-gke.1130000
1.35 to 1.35.1-gke.1396002
Change
(2026-R11) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1130000 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.2117000
1.30.14-gke.2154000
1.30.14-gke.2215000
1.31.14-gke.1476000
1.31.14-gke.1526000
1.31.14-gke.1599000
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.1-gke.1396002
The following versions are no longer available in the Extended channel:
1.30.14-gke.2026000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2071000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2192000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1376000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1423000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1576000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2745005 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.0-gke.3047002 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.1-gke.1396001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.29 to 1.30.14-gke.2117000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.30 to 1.30.14-gke.2117000
1.31 to 1.31.14-gke.1476000
1.32 to 1.32.12-gke.1076000
1.33 to 1.33.8-gke.1112000
1.34 to 1.34.4-gke.1130000
1.35 to 1.35.1-gke.1396002
Google SecOps
Feature
Bindplane features for Google SecOps general availability
The following Bindplane features that relate to Google SecOps are now in General Availability (GA):
Single sign-on with custom claims role mapping : gives a production-ready way to manage Bindplane access through your identity provider. For more information, see Single Sign-On (Cloud) .
SecOps parser validator : validates that your logs will be parsed correctly by Google SecOps directly from the snapshot view. Get immediate feedback on parsed events or validation errors without waiting for data to appear in Google SecOps. For more information, see Validate SecOps Parser .
Forwarder migration tool : provides production-ready paths to migrate existing forwarder configurations into Bindplane-managed pipelines. For more information, see Migrate Configurations .
Google SecOps Marketplace
Feature
Microsoft Graph Mail : Version 37.0
A new predefined widget has been added to following action:
Delete Email
Feature
CrowdStrike Falcon : Version 73.0
The following new action has been added:
Hide Hosts
Feature
Endgame : Version 73.0
New predefined widgets have been added to following actions:
Get Endpoints
Get Host Isolation Config
Hunt File
Hunt IP
Hunt Process
Hunt Registry
Hunt User
List Investigations
Feature
Microsoft Graph Security : Version 24.0
A new predefined widget has been added to following action:
List Incidents
Change
Azure Security Center : Version 14.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Regulatory Standards
List Regulatory Standard Controls
Change
Zoho Desk : Version 9.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Ticket Details
Change
Stellar Cyber Starlight : Version 17.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Advanced Search
Simple Search
Change
Siemplify ThreatFuse : Version 17.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Related Associations
Get Related Domains
Get Related Email Addresses
Get Related Hashes
Get Related IPs
Get Related URLs
Submit Observables
Change
Devo : Version 10.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Advanced Query
Simple Query
Change
AWS CloudWatch : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Log Groups
List Log Streams
Search Log Events
Change
ZScaler : Version 11.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Url Categories
Change
Google Workspace : Version 24.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Members To Group
Block Extension
Create Group
Create OU
Create User
Delete Extension
List Group Members
List OU Of Account
List Users
Update OU
Update User
Change
Azure Active Directory : Version 23.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Groups
List Members in the Group
Change
Trend Micro Cloud App Security : Version 9.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Entity Email Search
Change
Tanium : Version 16.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Task Details
List Connections
Change
Intezer : Version 11.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Detonate File
Detonate Hash
Detonate URL
Get File Report
Get URL Report
Index File
Change
RSA NetWitness : Version 18.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Run General Query
Change
MongoDB : Version 8.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Free Query
Change
Exchange : Version 120.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Block Sender by Message ID
Delete Mail
Download Attachments
Extract EML Data
List Exchange-Siemplify Inbox Rules
Move Mail To Folder
Search Mails
Unblock Sender by Message ID
Change
ThreatQ : Version 16.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Events
List Related Objects
Change
RSA NetWitness Platform : Version 14.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Run General Query
Change
Carbon Black Response : Version 36.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Binary Free Query
Process Free Query
Change
Symantec Endpoint Protection : Version 19.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Report And Enrich
GetReport
ListEndpoints
ListGroups
Change
AlienVault USM Anywhere : Version 33.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Events
Change
Mandiant Digital Threat Monitoring : Version 5.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Update Alert
Change
FireEye CM : Version 12.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Download Custom Rules File
Download Quarantined Email
List IOC Feeds
List Quarantined Emails
Change
Google Threat Intelligence : Version 11.0
Updated is_suspicious and is_risky logic handling in the following
actions:
Enrich Entities
Submit File
Change
Shodan : Version 14.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Search
SearchForExploits
Change
Snowflake : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Custom Query
Execute Simple Query
Change
Proofpoint Threat Protection : Version 2.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Allow List Entries
Get Block List Entries
Change
Vectra : Version 11.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Triage Rule Details
Change
MSSQL : Version 18.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
RunSQLQuery
Change
Rapid7 InsightVm : Version 13.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Scans
Change
ServiceNow : Version 60.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Attachment
Download Attachments
Get Child Incident Details
Get CMDB Record Details
Get User Details
List CMDB Records
List Record Comments
Wait For Comments
Change
CiscoUmbrella : Version 16.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Top Domains
Change
RSA NetWitness EDR : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add IP To Blacklist
Add URL To Blacklist
Change
Microsoft 365 Defender : Version 24.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Custom Query
Execute Entity Query
Execute Query
Change
Easy Vista : Version 6.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get EasyVista Ticket
Change
Sumologic : Version 18.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Search
Change
Symantec Endpoint Security Complete Cloud : Version 6.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Device Groups
Change
Google Rapid Response (GRR) : Version 9.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Hunt Details
List Hunts
Start a Hunt
Stop a Hunt
Change
TruSTAR : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Related IOCs
Get Related Reports
List Enclaves
Change
FireEye AX : Version 6.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Submit File
Change
McAfee ATD : Version 14.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Analyzer Profiles
Change
Mimecast : Version 13.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Advanced Archive Search
Simple Archive Search
Change
Microsoft Azure Sentinel : Version 60.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Alert Rules
List Custom Hunting Rules
List Incidents
Run Custom Hunting Rule Query
Run KQL Query
Change
ElasticSearch : Version 42.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Advanced ES Search
DSL Search
Simple ES Search
Change
FireEye HX : Version 20.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Alert Group Details
Get Alerts
Get Alerts in Alert Group
Get Indicators
Change
FortiGate : Version 18.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Address Groups
List Policies
Change
CBProtection : Version 10.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Find File
Change
BlueLiv : Version 11.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Add Comment to a Threat
Change
MISP : Version 35.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Attribute
Add Sighting to an Attribute
Add Tag to an Attribute
Add Tag to an Event
Create Url Misp Object
Delete an Attribute
Delete an Event
List Event Objects
List Sightings of an Attribute
Remove Tag from an Attribute
Remove Tag from an Event
Change
Exchange Extension Pack : Version 11.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Fetch Compliance Search Results
List Exchange-Siemplify Mail Flow Rules
Change
Google Cloud Storage : Version 13.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Download an Object From a Bucket
Get a Bucket's Access Control List
List Bucket Objects
List Buckets
Upload an Object To a Bucket
Change
Microsoft Graph Mail Delegated : Version 14.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Delete Email
Download Attachments from Email
Extract Data from Attached EML
Move Email To Folder
Run Microsoft Search Query
Search Emails
Change
Ivanti Endpoint Manager : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Task
Scan Endpoints
Change
Akamai : Version 3.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Items To Client List
Get Client Lists
Get Network Lists
Remove Items From Client List
Change
CyberArk PAM : Version 7.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Accounts
Change
Nozomi Networks : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Vulnerabilities
Run a Query
Change
iBoss : Version 12.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Policy Block List Entries
Change
FireEye EX : Version 12.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Download Alert Artifacts
Download Quarantined Email
List Quarantined Emails
Change
AWS Security Hub : Version 9.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Insight
Get Insight Details
Change
Mandiant ASM : Version 10.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get ASM Entity Details
Search Issues
Change
Cisco Orbital : Version 17.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Execute Query
Change
IronScales : Version 5.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Incident Details
Get Incident Mitigation Details
Get Mitigation Impersonation Detail
Get Mitigations Per Mailbox
Change
Google Cloud IAM : Version 16.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Role
Create Service Account
Delete Role
List Roles
List Service Accounts
Change
Armis : Version 13.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Alert Connections
Change
Attivo : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Critical ThreatPath
List Service ThreatPaths
List Vulnerability Hosts
Change
Falcon Sandbox : Version 18.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Analyze File
Analyze File URL
Search
Change
Tenable.io : Version 14.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Vulnerability Details
List Plugin Families
List Policies
List Scanners
Change
Google Chat : Version 5.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Spaces
Change
IntSights : Version 24.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Alert Image
Change
Jira : Version 53.0
Integration : Added support for service account token based authentication.
Integration : Updated issue object handling.
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Download Attachments
Get Issues
List Relation Types
Change
Google BigQuery : Version 16.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Run Custom Query
Run SQL Query
Change
ArcSight : Version 43.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Activelist Entries
Get Query Results
Get Report
Is Value In Activelist Column
Search
Change
Check Point Firewall : Version 13.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Download Log Attachment
List Layers On Site
List Policies On Site
Show Logs
Change
FortiAnalyzer : Version 9.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Search Logs
Change
Microsoft Defender ATP : Version 28.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Isolate Machine Task
Create Run Antivirus Scan Task
Create Stop And Quarantine File Specific Machine Task
Create Unisolate Machine Task
Get Current Task Status
List Alerts
List Indicators
List Machines
Run Advanced Hunting Query
Wait Task Status
Change
Microsoft Teams : Version 33.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Chats
List Teams
List Users
Send Message
Change
Recorded Future : Version 19.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Update Alert
Change
Active Directory : Version 39.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Group Members
Search Active Directory
Change
Cofense Triage : Version 18.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Report Headers
List Categories
List Playbooks
List Reports Related To Threat Indicators
Change
ElasticSearchV7 : Version 20.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Advanced ES Search
DSL Search
Simple ES Search
Change
BMC Remedy ITSM : Version 10.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Incident Details
Get Record Details
Change
Cloudflare : Version 5.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add IP To Rule List
List Firewall Rules
Change
OpenSearch : Version 2.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Advanced OS Search
DSL Search
Simple OS Search
Change
Microsoft Graph Mail : Version 37.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Download Attachments from Email
Extract Data from Attached EML
Move Email To Folder
Search Emails
Change
F5 BIG-IP Access Policy Manager : Version 6.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Active Sessions
Change
McAfee Mvision EPO : Version 9.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Endpoints In Group
List Groups
List Tags
Change
Palo Alto Cortex XDR : Version 24.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Execute XQL Search
Change
XForce : Version 17.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get IP By Category
Change
Okta : Version 14.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get User
Change
Microsoft Intune : Version 6.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Managed Devices
Change
F5 BIG-IP iControl API : Version 5.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Address Lists
List Data Groups
List Port Lists
List iRules
Change
AppSheet : Version 4.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Record
Delete Record
List Tables
Search Records
Update Record
Change
McAfee ESM : Version 44.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Send Advanced Query To ESM
Send Query To ESM
Change
Google Cloud Recommender : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Recommendation
List Recommendations
Update Recommendation
Change
Any.Run : Version 9.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Search Report History
Change
FireEye Helix : Version 16.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Lists
Get List Items
Change
Area1 : Version 7.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get Recent Indicators
Change
ExabeamAdvancedAnalytics : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Comments To Entity
Create Watchlist
List Watchlist Items
List Watchlists
Change
Azure Monitor : Version 2.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Search Logs
Change
Rapid7 InsightIDR : Version 10.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Investigations
List Saved Queries
Run Saved Query
Change
Amazon Macie : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Custom Data Identifier
List Findings
Change
AWS IAM Access Analyzer : Version 8.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Scan Resources
Change
ProofPoint TAP : Version 13.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
DecodeURL
Get Threat Forensics
GetCampaign
List Campaigns
Search Events
Change
Splunk : Version 62.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Entity Query
SplunkQuery
Change
LogPoint : Version 18.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Entity Query
Execute Query
List Repos
Change
BitSight : Version 10.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Company Highlights
List Company Vulnerabilities
Change
WMI : Version 12.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
ListServices
ListUsers
RunQuery
Change
AWS Identity and Access Management (IAM) : Version .0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create a Group
Create a Policy
Create a User
List Groups
List Policies
List Users
Change
Fortinet FortiSIEM : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Custom Query
Execute Simple Query
Change
Humio : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Custom Search
Execute Simple Search
Change
AlgoSec : Version 5.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Templates
Change
AWS WAF : Version 9.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create IP Set
Create Regex Pattern Set
Create Rule Group
Create Web ACL
List IP Sets
List Regex Pattern Sets
Change
CA Service Desk Manager : Version 24.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Search Tickets
Sync Ticket History
Change
Freshworks Freshservice : Version 16.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Ticket Time Entry
Add a Ticket Note
Add a Ticket Reply
Create Requester
Create Ticket
List Agents
List Requesters
List Ticket Conversations
List Ticket Time Entries
List Tickets
Update Requester
Update Ticket
Update Ticket Time Entry
Change
BMC Helix RemedyForce : Version 15.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Custom Query
Execute Simple Query
Get Record Details
List Record Types
Change
AWS S3 : Version 6.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Download File From Bucket
Get Bucket Policy
List Bucket Objects
List Buckets
Upload File To Bucket
Change
Cybereason : Version 22.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Custom Investigation Search
Execute Simple Investigation Search
List Malop Affected Machines
List Malop Remediations
List Processes
List files
Remediate Malop
Change
SCCM : Version 19.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Run WQL Query
Change
Netskope : Version 15.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Alerts
List Clients
List Events
Change
Qradar : Version .0
Optimized the caching fetched offenses logic in the following connectors:
Qradar Correlation Events Connector V2
Qradar Offenses Connector
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Rule MITRE Coverage
List Reference Maps
List Reference Maps of Sets
List Reference Sets
List Reference Tables
Lookup for a Key in Reference Map
Lookup for a Key in Reference Map of Sets
Lookup for a Value in Reference Map
Lookup for a Value in Reference Map of Sets
Lookup for a Value in Reference Set
Lookup for a Value in Reference Tables
Change
Google Cloud Compute : Version 14.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Labels To Instance
Get Instance IAM Policy
List Instances
Remove External IP Addresses
Set Instance IAM Policy
Change
Cylance : Version 17.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Global List
Get Threats
Change
EmailV2 : Version 38.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Search Email
Change
McAfee EPO : Version 35.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Execute Custom Query
Execute Entity Query
Execute Query By ID
List Queries
List Tasks
Change
ArcSight Logger : Version 10.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Send Query
Change
SonicWall-Beta : Version 7.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Address Groups
List URI Groups
List URI Lists
Change
VSphere : Version 9.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Vms
Change
SiemplifyUtilities : Version 26.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Export Entities as OpenIOC File
Extract Top From JSON
Change
Office 365 CloudApp Security : Version 23.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Enrich Entities
List Files
Change
Salesforce : Version 15.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Cases
Change
AWS Elastic Compute Cloud (EC2) : Version 8.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Start Instance
Stop Instance
Terminate Instance
Change
McAfee Mvision ePO V2 : Version 6.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
List Devices
List Tags
Change
Anomali ThreatStream : Version 12.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Submit Observables
Change
Automox : Version 6.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Policies
Change
Microsoft Graph Security : Version 24.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Alerts
Change
Qualys VM : Version 22.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Download Vm Scan Results
Launch VM Scan And Fetch Results
List Groups
List Reports
List Scans
Change
Cloud Logging : Version 4.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Execute Query
Change
Cisco ISE : Version 14.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
List Endpoint Identity Group
Change
SentinelOneV2 : Version 45.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Create Path Exclusion Record
Get Blacklist
Get Deep Visibility Query Result
Get Site Agents
Get Threats
Initiate Deep Visibility Query
List Sites
Mark as Threat
Mitigate Threat
Resolve Threat
Change
Palo Alto Panorama : Version 33.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Correlated Traffic Between IPs
Search logs
Change
Cisco AMP : Version 20.0
Introduced Light Theme compatibility for the predefined widget of the following
action:
Get File List Items
Change
Slack : Version 27.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Get Channel Or User Conversation History
List Channels
List Users
Send Interactive Message
Change
LogRhythm : Version 20.0
Introduced Light Theme compatibility for predefined widgets of the following
actions:
Add Alarm To Case
Attach File To Case
Get Alarm Details
List Case Evidence
Google SecOps SIEM
Feature
Bindplane features for Google SecOps general availability
The following Bindplane features that relate to Google SecOps are now in General Availability (GA):
Single sign-on with custom claims role mapping : gives a production-ready way to manage Bindplane access through your identity provider. For more information, see Single Sign-On (Cloud) .
SecOps parser validator : validates that your logs will be parsed correctly by Google SecOps directly from the snapshot view. Get immediate feedback on parsed events or validation errors without waiting for data to appear in Google SecOps. For more information, see Validate SecOps Parser .
Forwarder migration tool : provides production-ready paths to migrate existing forwarder configurations into Bindplane-managed pipelines. For more information, see Migrate Configurations .
Memorystore for Memcached
Feature
You can deploy instances in the asia-southeast3 (Bangkok)
region.
Memorystore for Redis
Feature
You can deploy instances in the asia-southeast3 (Bangkok)
region.
Memorystore for Valkey
Feature
You can use the Google Cloud console to find and set maintenance windows and perform self-service maintenance on instances. This feature is Generally Available .
Virtual Private Cloud
Feature
You can
update a service attachment's target service without recreating the service attachment .
Consumer connections are preserved during the update, but traffic is briefly
disrupted. This feature is available in General Availability .
For more information, including a list of supported configurations, see
Service mutability .
March 17, 2026
Apigee Advanced API Security
Announcement
On March 17, 2026 we released an updated version of Advanced API Security
abuse detection
Feature
VPC-SC support in abuse detection
This release includes full support in Advanced API Security abuse detection
for VPC-SC customers. This includes support for VPC-SC with the Advanced Anomaly
Detection ML model used for abuse detection, as well as detection exclusion
lists.
For usage information, see
Abuse detection in the
documentation.
Apigee X
Announcement
On March 17th, 2026, we released an updated version of Apigee (1-17-0-apigee-5).
Note: Rollouts of this release began today and may take four or more business days to be completed across all Google Cloud zones. Your instances may not have the features and fixes available until the rollout is complete.
Fixed
Bug ID
Description
N/A
Updates to infrastructure and libraries.
App Engine flexible environment Ruby
Feature
Support for Ruby 4.0 runtime is in General Availability .
App Engine standard environment Ruby
Feature
Support for Ruby 4.0 runtime is in General Availability .
BigQuery
Feature
In BigQuery ML, you can now
automatically deploy
open models to Vertex AI endpoints. Automatically deployed models offer the
following benefits:
Automatic Vertex AI resource management
Reserve open model resources by
using Compute Engine reservations
Automatic or immediate open model undeployment
to save costs
This feature is generally available
(GA).
Cloud Composer
Change
(Airflow 3.1.7) Starting from version composer-3-airflow-3.1.7-build.1,
Airflow workers no longer have direct access to the Airflow database of your
environment.
This change follows the architectural and security improvements
introduced in the community version of Airflow 3.0. For more information about
an alternative way to export and access the data stored in the Airflow
database, see
Access the Airflow database .
This change is gradually rolled out to all regions supported by
Cloud Composer 3.
Change
(Airflow 3.1.7 in Cloud Composer 3)
The apache-airflow-providers-google package was upgraded to version 20.0.0.
For more information about changes, see the
apache-airflow-providers-google changelog .
Change
(Airflow 3.1.7 in Cloud Composer 3)
The apache-airflow-providers-cncf-kubernetes package was
upgraded to version 10.13.0 .
For changes in other packages, see the
preinstalled packages changelog .
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.7-build.1
composer-3-airflow-2.10.5-build.30 (default)
composer-3-airflow-2.9.3-build.50
Change
New images
are available in Cloud Composer 2:
composer-2.16.7-airflow-2.10.5 (default)
composer-2.16.7-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.18, composer-3-airflow-2.9.3-build.17, composer-2.11.5-*, and composer-2.11.4-*.
Cloud Data Fusion
Fixed
Cloud Data Fusion version 6.11.1.2 is
generally available (GA) .
This release includes the following changes:
Fixed the triggers panel in the pipeline details page to display the correct
triggers count on initial load ( CDAP-21230 ).
Updated the GraphQL query mechanism to cache the pipelines list and fix the
long loading screen in the deployed pipelines list page
( CDAP-21229 ).
Cloud Run
Feature
Support for Ruby 4.0 runtime is in General Availability .
Cloud Run functions
Feature
Support for Ruby 4.0 runtime is in General Availability .
Cloud SQL for MySQL
Feature
Multi-region backup vaults for Cloud SQL enhanced backups
are generally available (GA).
This feature lets you store your backup data in
multi-region storage locations, providing higher availability and protection
against regional outages.
For more information, see Enhanced backups .
Feature
Cloud SQL supports cross-project PITR operations for instances protected by
backup and DR ( GA ).
This feature lets you restore a Cloud SQL instance to a project other than the
project where either the source instance or the backup vault is located.
For more information, see Perform a cross-project PITR .
Cloud SQL for PostgreSQL
Feature
You can now cancel an in-place major version upgrade operation during the main
upgrade phase, when the upgrade is actually being performed.
For more information, see
Cancel the major version upgrade .
Feature
Multi-region backup vaults for Cloud SQL enhanced backups
are generally available (GA).
This feature lets you store your backup data in
multi-region storage locations, providing higher availability and protection
against regional outages.
For more information, see Enhanced backups .
Feature
Cloud SQL supports cross-project PITR operations for instances protected by
backup and DR ( GA ).
This feature lets you restore a Cloud SQL instance to a project other than the
project where either the source instance or the backup vault is located.
For more information, see Perform a cross-project PITR .
Cloud SQL for SQL Server
Feature
Cloud SQL supports cross-project PITR operations for instances protected by
backup and DR ( GA ).
This feature lets you restore a Cloud SQL instance to a project other than the
project where either the source instance or the backup vault is located.
For more information, see Perform a cross-project PITR .
Change
Point-in-time recovery (PITR) default enablement behavior has changed:
PITR is now enabled by default when you create a
Cloud SQL Enterprise edition
instance in the Google Cloud console.
PITR is enabled by default when you create a Cloud SQL Enterprise Plus edition
instance, regardless of the method used.
For more information, see Configure point-in-time recovery (PITR) .
Feature
Multi-region backup vaults for Cloud SQL enhanced backups
are generally available (GA).
This feature lets you store your backup data in
multi-region storage locations, providing higher availability and protection
against regional outages.
For more information, see Enhanced backups .
Container Optimized OS
Change
cos-beta-129-19506-0-66
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.2
See List
Change
cos-dev-133-19619-0-0
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.76
v27.5.1
v2.2.1
See List
Change
Added support for the Lustre 2.14.0_p246 drivers.
Change
Added support for the Lustre 2.14.0_p246 drivers.
Change
Fixed the "CrackArmor" vulnerability in the Linux kernel.
Change
Fixed the "CrackArmor" vulnerability in the Linux kernel.
Breaking
/dev/hugepages is now mounted with the noexec option.
Breaking
/dev/hugepages is now mounted with the noexec option.
Change
Updated cos-gpu-installer to v2.6.0.
Breaking
/run is now mounted with the noexec option.
Change
Updated the Linux kernel to v6.12.76.
Change
Updated cos-gpu-installer to v2.6.0.
Change
Upgraded CASFS to v0.1.2.
Change
Upgraded CASFS to v0.1.2.
Feature
Switched to using systemd-resolved stub resolver by default, which fixes DNS caching issues.
Change
Upgraded app-containers/containerd to v2.2.2.
Feature
Added support for larger ring sizes for the GVNIC driver in DQO-QPL mode.
Change
Upgraded dev-libs/glib to v2.86.3. This fixes CVE-2025-14087, CVE-2025-14512 and CVE-2025-13601.
Feature
Added support for larger ring sizes for the GVNIC driver in DQO-QPL mode.
Fixed
Fixed a kernel bug which could cause traffic drops after NIC resets.
Fixed
Updated cos-gpu-installer to v2.6.1.
Fixed
Enabled buffer overflow detection for kernel str/mem functions.
Fixed
Upgraded app-admin/sosreport to v4.11.0.
Fixed
Fixed a kernel bug which could cause traffic drops after NIC resets.
Fixed
Upgraded dev-util/gn to v2331.
Fixed
Fixed performance and efficiency issues in TCPX through optimized netmem handling and scatter-gather list coalescing for large memory mappings.
Fixed
Upgraded net-misc/socat to v1.8.1.1.
Fixed
Upgraded sys-apps/acl to v2.3.2-r3.
Fixed
Upgraded sys-apps/file to v5.47.
Fixed
Updated cos-gpu-installer to v2.6.1.
Fixed
Upgraded the galog version to v0.0.0-20250924170816-9dbf105986f4 in google-guest-agent to fix an issue with high CPU consumption.
Fixed
Upgraded dev-utils/gdbus-codegen to v2.86.3.
Security
Upgraded dev-libs/glib to v2.86.3. This fixes CVE-2025-14087, CVE-2025-14512 and CVE-2025-13601.
Fixed
Upgraded app-admin/fluent-bit to v4.2.3.1.
Fixed
Upgraded app-admin/sosreport to v4.11.0.
Fixed
Upgraded dev-util/gdbus-codegen to v2.86.3.
Fixed
Upgraded the galog version to v0.0.0-20250924170816-9dbf105986f4 in google-guest-agent to fix an issue with high CPU consumption.
Security
Fixed CVE-2026-23229 in the Linux kernel.
Security
Fixed CVE-2026-23230 in the Linux kernel.
Security
Fixed CVE-2026-23240 in the Linux kernel.
Security
Fixed a packet header clobbering issue in the IDPF driver occurring when SWIOTLB and header split are enabled.
Security
Fixed KCTF-71e99ee in the Linux kernel.
Change
cos-121-18867-381-35
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.122
v27.5.1
v2.0.7
See List
Security
Fixed CVE-2025-38162 in the Linux kernel.
Security
Fixed CVE-2025-38201 in the Linux kernel.
Security
Fixed CVE-2026-23102 in the Linux kernel.
Change
cos-117-18613-534-36
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.123
v24.0.9
v1.7.29
See List
Security
Fixed CVE-2025-38162 in the Linux kernel.
Security
Fixed CVE-2025-38162 in the Linux kernel.
Change
cos-113-18244-582-42
Kernel
Docker
Containerd
GPU Drivers
COS-6.1.161
v24.0.9
v1.7.27
See List
Security
Fixed CVE-2026-23054 in the Linux kernel.
Security
Fixed KCTF-71e99ee in the Linux kernel.
Gemini Enterprise
Feature
Gemini Enterprise: Grace period for license deactivation
To ensure a smooth transition and prevent service interruptions when a
subscription ends early, we've introduced a one-week (seven days) grace period.
During this time, you can continue to use the service while you transition to a
new subscription.
This feature is generally available (GA). For more information, see Handle
early termination .
Google SecOps
Announcement
Unified Feature Role-based Access Control (RBAC) is now in General Availability (GA). This enables administrators to manage feature access control for Google SecOps including SOAR by leveraging Google Cloud IAM instead of managing it separately for SIEM and SOAR.
You can enable it by migrating the legacy SOAR permission groups and permissions to Google Cloud IAM through a self-service migration available from January 26, 2026. Please check the documentation and video for full instructions.
This update is available to all customers who have completed Stage 1 of the SOAR migration to Google Cloud.
Google SecOps SOAR
Announcement
SOAR Permission Groups migration to Google Cloud IAM is now in General Availability (GA).
You can now leverage Google Cloud IAM for precise, granular feature access, moving away from legacy permission groups.
You can enable it by migrating the legacy SOAR permission groups and permissions to Google Cloud IAM through a self-service migration available from January 26, 2026. Please check the documentation and video for full instructions.
This update is available to all customers who have completed Stage 1 of the SOAR migration to Google Cloud.
Looker
Announcement
As part of Looker 26.4, the following features will begin rolling out on March 17, 2026.
Feature
Looker Connections Settings page has a new option, Disable Connection , that allows a Looker admin to disable a connection in cases where there are downstream issues with the database, instead of killing queries manually or allowing queries to remain in the query queue. When the connection is disabled, Looker will not send queries to the database and will return an error message to users.
Feature
The Visualization Assistant , which lets you customize formatting options for Looker visualizations in natural language with Gemini assistance, is now generally available. This assistant can be enabled by turning on the Gemini in Looker and Looker Assistants settings on the Gemini in Looker page in the Platform section of the Admin panel.
Feature
The Self-service Explores feature is now generally available.
In addition, if your Looker admin has enabled your Looker instance to support OAuth for Google Sheets uploads , the self-service Explores feature supports uploading data from Google Sheets using Google Drive navigation .
Feature
The content certification feature is now generally available. In Looker 26.4, the following support has been added:
LookML Explores can now be certified.
Looker admins can now automatically certify all current and future LookML dashboards and LookML Explores.
When Enhanced Search is enabled, searching for content now includes the ability to sort and filter search results based on certification status.
Feature
The Continuous Integration (CI) feature is updated for better integration with the Looker user interface:
Your Looker instance will be migrated to the new version of Looker CI. The migration will take a few minutes.
While your instance is migrating, any existing CI suites will not appear on the CI Suites page, and the history on the CI Runs page will be empty. During this time, do not create new suites or initiate manual runs.
When the migration is complete, the Suites and Runs pages will be repopulated.
If you encounter an issue during the migration, please report it using the Looker Continuous Integration - Preview Issue Tracker form .
The updated Looker Continuous Integration feature includes the following:
Your Looker admin no longer needs to manually add CI users. After your Looker instance is enabled for CI (or once your instance is updated to the new CI, if your instance was already enabled for CI), Looker automatically creates ten Looker CI users. The Looker CI users are created in the Looker CI Users user group with the Looker CI Users role . A Looker admin can view the Looker CI users from the Service Accounts tab of the Users Admin page.
A new GitHub table on the Continuous Integration Admin page lists the GitHub repositories that have been granted access to the Looker CI GitHub application, which enables Looker CI to be triggered automatically when pull requests are created .
Note: This item was updated on March 27, 2026.
Feature
The Dashboard Tile Limits preview feature is now available, and is disabled by default.
When enabled, the Dashboard Tile Limits preview feature lets admins set limits to how many query tiles can be added to each tab in a dashboard. Admins can set these limits in the Maximum Query Tiles per tab setting on the Content guardrails admin page.
Feature
The Gemini in Looker assistant that helps you generate LookML parameters is now available to enable individually from other Gemini in Looker features. This assistant, which continues to be available in preview, suggests LookML parameters that are based on the natural language prompts that you add to your project files. This assistant can be enabled by turning on the Gemini in Looker and LookML Assistant settings on the Gemini in Looker page in the Platform section of the Admin panel.
Feature
The Increased Row Limit preview feature feature is now available, and is disabled by default.
When enabled, the Increased Row Limit preview feature lets admins set row limits up to 50,000 rows or datapoints for map charts , scatterplot charts , and table charts . Admins can set the limits for each visualization type in the Visualization limits setting on the Content guardrails admin page.
Table charts, scatterplot charts, and Google Maps charts that have increased row limits are subject to additional limitations when you download, send, or schedule dashboards in PDF format. See Downloading or delivering dashboards in rendered formats for more information about scheduling and downloading dashboard PDFs with increased row limits.
Note: This item was originally published on March 16, 2026 and was updated on March 17, 2026.
Feature
Now available in preview, you can use Gemini in Looker to assist you in writing Looker expressions for table calculations and custom fields . This feature can be enabled by turning on the Expression Assistant setting on the Gemini in Looker page in the Platform section of the Admin panel.
Feature
The Enhanced Search preview feature is now available.
When enabled, Enhanced Search helps you find saved content on your instance using Gemini in Looker. Enhanced Search moves beyond keyword matching to interpreting the conceptual meaning of your search queries, letting you search for saved content using business terms or analytical questions (for example, "total customer acquisition cost").
You can filter your search results to limit them to specific content types, folders, content creators, creation dates, modification dates, and the content certification status.
To enable Gemini in Looker assistance with searching content, you must also enable the Semantic Search setting on the Gemini in Looker page in the Platform section of the Admin panel.
Note: The Semantic Search option will begin rolling out on April 6, 2026. This item was updated on April 2, 2026.
Feature
Now available in preview, Gemini in Looker can automatically generate Quick Start analyses for Explores . This feature can be enabled by turning on the AI-assisted Quick Starts setting on the Gemini in Looker page in the Platform section of the Admin panel.
Note: This feature is not yet available. This item was modified on March 19, 2026.
Feature
Available in preview, you can now use custom calendars, such as fiscal or retail calendars, for dialects that support it . The custom calendar feature lets your Looker developers create a LookML model of a custom calendar table in your database and then create custom calendar dimension groups that use the custom calendar. Your end users can then create Explore queries using the custom calendar dimension timeframes.
In addition, your LookML developers can create period-over-period measures based on custom calendar dimension groups.
Note: This item was updated on March 19, 2026.
Feature
Conversational Analytics now offers new modes for asking questions . Fast mode allows you to get answers more quickly. Thinking mode allows you to ask more complex questions and test your agent's capabilities. (Note: Question modes are not yet available. This release note was updated on March 24, 2026.)
Memorystore for Valkey
Feature
The simulate maintenance event feature for Memorystore for Valkey is Generally Available .
Feature
You can now deploy instances in the asia-southeast3 (Bangkok), europe-north2
(Stockholm), and northamerica-south1 (Mexico)
regions .
Workload Manager
Feature
Workload Manager supports the following features when you deploy SAP S/4HANA workloads on Google Cloud:
Deploy SAP S/4HANA workloads on X4 instances.
Customize the names of application server VMs.
Specify network tags for the deployed instances.
Skip the creation of automatic firewall rules.
Skip the DNS configuration.
Choose an existing NFS shared storage.
Specify a service account to be attached to instances for each layer of the deployment.
Feature
Workload Manager supports the following features when you deploy SAP S/4 HANA workloads on Google Cloud:
Deploy SAP S/4HANA workloads on X4 instances.
Customize the names of application server VMs.
Specify network tags for the deployed instances.
Skip the creation of automatic firewall rules.
Skip the DNS configuration.
Choose an existing NFS shared storage.
Specify a service account to be attached to instances for each layer of the deployment.
Feature
Workload Manager supports the following features when you deploy SAP S/4HANA workloads on Google Cloud:
Deploy SAP S/4HANA workloads on X4 instances.
Customize the names of application server VMs.
Specify network tags for the deployed instances.
Skip the creation of automatic firewall rules.
Skip the DNS configuration.
Choose an existing NFS shared storage.
Specify a service account to be attached to instances for each layer of the deployment.
March 16, 2026
AlloyDB for PostgreSQL
Feature
AlloyDB now supports the 2 vCPU C4A machine type ( c4a-highmem-2-lssd ),
which is powered by Google Axion, Google's custom Arm-based processor.
This expansion provides a smaller entry point and more flexibility for
scaling your production workloads using Axion-based instances. For more information,
see Choose an AlloyDB machine type .
Feature
AlloyDB enhanced backups are generally available
( GA ).
You can now select the Enhanced tier during cluster creation, manage your
project-level backups with tiered tabs, and delete an enhanced backup. For more
information, see
Manage enhanced backups .
BigQuery
Feature
BigQuery now lets you configure a global default location .
This setting is used if the location isn't set or can't be inferred from the
request. You can set the default location at the organization or project level.
This feature is generally available
(GA).
Cloud Build
Feature
Cloud Build now supports uploading OCI images to Artifact Registry during
a build process. OCI artifacts for a build are shown in the following locations:
The Artifacts column of Build history page
The Execution details tab of the Build details page
The Build artifacts tab of the Build details page
For more information, see
Store an OCI image in Artifact Registry after your build completes
and the Cloud Build configuration file schema definition for oci .
Firestore with MongoDB compatibility
Feature
Support for managing TTL indexes in the MongoDB API.
Google SecOps
Announcement
Stage 2 of the SOAR migration to Google Cloud deadline has been extended from June 30th to September 30th, 2026.
Google SecOps SOAR
Announcement
Stage 2 of the SOAR migration to Google Cloud deadline has been extended from June 30th to September 30th, 2026.
SAP on Google Cloud
Announcement
Google Cloud's Agent for SAP version 3.12
Version 3.12 of Google Cloud's Agent for SAP is generally available (GA). This
version introduces enhancements for SAP workload validation and disk snapshot
based recovery for SAP HANA.
For more information, see
What's new with Google Cloud's Agent for SAP .
Security Command Center
Change
The names of Event Threat Detection
rules pertaining to AI control
plane
have changed.
The Cloud Run Threat Detection rule
Privilege Escalation: Fileless Execution in /dev/shm has been shut
down .
VPC Service Controls
Feature
General availability support
for the following integration:
CX Agent Studio
Feature
VPC Service Controls feature (Status: Preview ):
VPC Service Controls supports the following identities in ingress and egress
rules to allow access to resources protected by a service perimeter:
Agent identities
SPIFFE formats for third-party workforce and workload identities
This feature is available in Preview .
For more information, see Supported identities for ingress and egress rules .
Vertex AI
Deprecated
Vertex Explainable AI is deprecated. For details, see Vertex AI deprecations .
March 15, 2026
Cloud DNS
Feature
The filter query parameter for resourceRecordSets.list is generally available ( GA ).
You can filter records to match a specified domain using the API.
Google SecOps SOAR
Announcement
Release 6.3.80 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
March 14, 2026
Container Optimized OS
Change
cos-125-19216-220-57
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Fixed the "CrackArmor" vulnerability in the Linux kernel.
Fixed
Downgraded ek-cpu-balloon driver to version 1.1.0 to address efficiency daemon issues.
Google Cloud Contact Center as a Service
Announcement
Advanced reporting dashboards 4.0
We've released version 4.0 of the advanced reporting dashboards.
Feature
Voicemails dashboard
With the Voicemails dashboard, get insights into the volume of voicemails
received by your contact center and the performance of your agents in responding
to them. This includes the number of voicemails received, the number of
voicemails accessed by agents, and the average agent response time. For more
information, see Voicemails
dashboard .
Feature
Queue Performance dashboard
With the Queue Performance - Calls and Queue Performance - Chats
dashboards, get performance metrics by queue for your call and chat sessions.
This includes queue interaction volume, abandons, handle time, callbacks,
sentiment, and CSAT. For more information, see Queue Performance
dashboards .
Feature
Update to the Virtual agent dashboard for wait-time virtual agent metrics
The Virtual agent dashboard includes the following new tiles to measure the
activity of wait-time virtual agents while end-users wait in queue:
Total VA In-Queue Interactions (calls only): the number of calls where
wait-time virtual agents were active while end-users were in a queue
Total VA In-Queue Time (calls only): the total time that wait-time
virtual agents were active while end-users were in a queue
Avg VA In-Queue Time (calls only): the average time that wait-time
virtual agents were active while end-users were in a queue
For more information, see Virtual agent
dashboards .
Feature
Advanced reporting is available in French Canadian
Advanced reporting dashboards are now available in French Canadian. For more
information about configuring your instance for location and language, see
Configure location and
language .
Feature
Improved analytics for Queue Interval and Channel Interval dashboards
We've improved the detailed information available for the Queue Interval and
Channel Interval dashboards:
Queue Interval dashboards : Click a bar in the SLA by Interval tile
to get historical call or chat queue metrics for that interval.
Channel Interval dashboards : Click a data point on the trend line in the
Service Level Trend , AHT Trend , Queue Time Trend , CSAT
Trend , or Transfer Trend tile to get historical call or chat queue
metrics for that interval.
Fixed
The following issues were addressed in this release:
Fixed an issue where the Start Time and End Time filters weren't
correctly applied to summary metrics on the Agent Performance dashboard
and historical reports.
Fixed an issue where calls returned to queues due to agent connectivity or
microphone errors didn't appear in the Queued Calls dashboard.
Fixed an issue on the CSAT Dashboard - Calls dashboard where the
direction in the Direction filter couldn't be selected.
Fixed an issue in dashboards with a Time Format filter. When users
selected Seconds in this filter, single-value tiles displayed decimals
instead of whole numbers.
Updated the format of time duration fields in Explores from HH:MM:SS to
MM:SS for durations of less than one hour. For example, 00:10:20 changed
to 10:20 .
Fixed an issue where the Total Failed metric incorrectly counted a
maximum of one failure per call or chat session.
Fixed time duration fields so that values represent the number of seconds
rather than a fraction of a day.
Fixed an issue where the Queue Abandon % tile was missing from the
Abandons dashboards.
Fixed an issue on the Failed Sessions dashboards where the Queue
Name column of the Historical table and the Queue Name filter
weren't appearing.
Fixed an issue where the Time Format filter was missing from dashboards.
In the Real-time Calls , Real-time Chats , Queue Group
Performance , and Email dashboards, the naming of fields such as
"assigned at", "created at", and "ended at" was improved in the Explores to
make them clearer. For example, on the Real-time Chats - Chats Connected
dashboard, in the Chat Metrics (Live) Explore, Chat >
Started At Date > Date and Chat > Started At Date
> Month changed to Chat > Started At >
Started At Date and Chat > Started At > Started At
Month .
Fixed an issue where the Agent preferences table displayed an incorrect
date and timestamp.
Fixed an issue where the Location filter on the All interactions for
Chats dashboard didn't display data in some tiles.
Fixed an issue where deactivated users appeared in dashboards.
Fixed an issue where outbound calls that weren't associated with queues
appeared in the Queue Performance dashboard.
Fixed performance issues on the Agent Performance dashboard.
Fixed an issue on the Failed Interactions dashboard where the Outbound
Phone Numbers filter didn't display any values.
Fixed an issue where the Queue Interactions metric included the short
abandons count.
Fixed an issue on the Queue Group Performance - All dashboard where the
Locations filter didn't display all values.
Google SecOps SOAR
Announcement
Release 6.3.79 is now available for all regions.
March 13, 2026
Apigee UI
Announcement
On March 13, 2026, we released an updated version of the Apigee UI.
Feature
Manage environment-scoped Key Value Maps in the Apigee UI
You can now view, add, edit, and delete environment-scoped Key Value Map (KVM) entries in the Apigee UI.
For more information, see
Using key value maps .
Buildpacks
Feature
The Node.js buildpack supports the Bun package manager in Preview . For more information, see
Building a Node.js application .
Cloud Run
Feature
Configuring Identity-Aware Proxy (IAP) directly on Cloud Run
to secure your services without the need for load balancers is in
General Availability (GA) .
Cloud SQL for MySQL
Feature
You can now enable automatic server certificate rotation for your Cloud SQL instance.
This feature is specifically designed for instances utilizing the Certificate
Authority Service (CAS). Automatic server certificate rotation helps you maintain high security standards while removing the operational burden of manual rotation.
For more information about enabling automatic server certificate rotation for
your instance, see Enable automatic server certificate rotation .
Cloud SQL for PostgreSQL
Feature
You can now enable automatic server certificate rotation for your Cloud SQL instance.
This feature is specifically designed for instances utilizing the Certificate
Authority Service (CAS). Automatic server certificate rotation helps you maintain high security standards while removing the operational burden of manual rotation.
For more information about enabling automatic server certificate rotation for
your instance, see Enable automatic server certificate rotation .
Cloud SQL for SQL Server
Feature
You can now enable automatic server certificate rotation for your Cloud SQL instance.
This feature is specifically designed for instances utilizing the Certificate
Authority Service (CAS). Automatic server certificate rotation helps you maintain high security standards while removing the operational burden of manual rotation.
For more information about enabling automatic server certificate rotation for
your instance, see Enable automatic server certificate rotation .
Dataproc
Announcement
New Serverless for Apache Spark runtime versions :
1.2.75
2.2.75
2.3.28
3.0.11
Dataproc Metastore
Deprecated
The Hive Metastore versions 1.2.2 and 2.2.0 are deprecated. You can no longer create services with these versions. Existing services will continue to function.
Gemini
Announcement
Gemini 3.1 Pro and 3.0 Flash are available (Preview)
Gemini 3.1 Pro and Gemini 3.0 Flash
are now available to Gemini Code Assist users in VS Code and IntelliJ, in
Preview . You can use
these models for agent mode ,
chat , and
code generation .
Other
Bug fixes in VS Code
Various bug fixes and minor product enhancements.
Announcement
Gemini 3.1 Pro and 3.0 Flash are available (Preview)
Gemini 3.1 Pro and Gemini 3.0 Flash
are now available to Gemini Code Assist users in VS Code and IntelliJ, in
Preview . You can use
these models for agent mode ,
chat , and
code generation .
Gemini Enterprise
Feature
Gemini Enterprise: Enhanced filtering for Microsoft SharePoint data stores (Preview)
You can now configure filters for your Microsoft SharePoint data stores using
either the Google Cloud console or the API. These filters allow you to define
exactly which content is accessible to the Assistant by including or excluding
specific SharePoint sites.
This feature is in Public Preview. For more information, see Connect Microsoft
SharePoint Online .
Feature
Gemini Enterprise: Search generated images and videos
You can search your generated images and videos in the Gemini Enterprise
assistant. You can also search for items directly in the Library.
This feature is generally available (GA). For more information, see
Search your Gemini Enterprise content
and
View, download, and search generated images and videos .
Google Kubernetes Engine
Feature
In GKE version 1.35 and later, all organization and cluster
administrators can granularly control which privileged Autopilot
partner workloads can run in GKE clusters. Additionally,
approved customers can authorize and run their own privileged workloads in
Autopilot mode by using custom allowlists.
For more information, see
About Autopilot privileged workloads .
Identity-Aware Proxy
Feature
You can configure custom OAuth clients in Identity-Aware Proxy by using the
Google Cloud console; the feature is generally available (GA) .
You must use custom OAuth clients to do the following:
Configure IAP for users who are outside of an organization.
Customize the OAuth consent screen with custom branding.
Provide default OAuth clients for inherited applications across all
IAP-protected resources at the organization
or project level.
For more information, see Use custom OAuth clients with IAP .
Pub/Sub
Feature
You can now use the Pub/Sub remote MCP server to
manage Pub/Sub resources. You can create, list, get, update, and delete Pub/Sub
topics, subscriptions, and snapshots, as well as publish messages to topics.
This feature is in
Preview .
Sensitive Data Protection
Feature
The USER_NAME infoType detector is available in all regions. For more information about all built-in infoTypes, see the InfoType detector reference .
March 12, 2026
Apigee hybrid
Fixed
Fixed in this release
Bug ID
Description
490308770
Fixed malformed http_proxy and https_proxy strings in Helm templates that occurred when using authenticated outbound proxy configurations.
488417252
Fixed an issue where the Apigee Operator guardrails pod failed to run on EKS with Workload Identity Federation (WIF) by ensuring it runs as the federated principal rather than the default service account.
485526221
Removed the deprecated apigee-stackdriver-logging-agent image from the apigee-pull-push.sh tool, resolving image pull failures during automated deployments.
484405364
Helm chart images with the 1.16.0-hotfix.1 tag are available for download.
482209901
Added the watch permission to the apigee-manager role to allow the controller to monitor Deployment resources and resolve watch failures in the namespace.
482077193
Fixed an issue where proxy chaining failed with HTTP 404 route_not_found errors in multi-organization, single-namespace configurations.
481793880
Fixed a bug in the apigeeorg admission webhook controller that prevented upgrading organizations when monetization was enabled.
479872706
Resolved an issue that prevented loading API products, apps, and developers after migrating data to Apigee hybrid 1.16.0 in configurations using Workload Identity Federation (WIF) with an HTTP Forward Proxy.
479040521
Resolved a regression where the apigee-operator-guardrails-sa ServiceAccount was not correctly created on AKS and EKS platforms with Federated Workload Identity enabled.
Announcement
hybrid 1.16.0-hotfix.1
On March 12, 2026 we released an update to Apigee hybrid 1.16.0-hotfix.1.
Important: If your installation is already on Apigee hybrid v1.16.0, use the following procedure to apply this hotfix. For new installations, see The big picture and then apply the hotfix to the new installation with the following instructions.
Apply this hotfix with the following steps:
Note: This release reflects a change to both the component images and the Helm chart templates.
Apply this hotfix with the following steps:
In your hybrid Helm charts directory, download the Apigee hybrid 1.16.0-hotfix.1 Helm charts into your hybrid Helm charts directory with the following commands:
export CHART_REPO =oci://us-docker.pkg.dev/apigee-release/apigee-hybrid-helm-charts
export CHART_VERSION=1.16.0-hotfix.1
helm pull $CHART_REPO /apigee-operator --version $CHART_VERSION --untar
helm pull $CHART_REPO /apigee-datastore --version $CHART_VERSION --untar
helm pull $CHART_REPO /apigee-env --version $CHART_VERSION --untar
helm pull $CHART_REPO /apigee-ingress-manager --version $CHART_VERSION --untar
helm pull $CHART_REPO /apigee-org --version $CHART_VERSION --untar
helm pull $CHART_REPO /apigee-redis --version $CHART_VERSION --untar
helm pull $CHART_REPO /apigee-telemetry --version $CHART_VERSION --untar
helm pull $CHART_REPO /apigee-virtualhost --version $CHART_VERSION --untar
Install the hotfix release for Apigee operators, beginning with a dry run:
helm upgrade operator apigee-operator/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
-f overrides.yaml \
--dry-run=server
After the dry run is successful, install the hotfix release for Apigee operators:
helm upgrade operator apigee-operator/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
-f overrides.yaml
Install the hotfix release for your organization, beginning with a dry run:
helm upgrade $ORG_NAME apigee-org/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
-f overrides.yaml \
--dry-run=server
After the dry run is successful, install the hotfix release for your organization:
helm upgrade $ORG_NAME apigee-org/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
-f overrides.yaml
Verify the organization chart by checking the state:
kubectl -n APIGEE_NAMESPACE get apigeeorg
Install the hotfix release for your environments. Repeat the following steps for each environment, beginning with a dry run:
helm upgrade ENV_RELEASE_NAME apigee-env/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
--set env=$ENV_NAME \
-f overrides.yaml \
--dry-run=server
After the dry run is successful, install the hotfix release for your environment:
helm upgrade ENV_RELEASE_NAME apigee-env/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
--set env=$ENV_NAME \
-f overrides.yaml
Verify the environment chart by checking the state:
kubectl -n APIGEE_NAMESPACE get apigeeenv
App Engine flexible environment Go
Feature
Support for Go 1.26 runtime is in General Availability .
App Engine standard environment Go
Feature
Support for Go 1.26 runtime is in General Availability .
BigQuery
Change
BigQuery advanced runtime is now enabled as
the default runtime for all projects.
Cloud Logging
Issue
The automatic backfill operation performed on a log bucket that has been
upgraded to use Log Analytics has been temporarily paused. To manually
initiate the backfill operation, contact
Cloud Customer Care .
Cloud Run
Feature
Support for Go 1.26 runtime is in General Availability .
Cloud Run functions
Feature
Support for Go 1.26 runtime is in General Availability .
Cloud Storage
Change
Object uploads that use customer-managed encryption keys (CMEK) now fail if the
Cloud Storage service agent lacks the necessary IAM
role to decrypt the object. For steps to grant the required role, see
Assign a Cloud KMS key to a service agent .
Cluster Toolkit
Feature
Cluster Toolkit version v1.84.0 is available. This release adds disk
type validation in specific zones, updates GKE versioning for GPU
direct configurations, and fixes an issue with NCCL test scripts on A3 High
instances. For details, see the Release announcement on
GitHub .
Gemini Enterprise
Feature
Gemini Enterprise: Observability settings (Preview)
Gemini Enterprise administrators can enable observability settings to view the
following data from your interactions with the assistant in your
Gemini Enterprise web app:
View metrics in Metrics Explorer.
View traces and spans in Trace Explorer.
This feature is in Public Preview. For more information, see
Manage observability settings .
Generative AI on Vertex AI
Feature
Partner model evaluations
The Gen AI evaluation service supports evaluating partner models, such as Anthropic
and Llama models. For more information, see
Perform evaluation using the console .
Google Kubernetes Engine
Change
(2026-R10) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for
manual control plane upgrades and node upgrades for existing clusters. For more
information about versioning and upgrades, see GKE versioning and
support and About GKE
cluster upgrades .
Rapid channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Rapid channel:
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269000
The following versions are no longer available in the Rapid channel:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.1-gke.1616000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1127000
1.32 to 1.33.8-gke.1169000
1.33 to 1.34.4-gke.1193000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1127000
1.33 to 1.33.8-gke.1169000
1.34 to 1.34.4-gke.1193000
Regular channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1047000 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.1-gke.1396001
The following versions are no longer available in the Regular channel:
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1026000
1.32 to 1.33.8-gke.1026000
1.33 to 1.34.4-gke.1047000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1026000
1.33 to 1.33.8-gke.1026000
1.34 to 1.34.4-gke.1047000
Stable channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.5-gke.2392000 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
The following versions are no longer available in the Stable channel:
1.32.11-gke.1174000
1.33.5-gke.2326000
1.34.3-gke.1245000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1211000
1.32 to 1.33.5-gke.2392000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1211000
1.33 to 1.33.5-gke.2392000
1.34 to 1.34.3-gke.1318000
Extended channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1047000 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.2192000
1.31.14-gke.1576000
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.1-gke.1396001
The following versions are no longer available in the Extended channel:
1.30.14-gke.2154000
1.31.14-gke.1526000
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
1.35.0-gke.3047001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1026000
1.33 to 1.33.8-gke.1026000
1.34 to 1.34.4-gke.1047000
No channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1047000 is now the default version for cluster creation.
The following versions are now available:
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269000
The following node versions are now available:
1.30.14-gke.2192000
1.31.14-gke.1576000
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269000
The following versions are no longer available:
1.32.11-gke.1174000
1.33.5-gke.2228001
1.34.3-gke.1245000
1.35.1-gke.1616000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1026000
1.32 to 1.33.5-gke.2392000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1026000
1.33 to 1.33.5-gke.2392000
1.34 to 1.34.4-gke.1047000
Security
(2026-R10) Security updates
This release includes new GKE versions that use updated
Container-Optimized OS images. These updated images are cumulative,
incorporating security fixes from all Container-Optimized OS
versions released since the previous GKE release.
To identify the specific vulnerabilities that were resolved in each updated
Container-Optimized OS image, see the Security release notes
for that image. The following table includes links to the release notes for
each updated Container-Optimized OS image:
GKE version
Container-Optimized OS version
Details
1.30.14-gke.2192000
cos-117-18613-534-15
cos-117-18613-534-15 release notes
1.31.14-gke.1576000
cos-117-18613-534-15
cos-117-18613-534-15 release notes
1.32.13-gke.1059000
cos-117-18613-534-15
cos-117-18613-534-15 release notes
1.33.9-gke.1060000
cos-121-18867-381-14
cos-121-18867-381-14 release notes
Change
(2026-R10) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.5-gke.2392000 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
The following versions are no longer available in the Stable channel:
1.32.11-gke.1174000
1.33.5-gke.2326000
1.34.3-gke.1245000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1211000
1.32 to 1.33.5-gke.2392000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1211000
1.33 to 1.33.5-gke.2392000
1.34 to 1.34.3-gke.1318000
Change
(2026-R10) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1047000 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.1-gke.1396001
The following versions are no longer available in the Regular channel:
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1026000
1.32 to 1.33.8-gke.1026000
1.33 to 1.34.4-gke.1047000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1026000
1.33 to 1.33.8-gke.1026000
1.34 to 1.34.4-gke.1047000
Change
(2026-R10) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
The following versions are now available in the Rapid channel:
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269000
The following versions are no longer available in the Rapid channel:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.1-gke.1616000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1127000
1.32 to 1.33.8-gke.1169000
1.33 to 1.34.4-gke.1193000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1127000
1.33 to 1.33.8-gke.1169000
1.34 to 1.34.4-gke.1193000
Change
(2026-R10) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1047000 is now the default version for cluster creation.
The following versions are now available:
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269000
The following node versions are now available:
1.30.14-gke.2192000
1.31.14-gke.1576000
1.32.13-gke.1059000
1.33.9-gke.1060000
1.34.5-gke.1076000
1.35.2-gke.1269000
The following versions are no longer available:
1.32.11-gke.1174000
1.33.5-gke.2228001
1.34.3-gke.1245000
1.35.1-gke.1616000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1026000
1.32 to 1.33.5-gke.2392000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1026000
1.33 to 1.33.5-gke.2392000
1.34 to 1.34.4-gke.1047000
Change
(2026-R10) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.4-gke.1047000 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.2192000
1.31.14-gke.1576000
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.1-gke.1396001
The following versions are no longer available in the Extended channel:
1.30.14-gke.2154000
1.31.14-gke.1526000
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
1.35.0-gke.3047001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1026000
1.33 to 1.33.8-gke.1026000
1.34 to 1.34.4-gke.1047000
Google SecOps
Announcement
Manage parser versions
The Manage parser versions feature is in Public Preview for all customers.
Google SecOps Marketplace
Feature
Microsoft Azure Sentinel : Version 59.0
The following new job has been added:
Sync Incidents V2
Change
Microsoft Azure Sentinel : Version 59.0
Deprecated the following job:
Sync Incidents V2
Note: Use the Sync Incidents V2 job for syncing.
Google SecOps SIEM
Announcement
Manage parser versions
The Manage parser versions feature is in Public Preview for all customers.
Looker
Feature
Looker (Google Cloud core) instances with public or hybrid connections now support IP allowlists , which enhance security by ensuring that only traffic from specified IP addresses can access your instance. To connect to certain Google Cloud services, like Conversational Analytics or Connected Sheets, you can select an option to automatically allowlist the necessary IP ranges for those services. You can configure an IP allowlist for an existing instance by editing it in the Google Cloud console.
This feature will roll out to instances over the next week.
Change
The Granular Dashboard Sizing preview feature is temporarily unavailable for some Looker instances. Any dashboard tiles that were resized during this feature's enablement will revert to Looker's original sizing constraints.
( Note : This release note was added on March 16, 2026.)
March 11, 2026
Apigee hybrid
Announcement
hybrid v1.15.2
On March 11, 2026 we released an updated version of the Apigee hybrid software, v1.15.2.
For information on upgrading, see Upgrading Apigee hybrid to version v1.15.2 .
For information on new installations, see The big picture .
Note: This is a patch release: The container images used in patch releases are integrated with the Apigee hybrid Helm charts. Upgrading to a patch via the Helm chart automatically updates the images. No manual image changes are typically needed. For information on container image support in Apigee hybrid releases, see Apigee release process .
Fixed
Fixed in this release
Bug ID
Description
469694040
Fixed an issue where custom Java security policies were intermittently not applied during runtime pod restarts or environment contract updates, which could lead to "Permission denied" errors in Java callouts.
Security
Bug ID
Description
471502899, 471173561
Security fixes for apigee-synchronizer . This addresses the following vulnerabilities: CVE-2025-48924
CVE-2025-67735
471502752, 471191392
Security fixes for apigee-runtime . This addresses the following vulnerabilities: CVE-2025-48924
CVE-2025-67735
471502495, 471501875, 471126425
Security fixes for apigee-mart-server . This addresses the following vulnerabilities: CVE-2025-48924
CVE-2025-67735
471016560, 471015664, 471015120
Security fixes for apigee-hybrid-cassandra . This addresses the following vulnerabilities: CVE-2022-40897
CVE-2025-47273
CVE-2025-48924
451224723, 451224123
Security fixes for apigee-fluent-bit . This addresses the following vulnerabilities: CVE-2010-4756
CVE-2011-3389
CVE-2013-4392
CVE-2015-3276
CVE-2017-14159
CVE-2017-17740
CVE-2018-20796
CVE-2018-5709
CVE-2018-6829
CVE-2019-1010022
CVE-2019-1010023
CVE-2019-1010024
CVE-2019-1010025
CVE-2019-9192
CVE-2020-15719
CVE-2022-27943
CVE-2023-2953
CVE-2023-31437
CVE-2023-31438
CVE-2023-31439
CVE-2023-45853
CVE-2024-2236
CVE-2024-2379
CVE-2024-26458
CVE-2024-26461
CVE-2025-0725
CVE-2025-10148
CVE-2025-27587
CVE-2025-62813
CVE-2025-9086
CVE-2025-9230
CVE-2025-9232
N/A
Security fixes for apigee-asm-ingress . This addresses the following vulnerability: CVE-2026-24051
N/A
Security fixes for apigee-asm-istiod . This addresses the following vulnerability: CVE-2026-24051
N/A
Security fixes for apigee-connect-agent . This addresses the following vulnerabilities: CVE-2025-68121
CVE-2025-68119
CVE-2025-61732
CVE-2025-61731
CVE-2025-61729
CVE-2025-61726
CVE-2025-4674
N/A
Security fixes for apigee-hybrid-cassandra-client . This addresses the following vulnerabilities: CVE-2026-24051
CVE-2025-68121
CVE-2025-68119
CVE-2025-61732
CVE-2025-61731
CVE-2025-61729
CVE-2025-61726
CVE-2025-61725
CVE-2025-61723
CVE-2025-58188
CVE-2025-58187
CVE-2025-47907
CVE-2025-4674
N/A
Security fixes for apigee-kube-rbac-proxy . This addresses the following vulnerabilities: CVE-2025-61729
CVE-2025-61725
CVE-2025-61723
CVE-2025-58188
CVE-2025-58187
CVE-2026-24051
N/A
Security fixes for apigee-open-telemetry-collector . This addresses the following vulnerabilities: CVE-2025-58188
CVE-2025-58187
CVE-2026-24051
CVE-2025-68156
CVE-2025-61729
CVE-2025-4674
CVE-2025-29786
N/A
Security fixes for apigee-open-telemetry-collector: . This addresses the following vulnerability: CVE-2025-29786
N/A
Security fixes for apigee-operators . This addresses the following vulnerability: CVE-2025-61725
N/A
Security fixes for apigee-prom-prometheus . This addresses the following vulnerabilities: CVE-2025-58188
CVE-2025-58187
CVE-2026-24051
CVE-2025-68119
CVE-2025-61731
CVE-2025-61729
CVE-2025-61726
CVE-2025-47913
CVE-2025-4674
N/A
Security fixes for apigee-prometheus-adapter . This addresses the following vulnerabilities: CVE-2025-58188
CVE-2025-58187
CVE-2026-24051
CVE-2025-68119
CVE-2025-61731
CVE-2025-61729
CVE-2025-61726
CVE-2025-4674
N/A
Security fixes for apigee-redis . This addresses the following vulnerabilities: CVE-2025-68121
CVE-2025-68119
CVE-2025-61732
CVE-2025-61731
CVE-2025-61729
CVE-2025-61726
CVE-2025-61725
CVE-2025-61723
CVE-2025-58188
CVE-2025-58187
CVE-2025-47907
CVE-2025-4674
N/A
Security fixes for apigee-stackdriver-logging-agent . This addresses the following vulnerabilities: CVE-2025-61594
CVE-2025-24294
N/A
Security fixes for apigee-udca . This addresses the following vulnerabilities: CVE-2026-24051
CVE-2025-68121
CVE-2025-68119
CVE-2025-61732
CVE-2025-61731
CVE-2025-61729
CVE-2025-61726
CVE-2025-61725
CVE-2025-61723
CVE-2025-58188
CVE-2025-58187
CVE-2025-47907
BigQuery
Feature
You can now understand and debug BigQuery query performance with
a
visual mapping of your SQL query in the query execution graph .
A heatmap highlights the steps that consume more slot-time. This feature is
generally available
(GA).
Cloud Service Mesh
Security
1.28.5-asm.9 is now available for in-cluster Cloud Service Mesh.
This patch release contains fixes for the security vulnerabilities listed in
GCP-2026-013
as well as fixes for the following platform CVEs:
CVE
Proxy
Control Plane
Distroless
CNI
Severity
CVE-2025-13151
Yes
Yes
No
Yes
Medium (7.5)
CVE-2025-14831
Yes
Yes
No
Yes
Medium (5.3)
CVE-2025-15281
Yes
Yes
No
Yes
Medium (7.5)
CVE-2025-15467
Yes
Yes
No
Yes
Medium (9.8)
CVE-2025-15558
Yes
Yes
Yes
-
High (8.0)
CVE-2025-61726
Yes
Yes
Yes
Yes
High (7.5)
CVE-2025-61728
Yes
Yes
Yes
Yes
Medium (6.5)
CVE-2025-61730
Yes
Yes
Yes
Yes
Medium (5.3)
CVE-2025-61731
Yes
Yes
Yes
Yes
High (7.8)
CVE-2025-61732
Yes
Yes
Yes
Yes
High (8.6)
CVE-2025-68121
Yes
Yes
Yes
Yes
Critical (10)
CVE-2025-68160
Yes
Yes
No
Yes
Low (4.7)
CVE-2025-69418
Yes
Yes
No
Yes
Low (4.0)
CVE-2025-69419
Yes
Yes
No
Yes
Low (7.4)
CVE-2025-69420
Yes
Yes
Yes
Yes
Low (7.5)
CVE-2025-69421
Yes
Yes
Yes
Yes
Low (7.5)
CVE-2025-8277
Yes
Yes
No
Yes
Low (0)
CVE-2025-9820
Yes
Yes
No
Yes
Low (4)
CVE-2026-0861
Yes
Yes
No
Yes
Medium (8.4)
CVE-2026-0915
Yes
Yes
No
Yes
Medium (7.5)
CVE-2026-0964
Yes
Yes
No
Yes
Medium
CVE-2026-0965
Yes
Yes
No
Yes
Low
CVE-2026-0966
Yes
Yes
No
Yes
Low
CVE-2026-0967
Yes
Yes
No
Yes
Medium
CVE-2026-0968
Yes
Yes
No
Yes
Medium
CVE-2026-22795
Yes
Yes
No
Yes
Low (5.5)
CVE-2026-22796
Yes
Yes
No
Yes
Low (5.3)
CVE-2026-24051
Yes
Yes
Yes
Yes
High (7.0)
CVE-2026-25679
Yes
Yes
Yes
Yes
High (7.5)
For details on upgrading Cloud Service Mesh, see
Upgrade Cloud Service Mesh . Cloud Service
Mesh 1.28.5-asm.9 uses Envoy 1.36.5.
Security
1.27.8-asm.7 is now available for in-cluster Cloud Service Mesh.
This patch release contains fixes for the security vulnerabilities listed in
GCP-2026-013
as well as fixes for the following platform CVEs:
CVE
Proxy
Control Plane
Distroless
CNI
Severity
CVE-2025-13151
Yes
Yes
No
Yes
Medium (7.5)
CVE-2025-14831
Yes
Yes
No
Yes
Medium (5.3)
CVE-2025-15281
Yes
Yes
No
Yes
Medium (7.5)
CVE-2025-15467
Yes
Yes
Yes
Yes
Medium (9.8)
CVE-2025-15558
Yes
Yes
Yes
-
High (8.0)
CVE-2025-61726
Yes
Yes
Yes
Yes
High (7.5)
CVE-2025-61728
Yes
Yes
Yes
Yes
Medium (6.5)
CVE-2025-61730
Yes
Yes
Yes
Yes
Medium (5.3)
CVE-2025-61731
Yes
Yes
Yes
Yes
High (7.8)
CVE-2025-61732
Yes
Yes
Yes
Yes
High (8.6)
CVE-2025-68121
Yes
Yes
Yes
Yes
Critical (10)
CVE-2025-68160
Yes
Yes
No
Yes
Low (4.7)
CVE-2025-69418
Yes
Yes
No
Yes
Low (4.0)
CVE-2025-69419
Yes
Yes
No
Yes
Low (7.4)
CVE-2025-69420
Yes
Yes
Yes
Yes
Low (7.5)
CVE-2025-69421
Yes
Yes
Yes
Yes
Low (7.5)
CVE-2025-8277
Yes
Yes
No
Yes
Low (0)
CVE-2025-9820
Yes
Yes
No
Yes
Low (4)
CVE-2026-0861
Yes
Yes
No
Yes
Medium (8.4)
CVE-2026-0915
Yes
Yes
No
Yes
Medium (7.5)
CVE-2026-0964
Yes
Yes
No
Yes
Medium
CVE-2026-0965
Yes
Yes
No
Yes
Low
CVE-2026-0966
Yes
Yes
No
Yes
Low
CVE-2026-0967
Yes
Yes
No
Yes
Medium
CVE-2026-0968
Yes
Yes
No
Yes
Medium
CVE-2026-22795
Yes
Yes
No
Yes
Low (5.5)
CVE-2026-22796
Yes
Yes
No
Yes
Low (5.3)
CVE-2026-24051
Yes
Yes
Yes
Yes
High (7.0)
CVE-2026-25679
Yes
Yes
Yes
Yes
High (7.5)
For details on upgrading Cloud Service Mesh, see
Upgrade Cloud Service Mesh . Cloud Service
Mesh 1.27.8-asm.7 uses Envoy 1.35.9.
Security
The following images are now rolling out for managed Cloud Service Mesh:
Sidecar version 1.21.6-asm.16 is rolling out to the rapid release channel.
Sidecar version 1.20.8-asm.68 is rolling out to the regular release channel.
Sidecar version 1.19.10-asm.61 is rolling out to the stable release channel.
CNI and managed data plane controller version 1.23.6-asm.31 is rolling out to
all release channels.
These rollouts will preempt those previously announced on February 9, 2026 .
Managed Cloud Service Mesh will start using proxy version csm_mesh_proxy.20260304_RC00 for Gateway API on GKE clusters for all channels. This proxy version maps closest to Envoy version 1.37.
These patch releases contain the fixes for the vulnerabilities listed in
GCP-2026-013
as well as fixes for the following platform CVEs:
CVE
Proxy
Control Plane
Distroless
CNI
MDPC
Severity
CVE-2025-61726
Yes
Yes
Yes
-
-
High (7.5)
CVE-2025-61728
Yes
Yes
Yes
-
-
Medium (6.5)
CVE-2025-61730
Yes
Yes
Yes
-
-
Medium (5.3)
CVE-2025-61731
Yes
Yes
Yes
-
-
High (7.8)
CVE-2025-61732
Yes
Yes
Yes
-
-
High (8.6)
CVE-2025-68121
Yes
Yes
Yes
-
-
Critical (10)
CVE-2025-68160
Yes
Yes
No
-
-
Low (4.7)
CVE-2025-69418
Yes
Yes
No
-
-
Low (4.0)
CVE-2025-69419
Yes
Yes
No
-
-
Low (7.4)
CVE-2025-69420
Yes
Yes
No
-
-
Low (7.5)
CVE-2025-69421
Yes
Yes
No
-
-
Low (7.5)
CVE-2025-8277
-
-
-
Yes
Yes
Low (0)
CVE-2025-9820
-
-
-
Yes
Yes
Low (4.0)
CVE-2025-14831
-
-
-
Yes
Yes
Medium (5.3)
CVE-2025-15281
Yes
Yes
Yes
-
-
Medium (7.5)
CVE-2025-15467
Yes
Yes
No
-
-
Medium (9.8)
CVE-2026-0861
Yes
Yes
No
-
-
Medium (8.4)
CVE-2026-0915
Yes
Yes
No
-
-
Medium (7.5)
CVE-2026-0964
-
-
-
Yes
Yes
Medium
CVE-2026-0965
-
-
-
Yes
Yes
Low
CVE-2026-0966
-
-
-
Yes
Yes
Low
CVE-2026-0967
-
-
-
Yes
Yes
Medium
CVE-2026-0968
-
-
-
Yes
Yes
Medium
CVE-2026-22795
Yes
Yes
No
-
-
Low (5.5)
CVE-2026-22796
Yes
Yes
No
-
-
Low (5.3)
CVE-2026-24051
-
-
-
Yes
Yes
High (7.0)
CVE-2026-25679
Yes
Yes
-
-
-
High (7.5)
Security
1.26.8-asm.3 is now available for in-cluster Cloud Service Mesh.
This patch release contains fixes for the security vulnerabilities listed in
GCP-2026-013
as well as fixes for the following platform CVEs:
CVE
Proxy
Control Plane
Distroless
CNI
Severity
CVE-2025-13151
Yes
Yes
No
Yes
Medium (7.5)
CVE-2025-14831
Yes
Yes
No
Yes
Medium (5.3)
CVE-2025-15281
Yes
Yes
No
Yes
Medium (7.5)
CVE-2025-15467
Yes
Yes
Yes
Yes
Medium (9.8)
CVE-2025-15558
Yes
Yes
Yes
-
High (8.0)
CVE-2025-61726
Yes
Yes
Yes
Yes
High (7.5)
CVE-2025-61728
Yes
Yes
Yes
Yes
Medium (6.5)
CVE-2025-61730
Yes
Yes
Yes
Yes
Medium (5.3)
CVE-2025-61731
Yes
Yes
Yes
Yes
High (7.8)
CVE-2025-61732
Yes
Yes
Yes
Yes
High (8.6)
CVE-2025-68121
Yes
Yes
Yes
Yes
Critical (10)
CVE-2025-68160
Yes
Yes
No
Yes
Low (4.7)
CVE-2025-68973
Yes
Yes
Yes
Yes
High (7.8)
CVE-2025-69418
Yes
Yes
No
Yes
Low (4.0)
CVE-2025-69419
Yes
Yes
No
Yes
Low (7.4)
CVE-2025-69420
Yes
Yes
Yes
Yes
Low (7.5)
CVE-2025-69421
Yes
Yes
Yes
Yes
Low (7.5)
CVE-2025-8277
Yes
Yes
No
Yes
Low (0)
CVE-2025-9820
Yes
Yes
No
Yes
Low (4)
CVE-2026-0861
Yes
Yes
No
Yes
Medium (8.4)
CVE-2026-0915
Yes
Yes
No
Yes
Medium (7.5)
CVE-2026-0964
Yes
Yes
No
Yes
Medium
CVE-2026-0965
Yes
Yes
No
Yes
Low
CVE-2026-0966
Yes
Yes
No
Yes
Low
CVE-2026-0967
Yes
Yes
No
Yes
Medium
CVE-2026-0968
Yes
Yes
No
Yes
Medium
CVE-2026-22795
Yes
Yes
No
Yes
Low (5.5)
CVE-2026-22796
Yes
Yes
No
Yes
Low (5.3)
CVE-2026-24051
Yes
Yes
Yes
Yes
High (7.0)
CVE-2026-25679
Yes
Yes
Yes
Yes
High (7.5)
For details on upgrading Cloud Service Mesh, see
Upgrade Cloud Service Mesh . Cloud Service
Mesh 1.26.8-asm.3 uses Envoy 1.34.13.
Compute Engine
Issue
To address high-severity kernel vulnerabilities (including CVE-2025-21756 and CVE-2025-38052 ) in Rocky Linux 8 and 9, updates are available for the Compute Engine images maintained by CIQ . If your VM instances use images dated before September 2025 (version v20250912 ), you must take action to ensure you continue to receive security patches.
How to determine if your Compute Engine VMs are affected
You are affected if your VM instance uses a Rocky Linux image from an -optimized-gcp or -optimized-gcp-nvidia family with a version date older than v20250912 (for example, rocky-linux-9-optimized-gcp-v20250807 ). To check your VM's source image, see View VM instance image details . You can view details for these image families in Rocky Linux OS details .
Action required
If your image version is v20250912 or later: Your VM is already configured to use the newer SIG/Cloud Next (SCN) repositories and is receiving security updates. No action is required.
If your image version is older than v20250912 : Your VM is configured to use legacy SIG/Cloud repositories that no longer receive regular kernel updates and won't receive future security patches. While running sudo dnf update applies a one-time patch for the vulnerabilities listed, you must manually migrate the VM to the SCN repositories to receive ongoing updates by following the CIQ migration guide .
Dataproc
Announcement
Dataproc on Compute Engine: The following subminor image versions announced on March 08, 2026 have been rolled back:
2.1.110-debian11, 2.1.110-rocky8, 2.1.110-ubuntu20, 2.1.110-ubuntu20-arm
2.2.78-debian12, 2.2.78-rocky9, 2.2.78-ubuntu22, 2.2.78-ubuntu22-arm
2.3.25-debian12, 2.3.25-ml-ubuntu22, 2.3.25-rocky9, 2.3.25-ubuntu22, 2.3.25-ubuntu22-arm
Gemini Enterprise
Feature
Gemini Enterprise: Configure retention period for assistant chats
Gemini Enterprise administrators can configure the retention period for assistant
chat history. This feature is generally available (GA). For more information,
see Configure the assistant .
Feature
Gemini Enterprise: Data connector for Google Chat (Preview)
You can connect Google Chat data stores to Gemini Enterprise.
Support for Google Chat data stores is in Public Preview. For more information,
see Connect Google Chat .
Feature
Gemini Enterprise: Support for new actions (Preview)
New actions are available for the following data stores:
GitHub
Microsoft SharePoint
Notion
Shopify
For a list of actions for these data stores, see Supported
actions .
Google SecOps Marketplace
Change
CrowdStrike Falcon : Version 72.0
Updated the handling of Days To Expire in the following action:
Upload IOCs
Change
Case Federation : Version 7.0
Integration : Updated to support self-service configuration.
Change
ProofPoint TAP : Version 12.0
Updated input handling in the following action:
DecodeURL
Change
Microsoft Teams : Version 32.0
Updated reply handling in the following action:
Wait for Reply
Change
Introduced Light Theme compatibility for predefined widgets in the following
integrations:
CrowdStrike Falcon : Version 72.0
Google Chronicle : Version 79.0
Google Cloud API : Version 8.0
Google Cloud Asset Inventory : Version 13.0
Google Security Command Center : Version 16.0
Google Threat Intelligence : Version 10.0
HTTP v2 : Version 13.0
MITRE ATT&CK : Version 17.0
ScreenshotMachine : Version 14.0
Siemplify : Version 104.0
UrlScan.io : Version 28.0
Vertex AI : Version 5.0
VirusTotalV3 : Version 38.0
Vmware Carbon Black Cloud : Version 37.0
Looker
Feature
Beginning in Looker 26.4, customer-hosted Looker instances will use a new LookML parser with optimized performance. This parser is already in use for Looker-hosted instances. For customer-hosted instances on Looker 26.4, if you want to revert to the legacy parser, contact Looker Support for details on how to disable the new parser. The legacy parser will be fully deprecated in Looker 26.6.
Memorystore for Valkey
Feature
Support for version 9.0 of Valkey
is Generally Available .
Oracle Database@Google Cloud
Feature
For Exadata Database Service, Oracle Database@Google Cloud adds zone europe-west8-a-r1 (Milan, Italy).
For a list of supported locations, see Supported regions and zones .
Sensitive Data Protection
Feature
The CRIME_STATUS infoType detector is available in Preview . For more information about all infoTypes, see InfoType detector reference .
March 10, 2026
Apigee API hub
Feature
Security monitoring condition support in Advanced API Security for multi-gateway projects
Advanced API Security's multi-gateway Risk Assessment feature (available through
API hub) now includes support for security monitoring conditions and alerts.
Security monitoring conditions allow you to map resources (gateways) to security profiles.
Cloud Monitoring can then use this mapping to create dedicated dashboards to track security scores over time and alert based on metric levels.
For information on monitoring conditions features and usage see Manage monitoring conditions for multiple Apigee organizations and gateways .
Note: Rollouts of this release to production instances might take up to 5 business days to complete across all Google Cloud zones. Your instances might not have the feature available until the rollout is complete.
Feature
Support for Apigee Edge Private Cloud (OPDK) in Advanced API Security for multi-gateway projects
API hub Advanced API Security for multi-gateway now includes support for the OPDK
gateway type for risk assessment security profiles.
For information on risk assessment custom security profiles and gateway specification, see Create a security profile .
Note: Rollouts of this release to production instances might take up to 5 business days to complete across all Google Cloud zones. Your instances might not have the feature available until the rollout is complete.
Apigee Advanced API Security
Announcement
On March 10, 2026 we released an updated version of Advanced API Security Abuse Detection
Feature
General availability of monitoring conditions in risk assessment v2
Starting with this release, the risk assessment v2 monitoring conditions feature is generally available.
For information on monitoring conditions features and usage see monitoring conditions and alerts . For usage information and a list of all features in Risk Assessment v2, see the Risk Assessment v2 customer documentation .
Apigee X
Announcement
On March 10th, 2026, we released an updated version of Apigee (1-17-0-apigee-4).
Note: Rollouts of this release began today and may take four or more business days to be completed across all Google Cloud zones. Your instances may not have the features and fixes available until the rollout is complete.
Fixed
Bug ID
Description
N/A
Updates to infrastructure and libraries.
Security
Bug ID
Description
483769763, 481735779
Security fix for Apigee infrastructure. This addresses the following vulnerabilities: CVE-2025-61726
CVE-2025-61728
CVE-2025-61730
CVE-2025-61731
CVE-2025-61732
CVE-2026-24051
CVE-2026-25765
Cloud Composer
Announcement
Cloud Composer 2 environments can no longer be created in
Turin (europe-west12). We're switching this region to supporting only
Cloud Composer 3 environments.
Cloud Shell
Change
The Cloud Shell Editor is built with Code OSS for Cloud Shell 1.108.2
Cloud Storage
Feature
Rapid Bucket is now generally available .
Rapid Bucket lets you store objects in the Rapid storage class by defining a
zone as a bucket's location. This architecture optimizes data access and I/O
performance between your storage and compute resources. Rapid Bucket is most
suitable for data-intensive workloads like AI/ML and high-scale data analytics.
For more information, see Rapid Bucket
and Create zonal buckets .
Compute Engine
Feature
When you autoscale a managed instance group (MIG), you can monitor the
configured group size and the size recommended by the autoscaler on a chart. For
more information, see
Monitor group size .
Config Connector
Breaking
Config Connector version 1.144.0 was identified as a bad release. Do not use this version - upgrade directly to 1.145.0 or later.
Announcement
Config Connector version 1.146.0 is now available.
Feature
New Alpha Resources (Direct Reconciler):
ParameterManagerParameter
Manage Parameter Manager Parameters .
Feature
New Fields:
ContainerCluster
Added spec.controlPlaneEndpointsConfig.dnsEndpointConfig.enableK8sTokensViaDns field.
Change
Improvements:
ContainerCluster
Made spec.clusterAutoscaling.autoProvisioningDefaults.bootDiskKMSKeyRef mutable.
NetworkServicesWasmPlugin
Introduced identity and reference.
Added structured reporting diff to numerous direct controllers to enhance diff visibility.
Fixed
Bug Fixes:
SQLInstance
Added client-side default for RetainedBackups and RetentionUnit , and validated the edition field.
Added replicaConfiguration as an unmanageable field.
Controller now correctly defaults the field enablePrivatePathForGoogleCloudServices to false .
CertificateManagerDnsAuthorization
Sanitized Kubernetes labels to avoid 400 errors from invalid characters.
ConfigConnector Core
preview now performs an early exit when no resources are found to reconcile.
Fixed CRD field description for shared parent.
Fixed incorrect exit status in lint filter.
Updated mockgcp to improve compute regional resource mocks and defaults.
Container Optimized OS
Change
cos-113-18244-582-40
Kernel
Docker
Containerd
GPU Drivers
COS-6.1.161
v24.0.9
v1.7.27
See List
Fixed
Upgraded sys-apps/file to v5.47.
Security
Fixed CVE-2023-53421 in the Linux kernel.
Security
Fixed CVE-2025-13601, CVE-2025-14512, CVE-2025-14087 in
dev-libs/glib.
Security
Fixed CVE-2025-22026 in the Linux kernel.
Security
Fixed CVE-2025-37920 in the Linux kernel.
Security
Fixed CVE-2025-38201 in the Linux kernel.
Security
Fixed CVE-2025-38591 in the Linux kernel.
Security
Fixed CVE-2025-40251 in the Linux kernel.
Security
Fixed CVE-2025-71089 in the Linux kernel.
Security
Fixed CVE-2026-23176 in the Linux kernel.
Security
Fixed CVE-2026-23216 in the Linux kernel.
Change
cos-117-18613-534-35
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.123
v24.0.9
v1.7.29
See List
Fixed
Upgraded net-misc/socat to v1.8.1.1.
Fixed
Upgraded sys-apps/file to v5.47.
Security
Fixed CVE-2025-22026 in the Linux kernel.
Security
Fixed CVE-2025-38201 in the Linux kernel.
Security
Fixed CVE-2025-38234 in the Linux kernel.
Security
Fixed CVE-2026-23100 in the Linux kernel.
Security
Fixed CVE-2026-23216 in the Linux kernel.
Security
Fixed CVE-2026-23229 in the Linux kernel.
Security
Fixed CVE-2026-23230 in the Linux kernel.
Security
Upgraded dev-libs/glib to v2.86.3 and gdbus-codegen to v2.86.3. This fixes
CVE-2025-14087, CVE-2025-14512 and CVE-2025-13601.
Change
cos-121-18867-381-30
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.122
v27.5.1
v2.0.7
See List
Fixed
Upgraded app-admin/sosreport to v4.11.0.
Fixed
Upgraded net-misc/socat to v1.8.1.1.
Fixed
Upgraded sys-apps/file to v5.47.
Security
Fixed CVE-2025-38234 in the Linux kernel.
Security
Fixed CVE-2026-23100 in the Linux kernel.
Google Cloud Contact Center as a Service
Announcement
Mobile SDK patch
This patch fixes an iOS SDK issue where end-users were directed to an
unresponsive support page after closing a chat session and completing the
post-chat survey.
Google Cloud VMware Engine
Feature
Public Preview: You can now migrate VMware management VMs
from their host cluster to a different cluster within the same private cloud.
To migrate management VMs, you must have at least two clusters in your private
cloud, and the destination cluster must be a workload cluster. This operation
transitions the target workload cluster to a management cluster, and the source
management cluster becomes a workload cluster.
Google Kubernetes Engine
Feature
Managed OpenTelemetry for GKE is available in Preview for
clusters running version 1.34.1-gke.2178000 or later. Managed OpenTelemetry for
GKE provides a fully managed and simplified experience for
collecting OpenTelemetry Protocol (OTLP) traces, metrics, and logs on
GKE. This feature includes the following characteristics:
Managed collection: an in-cluster OTLP endpoint that automatically routes
telemetry to the Cloud Telemetry API.
Automatic configuration: a new Instrumentation custom resource that
automatically injects environment variables into your workloads to simplify
OTLP ingestion.
For more information, see
Managed OpenTelemetry for GKE .
Google SecOps
Feature
Set up and manage data processing pipelines
This feature is currently in Preview.
You can now use the Data Processing pipelines to filter, transform, and redact
Google SecOps data before ingestion. This feature provides more
control over ingested data, letting you reduce costs by filtering out
unwanted events, transform data for better compatibility, and protect
sensitive information by redacting or masking values before storage.
You can configure data processing pipelines using the Bindplane console or the
Google SecOps Data Pipeline APIs.
For more information, see Set up and manage data processing pipelines .
Google SecOps SIEM
Feature
Set up and manage data processing pipelines
This feature is currently in Preview.
You can now use the Data Processing pipelines to filter, transform, and redact
Google SecOps data before ingestion. This feature provides more
control over ingested data, letting you reduce costs by filtering out
unwanted events, transform data for better compatibility, and protect
sensitive information by redacting or masking values before storage.
You can configure data processing pipelines using the Bindplane console or the
Google SecOps Data Pipeline APIs.
For more information, see Set up and manage data processing pipelines .
SAP on Google Cloud
Announcement
Workload Manager observability service is generally available for SAP workloads
The observability service of Workload Manager is generally
available (GA). This service is a built-in monitoring solution for SAP workloads
running on Google Cloud that helps you improve issue detection, root cause
analysis, and troubleshooting.
For more information, see
SAP observability overview .
Spanner
Feature
Spanner supports the optimistic concurrency control mode.
Optimistic concurrency control is suitable for transactional workloads with low
read-write contention. It assumes that conflicts in transactions are rare. Reads
and queries within a read-write transaction proceed without acquiring
locks. For more information, see Concurrency control .
VPC Service Controls
Feature
General availability support
for the following integration:
Managed Lustre
March 09, 2026
BigQuery
Feature
Updates to conversational analytics include the following improvements:
ObjectRef support: BigQuery conversational analytics now
integrates with Google Cloud Storage through ObjectRef functions .
This lets you reference and interact with unstructured data such as images and
PDFs in Cloud Storage buckets in your conversational analysis.
BQML support: BigQuery conversational analytics now supports a set of BigQuery ML functions ,
including AI.FORECAST, AI.DETECT_ANOMALIES, and AI.GENERATE. These functions
let you perform advanced analytics tasks with simple conversational prompts.
Chat with BigQuery results: You can now start conversations and chat with
query results in BigQuery Studio (SQL editor).
Enhanced support for partitioned tables: BigQuery conversational analytics can
now use BigQuery table partitioning. The agent can optimize SQL queries by
using partitioned columns such as date ranges on a date-partitioned table.
This can improve query performance and reduce costs.
Labels for agent-generated queries: BigQuery jobs initiated by the
conversational analytics agent are now labeled in BigQuery Job History
in the Google Cloud Console. You can identify, filter, and analyze the jobs
run by the conversational analytics agent by referencing labels similar to
{'ca-bq-job': 'true'} . These labels can help with the following tasks:
Monitor and attribute cost.
Audit agent activity.
Analyze agent-generated query performance.
Suggest next questions (clickable): When working with BigQuery
conversational analytics, the agent now suggests questions that are directly
clickable in the Google Cloud console.
This feature is available in Preview .
Cloud Monitoring
Feature
You can configure legend templates for PromQL-formatted charts.
To learn more, see
Configure the name of a legend column .
Cloud SQL for MySQL
Feature
You can now execute SQL statements using the Cloud SQL Data API for
administrative queries.
Cloud SQL for PostgreSQL
Feature
You can now execute SQL statements using the Cloud SQL Data API for
administrative queries.
Cloud Trace
Change
You can send trace data to your Google Cloud project by using the Cloud Trace API or
the Telemetry API. These two APIs are enabled individually.
If you send trace data to the Telemetry API endpoint, then Google Cloud Observability
requires that the Cloud Trace API be enabled on your Google Cloud project before
it stores the trace data. If the Cloud Trace API is disabled, then Google Cloud Observability
discards the trace data.
To learn more, see
APIs that ingest trace data .
Google Cloud VMware Engine
Announcement
The VMware Engine ve2 node type is now available in the following
additional region:
Los Angeles, USA, North America ( us-west2-b )
Looker
Feature
It is no longer necessary to manually configure OAuth credentials when creating a Looker (Google Cloud core) instance that uses only public secure connections and no custom domain. For these instances, Looker (Google Cloud core) now automatically manages OAuth client and secret information, simplifying the setup process. Manual OAuth configuration is still required for instances that use private connections, hybrid connections, or a custom domain.
Security Command Center
Announcement
In March 2026, Risk Engine will launch enhanced heuristics to more accurately
identify default high-value resources .
No action is required. As a result of this enhancement, customers using the
default high-value resource set may observe changes in the exposure scores of
their findings, resources, and issues. Customers using custom resource value
configurations are not affected.
Storage Transfer Service
Change
The size limit for manifest files used in agent-based transfers has been removed.
For more information, see
Transfer specific files or objects using a manifest .
March 08, 2026
Container Optimized OS
Change
cos-125-19216-220-43
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Updated cos-gpu-installer to v2.6.0.
Fixed
Upgraded app-admin/node-problem-detector to v0.8.25.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
Dataproc
Announcement
New Dataproc on Compute Engine subminor image versions :
2.1.110-debian11, 2.1.110-rocky8, 2.1.110-ubuntu20, 2.1.110-ubuntu20-arm
2.2.78-debian12, 2.2.78-rocky9, 2.2.78-ubuntu22, 2.2.78-ubuntu22-arm
2.3.25-debian12, 2.3.25-ml-ubuntu22, 2.3.25-rocky9, 2.3.25-ubuntu22, 2.3.25-ubuntu22-arm
Rollback Notice: These image versions were rolled back on March 11, 2026 .
Fixed
Fixed CVEs CVE-2025-58057, CVE-2025-53864, CVE-2025-68161, CVE-2025-48924 (partial), and CVE-2025-33042.
Upgraded Dataproc Metastore Proxy to v0.0.78 to fix CVEs.
Google SecOps SOAR
Announcement
Release 6.3.79 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
March 07, 2026
Container Optimized OS
Change
cos-125-19216-220-39
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Fixed
Fixed a kernel bug which could cause traffic drops after NIC resets.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250715 376068 -> 188034 250714 376068
Google SecOps SOAR
Announcement
Release 6.3.78 is now available for all regions.
Sensitive Data Protection
Feature
You can configure Sensitive Data Protection to detect specific metadata
labels in your content. For more information, see Create a custom metadata
label detector .
March 06, 2026
BigQuery
Feature
You can create a remote model
based on the Vertex AI gemini-embedding-001 model, or a
remote model
based on an open embedding model from Vertex Model Garden or Hugging Face that
is deployed to Vertex AI.
You can then use the
AI.GENERATE_EMBEDDING function
with these remote models to generate embeddings. You can also use the
AI.EMBED function
directly with the gemini-embedding-001 model endpoint.
These features are
generally available
(GA).
Feature
You can now use the Pipelines & Connections page
to streamline your data integration tasks by using guided,
BigQuery-specific configuration workflows for services like
BigQuery Data Transfer Service, Datastream, and Pub/Sub.
This feature is in Preview .
Bigtable
Feature
Bigtable tools in the Agent Development Kit (ADK)
are generally available (GA) .
With these tools, you can build AI agents that interact with Bigtable to
discover metadata about Bigtable tables and instances and execute LLM-powered
SQL queries.
Cloud Storage
Feature
You can now identify publicly accessible objects ( preview ) by using Storage Insights
datasets. The object metadata schema includes fields that provide the public
access status of your objects, which lets you understand, organize, and manage
publicly accessible objects at scale.
Cloud Workstations
Announcement
The Cloud Workstations base editor
(Code OSS for Cloud Workstations) has been upgraded to 1.108.2 . The last image that offers the
previous version is tagged code-oss-1.104.3 .
Config Controller
Change
Config Controller now uses the following versions of its included products:
Config Connector v1.134.4, release notes
Container Optimized OS
Change
cos-125-19216-220-38
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Security
Fixed CVE-2026-23100 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250715 376068 -> 188034 250714 376068
Dataproc
Announcement
New Serverless for Apache Spark runtime versions :
1.2.74
2.2.74
2.3.27
3.0.10
Announcement
Serverless for Apache Spark 3.0 runtime version:
Updated Spark version to 4.0.1 .
Updated BigQuery Spark Connector version to 0.44.0 .
Applied patch for SPARK-52601 .
Applied patch for SPARK-52614 .
Announcement
Serverless for Apache Spark 1.2 , 2.2 and 2.3 runtime versions:
Updated Delta Lake version to 3.2.1 .
Gemini
Other
Bug fixes in IntelliJ
Various bug fixes and minor product enhancements.
Other
Bug fixes in VS Code
Various bug fixes and minor product enhancements.
Google Cloud Armor
Security
Security fixes and enhancements to Cloud Armor preconfigured WAF canary
rulesets for v3.0. For more information, see Tuning Google Cloud Armor WAF
rules .
The following rulesets have been updated:
sqli-canary
xss-canary
lfi-canary
rfi-canary
rce-canary
methodenforcement-canary
scannerdetection-canary
protocolattack-canary
php-canary
sessionfixation-canary
Looker Studio
Feature
Correction: CSV connector enhancement available to all users
Enhancements to the CSV connector user interface are available to all Looker Studio users. This feature was previously announced as being available only to Looker Studio Pro users.
Oracle Database@Google Cloud
Feature
For Exadata Database Service and Autonomous Database Service, Oracle Database@Google Cloud supports the europe-west8-b-r1 (Milan, Italy) region.
For a list of supported locations, see Supported regions and zones .
March 05, 2026
AlloyDB for PostgreSQL
Feature
AlloyDB enhanced backups are generally available
( GA ).
You can now select the Enhanced tier during cluster creation, manage your
project-level backups with tiered tabs, and delete an enhanced backup. For more
information, see
Manage enhanced backups .
Apigee Integrated Portal
Announcement
On March 5, 2026 we released a new version of the Apigee integrated portal.
Feature
You can now publish APIs using AsyncAPI documents to render documentation for asynchronous APIs in your portal. For more information, see Publishing your APIs .
BigQuery
Change
An updated version of the
Simba ODBC driver for BigQuery
is now available.
Feature
You can now use an alternate syntax when you call the
VECTOR_SEARCH function
to improve query performance when you search for a single vector. This feature
is in Preview .
Cloud Storage
Feature
You can now analyze object data and metadata from your Storage Insights
datasets by using BigQuery ObjectRef functions. The ref column in the
dataset contains a reference to the Cloud Storage object which you can use with
ObjectRef functions to analyze object content. For example, you can build
queries to help detect sensitive information in documents or to generate image
descriptions. For more information, see
Analyze object data and metadata using BigQuery .
Cluster Toolkit
Feature
Cluster Toolkit version v1.83.0 is available. This release introduces
early conditional and required validations, adds support for A4X-Max Bare Metal
on GKE and Slurm, and enables Dynamic Workload Scheduler Queued Provisioning
for TPU v6e and 7x. It also includes several module migrations to Helm and pins
Terraform to version 1.12.2. For details, see the Release announcement on
GitHub .
Compute Engine
Issue
For Red Hat Enterprise Linux (RHEL) operating system, VM Manager provides
vulnerability scanning results based on the latest minor version for each major
version released. If your VM runs an earlier minor version of RHEL, you might get
inaccurate results in the vulnerability reports. For more information about
supported operating systems for vulnerability reports, see supported operating
systems .
Firestore
Feature
Firestore Enterprise edition now supports Native mode in
all supported regions. For a list of supported regions, see
Locations .
Google Distributed Cloud (software only) for VMware
Change
Google Distributed Cloud (software only) for VMware V2 (Advanced Clusters) versions 1.31
and earlier were missing a configuration step in the node startup script that
defined the Docker default bridge IP range. As a result, Docker defaulted to
using the 172.17.0.0/16 (and in some cases 172.16.0.0/16) address range.
If this default range overlaps with customer network infrastructure,
connectivity failures during cluster creation or operation can occur.
This issue has been resolved. The Docker default bridge IP for cluster nodes in
advanced clusters is now explicitly set to 169.254.123.1/24.
Announcement
Google Distributed Cloud (software only) for VMware 1.32.900-gke.60 is now available
for download. To upgrade, see Upgrade clusters .
Important: There is a mandatory flag for admin cluster upgrades; see the updated entry for March 20, 2026 .
Google Distributed Cloud 1.32.900-gke.60 runs on Kubernetes v1.32.11-gke.200.
If you are using a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release.
After a release, it takes approximately 7 to 14 days for the version to become
available for use with GKE On-Prem API clients: the Google Cloud console, the
gcloud CLI, and Terraform.
Fixed
The following issues were fixed in 1.32.900-gke.60:
Fixed vulnerabilities listed in Vulnerability fixes .
Google Distributed Cloud (software only) for bare metal
Announcement
Google Distributed Cloud (software only) for bare metal 1.32.900-gke.60 is now available for
download. To upgrade, see Upgrade clusters .
Google Distributed Cloud for bare metal
1.32.900-gke.60 runs on Kubernetes v1.32.11-gke.200.
After a release, it takes approximately 7 to 14 days for the version to become
available for installations or upgrades with the GKE On-Prem API clients: the
Google Cloud console, the gcloud CLI, and Terraform.
If you use a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release of Google Distributed Cloud for bare metal.
Fixed
The following issues were fixed in 1.32.900-gke.60:
Fixed vulnerabilities listed in Vulnerability fixes .
Google Kubernetes Engine
Feature
GKE Inference Quickstart (GIQ) now offers
recommendations for distributed AI inference. This enables you to deploy
optimized, full configurations for advanced models, such as the Qwen and gpt-oss
model families, on NVIDIA GPUs and Cloud TPUs.
This release introduces GKE Inference Gateway by integrating
llm-d inference scheduling. You can select optimized configurations for
workloads like Advanced Customer Support, Code Completion, and Deep Research.
This tunes your infrastructure to meet the specific latency and throughput
requirements of these applications.
For more information, see Analyze model serving performance and costs with Inference Quickstart .
Feature
You can use automated disk type selection for Hyperdisk volumes on
GKE. This feature allows GKE to automatically
select the most appropriate disk type based on the machine type of the node
where your workload is scheduled.
With this feature, you can create a single StorageClass that supports clusters
with mixed VM generations. For example, GKE can provision
Hyperdisk on compatible instances (such as C3 or C4) while automatically falling
back to Persistent Disk on other generations.
For more information, see Automated disk type selection .
Feature
The H4D machine series ,
designed for high performance computing (HPC) workloads, is generally available
for GKE clusters. Based on 5th generation AMD EPYC Turin with
Cloud RDMA 200 Gbps networking, H4D VMs offer 192 cores (SMT disabled), up to
1,488 GB of memory, and 3,750 GiB of Local SSD. H4D is optimized for
tightly-coupled applications that scale across multiple nodes and offers
RDMA-enabled 200 Gbps networking.
You can use H4D with GKE clusters in Standard, or with
the Performance compute class in Autopilot. For more information, see
Run high performance computing (HPC) workloads with H4D .
Change
(2026-R9) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for
manual control plane upgrades and node upgrades for existing clusters. For more
information about versioning and upgrades, see GKE versioning and
support and About GKE
cluster upgrades .
Rapid channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.1-gke.1396001 is now the default version for cluster creation in the Rapid channel.
The following versions are now available in the Rapid channel:
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.1-gke.1396001
1.35.1-gke.1616000
The following versions are no longer available in the Rapid channel:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.3047001
1.35.1-gke.1396000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1076000
1.32 to 1.33.8-gke.1112000
1.33 to 1.34.4-gke.1130000
1.34 to 1.35.1-gke.1396001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1076000
1.33 to 1.33.8-gke.1112000
1.34 to 1.34.4-gke.1130000
1.35 to 1.35.1-gke.1396001
Regular channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1444000 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2745005
1.35.0-gke.3047002
The following versions are no longer available in the Regular channel:
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
1.35.0-gke.2398002
1.35.0-gke.2745004
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1264000
1.32 to 1.33.5-gke.2469000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1264000
1.33 to 1.33.5-gke.2469000
1.34 to 1.34.3-gke.1444000
1.35 to 1.35.0-gke.2745005
Stable channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.5-gke.2326000 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
The following versions are no longer available in the Stable channel:
1.32.11-gke.1038000
1.33.5-gke.2228001
1.34.3-gke.1051003
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1174000
1.32 to 1.33.5-gke.2326000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1174000
1.33 to 1.33.5-gke.2326000
1.34 to 1.34.3-gke.1245000
Extended channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1444000 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.2071000
1.30.14-gke.2154000
1.31.14-gke.1423000
1.31.14-gke.1526000
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2745005
1.35.0-gke.3047001
1.35.0-gke.3047002
The following versions are no longer available in the Extended channel:
1.30.14-gke.1991000
1.30.14-gke.2117000
1.31.14-gke.1336000
1.31.14-gke.1476000
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
1.35.0-gke.2398002
1.35.0-gke.2745004
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.29 to 1.30.14-gke.2026000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.30 to 1.30.14-gke.2026000
1.31 to 1.31.14-gke.1376000
1.32 to 1.32.11-gke.1264000
1.33 to 1.33.5-gke.2469000
1.34 to 1.34.3-gke.1444000
1.35 to 1.35.0-gke.2745005
No channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1444000 is now the default version for cluster creation.
The following versions are now available:
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.0-gke.2745005
1.35.0-gke.3047002
1.35.1-gke.1396001
1.35.1-gke.1616000
The following node versions are now available:
1.30.14-gke.2154000
1.31.14-gke.1526000
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.0-gke.2745005
1.35.0-gke.3047002
1.35.1-gke.1396001
1.35.1-gke.1616000
The following versions are no longer available:
1.32.11-gke.1038000
1.33.5-gke.2172001
1.34.3-gke.1051003
1.35.0-gke.2398002
1.35.0-gke.2745003
1.35.0-gke.2745004
1.35.1-gke.1396000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1264000
1.32 to 1.33.5-gke.2326000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1264000
1.33 to 1.33.5-gke.2326000
1.34 to 1.34.3-gke.1444000
1.35 to 1.35.0-gke.2745005
Change
(2026-R9) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.5-gke.2326000 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
The following versions are no longer available in the Stable channel:
1.32.11-gke.1038000
1.33.5-gke.2228001
1.34.3-gke.1051003
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1174000
1.32 to 1.33.5-gke.2326000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1174000
1.33 to 1.33.5-gke.2326000
1.34 to 1.34.3-gke.1245000
Change
(2026-R9) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1444000 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2745005
1.35.0-gke.3047002
The following versions are no longer available in the Regular channel:
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
1.35.0-gke.2398002
1.35.0-gke.2745004
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1264000
1.32 to 1.33.5-gke.2469000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1264000
1.33 to 1.33.5-gke.2469000
1.34 to 1.34.3-gke.1444000
1.35 to 1.35.0-gke.2745005
Change
(2026-R9) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.1-gke.1396001 is now the default version for cluster creation in the Rapid channel.
The following versions are now available in the Rapid channel:
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.1-gke.1396001
1.35.1-gke.1616000
The following versions are no longer available in the Rapid channel:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.3047001
1.35.1-gke.1396000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1076000
1.32 to 1.33.8-gke.1112000
1.33 to 1.34.4-gke.1130000
1.34 to 1.35.1-gke.1396001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1076000
1.33 to 1.33.8-gke.1112000
1.34 to 1.34.4-gke.1130000
1.35 to 1.35.1-gke.1396001
Change
(2026-R9) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1444000 is now the default version for cluster creation.
The following versions are now available:
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.0-gke.2745005
1.35.0-gke.3047002
1.35.1-gke.1396001
1.35.1-gke.1616000
The following node versions are now available:
1.30.14-gke.2154000
1.31.14-gke.1526000
1.32.12-gke.1127000
1.33.8-gke.1169000
1.34.4-gke.1193000
1.35.0-gke.2745005
1.35.0-gke.3047002
1.35.1-gke.1396001
1.35.1-gke.1616000
The following versions are no longer available:
1.32.11-gke.1038000
1.33.5-gke.2172001
1.34.3-gke.1051003
1.35.0-gke.2398002
1.35.0-gke.2745003
1.35.0-gke.2745004
1.35.1-gke.1396000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1264000
1.32 to 1.33.5-gke.2326000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1264000
1.33 to 1.33.5-gke.2326000
1.34 to 1.34.3-gke.1444000
1.35 to 1.35.0-gke.2745005
Change
(2026-R9) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1444000 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.2071000
1.30.14-gke.2154000
1.31.14-gke.1423000
1.31.14-gke.1526000
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2745005
1.35.0-gke.3047001
1.35.0-gke.3047002
The following versions are no longer available in the Extended channel:
1.30.14-gke.1991000
1.30.14-gke.2117000
1.31.14-gke.1336000
1.31.14-gke.1476000
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
1.35.0-gke.2398002
1.35.0-gke.2745004
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.29 to 1.30.14-gke.2026000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.30 to 1.30.14-gke.2026000
1.31 to 1.31.14-gke.1376000
1.32 to 1.32.11-gke.1264000
1.33 to 1.33.5-gke.2469000
1.34 to 1.34.3-gke.1444000
1.35 to 1.35.0-gke.2745005
Google SecOps
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region. For more information, see Supported log types and default parsers .
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.
Acalvio ( ACALVIO )
AIX system ( AIX_SYSTEM )
Akamai WAF ( AKAMAI_WAF )
Apache ( APACHE )
Apache Cassandra ( CASSANDRA )
Apache Hadoop ( HADOOP )
Arcsight CEF ( ARCSIGHT_CEF )
Aruba EdgeConnect SD-WAN ( ARUBA_EDGECONNECT_SDWAN )
Attivo Networks ( ATTIVO )
AWS Aurora ( AWS_AURORA )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS GuardDuty ( GUARDDUTY )
AWS Network Firewall ( AWS_NETWORK_FIREWALL )
AWS Security Hub ( AWS_SECURITY_HUB )
AWS WAF ( AWS_WAF )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Sign-In ( AZURE_AD_SIGNIN )
Azure Firewall ( AZURE_FIREWALL )
Azure Front Door ( AZURE_FRONT_DOOR )
Barracuda Email ( BARRACUDA_EMAIL )
Barracuda Firewall ( BARRACUDA_FIREWALL )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Check Point ( CHECKPOINT_FIREWALL )
Check Point Harmony ( CHECKPOINT_HARMONY )
Cisco Application Centric Infrastructure ( CISCO_ACI )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco ISE ( CISCO_ISE )
Cisco Router ( CISCO_ROUTER )
Cisco Secure Access ( CISCO_SECURE_ACCESS )
Cisco Switch ( CISCO_SWITCH )
Cisco TACACS+ ( CISCO_TACACS )
Cisco UCM ( CISCO_UCM )
Cisco Umbrella Audit ( CISCO_UMBRELLA_AUDIT )
Citrix Netscaler ( CITRIX_NETSCALER )
Claroty Continuous Threat Detection ( CLAROTY_CTD )
Claroty Enterprise Management Console ( CLAROTY_EMC )
Claroty Xdome ( CLAROTY_XDOME )
Cloud SQL ( GCP_CLOUDSQL )
Cloudflare ( CLOUDFLARE )
Cloudflare Audit ( CLOUDFLARE_AUDIT )
Cloudflare WAF ( CLOUDFLARE_WAF )
Cloudflare Warp ( CLOUDFLARE_WARP )
Corelight ( CORELIGHT )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
CyberArk ( CYBERARK )
CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK_EPM )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Dell EMC Data Domain ( DELL_EMC_DATA_DOMAIN )
Dell Switch ( DELL_SWITCH )
Duo Auth ( DUO_AUTH )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
F5 Distributed Cloud Services ( F5_DCS )
F5 DNS ( F5_DNS )
FireEye NX ( FIREEYE_NX )
Forcepoint NGFW ( FORCEPOINT_FIREWALL )
Forcepoint Proxy ( FORCEPOINT_WEBPROXY )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Google Cloud ( GCP_SECURITYCENTER_THREAT )
Google Cloud ( GCP_MONITORING_ALERTS )
Google Threat Intelligence IOC ( GTI_IOC )
GreyNoise ( GREYNOISE )
Halcyon Anti Ransomware ( HALCYON )
HP Aruba (ClearPass) ( CLEARPASS )
Huawei Switches ( HUAWEI_SWITCH )
Infoblox DNS ( INFOBLOX_DNS )
Island Browser logs ( ISLAND_BROWSER )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
Linux Sysmon ( LINUX_SYSMON )
ManageEngine ADAudit Plus ( ADAUDIT_PLUS )
Maria Database ( MARIA_DB )
McAfee IPS ( MCAFEE_IPS )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Defender For Cloud ( MICROSOFT_DEFENDER_CLOUD_ALERTS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft SQL Server ( MICROSOFT_SQL )
MISP Threat Intelligence ( MISP_IOC )
Mobileiron ( MOBILEIRON )
MySQL ( MYSQL )
NetApp ONTAP ( NETAPP_ONTAP )
Netskope V2 ( NETSKOPE_ALERT_V2 )
NGINX ( NGINX )
Nozomi Networks Scada Guardian ( NOZOMI_GUARDIAN )
Office 365 ( OFFICE_365 )
Open Cybersecurity Schema Framework (OCSF) ( OCSF )
Orca Cloud Security Platform ( ORCA )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
Ping One ( PING_ONE )
PingIdentity Directory Server Logs ( PING_DIRECTORY )
PostFix Mail ( POSTFIX_MAIL )
PostgreSQL ( POSTGRESQL )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Red Hat OpenShift ( REDHAT_OPENSHIFT )
Rubrik Security Cloud ( RUBRIK_SECURITY_CLOUD )
SailPoint IdentityIQ ( SAILPOINT_IIQ )
Salesforce ( SALESFORCE )
SAP Change Document ( SAP_CHANGE_DOCUMENT )
SAP Gateway ( SAP_GATEWAY )
SAP HANA ( SAP_HANA )
SAP Hana Audit ( SAP_HANA_AUDIT )
SAP Identity and Authentication Data ( SAP_IDENTITY_AND_AUTH_DATA )
SAP Internet Communication Manager ( SAP_ICM )
SAP Security Audit ( SAP_SECURITY_AUDIT )
SAP Webdispatcher ( SAP_WEBDISP )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
Sophos Central ( SOPHOS_CENTRAL )
STIX Threat Intelligence ( STIX )
Stormshield Firewall ( STORMSHIELD_FIREWALL )
Suricata EVE ( SURICATA_EVE )
Symantec Endpoint Protection ( SEP )
Sysdig ( SYSDIG )
Tableau ( TABLEAU )
Teleport Access Plane ( TELEPORT_ACCESS_PLANE )
Trend Micro ( TIPPING_POINT )
Tripwire ( TRIPWIRE_FIM )
TXOne Stellar ( TRENDMICRO_STELLAR )
Ubika Waf ( UBIKA_WAF )
Unix system ( NIX_SYSTEM )
Velo Firewall ( VELO_FIREWALL )
Veritas NetBackup ( VERITAS_NETBACKUP )
Versa Firewall ( VERSA_FIREWALL )
Vmware Avinetworks iWAF ( VMWARE_AVINETWORKS_IWAF )
VMware ESXi ( VMWARE_ESX )
VMware vCenter ( VMWARE_VCENTER )
WatchGuard ( WATCHGUARD )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
wiz.io ( WIZ_IO )
Workday Audit Logs ( WORKDAY_AUDIT )
Zscaler ( ZSCALER_WEBPROXY )
ZScaler VPN ( ZSCALER_VPN )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Alibaba Security Center ( ALIBABA_SECURITY_CENTER )
Apache Airflow ( APACHE_AIRFLOW )
Baramundi ( BARAMUNDI )
Bravura Security ( BRAVURA )
Buildkite Audit ( BUILDKITE_AUDIT )
Palo Alto Cortex Xpanse ( CORTEX_XPANSE )
Cyfirma DeCYFIR ServiceNow ( CYFIRMA_DECYFIR )
DATEV ( DATEV )
ELO ( ELO )
Forcepoint Secure Web Gateway ( FORCEPOINT_SWG )
JumpServer PAM ( JUMPSERVER_PAM )
Keep Aware ( KEEP_AWARE )
Lark Suite ( LARK_SUITE )
Macmon ( MACMON )
Mamori Database Activity Monitoring ( MAMORI_DAM )
N8N Security Audit Logs ( N8N_SECURITY_AUDIT_LOGS )
Oracle Cloud Infrastructure LoadBalancer ( OCI_LOADBALANCER )
OpenText Self Service Password Reset ( OPENTEXT_SSPR )
Rackspace ( RACKSPACE )
Secui Bluemax NGF ( SECUI_BLUEMAX_NGF )
Symantec Advanced Threat Protection ( SYMANTEC_ATP )
Tenable Vulnerabilities Management ( TENABLE_VMGNT )
Trellix EDRF Trace Data and Telemetry ( TRELLIX_EDRF )
Trend Micro Vision One Endpoint Vulnerabilities ( TRENDMICRO_VISION_ONE_ENDPOINT_VULNERABILITIES )
Zafran ( ZAFRAN )
Announcement
Google Agentic SOC Trial
There will be a no-cost trial for the Google SecOps Triage Investigative Agent
(TIN) from April 1, 2026 to June 30, 2026. TIN is an agentic AI feature for Google
SecOps that helps automate security investigations. For more information about
the trial, see Google Agentic SOC Trial details .
For more information about TIN, see
Use Triage and Investigation Agent to investigate alerts .
Google SecOps SIEM
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region. For more information, see Supported log types and default parsers .
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.
Acalvio ( ACALVIO )
AIX system ( AIX_SYSTEM )
Akamai WAF ( AKAMAI_WAF )
Apache ( APACHE )
Apache Cassandra ( CASSANDRA )
Apache Hadoop ( HADOOP )
Arcsight CEF ( ARCSIGHT_CEF )
Aruba EdgeConnect SD-WAN ( ARUBA_EDGECONNECT_SDWAN )
Attivo Networks ( ATTIVO )
AWS Aurora ( AWS_AURORA )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS GuardDuty ( GUARDDUTY )
AWS Network Firewall ( AWS_NETWORK_FIREWALL )
AWS Security Hub ( AWS_SECURITY_HUB )
AWS WAF ( AWS_WAF )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Sign-In ( AZURE_AD_SIGNIN )
Azure Firewall ( AZURE_FIREWALL )
Azure Front Door ( AZURE_FRONT_DOOR )
Barracuda Email ( BARRACUDA_EMAIL )
Barracuda Firewall ( BARRACUDA_FIREWALL )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Check Point ( CHECKPOINT_FIREWALL )
Check Point Harmony ( CHECKPOINT_HARMONY )
Cisco Application Centric Infrastructure ( CISCO_ACI )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco ISE ( CISCO_ISE )
Cisco Router ( CISCO_ROUTER )
Cisco Secure Access ( CISCO_SECURE_ACCESS )
Cisco Switch ( CISCO_SWITCH )
Cisco TACACS+ ( CISCO_TACACS )
Cisco UCM ( CISCO_UCM )
Cisco Umbrella Audit ( CISCO_UMBRELLA_AUDIT )
Citrix Netscaler ( CITRIX_NETSCALER )
Claroty Continuous Threat Detection ( CLAROTY_CTD )
Claroty Enterprise Management Console ( CLAROTY_EMC )
Claroty Xdome ( CLAROTY_XDOME )
Cloud SQL ( GCP_CLOUDSQL )
Cloudflare ( CLOUDFLARE )
Cloudflare Audit ( CLOUDFLARE_AUDIT )
Cloudflare WAF ( CLOUDFLARE_WAF )
Cloudflare Warp ( CLOUDFLARE_WARP )
Corelight ( CORELIGHT )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
CyberArk ( CYBERARK )
CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK_EPM )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Dell EMC Data Domain ( DELL_EMC_DATA_DOMAIN )
Dell Switch ( DELL_SWITCH )
Duo Auth ( DUO_AUTH )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
F5 Distributed Cloud Services ( F5_DCS )
F5 DNS ( F5_DNS )
FireEye NX ( FIREEYE_NX )
Forcepoint NGFW ( FORCEPOINT_FIREWALL )
Forcepoint Proxy ( FORCEPOINT_WEBPROXY )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Google Cloud ( GCP_SECURITYCENTER_THREAT )
Google Cloud ( GCP_MONITORING_ALERTS )
Google Threat Intelligence IOC ( GTI_IOC )
GreyNoise ( GREYNOISE )
Halcyon Anti Ransomware ( HALCYON )
HP Aruba (ClearPass) ( CLEARPASS )
Huawei Switches ( HUAWEI_SWITCH )
Infoblox DNS ( INFOBLOX_DNS )
Island Browser logs ( ISLAND_BROWSER )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
Linux Sysmon ( LINUX_SYSMON )
ManageEngine ADAudit Plus ( ADAUDIT_PLUS )
Maria Database ( MARIA_DB )
McAfee IPS ( MCAFEE_IPS )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Defender For Cloud ( MICROSOFT_DEFENDER_CLOUD_ALERTS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft SQL Server ( MICROSOFT_SQL )
MISP Threat Intelligence ( MISP_IOC )
Mobileiron ( MOBILEIRON )
MySQL ( MYSQL )
NetApp ONTAP ( NETAPP_ONTAP )
Netskope V2 ( NETSKOPE_ALERT_V2 )
NGINX ( NGINX )
Nozomi Networks Scada Guardian ( NOZOMI_GUARDIAN )
Office 365 ( OFFICE_365 )
Open Cybersecurity Schema Framework (OCSF) ( OCSF )
Orca Cloud Security Platform ( ORCA )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
Ping One ( PING_ONE )
PingIdentity Directory Server Logs ( PING_DIRECTORY )
PostFix Mail ( POSTFIX_MAIL )
PostgreSQL ( POSTGRESQL )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Red Hat OpenShift ( REDHAT_OPENSHIFT )
Rubrik Security Cloud ( RUBRIK_SECURITY_CLOUD )
SailPoint IdentityIQ ( SAILPOINT_IIQ )
Salesforce ( SALESFORCE )
SAP Change Document ( SAP_CHANGE_DOCUMENT )
SAP Gateway ( SAP_GATEWAY )
SAP HANA ( SAP_HANA )
SAP Hana Audit ( SAP_HANA_AUDIT )
SAP Identity and Authentication Data ( SAP_IDENTITY_AND_AUTH_DATA )
SAP Internet Communication Manager ( SAP_ICM )
SAP Security Audit ( SAP_SECURITY_AUDIT )
SAP Webdispatcher ( SAP_WEBDISP )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
Sophos Central ( SOPHOS_CENTRAL )
STIX Threat Intelligence ( STIX )
Stormshield Firewall ( STORMSHIELD_FIREWALL )
Suricata EVE ( SURICATA_EVE )
Symantec Endpoint Protection ( SEP )
Sysdig ( SYSDIG )
Tableau ( TABLEAU )
Teleport Access Plane ( TELEPORT_ACCESS_PLANE )
Trend Micro ( TIPPING_POINT )
Tripwire ( TRIPWIRE_FIM )
TXOne Stellar ( TRENDMICRO_STELLAR )
Ubika Waf ( UBIKA_WAF )
Unix system ( NIX_SYSTEM )
Velo Firewall ( VELO_FIREWALL )
Veritas NetBackup ( VERITAS_NETBACKUP )
Versa Firewall ( VERSA_FIREWALL )
Vmware Avinetworks iWAF ( VMWARE_AVINETWORKS_IWAF )
VMware ESXi ( VMWARE_ESX )
VMware vCenter ( VMWARE_VCENTER )
WatchGuard ( WATCHGUARD )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
wiz.io ( WIZ_IO )
Workday Audit Logs ( WORKDAY_AUDIT )
Zscaler ( ZSCALER_WEBPROXY )
ZScaler VPN ( ZSCALER_VPN )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Alibaba Security Center ( ALIBABA_SECURITY_CENTER )
Apache Airflow ( APACHE_AIRFLOW )
Baramundi ( BARAMUNDI )
Bravura Security ( BRAVURA )
Buildkite Audit ( BUILDKITE_AUDIT )
Palo Alto Cortex Xpanse ( CORTEX_XPANSE )
Cyfirma DeCYFIR ServiceNow ( CYFIRMA_DECYFIR )
DATEV ( DATEV )
ELO ( ELO )
Forcepoint Secure Web Gateway ( FORCEPOINT_SWG )
JumpServer PAM ( JUMPSERVER_PAM )
Keep Aware ( KEEP_AWARE )
Lark Suite ( LARK_SUITE )
Macmon ( MACMON )
Mamori Database Activity Monitoring ( MAMORI_DAM )
N8N Security Audit Logs ( N8N_SECURITY_AUDIT_LOGS )
Oracle Cloud Infrastructure LoadBalancer ( OCI_LOADBALANCER )
OpenText Self Service Password Reset ( OPENTEXT_SSPR )
Rackspace ( RACKSPACE )
Secui Bluemax NGF ( SECUI_BLUEMAX_NGF )
Symantec Advanced Threat Protection ( SYMANTEC_ATP )
Tenable Vulnerabilities Management ( TENABLE_VMGNT )
Trellix EDRF Trace Data and Telemetry ( TRELLIX_EDRF )
Trend Micro Vision One Endpoint Vulnerabilities ( TRENDMICRO_VISION_ONE_ENDPOINT_VULNERABILITIES )
Zafran ( ZAFRAN )
Guest Environment
Feature
Version 20260228.00 of the guest agent is
now available for Debian 12, AlmaLinux 9, CentOS Stream 9, Oracle Linux 9,
Red Hat Enterprise Linux 9, and Rock Linux 9. To review the features and fixes
included in version 20260228.00 of the guest agent, see the
March 2, 2026 release notes .
Looker
Announcement
Looker 26.4 is expected to include the following changes, features, and fixes:
Expected Looker (original) deployment start: Sunday, March 8, 2026
Expected Looker (original) final deployment and download available: Thursday, March 19, 2026
Expected Looker (Google Cloud core) deployment start: Monday, March 16, 2026
Expected Looker (Google Cloud core) final deployment: Monday, March 23, 2026
Feature
Full support for connections with AlloyDB for PostgreSQL is available in preview. When you create a connection in Looker, you can now select Google Cloud AlloyDB for PostgreSQL from the Dialect drop-down menu. This update does not affect existing AlloyDB connections that were created using the PostgreSQL 9.5+ option in the Dialect menu.
Note: This item was updated March 9, 2026.
Feature
Dashboard filter enhancements are now generally available. Dashboard filter enhancements include the following improvements:
Persistent filter suggestion drop-down: Filter suggestion drop-downs remain open for easier multi-selection for tag list and advanced filter type filters.
Select or deselect all filter values: Lets users select or deselect all values in tag list and advanced filter type filters.
Limit condition controls for advanced filters: Lets dashboard creators limit the condition options that are available to users for advanced filters.
Enable Include custom filter values by default for boards: Admins can choose to enable Include custom filter values for boards by default instance-wide.
Feature
Tabbed dashboards are now generally available. Dashboard editors can use tabs to organize dashboard content across multiple tabs within a single dashboard. Adding tabs to dashboards lets you do the following:
Better organize content: Group related visualizations and tiles into separate tabs.
Improve data storytelling: Guide viewers through different aspects of your data in a structured way.
Enhance performance: Load only the tiles on an active tab, potentially speeding up initial dashboard load times.
Reduce clutter: Consolidate multiple related analyses into a single dashboard.
Feature
The Looker API now includes Looker Conversational Analytics endpoints that you can use with applications that embed Looker to create and manage agents, conversations, and messages.
For tips on using the Conversational Analytics endpoints, see the Best practices for using the ConversationalAnalytics API endpoints in Looker's API documentation page.
Note: This item was updated March 13, 2026.
Feature
Custom tooltips are now generally available and supported for more visualization types. Custom tooltips let you configure tooltips within the Explore visualization editor by using a combination of UI settings and an HTML editor that supports Liquid templating. Custom tooltips are supported for most visualization types except the following:
Donut multiples charts
Word cloud charts
Static map (regions) charts
Static maps (points) charts
Charts made using the Chart Config Editor (with the exception of Sankey charts )
Custom visualizations
Learn more about custom tooltips .
Feature
The Embed Conversational Analytics feature is now generally available. In Looker 26.4, the following support has been added:
Embedding Conversational Analytics is now supported on Looker (Google Cloud core).
The Looker embed SDK now supports embedded Conversational Analytics.
Embedded themes are now partially supported with embedded Conversational Analytics. All of the General options for themes are supported. All other theme options are not supported.
Fixed
An issue has been fixed where dashboard buttons that open links in a new tab could fail to work properly when cookieless embed was enabled. This feature now performs as expected.
Fixed
An issue has been fixed where certain tables were being unnecessarily truncated when they were downloaded to PDF. This feature now performs as expected.
Fixed
An issue has been fixed where the "raw" timeframe of a dimension_group could be displayed in a 12-hour format instead of the expected 24-hour format. This feature now performs as expected.
Fixed
An issue has been fixed where dimension fill could fail to populate values when the row limit is reached. This feature now performs as expected.
Fixed
An issue has been fixed where dashboard table tiles could fail to display the scroll bar and total row. This feature now performs as expected.
Fixed
An issue has been fixed where Looker could fail to retain sorts when content from a drill modal was being downloaded. This feature now performs as expected.
Fixed
An issue has been fixed where selecting the Expand tables option during a PDF download or schedule could cause the tables to shrink instead of expand. This feature now performs as expected.
Fixed
An issue has been fixed where pivoted columns could fail to be sorted correctly when content was being downloaded. This feature now performs as expected.
Fixed
An issue has been fixed where conditional formatting rules could fail to be saved. This feature now performs as expected.
Fixed
An issue has been fixed where LookML dashboards could not be created using the ProjectFile API endpoint. This feature now performs as expected.
Fixed
An issue has been fixed where Looker would prevent users from saving changes on the Content Guardrails admin settings page. This feature now performs as expected.
Fixed
An issue has been fixed where Looker could fail to recognize non-numeric values in conditional formatting rules for single value visualizations. This feature now performs as expected.
Fixed
An issue has been fixed where entering Japanese characters into advanced filters could add extra characters. This feature now performs as expected.
Fixed
An issue has been fixed where dashboards that used ClickHouse connections could fail to load with a ClassCastException error. This feature now performs as expected.
Fixed
An issue has been fixed where comma-separated negative filters could be incorrectly interpreted with OR logic in the filter UI. This feature now performs as expected.
Feature
The Labs page in the Admin panel has been renamed Preview Features . The new page organizes in-progress features into two categories to provide better clarity on their status:
Preview features : These features have a planned path to general availability.
Labs features : These experimental features may be removed from the product at any time, and issues may not be resolved.
Your enablement status for each feature has not changed. For more information, see the Preview Features documentation page.
Feature
The Gemini in Looker page in the Admin panel has been redesigned to allow Looker admins to selectively enable Gemini in Looker features. For more information about how to enable the features that are available for each Looker instance type, see the following documentation:
Looker (Google Cloud core): Administer Gemini on your Looker (Google Cloud core) instance
Looker: Admin settings – Gemini in Looker
Breaking
Project-level local git hooks are no longer supported for security reasons. This change will have no effect on Looker-hosted instances, but it may affect customer-hosted instances depending on your Git setup.
Feature
The Preview Features page is now available in the Admin panel for Looker (Google Cloud core). This page lets you enable or disable new features that are currently in preview.
The following preview features are now available in Looker (Google Cloud core):
Access Content Certification
Granular Dashboard Sizing
Internal Dashboard Theming
Tile Download Default Options
Preview features that are categorized as "Labs" on the Preview Features page of the Admin panel aren't supported in Looker (Google Cloud core).
Network Intelligence Center
Feature
The following features are available in
Connectivity Tests :
Google Kubernetes Engine (GKE) Pod as an endpoint : you can specify a GKE
Pod as the source or destination endpoint for a connectivity test.
IP masquerading evaluation : Connectivity Tests evaluates whether IP
masquerading is applied to traffic sent from a GKE Pod endpoint.
If IP masquerading is applied, the translated address is used for
the test.
Network policy evaluation : for GKE clusters where
FQDN network policies
aren't enabled, Connectivity Tests evaluates GKE network policies that apply
to a GKE Pod endpoint.
For more information, see
Considerations for Google Kubernetes Engine .
Security Command Center
Feature
AI Protection is generally
available ( GA ) in the
Security Command Center Premium tier at the organization level.
For regional availability, see Locations for
AI Protection .
Vertex AI
Announcement
Vector Search 2.0 is generally available (GA)
Vector Search 2.0 is generally available ( GA ).
Vector Search 2.0 is a retrieval engine designed to streamline AI development
and serve as the knowledge core for AI applications.
Available features:
Collections
unifying data and vectors.
Auto-embeddings for populating vector fields automatically.
Hybrid search and ranking combining vector, full-text, and built-in semantic
re-ranking in a single parallel query.
Private Service Connect (PSC), Private Google Accesss (PGA), and VPC Service
Controls support.
For more information, see the Vector Search 2.0 documentation .
March 04, 2026
Apigee API hub
Feature
gcloud CLI support for API hub
The gcloud CLI now supports Apigee API hub, allowing you to manage your organization's API catalog, versions, and lifecycle metadata directly from the command line.
For more information see gcloud CLI for API hub .
BigQuery
Feature
Monitor dataset replication latency and network egress bytes in Cloud Monitoring
for BigQuery cross-region replication
and managed disaster recovery .
These metrics are generally available
(GA).
Feature
You can now use continuous queries to stream BigQuery data to Spanner in real
time . This feature is
generally available
(GA).
Compute Engine
Feature
Generally available : You can use managed constraints with Organization Policy Service
for centralized, programmatic control of your Compute Engine resources.
Managed constraints replace legacy compute.* constraints and are identifiable
by the compute.managed.* prefix. They also include built-in support for safe
rollout tools like Policy Simulator and dry run mode.
For more information, see
Organization policies for Compute Engine
and
Managed constraints .
Container Optimized OS
Change
cos-113-18244-582-29
Kernel
Docker
Containerd
GPU Drivers
COS-6.1.161
v24.0.9
v1.7.27
See List
Change
Fixed an issue where most platforms would use only half of the available GVNIC TX queues.
Fixed
Upgraded net-dns/c-ares to v1.31.0.
Fixed
Upgraded net-misc/socat to v1.8.1.1.
Fixed
Upgraded sys-apps/less to v692.
Security
Fixed CVE-2025-58187 in dev-lang/go.
Security
Fixed CVE-2025-6075 in python.
Security
Fixed CVE-2025-60753 in libarchive.
Security
Fixed CVE-2025-61732 in dev-lang/go.
Security
Fixed CVE-2026-23086 in the Linux kernel.
Security
Fixed CVE-2026-23112 in the Linux kernel.
Security
Fixed CVE-2026-23119 in the Linux kernel.
Security
Fixed CVE-2026-23124 in the Linux kernel.
Security
Fixed CVE-2026-23145 in the Linux kernel.
Security
Fixed CVE-2026-23156 in the Linux kernel.
Security
Fixed CVE-2026-23168 in the Linux kernel.
Security
Fixed CVE-2026-23198 in the Linux kernel.
Security
Fixed CVE-2026-23205 in the Linux kernel.
Security
Fixed CVE-2026-23212 in the Linux kernel.
Security
Fixed CVE-2026-23193 in the Linux kernel.
Security
Fixed KCTF-e3f000f in the Linux kernel.
Security
Upgraded net-misc/curl to version 8.18.0. This fixes CVE-2025-10966, CVE-2025-13034, CVE-2025-14017, CVE-2025-14524, CVE-2025-14819, CVE-2025-15079, and CVE-2025-15224.
Change
cos-125-19216-220-34
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Added support for the Lustre 2.14.0_p246 drivers.
Fixed
Upgraded dev-util/gdbus-codegen to v2.86.3.
Fixed
Upgraded the galog version to v0.0.0-20250924170816-9dbf105986f4 in google-guest-agent to fix an issue with high CPU consumption.
Security
Fixed CVE-2026-23204 in the Linux kernel.
Security
Fixed CVE-2026-23229 in the Linux kernel.
Security
Fixed CVE-2026-23230 in the Linux kernel.
Security
Upgraded dev-libs/glib to v2.86.3. This fixes
CVE-2025-14087, CVE-2025-14512 and CVE-2025-13601.
Change
cos-121-18867-381-24
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.122
v27.5.1
v2.0.7
See List
Change
Fixed an issue where most platforms would use only half of the available GVNIC TX queues.
Fixed
Upgraded dev-util/gdbus-codegen to v2.86.3.
Security
Fixed CVE-2025-58187 in dev-lang/go.
Security
Fixed CVE-2026-23216 in the Linux kernel.
Security
Fixed CVE-2026-23229 in the Linux kernel.
Security
Fixed CVE-2026-23230 in the Linux kernel.
Security
Upgraded dev-libs/glib to v2.86.3. This fixes
CVE-2025-14087, CVE-2025-14512 and CVE-2025-13601.
Change
cos-117-18613-534-24
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.123
v24.0.9
v1.7.29
See List
Change
Added support for the Lustre 2.14.0_p246 drivers.
Change
Fixed an issue where most platforms would use only half of the available GVNIC TX queues.
Security
Fixed CVE-2025-58187 in dev-lang/go.
Security
Fixed CVE-2025-61732 in dev-lang/go.
Security
Fixed KCTF-e3f000f in the Linux kernel.
Gemini
Feature
File outline and finish changes features in VS Code general availability
The file outline
and finish changes
features are now available in VS Code and generally available (GA).
Feature
File outline and finish changes features in VS Code general availability
The file outline
and finish changes
features are now available in VS Code and generally available (GA).
Gemini Enterprise
Feature
Gemini Enterprise: Data connector for GitHub (Preview)
You can connect GitHub data stores to Gemini Enterprise. For more information,
see Connect GitHub .
This feature is in Public Preview.
Feature
Gemini Enterprise: Support for new actions (Preview)
New actions are available for the following data stores:
Confluence Data Center
Monday
Shopify
Zendesk
For a list of actions for these data stores, see Supported
actions . These
actions are in Public Preview.
Fixed
Gemini Enterprise: Agent Designer model configuration fix
Fixed an issue in Agent Designer that caused agent model configurations to be
cleared or fail to appear during the transition from Gemini 3 Pro
(Preview) to Gemini 3.1 Pro (Preview).
Feature
Gemini Enterprise: Chat with files in the Microsoft Outlook and Box connectors
Gemini Enterprise can analyze content and generate answers from email
attachments in the Microsoft Outlook connector and from CSV, PDF, PPTX, and XLSX
files in the Box connector, removing the need to upload these files to the
Gemini Enterprise assistant.
This feature is generally available (GA). For more information, see Chat with
files in connectors .
Guest Environment
Feature
Version 20260228.00 of the guest agent is
now available for Windows. To review the features and fixes included in version
20260228.00 of the guest agent, see the
March 2, 2026 release notes .
Spanner
Feature
You can use continuous queries to stream BigQuery data to
Spanner in real
time . This feature is
generally available (GA) .
March 03, 2026
AlloyDB for PostgreSQL
Feature
The following AlloyDB AI features are now generally available ( GA ):
Auto vector embeddings provide a scalable, automated solution for managing the lifecycle of vector embeddings for large-scale datasets, eliminating the need for manual reindexing or custom scripts. This feature keeps embeddings in sync with transactional data and now supports incremental refresh in manual mode, ensuring that embeddings are only generated for new or updated rows. Additionally, you can perform incremental table refreshes or migration up to 130x faster than traditional row-by-row processing using bulk mode, improving efficiency for semantic search and Retrieval Augmented Generation (RAG).
AI functions integrate LLMs like Gemini to bring 'world knowledge' to your AlloyDB data and incorporate advanced semantic search and ranking capabilities directly into your SQL workflows. This feature includes out-of-the-box functions for filtering ( ai.if ), semantic ranking ( ai.rank ), generation ( ai.generate ), and forecasting ( ai.forecast ).
Experience higher performance in AlloyDB AI by utilizing array-based AI functions. You can perform batch processing of natural language prompts directly within your SQL queries, significantly improving efficiency for large-scale AI operations. For more information, see Perform intelligent SQL queries using AI functions .
App Engine flexible environment Ruby
Feature
Support for Ruby 4.0 runtime is in Preview .
App Engine standard environment Ruby
Feature
Support for Ruby 4.0 runtime is in Preview .
Cloud Build
Fixed
The authorization vulnerability CVE-2026-3136 was fixed.
Cloud Composer
Feature
Airflow 3.1.7 is available in Cloud Composer 3.
Feature
Highly Resilient environments
are available in environments with Airflow 3 (Preview) starting from
Airflow version 3.1.7.
Feature
Per-folder roles registration
is available in environments with Airflow 3 (Preview) starting from Airflow version 3.1.7.
Change
Airflow 3.1.0 is no longer included in Cloud Composer images and builds.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.7-build.0
composer-3-airflow-2.10.5-build.29 (default)
composer-3-airflow-2.9.3-build.49
Change
New images
are available in Cloud Composer 2:
composer-2.16.6-airflow-2.10.5 (default)
composer-2.16.6-airflow-2.9.3
Cloud Interconnect
Feature
VLAN attachments with maximum capacities of 400 Gbps are Generally Available
for the following Cloud Interconnect types:
Dedicated Interconnect
Cross-Cloud Interconnect
Feature
Support for 400 Gbps connections is Generally Available for the following
Cloud Interconnect types:
Dedicated Interconnect
Cross-Cloud Interconnect
Cloud Run
Feature
Support for Ruby 4.0 runtime is in Preview .
Cloud Run functions
Feature
Support for Ruby 4.0 runtime is in Preview .
Dataproc
Announcement
New Serverless for Apache Spark runtime versions :
1.2.73
2.2.73
2.3.26
Document AI
Feature
Custom classifier model pretrained-classifier-v1.5-2025-08-05
is available as General Availability (GA) .
For more information about available models, see the custom classifier page.
Gemini Enterprise
Feature
Gemini Enterprise: Use Veo 3.1 for video generation
Use Veo 3.1 to generate videos in the Gemini Enterprise web app. Veo 3.1
is replacing Veo 3.0 for video generation. For more information, see
Generate a video .
To use this feature, a Gemini Enterprise administrator must turn on Enable
video generation setting. For more information about feature controls, see
Manage features on the web
app .
This feature is generally available (GA).
Feature
Gemini Enterprise: Export assistant responses to Google Docs and Google Sheets
You can export chat responses from the assistant to Google Docs. You can also
export tabular and CSV data from a response to Google Sheets.
This feature is generally available (GA). For more information, see Export to
Google Docs and
Google Sheets .
Generative AI on Vertex AI
Deprecated
Video generation preview endpoints deprecation
The following table describes video generation endpoints that are deprecated and
their replacements. We recommend updating your model endpoints before April 2,
2026, to avoid service disruption.
Discontinued endpoints
Recommended endpoint migration
veo-3.0-generate-preview
veo-3.0-generate-001
veo-3.0-fast-generate-preview
veo-3.0-fast-generate-preview
veo-2.0-generate-preview
veo-2.0-generate-001
veo-2.0-generate-exp
veo-2.0-generate-001
veo-001-preview-0815
veo-2.0-generate-001
veo-001-preview
veo-2.0-generate-001
veo-3.1-generate-preview
veo-3.1-generate-001
veo-3.1-fast-generate-preview
veo-3.1-fast-generate-001
Feature
Gemini 3.1 Flash-Lite
Gemini 3.1 Flash-Lite ( gemini-3.1-flash-lite-preview ) is
available in public preview .
This release is our most cost-efficient Gemini model and is
optimized for low latency use cases for high-volume, cost-sensitive LLM traffic.
For more information, see
Gemini 3.1 Flash-Lite .
Google Cloud Managed Service for Apache Kafka
Feature
You can now use the
Managed Service for Apache Kafka remote MCP server
to enable LLM agents to create and manage your Kafka clusters and Kafka Connect
clusters, as well as create and manage related resources such as topics,
consumer groups, connectors, and ACLs.
This feature is in
Preview .
Google Distributed Cloud (software only) for VMware
Announcement
Google Distributed Cloud (software only) for VMware V2 (Advanced Clusters) versions 1.31
and earlier were missing a configuration step in the node startup script that
defined the Docker default bridge IP range. As a result, Docker defaulted to
using the 172.17.0.0/16 (and in some cases 172.16.0.0/16) address range.
If this default range overlaps with customer network infrastructure,
connectivity failures during cluster creation or operation can occur.
This issue has been resolved. The Docker default bridge IP for cluster nodes in
advanced clusters is now explicitly set to 169.254.123.1/24.
Fixed
The following issues were fixed in 1.33.500-gke.63:
Fixed vulnerabilities listed in Vulnerability fixes .
Announcement
Google Distributed Cloud (software only) for VMware 1.33.500-gke.63 is now available
for download. To upgrade, see Upgrade clusters .
Important: There is a mandatory flag for admin cluster upgrades; see the updated entry for March 20, 2026 .
Google Distributed Cloud 1.33.500-gke.63 runs on Kubernetes v1.33.5-gke.2200.
If you are using a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release.
After a release, it takes approximately 7 to 14 days for the version to become
available for use with GKE On-Prem API clients: the Google Cloud console, the
gcloud CLI, and Terraform.
Google Distributed Cloud (software only) for bare metal
Announcement
Google Distributed Cloud (software only) for bare metal 1.33.500-gke.63 is now available for
download. To upgrade, see Upgrade clusters .
Google Distributed Cloud for bare metal
1.33.500-gke.63 runs on Kubernetes v1.33.5-gke.2200.
After a release, it takes approximately 7 to 14 days for the version to become
available for installations or upgrades with the GKE On-Prem API clients: the
Google Cloud console, the gcloud CLI, and Terraform.
If you use a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release of Google Distributed Cloud for bare metal.
Announcement
In Google Distributed Cloud (software only) for bare metal versions 1.33.0 and later,
bmctl operations can fail to stream logs from pods to the local workspace,
causing empty or incomplete logs in bmctl-workspace/{CLUSTER NAME}/log directory .
This issue occurred because a recent Kubernetes library upgrade introduced a
required context parameter for pod log streaming. The bmctl tool was
incorrectly passing a context with a 10-second timeout, causing the log streamer
to terminate prematurely for pods with long lifecycles, such as Ansible runner
jobs.
This issue is resolved in the following versions:
1.33.500 and later
1.34.100 and later
1.35.0 and later
If you use an affected version and require the logs for a failed or ongoing
operation, check logs using kubectl . If the cluster is accessible, you can
manually retrieve logs directly from the relevant pods using the kubectl logs
command.
It is recommended to upgrade to a fixed version to ensure that all bmctl
operation logs are correctly captured in your local workspace for troubleshooting
and auditing purposes
Security
The following issues were fixed in 1.33.500-gke.63:
Fixed vulnerabilities listed in Vulnerability fixes .
Google SecOps Marketplace
Feature
Siemplify : Version 103.0
The following new job has been added:
Response Integration & Connector Upgrade
Feature
Akamai : Version 2.0
The following new action has been added:
Activate Client List
Change
Splunk : Version 61.0
Updated input handling in the following action:
Update Notable Events
Change
CrowdStrike Falcon : Version 71.0
Added the ability to define an expiration date for IOCs to the following
action:
Upload IOCs
Added support for hidden hosts in the following action:
Get Host Information
Change
Google Security Command Center : Version 15.0
Updated the processing of mute states in the following action:
List Asset Vulnerabilities
Change
AWS GuardDuty : Version 9.0
Updated severity handling in the following connector:
AWS GuardDuty - Findings Connector
Change
Microsoft Graph Mail Delegated : Version 13.0
Updated folder handling in the following actions:
Forward Email
Save Email To Case
Send Email
Send Email HTML
Send Thread Reply
Send Vote Email
Wait For Email From User
Wait For Vote Email Results
Updated folder handling in the following connector:
Microsoft Graph Mail Delegated Connector
Change
Google Chronicle : Version 78.0
Updated raw log data processing in the following actions:
Get Detection Details
Execute UDM Query
Change
Microsoft Graph Mail : Version 36.0
Updated folder handling in the following actions:
Forward Email
Save Email To Case
Send Email
Send Email HTML
Send Thread Reply
Send Vote Email
Wait For Email From User
Wait For Vote Email Results
Updated folder handling in the following connector:
Microsoft Graph Mail Connector
Guest Environment
Feature
Version 20260228.00 of the guest agent is
now available for Debian 11, AlmaLinux 8, CentOS Stream 8, Oracle Linux 8,
Red Hat Enterprise Linux 8, and Rock Linux 8. To review the features and fixes
included in version 20260228.00 of the guest agent, see the
March 2, 2026 release notes .
Identity and Access Management
Feature
Service
account principal sets are generally
available . You can use service account principal sets to reference all
service accounts or service agents in a project, folder, or organization when
writing allow policies, deny policies, and access policies.
Spanner
Feature
Spanner supports the ON CONFLICT clause for
GoogleSQL INSERT statements to handle unique constraint
violations. For more information, see ON CONFLICT DO
NOTHING
and ON CONFLICT DO
UPDATE .
March 02, 2026
AI Hypercomputer
Feature
Generally available : You can apply compact placement policies to standalone
Flex-start VMs. These policies let you colocate your standalone
Flex-start VMs in adjacent blocks or in the same block. Applying
a compact placement policy gives you more control over VM placement and helps
minimize network latency for AI/ML workloads. For more information, see
Use Flex-start .
App Engine standard environment Java
Feature
Support for migrating from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet is in General Availability .
App Engine standard environment Python
Feature
Support for migrating from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet
is in General Availability .
Cloud Asset Inventory
Feature
The following resource type is publicly available through the
ExportAssets ,
ListAssets ,
BatchGetAssetsHistory ,
QueryAssets ,
Feed ,
SearchAllResources ,
and
SearchAllIamPolicies
APIs.
Vertex AI
aiplatform.googleapis.com/CachedContent
Cloud Data Fusion
Change
The SAP ODP plugin version 0.12.1 is available in Cloud Data Fusion version
6.10 and later. This release includes the following features and changes:
Hierarchy data sources are now supported for extraction.
ODQ fields are populated with TSN, package number, and record number for full
extraction.
Structured SAP messages are now displayed according to the message type
(for example, type E as error and type I as information). Earlier, all
messages from SAP displayed as errors.
You can now use the TVARVC table entries with parameter
/GOOG/ODP_TRANSFER_MODE (for all data sources) or /GOOG/M_DatasourceName
(for individual data sources) to determine if data is transferred in CHAR or
XML format. Maintain 'C' to transfer data in CHAR format. Maintain an empty
value to transfer data in XML format.
Cloud Deploy
Feature
Cloud Deploy is now available in the following region: asia-southeast3 (Bangkok)
Cloud Key Management Service
Feature
Cloud KMS deletion of keys and key versions is generally available. Keys and key
versions must meet deletion criteria before they can be deleted. Names of
deleted keys can't be reused.
For more information, including deletion criteria, see Delete Cloud KMS
resources .
Cloud Monitoring
Feature
The SQL queries issued by Observability Analytics can now use a
system-defined variable which resolves to the project ID. If a dashboard
template uses the project ID variable, then you don't need to update
the SQL query after installing the template.
For more information, see the following documents:
Google Cloud console: Charts with SQL queries
API: Charts with SQL queries
Cloud SQL for MySQL
Feature
Cloud SQL for MySQL 8.4.7 is upgraded to MySQL 8.4.8. For more information,
see the MySQL 8.4.8 Release Notes .
Compute Engine
Feature
Generally available : You can apply compact placement policies to standalone
Flex-start VMs. These policies let you colocate your standalone
Flex-start VMs as close to each other as possible. Applying a
compact placement policy minimizes network hops and improves the performance of
latency-sensitive workloads. For more information, see
About compact placement policies
and
About Flex-start VMs .
Google SecOps
Deprecated
Chronicle.soarAnalyst , chronicle.soarViewer , chronicle.soarEngineer roles in Cloud IAM are being deprecated and will be fully removed in six months. Although these roles were accessible and can historically be assigned to users in Cloud IAM, they were non-operational. SOAR roles were managed through Permission Groups and with its migration to Cloud IAM as part of the SOAR Migration to Google Cloud , the preceding roles are being deprecated.
To maintain seamless access and adhere to the principle of least privilege, transition your SOAR users to the following options:
Automatically convert your SOAR Permission Groups to custom roles in IAM through self-service migration .
Pre-defined roles: Utilize the enhanced Google SecOps pre-defined roles now available in Cloud IAM.
Custom Roles: Create tailored roles with specific permissions to meet your organization's unique security requirements.
Feature
New Unified rules interface
This feature is currently in Preview.
Google Secops has launched a unified rules interface that
brings custom and curated rule management into a single, cohesive workflow.
This update optimizes detection engineering with a redesigned dashboard, an
advanced rule editor, and expanded API capabilities to streamline rule
deployment and troubleshooting.
Key enhancements
Developer and IDE enhancements :
Centralized management: A unified, single dashboard lets you browse, filter, and
manage both custom and curated rules from one location. You can also update
configurations for multiple rules simultaneously.
Curated rule transparency: You can now view the YARA-L text of
curated rules, search directly within their logic, and independently toggle
individual rule statuses without needing to alter the parent rule pack
deployment.
Integrated IDE experience: The rule editor now features an enhanced IDE
experience with inline error highlights, UDM field definitions on hover.
Expanded API and structured search :
The Rules API and dashboard have been upgraded to support deeper programmatic
access and complex filtering:
Robust search syntax: Both the UI and API now support AIP-160 compliant
structured search. You can filter rules by text, tags, author, and execution
state.
Batch modifications: The rules.modifyRules method now supports
non-atomic batch updates, letting you change live status, alerting status, tags,
and archive status across multiple rules in a single API request.
Advanced resource views: The rules.list method introduces CONFIG_ONLY
and TRENDS views. These views provide expanded deployment information, access
to curated rule resources, and larger page sizes (up to 5000 results) for
efficient querying.
For details, see Manage unified rules .
Google SecOps SIEM
Feature
New Unified rules interface
This feature is currently in Preview.
Google SecOps has launched a unified rules interface that
brings custom and curated rule management into a single, cohesive workflow.
This update optimizes detection engineering with a redesigned dashboard, an
advanced rule editor, and expanded API capabilities to streamline rule
deployment and troubleshooting.
Key enhancements
Developer and IDE enhancements :
Centralized management: A unified, single dashboard lets you browse, filter, and
manage both custom and curated rules from one location. You can also update
configurations for multiple rules simultaneously.
Curated rule transparency: You can now view the YARA-L text of
curated rules, search directly within their logic, and independently toggle
individual rule statuses without needing to alter the parent rule pack
deployment.
Integrated IDE experience: The rule editor now features an enhanced IDE
experience with inline error highlights, UDM field definitions on hover.
Expanded API and structured search :
The Rules API and dashboard have been upgraded to support deeper programmatic
access and complex filtering:
Robust search syntax: Both the UI and API now support AIP-160 compliant
structured search. You can filter rules by text, tags, author, and execution
state.
Batch modifications: The rules.modifyRules method now supports
non-atomic batch updates, letting you change live status, alerting status, tags,
and archive status across multiple rules in a single API request.
Advanced resource views: The rules.list method introduces CONFIG_ONLY
and TRENDS views. These views provide expanded deployment information, access
to curated rule resources, and larger page sizes (up to 5000 results) for
efficient querying.
For details, see Manage unified rules .
Guest Environment
Fixed
Version 20260228.00 of the guest agent
includes the following fixes:
The guest agent is now able to add users to the Administrator group on
different locales on Windows.
The guest agent now signals itself ready only after the network setup
has fully completed. This should prevent the guest agent from hitting race
conditions with custom routing solutions that depend on the guest agent
service.
The guest agent no longer spams metadata SSH key errors when a key is
incorrectly formatted.
The guest agent now ensures proper reconnection of the primary NIC after a
configuration rollback, specifically when NetworkManager is active. This
resolves an issue where the NIC might not come back online in such
scenarios.
The guest agent now applies the value of the following configuration flags
correctly: Daemons.network_daemon and
NetworkInterfaces.vlan_setup_enabled .
Feature
Version 20260228.00 of the guest agent is
now available for Debian 13, AlmaLinux 10, CentOS Stream 10, Oracle Linux 10,
Red Hat Enterprise Linux 10, and Rock Linux 10. This version introduces the
following features:
Supports bootstrapping credentials for the HTTPS endpoint for the metadata
server by default. For more information about the HTTPS metadata server
endpoint, see HTTPS metadata server endpoints .
Includes a cleanup job that runs once a day and each time the guest agent manager
service initializes. This cleanup job ensures that leftover plugin files and
states are properly cleaned up.
Supports dynamically starting locally installed extensions. This feature is
disabled by default, but it can be toggled by setting the
enable_local_plugins flag to true in the guest agent configuration file.
Looker
Feature
You can now manage backups for Looker (Google Cloud core) instances in the Google Cloud console. From the new Backups tab on the instance details page, you can create manual backups, and you can view, restore, or delete both automatic and manual backups. Previously, these operations were only available through the gcloud command-line tool.
NetApp Volumes
Feature
Google Cloud NetApp Volumes supports Producer VPC spokes with Network
Connectivity Center, a generally available feature. For more information, see
Connect additional networks with NCC .
March 01, 2026
Google SecOps SOAR
Announcement
Release 6.3.78 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
February 28, 2026
Google SecOps SOAR
Announcement
Release 6.3.77 is now available for all regions.
February 27, 2026
App Engine flexible environment PHP
Feature
Support for the PHP 8.5 runtime is in General Availability .
App Engine standard environment PHP
Feature
Support for the PHP 8.5 runtime is
in General Availability .
Carbon Footprint
Feature
The improved data export experience in the Cloud Carbon console is now available in Public Preview .
This feature, previously in Experimental Preview, lets you view the Carbon Footprint exports for a given billing account directly in the Cloud Carbon console. Only exports that you have permission to view are shown. You can use this view to better manage your Carbon Footprint exports in BigQuery.
Cloud Database Migration Service
Feature
Database Migration Service for heterogeneous migrations now supports
RENAME- , MOVE- , CASE_HANDLING
and GENERATE_MISSING_PK directives to provide improved control
over converting Oracle and SQL Server objects to PostgreSQL. For more
information, see the page relevant for your migration scenario:
Supported conversion directives for Oracle to Cloud SQL for PostgreSQL
Supported conversion directives for Oracle to AlloyDB for PostgreSQL
Supported conversion directives for SQL Server to Cloud SQL for PostgreSQL
Supported conversion directives for SQL Server to AlloyDB for PostgreSQL
Cloud Product Registry API
Feature
Cloud Product Registry now available (in preview)
The new Cloud Product Registry API serves as the authoritative source of truth for
first-party Google Cloud products. This API lets you programmatically
access the official hierarchy of Google Cloud tools, ensuring your internal
catalogs and governance policies rely on accurate, real-time data. For example,
you can get the list of Google Cloud products (aka Logical Products) and
Logical Product Variants using the new Cloud Product Registry API.
Currently, the API supports basic attributes, such as:
Id
Product Name
Lifecycle status
For more information, see Cloud Product Registry overview .
Cloud Run
Feature
Support for PHP 8.5 runtime is in General Availability .
Cloud Run functions
Feature
Support for PHP 8.5 runtime is in General Availability .
Container Optimized OS
Change
cos-121-18867-381-14
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.122
v27.5.1
v2.0.7
See List
Change
Added support for the Lustre 2.14.0_p246 drivers.
Security
Fixed CVE-2025-60753 in libarchive.
Security
Fixed CVE-2026-23112 in the Linux kernel.
Security
Fixed CVE-2026-23176 in the Linux kernel.
Security
Fixed CVE-2026-23179 in the Linux kernel.
Security
Fixed CVE-2026-23193 in the Linux kernel.
Security
Fixed CVE-2026-23198 in the Linux kernel.
Security
Fixed CVE-2026-23200 in the Linux kernel.
Security
Fixed CVE-2026-23204 in the Linux kernel.
Security
Fixed CVE-2026-23205 in the Linux kernel.
Security
Fixed CVE-2026-23212 in the Linux kernel.
Security
Fixed KCTF-e3f000f in the Linux kernel.
Cortex Framework
Announcement
Release 6.3.4
Fixed
Airflow v3 support :
All Composer DAGs generated by new deployments are now compatible
with Airflow v3.
Airflow v2 is still supported. However, consider
planning for migration
as it will soon reach end-of-life .
SAP:
SAP CDC scripts now support custom tables containing forward slashes
( / ) in their names. Existing deployments are not affected.
Added optional adrt table to SAP CDC table list.
Cortex for Marketing:
Meta API is now upgraded from v21 to v25. For field name changes, see
changelog .
Minor fixes:
Migrated Cloud SDK to gcloud storage CLI.
Fixed for line breaks in DAG packages import.
Improved error handling for target bucket access verification.
Dataflow
Feature
Dataflow support for the C4A machine
series of Arm processors is
now generally available. Arm-based VMs are optimized for power efficiency and
can provide improved price-performance for many workloads. For more information,
see Use Arm VMs on Dataflow .
Dataproc
Announcement
New Serverless for Apache Spark runtime versions :
1.2.72
2.2.72
2.3.25
3.0.9
Identity and Access Management
Feature
The ability to self-grant missing permissions from permission error messages is
generally available .
To learn how to request missing permissions, see Request missing
permissions .
Feature
You can disable the option to send auto-generated access requests from
permission error messages. This feature is in
preview .
To learn how to disable these requests, see Disable auto-generated access
request emails .
Network Intelligence Center
Feature
Connectivity Tests
evaluates hybrid subnet routing , including
routing for
unmatched resources in hybrid subnets .
SAP on Google Cloud
Change
SAP NetWeaver certification: CPU platform update for N2D machine types
The CPU platform AMD EPYC Rome is no longer available for use with N2D machine types.
The minimum CPU platform for N2D machine types is AMD EPYC Milan.
For more information about the N2D machine types that you can use to run SAP
NetWeaver workloads on Google Cloud, see
N2D general-purpose machine types .
Spanner
Feature
Spanner supports using the pending commit timestamp function
as a default value and an ON UPDATE expression for column definitions. For
more information, see the GoogleSQL
ON UPDATE clause
and the PostgreSQL
ON UPDATE clause .
Unified Maintenance
Announcement
Unified Maintenance is generally available ( GA ).
Use Unified Maintenance to gain better visibility into maintenance activities
impacting your Google Cloud resources.
Learn more in the Unified Maintenance overview .
Feature
Unified Maintenance displays maintenance activities for these Google Cloud
products:
Cloud SQL - MySQL
Cloud SQL - Postgres
Cloud SQL - SQL Server
AlloyDB for PostgreSQL
Looker
Compute Engine virtual machine (VM) instances or bare metal instances
Google Kubernetes Engine
Cloud Interconnect
Cloud Composer
For more information, see Supported services .
Announcement
Unified Maintenance is available in the following regions:
asia-east1
australia-southeast2
europe-central2
europe-west2
europe-west9
us-west4
us-east5
For more information, see Unified Maintenance locations .
Feature
Unified Maintenance displays Cloud Composer maintenance activity for resources:
cloud_composer_environment
For more information about Cloud Composer resources displayed by
Unified Maintenance, see Supported services .
February 26, 2026
Anthos Config Management
Change
Addressed multiple Common Vulnerabilities and Exposures (CVEs) by updating dependencies.
Cloud Trace
Feature
For organizations, folders, and projects, you can now configure
default settings for observability buckets. Default settings let you
specify the following for new observability buckets:
A location.
A Cloud KMS key.
This feature is in public preview. To learn more, see
Set defaults for observability buckets .
Feature
You can now configure observability buckets to be in the following
locations :
us
eu
us-central1
us-west1
Your trace data is stored in an observability bucket. To learn more, see
Trace storage overview .
Gemini Enterprise
Feature
Gemini Enterprise: Support for new data stores (Preview)
The following data stores are supported in Public Preview:
HubSpot
Monday
Shopify
Generative AI on Vertex AI
Feature
Gemini 3.1 Flash Image
Gemini 3.1 Flash Image ( gemini-3.1-flash-image ) is available
in public preview .
This release enables high-quality image generation with improved pricing and
latency. We recommend using Gemini 3.1 Flash Image when generating
images.
For more information, see
Gemini 3.1 Flash Image .
Security Command Center
Feature
Security Command Center lets you filter findings, issues, and compliance information to
view only the resources that are
registered to an App Hub application .
For information, see
Integration with App Hub .
Spanner
Feature
Spanner provides JSON string versions of the following statistics
columns for PostgreSQL-dialect databases:
TOTAL_LATENCY_DISTRIBUTION_JSON_STRING in
Transaction statistics
OPERATIONS_BY_TABLE_JSON_STRING in
Transaction statistics
LATENCY_DISTRIBUTION_JSON_STRING in
Query statistics
SAMPLE_LOCK_REQUESTS_JSON_STRING in
Lock statistics
You can use these columns to retrieve statistics in JSON format from the
SPANNER_SYS tables.
Virtual Private Cloud
Feature
You can create Compute Engine instances that have multiple network interfaces
in the same VPC network. This feature is available in Preview . For more
information, see
Multiple network interfaces in the same VPC network .
February 25, 2026
Access Approval
Feature
Vertex AI Agent Engine is generally available
(GA) .
BigQuery
Change
Effective June 1, 2026 , BigQuery will limit legacy SQL use. This depends on
whether your organization or project uses it from November 1, 2025, to June 1,
2026. If you don't use legacy SQL during this time, you won't be able to use it
after June 1, 2026. If you do use it, your existing workloads
will keep running, but new ones might not. For more information, see
Legacy SQL feature availability .
Cloud NGFW
Feature
You can use network contexts to meet your security goals by using fewer
firewall policy rules more efficiently. For more information, see
Network contexts . This feature
is available in General Availability .
Gemini
Other
Bug fixes in VS Code
Various bug fixes and minor product enhancements.
Other
Bug fixes in IntelliJ
Various bug fixes and minor product enhancements.
Google Cloud Contact Center as a Service
Announcement
Google Cloud CCaaS 4.0 patch
This patch does the following:
Fixes an issue where voicemails were being routed to agents who were not
assigned to the intended queue.
Adds the ability to disable the IVR greeting message, both at the global
level and at the Direct Access Point queue level.
Lets an agent and an end-user join a call simultaneously.
Google Kubernetes Engine
Change
(2026-R8) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for
manual control plane upgrades and node upgrades for existing clusters. For more
information about versioning and upgrades, see GKE versioning and
support and About GKE
cluster upgrades .
Rapid channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.0-gke.3047001 is now the default version for cluster creation in the Rapid channel.
The following versions are now available in the Rapid channel:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.0-gke.3047001
1.35.1-gke.1396000
The following versions are no longer available in the Rapid channel:
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
1.35.0-gke.2745003
1.35.0-gke.3047000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1026000
1.32 to 1.33.8-gke.1026000
1.33 to 1.34.4-gke.1047000
1.34 to 1.35.0-gke.3047001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1026000
1.33 to 1.33.8-gke.1026000
1.34 to 1.34.4-gke.1047000
1.35 to 1.35.0-gke.3047001
Regular channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1318000 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
1.35.0-gke.2745004
The following versions are no longer available in the Regular channel:
1.32.11-gke.1174000
1.33.5-gke.2326000
1.34.3-gke.1245000
1.35.0-gke.2232003
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1211000
1.32 to 1.33.5-gke.2392000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1211000
1.33 to 1.33.5-gke.2392000
1.34 to 1.34.3-gke.1318000
1.35 to 1.35.0-gke.2398002
Stable channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.5-gke.2228001 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.32.11-gke.1174000
1.33.5-gke.2326000
1.34.3-gke.1245000
Version 1.33.5-gke.2172001 is no longer available in the Stable channel.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.32 to 1.33.5-gke.2228001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.33 to 1.33.5-gke.2228001
Extended channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1318000 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.2026000
1.30.14-gke.2117000
1.31.14-gke.1376000
1.31.14-gke.1476000
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
1.35.0-gke.2745004
The following versions are no longer available in the Extended channel:
1.30.14-gke.1973000
1.30.14-gke.2071000
1.31.14-gke.1319000
1.31.14-gke.1423000
1.32.11-gke.1174000
1.33.5-gke.2326000
1.34.3-gke.1245000
1.35.0-gke.2232003
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.29 to 1.30.14-gke.1991000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.30 to 1.30.14-gke.1991000
1.31 to 1.31.14-gke.1336000
1.32 to 1.32.11-gke.1211000
1.33 to 1.33.5-gke.2392000
1.34 to 1.34.3-gke.1318000
1.35 to 1.35.0-gke.2398002
No channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1318000 is now the default version for cluster creation.
The following versions are now available:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.0-gke.2745004
1.35.0-gke.3047001
1.35.1-gke.1396000
The following node versions are now available:
1.30.14-gke.2117000
1.31.14-gke.1476000
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.0-gke.2745004
1.35.0-gke.3047001
1.35.1-gke.1396000
The following versions are no longer available:
1.33.5-gke.2118001
1.35.0-gke.2232003
1.35.0-gke.2398000
1.35.0-gke.3047000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1211000
1.32 to 1.33.5-gke.2228001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1211000
1.33 to 1.33.5-gke.2228001
1.34 to 1.34.3-gke.1318000
1.35 to 1.35.0-gke.2398002
Change
(2026-R8) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.5-gke.2228001 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.32.11-gke.1174000
1.33.5-gke.2326000
1.34.3-gke.1245000
Version 1.33.5-gke.2172001 is no longer available in the Stable channel.
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.32 to 1.33.5-gke.2228001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.33 to 1.33.5-gke.2228001
Change
(2026-R8) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1318000 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
1.35.0-gke.2745004
The following versions are no longer available in the Regular channel:
1.32.11-gke.1174000
1.33.5-gke.2326000
1.34.3-gke.1245000
1.35.0-gke.2232003
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1211000
1.32 to 1.33.5-gke.2392000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1211000
1.33 to 1.33.5-gke.2392000
1.34 to 1.34.3-gke.1318000
1.35 to 1.35.0-gke.2398002
Change
(2026-R8) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.0-gke.3047001 is now the default version for cluster creation in the Rapid channel.
The following versions are now available in the Rapid channel:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.0-gke.3047001
1.35.1-gke.1396000
The following versions are no longer available in the Rapid channel:
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
1.35.0-gke.2745003
1.35.0-gke.3047000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.12-gke.1026000
1.32 to 1.33.8-gke.1026000
1.33 to 1.34.4-gke.1047000
1.34 to 1.35.0-gke.3047001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.12-gke.1026000
1.33 to 1.33.8-gke.1026000
1.34 to 1.34.4-gke.1047000
1.35 to 1.35.0-gke.3047001
Change
(2026-R8) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1318000 is now the default version for cluster creation.
The following versions are now available:
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.0-gke.2745004
1.35.0-gke.3047001
1.35.1-gke.1396000
The following node versions are now available:
1.30.14-gke.2117000
1.31.14-gke.1476000
1.32.12-gke.1076000
1.33.8-gke.1112000
1.34.4-gke.1130000
1.35.0-gke.2745004
1.35.0-gke.3047001
1.35.1-gke.1396000
The following versions are no longer available:
1.33.5-gke.2118001
1.35.0-gke.2232003
1.35.0-gke.2398000
1.35.0-gke.3047000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1211000
1.32 to 1.33.5-gke.2228001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1211000
1.33 to 1.33.5-gke.2228001
1.34 to 1.34.3-gke.1318000
1.35 to 1.35.0-gke.2398002
Change
(2026-R8) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1318000 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.2026000
1.30.14-gke.2117000
1.31.14-gke.1376000
1.31.14-gke.1476000
1.32.11-gke.1264000
1.33.5-gke.2469000
1.34.3-gke.1444000
1.35.0-gke.2745004
The following versions are no longer available in the Extended channel:
1.30.14-gke.1973000
1.30.14-gke.2071000
1.31.14-gke.1319000
1.31.14-gke.1423000
1.32.11-gke.1174000
1.33.5-gke.2326000
1.34.3-gke.1245000
1.35.0-gke.2232003
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.29 to 1.30.14-gke.1991000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.30 to 1.30.14-gke.1991000
1.31 to 1.31.14-gke.1336000
1.32 to 1.32.11-gke.1211000
1.33 to 1.33.5-gke.2392000
1.34 to 1.34.3-gke.1318000
1.35 to 1.35.0-gke.2398002
Google SecOps
Feature
Added support for Google Cloud VPC Service Controls
This feature is currently in Preview.
VPC Service Controls helps protect against accidental or targeted action
by external entities or insider entities, which helps to minimize unwarranted
data exfiltration risks from Google Cloud services. You can use VPC Service Controls to create perimeters
that protect the resources and data of services that you explicitly specify. For more information, see Overview of VPC Service Controls .
Google SecOps Marketplace
Feature
Google Workspace : Version 23.0
The following new action has been added:
Remove Extension
Change
Google Chronicle : Version 77.0
Integration : Updated the error handling for Workload Identity
authentication.
Change
Microsoft 365 Defender : Version 23.0
Added support for Graph API to the following actions:
Execute Query
Execute Custom Query
Execute Entity Query
Google SecOps SIEM
Feature
Added support for Google Cloud VPC Service Controls
This feature is currently in Preview.
VPC Service Controls helps protect against accidental or targeted action
by external entities or insider entities, which helps to minimize unwarranted
data exfiltration risks from Google Cloud services. You can use VPC Service Controls to create perimeters
that protect the resources and data of services that you explicitly specify. For more information, see Overview of VPC Service Controls .
NetApp Volumes
Feature
Google Cloud NetApp Volumes supports Flex Unified large volumes in Preview, a
file-only solution with NFS and SMB protocols for massive datasets. This option
allows storage pools up to 20 PiB, and delivers up to 22 GiBps throughput and
750,000 IOPS. For more information, see
Key features .
Feature
The Customer Managed Encryption Keys (CMEK) for backup feature is generally
available for Standard, Premium, and Extreme service levels, and in Preview
for the Flex Unified service level. For more information, see
Backup encryption with CMEK .
Feature
Google Cloud NetApp Volumes supports a new operational mode for Flex Unified
pools in Preview. ONTAP-mode provides direct API access to the underlying ONTAP
cluster, and supports both file and block volumes, and large volume pools. For
more information about managing different features, see
About ONTAP-mode .
Feature
The block storage with iSCSI protocol is generally available for the Flex
Unified service level. For more information, see
Block storage .
Feature
Google Cloud NetApp Volumes supports Flex Unified File service level with both
NFS and SMB protocols in Preview. For more information, see
Key features .
Network Intelligence Center
Feature
The following features are available in
Connectivity Tests :
Source IP type selection : you can select a specific source IP address
type when creating a connectivity test in the Google Cloud console.
Options include: an internal IP address in a VPC network; an internal IP
address outside of Google Cloud; an external IP
address; or automatic source detection that evaluates all possible paths.
New network type : the Network Management API includes the
INTERNET
network type, which maps to the External IP address source IP type
in the Google Cloud console.
Your own IP address as the source : you can select your
user IP address as the source IP address for a connectivity test in the
Google Cloud console.
Automatic VPC network detection : for destination IP addresses within
Google Cloud, Connectivity Tests automatically detects the destination
VPC network. You no longer need to select it manually.
Spanner
Feature
Spanner supports the following:
Monitor the usage of Enterprise edition and
Enterprise Plus edition features
in your Spanner instance.
Downgrade the instance's edition using the Google Cloud console .
Verify edition compatibility when restoring from a backup .
If the database uses higher-tier features, you must restore the backup to a
destination instance that uses the same or a higher-tier edition.
Set custom edition constraints within your organization policies ,
limiting the edition of your instance that your users can create.
Feature
Spanner supports the following managed autoscaler
features:
Autoscaling based on total CPU utilization target .
When an instance's total CPU utilization exceeds or falls below the target
that you have set, Spanner adds or removes compute capacity.
Autoscaling for instance partitions (in Preview) .
For more information, see Managed autoscaler .
VPC Service Controls
Feature
Preview stage support
for the following integration:
Google Security Operations
February 24, 2026
Apigee X
Announcement
On February 24th, 2026, we released an updated version of Apigee (1-17-0-apigee-3).
Note: Rollouts of this release began today and may take four or more business days to be completed across all Google Cloud zones. Your instances may not have the features and fixes available until the rollout is complete.
Fixed
Bug ID
Description
470375542
Fixed a memory leak which could result in a spike in 503 responses with no_healthy_upstream messages.
480997525
Applied a fix for proxy calls failing with The URI contains illegal characters error after Netty upgrade.
485595627
Fixed an issue resulting in TLS handshake errors.
Security
Bug ID
Description
481735779, 457138941, 471232237
Security fix for Apigee infrastructure. This addresses the following vulnerabilities: CVE-2025-61730
CVE-2025-68156
CVE-2025-54388
CVE-2025-61727
CVE-2025-61729
BigQuery
Feature
You can now create and review
custom glossary terms in BigQuery for a conversational
analytics agent and you can review business glossary terms imported from
Dataplex Universal Catalog for an agent. These terms help an agent interpret your
prompts.
This feature is now in Preview .
Cloud Asset Inventory
Feature
The following resource types are publicly available through the
ExportAssets ,
ListAssets ,
BatchGetAssetsHistory ,
QueryAssets ,
Feed ,
SearchAllResources ,
and
SearchAllIamPolicies
APIs.
Cloud Load Balancing
networksecurity.googleapis.com/AuthzPolicy
Network Services API
networkservices.googleapis.com/AuthzExtension
Cloud Load Balancing
Other
Backend Cloud Storage buckets are available for
regional external Application Load Balancers, regional internal Application Load Balancers, and
cross-region internal Application Load Balancers in a Shared VPC environment.
Support for this feature is available in Preview for
regional external Application Load Balancers and regional internal Application Load Balancers and in
General availability for cross-region internal Application Load Balancers. For more information,
see:
Set up a regional external Application Load Balancer with Cloud Storage buckets in a Shared VPC environment
Set up a regional internal Application Load Balancer with Cloud Storage buckets in a Shared VPC environment
Set up a cross-region internal Application Load Balancer with Cloud Storage buckets in a Shared VPC environment
Cloud Run
Feature
Deploy a highly available, multi-region Cloud Run service with automated
failover and failback for external traffic using Cloud Run service health
(Preview).
Feature
You can use the Cloud Run remote MCP server to let
agents and AI applications deploy with Cloud Run ( Preview ).
Cloud Run functions
Feature
Support for the ability to configure Direct VPC egress for 2nd gen functions is in General Availability .
Cloud SQL for MySQL
Feature
It now takes less time to create a Cloud SQL instance when point-in-time
recovery (PITR) is enabled, as it is by default in the Google Cloud console.
During instance creation, PITR now initially uses an
instant snapshot
instead of a
standard backup .
and then later converts the snapshot to a standard backup in the background to support
restore operations .
Cloud SQL for PostgreSQL
Feature
It now takes less time to create a Cloud SQL instance when point-in-time
recovery (PITR) is enabled, as it is by default in the Google Cloud console.
During instance creation, PITR now initially uses an
instant snapshot
instead of a
standard backup .
and then later converts the snapshot to a standard backup in the background to support
restore operations .
Cloud Translation
Change
Translation LLM now supports full finetuning with LoRA .
Container Optimized OS
Change
cos-beta-129-19506-0-32
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.0
See List
Change
cos-dev-133-19566-0-0
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.74
v27.5.1
v2.2.1
See List
Change
Upgraded net-misc/curl to version 8.18.0. This fixes CVE-2025-13034, CVE-2025-14017, CVE-2025-14524, CVE-2025-14819, CVE-2025-15079, and CVE-2025-15224.
Feature
Added support for 590.44.01 and 590.48.01 NVIDIA driver for NVIDIA_RTX_PRO_6000
Change
Made it so that /run is mounted as noexec.
Fixed
Added support for NVIDIA driver v580.126.09-grid for NVIDIA_RTX_PRO_6000 GPU type.
Security
Fixed CVE-2025-15281 and CVE-2026-0861 in sys-libs/glibc.
Change
Updated the Linux kernel to v6.12.74.
Security
Fixed CVE-2025-68358 in the Linux kernel.
Change
Upgraded containerd to v2.2.1.
Security
Fixed CVE-2025-68365 in the Linux kernel.
Feature
Added support for 590.44.01 and 590.48.01 NVIDIA driver for NVIDIA_RTX_PRO_6000
Security
Fixed CVE-2025-68725 in the Linux kernel.
Feature
Added support for NVIDIA driver v535.288.01, v570.211.01 and v580.126.09.
Security
Fixed CVE-2025-71225 in the Linux kernel.
Security
Fixed CVE-2026-23112 in the Linux kernel.
Fixed
Added support for NVIDIA driver v580.126.09-grid for NVIDIA_RTX_PRO_6000 GPU type.
Security
Fixed CVE-2026-23113 in the Linux kernel.
Fixed
Enabled buffer overflow detection for kernel str/mem functions.
Security
Fixed CVE-2026-23119 in the Linux kernel.
Fixed
Upgraded app-admin/google-guest-agent to v20260121.00.
Security
Fixed CVE-2026-23124 in the Linux kernel.
Fixed
Upgraded app-admin/oslogin to v20260128.00.
Security
Fixed CVE-2026-23148 in the Linux kernel.
Fixed
Upgraded app-admin/oslogin to v20260129.00.
Security
Fixed CVE-2026-23154 in the Linux kernel.
Fixed
Upgraded dev-db/sqlite to v3.51.2.
Security
Fixed CVE-2026-23156 in the Linux kernel.
Fixed
Upgraded net-libs/libnetfilter_conntrack to v1.1.1.
Security
Fixed CVE-2026-23159 in the Linux kernel.
Fixed
Upgraded net-misc/rsync to v3.4.1-r2.
Security
Fixed CVE-2026-23161 in the Linux kernel.
Fixed
Upgraded net-misc/socat to v1.8.1.0-r1.
Security
Fixed CVE-2026-23168 in the Linux kernel.
Fixed
Upgraded sys-apps/gentoo-functions to v1.7.6.
Security
Fixed CVE-2026-23173 in the Linux kernel.
Fixed
Upgraded sys-apps/less to v692.
Security
Fixed CVE-2026-23177 in the Linux kernel.
Fixed
Upgraded sys-process/procps to v4.0.6.
Security
Fixed CVE-2026-23179 in the Linux kernel.
Security
Fixed CVE-2026-23193 in the Linux kernel.
Security
Fixed CVE-2025-15281 and CVE-2026-0861 in sys-libs/glibc.
Security
Fixed CVE-2026-23198 in the Linux kernel.
Security
Fixed CVE-2025-40147 in the Linux kernel.
Security
Fixed CVE-2026-23199 in the Linux kernel.
Security
Fixed CVE-2026-0915 in sys-apps/glibc.
Security
Fixed CVE-2026-23200 in the Linux kernel.
Security
Fixed KCTF-e3f000f in the Linux kernel.
Security
Fixed CVE-2026-23204 in the Linux kernel.
Security
Fixed KCTF-f8db647 in the Linux kernel.
Security
Fixed CVE-2026-23205 in the Linux kernel.
Security
Updated dev-libs/libxml2 to version 2.14.6. This resolves CVE-2025-6021.
Security
Fixed CVE-2026-23212 in the Linux kernel.
Security
Updated dev-libs/openssl to v3.5.5. This resolves CVE-2025-15467.
Security
Fixed CVE-2026-23214 in the Linux kernel.
Security
Upgraded net-misc/curl to version 8.18.0. This fixes CVE-2025-13034, CVE-2025-14017, CVE-2025-14524, CVE-2025-14819, CVE-2025-15079, and CVE-2025-15224.
Security
Fixed CVE-2026-23215 in the Linux kernel.
Security
Fixed CVE-2026-23216 in the Linux kernel.
Security
Fixed CVE-2026-23219 in the Linux kernel.
Security
Fixed KCTF-e3f000f in the Linux kernel.
Change
cos-125-19216-220-24
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Fixed CVE-2026-23177 in the Linux kernel.
Feature
Added support for 590.44.01 and 590.48.01 NVIDIA driver for NVIDIA_RTX_PRO_6000
Fixed
Added support for NVIDIA driver v580.126.09-grid for NVIDIA_RTX_PRO_6000 GPU type.
Fixed
Upgraded app-admin/sosreport to v4.11.0.
Fixed
Upgraded net-misc/rsync to v3.4.1-r2.
Fixed
Upgraded net-misc/socat to v1.8.1.1.
Fixed
Upgraded sys-apps/less to v692.
Security
Fixed CVE-2025-15281 and CVE-2026-0861 in sys-libs/glibc.
Security
Fixed CVE-2025-47912, CVE-2025-58185, CVE-2025-58187, CVE-2025-58188, CVE-2025-58189, CVE-2025-61723, CVE-2025-61724, CVE-2025-61726, and CVE-2025-61728 in dev-lang/go.
Security
Fixed CVE-2025-60753 in libarchive.
Security
Fixed CVE-2025-71225 in the Linux kernel.
Security
Fixed CVE-2026-23112 in the Linux kernel.
Security
Fixed CVE-2026-23148 in the Linux kernel.
Security
Fixed CVE-2026-23154 in the Linux kernel.
Security
Fixed CVE-2026-23156 in the Linux kernel.
Security
Fixed CVE-2026-23159 in the Linux kernel.
Security
Fixed CVE-2026-23161 in the Linux kernel.
Security
Fixed CVE-2026-23168 in the Linux kernel.
Security
Fixed CVE-2026-23173 in the Linux kernel.
Security
Fixed CVE-2026-23179 in the Linux kernel.
Security
Fixed CVE-2026-23193 in the Linux kernel.
Security
Fixed CVE-2026-23198 in the Linux kernel.
Security
Fixed CVE-2026-23199 in the Linux kernel.
Security
Fixed CVE-2026-23200 in the Linux kernel.
Security
Fixed CVE-2026-23205 in the Linux kernel.
Security
Fixed CVE-2026-23212 in the Linux kernel.
Security
Fixed CVE-2026-23214 in the Linux kernel.
Security
Fixed CVE-2026-23215 in the Linux kernel.
Security
Fixed CVE-2026-23216 in the Linux kernel.
Security
Fixed CVE-2026-23219 in the Linux kernel.
Security
Fixed KCTF-e3f000f in the Linux kernel.
Security
Fixed KCTF-f41c5d1 in the Linux kernel.
Security
Upgraded net-misc/curl to version 8.18.0. This fixes CVE-2025-10148, CVE-2025-10966, CVE-2025-13034, CVE-2025-14017, CVE-2025-14524, CVE-2025-14819, CVE-2025-15079, and CVE-2025-15224.
Change
cos-113-18244-582-11
Kernel
Docker
Containerd
GPU Drivers
COS-6.1.161
v24.0.9
v1.7.27
See List
Security
Fixed CVE-2023-54285 in the Linux kernel.
Security
Fixed CVE-2025-15281 and CVE-2026-0861 in sys-libs/glibc.
Security
Fixed CVE-2025-38232 in the Linux kernel.
Security
Fixed CVE-2025-68725 in the Linux kernel.
Security
Fixed CVE-2026-22998 in the Linux kernel.
Security
Fixed CVE-2026-22999 in the Linux kernel.
Security
Fixed CVE-2026-23001 in the Linux kernel.
Security
Fixed CVE-2026-23003 in the Linux kernel.
Security
Fixed CVE-2026-23005 in the Linux kernel.
Security
Fixed CVE-2026-23010 in the Linux kernel.
Security
Fixed CVE-2026-23011 in the Linux kernel.
Security
Fixed CVE-2026-23025 in the Linux kernel.
Security
Fixed CVE-2026-23038 in the Linux kernel.
Security
Fixed CVE-2026-23069 in the Linux kernel.
Security
Fixed CVE-2026-23085 in the Linux kernel.
Security
Fixed CVE-2026-23095 in the Linux kernel.
Security
Fixed CVE-2026-23097 in the Linux kernel.
Security
Fixed CVE-2026-23099 in the Linux kernel.
Security
Fixed CVE-2026-23102 in the Linux kernel.
Security
Fixed CVE-2026-23103 in the Linux kernel.
Security
Fixed CVE-2026-23105 in the Linux kernel.
Security
Fixed CVE-2026-23107 in the Linux kernel.
Security
Fixed CVE-2026-23110 in the Linux kernel.
Security
Fixed KCTF-f41c5d1 in the Linux kernel.
Security
Fixed KCTF-f8db647 in the Linux kernel.
Change
cos-117-18613-534-15
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.123
v24.0.9
v1.7.29
See List
Fixed
Upgraded net-misc/socat to v1.8.1.0-r1.
Fixed
Upgraded sys-apps/less to v692.
Security
Fixed CVE-2025-15281 and CVE-2026-0861 in sys-libs/glibc.
Security
Fixed CVE-2025-6075 in python.
Security
Fixed CVE-2025-60753 in libarchive.
Security
Fixed CVE-2026-23112 in the Linux kernel.
Security
Fixed CVE-2026-23176 in the Linux kernel.
Security
Fixed CVE-2026-23179 in the Linux kernel.
Security
Fixed CVE-2026-23193 in the Linux kernel.
Security
Fixed CVE-2026-23198 in the Linux kernel.
Security
Fixed CVE-2026-23200 in the Linux kernel.
Security
Fixed CVE-2026-23204 in the Linux kernel.
Security
Fixed CVE-2026-23205 in the Linux kernel.
Security
Fixed CVE-2026-23209 in the Linux kernel.
Security
Fixed KCTF-f41c5d1 in the Linux kernel.
Security
Upgraded net-misc/curl to version 8.18.0. This fixes CVE-2025-10148, CVE-2025-10966, CVE-2025-13034, CVE-2025-14017, CVE-2025-14524, CVE-2025-14819, CVE-2025-15079, and CVE-2025-15224.
Change
cos-121-18867-381-1
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.122
v27.5.1
v2.0.7
See List
Fixed
Upgraded net-misc/socat to v1.8.1.0-r1.
Fixed
Upgraded sys-apps/less to v692.
Security
Fixed CVE-2026-23156 in the Linux kernel.
Security
Fixed CVE-2026-23159 in the Linux kernel.
Security
Fixed CVE-2026-23168 in the Linux kernel.
Security
Upgraded net-misc/curl to version 8.18.0. This fixes CVE-2025-10148, CVE-2025-10966, CVE-2025-13034, CVE-2025-14017, CVE-2025-14524, CVE-2025-14819, CVE-2025-15079, and CVE-2025-15224.
Dataplex
Feature
You can now save data profile aspects in Dataplex Universal Catalog up to 1 MB
in size. For more information, see
Quotas and limits .
Dataproc
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.160-debian10, 2.0.160-rocky8, 2.0.160-ubuntu18
2.1.109-debian11, 2.1.109-rocky8, 2.1.109-ubuntu20, 2.1.109-ubuntu20-arm
2.2.77-debian12, 2.2.77-rocky9, 2.2.77-ubuntu22, 2.2.77-ubuntu22-arm
2.3.24-debian12, 2.3.24-ml-ubuntu22, 2.3.24-rocky9, 2.3.24-ubuntu22, 2.3.24-ubuntu22-arm
Fixed
Fixed an issue that could cause gsutil failures on clusters using custom images built from new base images. This problem occurred when the gcloud core/universe_domain property was not set in the build environment, resulting in a malformed /etc/boto.cfg . The image build process now ensures a correct default configuration, restoring proper Google Cloud Storage connectivity.
Gemini
Announcement
File outline feature in IntelliJ general availability
The file outline
feature is now generally available (GA).
Announcement
Finish changes feature in IntelliJ general availability
The finish changes
features is now generally available (GA).
Announcement
File outline feature in IntelliJ general availability
The file outline
feature is now generally available (GA).
Announcement
Finish changes feature in IntelliJ general availability
The finish changes
features is now generally available (GA).
Google Kubernetes Engine
Feature
The release note for November 11, 2025 has been updated to correct the version requirements for using N4D machine types. Cluster autoscaler was incorrectly included in the list of features requiring GKE version 1.34.1-gke.2037000 or later. You can use any available GKE version to use N4D and Cluster autoscaler.
Feature
You can create a bare metal instance from the C4A machine series with the c4a-highmem-96-metal machine type. This machine type is available in Public Preview for Standard clusters running GKE version 1.35.0-gke.2232000 or later. You can select this machine type by using the --machine-type flag when creating a cluster or node pool. For more information about the requirements and limitations of this machine type, see the Requirements and limitations section of the "Arm workloads on GKE" document.
Change
Expanded coverage for compute flexible committed use discounts (CUDs) is
available to all Cloud Billing accounts. All Cloud Billing accounts have
been automatically migrated to the
new spend-based CUD model and you no longer need to opt
in to benefit from the expanded coverage. For the full list of eligible SKUs
across Compute Engine, GKE, and Cloud Run,
see SKU Groups - Compute Flexible CUD Eligible SKUs .
To learn more about compute flexible CUDs and how they apply to your GKE usage, see
the GKE CUDs documentation .
Google SecOps
Feature
New: cross joins in multi-stage queries
You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages. They are supported in:
Search
Dashboards
For more information, see Cross joins in multi-stage queries .
Feature
RBAC for ingestion metrics
Administrators can now use RBAC for ingestion metrics to restrict visibility of system health data, such as ingestion volume, errors, and throughput, based on a user's business scope.
The Data Ingestion and Health dashboard now uses Data Access scopes. When a scoped user loads the dashboard, the system automatically filters metrics to show only data that matches their assigned labels: Namespace, Log Type, and Ingestion Source.
For more information, see Ingestion metrics .
Google SecOps SIEM
Feature
New: cross joins in multi-stage queries
You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages. They are supported in:
Search
Dashboards
For more information, see Cross joins in multi-stage queries .
Feature
RBAC for ingestion metrics
Administrators can now use RBAC for ingestion metrics to restrict visibility of system health data, such as ingestion volume, errors, and throughput, based on a user's business scope.
The Data Ingestion and Health dashboard now uses Data Access scopes. When a scoped user loads the dashboard, the system automatically filters metrics to show only data that matches their assigned labels: Namespace, Log Type, and Ingestion Source.
For more information, see Ingestion metrics .
Oracle Database@Google Cloud
Feature
For Autonomous Database Service, Oracle Database@Google Cloud supports the asia-northeast2 (Osaka, Japan) region.
For a list of supported locations, see Supported regions and zones .
Spanner
Feature
Spanner provides UNSPLITTABLE_REASONS in hotspot insights and
split statistics views to detect when splits can't be split further.
Unsplittable reasons can help you identify schema anti-patterns that require
intervention. For more information, see
Find hotspots in your database
and
Split statistics .
This feature is generally available (GA) .
Vertex AI Search
Feature
Vertex AI Search: Change the pricing model for a project
There are two pricing models for apps and data stores: the general model
(pay-as-you-go consumption-based) and the configurable subscription model (a
monthly subscription).
You can switch from configurable pricing to general pricing for a project if all
its data stores and apps use the general model. For more information, see
Disable configurable pricing for
project .
February 23, 2026
Access Approval
Feature
Secure Web Proxy is generally available (GA) .
Access Transparency
Feature
Secure Web Proxy is generally available (GA) .
AlloyDB for PostgreSQL
Feature
Gemini Cloud Assist investigation capabilities are now supported in
AlloyDB ( Preview ).
For more information, see
Troubleshoot slow queries with AI assistance .
Apigee API hub
Feature
Preview release of specification boost
API hub now supports the preview release of specification boost, an AI-powered
add-on that lets you automatically enhance the readability and discoverability
of your API specifications in API hub. It analyzes your existing specification
files and generates boosted versions enriched with richer details, including
additional examples, clearer descriptions, better error documentation, and more.
For more information see Specification boost add-on .
Note: Rollouts of this release to production instances might take up to 5 business days to complete across all Google Cloud zones. Your instances might not have the feature available until the rollout is complete.
BigQuery
Feature
You can now undelete a dataset that
is within your time travel window to recover it to the state that it was in when
it was deleted. This feature is generally
available (GA).
Cloud Load Balancing
Feature
Backend mutual TLS (mTLS) and backend authenticated TLS is now
Generally available for cross-region internal Application Load Balancers.
This update complements existing support for global and regional
Application Load Balancers, allowing you to enforce bidirectional
identity verification across your regional deployments.
For details, see the following:
Backend mTLS overview
Set up backend authenticated TLS
Set up backend mTLS
Cloud SQL for MySQL
Feature
Gemini Cloud Assist investigation capabilities are now supported in
Cloud SQL for MySQL ( Preview ).
For more information, see
Troubleshoot slow queries with AI assistance .
Cloud SQL for PostgreSQL
Feature
Gemini Cloud Assist investigation capabilities are now supported in
Cloud SQL for PostgreSQL ( Preview ).
For more information, see
Troubleshoot slow queries with AI assistance .
Cloud SQL for SQL Server
Feature
Gemini Cloud Assist investigation capabilities are now supported in
Cloud SQL for SQL Server ( Preview ).
For more information, see
Troubleshoot slow queries with AI assistance .
Compute Engine
Feature
Generally available : H4D VMs, designed for high performance computing (HPC)
workloads, are now generally available. Based on 5th generation AMD EPYC Turin
with Cloud RDMA 200 Gbps networking, H4D VMs offer 192 cores (SMT
disabled), up to 1,488 GB of memory, and 3,750 GiB of Local SSD. H4D is
optimized for tightly-coupled applications that scale across multiple nodes.
For more information, see H4D machine series .
Gemini Enterprise
Feature
Gemini Enterprise: Share agents created using Agent Designer
The agent sharing feature in Agent Designer is generally available (GA) with the
following enhancements:
Direct sharing: Agent owners can share agents directly with other users
in their organization without prior admin approval.
Configurable admin review: Admins can turn on or
turn off the requirement for manual review of sharing requests.
Additional sharing controls: Admins can share agents with
Google Groups and Workforce Identity Federation (WIF) identity pools.
For more information, see
Share an agent .
Feature
Gemini Enterprise: Sharing controls for employee-made agents
Employee-made agents can share within an organization. Admins can manage how
these agents are shared by using the Enable agent sharing and Enable agent
sharing without admin approval toggles in the management console.
This feature is generally available (GA). For more information, see Configure feature
controls .
Feature
Gemini Enterprise: Share Google-made agents, custom agents, and employee-made
agents that are registered with Gemini Enterprise
Admins can share the following agents:
Google-made agents such as Deep Research.
Employee-made agents created using Agent Designer.
Custom agents built using Agent-to-Agent (A2A) and registered with
Gemini Enterprise.
Agents developed using Agent Development Kit (ADK) and registered with
Gemini Enterprise.
Dialogflow agents that are registered with Gemini Enterprise.
Agents added from Google Cloud Marketplace
This feature is generally available (GA). For more information, see Share agents from Google Cloud
console .
Generative AI on Vertex AI
Deprecated
Anthropic's Claude 3 Haiku
Anthropic's Claude 3 Haiku is deprecated as of February 23, 2026 and will be
shut down on August 23, 2026. For more information, see
Partner model deprecations .
Google SecOps
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Big Switch BigCloudFabric logs
Collect BMC AMI Defender logs
Collect Broadcom Support Portal Audit logs
Collect CA ACF2 logs
Collect CA LDAP logs
Collect ChromeOS XDR logs
Collect Chronicle SOAR Audit logs
Collect Cisco CTS logs
Collect Cisco FireSIGHT Management Center logs
Collect Cisco Vision Dynamic Signage Director logs
Collect ClamAV logs
Collect Cofense logs
Collect Crowdstrike IOC logs
Collect Custom Application Access logs
Collect Custom Security Data Analytics logs
Collect Cyber 2.0 IDS logs
Collect CyberArk logs
Collect Cybereason EDR logs
Collect Dataminr Alerts logs
Collect Digital Shadows Indicators logs
Collect Mimecast Mail V2 logs
Collect Okta User Context logs
Collect RH-ISAC IOC logs
Collect ServiceNow CMDB data
Google SecOps SIEM
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Big Switch BigCloudFabric logs
Collect BMC AMI Defender logs
Collect Broadcom Support Portal Audit logs
Collect CA ACF2 logs
Collect CA LDAP logs
Collect ChromeOS XDR logs
Collect Chronicle SOAR Audit logs
Collect Cisco CTS logs
Collect Cisco FireSIGHT Management Center logs
Collect Cisco Vision Dynamic Signage Director logs
Collect ClamAV logs
Collect Cofense logs
Collect Crowdstrike IOC logs
Collect Custom Application Access logs
Collect Custom Security Data Analytics logs
Collect Cyber 2.0 IDS logs
Collect CyberArk logs
Collect Cybereason EDR logs
Collect Dataminr Alerts logs
Collect Digital Shadows Indicators logs
Collect Mimecast Mail V2 logs
Collect Okta User Context logs
Collect RH-ISAC IOC logs
Collect ServiceNow CMDB data
Policy Controller
Change
Policy Controller version 1.23.0 is now available.
Sensitive Data Protection
Feature
Sensitive Data Protection can discover and profile Vertex AI tuning
jobs. For more information, see Sensitive data discovery for Vertex
AI .
Feature
The following features are in General
Availability :
Adjustment
rules ,
which let you customize the likelihood of findings based on their context.
Adjustment rules support text-based and image-based operations.
Image-based exclusion
rules ,
which let you refine your image inspection results by excluding findings
based on their spatial relationships with other findings.
Enhanced rule
ordering ,
which lets you chain rules based on the order you specify them in the
ruleset.
For information about configuring these rules, see Modifying infoType detectors
to refine scan results .
Feature
The KOREA_BRN infoType detector is available in all regions. For more information about all built-in infoTypes, see the InfoType detector reference .
February 22, 2026
Config Connector
Announcement
Config Connector version 1.145.0 is now available.
Feature
New Beta Resources (Direct Reconciler):
ComputeSecurityPolicy
Manage Google Cloud Armor security policies.
MemorystoreInstance
Manage Memorystore for Valkey Instances .
Feature
New Fields:
ContainerCluster
Added spec.clusterAutoscaling.defaultComputeClassConfig field.
RunJob
Added spec.template.template.volumes.nfs field to support NFS backed Volumes.
Added spec.template.template.volumes.gcs field to support GCS backed Volumes.
SQLInstance
Added spec.settings.failoverDrReplicaRef field to support designating CloudSQL Enterprise Plus DR Replicas.
Feature
New features:
Added the preview command to the config-connector CLI. The preview command has been removed from the experimental kompanion tool.
Change
Added support for structured diff reporting to the following direct controllers to improve logging and debugging:
ApigeeEnvgroup
ApigeeInstance
AssetFeed
AssetSavedQuery
BackupVaultIdentity
BigtableLogicalView
CloudDeployDeliveryPipeline
ColabRuntime
RedisCluster
SpannerBackupSchedule
SpannerInstance
SpannerInstanceConfig
TaskQueue
WorkstationConfig
Fixed
Bug Fixes:
DataformRepository
Fixed a bug where the serviceAccountRef field could not be updated.
SpannerBackupSchedule
Fixed an issue with invalid update masks by handling output-only fields.
Google SecOps
Change
Publisher Agent Version 2.6.4 removes support for Python 3.7 from the remote agent.
Google SecOps SOAR
Announcement
Release 6.3.77 is being rolled out to the first phase of regions as listed here .
This release contains the following changes:
Change
Publisher Agent Version 2.6.4 removes support for Python 3.7 from the remote agent.
February 21, 2026
Google SecOps SOAR
Announcement
Release 6.3.76 is now available for all regions.
February 20, 2026
Cloud Composer
Feature
Cloud Composer API now accepts the new
https://www.googleapis.com/auth/cloudcomposer OAuth scope. This scope
provides access only to the Cloud Composer API and can't be used to call other
Google Cloud APIs.
Change
The enable_private_environment boolean field in the Cloud Composer API is
going to be deprecated in the future. When making direct calls to Cloud
Composer API, use the new networking_type field instead.
This change affects only direct calls to the Cloud Composer API.
Google Cloud CLI commands and the google_composer_environment resource in
Terraform are not affected.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.0-build.10
composer-3-airflow-2.10.5-build.27 (default)
composer-3-airflow-2.9.3-build.47
Change
New images
are available in Cloud Composer 2:
composer-2.16.5-airflow-2.10.5 (default)
composer-2.16.5-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.16 and composer-2.11.3-*.
Confidential Space
Announcement
A new Confidential Space image (260200) is available.
Container Optimized OS
Change
cos-beta-129-19506-0-17
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.0
See List
Change
Added kernel support for bare-metal on the NVIDIA Grace platform.
Change
Added support for A4X-Max NICs.
Change
Applied ethtool ring length changes to a4x's first Diorite interface.
Change
Enabled Coherent Driver Memory Management by default when installing GPU drivers on GB2000.
Change
Changed the mount options for /mnt/disks to noexec.
Change
Updated CONFIG_BLK_DEV_LOOP_MIN_COUNT to 0. This allows
unlimited loop devices.
Change
Updated app-containers/containerd to v2.2.0.
Change
Updated app-containers/runc to v1.4.0.
Change
Updated dev-libs/openssl to v3.5.4.
Change
Updated the Linux kernel to v6.12.67.
Change
Upgraded dev-libs/json-c from 0.16-r1 to 0.18.0.
Change
Upgraded dev-libs/libuv from 1.43.0 to 1.51.0-r1.
Change
Upgraded dev-util/cmake from 3.26.4 to 3.31.9.
Feature
Added CPU balloon support for ARM CPUs.
Feature
Added ConnectX-8 RDMA support.
Feature
Added GB300 support to cos-extensions.
Feature
Added GDRCopy kernel module for NVIDIA drivers.
Feature
Added IPv6 support for machines using the IDPF driver.
Feature
Added TDX RTMR support.
Feature
Added guest support for paravirtualization of cpuids on ARM machines.
Feature
Added iRDMA support in the Linux kernel.
Feature
Added patches to handle IDPF tx timeouts.
Feature
Added support for CASFS (Content Addressable Storage File System) as a kernel module.
Feature
Added support for NVIDIA GB300 devices.
Feature
Added support for NVIDIA MFT Tools on arm64.
Feature
Added support for NVIDIA driver v535.288.01, v570.211.01 and v580.126.09.
Feature
Added support for NVIDIA driver v580.105.08 and set it as the default version for all GPU types.
Feature
Added support for SCSI logging.
Feature
Added support for the Lustre 2.14.0_p224 drivers.
Feature
Added support for the fwctl subsystem and the Mellanox fwctl driver for ARM64.
Feature
Added support for zswap in the Linux kernel.
Feature
Backported support for AMD SEV-SNP SVSM vTPM driver and
configfs-tsm addition for extended attestation protocol.
Feature
Configured the cos-gpu-installer to use R580 drivers as the
default GPU drivers.
Feature
Disabled DNSSEC by default for COS TPU VMs.
Feature
Enabled HTCP TCP congestion control algorithm as a module.
Feature
Enabled KVM for COS ARM64.
Feature
Enabled Software Watchdog as a module.
Feature
Enabled automatic loading of RDMA kernel modules when CX-8 devices are detected.
Feature
Enabled dynamic vlan configuration for non-primary NICs.
Feature
Enabled hardware optimized SHA256 algorithms for x86 machines with SSSE3 and AVX/AVX2 instructions and ARM64 machines with SHA-NI and ARMv8 Crypto Extensions.
Feature
Enabled the Btrfs kernel module.
Feature
Enabled the google-guest-agent's network management functionality.
Feature
Fixed a bug in cos-extensions which would cause GB200 and GB300 devices not to be detected in one code path, which would result in Imex channels not being created by default.
Feature
Removed the cloud-final.service dependency on multi-user.target which could delay cloud-init user-data scripts indefinitely when long-running startup scripts are used.
Feature
Removed the futility program from the root file system.
Fixed
Add support for NVIDIA MFT Tools v4.33.0.
Fixed
Added binary auth-provider-gcp.
Fixed
Added support for NVIDIA driver v535.274.02 and v570.195.03.
Fixed
Added support for the Lustre 2.14.0_p216 drivers.
Fixed
Backported various TCPDirect networking fixes.
Fixed
Enabled multiport support for CX-8 devices.
Fixed
Fixed a TCPX bug which would sometimes incorrectly report devices as being missing when route cache entries were missing or invalidated.
Fixed
Fixed a bug where setting MTU above 9000 on ARM systems with a 64k page size would cause IDPF networking to fail.
Fixed
Fixed a kernel bug which caused boot to fail for n4 machine types.
Fixed
Fixed an issue in app-containers/runc that caused runc to
use more file descriptors than intended.
Fixed
Fixed an issue where cpusets cgroups did not work with
cgroup v1 enabled.
Fixed
Fixed an issue where the cpuidle driver selected for some
machine types would cause inflated reports of high CPU usage.
Fixed
Fixed bcache latency spikes.
Fixed
Installed app-misc/c_rehash.
Fixed
Made CX-8 NIC naming order deterministic.
Fixed
Made the google-guest-agent more resilient to network link
flakes.
Fixed
Partially fixed an issue where excessive contention among writeback kworkers when switching a large number of inodes between cgroups could lead to system unresponsiveness.
Fixed
Reduced gcr_wait_online retry gap.
Fixed
Removed an artifact registry ping that would delay multi-user.target indefinitely for machines with no external IP address.
Fixed
Reverted a containerd change which reduced the default soft file descriptor limit for processes in containers to 1024.
Fixed
Reverted a containerd change which reduced the default soft file descriptor limit for processes in containers to 1024.
Fixed
Updated app-admin/node-problem-detector to 0.8.21.
Fixed
Updated app-containers/cni-plugins to 1.7.1.
Fixed
Updated app-containers/cri-tools to 1.32.0.
Fixed
Updated cos-gpu-installer to v2.5.10.
Fixed
Updated dev-python/requests to v2.32.4.
Fixed
Updated golang.org/x/crypto, golang.org/x/net, and
golang.org/x/oauth2 in kubelet and kubectl.
Fixed
Updated golang.org/x/oauth2, golang.org/x/net, golang.org/x/crypto, and github.com/golang-jwt/jwt/v5 in Docker.
Fixed
Updated kubelet and kubectl to v1.35.0.
Fixed
Updated net-misc/chrony to v4.8.
Fixed
Updated sys-libs/readline to v8.3.
Fixed
Updated app-admin/google-osconfig-agent to v20250522.00.
Fixed
Updated the dump capture kernel to v6.12.52.
Fixed
Updated toolbox container image tag to v20251002.
Fixed
Upgraded app-admin/fluent-bit to v4.2.2.
Fixed
Upgraded app-admin/node-problem-detector to v0.8.25.
Fixed
Upgraded app-admin/oslogin to v20260116.00.
Fixed
Upgraded app-admin/sosreport to v4.10.2.
Fixed
Upgraded app-admin/sudo to v1.9.17_p2.
Fixed
Upgraded app-benchmarks/microbenchmarks to v0.0.1-r21.
Fixed
Upgraded app-containers/cni-plugins to v1.9.0.
Fixed
Upgraded app-containers/docker-credential-gcr to v2.1.31
Fixed
Upgraded app-containers/docker-credential-helpers to v0.9.5.
Fixed
Upgraded app-crypt/mit-krb5 from version 1.20.1 to version 1.22.1.
Fixed
Upgraded app-emulation/cloud-init to v25.1.4.
Fixed
Upgraded app-shells/bash to v5.3.
Fixed
Upgraded chromeos-base/chromeos-common-script to v0.0.1-r668.
Fixed
Upgraded chromeos-base/chromeos-common-script to v0.0.1-r671.
Fixed
Upgraded chromeos-base/debugd-client to v0.0.1-r2737.
Fixed
Upgraded chromeos-base/google-breakpad to v2026.01.16.201758-r268.
Fixed
Upgraded chromeos-base/minijail to v18-r168.
Fixed
Upgraded chromeos-base/power_manager-client to v0.0.1-r2972.
Fixed
Upgraded chromeos-base/session_manager-client to v0.0.1-r2833.
Fixed
Upgraded chromeos-base/shill-client to v0.0.1-r4879.
Fixed
Upgraded dev-db/sqlite to v3.50.3.
Fixed
Upgraded dev-db/sqlite to v3.50.4.
Fixed
Upgraded dev-db/sqlite to v3.51.1.
Fixed
Upgraded dev-lang/go to v1.23.11.
Fixed
Upgraded dev-lang/go to v1.23.12.
Fixed
Upgraded dev-libs/expat to v2.7.3.
Fixed
Upgraded dev-libs/libxslt to version 1.1.43-r1.
Fixed
Upgraded dev-libs/nss to 3.117 and dev-libs/nspr to 4.37.
Fixed
Upgraded dev-libs/openssl to 3.5.1.
Fixed
Upgraded dev-python/coverage to v7.10.7.
Fixed
Upgraded google-guest-configs to v20260121.00.
Fixed
Upgraded net-dns/c-ares to v1.34.6.
Fixed
Upgraded net-libs/gnutls to v3.8.11.
Fixed
Upgraded net-libs/libtirpc to v1.3.7-r2.
Fixed
Upgraded net-misc/curl from 8.12.1 to 8.17.0.
Fixed
Upgraded net-misc/openssh to 10.0_p1.
Fixed
Upgraded net-misc/rsync to v3.4.1-r2.
Fixed
Upgraded net-misc/socat to v1.8.1.0-r1.
Fixed
Upgraded net-misc/wget to v1.25.0-r1.
Fixed
Upgraded net-nds/rpcbind to v1.2.8.
Fixed
Upgraded sys-apps/dmidecode to v3.7.
Fixed
Upgraded sys-apps/file to v5.46-r3.
Fixed
Upgraded sys-apps/gentoo-functions to v1.7.4.
Fixed
Upgraded sys-apps/hwdata to v0.400.
Fixed
Upgraded sys-apps/kmod to v34.2.
Fixed
Upgraded sys-apps/less to v692.
Fixed
Upgraded sys-apps/makedumpfile to v1.7.8.
Fixed
Upgraded sys-apps/nvme-cli from version 1.6-r1 to version 2.16, added package sys-libs/libnvme.
Fixed
Upgraded sys-apps/pv to v1.10.1.
Fixed
Upgraded sys-apps/pv to v1.10.2.
Fixed
Upgraded sys-apps/pv to v1.10.3.
Fixed
Upgraded sys-apps/pv to v1.9.34.
Fixed
Upgraded sys-apps/pv to v1.9.42.
Fixed
Upgraded sys-apps/pv to v1.9.44.
Fixed
Upgraded sys-auth/pambase to v20251104.
Fixed
Upgraded sys-libs/libcap to v2.77.
Fixed
Upgraded sys-libs/libseccomp to v2.6.0-r3.
Fixed
Upgraded sys-process/audit to 4.0.2-r1.
Fixed
Upgraded sys-process/lsof to v4.99.5.
Fixed
Upgraded sys-process/procps to v4.0.5-r3.
Fixed
Upgraded virtual/logger to v0-r2.
Fixed
upgraded net-fs/cifs-utils to v7.4.
Security
Added support for Nvidia driver version 535.261.03. This fixes CVE-2025-23286 and CVE-2025-23279.
Security
Added support for Nvidia driver version 570.172.08. This fixes CVE-2025-23279.
Security
Fixed CVE-2025-11081, CVE-2025-11082 and CVE-2025-11083 in sys-libs/binutils-libs.
Security
Fixed CVE-2025-11412 in binutils-libs.
Security
Fixed CVE-2025-11413 and CVE-2025-11414 in binutils-libs.
Security
Fixed CVE-2025-11494 in binutils-libs.
Security
Fixed CVE-2025-11495 in binutils-libs.
Security
Fixed CVE-2025-12084 in dev-lang/python.
Security
Fixed CVE-2025-13836 in dev-lang/python.
Security
Fixed CVE-2025-13837 in dev-lang/python.
Security
Fixed CVE-2025-31133, CVE-2025-52565, and CVE-2025-52881 in
app-containers/runc.
Security
Fixed CVE-2025-40147 in the Linux kernel.
Security
Fixed CVE-2025-40212 in the Linux kernel.
Security
Fixed CVE-2025-40256 in the Linux kernel.
Security
Fixed CVE-2025-47914 and CVE-2025-58181 in dev-go/crypto.
Security
Fixed CVE-2025-6052 in dev-libs/glib.
Security
Fixed CVE-2025-61727 in dev-lang/go.
Security
Fixed CVE-2025-61729 in dev-lang/go.
Security
Fixed CVE-2025-66471 and CVE-2025-66418 in dev-python/urllib3.
Security
Fixed CVE-2025-8058 in glibc.
Security
Fixed CVE-2026-21441 in dev-python/urllib3.
Security
Fixed KCTF-01d3c84 in the Linux kernel.
Security
Fixed KCTF-134121b in the Linux kernel.
Security
Fixed KCTF-2397e92 in the Linux kernel.
Security
Fixed KCTF-50da4b9 in the Linux kernel.
Security
Fixed KCTF-60e6489 in the Linux Kernel.
Security
Fixed KCTF-6bb73db in the Linux Kernel.
Security
Fixed KCTF-abad3d0 in the Linux kernel.
Security
Fixed KCTF-b441cf3 in the Linux kernel.
Security
Fixed KCTF-f41c5d1 in the Linux kernel.
Security
Fixed KCTF-f8db647 in the Linux kernel.
Security
Updated dev-libs/libxml2 to version 2.14.6. This resolves CVE-2025-6021.
Security
Updated dev-python/jinja to v3.1.6. This resolves
CVE-2024-56326, CVE-2024-56201 and CVE-2025-27516.
Security
Updated dev-python/urllib3 to v2.5.0. This resolves
CVE-2025-50181.
Security
Updated sys-apps/coreutils to v9.5. This resolves
CVE-2024-0684.
Security
Upgraded dev-libs/glib to 2.82.5. This resolves
CVE-2024-52533.
Security
Upgraded dev-vcs/git to version 2.49.1. This fixes CVE-2025-48385, CVE-2025-27613, CVE-2025-27614, CVE-2025-48384, CVE-2025-46835.
Security
Upgraded net-misc/netplan to 1.1.2. This fixes
CVE-2022-4968.
Security
Upgraded open-vm-tools to 13.0.5. This fixes CVE-2025-41244 in anthos variant.
Security
Upgraded sys-libs/binutils-libs to version 2.45. This fixes CVE-2025-8224,CVE-2025-8225 and CVE-2025-1153.
Security
Upgraded urllib3 to version 1.26.18. This fixes CVE-2021-33503, CVE-2023-43804, and CVE-2023-45803.
Security
Upgraded vim & vim-core to version 9.1.1652. This fixes
CVE-2025-53905, CVE-2025-53906, CVE-2025-9390.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
Dataproc
Announcement
New Serverless for Apache Spark runtime versions :
1.2.71
2.2.71
2.3.24
3.0.8
Gemini
Other
Bug fixes in VS Code
Various bug fixes and minor product enhancements.
Google Cloud VMware Engine
Announcement
The VMware Engine ve2 node type is now available in the following
additional region:
Paris, France, Europe ( europe-west9-b )
Google SecOps
Feature
New capabilities in Feeds page
The following options have been added to the Feeds page:
Search
Filtering (using feed attributes)
Pagination
Last Refreshed Time
Feed Metadata Export to CSV
Google SecOps SIEM
Feature
New capabilities in Feeds page
The following options have been added to the Feeds page:
Search
Filtering (using feed attributes)
Pagination
Last Refreshed Time
Feed Metadata Export to CSV
Vertex AI Workbench
Fixed
Fixed a vulnerability in Vertex AI Workbench for users utilizing
managed credentials.
February 19, 2026
Access Approval
Feature
Unified Maintenance is generally available (GA) .
Access Transparency
Feature
Unified Maintenance is generally available (GA) .
AlloyDB for PostgreSQL
Feature
AlloyDB now integrates with Database Center to provide prioritized health
monitoring in the Google Cloud console. This integration highlights critical
and high-priority risks, offering one-click navigation to recommended fixes and
system insights for quick resolution. For more information, see
Monitor the health of your AlloyDB clusters and instances .
App Engine flexible environment Go
Feature
Support for Go 1.26 runtime is in Preview .
App Engine standard environment Go
Feature
Support for Go 1.26 runtime is in Preview .
Cloud NGFW
Feature
Cloud NGFW now supports regional system firewall policies. Regional system
firewall policies are read-only policies that internal Google services, such as
Google Kubernetes Engine, use to secure their operations within a VPC network.
For more information, see Regional system firewall
policies .
This feature is available in General Availability .
Cloud Run
Feature
Support for Go 1.26 runtime is in Preview .
Cloud Run functions
Feature
Support for Go 1.26 runtime is in Preview .
Cloud SQL for PostgreSQL
Feature
Cloud SQL now provides brute-force detection and protection for your Cloud SQL
instances. This helps protect your instances from brute-force access attempts
by identifying the source and mitigating the risk caused by these attempts.
For more information, see
Use brute-force protection .
Cloud Workstations
Feature
You can configure Hyperdisk Balanced High Availability
for persistent directories directly in the Google Cloud console.
This option is available in the Disk type menu when you create or
update workstation configurations for supported machine series.
Additionally, C3 machine types
are available for selection in the Google Cloud console. For the
C3 machine series, which only supports Hyperdisk, the console automatically
selects Hyperdisk as the disk type.
Contact Center AI Insights
Feature
Customer Experience Insights offers autolabeling and correlation rules to enhance conversation processing.
Autolabeling rules : Automatically apply key-value labels to conversations based on defined conditions.
Correlation rules : Define how to link related conversation segments together to form complete customer interaction views.
Container Optimized OS
Change
cos-117-18613-534-2
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.123
v24.0.9
v1.7.29
See List
Announcement
This is an LTS Refresh release.
Feature
Added support for NVIDIA driver v535.288.01, v570.211.01 and v580.126.09.
Fixed
Upgraded app-containers/docker-credential-helpers to v0.9.4.
Fixed
Upgraded net-libs/libtirpc to v1.3.7.
Fixed
Upgraded sys-libs/libcap to v2.77.
Security
Fixed CVE-2025-22121 in the Linux kernel.
Security
Fixed CVE-2025-38232 in the Linux kernel.
Security
Fixed CVE-2025-68725 in the Linux kernel.
Security
Fixed CVE-2026-22998 in the Linux kernel.
Security
Fixed CVE-2026-22999 in the Linux kernel.
Security
Fixed CVE-2026-23001 in the Linux kernel.
Security
Fixed CVE-2026-23003 in the Linux kernel.
Security
Fixed CVE-2026-23005 in the Linux kernel.
Security
Fixed CVE-2026-23010 in the Linux kernel.
Security
Fixed CVE-2026-23011 in the Linux kernel.
Security
Fixed CVE-2026-23025 in the Linux kernel.
Security
Fixed CVE-2026-23038 in the Linux kernel.
Security
Fixed CVE-2026-23054 in the Linux kernel.
Security
Fixed CVE-2026-23069 in the Linux kernel.
Security
Fixed CVE-2026-23083 in the Linux kernel.
Security
Fixed CVE-2026-23085 in the Linux kernel.
Security
Fixed CVE-2026-23095 in the Linux kernel.
Security
Fixed CVE-2026-23097 in the Linux kernel.
Security
Fixed CVE-2026-23099 in the Linux kernel.
Security
Fixed CVE-2026-23103 in the Linux kernel.
Security
Fixed CVE-2026-23105 in the Linux kernel.
Security
Fixed CVE-2026-23107 in the Linux kernel.
Security
Fixed CVE-2026-23110 in the Linux kernel.
Security
Updated dev-libs/libxml2 to version 2.14.6. This resolves CVE-2025-6021.
Change
Runtime sysctl changes:
Changed: kernel.tainted: 4608 -> 4096
Change
cos-121-18867-294-134
Kernel
Docker
Containerd
GPU Drivers
COS-6.6.122
v27.5.1
v2.0.7
See List
Announcement
This is an LTS Refresh release.
Security
Fixed CVE-2024-57994 in the Linux kernel.
Security
Fixed CVE-2025-37920 in the Linux kernel.
Security
Fixed CVE-2025-38232 in the Linux kernel.
Security
Fixed CVE-2025-68725 in the Linux kernel.
Security
Fixed CVE-2026-22998 in the Linux kernel.
Security
Fixed CVE-2026-22999 in the Linux kernel.
Security
Fixed CVE-2026-23001 in the Linux kernel.
Security
Fixed CVE-2026-23003 in the Linux kernel.
Security
Fixed CVE-2026-23005 in the Linux kernel.
Security
Fixed CVE-2026-23010 in the Linux kernel.
Security
Fixed CVE-2026-23011 in the Linux kernel.
Security
Fixed CVE-2026-23038 in the Linux kernel.
Security
Fixed CVE-2026-23069 in the Linux kernel.
Security
Fixed CVE-2026-23083 in the Linux kernel.
Security
Fixed CVE-2026-23085 in the Linux kernel.
Security
Fixed CVE-2026-23095 in the Linux kernel.
Security
Fixed CVE-2026-23097 in the Linux kernel.
Security
Fixed CVE-2026-23099 in the Linux kernel.
Security
Fixed CVE-2026-23103 in the Linux kernel.
Security
Fixed CVE-2026-23105 in the Linux kernel.
Security
Fixed KCTF-f41c5d1 in the Linux kernel.
Security
Fixed KCTF-f8db647 in the Linux kernel.
Security
Updated dev-libs/libxml2 to version 2.14.6. This resolves CVE-2025-6021.
Change
Runtime sysctl changes:
Changed: kernel.tainted: 4608 -> 4096
Change
cos-125-19216-220-9
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Announcement
This is an LTS Refresh release.
Feature
Added CPU balloon support for Arm CPUs.
Feature
Added guest support for paravirtualization of cpuids on Arm machines.
Fixed
Upgraded app-containers/docker-registry-test to v2.8.3.
Fixed
Upgraded dev-libs/expat to v2.7.3.
Fixed
Upgraded google-guest-configs to v20260121.00.
Fixed
Upgraded net-libs/libtirpc to v1.3.7.
Fixed
Upgraded net-misc/socat to v1.8.1.0-r1.
Fixed
Upgraded net-nds/rpcbind to v1.2.8.
Fixed
Upgraded sys-apps/gentoo-functions to v1.7.4.
Fixed
Upgraded sys-auth/pambase to v20251104.
Fixed
Upgraded sys-libs/libcap to v2.77.
Security
Fixed KCTF-f8db647 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: kernel.tainted: 4608 -> 4096
Dataplex
Feature
When you create a data quality rule ,
you can now optionally include a
debug query
to run alongside the rule. A debug query is a SQL statement that returns up to
10 scalar values to help diagnose rule failures. This feature is available in
preview .
Dataproc
Announcement
Hyperdisks can now be added to a Dataproc cluster.
Gemini Enterprise
Feature
Gemini Enterprise: Use Gemini 3.1 Pro (Preview)
You can use Gemini 3.1 Pro in Preview with Gemini Enterprise.
This version replaces Gemini 3 Pro in Preview.
To make Gemini 3.1 Pro available to users in your Gemini Enterprise
app, a Gemini Enterprise admin must enable the
Gemini 3.1 Pro (Preview) toggle within the Model availability
feature control.
If an admin had previously enabled the Gemini 3 Pro (Preview)
toggle, then Gemini Enterprise enables the Gemini 3.1 Pro (Preview)
toggle by default too.
For more information about feature controls, see
Manage features on the web app .
Feature
Gemini Enterprise: Support for new actions (Public preview)
New actions are now available for these data stores:
Confluence Data Center
Jira Data Center
Notion
Zendesk
These actions are in Public Preview. For a list of actions for these data stores, see
Supported actions .
Feature
Gemini Enterprise: Chat with files in the Microsoft SharePoint connector
Gemini Enterprise can analyze content and generate answers from XLSX and
CSV files in the Microsoft SharePoint connector, eliminating the need to upload
these files to the assistant.
This feature is generally available (GA). For more information, see
Chat with files in connectors .
Generative AI on Vertex AI
Feature
Gemini 3.1 Pro Preview
Gemini 3.1 Pro
is available in preview in Model Garden. Gemini 3.1 Pro is
our most advanced reasoning Gemini model, capable of solving complex
problems from different information sources, including text, audio, images,
video, PDFs, and even entire code repositories with its 1M token context
window.
Google Distributed Cloud (software only) for VMware
Breaking
Upgrading to advanced clusters overwrites any existing cert-manager . For more
information, see Upgrade to cert-manager bundled with advanced clusters .
Google Kubernetes Engine
Change
(2026-R7) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for
manual control plane upgrades and node upgrades for existing clusters. For more
information about versioning and upgrades, see GKE versioning and
support and About GKE
cluster upgrades .
Rapid channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.0-gke.2745003 is now the default version for cluster creation in the Rapid channel.
The following versions are now available in the Rapid channel:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2745003
1.35.0-gke.3047000
The following versions are no longer available in the Rapid channel:
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
1.35.0-gke.2398000
1.35.0-gke.2745000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1264000
1.32 to 1.33.5-gke.2469000
1.33 to 1.34.3-gke.1444000
1.34 to 1.35.0-gke.2745003
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1264000
1.33 to 1.33.5-gke.2469000
1.34 to 1.34.3-gke.1444000
1.35 to 1.35.0-gke.2745003
Regular channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1245000 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
1.35.0-gke.2232003
1.35.0-gke.2398002
The following versions are no longer available in the Regular channel:
1.32.11-gke.1038000
1.33.5-gke.2228001
1.34.3-gke.1051003
1.35.0-gke.2232000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1174000
1.32 to 1.33.5-gke.2326000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1174000
1.33 to 1.33.5-gke.2326000
1.34 to 1.34.3-gke.1245000
1.35 to 1.35.0-gke.2232003
Stable channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.5-gke.2172001 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.33.5-gke.2228001
1.34.3-gke.1051003
The following versions are no longer available in the Stable channel:
1.32.9-gke.1734000
1.33.5-gke.2118001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1038000
1.32 to 1.33.5-gke.2172001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1038000
1.33 to 1.33.5-gke.2172001
1.34 to 1.34.3-gke.1051003
Extended channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1245000 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.1991000
1.30.14-gke.2071000
1.31.14-gke.1336000
1.31.14-gke.1423000
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
1.35.0-gke.2232003
1.35.0-gke.2398002
The following versions are no longer available in the Extended channel:
1.30.14-gke.1922000
1.30.14-gke.2026000
1.31.14-gke.1243000
1.31.14-gke.1376000
1.32.11-gke.1038000
1.33.5-gke.2228001
1.34.3-gke.1051003
1.35.0-gke.2232000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.29 to 1.30.14-gke.1973000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.30 to 1.30.14-gke.1973000
1.31 to 1.31.14-gke.1319000
1.32 to 1.32.11-gke.1174000
1.33 to 1.33.5-gke.2326000
1.34 to 1.34.3-gke.1245000
1.35 to 1.35.0-gke.2232003
No channel
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1245000 is now the default version for cluster creation.
The following versions are now available:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2232003
1.35.0-gke.2398002
1.35.0-gke.2745003
1.35.0-gke.3047000
The following node versions are now available:
1.30.14-gke.2071000
1.31.14-gke.1423000
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2232003
1.35.0-gke.2398002
1.35.0-gke.2745003
1.35.0-gke.3047000
The following versions are no longer available:
1.32.9-gke.1734000
1.33.5-gke.2100001
1.35.0-gke.2232000
1.35.0-gke.2745000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1174000
1.32 to 1.33.5-gke.2172001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1174000
1.33 to 1.33.5-gke.2172001
1.34 to 1.34.3-gke.1245000
1.35 to 1.35.0-gke.2232003
Security
(2026-R7) Security updates
This release includes new GKE versions that use updated
Container-Optimized OS images. These updated images are cumulative,
incorporating security fixes from all Container-Optimized OS
versions released since the previous GKE release.
To identify the specific vulnerabilities that were resolved in each updated
Container-Optimized OS image, see the Security release notes
for that image. The following table includes links to the release notes for
each updated Container-Optimized OS image:
GKE version
Container-Optimized OS version
Details
1.30.14-gke.2071000
cos-113-18244-582-2
cos-113-18244-582-2 release notes
1.31.14-gke.1423000
cos-117-18613-439-120
cos-117-18613-439-120 release notes
Change
(2026-R7) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.33.5-gke.2172001 is now the default version for cluster creation in the Stable channel.
The following versions are now available in the Stable channel:
1.33.5-gke.2228001
1.34.3-gke.1051003
The following versions are no longer available in the Stable channel:
1.32.9-gke.1734000
1.33.5-gke.2118001
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1038000
1.32 to 1.33.5-gke.2172001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1038000
1.33 to 1.33.5-gke.2172001
1.34 to 1.34.3-gke.1051003
Change
(2026-R7) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1245000 is now the default version for cluster creation in the Regular channel.
The following versions are now available in the Regular channel:
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
1.35.0-gke.2232003
1.35.0-gke.2398002
The following versions are no longer available in the Regular channel:
1.32.11-gke.1038000
1.33.5-gke.2228001
1.34.3-gke.1051003
1.35.0-gke.2232000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1174000
1.32 to 1.33.5-gke.2326000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1174000
1.33 to 1.33.5-gke.2326000
1.34 to 1.34.3-gke.1245000
1.35 to 1.35.0-gke.2232003
Change
(2026-R7) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.35.0-gke.2745003 is now the default version for cluster creation in the Rapid channel.
The following versions are now available in the Rapid channel:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2745003
1.35.0-gke.3047000
The following versions are no longer available in the Rapid channel:
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
1.35.0-gke.2398000
1.35.0-gke.2745000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1264000
1.32 to 1.33.5-gke.2469000
1.33 to 1.34.3-gke.1444000
1.34 to 1.35.0-gke.2745003
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1264000
1.33 to 1.33.5-gke.2469000
1.34 to 1.34.3-gke.1444000
1.35 to 1.35.0-gke.2745003
Change
(2026-R7) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1245000 is now the default version for cluster creation.
The following versions are now available:
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2232003
1.35.0-gke.2398002
1.35.0-gke.2745003
1.35.0-gke.3047000
The following node versions are now available:
1.30.14-gke.2071000
1.31.14-gke.1423000
1.32.12-gke.1026000
1.33.8-gke.1026000
1.34.4-gke.1047000
1.35.0-gke.2232003
1.35.0-gke.2398002
1.35.0-gke.2745003
1.35.0-gke.3047000
The following versions are no longer available:
1.32.9-gke.1734000
1.33.5-gke.2100001
1.35.0-gke.2232000
1.35.0-gke.2745000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.31 to 1.32.11-gke.1174000
1.32 to 1.33.5-gke.2172001
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.32 to 1.32.11-gke.1174000
1.33 to 1.33.5-gke.2172001
1.34 to 1.34.3-gke.1245000
1.35 to 1.35.0-gke.2232003
Change
(2026-R7) Version updates
Note : Your clusters might not have these versions available.
Rollouts are already in progress when we publish the release notes, and can take
multiple days to complete across all Google Cloud zones.
Version 1.34.3-gke.1245000 is now the default version for cluster creation in the Extended channel.
The following versions are now available in the Extended channel:
1.30.14-gke.1991000
1.30.14-gke.2071000
1.31.14-gke.1336000
1.31.14-gke.1423000
1.32.11-gke.1211000
1.33.5-gke.2392000
1.34.3-gke.1318000
1.35.0-gke.2232003
1.35.0-gke.2398002
The following versions are no longer available in the Extended channel:
1.30.14-gke.1922000
1.30.14-gke.2026000
1.31.14-gke.1243000
1.31.14-gke.1376000
1.32.11-gke.1038000
1.33.5-gke.2228001
1.34.3-gke.1051003
1.35.0-gke.2232000
Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:
GKE upgrades clusters to the following new minor versions if there are no factors, such as maintenance exclusions or deprecated APIs, preventing upgrades:
1.29 to 1.30.14-gke.1973000
GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:
1.30 to 1.30.14-gke.1973000
1.31 to 1.31.14-gke.1319000
1.32 to 1.32.11-gke.1174000
1.33 to 1.33.5-gke.2326000
1.34 to 1.34.3-gke.1245000
1.35 to 1.35.0-gke.2232003
Network Connectivity Center
Feature
Producer VPC spokes support for
Google Cloud NetApp Volumes
is generally available .
Network Intelligence Center
Feature
Connectivity Tests
identifies the following routes as invalid: peering dynamic routes and
Network Connectivity
Center dynamic routes that are dropped due to
network- or
hub-level quotas.
Oracle Database@Google Cloud
Feature
For Autonomous Database Service, Oracle Database@Google Cloud supports the asia-south2 (Delhi, India) region.
For a list of supported locations, see Supported regions and zones .
February 18, 2026
App Engine flexible environment .NET
Feature
Support for .NET 10 runtime is in General Availability .
Bigtable
Announcement
New best practices are available for securing generative AI agents using Model
Context Protocol (MCP) with Google Cloud databases. This guide covers key
security measures like least privilege, native database controls, and secure
agent design to help you build safer AI applications. For more information, see
Best practices for securing agent interactions with Model Context Protocol .
Feature
You can migrate a machine learning feature management workload from Vertex AI
Feature Store (Legacy) to a Bigtable instance. For more information, see
Migrate from Vertex AI Feature Store (Legacy) to
Bigtable .
Cloud Run
Feature
Support for .NET 10 runtime is in General Availability .
Cloud Run functions
Feature
Support for .NET 10 runtime is in General Availability .
Cloud SQL for MySQL
Change
After March 17, 2026, when you enable the Cloud SQL Admin API
( sqladmin.googleapis.com ), the Cloud SQL remote MCP server is
enabled automatically.
The Cloud SQL remote MCP server is in Preview .
Deprecated
Control of MCP use with organization policies is deprecated.
After March 17, 2026, organization policies that use the
gcp.managed.allowedMCPServices constraint won't work,
and you can control MCP use with IAM deny policies.
For more information about controlling MCP use, see
Control MCP use with IAM .
Cloud SQL for PostgreSQL
Change
After March 17, 2026, when you enable the Cloud SQL Admin API
( sqladmin.googleapis.com )`, the Cloud SQL remote MCP server is
enabled automatically.
The Cloud SQL remote MCP server is in Preview .
Deprecated
Control of MCP use with organization policies is deprecated.
After March 17, 2026, organization policies that use the
gcp.managed.allowedMCPServices constraint won't work,
and you can control MCP use with IAM deny policies.
For more information about controlling MCP use, see
Control MCP use with IAM .
Cloud SQL for SQL Server
Change
After March 17, 2026, when you enable the Cloud SQL Admin API
( sqladmin.googleapis.com ), the Cloud SQL remote MCP server is
enabled automatically.
The Cloud SQL remote MCP server is in Preview .
Deprecated
Control of MCP use with organization policies is deprecated.
After March 17, 2026, organization policies that use the
gcp.managed.allowedMCPServices constraint won't work,
and you can control MCP use with IAM deny policies.
For more information about controlling MCP use, see
Control MCP use with IAM .
Cloud Service Mesh
Announcement
CNI and managed data plane controller version 1.23.6-asm.28 is rolling out to all
release channels.
While the managed data plane automatically updates Envoy Proxies by restarting
workloads, you must manually restart any StatefulSets and Jobs.
This patch includes the fix for the following CVEs:
Name
CNI
MDPC
Severity
CVE-2017-11164
Yes
Yes
High (7.5)
CVE-2022-27943
Yes
Yes
Medium (5.5)
CVE-2022-41409
Yes
Yes
High (7.5)
CVE-2022-4899
Yes
Yes
High (7.5)
CVE-2023-29383
Yes
Yes
Low (3.3)
CVE-2023-34969
Yes
Yes
Medium (6.5)
CVE-2023-50495
Yes
Yes
Medium (6.5)
CVE-2023-7008
Yes
Yes
Medium (5.9)
CVE-2024-41996
Yes
Yes
High (7.5)
CVE-2025-8114
Yes
Yes
Medium (4.7)
CVE-2025-9086
Yes
Yes
High (7.5)
Cloud Workstations
Feature
Clicking Launch for a workstation in the Google Cloud console opens a page
that automatically starts the workstation and connects to it. You can bookmark
this page to restart and access your workstation. To start a workstation
without connecting, select Start in the Launch drop-down menu.
Compute Engine
Feature
Generally available : You can use Hyperdisk Exapools for large-scale
workloads, such as AI and machine learning, that require between 500 TiB and 5
EiB of block storage and more than 100 GiB/s of concurrent performance in a
single zone. With Hyperdisk Exapools, you purchase storage and performance in bulk
and share those resources across as many as 500,000 disks in a single project.
To use Hyperdisk Exapools with your projects, contact your account team
to get access.
To learn more about Hyperdisk Exapools, see
Hyperdisk Exapools overview .
Google Cloud Armor
Change
Cloud Armor preconfigured WAF rules support for
inspection up to the first 64 kB (either 8 kB, 16 kB, 32 kB,
48 kB, or 64 kB) of the request body
content is Generally
Available.
Google Kubernetes Engine
Security
Multiple security vulnerabilities have been identified in the OpenSSL library.
The most significant finding is CVE-2025-15467, a critical vulnerability that
might allow for remote code execution (RCE) or denial of service (DoS) attacks
via network-based vectors.
For more information, see the
GCP-2026-006 security bulletin .
Google SecOps Marketplace
Feature
New Proofpoint Threat Protection integration
Change
Cofense Triage : Version 17.0
Optimized the report processing in the following connector:
Cofense Triage - Reports Connector
Change
Qualys VM : Version 21.0
Integration : Added the ability to configure the X-Requested-With header.
Change
QRadar : Version 63.0
Updated the logic for offense processing in the following connectors:
Qradar Correlation Events Connector V2
Qradar Offenses Connector
Change
Palo Alto Cortex XDR : Version 23.0
Added the ability to provide agents using input parameters in the following
actions:
Scan Endpoint
Isolate Endpoint
Unisolate Endpoint
Change
Google Chronicle : Version 76.0
Restored the previous JSON result structure for empty result sets in the
following action:
Execute UDM Query
Change
Exchange : Version 119.0
Updated the handling of S/MIME emails sent on MacOS in the following
connectors:
Exchange - Mail Connector v2 with OAuth Authentication
Exchange - Mail Connector v2
Change
CrowdStrike Falcon : Version 70.0
Deprecated the following actions:
Add Incident Comment
Update Incident
Add Comment to Detection
Close Detection
Update Detection
Deprecated the following connectors:
CrowdStrike - Detections Connector
Crowdstrike - Incidents Connector
Network Intelligence Center
Feature
Cloud Network Insights
is available in Preview .
Cloud Network Insights monitors your network and web application performance across
multicloud and hybrid networks and provides visualization
tools to help identify and diagnose network issues.
Contact your Technical Account Manager to request access.
SAP on Google Cloud
Announcement
New SAP HANA certifications for OLAP and OLTP workloads
For use with SAP HANA, SAP has certified the following:
You can use the m3-ultramem-128 , m4-hypermem-64 , x4-480-6t-metal ,
x4-480-8t-metal , and x4-960-12t-metal machine types to run OLAP
workloads in scale-out configurations with up to 8 nodes.
You can use the x4-480-8t-metal and x4-960-12t-metal machine types to run
OLTP workloads in scale-out configurations with up to 4 nodes.
For more information, see
Certified Compute Engine machine types for SAP HANA .
Vertex AI Agent Builder
Announcement
Vertex AI Agent Builder
Vertex AI Agent Engine Code Execution
is now Generally Available .
February 17, 2026
AlloyDB for PostgreSQL
Feature
AlloyDB performance snapshot and reports now support read pool instance nodes, providing deeper observability into read operations and replica-specific performance issues.
Announcement
New best practices are available for securing generative AI agents using Model
Context Protocol (MCP) with Google Cloud databases. This guide covers key
security measures like least privilege, native database controls, and secure
agent design to help you build safer AI applications. For more information, see
Best practices for securing agent interactions with Model Context Protocol .
Feature
You can now make AI function calls in bulk rather than row-by-row, which lets you
scale your intelligent workflows faster with new support for array-based
processing. For more information, see
Perform intelligent SQL queries using AI functions .
This feature is in Preview .
Feature
You can now use the AlloyDB remote MCP server .
The AlloyDB remote MCP server lets you interact easily with AlloyDB clusters
from LLMs, AI applications, and AI-enabled development platforms.
This feature is in Preview .
BigQuery
Feature
You can now run global queries , which let you
reference data stored in more than one region in a single query. This feature is
in Preview .
Change
After March 17, 2026, when you enable BigQuery, the BigQuery MCP server is
automatically enabled.
Deprecated
Control of MCP use with organization policies is deprecated. After
March 17, 2026, organization policies that use the
gcp.managed.allowedMCPServices constraint won't work, and you can control
MCP use with IAM deny policies. For more information about controlling MCP use,
see Control MCP use with IAM deny policies .
Bigtable
Feature
You can use the Bigtable Admin API MCP server
to enable agents and AI applications to perform a range of data-related tasks.
This feature is in Preview .
Buildpacks
Feature
Cloud Run source deployment supports Ubuntu 24
LTS base images in General Availability . This builder is available under
gcr.io/buildpacks/builder:google-24 . For more information, see
Builders .
Cloud Run
Feature
Cloud Run source deployment supports Ubuntu 24
LTS base images in General Availability . This builder is available under
gcr.io/buildpacks/builder:google-24 . For more information, see
Builders .
Cloud SQL for MySQL
Announcement
New best practices are available for securing generative AI agents using
Model Context Protocol (MCP) with Google Cloud databases. This guide covers
key security measures like least privilege, native database controls, and
secure agent design to help you build safer AI applications.
For more information, see Best practices for securing agent interactions with Model Context Protocol .
Cloud SQL for PostgreSQL
Announcement
New best practices are available for securing generative AI agents using
Model Context Protocol (MCP) with Google Cloud databases. This guide covers
key security measures like least privilege, native database controls, and
secure agent design to help you build safer AI applications.
For more information, see Best practices for securing agent interactions with Model Context Protocol .
Cloud SQL for SQL Server
Announcement
New best practices are available for securing generative AI agents using
Model Context Protocol (MCP) with Google Cloud databases. This guide covers
key security measures like least privilege, native database controls, and
secure agent design to help you build safer AI applications.
For more information, see Best practices for securing agent interactions with Model Context Protocol .
Cloud Trace
Deprecated
Starting February 18, 2026,
trace sinks are deprecated.
For more information, see
Export trace spans with sinks deprecation .
You can use the Observability Analytics page, which provides a SQL query
interface, to query both your trace and log data. To learn more, see the
following documents:
To migrate to using Observability Analytics page from a sink-based
export of trace data to BigQuery, see
Migrate to Observability Analytics .
To query your trace data by using the Observability Analytics page, see
Query and analyze traces .
To query your trace data by using BigQuery services, see
Query a linked BigQuery dataset .
Compute Engine
Deprecated
Control of MCP use with organization policies is deprecated. After March 17, 2026,
organization policies that use the gcp.managed.allowedMCPServices constraint
won't work, and you can control MCP use with IAM deny policies.
For more information about controlling MCP use, see Control MCP use with IAM .
Change
After March 17, 2026, when you enable Compute Engine,
the Compute Engine MCP server is automatically enabled.
Document AI
Deprecated
Document AI legacy processors will be discontinued on June 30, 2026 . To preempt
the risk of service failure while using legacy processors, we recommend transitioning to
more stable, higher-quality processors.
The affected versions are:
Type
Version
Identity
parsers
pretrained-us-passport-v1.0-2021-06-14
pretrained-fr-driver-license-v1.0-2021-06-14
Tax and
finance
parsers
pretrained-1099misc-v1.1-2021-12-10
pretrained-1099nec-v1.0-2021-08-11
pretrained-1099r-v2.0-2022-07-25
pretrained-1099int-v1.1-2021-12-10
pretrained-ssa1099-v1.0-2021-08-09
pretrained-1099g-v1.0-2021-05-27
pretrained-1099g-v1.1-2021-12-10
pretrained-1120-v3.0-2022-04-26
pretrained-w9-v1.0-2020-09-25
pretrained-w9-v1.1-2021-12-10
pretrained-w9-v1.2-2022-01-27
pretrained-w9-v2.0-2022-06-23
Mortage and
banking
parsers
pretrained-mortgage-statement-v1.0-2021-10-17
Procurement
pretrained-utility-v1.1-2021-04-09
pretrained-utility-v1.2-2022-12-15
Splitting
pretrained-procurement-splitter-v1.1-2021-04-09
pretrained-procurement-splitter-v1.2-2022-08-19
pretrained-lending-document-split-v1.0-2021-12-08
pretrained-lending-document-split-v2.0-2021-12-09
Summary
pretrained-foundation-model-v1.0-2023-08-22
To ensure uninterrupted service and benefit from improved extraction quality,
we recommend you migrate to the following later versions before June 30, 2026 :
Enterprise Document OCR: Migrate to pretrained-ocr-v2.1-2024-08-07 .
Expense parser: Migrate to pretrained-expense-v1.3.2-2024-09-11 .
Custom classifier: Migrate to pretrained-classifier-v1.5-2025-08-05 .
Custom splitter: Migrate to pretrained-splitter-v1.5-2025-07-14 .
Invoice parser: Migrate to pretrained-invoice-v2.0-2023-12-06 .
Pay slip parser: Migrate to pretrained-paystub-v3.0-2023-12-06 .
Bank statement parser: Migrate to pretrained-bankstatement-v5.0-2023-12-06 .
To learn more about the migration process, refer to Manage processor versions .
If you have any questions or require assistance, contact us at Google Cloud support .
Firestore
Change
After March 17, 2026, when you enable Firestore, the Firestore
MCP server is automatically enabled.
Deprecated
Control of MCP use with organization policies is deprecated. After March 17,
2026, organization policies that use the gcp.managed.allowedMCPServices
constraint won't work, and you can control MCP use with IAM deny policies. For
more information about controlling MCP use, see
Control MCP use with IAM .
Announcement
New best practices are available for securing generative AI agents using Model Context Protocol (MCP) with Google Cloud databases. This guide covers key security measures like least privilege, native database controls, and secure agent design to help you build safer AI applications. For more information, see Best practices for securing agent interactions with Model Context Protocol .
Generative AI on Vertex AI
Feature
Anthropic's Claude Sonnet 4.6
Claude Sonnet 4.6
is available in Model Garden.
Deprecated
Image generation preview endpoints deprecation
The following table describes image generation endpoints that are deprecated and
their replacements. We recommend updating your model endpoints before March 19,
2026, to avoid service disruption.
Discontinued endpoints
Recommended endpoint migration
gemini-2.0-flash-image-generation-preview
gemini-2.5-flash-image
gemini-2.5-flash-image-generation-preview
imagen-4.0-generate-001 or gemini-2.5-flash-image
imagen-4.0-generate-preview-05-20
imagen-4.0-generate-001 or gemini-2.5-flash-image
imagen-4.0-generate-preview-06-06
imagen-4.0-generate-001 or gemini-2.5-flash-image
imagen-4.0-ultra-generate-preview-06-06
imagen-4.0-generate-001 or gemini-2.5-flash-image
imagen-4.0-fast-generate-preview-05-20
imagen-4.0-generate-001 or gemini-2.5-flash-image
imagen-product-recontext-preview-06-30
gemini-2.5-flash-image
imagen-2.0-edit-preview-0627
gemini-2.5-flash-image
virtual-try-on-preview-08-04
virtual-try-on-001
imagen-4.0-ingredients-preview
gemini-2.5-flash-image
Google Cloud Contact Center as a Service
Announcement
Google Cloud CCaaS 4.0
We've released version 4.0 of Google Cloud CCaaS.
The timing of the update to your instance depends on the deployment schedule
that you have chosen. For more information, see Deployment
schedules .
Feature
Salesforce Service Cloud: new secondary lookup object
The Salesforce Service Cloud integration can now use a secondary lookup object
to identify customer records when the primary lookup object returns no results.
This helps prevent the creation of duplicate records.
Administrators: When you click Settings > Developer Settings
> CRM > Salesforce > SFDC Cloud Selection
> Service Cloud , a new Secondary Lookup Object checkbox appears
in the Account Lookup section.
For more information, see Configure account lookup and field
mapping .
Feature
Raw data export: new call_participants data type
We've added the call_participants data type to raw data export. This data type
helps you track the following escalation details for wait-time virtual agents:
The amount of time the wait-time virtual agent spent in queue.
The number of events sent to the wait-time virtual agent while it was in
queue.
For more information, see Raw data export
dictionary .
Fixed
The following issues were addressed in this release:
Fixed the following issues with the standard (non-advanced reporting)
dashboards:
The Dashboard > Queue Reports dashboard had broken table
headers.
The Dashboard > Call dashboard was missing metrics labels
in the LOGGED IN AGENT tile.
Fixed an issue where calls were mistakenly saved in MP3 format rather than
WAV format in external storage.
Fixed an issue that occurred after an agent put an end-user on hold,
transferred the call to another agent, and then left the call. When the
remaining agent took the end-user off hold, the agent and the end-user
couldn't hear each other.
Fixed an issue with NICE WFM export where queue abandoned calls were
inaccurately reported to the WFM system.
Fixed an issue where the Assign Human Agents page for queues appeared
blank, preventing administrators from viewing or managing agent assignments.
Fixed an issue where an email with a message ID longer than 255 characters
failed to process and blocked the processing of other emails.
Fixed an issue where agents in the In-email status didn't receive
incoming calls or chats.
Fixed an issue where CSAT ratings were missing from metadata files and raw
data exports.
Fixed an issue where Salesforce integrations incorrectly created duplicate
cases for a single outbound call.
Fixed an issue where unsupported settings, such as Cascade Conditions
and Wrap-up settings , mistakenly appeared in the queue menu settings for
Apple Messages for Business queues.
Fixed an issue where attempting to barge into a chat while monitoring it
returned a You are already in Chat error instead of completing the action.
Fixed an agent desktop issue where the New photo received banner
reappeared after viewing a photo and switching between active chat tabs.
Fixed an issue where Direct Access Points failed to route calls correctly
for SIP URIs with spaces or non-standard formats.
Fixed an issue where an agent's personal contact name was mistakenly
displayed as the caller ID to other agents when they received a call from
the agent.
Fixed an issue where agents appeared as Available in the Agent Activity
Timeline report after signing out.
Fixed an issue where Salesforce integrations created duplicate cases for a
single outbound call.
Google Kubernetes Engine
Change
After March 17, 2026, when you enable GKE, the GKE
MCP server is automatically enabled.
Deprecated
Control of MCP use with organization policies is deprecated. After March 17,
2026, organization policies that use the gcp.managed.allowedMCPServices
constraint won't work, and you can control MCP use with IAM deny policies. For
more information about controlling MCP use, see
Control MCP use with IAM .
Google SecOps
Deprecated
Control of MCP use with organization policies is deprecated. After March 17, 2026, organization policies that use the gcp.managed.allowedMCPServices constraint won't work, and you can control MCP use with IAM deny policies. For more information about controlling MCP use, see Control MCP use with IAM .
Change
After March 17, 2026, when you enable Google SecOps, the Google SecOps MCP server is automatically enabled.
Looker
Announcement
The following features will roll out over a four-day period starting February 17, 2026.
Feature
Looker admins can grant the new schedule_without_limit permission to restrict a user's ability to deliver all data results from a Look or an Explore . This permission must be combined with another Looker permission that permits delivering data.
This permission will be automatically granted to any existing roles that already contain a data delivery permission. Looker admins must remove this permission from any users whom they wish to prevent from delivering all results from a Look or an Explore.
Note: This item was added on February 19, 2026.
Feature
The content certification feature, already available in preview, includes the following updates:
The Settings page in the General section of the Admin panel now includes options that let admins enable or disable content certification, set a custom URL for the certification process, and control whether certification is revoked when content is edited.
LookML dashboards can now be certified.
Looks and dashboards that are based on uncertified self-service Explores now display the "ungoverned" badge.
Searching for content now includes the ability to sort content based on its certification status. ( Note : This capability is not yet available. This item was modified on February 26, 2026.)
Feature
Now available in preview, the Self-service Explores feature supports uploading data from Google Sheets . To support uploading data from Google Sheets, your Looker admin must enable the required APIs in the Google Cloud project that houses your BigQuery database.
Feature
Now available in preview, LookML developers can unlock their Git branch in cases where their Git branch is locked as a result of another Git operation in progress or a previous Git operation failing. When the Git repository is locked, Looker displays the Unlock Branch option in the Git Actions panel of the Looker IDE. In addition, if a LookML developer tries to commit a change on a locked Git branch, Looker displays a warning in the Commit dialog, along with an option to delete the Git lock. See the Using version control and deploying documentation page for details.
Note: This item was added on February 18, 2026.
Feature
Now available in preview, the In-database merge queries feature is supported for merging results of two queries that are on the same BigQuery connection. Previously, the join for merging results was always performed in Looker memory, which limited each query to 5,000 rows that could be calculated in the join. If your Looker admin has enabled the In-database merge queries Looker Labs feature , the join between two queries that are on the same BigQuery connection is performed in the BigQuery database itself. Performing the join in the database is more performant and allows for unlimited rows that can be joined.
Feature
Now available in preview, the Self-service Explores feature supports updating the data for a self-service Explore. The owner of a self-service Explore can update it with data from the latest version of the file that was used to create the self-service Explore. See the Creating self-service Explores documentation page for more information.
Feature
Now available in preview, dashboard editors can change the size and layout of dashboard tiles with more granularity. To enable this feature, a Looker admin must turn on the Granular Dashboard Sizing Labs feature .
Feature
Now available in preview, the Embed Conversational Analytics Labs feature is now available. When enabled, the Embed Conversational Analytics Labs feature lets you embed Conversational Analytics conversations and agents in an iframe like other Looker content types.
Feature
Now available in preview, dashboard editors can set default options for how the download of a dashboard tile includes query results . They can set the download to include by default all query results or the current result table that is displayed in the visualization, or set a custom number of rows and columns. To enable this feature, a Looker admin must turn on the Tile Download Default Options Labs feature .
Feature
The System Activity User Activity dashboard has been updated to improve authentication troubleshooting. New information includes recent login failures, the authentication method that was used, the error message that was returned, and the time of the attempt.
Spanner
Deprecated
Control of MCP use with organization policies is deprecated.
After March 17, 2026, organization policies that use the
gcp.managed.allowedMCPServices constraint won't work, and
you can control MCP use with IAM deny policies.
For more information about controlling MCP use, see
Control MCP use with IAM .
Change
After March 17, 2026, when you enable Spanner, the
Spanner MCP server is automatically enabled.
Announcement
New best practices are available for securing generative AI agents using
Model Context Protocol (MCP) with Google Cloud databases. This guide covers
key security measures like least privilege, native database controls, and secure
agent design to help you build safer AI applications. For more information, see
Best practices for securing agent interactions with Model Context Protocol .
This feature is in Preview .
VPC Service Controls
Feature
Preview stage support for the following integration:
Vector Search 2.0
Vertex AI
Deprecated
Vertex AI Feature Store Optimized online serving is deprecated. For details, see Vertex AI deprecations .
Deprecated
Vertex AI Feature Store (Legacy/V1) is deprecated. For details, see Vertex AI deprecations .
Vertex AI Search
Feature
Vertex AI Search: Gemini 3 Pro for answer generation (Preview)
You can generate answers with the Gemini 3 Pro model.
For more information, see Answer generation model versions and
lifecycle and Gemini
3 Pro .
Workflows
Change
Workflows is available in the following additional region : asia-southeast3 (Bangkok, Thailand).
February 16, 2026
Cloud Composer
Feature
Environment snapshots
are available in environments with Airflow 3 (Preview). This change is now
rolled out to all regions supported by Cloud Composer 3.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.0-build.9
composer-3-airflow-2.10.5-build.26 (default)
composer-3-airflow-2.9.3-build.46
Change
New images
are available in Cloud Composer 2:
composer-2.16.4-airflow-2.10.5 (default)
composer-2.16.4-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.15 and composer-2.11.2-*.
Document AI
Feature
The layout parser web interface is in
Preview .
It supports a document view display for processed PDF files and supports
visualizing the document's parsed JSON, block layout, and
image or table annotation data in a user-friendly interface. Bounding box support
only exists for version processor pretrained-layout-parser-v1.0-2024-06-03 .
It also supports modifying the input layout config to allow
for configuring the table and image annotation feature directly from the interface.
February 15, 2026
Carbon Footprint
Feature
Methodology update : Starting with January 2026 data, we have updated our
calculation model to align with the comprehensive AI energy/emissions framework
detailed in
Measuring the environmental impact of delivering AI at Google Scale .
This update allocates previously unallocated AI inference model emissions to the
associated Google Cloud services, following the SKU-level allocation described
in the
Carbon Footprint reporting methodology . This change is part of our ongoing effort to provide more accurate and
transparent emissions data for AI inference.
Impact : Customers will see an increase in reported emissions for services
that utilize AI model inference across all SKUs. Such an increase is spread
across all SKUs within those services, based on the SKU-level allocation
methodology .
The primary impact is on Vertex AI. Other impacted services include Video
Stitcher API, Notebooks, Cloud Natural Language, Cloud Speech API, Cloud
Document AI API, Cloud Dialogflow API, Cloud Machine Learning Engine, Cloud
Text-to-Speech API and Cloud Vision API.
Dataproc
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.159-debian10, 2.0.159-rocky8, 2.0.159-ubuntu18
2.1.108-debian11, 2.1.108-rocky8, 2.1.108-ubuntu20, 2.1.108-ubuntu20-arm
2.2.76-debian12, 2.2.76-rocky9, 2.2.76-ubuntu22, 2.2.76-ubuntu22-arm
2.3.23-debian12, 2.3.23-ml-ubuntu22, 2.3.23-rocky9, 2.3.23-ubuntu22, 2.3.23-ubuntu22-arm
Google SecOps SOAR
Announcement
Release 6.3.76 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
Resource Manager
Deprecated
Control of MCP use with organization policies is deprecated. After March 17, 2026, organization policies that use the gcp.managed.allowedMCPServices constraint won't work, and you can control MCP use with IAM deny policies. For more information about controlling MCP use, see Control MCP use with IAM .
Change
After March 17, 2026, when you enable Resource Manager, the Resource Manager MCP server is automatically enabled.
February 14, 2026
Google SecOps SOAR
Announcement
Release 6.3.75 is now available for all regions.
February 13, 2026
Apigee UI
Announcement
On February 13, 2026, we released an updated version of the Apigee UI.
Change
Updated the route for Operations Anomalies from apigee/analytics/operations-anomalies to apigee/aapi-ops/operations-anomalies .
Apigee X
Announcement
On February 13, 2026, we published a security bulletin for Apigee.
Security
A vulnerability was identified in the Apigee platform ( CVE-2025-13292 ) that could have allowed a malicious actor with administrative or developer-level permissions in their own Apigee environment to elevate privileges and access cross-tenant data.
Security bulletin published: GCP-2026-010
Bigtable
Breaking
You can use the Flink Bigtable connector
version 0.3.2 to connect to Bigtable from Apache Flink version 2.1.0.
Additionally, this version of the connector lets you specify the number of
mutations to include in each batch sent to Bigtable. This feature is
generally available (GA) .
Dataproc
Announcement
New Serverless for Apache Spark runtime versions :
1.2.70
2.2.70
2.3.23
3.0.7
Gemini
Other
Bug fixes in VS Code
Various bug fixes and minor product enhancements.
Google Cloud Armor
Security
Security fixes and enhancements to Cloud Armor preconfigured WAF v33-canary
rulesets. For more information, see Tuning Google Cloud Armor WAF
rules .
The following rulesets have been updated:
sqli-v33-canary
xss-v33-canary
lfi-v33-canary
rfi-v33-canary
rce-v33-canary
methodenforcement-v33-canary
scannerdetection-v33-canary
protocolattack-v33-canary
php-v33-canary
sessionfixation-v33-canary
java-v33-canary
nodejs-v33-canary
Google Cloud VMware Engine
Announcement
The VMware Engine ve2 node type is now available in the following
additional region:
Osaka, Japan, Asia Pacific ( asia-northeast2 )
Google Distributed Cloud (software only) for VMware
Feature
The following feature was added in 1.34.100-gke.93:
You can deploy vsphere-csi-controller in the advanced cluster on the user
cluster control plane nodes.
Announcement
Google Distributed Cloud (software only) for VMware 1.34.100-gke.93 is now available
for download. To upgrade, see Upgrade a cluster.
Important: There is a mandatory flag for admin cluster upgrades; see the updated entry for March 20, 2026 .
Google Distributed Cloud 1.34.100-gke.93 runs on Kubernetes v1.34.1-gke.4700.
If you are using a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release.
After a release, it takes approximately 7 to 14 days for the version to become
available for use with GKE On-Prem API clients: the Google Cloud console, the
gcloud CLI, and Terraform.
Google Distributed Cloud (software only) for bare metal
Announcement
Google Distributed Cloud (software only) for bare metal 1.34.100-gke.93 is now available for
download. To upgrade, see Upgrade clusters. Google Distributed Cloud for bare metal
1.34.100-gke.93 runs on Kubernetes v1.34.1-gke.4700.
After a release, it takes approximately 7 to 14 days for the version to become
available for installations or upgrades with the GKE On-Prem API clients: the
Google Cloud console, the gcloud CLI, and Terraform.
If you use a third-party storage vendor, check the Google Distributed Cloud-ready
storage partners document to make sure the storage vendor has already passed the
qualification for this release of Google Distributed Cloud for bare metal.
Feature
The following feature was added in 1.34.100-gke.93:
The spec.taints field in the NodePoolClaim resource is mutable. You can
add or remove taints on existing node pools without recreating the
NodePoolClaim . You can use this field to manage GPU nodes.
Google Kubernetes Engine
Feature
You can now determine the status and health of a TPU slice and partition by monitoring these new beta system metrics:
kubernetes.io/accelerator/slice/state : Indicates the current status of the slice.
kubernetes.io/accelerator/partition/state : Indicates the health of the partition.
For more information, see the GKE system metrics documentation.
Network Intelligence Center
Feature
Flow Analyzer
supports latency mode, allowing you to analyze round-trip time in your
traffic flows.
For more information, see
Display flows in latency mode .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
