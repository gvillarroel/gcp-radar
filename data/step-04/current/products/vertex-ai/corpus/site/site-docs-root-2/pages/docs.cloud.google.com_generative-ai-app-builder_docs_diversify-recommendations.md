---
title: "Diversify media recommendations \_|\_ Vertex AI Search \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/diversify-recommendations
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/diversify-recommendations
  title: "Diversify media recommendations \_|\_ Vertex AI Search \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Diversify media recommendations
Stay organized with collections
Save and categorize content based on your preferences.
If you want to ensure that media recommendations results returned from a single
recommendation request are more diversified rather than looking similar, you can
turn on diversification. This feature is available only for media
recommendations, not custom search and recommendations.
Generally, diversification reduces the likelihood that similar content is
shown in a recommendation panel, at the risk of removing some good
recommendations.
Diversification is set on the serving config level. You can have multiple
serving configs per media recommendations app, each with a different
diversification setting. For more about serving configs, see
Create and manage media serving configs .
Two types of diversification are available: rule-based diversity and data-driven
diversity.
Rule-based diversity
Rule-based diversity relies on the categories that are uploaded with your
content. Use rule-based diversity to recommend content from a variety of
categories. Diversification is configured by level, with higher levels of
diversification causing fewer items to be displayed per category. This
diversification type works best if your content has high-quality categories.
Diversification level
Maximum items per category
None
Unlimited
Low
3
Medium
2
High
1
Auto
Depends on content
In general, setting rule-based diversity and using filter recommendations is not
advised. For more information, see Filters and diversification
settings .
Data-driven diversity
Use data-driven diversity to produce recommendation results that balance
relevance and diversity. Data-driven diversity learns from content metadata such
as titles or categories. Instead of relying on words from a title or category,
data-driven diversity uses semantic similarity to produce better-performing
diversification.
Diversification level
Maximum similar items
None
Unlimited
Low
3
Medium
2
High
1
Auto
Depends on content
Diversify recommendations
To diversify your media recommendations:
In the Google Cloud console, go to the AI Applications page.
AI Applications
Click the name of the app that you want to configure recommendations for.
Go to the Configurations > Control tab.
If you have more than one serving config, select the serving config that you
plan to set diversification for.
In the Result diversification section, choose how to diversify your
recommendations in the Diversification type field.
Turn on the Enable diversification level toggle to see the
available diversification levels.
Select a diversification level for your recommendations.
Click Save and publish .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
