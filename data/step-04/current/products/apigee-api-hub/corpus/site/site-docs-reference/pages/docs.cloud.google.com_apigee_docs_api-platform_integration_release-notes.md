---
title: "Apigee Integration release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/integration/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/integration/release-notes
  title: "Apigee Integration release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Resources
Send feedback
Apigee Integration release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Apigee Integration software in 2022
and later. We recommend that users periodically check this list for
any new announcements, or subscribe to this page using a
feed reader to get notifications of updates.
What is a feed reader?
What is a feed reader?
Really simple syndication (RSS) feed readers aggregate content from
websites that you specify.
Feed reader notifications can be email-, browser-, desktop-, or
mobile-based. Some readers are free, or have free versions, and some
require a subscription.
A few examples:
Feedly
Feedreader
Feeder
More information on RSS:
RSS
Comparison of feed aggregators
Close
See also:
2021 and prior Release notes
Known issues
Application Integration release notes for updates after August 2021
rss_feed Subscribe:
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
August 02, 2024
Announcement
Redirecting from Apigee Integration to Application Integration
We are converging Apigee Integration and Application Integration. This change involves the following updates:
You will now be redirected to Application Integration from the Apigee portal.
Apigee Integration will not support configuring connector tasks in the Apigee portal. You will have to open Application Integration in the Google cloud console to configure connector tasks in your integration.
For more information, see Use Application Integration .
October 19, 2023
Announcement
The maximum memory available for script evaluation in the Data Transformer Script task is 300 MB. For the list of all the applicable limits, see Quotas and Limits .
October 10, 2023
Feature
The following new data transformer functions are available:
Manifest XML - Converts the specified input JSON object into an XML string.
Parse XML - Parses the specified input XML string into a JSON object.
Feature
IAM Conditions for fine-grained access
IAM Conditions lets you define and enforce conditional, attribute-based access control for Google Cloud resources, including Application Integration resources. For more information, see Add IAM conditions .
Feature
You can now view the detailed summary of an integration from the Integration designer. For more information, see View integration details .
September 22, 2023
Feature
Vertex AI - Predict task
Starting with this release, Apigee Integration provides the Vertex AI - Predict task that lets you perform online predictions on your ML models.
September 20, 2023
Announcement
Application Integration is now available for your Google Cloud project. You can now use both Apigee Integration and Application Integration within the same Google Cloud project. For more information, see Using Application Integration .
June 13, 2023
Feature
The following preview features are now generally available (GA) :
Suspend task
JavaScript task
Cloud Scheduler trigger
VPC service controls for Apigee Integration
May 23, 2023
Feature
New tasks for Google Cloud services
The following new integration tasks are available in preview :
AI Platform - Prediction
Cloud KMS - encrypt
Cloud KMS - decrypt
Dataflow - Create Job
Drive - List
Doc AI - Batch Process
Doc AI - Process
Doc AI - Operation
Firestore - Batch Get
Firestore - Batch Write
Firestore - Document Get
Language - Annotate Text
Language - Classify Text
Sheets - Append
Sheets - Batch Get
Sheets - Get
Translate - Document
Translate - Text
Workflows - Execute
May 22, 2023
Feature
Return task
The Return task lets you customize the error messages corresponding to the HTTP response codes that are returned during an integration execution failure.
For more information, see Return task .
Feature
Error catcher trigger
The Error Catcher trigger lets you invoke an error catcher that is defined or customized to handle the failure of an identified trigger, task, or edge condition in your integration.
For more information, see Error catcher trigger .
May 09, 2023
Feature
Cloud logs support for Connectors tasks
You can now view the execution logs of a failed Connectors task in Apigee Integration.
For more information, see Execution Logs .
Fixed
The issue relating to the validation of incorrect variable assignments in an integration has been resolved.
May 01, 2023
Announcement
On May 1, 2023 we released an updated version of the Apigee Integration.
Feature
Apigee Integrations is now available in the following locations:
Melbourne ( australia-southeast2 )
Finland ( europe-north1 )
Paris ( europe-west9 )
Madrid ( europe-southwest1 )
Doha ( me-central1 )
Tel Aviv ( me-west1 )
For more information about the supported locations, see Apigee Integration supported regions .
April 20, 2023
Issue
Apigee Integration fails to validate incorrect variable assignments in an integration. For example, you can currently assign a JSON value to an unassigned variable of String data type. This behaviour might cause data mapping and integration failures.
Until this issue is resolved, we recommend that you do the following:
Assign values to an integration variable as per the variable data type.
Verify and update existing integration variable values as per its respective variable data type.
April 03, 2023
Announcement
On April 3, 2023 we released an updated version of the Apigee Integration.
Feature
Secret Manager - Access task ( Preview )
The Secret Manager - Access task lets you access secret versions that are stored in Cloud Secret Manager from your integration.
For more information, see Secret Manager - Access task .
Note: Rollouts of this feature will begin on April 3, 2023, and may take four or more business days to be completed across all Google Cloud zones. You may not be able to provision Apigee Integration until the rollout is complete.
February 09, 2023
Announcement
On February 9, 2023 we released an updated version of the Apigee Integration.
Change
Data Mapping Editor improvements
Transform expression changes:
You can now add, modify, or remove a function or a function parameter in-between an existing transform expression without losing the subsequent transform functions in the expression.
When applying a pre-defined transform function to a variable in the Data Mapping Editor , the function selection menu now displays the list of functions as per the return type of the preceding function or the data type of the preceding parameter.
Data Mapping Editor UI changes:
Input rows are updated to display indent guides to improve readability and structure recognition.
Mapping validation errors are now highlighted for each function in an Input row.
For more information, see Data Mapping editor .
February 06, 2023
Announcement
On February 6, 2023 we released an updated version of the Apigee Integration.
Feature
JavaScript task ( Preview )
The JavaScript task lets you write custom JavaScript code snippets for your integration.
Using the JavaScript Editor, you can code complex data mapping logic for your integration, perform variable assignments, and add or modify integration variables.
For more information, see JavaScript task .
Feature
Delete integration
You can now delete an entire integration without the need to individually delete all the respective integration versions.
When you delete an integration, you permanently delete all the versions of that integration, including all the integration variables, configured triggers, tasks, and data mappings.
For more information, see Delete integrations .
Note: Rollouts of this release will begin on February 6, 2023, and may take four or more business days to be completed across all Google Cloud zones. You may not be able to provision Apigee Integration until the rollout is complete.
January 10, 2023
Announcement
On January 10, 2023 we released an updated version of the Apigee Integrations software.
Feature
Cloud Scheduler trigger ( Preview )
The Cloud Scheduler trigger lets you schedule your integration executions for defined time periods or regular intervals across multiple regions. Cloud Scheduler triggers leverage the Cloud Scheduler services to provide a fully managed enterprise-grade cron job scheduler within Apigee Integration.
For more information, see Cloud Scheduler trigger .
December 26, 2022
Announcement
On December 26, 2022 we released an updated version of the Apigee Integrations software.
Feature
Test without publishing an integration
You can now test your integration without the need to publish or create a new integration version. Testing an integration lets you experiment with the integration input variable values, and helps in identifying any faults in the integration connection flow before you finalize and publish the integration.
For more information, see Test and publish integrations .
November 29, 2022
Announcement
On November 29, 2022 we released an updated version of the Apigee Integrations software.
Change
Integration variable color code
The color codes of all the integration variable data types is removed and now changed to a single uniform color. Integration variables will no longer be color coded (green, blue, orange) based on their data type.
See Format of an integration variable .
Data Mapping editor
The background color of the Input and Output row is changed to a single uniform color.
Input rows are updated to add line breaks and indentations according to the use of mapping functions to improve readability and structure recognition.
A confirmation dialog is displayed before proceeding to delete an entire Input row.
See [Data Mapping editor](/application-integration/docs/data-mapping-overview#data-mapping-editor).
November 23, 2022
Announcement
On November 23, 2022 we released an updated version of the Apigee Integrations software.
Breaking
Bug ID
Description
250638658
Updated the behaviour of the SetIntegrationRequest policy to identify payload parameter strings enclosed within $# and #$ as flow variables . SetIntegrationRequest policy payload parameter strings enclosed within { and } are no longer identified as flow variables .
November 04, 2022
Announcement
On November 4, 2022 we released an updated version of the Apigee Integration software.
Deprecated
US multi-region (us) for Apigee Integration is deprecated. Use us-east1 , us-west1 , or us-central1 locations instead
As of November 10, 2022 , you can no longer create an integration in the US multi-region (us) location. Any existing integration running in US multi-region (us) will be stopped on or after January 10, 2023 .
It's recommended that you perform the following actions before January 10, 2023 :
Clone your existing integrations to us-east1 , us-west1 , us-central1 , or any of the supported regions . For information about how to clone an integration, see Clone integrations .
Migrate your existing integration proxies to us-east1 , us-west1 , us-central1 , or any of the supported regions . You can do this by manually updating the IntegrationRegion child element in the SetIntegrationRequest policy.
October 04, 2022
Announcement
On October 4, 2022 we released an updated version of the Apigee Integration software.
Change
Apigee Integration trials
Starting with this release, Apigee Integration trials (eval org) is available in Application Integration . Users in a newly provisioned Apigee eval org will be redirected to Application Integration when they open Integrations in Apigee. You can continue using the Apigee proxies (created in the eval org) with the integrations created in Application Integration.
Note: There is no change in the process of enabling integrations in an Apigee paid org. For information about Apigee paid org, see Enable integrations in a paid org .
September 01, 2022
Announcement
On September 01, 2022 we released an updated version of the Apigee Integration software.
Feature
Region support for integration endpoint
Region support when creating an integration using a proxy. You can now specify the region of the integration in a proxy and use that region to generate a regionalised integration endpoint. For more information, see Getting started with Apigee Integration and Apigee proxy Integration targets.
Region support in SetIntegrationRequest policy . Using the <IntegrationRegion> element, you can now specify the region of your integration in the SetIntegrationRequest policy .
Note: <IntegrationRegion> is a mandatory element in the SetIntegrationRequest policy and applies to any new proxies that are created from this release onwards. If there is no <IntegrationRegion> provided in the policy, Apigee will throw an error and continue execution using the Apigee runtime region.
For more information, see SetIntegrationRequest policy .
August 10, 2022
Announcement
On August 10, 2022 we released an updated version of the Apigee Integration software.
Feature
Support for VPC Service Controls (Preview)
VPC Service Controls lets you define a security perimeter around the Apigee Integration Google Cloud service. For more information, see Set up VPC Service Controls for Apigee Integration .
July 09, 2022
Announcement
On July 09, 2022 we released an updated version of the Apigee Integration software.
Feature
Data Mapping task enhancements
The Data Mapping task in Apigee Integrations now provides the following enhancements:
Nested function support . You can pass one or more transformation functions as input parameters to another function.
New transformation functions . You can use the following new transform functions for array-type variables:
FILTER - Filters the array elements that satisfy a given condition.
FOR_EACH - Applies one or more transformation functions for each element in an array.
Subfield mapping support for JSON variables . You can view and search all the subfields of a JSON variable in the data mapping editor variable list.
For more information, see the Data Mapping task .
June 23, 2022
Announcement
On June 23, 2022 we released an updated version of the Apigee Integrations software.
Feature
Updates to SetIntegrationRequest policy
The SetIntegrationRequest policy has the following updates:
Support for ref attribute in the <Parameter> , <ParameterArray> , and <Value> elements. By using this attribute, you can assign flow variable values to the parameters.
Empty <Parameter> and <ParameterArray> elements are supported. However, if these elements are empty, Apigee treats the element value as null.
Empty <Value> element is not supported. If the element is empty, Apigee reports an error.
Feature
Apigee Integration trials
Starting with this release, Apigee Integrations is available in an Apigee Eval org which lets you try out the integrations feature without getting billed for the usage. For information, see Enable integrations in an eval org .
February 21, 2022
Announcement
On February 21, 2022 we released an updated version of the Apigee Integration software.
Fixed
Bug ID
Description
N/A
Cloud Pub/Sub trigger having same topic in multiple region fails . You can now create a Cloud Pub/Sub trigger for the same topic in multiple regions. Because of this fix, your already existing Cloud Pub/Sub trigger may now execute multiple times. Contact Apigee support if you notice this problem. However, if you haven't used the Cloud Pub/Sub trigger in your integrations, you can ignore this fix.
January 19, 2022
Announcement
On January 19, 2022 we released an updated version of the Apigee Integration software.
Feature
Filter clause in the Connectors task
You can add a filter to restrict the amount of data processed by an entity operation. For more information, see Add a filter for an operation .
Feature
Upload and download integrations
The Upload/download menu button in the integration designer lets you upload and download integrations in a JSON file format. For more information, see Upload and download integrations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
