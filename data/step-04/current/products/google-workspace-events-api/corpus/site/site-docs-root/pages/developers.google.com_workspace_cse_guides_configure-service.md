---
title: "Configure your service \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/cse/guides/configure-service
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/cse/guides/configure-service
  title: "Configure your service \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Configure your service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Your Key Access Control List Service (KACLS) is configured independently by you, allowing you to control access to encryption keys for Google Workspace Client-side encryption (CSE).
KACLS requires specific operational settings like HTTPS with TLS 1.2 or later, CORS handling for Google's authorized endpoint, and a recommended latency of under 200ms for most requests.
Authorization settings need to be configured for Google Workspace applications like Drive, Meet, Calendar, and Gmail, enabling validation of Google-issued authorization tokens during CSE.
Perimeter settings offer optional but powerful access control by allowing or blocking users based on criteria like domains, user roles, time, and location, enhancing security for encryption keys.
Identity Provider settings are crucial for non-Google Identity Providers, requiring you to specify methods for validating tokens and the issuer and audience values used by each provider.
Your Key Access Control List Service (KACLS) is configured without Google's
involvement. Below are details about common settings and best practices for
configuring your service.
Operational settings
The API should only be available over HTTPS with TLS 1.2 or later with a valid
X.509 certificate.
The API server should handle
CORS to access
Google's authorized endpoint:
https://client-side-encryption.google.com .
We recommend a maximum latency of 200 ms for 99% of requests.
Authorization provider settings
Use the settings below to validate the Google-issued
authorization tokens during
client-side encryption (CSE):
Google Workspace application context
JWKS endpoint URL
Authorization token issuer
Authorization token audience
Google Drive and collaborative content creation tools,
like Docs and Sheets
https://www.googleapis.com/service_accounts/v1/jwk/gsuitecse-tokenissuer-drive@system.gserviceaccount.com
gsuitecse-tokenissuer-drive@system.gserviceaccount.com
cse-authorization
Meet CSE
https://www.googleapis.com/service_accounts/v1/jwk/gsuitecse-tokenissuer-meet@system.gserviceaccount.com
gsuitecse-tokenissuer-meet@system.gserviceaccount.com
cse-authorization
Calendar CSE
https://www.googleapis.com/service_accounts/v1/jwk/gsuitecse-tokenissuer-calendar@system.gserviceaccount.com
gsuitecse-tokenissuer-calendar@system.gserviceaccount.com
cse-authorization
Gmail CSE
https://www.googleapis.com/service_accounts/v1/jwk/gsuitecse-tokenissuer-gmail@system.gserviceaccount.com
gsuitecse-tokenissuer-gmail@system.gserviceaccount.com
cse-authorization
KACLS migration
https://www.googleapis.com/service_accounts/v1/jwk/apps-security-cse-kaclscommunication@system.gserviceaccount.com
apps-security-cse-kaclscommunication@system.gserviceaccount.com
cse-authorization
Identity Provider settings
The settings below are required for each non-Google Identity Provider (IdP) your
service works with:
Method to validate tokens. Tokens are typically validated by the URL to a
JSON Web Key Set (JWKS) file, but could also be the public keys themselves.
Issuer and audience values: The iss (issuer) and aud (audience) field
values used by each Identity Provider.
Perimeter settings
The perimeter concept in Google Workspace Client-side encryption (CSE)
is used to provide access control to the encryption keys using the KACLS. The
perimeters are optional additional checks performed on the authentication and
authorization tokens within the KACLS.
Perimeters can be used to:
Only allow users in allowlisted domains to decrypt keys.
Blocklist users, such as Google Workspace administrators.
Provide advanced restrictions. For example:
Time-based restrictions for on-call employees or people on vacation
Geolocation restrictions to prevent access from specific locations or
networks
User role- or type-based access, as asserted by an Identity Provider
Note: The takeout perimeter is used when a Google Workspace customer
sends a Google Takeout request with
privilegedunwrap .
The takeout perimeter enables KACLS unwrapping, bypassing the normal
Google Workspace ACL, so membership should be restricted to trusted
individuals. We recommend that the takeout perimeter use an IdP requiring
two-factor authentication (2FA).
Verify your KACLS configuration
To check whether your KACLS is active and configured correctly, send a
status request. Internal self checks,
like KMS accessibility or logging system health, can also be performed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["KACLS configuration requires the API to use HTTPS with TLS 1.2 or later, handle CORS for `https://client-side-encryption.google.com`, and maintain a maximum 200ms latency. It uses Google-issued authorization tokens, validated via JWKS endpoints specific to Google Workspace applications. Non-Google Identity Provider settings require token validation methods, issuer, and audience values. Perimeters, an optional access control, can allow or block access based on domain, user, time, or location. Verification is done via a status request.\n"]]
