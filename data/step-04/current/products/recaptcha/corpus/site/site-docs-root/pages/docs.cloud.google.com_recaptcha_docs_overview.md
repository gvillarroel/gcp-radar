---
title: "reCAPTCHA overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/overview
  title: "reCAPTCHA overview \_|\_ Google Cloud Documentation"
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
reCAPTCHA overview
Stay organized with collections
Save and categorize content based on your preferences.
Google has been defending millions of sites with reCAPTCHA for
over a decade. reCAPTCHA uses advanced risk analysis techniques
to detect fraud. With reCAPTCHA, you can protect your websites or mobile applications
from spam and abuse, and detect other types of fraudulent activities, such as
credential stuffing, account takeover (ATO), and automated account creation.
reCAPTCHA offers enhanced detection with more granular scores,
reason codes for risky
events, mobile app SDKs, password leak detection, Multi-factor
authentication (MFA), and the ability to tune your site-specific model to
protect enterprise businesses.
reCAPTCHA tiers
reCAPTCHA offers three usage-based tiers: Enterprise, Premium,
and Essentials.
To learn about the features that are available in these tiers, see
Compare features between reCAPTCHA tiers .
How reCAPTCHA works
When reCAPTCHA is deployed in your environment, it interacts
with your backend and client (web pages or mobile applications).
When an end user visits a web page or uses a mobile application,
the following events are triggered in a sequence:
The client loads the web page from the backend or launches the mobile application.
The web page or mobile application initializes the reCAPTCHA
JavaScript API or mobile SDK, which begins collecting signals.
When the end user triggers an action protected by reCAPTCHA
such as login, the reCAPTCHA JavaScript API or the mobile SDK
in the client requests a verdict from reCAPTCHA.
reCAPTCHA returns an encrypted reCAPTCHA token
to the client for later use.
The client sends the encrypted reCAPTCHA token to the backend
for assessment.
The backend sends the create assessment ( assessments.create )
request and the encrypted reCAPTCHA token to reCAPTCHA.
reCAPTCHA returns a verdict to the backend based on the risk evaluated for
this request. This verdict consists of scores from 0.0 through 1.0 and reason codes.
Depending on the verdict, you (as the developer) can determine the next steps
to take for that specific user request or action.
The following sequence diagram shows the graphical representation of the
reCAPTCHA workflow:
What's next
Test reCAPTCHA in a demo website .
Get started with reCAPTCHA .
To get started with plugins, find the legacy reCAPTCHA secret key .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
