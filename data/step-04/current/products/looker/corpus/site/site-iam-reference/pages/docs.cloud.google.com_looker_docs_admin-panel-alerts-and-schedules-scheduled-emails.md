---
title: "Admin settings - Scheduled Emails \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/looker-core-access-control
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails
  title: "Admin settings - Scheduled Emails \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Admin settings - Scheduled Emails
Stay organized with collections
Save and categorize content based on your preferences.
Emailed data policy
When delivering Looker content using email, you can specify whether the content is attached to the email or embedded in the body of the email , or you can provide a link back to the content in Looker , or both .
The Scheduled Emails page, accessible from the Admin panel under Alerts & Schedules , lets Looker admins set a data sharing policy that applies to all new and existing one-time and scheduled email deliveries that use Looker 's native email destination. This policy does not apply to emails that are delivered by using any of Looker 's other native destinations or integrated services through the Looker Action Hub or a custom action hub.
Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage_schedules , manage_themes , or see_admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
The selected Emailed Data Policy is a setting that applies to all new and existing one-time or scheduled email deliveries. The setting cannot be managed at the model level or for specific one-time or scheduled email deliveries.
The Emailed Data Policy includes one of three options for email deliveries:
Send Link Only : Emails will include only a link and will require a Looker login to view the scheduled Look or dashboard. Looker recommends this option for delivering sensitive data.
Send Data Only : Data tables and visualizations can be attached or embedded in emails.
Send Links and Data : Data tables and visualizations can be attached or embedded in emails. Users can opt to include links back to Looker for each delivery.
Default emailed data policy options
Upon updating to Looker 7.8+ from Looker 7.6 or a previous Looker version, instances will have the Send Links and Data option selected by default.
Send Link Only
With the Send Link Only option selected, when you are setting up deliveries of Looks and dashboards to email, the Scheduler will contain fields to name your delivery, list email recipients, define the delivery's trigger or frequency, and specify additional advanced scheduling options.
You can check the Summary at the bottom of the Scheduler to verify the delivery settings.
The email delivery will contain the following information:
The name of the delivery in the email subject line — by default, this is the title of the dashboard, Look, or Explore that's being delivered. Looker recommends not using sensitive data or information in the title of any Looker content.
A link to View full dashboard (for dashboard deliveries) or View full report (for Look or Explore deliveries).
A message indicating that the Looker admin requires that you log in to Looker to view the scheduled content.
The user who sent or scheduled the content.
To view the content, users clicking the emailed link must log in to Looker and have permissions to access the model on which the content is based. Emailed deliveries from schedules that are created on embedded content won't include links back to Looker .
Send Data Only
With the Send Data Only option selected, when you are setting up deliveries of Looks and dashboards to email, the Scheduler will contain fields to name your delivery, list email recipients, elect a format for the data, define the delivery's trigger or frequency, and specify additional advanced scheduling options.
You can check the Summary at the bottom of the Send or Schedule pop-up to verify the delivery settings.
The email delivery will contain:
The name of the delivery in the email subject line — by default, this is the title of the dashboard, Look, or Explore being delivered. Looker recommends not using sensitive data or information in the title of any Looker content.
Either a file attachment containing the Looker content or embedded data in the body of the email, depending on the selected data format.
The user who sent or scheduled the content.
Anyone who receives the email can view the embedded or attached content.
Send Links and Data
With the Send Links and Data option selected, when you are setting up deliveries of Looks and dashboards to email, the Scheduler will contain fields to name your delivery, list email recipients, elect a format for the data, define the delivery's trigger or frequency, and specify additional advanced scheduling options, including selecting whether to include links back to Looker content in the body of the email.
You can check the Summary at the bottom of the Send or Schedule pop-up to verify the delivery settings.
The email delivery will contain:
The name of the delivery in the email subject line — by default, this is the title of the dashboard, Look, or Explore that's being delivered. Looker recommends not using sensitive data or information in the title of any Looker content.
Either a file attachment containing the Looker content or embedded data in the body of the email, depending on the selected data format.
A link to View full dashboard (for dashboard deliveries) or View full report (for Look or Explore deliveries).
The user who sent or scheduled the content.
Anyone who receives the email can view the embedded or attached content, but the recipient must log in to Looker to view the Looker content that's linked from the email. Emailed deliveries from schedules that are created on embedded content won't include links back to Looker .
Changing your emailed data policy option
Although your Looker instance will have a default emailed data policy option selected based on the instance's settings prior to an update to Looker 7.8, Looker admins can change this default setting at any time by navigating to the Scheduled Emails page in the Admin panel under Alerts & Schedules .
Changing your emailed data policy may break any existing automated workflows set up to use email. Admins should check with their users to see if these have been set up and decide how to manage changes to the emailed data policy.
There may be additional considerations and trade-offs when you are deciding whether to switch emailed data policy options. The following table shows at a high level what happens to a scheduled delivery when admins switch the instance's emailed data policy options.
Old Emailed Data Policy
What Gets Delivered
New Emailed Data Policy
What Gets Delivered
Send Link Only
Link back to Looker content
Send Data Only
Existing Schedules : An embedded data visualization or file attachment replaces the link
New Deliveries : Embedded data or a file attachment
Send Link Only
Link back to Looker content
Send Links and Data
Existing Schedules : Embedded data or a file attachment and option to include links automatically selected
New Deliveries : Embedded data or a file attachment and option to include links automatically selected
Send Data Only
Embedded data or a file attachment
Send Link Only
Existing Schedules : Link back to Looker content replaces embedded; no file is attached
New Deliveries : Link back to Looker content
Send Data Only
Embedded data or a file attachment
Send Links and Data
Existing Schedules : Embedded data or a file attachment and option to include links automatically selected
New Deliveries : Embedded data or a file attachment and option to include links automatically selected
Send Links and Data
Embedded data or a file attachment and option to include links back to Looker content
Send Link Only
Existing Schedules : Link back to Looker content
New Deliveries : Link back to Looker content
Send Links and Data
Embedded data or a file attachment and option to include links back to Looker content
Send Data Only
Existing Schedules : Embedded data or a file attachment
New Deliveries : Embedded data or a file attachment
Switching deliveries to Send Link Only
If you are switching to the Send Link Only option, all new one-time and scheduled email deliveries will be sent containing only links back to Looker and the title of the Looker content, rather than embedded or attached Looker content.
Existing schedules will also send only links back to Looker , even if previously the schedule had been set up to send data and visualizations.
Existing schedules from a Looker instance that had enabled the Send Links and Data emailed data policy option but did not enable the Include links box on the schedule will not be delivered. These schedules display in the Scheduler History page in the Admin panel with an error indicating that the option to include links in scheduled emails must be enabled when a Send Link Only policy is enabled. The schedule must be recreated to resolve the error; duplicating the invalid schedule won't resolve the error.
External recipients
You can use the Scheduled Emails page in the Alerts & Schedules section of the Admin menu to monitor data being sent from Looker to non-users. The Scheduled Emails page lists any email addresses that are scheduled to receive Looks or dashboards but that are not associated with one of your Looker instance's user accounts.
The table of external email addresses that appears on the page shows the following information:
Column
Definition
Email
The external email address.
Scheduled for
The Look or dashboard that is scheduled to be sent to the external email address. Each entry in this column is a link to the Look or dashboard.
Scheduled by
The name of the Looker user who created the schedule.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
