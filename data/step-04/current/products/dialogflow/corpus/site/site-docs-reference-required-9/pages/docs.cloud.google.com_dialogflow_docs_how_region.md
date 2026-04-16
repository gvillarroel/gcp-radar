---
title: "Regionalization and data residency \_|\_ Dialogflow ES \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/how/region
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/how/region
  title: "Regionalization and data residency \_|\_ Dialogflow ES \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Dialogflow
Dialogflow ES
Send feedback
Regionalization and data residency
Stay organized with collections
Save and categorize content based on your preferences.
Dialogflow provides
data residency
to keep your
data-at-rest
physically within a geographical
region or location .
When a region is specified,
your data-at-rest is not replicated outside the region.
Pricing is the same for all regions.
Regions are used for the following reasons:
Your system may have regulatory or policy requirements
that govern where your data must reside.
Your network latencies may be improved when the data is in the same
region as your customers.
For example, If UK customers use europe-west2 ,
they can expect better latency.
Note: Dialogflow regionalization and data residency does not apply to
data-in-use
or
data-in-transit .
Data-at-rest
All Dialogflow developer user and end-user data is included in
data-at-rest .
For example:
All agent resources set with console or API (intents, entities, etc.)
All agent settings set with console or API
Query history
Validation results
Model creation tasks
Training tasks
Long-running operation tasks
Available regions
Dialogflow provides the following regions:
Country grouping
Geographical location
Region ID
Europe
Belgium
europe-west1
Europe
London
europe-west2
Asia Pacific
Sydney
australia-southeast1
Asia Pacific
Tokyo
asia-northeast1
Global
Dialogflow serving is global, data-at-rest is within US
global (preferred) or no region (default) *
Symbol
Description
*
Calls to the global region may have higher latency when called from outside of the US. Prefer a more specific region that is closer to your services and end-users, if possible.
Select a region with the console
The top left area of the Dialogflow ES console
has a drop-down for region selection.
Every agent has an immutable region that is specified upon creation.
When you select a region from the console,
you can only list or create agents for the selected region.
The default region is global .
Note: You can create one agent per region for a Google Cloud project.
Select a region with the API
If your agent was created in a non-default region,
you must specify that region when calling the API
for either design-time or runtime requests.
To provide a region, you supply a location parameter to API requests.
For REST calls, do both of the following:
Provide the location URL path parameter.
For the global region, use global .
For the global region,
use dialogflow.googleapis.com for the hostname.
For all other regions,
use [REGION_ID]-dialogflow.googleapis.com for the hostname.
Examples:
https://dialogflow.googleapis.com/v2/projects/PROJECT/locations/global/agents/
https://asia-northeast1-dialogflow.googleapis.com/v2/projects/PROJECT/locations/asia-northeast1/agents/
For client libraries, see the
client library documentation .
You need to do the following:
Set the Dialogflow service endpoint to one of the following:
dialogflow.googleapis.com:443
REGION_ID -dialogflow.googleapis.com:443
Set the session name to:
projects/ PROJECT_ID /locations/ REGION_ID /agent/sessions/ SESSION_ID
Caution:
As described in the
setup documentation ,
you should use the GOOGLE_APPLICATION_CREDENTIALS
environment variable to provide your client libraries with credentials.
However, if you need to manually provide a credentials file in your code,
you need to take one additional step when calling a regionalized endpoint.
Set the scope to https://www.googleapis.com/auth/cloud-platform
when generating your authentication credentials.
For example, this is accomplished in Java
when creating a GoogleCredentials object:
GoogleCredentials.fromStream(new FileInputStream("credential_file"))
.createScoped("https://www.googleapis.com/auth/cloud-platform")
Cloud logging
See the
Cloud logging guide
to control the region in which logs are stored.
Limitations
When a non-default region is selected in the Dialogflow Console,
the following features are not available:
Integrations
Knowledge Connectors
Prebuilt Agents
Small Talk
Training tool
The
APIs Explorer ,
found on many
REST reference documents ,
only supports the global region for API calls.
Previous
arrow_back
Long-running operations
Next
Migrating
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
