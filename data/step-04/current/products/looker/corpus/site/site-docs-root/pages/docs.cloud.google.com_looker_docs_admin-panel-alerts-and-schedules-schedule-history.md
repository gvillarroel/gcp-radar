---
title: "Admin settings - Schedule History \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-schedule-history
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-schedule-history
  title: "Admin settings - Schedule History \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Admin settings - Schedule History
Stay organized with collections
Save and categorize content based on your preferences.
The Schedule History page in the Alerts & Schedules section of the Admin menu shows the recent history of the Scheduler's activity.
Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage_schedules , manage_themes , or see_admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
You can view scheduler plans on the Admin settings - Schedules page. The schedule plan specifies when content should be sent to specific addresses.
A new schedule job is created each time that content is sent. For example, if a schedule specifies sending specific content to certain addresses every Monday, then Looker will make a new scheduler job each Monday to send that content to the specified addresses.
Scheduling status
At the top of the Scheduler History page, you can filter the scheduled jobs by status:
All : all recent scheduler jobs
Running : only scheduler jobs that are currently running
Successful : only scheduler jobs that completed successfully
Failed : only scheduler jobs that failed to complete successfully
Information included
Column
Definition
Time
When the scheduled job began
Test
Shows a checkmark if the job was a test
Status
Whether the job is current running, complete, or failed
Stage
The current stage of a running job
User
The user that created the schedule
Source
The content that was scheduled, either a look or a dashboard
Name
The name of the look or dashboard, which also serves as link to the content
Type
The type of data delivery, either Amazon S3, Email, Segment, SFTP, or Webhook
Format
The format of the content in the scheduled job, such as CSV
Message
For a failed attempt, the error message
Runtime
How long the job ran or has been running
Using error messages
Use error messages to debug scheduled jobs. For example, if the owner of a schedule is missing a permission or the owner's user ID is not enabled when a schedule was run on their behalf, the job fails.
Another example is scheduled jobs that fail in the scheduled job queue without the job having been closed. The Scheduler monitors the scheduled job queue for jobs that have been enqueued for an hour or more while more recent jobs have been successfully dequeuing. If this occurs, the enqueued scheduled job is closed and reported as Failed on the Schedule History page, returning one of the following messages:
Job is no longer processing @<state> (where <state> is either execute or deliver )
Job was expected to dequeue by @<time>
If you see one of these messages, your scheduled job will execute the next time it is scheduled to run.
Getting additional details
Click the Details button to the right of any schedule to view additional information, including recipient addresses, whether the row limit was reached, the start and end times, and other details about the scheduled job. For scheduled content that uses a datagroup, the Details window will also show the model and the name of the datagroup that is being used as the schedule trigger.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
