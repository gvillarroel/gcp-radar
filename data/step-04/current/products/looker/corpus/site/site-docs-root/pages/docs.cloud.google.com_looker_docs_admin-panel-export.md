---
title: "Admin settings - Export \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-export
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-export
  title: "Admin settings - Export \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Guides
Send feedback
Admin settings - Export
Stay organized with collections
Save and categorize content based on your preferences.
Note: Exports can only be imported into a Looker (Google Cloud core) instance. Exports cannot be imported into a Looker (original) instance.
You will see the Export page in your instance if all of the following situations are true:
You are using a Looker (original) instance and not a Looker (Google Cloud core) instance.
Your Looker (original) instance is Looker-hosted and not customer-hosted.
You have the Admin role in the Looker instance.
You use the Export page when you are performing self-service migration .
The Export page is where you perform these tasks:
Create a request to export the data from your existing Looker (original) instance so that it can be migrated to the Looker (Google Cloud core) environment .
View the status of any submitted requests.
See the Self-service migration from Looker (original) to Looker (Google Cloud core) documentation page for information about how to generate the information that needs to be entered onto the Export page and how to complete the migration.
Important: Before you can undertake a migration, you must have already upgraded your existing Looker (original) contract to cover Looker (Google Cloud core) and validated with your account representative that you are eligible for migration. When you sign the Order Form to purchase Looker (Google Cloud core), your Looker (original) license will be set to expire 60 days from the signing date.
Entering export information
Follow the steps on the Self-service migration from Looker (original) to Looker (Google Cloud core) documentation page up to the Request the export section. Then enter the following information into the Export page in your Looker (original) instance:
The name of the Cloud Storage bucket that you created
The Cloud Storage folder name
The name of the KMS key used to encrypt the migration data
The JSON text that contains the service-account key
Important: Don't share the JSON key file outside of the Export page. If you need support, Cloud Customer Care will advise you on how to share the file—don't send it in an email or write it in cleartext in a Support ticket.
Once you have entered the information, click Request Export to initiate the export.
When you click the Request Export button, it triggers a background process that exports the data to the specified Cloud Storage bucket. This can take a few hours.
The export operation shouldn't cause any disruption or require downtime in your Looker (original) instance.
List of export requests
Once an export request has been submitted, it will appear in a table at the bottom of the Export page, with one of the following statuses:
REQUESTED — Export request has been submitted but export has not begun.
PROCESSING — Export operation has begun but is not completed.
COMPLETE — Export operation is complete and data files should be in the Cloud Storage bucket that is listed in the request.
ERROR — Export operation was not complete due to an error. Clicking the ERROR status reveals an error message.
The export process takes a few hours. Return to the Export page to view the status of the request during that time.
Once the export has been completed and the data appears in your Cloud Storage bucket, continue with the steps on the Self-service migration from Looker (original) to Looker (Google Cloud core) documentation page, beginning with the Import the data into the new "empty" Looker (Google Cloud core) instance section, to complete the migration.
Important: Any changes that you make in the Looker (original) instance after export won't be carried over to the Looker (Google Cloud core) instance. If you need to migrate fresh data to your Looker (Google Cloud core) instance, you can request additional export operations and migrate new instance data into Looker (Google Cloud core). However, importing fresh data into your Looker (Google Cloud core) instance will overwrite any customizations that have been made to that instance.
Issues during export
If an issue occurs with the export of your Looker (original) data, a status of ERROR will appear in the row of the export request. Clicking the ERROR status reveals an error message.
Common sources of errors are the following:
The Cloud Storage bucket, KMS key, or <export-service-account> is invalid.
The <export-service-account> lacks the necessary permissions.
It is helpful to confirm the status of these objects before submitting your export request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
