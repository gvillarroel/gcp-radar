---
title: "Looker Support details \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details
  title: "Looker Support details \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Resources
Send feedback
Looker Support details
Stay organized with collections
Save and categorize content based on your preferences.
Note: This page provides information for Looker (original) instances only. For information on Google Cloud Customer Care Support for Looker (Google Cloud core), see the Getting support for Looker (Google Cloud core) documentation page.
You can reach Looker Support by using the Google Cloud console.
Find details on service level agreements (SLAs) and overall support programs on the Looker Technical Support Services Guidelines page.
Hours of coverage and supported languages
For details about hours of coverage and supported languages, see section "3. Language Support" on the Looker Technical Support Services Guidelines page.
Looker Support regional holidays
For the list of Looker Support regional holidays, refer to the Google Cloud Language support and working hours document.
Who can access Looker Support?
To access Looker support, the following requirements must be met:
Looker support is available only on Looker instances that are running an
officially supported Looker version .
Instances that are hosted by Looker automatically update to supported releases.
If your Looker instance is customer-hosted and is running an unsupported Looker version,
update your Looker instance
to a supported Looker version.
For Looker (original) instances, Looker support is available only if the Google Cloud Project number is filled in on the Admin General Settings page. The project number connects your Looker instance to your Google Cloud support plan and determines your level of support.
Looker support is available only to users with the Tech Support Editor IAM role .
This allows us to focus on your most involved users, who may need in-depth help with
the Looker product. You should develop your own internal process for helping
your users, especially because you'll know the ins and outs of your data
better than anyone.
If your Looker instance is using Legacy Support, then support is available only to administrators and developers on your instance.
Issue submission best practices
To ensure a timely and effective resolution when you submit a support case , include the following information:
The Looker version number of the running application.
Environment details, such as OS version, database type and version, and architecture details (for example, whether the instance is containerized or running on a VM).
A detailed description of the problem, including the expected behavior and the actual behavior.
Steps to reproduce the issue.
Any relevant, sanitized log snippets that show errors or other relevant activity. Don't include sensitive information in logs. See the Finding logs section for more information on retrieving logs from customer-hosted Looker instances.
See the Best practices for working with Cloud Customer Care page for more information.
Finding logs
For customer-hosted instances, you can find the Looker logs in the log subdirectory under the Looker user's home directory (usually /home/looker ).
The current day's log file is named looker.log and is actively being written to. Log files from previous days have dates in their filenames.
Important: If you need to download today's log file while Looker is running, make a copy of looker.log . Don't attempt to move or rename looker.log while the application is writing to it; if you tamper with looker.log in any way, Looker will stop writing to log files.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
