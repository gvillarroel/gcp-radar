---
title: "Generate an offline assessment \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/run-offline-assessment
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/run-offline-assessment
  title: "Generate an offline assessment \_|\_ Migration Center \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Guides
Send feedback
Generate an offline assessment
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the offline assessment that you can generate with the
discovery client and the mcdc CLI.
Overview
The discovery client and the mcdc CLI
let you run an offline assessment with the information that you collect
in the discovery phase. The offline assessment creates reports that provide
you with a high-level fit assessment result for migration and potential
blockers for different migration journeys. The offline assessment also
describes any issues that must be resolved before the migration.
It provides an overall fit assessment using one of the following scores:
Excellent fit
Good fit, with some findings that might require attention
Needs minimal work before migrating
Needs moderate work before migrating
Needs major work before migrating
No fit
Insufficient data
You can generate reports in HTML, Microsoft Excel, CSV, and JSON format.
Before you begin
To generate an offline assessment report, discover and collect data from your
assets with the
discovery client
or the
mcdc CLI .
Generate a report with the discovery client
To generate and download an offline report with the discovery client,
follow these steps:
In the discovery client application, go to the Reports tab.
Click New report .
Enter a name for your report, then select the format that you want to
export.
To confirm, click Create .
When your report is ready, click Download .
Generate a report with the mcdc CLI
The mcdc CLI lets you output the offline assessment report
as HTML, JSON, CSV, or XLSX file format. HTML and CSV reports are available
as summary and detailed versions.
HTML
Summary
In the directory where you downloaded mcdc CLI,
run the following command:
Linux
./mcdc report --format html --file REPORT_NAME .html
Windows
mcdc.exe report --format html --file REPORT_NAME .html
The tool outputs to the current directory an HTML file named
REPORT_NAME .html.
To view the report, open
REPORT_NAME .html in a
browser.
This report includes a cost analysis section.
Use this report to estimate the cost of running modernized workloads in
Google Cloud. The report groups VMs by modernization strategy, and
sums the cost by modernization strategy, and by overall cost. The cost
analysis helps you decide what modernization strategy to purse,
depending on how much you want to modernize your workloads, and
how much effort you plan to invest.
The calculation is based on the VMs configuration details, such as
number of CPUs, memory, and storage, and excludes VMs that don't fit
modernization targets.
Detailed
In the directory where you downloaded mcdc CLI,
run the following command:
Linux
./mcdc report --format html --full --file REPORT_NAME .html
Windows
mcdc.exe report --format html --full --file REPORT_NAME .html
The tool outputs to the current directory an HTML file named
REPORT_NAME .html.
To view the report, open
REPORT_NAME .html in a
browser.
The report contains a table listing all of the discovered VMs.
It is possible to add further columns to the table.
You can also apply a text filter to the table.
You can open any VM in the table to see its attributes, target
journeys, and app components. You can then open any of the app
components from the VM to see their attributes and target journeys.
The detailed HTML report can fail to open when reporting on a very
large number of VMs–typically more than 10,000 VMs, but the exact
number depends on your machine, on your browser, and on the content
of the report. The XLSX report is a good alternative in such cases.
JSON
In the directory where you downloaded mcdc CLI,
run the following command:
Linux
./mcdc report --format json --file REPORT_NAME .json
Windows
mcdc.exe report --format json --file REPORT_NAME .json
The tool outputs a JSON file named
REPORT_NAME .json to
the current directory.
Open the file with a text editor.
CSV
Summary
In the directory where you downloaded mcdc CLI,
run the following command:
Linux
./mcdc report --format csv --file REPORT_NAME .csv
Windows
mcdc.exe report --format csv --file REPORT_NAME .csv
The tool outputs a CSV file named
REPORT_NAME .csv to the
current directory.
Import the CSV report into your data visualization utility.
The report contains the fit score for each journey for each VM, but
doesn't include results for individual rules.
Detailed
In the directory where you downloaded mcdc CLI,
run the following command:
Linux
./mcdc report --format csv --full --file REPORT_NAME .csv
Windows
mcdc.exe report --format csv --full --file REPORT_NAME .csv
The tool outputs a CSV file named
REPORT_NAME .csv to the
current directory.
Import the CSV report into your data visualization utility.
The report contains the results for all rules for each VM and
application component.
XLSX
In the directory where you downloaded mcdc CLI,
run the following command:
Linux
./mcdc report --format xlsx --file REPORT_NAME .xlsx
Windows
mcdc.exe report --format xlsx --file REPORT_NAME .xlsx
The tool outputs a spreadsheet named
REPORT_NAME .xlsx to the
current directory.
Open the spreadsheet.
The spreadsheet contains a number of worksheets displaying the following:
Information about all discovered VMs
Information about all discovered application components
Fit score for all journeys for each VM and app component
A worksheet per journey containing the results for all rules for that
journey
The mcdc CLI stores assessment data and log information
in the ~/.mcdc directory on the host machine.
For information on how to remove this data, see
Delete collected data from host machine .
Specify the target platform
When generating a report, use the --target-platform flag to indicate the
specific platform to which you want to migrate your VMs.
The available options are: gcp , gdc , containers , and all .
Each option lets you specify a different set of journeys to evaluate:
gcp assesses lift and shift journeys to Compute Engine,
Google Cloud VMware Engine, and containerization journeys to Google Kubernetes Engine,
GKE Autopilot, and Cloud Run.
gdc assesses lift and shift journeys to Google Distributed Cloud
and containerization journeys to GKE and
Cloud Run.
containers assesses modernization to Google Distributed Cloud, Google Kubernetes Engine,
GKE Autopilot, and Cloud Run.
all assesses all possible journeys.
For example, to limit the report to the gcp migration journey, run
the following command:
Linux
./mcdc report --format FORMAT --target-platform gcp --file REPORT_NAME
Windows
mcdc.exe report --format FORMAT --target-platform gcp --file REPORT_NAME
If you use the mcdc CLI in a
Google Distributed Cloud environment ,
then specify the gdc value for the target platform:
Linux
./mcdc report --format FORMAT --target-platform gdc --file REPORT_NAME
Windows
mcdc.exe report --format FORMAT --target-platform gdc --file REPORT_NAME
What's next
Learn how to generate a
total cost of ownership (TCO) report .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
