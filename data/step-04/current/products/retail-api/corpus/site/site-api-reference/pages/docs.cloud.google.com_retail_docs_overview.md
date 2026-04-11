---
title: "Implement Vertex AI Search for commerce \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/retail/docs/overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/retail/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/retail/docs/overview
  title: "Implement Vertex AI Search for commerce \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Vertex AI Search for commerce
Guides
Send feedback
Implement Vertex AI Search for commerce
Stay organized with collections
Save and categorize content based on your preferences.
You can implement Vertex AI Search for commerce for your ecommerce application.
When you use recommendations or search, you
ingest user event and catalog data and to
serve predictions or search results on your site.
The same data is used for both
recommendations and search, so if you use both,
you don't need to ingest the same data twice.
The average integration time is in the order of
weeks. Note that for search, the actual duration depends
heavily on the quality and quantity of data to ingest.
Warning: Never cache personalized results from an end user, and never return personalized
results to a different end user.
Commerce integration overview
Migrate in four phases
Migrating your search engine is a structured, four-phased approach that helps to ensure that every aspect of the migration is addressed to minimize risks and maximize your investment.
Manage the expectations of your merchandising teams and sellers by doing the following:
Keep merchant teams informed : Proactively communicate the changes that are coming and why the company is moving to an AI-first approach.
Educate teams on the new paradigm : Explain that the system is based on user behavior and intent detection, which leads to a more personalized product ranking. The search results look different.
Set clear guidelines for business rules : Emphasize that business rules can be applied only for specific, data-backed business reasons, such as contractual obligations or a clear revenue-driving strategy. The goal is to let the AI do its job.
A/B test new rules : If a new rule is proposed post-migration, the most data driven way to validate its effectiveness is to run another A/B test, one group with the rule, one group without the rule. Let the data decide whether the rule is promoted to production.
By diligently following this four-phased approach, a typical migration to A/B testing can be achieved in about two to three months, depending on the current search system complexity and speed of execution. This methodology has been designed and proven across numerous customer adoptions.
Note: Attempting to sprint through or skip steps can cause rework and delays.
Onboarding best practices
When onboarding to Vertex AI Search for commerce, the primary driver for quality search results and performance is the ingested data. Vertex AI Search for commerce performance (relevancy, ranking, and revenue optimization) is extremely sensitive to the uploaded data, including catalogs, product info, and user events.
Vertex AI Search for commerce has multiple dashboards and data quality checks in place to ensure that any issues or potential flaws in the data or data schema are flagged. If data flaws are overlooked from the start, the model won't train accurately and an initial A/B test does not produce the expected results, the root cause being more often than not the catalog or user data rather than Vertex AI Search for commerce itself.
Click these links to jump to the best practices section for integrating each of these Vertex AI Search for commerce components:
Product catalog best practices
User events best practices
Integration and configuration best practices
A/B experiments best practices
Terms of Service
Product usage is under Google Cloud's Terms and Conditions or relevant
offline variant. The Google Cloud Privacy Notice
explains how Vertex AI Search for commerce collects and processes your personal information relating to the
use of Google Cloud and other Google Cloud services.
For quality assurance, a small sample set of search queries and search results
from the logs, which include customer data, are sent for
human rating to third-party vendors disclosed as Third-Party
Subprocessors for search.
Additional tests using search queries and search results from Google Search logs
that are publicly collected datasets are sent for human rating to different
third-party vendors for quality assurance. The Google Search logs are
not categorized as customer data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
