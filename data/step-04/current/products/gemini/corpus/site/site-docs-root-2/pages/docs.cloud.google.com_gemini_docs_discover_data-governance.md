---
title: "How Gemini for Google Cloud uses your data \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/discover/data-governance
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/discover/data-governance
  title: "How Gemini for Google Cloud uses your data \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
How Gemini for Google Cloud uses your data
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how Gemini for Google Cloud, which offers AI-powered assistance,
conforms to
Google's privacy commitment
with generative AI technologies. When you use Gemini in the
Google Cloud console or in a development environment, Google Cloud handles
your prompts in accordance with our terms of
service and Cloud Data Processing Addendum .
For more information about Gemini for Google Cloud, see
Gemini for Google Cloud overview .
Google's privacy commitment
Google was one of the first in the industry to publish an AI/ML privacy
commitment ,
which outlines our belief that customers should have the highest level of
security and control over their data that's stored in the cloud. That commitment
extends to Google Cloud generative AI products. Google helps ensure that
its teams are following these commitments through robust data governance
practices, which include reviews of the data that Google Cloud uses in the
development of its products. You can find more details about how Google
processes data in
Customer Data Processing Addendum (CDPA)
or the data
processing agreement applicable to your Google Cloud service.
Data you submit and receive
The questions that you ask Gemini, including any input
information or code that you submit to Gemini to analyze or
complete, are called prompts . The answers or code completions that you receive
from Gemini are called responses .
Gemini doesn't use your prompts or its responses as data to
train its models. Some features are only available through the
Gemini for Google Cloud Trusted Tester Program ,
which lets you optionally share data, but the data is used for product
improvements, not for training Gemini models.
Code customization lets
you get code suggestions based on your organization's private codebase directly
from Gemini Code Assist. When you use code customization, we
securely access and store your private code. This access and storage is
essential for delivering the code customization service you've requested. To
configure and use code customization, see
Configure and use Gemini Code Assist code customization .
Because Gemini is an evolving technology, it can generate output
that's plausible-sounding but factually incorrect. We recommend that you
validate all output from Gemini before you use it. For more
information, see
Gemini for Google Cloud and responsible AI .
Encryption of prompts
When you submit prompts to Gemini, your data is encrypted
in-transit as input to the underlying model in Gemini. For more
information on Gemini data encryption, see
Default encryption at rest
and
Encryption in transit .
Program data generated from Gemini
Gemini is trained on first-party Google Cloud
code as well as selected third-party code. You're responsible for the
security, testing, and effectiveness of your code, including any code
completion, generation, or analysis that Gemini offers you.
Gemini also provides source citations when suggestions directly
quote at length from a source to help you comply with any license requirements.
Because responses in Gemini are generated from a model that's
trained on many lines of code, you should exercise the same care with
Gemini-provided code that you would with any other code. Make
sure that you test the code properly and check for security vulnerabilities,
incompatibilities, and other potential issues.
What's next
Learn about the security, privacy, and compliance of
Gemini Code Assist .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
