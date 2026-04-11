---
title: "Understand the implementation of reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/implementation-workflow
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/implementation-workflow
  title: "Understand the implementation of reCAPTCHA \_|\_ Google Cloud Documentation"
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
Understand the implementation of reCAPTCHA
Stay organized with collections
Save and categorize content based on your preferences.
This document shows the implementation path of
reCAPTCHA to protect your websites, mobile applications, APIs,
or content served by a web application firewall (WAF).
reCAPTCHA workflow for websites
The following illustration provides a high-level overview of the implementation
of reCAPTCHA on websites:
Setting up reCAPTCHA on websites involves the following steps:
Create reCAPTCHA keys: Choose the reCAPTCHA key type that is best for
your use case and create keys.
Integrate reCAPTCHA with your website: To collect information
about the user actions and send it to reCAPTCHA, install
the keys that you created on your web pages by using the reCAPTCHA JavaScript API.
Integrate reCAPTCHA with your backend: From your backend
server, create assessments to verify the token sent by
reCAPTCHA and assess the risk. Interpret the assessment scores
and the associated risk, and define how to handle users—for example, allow
the user to sign in only when the score is high, which indicates low risk.
After you set up reCAPTCHA, we recommend that you annotate the
assessments whenever you have more information about the user interactions.
This helps reCAPTCHA to tune your site-specific model and improve
the risk detection.
You can also set up additional security to protect user accounts and payment
workflows on your websites.
For instructions, see
Set up reCAPTCHA on websites .
reCAPTCHA workflow for mobile applications
The following illustration provides a high-level overview of the implementation
of reCAPTCHA on mobile applications:
Setting up reCAPTCHA on mobile applications involves the
following steps:
Create reCAPTCHA keys: Create score-based keys for your mobile applications.
Integrate with your mobile application: To collect information about the user actions
and send it to reCAPTCHA, install the keys that you created on
your mobile application by using the reCAPTCHA SDK.
Integrate with your backend: From your backend server, create assessments to
verify the token sent by reCAPTCHA and assess the risk.
Interpret the assessment scores and the associated risk, and define how to
handle users—for example, allow the user to sign in only when the score
is high, which indicates low risk.
After you set up reCAPTCHA, we recommend that you annotate the
assessments whenever you have more information about the user interactions.
This helps reCAPTCHA to tune your site-specific model and improve
the risk detection.
You can also set up additional security to protect user accounts on your
mobile applications.
For instructions, see
Set up reCAPTCHA on mobile applications .
reCAPTCHA workflow for WAF
The following illustration provides a high-level overview of the implementation
of reCAPTCHA at the WAF layer:
Setting up reCAPTCHA at the WAF layer involves the
following steps:
Select WAF features: Understand the WAF features and choose one or more
WAF features that suit your use case.
Integrate with your website or mobile application: Create reCAPTCHA
keys for WAF. To collect information about the user actions and send it to
reCAPTCHA, install the keys that you created on your web pages
by using the reCAPTCHA JavaScript API or on mobile applications by
using the reCAPTCHA SDK.
Integrate with your WAF service provider: To let your WAF service provider
manage the incoming user requests, configure policies based on the scores
returned by reCAPTCHA.
After you set up reCAPTCHA, we recommend that you annotate the
assessments whenever you have more information about the user interactions.
This helps reCAPTCHA to tune your site-specific model and improve
the risk detection.
For instructions, see
Set up reCAPTCHA at the WAF layer .
reCAPTCHA express workflow for application servers
The following illustration provides a high-level overview of the implementation
of reCAPTCHA express on application servers.
Setting up reCAPTCHA express on application servers involves the
following steps:
Create express keys for your application server.
Integrate with your backend: From your backend server, create assessments to
assess the risk.
Interpret the assessment scores and the associated risk, and define how to
handle users—for example, allow the user to sign in only when the score
is high, which indicates low risk.
After you set up reCAPTCHA, we recommend that you annotate the
assessments whenever you have more information about the user interactions.
This helps reCAPTCHA to tune your site-specific model and improve
the risk detection.
For instructions, see
Set up reCAPTCHA express on application servers .
What's next
Set up reCAPTCHA on websites
Set up reCAPTCHA on mobile applications
Set up reCAPTCHA at the WAF layer
Set up reCAPTCHA express on application servers
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
