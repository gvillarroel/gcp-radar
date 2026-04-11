---
title: "Workflows release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/release-notes
  title: "Workflows release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Resources
Send feedback
Workflows release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Workflows. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
February 17, 2026
v1
Change
Workflows is available in the following additional region : asia-southeast3 (Bangkok, Thailand).
March 28, 2025
v1
Feature
Support for a Kubernetes API connector is generally available ( GA ). The connector allows you to interact with Kubernetes objects in a Google Kubernetes Engine cluster. For more information, see Access Kubernetes API objects using a connector .
February 28, 2025
v1
Feature
Support to create and manage tags is available. You can use tags to group workflows and other resources for reporting, auditing, and access control.
February 19, 2025
v1
Change
Workflows is available in the following additional region : europe-north2 (Stockholm, Sweden).
February 07, 2025
v1
Change
Support for retrieving the detailed history of a workflow execution (expected iterations, in-scope variables) is available in Preview .
February 06, 2025
v1
Feature
Support for creating custom organization policy constraints is available.
January 28, 2025
v1
Breaking
Workflows doesn't support HTTP requests to the IP-based endpoints of Google Kubernetes Engine cluster control planes. To ensure that your workflow functions as expected, you must access the DNS-based endpoints. For more information about the scope and impact, see the service announcement .
October 28, 2024
v1
Feature
Two standard library functions to support common hashing algorithms have been added: compute_checksum and compute_hmac .
September 30, 2024
v1
Feature
A math.floor function has been added to return the largest integer less than or equal to a given number.
September 13, 2024
v1
Change
The maximum number of concurrent workflow executions has increased from 7,500 to 10,000.
September 03, 2024
v1
Feature
Support for execution backlogging is available in Preview . Backlogged executions
automatically run as soon as execution concurrency quota becomes available.
June 17, 2024
v1
Feature
Support for a Vertex AI API connector is available in Preview . Learn how to access Vertex AI models from a workflow .
May 31, 2024
v1
Feature
Support for the following connectors is generally available ( GA ):
AI platform training and prediction
Application Integration
Batch API
BigQuery Data Transfer
Cloud Resource Manager
Google Forms
Google Sheets
Transcoder API
May 30, 2024
v1
Change
The maximum number of concurrent workflow executions has increased from 5,000 to 7,500.
April 22, 2024
v1
Change
Workflows is available in the following additional region : me-central1 (Doha, Qatar).
March 04, 2024
v1
Fixed
An issue that allowed jumps in or out of parallel branches, parallel loops, and for loops is resolved. Only these jumps are allowed:
To steps within the same parallel branch or loop
Between steps belonging to the same for loop
February 19, 2024
v1
Change
The maximum number of concurrent workflow executions has increased from 3,000 to 5,000.
January 31, 2024
v1
Change
Workflows is available in the following additional region : africa-south1 (Johannesburg, South Africa).
January 11, 2024
v1
Feature
Support for invoking a VPC Service Controls-compliant private endpoint is generally available ( GA ).
v1
Feature
Support for defining environment variables at deployment time is generally available ( GA ). See the blog post: Custom Environment Variables in Workflows .
December 15, 2023
v1
Feature
Support to view the history of a workflow execution as a list of step entries is generally available ( GA ). See the blog post: Announcing Workflows execution steps history .
Note: To view the step entries in the Google Cloud console on the Execution details page, you must have a role that contains the workflows.workflows.get , workflows.executions.get , and workflows.stepEntries.list permissions.
November 17, 2023
v1
Feature
Support for a Kubernetes API connector is available in Preview . The connector allows you to interact with Kubernetes objects in a Google Kubernetes Engine cluster. For more information, see Access Kubernetes API objects using a connector .
See the blog post:
Deploy and manage Kubernetes applications with Workflows .
October 31, 2023
v1
Change
Workflows is available in the following additional region : europe-west10 (Berlin, Germany).
October 26, 2023
v1
Change
A connection reset error is tagged as a ConnectionError and not a ConnectionFailedError , and it is not retried for non-idempotent requests. For more information, see Workflow errors and Retry steps .
September 19, 2023
v1
Change
Workflows is available in the following additional region : me-central2 (Dammam, Saudi Arabia).
July 06, 2023
v1
Feature
Support for defining environment variables at deployment time is available in Preview . See the blog post: Custom Environment Variables in Workflows .
June 30, 2023
v1
Feature
Three functions are available: map.merge takes two maps, creates a copy of the first map, and adds items from the second map to the copy; map.merge_nested recursively adds items from a map to a copy of another map; uuid.generate returns a random universally unique identifier.
v1
Feature
Support for invoking a VPC Service Controls-compliant private endpoint is available in Preview .
June 26, 2023
v1
Feature
Support for Customer-Managed Encryption Keys (CMEK) is generally available ( GA ).
June 19, 2023
v1
Fixed
An issue with how Workflows handles HTTP headers with duplicate keys is resolved. The values associated with duplicate header keys are merged into a comma-separated list as described in RFC 9110 . Previously, all but one of the values associated with duplicate keys would be dropped.
June 15, 2023
v1
Feature
Cloud Asset Inventory support for Workflows is now publicly available. For details, see the Cloud Asset Inventory release note .
May 17, 2023
v1
Feature
Support for a Batch API connector is available in Preview .
May 10, 2023
v1
Change
You can apply call logging to a workflow definition as well as to the execution of a workflow, and specify the level of logging required. The execution log level takes precedence over any workflow log level, unless the execution log level is not specified.
May 01, 2023
v1
Feature
The Cloud Workflows service agent has the ability to consume quota and billing for a project through the serviceusage.services.use permission. This allows workflows to count quota and apply billing to the correct project when making calls to other Google APIs.
April 14, 2023
v1
Feature
Use the Workflows JSON schema in your IDE to provide syntax support when creating a workflow. See the Google Cloud Blog post: Workflows gets an updated JSON Schema .
v1
Feature
Workflows support for Customer-Managed Encryption Keys (CMEK) is available in Preview .
March 21, 2023
v1
Feature
Support for triggering a workflow using Eventarc within a VPC Service Controls perimeter is generally available ( GA ).
March 16, 2023
v1
Feature
Support for a Transcoder API connector is available in Preview .
March 02, 2023
v1
Change
Workflows is available in the following additional regions :
asia-northeast3 (Seoul, South Korea)
asia-southeast2 (Jakarta, Indonesia)
me-west1 (Tel Aviv, Israel)
southamerica-west1 (Santiago, Chile)
v1
Feature
Support for limiting the maximum number of concurrent branches or iterations within a parallel step is generally available ( GA ).
February 21, 2023
v1
Fixed
An issue where one shared variable in a subworkflow overwrote another in a calling subworkflow during a workflow's execution is resolved. This affected calling a subworkflow with a parallel step from within a parallel step.
January 10, 2023
v1
Feature
A get_type function that returns a string indicating an argument's data type is available.
January 04, 2023
v1
Feature
Support for an Application Integration connector is available in Preview .
December 15, 2022
v1
Feature
A workflow's source and details can now be updated independently through the Cloud Console using the Source and Details tabs for quicker editing.
December 09, 2022
v1
Feature
A list.prepend function is available to support creating a copy of a list with a new element added to the beginning.
November 08, 2022
v1
Change
Workflows is available in the following additional regions :
asia-east2 (Hong Kong, China)
europe-central2 (Warsaw, Poland)
europe-southwest1 (Madrid, Spain)
europe-west9 (Paris, France)
northamerica-northeast2 (Toronto, Canada)
us-east5 (Columbus, United States)
us-south1 (Dallas, United States)
us-west2 (Los Angeles, United States)
us-west3 (Salt Lake City, United States)
October 24, 2022
v1
Feature
Support for limiting the maximum number of concurrent branches or iterations within a parallel step is available in Preview .
v1
Change
Eventarc event-triggered requests are limited by the execution API write request on workflows. Events that exceed the limit follow the Eventarc retry policy .
October 17, 2022
v1
Feature
Support for Eventarc triggers for Workflows is generally available ( GA ).
October 12, 2022
v1
Change
The memory available for workflow variables and runtime arguments (including Eventarc events) has been doubled to 512 KB per execution.
October 05, 2022
v1
Feature
Support for parallel steps is generally available ( GA ).
September 23, 2022
v1
Announcement
Workflows is FedRAMP Moderate-compliant .
September 13, 2022
v1
Feature
Execution results include the current or final step of the workflow execution .
September 06, 2022
v1
Feature
Support for connectors for Google Forms and Google Sheets is available in Preview .
August 29, 2022
v1
Feature
Added support to deploy a workflow using a cross-project service account through the Google Cloud console .
August 05, 2022
v1
Feature
Added skip_polling so that connectors can execute asynchronously without waiting for the operation to complete.
August 02, 2022
v1
Change
Workflows is available in the following additional regions :
asia-northeast2 (Osaka, Japan)
asia-south2 (Delhi, India)
australia-southeast2 (Melbourne, Australia)
europe-north1 (Hamina, Finland)
europe-west2 (London, England)
europe-west3 (Frankfurt, Germany)
southamerica-east1 (Osasco, São Paulo, Brazil)
us-east4 (Ashburn, Virginia, United States)
us-west4 (Las Vegas, Nevada, United States)
v1
Feature
The following functions have been added:
text.url_encode returns a string with percent-encoded reserved characters, including spaces
text.url_encode_plus returns a string with percent-encoded reserved characters, and spaces replaced by pluses
text.url_decode returns a string with pluses and percent-escaped characters converted to UTF-8
July 11, 2022
v1
Feature
Added support to deploy a workflow using a cross-project service account through the Google Cloud CLI.
July 01, 2022
v1
Breaking
To reduce naming conflicts and improve memory usage, local scoping now applies to any variable created inside an except block .
If you are assigning a variable inside an except block and want to access the variable outside of the block, assign the variable before the block to place it in the surrounding scope .
June 21, 2022
v1
Feature
Workflows can invoke private on‑premises, Compute Engine, Google Kubernetes Engine (GKE), or other Google Cloud endpoints that are Identity-Aware Proxy (IAP)-enabled.
June 20, 2022
v1
Announcement
Support for VPC Service Controls is generally available ( GA ).
June 13, 2022
v1
Feature
Parallel steps are available in Preview .
June 01, 2022
v1
Change
Workflows is available in the europe-west8 (Milan, Italy) region .
May 16, 2022
v1
Breaking
Workflows using callbacks that were deployed on or before January 11, 2022 must be redeployed to continue executing workflows without failures.
May 12, 2022
v1
Feature
A Status field that tracks the current steps and progress of an execution is available in Preview . See the Workflows Executions REST API Overview .
v1
Feature
The following functions have been added:
default and if support conditions within expressions
map.get performs a safe lookup on a map , returning null if a key is not found
April 21, 2022
v1
Feature
Call logging is generally available ( GA ).
April 06, 2022
v1
Announcement
Terraform support to create an Eventarc trigger that invokes Workflows is available in Preview .
March 31, 2022
v1
Feature
Support for creating an Eventarc trigger on the Workflows page in the Cloud Console is now available in Preview .
March 25, 2022
v1
Change
Workflows is available in the following regions :
asia-east1 (Changhua County, Taiwan)
asia-northeast1 (Tokyo, Japan)
asia-south1 (Mumbai, India)
australia-southeast1 (Sydney, Australia)
northamerica-northeast1 (Montréal, Québec)
us-west1 (The Dalles, Oregon)
March 07, 2022
v1
Feature
Support for the following connectors is available in Preview :
AI platform training and prediction
BigQuery data transfer
Cloud Resource Manager
March 03, 2022
v1
Announcement
Support for VPC Service Controls is in Beta stage .
February 28, 2022
v1
Feature
Eventarc triggers for Workflows is available in Preview .
February 18, 2022
v1
Feature
Checking for the existence of a key in a list is supported.
January 31, 2022
v1
Announcement
Workflows is Payment Card Industry Data Security Standard (PCI DSS)-compliant .
January 28, 2022
v1
Change
Workflows is available in the following regions :
europe-west1 (Belgium)
europe-west6 (Zurich)
us-east1 (South Carolina)
January 24, 2022
v1
Feature
Callback endpoints are generally available ( GA ).
January 18, 2022
v1
Announcement
Workflows is now certified as SOC 1-compliant .
January 05, 2022
v1
Feature
Workflows can invoke Cloud Functions or Cloud Run services that have ingress restricted to internal traffic .
December 10, 2021
v1
Feature
Dynamic keys are supported.
December 07, 2021
v1
Change
Resource limits for variable memory and argument size have been increased to 256 KB.
December 06, 2021
v1
Feature
A Workflows Service Level Agreement (SLA) is available and applicable.
November 19, 2021
v1
Feature
Workflows can be scheduled through the Workflows page in the Cloud Console.
November 17, 2021
v1
Feature
The following functions have been added:
sys.sleep_until — Suspends execution until the given time
time.format — Formats timestamp as a human-readable string
time.parse — Parses ISO 8601-compatible string into a timestamp
October 28, 2021
v1
Feature
A built-in environment variable , GOOGLE_CLOUD_SERVICE_ACCOUNT_NAME , is supported to access the service account name for a workflow execution.
September 14, 2021
v1
Feature
Call logging is available in Preview .
September 13, 2021
v1
Feature
Connectors are generally available ( GA ).
September 07, 2021
v1
Feature
Support for callback endpoints is available in Preview .
September 02, 2021
v1
Feature
Support for iterating over a sequence of numbers or through a collection of data is generally available ( GA ).
July 28, 2021
v1
Feature
A list.concat function has been added to support adding an element to a list.
July 23, 2021
v1
Feature
Platform logs are supported by Cloud Logging.
June 25, 2021
v1
Feature
Syntax for updating list values and map values is supported.
June 07, 2021
v1
Feature
String processing functions are available in the text module of the Workflows standard library .
May 31, 2021
v1
Feature
Visualization support while editing the Workflows iteration syntax is available through the Google Cloud Console .
May 10, 2021
v1
Feature
Workflows is HIPAA compliant .
January 25, 2021
v1
Announcement
Workflows is generally available ( GA ).
v1
Feature
Connectors are available in Preview .
December 10, 2020
v1beta
Feature
Workflows launched a visualization feature. The Google Cloud Console displays a visualization of the workflow during editing.
December 08, 2020
v1beta
Feature
Workflows is available in the following regions:
asia-southeast1 (Singapore)
europe-west4 (Netherlands)
August 25, 2020
v1beta
Announcement
Beta launch of Workflows .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
