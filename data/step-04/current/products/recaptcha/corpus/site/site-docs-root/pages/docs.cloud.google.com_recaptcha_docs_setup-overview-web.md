---
title: "Setup overview for websites \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/setup-overview-web
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/setup-overview-web
  title: "Setup overview for websites \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Guides
Send feedback
Setup overview for websites
Stay organized with collections
Save and categorize content based on your preferences.
This document provides a high-level overview of setting up reCAPTCHA
on websites.
Setting up reCAPTCHA on a website involves the following steps:
Create a reCAPTCHA key for your website (also known as key).
The key is required to collect information about the user actions and send it to reCAPTCHA.
Choose the key type that is best for your use case .
Create a key for your website .
Integrate with your website frontend:
Install the key that you created on your web pages by using
the reCAPTCHA JavaScript API.
Install score-based keys .
Install checkbox keys .
Install policy-based challenge keys .
Integrate with your backend:
To verify the token sent by reCAPTCHA and assess the risk,
create assessments
from your backend server.
Interpret the assessment scores and the associated risk ,
and define how to handle users, for example, allow the user to log in only
when the score is high and the risk is low.
Optional: Configure an IP address allowlist
Add trusted IP addresses to an allowlist to exclude them from
reCAPTCHA enforcement.
What's next
Choose the reCAPTCHA key type that is best for your use case .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
