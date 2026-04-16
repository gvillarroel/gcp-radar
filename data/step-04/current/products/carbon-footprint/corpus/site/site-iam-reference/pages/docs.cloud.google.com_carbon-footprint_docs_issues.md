---
title: "Known issues for Carbon Footprint \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/carbon-footprint/docs/issues
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/carbon-footprint/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/carbon-footprint/docs/issues
  title: "Known issues for Carbon Footprint \_|\_ Google Cloud Documentation"
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
Known issues for Carbon Footprint
This page lists known issues for Carbon Footprint.
Addressing these issues is on the roadmap of Carbon Footprint.
You can also check for existing issues
or open new issues
using the public issue tracker .
Limited coverage of Google Cloud services
Carbon Footprint does not cover all Google Cloud services, see the
list of covered services .
New carbon transfer configs create an off-schedule transfer run
When creating a new Carbon Footprint transfer config to
export carbon data to BigQuery , the
BigQuery Data Transfer Service will create an initial transfer run for the current date.
However, because carbon data is only published on the 15th of the month, this
initial transfer run may contain no data.
Transfer configs will automatically export carbon data for future months on the
15th of each month. Historical data can be requested via backfill as described
here .
Deprecated carbon offsets fields in BigQuery export
The carbon_offsets_kgCO2e and carbon_footprint_total_kgCO2e.after_offsets
fields are deprecated. Due to BigQuery behavior, these columns cannot be removed
from existing export tables and will remain in the schema with NULL values.
These fields won't be populated, in line with Google's transition from carbon
offsets to carbon removal technologies.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
