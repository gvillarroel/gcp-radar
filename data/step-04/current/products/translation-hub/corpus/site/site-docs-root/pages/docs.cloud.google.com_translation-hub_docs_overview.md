---
title: "Translation Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/overview
  title: "Translation Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Translation Hub
Guides
Send feedback
Translation Hub
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
Translation Hub is a self-serve document translation service for organizations
that translate a large volume of documents into many different languages.
Translation Hub is a fully-managed solution; you don't need to build or
maintain your own web application or underlying infrastructure.
After the initial setup, you can start using Translation Hub to quickly
translate documents with simple, page-based pricing. Translation Hub
machine translates your documents while preserving their format and layout.
Translation Hub leverages the Cloud Translation API. Any resources that you
created with Cloud Translation can be used with Translation Hub, such as
glossaries and custom translation models.
How does Translation Hub work?
Authorized business users (also known as portal users) sign in and request
translations through a Translation Hub portal. These portal users might
be localization managers or content creators who want to rapidly translate
documents.
Portals are a Translation Hub resource and are managed by a
Google Cloud administrator in a Google Cloud project. To grant
users access to portals, administrators add them to their Google Cloud
project and assign them to portals. Portal users can only access their assigned
portals; they can't access the related Google Cloud project.
Benefits
The following benefits highlight how Translation Hub can improve the
overall efficiency of your translation workloads:
Self-serve translation
Compared to traditional Translation Management Systems, which are process
heavy and start with human translators, Translation Hub lets you use AI
and then augment results with human translators. You start with machine
translations and then, as part of a post-editing step, you can bring in your own
human reviewers to review and edit the machine translations. By including both
AI and human-editing capabilities, Translation Hub offers timely and
cost-effective translations.
Document translation
You can directly translate documents such as PDF and DOCX files.
Translation Hub preserves the layout and format of the original
documents, such as paragraph breaks and headings. You don't need to extract and
translate the raw text from your documents.
Simplified administration
Administrators can manage all Translation Hub resources from the
Google Cloud console. For example, you can set up portals, manage user access,
and create translation resources like glossaries and translation memories.
Continuous increase in accuracy
During post-editing, you can save edited translations to a translation memory.
A translation memory saves your human-edited translations so that they can be
reused later. You can also import existing translations into your translation
memory.
Your translation memory data is owned by you and remains with you. If you want
to take your data, you can export it to Cloud Storage and use it, for
example, as training data to create custom models.
Straightforward page-based pricing
Translation Hub charges you based on the number of translated pages.
For example, if you use custom models and translation memories, there is no
additional cost. Those features are included in the per page translation costs.
However, any costs that are associated with model training are charged
separately by Cloud Translation .
Sample use case
Imagine that you are in an organization that offers various time-sensitive
reports to customers all over the world. Because you have readers across many
different languages, you require a translation service that can quickly
turnaround translations and handle many different documents.
Translation Hub provides self-service document translation to over 100
languages with a simple, cost-effective page-based pricing. Because
Translation Hub is self-service, you run translations when you're ready
and the results are returned a few seconds later. You can repeat these workloads
consistently with many different documents in any of the supported languages.
You can also bring in your own reviewers to refine translations (also known as
post-editing). You can save post-edits to a translation memory to improve the
accuracy of future translations. Later on when you have enough sentence pairs,
you can export your translation memory data to train custom models in
Cloud Translation. Compared to the default translation model, a custom model
can improve machine translations for your domain-specific content.
Pricing tiers
Translation Hub offers a basic and advanced pricing tier for each portal.
The advanced tier offers additional features at a different translation cost per
page. Administrators set the tier when they create a portal. For more
information, see Compare basic and advanced tiers or
Translation Hub pricing .
What's next
For administrators, learn how to set up a project and enable
translations .
For portal users, learn how to request translations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
