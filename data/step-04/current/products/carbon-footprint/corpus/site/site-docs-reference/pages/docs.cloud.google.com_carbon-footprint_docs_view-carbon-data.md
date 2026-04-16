---
title: "View Carbon Footprint data \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/carbon-footprint/docs/export
source_metadata:
  url: https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data
  title: "View Carbon Footprint data \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Carbon Footprint
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
View Carbon Footprint data
The Carbon Footprint dashboard displays estimated greenhouse gas
emissions associated with the usage of covered Google Cloud services for the
selected billing account.
Before you begin
Note: You do not need access to billing spending data in order to access
Carbon Footprint data.
To access the Carbon Footprint dashboard, you need the following
IAM permissions:
billing.accounts.getCarbonInformation
billing.accounts.list
billing.accounts.get
These IAM permissions enable you to do all of the following:
List and view the names of billing accounts.
Access Carbon Footprint data associated with these billing accounts.
To obtain these IAM permissions, a billing account administrator must grant you one or more IAM roles listed below for the billing account that contain such permissions:
roles/billing.carbonViewer
roles/billing.admin
roles/billing.viewer
Read more about Cloud Carbon IAM permission and roles and
Cloud Billing access control .
Accessing the Carbon Footprint dashboard
The Carbon Footprint dashboard is located in the Tools section
within Google Cloud console.
Go to Carbon Footprint
Viewing your carbon footprint
Carbon Footprint data is computed automatically for your billing
account, there is no API to enable or setup required.
It can take up to 21 days for data of the previous month to become available.
If you have the proper IAM permission and data is
available, data is displayed on the dashboard.
Carbon footprint data is given in metric tons of CO 2 equivalent
(tCO 2 e) in the
UI dashboard and in kilograms of CO 2 equivalent
(kgCO 2 e) in the data export.
Market-based emissions and Location-based emissions
The dashboard is divided into two tabs: Market-based emissions and
Location-based emissions . These two tabs display emissions data estimated using
different Scope 2 carbon accounting definitions according to the Greenhouse Gas
Protocol (GHGP). Scope 1 and Scope 3 emissions are identical across the two tabs.
In summary:
Market-based emissions : This tab displays emissions data broken
down by scope 1, scope 2 market-based, and scope 3 GHG emissions. Learn more
about scope 2 market-based emissions methodology .
Location-based emissions : This tab displays emissions data broken down by
scope 1, scope 2 location-based, and scope 3 GHG emissions. Learn more about
scope 2 location-based emissions methodology .
Summary
Each tab displays an overview of the estimated greenhouse gas emissions
associated with the usage of covered Google Cloud services
for the selected billing account.
Annual carbon footprint : The total estimated greenhouse gas emissions
associated with the usage of covered Google Cloud services
for the selected billing account over the past 12 complete months.
Carbon footprint for the past month : The total estimated greenhouse gas
emissions associated with the usage of covered Google Cloud services
for the selected billing account for the most recent completed month, compared
to the previous month.
Recommendations
Carbon Footprint has integrated with Google Cloud Active Assist
Unattended Project Recommender, which analyzes usage activity across all
projects, provides you with the recommendations to reclaim or shut down unattended
projects, and helps you reduce both cost and carbon emissions. If your billing
account has associated projects that are deemed "unattended", you will see the
"Recommendations to reduce emissions" card next to your annual and monthly
summary cards.
Charts
To dig deeper into the specifics of your carbon emissions, the dashboard includes
four charts:
Monthly carbon emissions (in both market-based emissions tab and location-based emissions tab) :
Displays the total estimated greenhouse gas emissions associated with the usage
of covered Google Cloud services for
the selected billing account over all available months, broken down by month.
Carbon emissions by region (in both market-based emissions tab and location-based emissions tab) :
Displays the estimated greenhouse gas emissions associated with the usage of
covered Google Cloud services for the
selected billing account for the past complete month broken down by Google Cloud
region.
Carbon emissions by project (only in the location-based emissions tab) :
Displays the estimated greenhouse gas emissions associated with the usage of
covered Google Cloud services for the
selected billing account for the past complete month broken down by Google Cloud project.
Carbon emissions by product (only in the location-based emissions tab) :
Displays the estimated greenhouse gas emissions associated with the usage of
covered Google Cloud services for the
selected billing account for the past complete month broken down by Google Cloud
service.
What's next?
Export your carbon footprint
Create custom dashboards with the exported data .
Understand the methodology behind Carbon Footprint
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
