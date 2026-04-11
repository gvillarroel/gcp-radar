---
title: "Migrate from CrowdStrike Detects API to Alerts API \_|\_ Google Security Operations\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api
  title: "Migrate from CrowdStrike Detects API to Alerts API \_|\_ Google Security\
    \ Operations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrate from CrowdStrike Detects API to Alerts API
Caution: CrowdStrike is decommissioning its Detects API on September 30, 2025. This API
is replaced by the CrowdStrike Alerts API .
This section describes how to migrate your configuration to use the Alerts API and
prevent disruption to your data ingestion.
Who is affected?
This change affects you if you meet both of the following conditions:
You have active data feeds using the CrowdStrike Detection Cloud Monitoring API connector,
which maps to the CS_DETECTS log type.
Your configured CrowdStrike API client for this feed doesn't have read privileges
for alerts.
To prevent service disruption, complete one of the following procedures before
September 30, 2025.
Option 1: Update permissions for your existing CrowdStrike API client (Recommended)
Option 2: Create and use a new CrowdStrike API client
Option 1: Update permissions for your existing CrowdStrike API client (Recommended)
This approach requires configuration changes only in your CrowdStrike Falcon console
and has the lowest impact on existing detection rules that reference the CS_DETECTS log type.
Before you begin, identify API clients using the Detects API. CrowdStrike provides
a dashboard to help you identify API clients that use deprecated endpoints. API
clients used by the Google SecOps detection monitoring feed have
a user agent string that starts with Google-Chronicle-Security .
To set up and use the dashboard, perform the following steps:
Navigate to the CrowdStrike support article
and download the YAML file, titled, PlannedDecommissionofthedetectsAPI(September30,2025) ,
attached at the bottom of the page.
In the Falcon console, navigate to Next-Gen SIEM > Log management
> Dashboards .
From the Create dashboard list, select Create new .
Click Import dashboards .
Import the YAML file you downloaded.
On the dashboard, navigate to the Calls to the deprecated "/detects" API endpoints
table. This table lists the client IDs of all API clients calling the
deprecated endpoint.
For each API client ID identified in the previous step, grant the read permission
for alerts as shown in the image.
In the Falcon console, navigate to OAuth2 API clients tab. You might need
to go through multiple pages to find a specific client ID.
Select the API client you want to modify, and click Edit API client .
In the table on the Edit API client form, select the Read checkbox for alerts.
Click Update client details .
Verify the changes to ensure that the migration is successful.
Confirm that your CrowdStrike feeds in Google SecOps continue
to receive data.
Check the dashboard in the Falcon console again after 30 minutes. The
dashboard should no longer register any calls to the Detects API from the
updated client IDs.
Option 2: Create and use a new CrowdStrike API client
Use this option if you have trouble identifying your existing API client IDs.
The Google SecOps connector for the CS_DETECTS log type automatically
attempts to use the Alerts API first. If the required permissions are missing, it
uses the Detects API. By creating a new client with the correct
permissions, you can ensure that the connector uses the modern Alerts API.
In the CrowdStrike Falcon console, navigate to the OAuth2 API clients section.
Click create API client .
In the table on the Create API client form, select the Read checkbox
for alerts.
From the API client created form, copy the information in the Client ID ,
Secret , and Base URL fields.
In Google SecOps, navigate to SIEM Settings > Feeds .
Locate your CrowdStrike Detection Monitoring ( CS_DETECTS ) feed and click Edit Feed .
Replace the existing credentials with the client ID and client secret you copied
from the Falcon console.
Review your feed configuration and click Submit .
Repeat these steps for each CS_DETECTS feed across all your Google SecOps
instances.
Verify the changes
After updating the feed, verify that the migration was successful:
Confirm that your CrowdStrike feed in Google SecOps continues to receive data.
Check the dashboard in the Falcon console as described in the recommended method.
The dashboard should no longer register any calls to the detects API.
For more details, see the official CrowdStrike decommissioning notice .
CrowdStrike Detections API deprecation in SOAR integration
The CrowdStrike Falcon SOAR integration used the Detections API within its
actions and connectors. CrowdStrike's deprecation of this API affects the
following actions and connectors:
Add Comment to Detection
Close Detection
Update Detection
CrowdStrike - Detections Connector
The SOAR CrowdStrike integration already supports the Alerts API, which
replaces the Detections API. To use the new Alerts API, you must do the
following:
Install the CrowdStrike - Alerts Connector.
Update playbooks to use the Update Alert and Add Alert Comment
actions.
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
