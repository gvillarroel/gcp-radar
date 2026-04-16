---
title: "How Gemini Code Assist Standard and Enterprise use your data \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/gemini-code-assist/docs/data-governance
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/gemini-code-assist/docs/overview
source_metadata:
  url: https://developers.google.com/gemini-code-assist/docs/data-governance
  title: "How Gemini Code Assist Standard and Enterprise use your data \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Gemini Code Assist
Guides
How Gemini Code Assist Standard and Enterprise use your data
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Gemini Code Assist Standard and Enterprise editions comply with Google's privacy commitment for generative AI.
Google Cloud handles your prompts when using Gemini Code Assist in accordance with their terms of service and Cloud Data Processing Addendum.
Your prompts and responses are not used to train Gemini Code Assist Standard and Enterprise models.
Prompts submitted to Gemini are encrypted in-transit.
You are responsible for the security, testing, and effectiveness of your code, including any code provided by Gemini.
This document describes how Gemini Code Assist Standard and
Enterprise editions, which offer AI-powered assistance, conform to
Google's privacy commitment
with generative AI technologies. When you use Gemini Code Assist
Standard or Enterprise editions in a development environment, Google Cloud
handles your prompts in accordance with our terms of
service and Cloud Data Processing Addendum .
For more information about Gemini Code Assist Standard and
Enterprise editions, see the
Gemini Code Assist overview .
Google's privacy commitment
Google was one of the first in the industry to publish an AI/ML privacy
commitment ,
which outlines our belief that customers should have the highest level of
security and control over their data that's stored in the cloud. That commitment
extends to Gemini Code Assist Standard and Enterprise edition
generative AI products. Google helps ensure that its teams are following these
commitments through robust data governance practices, which include reviews of
the data that Google Cloud uses in the development of its products. You
can find more details about how Google processes data in
Customer Data Processing Addendum (CDPA)
or the data processing agreement applicable to your Google Cloud service.
Data you submit and receive
The questions that you ask Gemini, including any input information or
code that you submit to Gemini to analyze or complete, are called
prompts . The answers or code completions that you receive from Gemini
are called responses .
Gemini Code Assist Standard and Enterprise editions don't use
your prompts or its responses as data to train its models. Some features are
only available through the
Gemini for Google Cloud Trusted Tester Program ,
which lets you optionally share data, but the data is used for product
improvements, not for training Gemini models.
Code customization in
Gemini Code Assist Enterprise lets you get code suggestions based
on your organization's private codebase directly from
Gemini Code Assist. When you use code customization, we securely
access and store your private code. This access and storage is essential for
delivering the code customization service you've requested. To configure and use
code customization, see
Configure and use Gemini Code Assist code customization .
Because Gemini is an evolving technology, it can generate output that's
plausible-sounding but factually incorrect. We recommend that you validate all
output from Gemini before you use it. For more information, see
Gemini Code Assist and responsible AI .
Encryption of prompts
When you submit prompts to Gemini, your data is encrypted in-transit as
input to the underlying model in Gemini. For more information on
Gemini data encryption, see
Default encryption at rest
and Encryption in transit .
Program data generated from Gemini
Gemini is trained on first-party Google Cloud code as well as
selected third-party code. You're responsible for the security, testing, and
effectiveness of your code, including any code completion, generation, or
analysis that Gemini offers you.
Gemini also provides source citations when suggestions directly quote
at length from a source to help you comply with any license requirements.
Because responses in Gemini are generated from a model that's trained
on many lines of code, you should exercise the same care with
Gemini-provided code that you would with any other code. Make sure that
you test the code properly and check for security vulnerabilities,
incompatibilities, and other potential issues.
What's next
Learn about the
security, privacy, and compliance of Gemini Code Assist .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-09 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-09 UTC."],[],[]]
