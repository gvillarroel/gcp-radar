---
title: "Control Network Access to Gemini Code Assist with User Domain Restrictions\
  \ \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/codeassist/network-access
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/codeassist/network-access
  title: "Control Network Access to Gemini Code Assist with User Domain Restrictions\
    \ \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
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
Control Network Access to Gemini Code Assist with User Domain Restrictions
Stay organized with collections
Save and categorize content based on your preferences.
This document provides instructions for network administrators to configure
their networks to restrict access to Gemini Code Assist based on
user domains. This feature lets organizations control which users within
their network can utilize Gemini Code Assist, enhancing security
and preventing unauthorized access.
Overview
You can configure Gemini Code Assist to enforce user domain
restrictions using the custom HTTP header X-GeminiCodeAssist-Allowed-Domains .
This header specifies a list of allowed domains, and the
Gemini Code Assist backend only processes requests from users
whose authenticated domain matches one of the allowed domains.
You can use a Person-in-the-Middle (PITM) proxy approach to insert this header
into requests made to Gemini Code Assist that originate within
your network.
Configure a proxy in your IDE
To configure a proxy in your IDE, follow these steps:
VS Code
Navigate to File > Settings (for Windows), or Code
> Settings > Settings (for macOS).
In the User tab, navigate to Application > Proxy .
In the box under Proxy , enter the address of your proxy server. For
example http://localhost:3128 .
Optional: To configure Gemini Code Assist to ignore
certificate errors, under Proxy Strict SSL , select or deselect the
checkbox. This setting applies to all profiles.
IntelliJ
Navigate to File > Settings (for Windows) or IntelliJ
IDEA > Settings (for macOS).
Navigate to Appearance & Behavior > System Settings
> HTTP Proxy .
Select Manual proxy configuration , and then select HTTP .
In the Host name field, enter the hostname of your proxy server.
In the Port number field, enter the port number of your proxy server.
Optional: To configure Gemini Code Assist to ignore
certificate errors, in the sidebar, click Tools > Server
Certificates and then select or deselect Accept non-trusted certificates
automatically .
Configure PITM proxy
To configure your PITM proxy, follow these steps:
Make sure your network utilizes a PITM proxy capable of intercepting and
modifying HTTPS traffic.
Configure the proxy to intercept all outgoing requests to the
Gemini Code Assist endpoint
( https://cloudcode-pa.googleapis.com ). Don't use wildcards ( * ) when you
specify the Gemini Code Assist endpoint.
Configure the proxy to inject the X-GeminiCodeAssist-Allowed-Domains
header into each request. The header should contain a comma-separated list
of allowed domains (e.g., example.com , yourcompany.net ).
Make sure that domain names are separated by commas and
don't include the @ symbol.
If headers aren't resolved into at least one valid domain, restrictions
won't apply. For example, an empty header won't apply any restrictions.
domain won't apply any restrictions as it isn't a valid domain name.
When a user tries to access Gemini Code Assist from a domain not
included in the header list, they see a message telling them that they're
restricted from using Gemini Code Assist on their domain by their
administrator.
SSL/TLS interception
If your proxy needs to decrypt HTTPS traffic to inject the header, make sure
it's configured for SSL/TLS interception. This typically involves:
Generating a certificate for the proxy.
Installing the proxy's certificate on user devices to establish trust and
avoid certificate errors.
Header validation
Gemini Code Assist automatically validates the
X-GeminiCodeAssist-Allowed-Domains header and enforces the restrictions.
If the header doesn't resolve to at least one valid domain, the validation
won't be performed.
If the domain associated with the user's authentication isn't in the allowed
list, the request is rejected. For example if the user logs in with a gmail
account and only example.com is on the allowed list, the request is rejected.
What's next
To learn more about blocking access to consumer accounts, see
Block access to consumer accounts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
