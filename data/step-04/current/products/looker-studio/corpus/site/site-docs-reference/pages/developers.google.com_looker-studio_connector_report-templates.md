---
title: "Providing report templates \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/report-templates
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/advanced-services
source_metadata:
  url: https://developers.google.com/looker-studio/connector/report-templates
  title: "Providing report templates \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Providing report templates
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Report templates offer users pre-built reports to quickly understand a connector's capabilities and data source.
Templates are best suited for connectors with fixed schemas, and unpredictable behavior may occur with variable or multiple schemas.
To create a template, design a report in Data Studio, get a shareable link, and add the report ID to your connector manifest.
Data Studio displays a checkbox during connector configuration, allowing users to choose whether to utilize the default template.
Thorough testing is recommended to ensure the connector and template function as intended.
Caution: Report templates work best for connectors with fixed schemas that do
not change with connector configurations. If you add a template to a connector
with variable or multiple schema, the report behavior will be unpredictable.
You have the option to provide report templates with your Community Connector.
Report templates can help users to quickly understand the capabilities of your
connector if they are unfamiliar with the data source.. It also gives the users
a foundation to build on rather than starting from a blank report. To use this
feature, you have to first design the template in Data Studio and then add it to
your connector manifest .
How to create a report template
To create a report template for your Community Connector:
Create a new report in Data Studio.
Add your connector as the data source.
Add charts, tables, elements, etc. to the report and design it to your
liking.
Give the report a name that will be useful for users.
Get a shareable link .
Caution: G Suite accounts may have sharing limited within the domain. In such
cases, you should create the report template using a non-G Suite account.
How to add the report template to the connector manifest
You can get the report ID from the report's URL and add it to the connector
manifest as a template. Open the report to use as a template in Data Studio and
inspect the URL for the report. The part between reporting/ and /page is the
report ID. For example, in the following URL, 0B1a5IAKYIVtTcWxCbWJkc2Q1M1k is
the report ID:
https://looker-studio.google.com/c/org/UTgoe29uR0C3F1FBAYBSww/reporting/ 0B1a5IAKYIVtTcWxCbWJkc2Q1M1k /page/9QoH
You can now add this report as a template in the manifest of your Community
Connector:
{
"dataStudio" : {
...
"templates" : {
"default" : "0B1a5IAKYIVtTcWxCbWJkc2Q1M1k"
}
}
}
Behavior of templates
If your connector's manifest has an entry for the template key, during the
connector configuration screen, Data Studio will provide a checkbox to allow the
user to select whether or not they want to use the default template. The
checkbox is selected by default.
Note: You should test this behavior to ensure that your Community Connector and
the template work as expected.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
