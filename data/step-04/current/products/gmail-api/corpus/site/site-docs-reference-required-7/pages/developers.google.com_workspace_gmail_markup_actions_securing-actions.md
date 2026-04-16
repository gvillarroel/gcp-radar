---
title: "Securing Actions \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/actions/securing-actions
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/actions/actions-overview
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/actions/securing-actions
  title: "Securing Actions \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Guides
Send feedback
Securing Actions
Stay organized with collections
Save and categorize content based on your preferences.
This page document how Gmail secures the delivery and execution of actions.
Security Measures enforced by Google
The following conditions must hold for schemas embedded in email:
Registration : Sender must Register with Google .
SPF or DKIM : Emails with schema markup must arrive from SPF or DKIM authenticated domains
Additional Measures required for In-Line Actions
Extra security measures are required or encouraged to secure inline actions:
HTTPS : All actions must be handled via HTTPS URLs. Hosts must have valid SSL server certificates installed.
Access Tokens : It is encouraged that senders using actions embed Limited-Use Access Tokens in the action URLs, to protected themselves against Replay Attacks . This is a generally good practice for any URL embedded in webpages or emails that might have any side-effects when invoked.
Bearer Authorization : It is encouraged that services handling action requests verify the Http "Authorization" header in the HTTPS request. That header will contain a "Bearer Token" string, proving that the source of the request is google.com, and that the request is intended for the specified service. Services should use the Google-provided open source library to Verify the Bearer Token .
Note: Bearer tokens in authorization headers are not sent by default. If you
require a bearer token token to be sent, request it when
registering with Google .
Securing Edge-Case Email Access Patterns
There are various variants of email forwarding and access patterns that Gmail handles in order to secure actions in emails. These following measurements are performed IN ADDITION to the measures above:
Access Pattern
Additional Security Measures
Manual Forwarding - User opens an email and forwards it to more recipients
Such forwarding always breaks DKIM signatures, and the sender is no longer registered with the service. Actions in the email are rejected .
Auto Forwarding to Gmail - User creates a forwarding rule on mailbox user@acme.com to her gmail mailbox.
Gmail verifies that the user can send as user@acme.com (user sets this up manually). Actions in the email are accepted .
Gmail POP fetching - User gives Gmail the password for user@acme.com and Gmail fetchers all emails there via POP to the Gmail inbox.
DKIM signatures and content integrity is preserved. User has proven access to user@acme.com. Actions in the email are accepted .
Accessing Gmail emails with 3rd party applications - Gmail user uses a 3rd party application (e.g. Outlook or Thunderbird) to access Gmail emails, or forwards her Gmail emails to another email provider.
3rd party application or service may use embedded information. However, it won't be able to produce bearer authentication tokens that match Google's, giving senders the opportunity to reject such action requests. Senders may choose whether they reject or accept actions without bearer tokens, depending on the sensitivity of the action. Note that the bearer authorization token is created using standard open source technologies making it possible to all mail providers and apps to produce them using their own keys.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
