---
title: "Customer Experience Insights release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/insights/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/insights/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/insights/docs/release-notes
  title: "Customer Experience Insights release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Customer Experience Insights
Resources
Send feedback
Customer Experience Insights release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to CX Insights. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated features.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
February 19, 2026
Feature
Customer Experience Insights offers autolabeling and correlation rules to enhance conversation processing.
Autolabeling rules : Automatically apply key-value labels to conversations based on defined conditions.
Correlation rules : Define how to link related conversation segments together to form complete customer interaction views.
January 31, 2026
Feature
Customer Experience Insights offers analysis rules for follow up analysis. A follow up analysis rule tells CX Insights to analyze a group of conversations based on the result from an analysis of a different group of conversations.
January 28, 2026
Feature
Customer Experience Insights offers configurable dashboards to view usage and feedback metrics over time. Choose from a wide array of chart types to build your own, or use the AI assistant to build custom dashboards.
January 12, 2026
Announcement
This product has a new name. The same product with the same features is now called Customer Experience Insights, or CX Insights for short.
September 17, 2025
Change
Conversational Insights offers the following subscriptions:
Standard edition provides a suite of tools to analyze customer service conversations.
Enterprise edition includes the standard edition tools and Quality AI.
Standalone Quality AI provides only automated evaluation tools.
Pricing is based on how you interact with your customers:
Chat conversations are billed per message.
Voice conversations are billed per minute.
August 15, 2025
Feature
Conversational Insights offers conversation datasets in preview. Choose from your existing history or upload new conversations to curate customized datasets to test and evaluate the results of Agent Assist summarization.
Feature
Quality AI offers the virtual agent platform to help with quality management for virtual agents. The virtual agent platform presents data for the following metrics, aggregated across all an agent's conversations:
Rate of escalation to a human agent
Latencies with respect to operations that an agent performs
Customer sentiments
July 18, 2025
Feature
Quality AI offers multiple scorecards in preview. With multiple scorecards , Quality AI can evaluate a single conversation against different criteria and provide multiple conversation scores. You can also choose which scorecard data to view on each page of the console.
June 27, 2025
Feature
Quality AI offers the agent engagement platform where contact center personnel can visualize agent performance data, including an AI-generated summary. The agent engagement platform also identifies areas where an agent excels and needs help compared to their peers.
Feature
Qualilty AI offers agent assessments based on individual conversations. Human evaluators can also add notes to these assessments with feedback for the agent.
Change
Add your own custom tags in Quality AI . In addition to the default Business, Compliance and Customer tags, you can apply custom tags to any question in any scorecard.
Feature
Quality AI offers sampling rules that filter conversations to reduce the workload for human evaluators, saving contact centers time and money.
Feature
Conversational Insights offers a devkit to help developers and maintainers perform a wide range of actions, including the following:
Import one or more conversations with metadata.
Transcribe mono audio files.
Create recognizers with STT V2.
Transform transcript data formats from Genesys Cloud or AWS.
Change Conversational Insights global settings.
June 20, 2025
Feature
Conversational Insights offers sentiment analysis in GA. Sentiment analysis determines the mood within a conversation and assigns a score: positive, neutral, or negative.
May 29, 2025
Feature
Conversational Insights offers a merged analysis , which displays the previous results of each analysis type alongside your most recent analysis result. Merged analysis eliminates the need to run every analysis multiple times.
April 28, 2025
Change
Quality AI offers the following conversation filters :
CSAT
Sentiment score
Silence duration
April 23, 2025
Feature
Quality AI offers fine-grained access control in preview.
Use IAM custom roles and authorized views to control who can view which portions of your dataset.
March 07, 2025
Feature
You can integrate Agent Assist summarization generators with Conversational Insights. Summarization uses existing LLM generators to automatically summarize conversations. You can then export those summaries along with your other Insights data.
March 06, 2025
Feature
Conversational Insights offers Rule-based analysis as a GA feature to customize your conversation analyses. Rule-based analysis provides the following customizations:
Filter conversations.
Select a percentage of your dataset.
Designate different types of analysis.
January 28, 2025
Feature
Customer Managed Encryption Key (CMEK) is available in GA for all Agent Assist features. CMEK lets you control details of your data encryption keys, view audit logs, and control key lifecycles.
December 23, 2024
Feature
Conversational Insights offers LLM-powered topic inference as a GA feature.
Topic inference allows you to use your topic model to analyze new conversations and identify topics in real time.
This feature is only available for English.
December 20, 2024
Change
Quality AI is available for 38 Gemini languages in preview. Quality AI supports the following languages in addition to English:
German
Italian
Japanese
Korean
Portuguese
Spanish
French
Change
Topic inference is available for 38 Gemini languages in preview.
November 14, 2024
Feature
Conversational Insights offers Rule-based analysis as a preview feature to customize your conversation analyses. Rule-based analysis provides the following customizations for your conversation analyses:
Filter conversations.
Select a percentage of your dataset.
Designate different types of analysis.
October 24, 2024
Announcement
You can use Quality AI as a GA feature within the Conversational Insights console to evaluate contact center conversations and agent performance more efficiently. Quality AI automates conversation scoring so that all conversations are taken into account.
See the Overview , Basics , Setup Guide , and Best Practices pages for more details.
August 19, 2024
Feature
You can use Quality AI as a preview feature within the Conversational Insights console to evaluate contact center conversations and agent performance more efficiently. See the Overview , Basics , Setup Guide , and Best Practices pages for more details.
October 09, 2023
Feature
You can use the Conversational Insights API to ingest audio conversation data in bulk from a Cloud Storage bucket. Optionally, you can apply redaction prior to import and transcribe the audio using custom Speech-to-Text settings.
March 31, 2023
Feature
You can use the CCAI Insights API to upload your audio conversation data from a Cloud Storage bucket. Optionally, you can apply redaction and analyses to your conversation prior to upload.
November 15, 2022
Feature
Topic modeling is now a GA feature. Topic modeling helps you discover topics (call drivers) in conversations between contact center agents and end-users.
May 20, 2022
Feature
CCAI Insights now offers GA support for Access Transparency .
November 15, 2021
Feature
CCAI Insights now offers GA support for VPC Service Controls integration. See the VPCSC documentation for details.
October 12, 2021
Announcement
The CCAI Insights v1 endpoint is now GA. See the documentation for details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
