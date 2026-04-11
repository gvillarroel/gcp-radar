---
title: "Encrypt & decrypt data \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/cse/guides/encrypt-and-decrypt-data
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/cse/guides/encrypt-and-decrypt-data
  title: "Encrypt & decrypt data \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Encrypt & decrypt data
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide outlines the process of encrypting and decrypting data using the Google Workspace Client-side Encryption API, leveraging a Key Access and Control List Service (KACLS).
During encryption, the KACLS validates the user, encrypts the data encryption key (DEK) and other sensitive data, logs the operation, and returns an opaque binary object containing the encrypted DEK to Google Workspace for storage.
For decryption, the KACLS validates the user, decrypts the DEK and associated data, verifies the resource name, performs a perimeter check, logs the operation, and returns the unwrapped DEK to Google Workspace.
Before sharing encrypted files, ensure to allowlist any Identity Provider (IdP) services used by the intended recipients, which typically involves obtaining IdP details from their publicly available .well-known file or contacting their Google Workspace administrator.
This guide describes how encryption and decryption work using the
Google Workspace Client-side Encryption API.
You must add to an allowlist any Identity Provider (IdP) services used by users
sharing encrypted files. You can usually find the required IdP details in their
publicly-available .well-known file; otherwise, contact the organization's
Google Workspace administrator for their IdP details.
Encrypt data
When a Google Workspace user requests to save or store client-side
encrypted (CSE) data, Google Workspace sends a
wrap request to your Key Access Control List
Service (KACLS) endpoint URL for encryption. In addition to optional security
checks, such as perimeter and JWT claim-based checks, your KACLS must perform
the following steps:
Validate the requesting user.
Validate both the authentication
token and authorization
token .
Check that authorization and authentication tokens are for the same user by
doing a case-insensitive match on the email claims.
When the authentication token contains the optional google_email claim,
it must be compared against the email claim in the authorization token
using a case-insensitive approach. Don't use the email claim within the
authentication token for this comparison.
In scenarios where the authentication token lacks the optional
google_email claim, the email claim within the authentication token
should be compared with the email claim in the authorization token,
using a case-insensitive method.
In scenarios where Google issues an authorization token for an email not
associated with a Google Account, the email_type claim must be present.
This forms a crucial part of the Guest Access feature, providing valuable
information for KACLS to enforce additional security measures on external
users.
Some examples of how a KACLS can use this information include:
To impose additional logging requirements.
To restrict the authentication token issuer to a dedicated Guest IdP.
To require additional claims on the authentication token.
If a customer has not configured Guest Access, then all requests
where email_type is set to google-visitor or customer-idp can be
rejected. Requests with an email_type of google or with an unset
email_type should continue to be accepted.
When the authentication token contains the optional delegated_to claim,
it must also contain the resource_name claim, and these two claims must
be compared against the delegated_to and resource_name claims in the
authorization token. The delegated_to claims should be compared using a
case-insensitive approach, and the resource_name in the tokens should
match the resource_name of the operation.
Check that the role claim in the authorization token is writer or
upgrader .
Check that the kacls_url claim in the authorization token matches the
current KACLS URL. This check allows detection of potential
man-in-the-middle servers configured by insiders or rogue domain
administrators.
Perform a perimeter check using both authentication and authorization
claims.
Encrypt the following parts using an authenticated encryption algorithm:
Data Encryption Key (DEK)
The resource_name and perimeter_id values from the authorization token
Any additional sensitive data
Log the operation, including the user originating it, the resource_name and
the reason passed in the request.
Return an opaque binary object to be stored by Google Workspace
alongside the encrypted object and sent as-is in any subsequent key
unwrapping operation. Or, serve a structured error
reply .
The binary object should contain the only copy of the encrypted DEK,
implementation specific data can be stored in it.
Note: Do not store the DEK in your KACLS system. Instead, encrypt it and return
it in the wrapped_key object to prevent discrepancies for the lifetime of
the file. Google doesn't send deletion requests to the KACLS when objects are
deleted.
Decrypt data
When a Google Workspace user requests to open client-side encrypted
(CSE) data, Google Workspace sends an
unwrap request to your KACLS endpoint URL
for decryption. In addition to optional security checks, such as perimeter and
JWT claim-based checks, your KACLS must perform the following steps:
Validate the requesting user.
Validate both the authentication
token and authorization
token .
Check that authorization and authentication tokens are for the same user by
doing a case-insensitive match on the email claims.
When the authentication token contains the optional google_email claim,
it must be compared against the email claim in the authorization token
using a case-insensitive approach. Don't use the email claim within the
authentication token for this comparison.
In scenarios where the authentication token lacks the optional
google_email claim, the email claim within the authentication token
should be compared with the email claim in the authorization token,
using a case-insensitive method.
In scenarios where Google issues an authorization token for an email not
associated with a Google Account, the email_type claim must be present.
This forms a crucial part of the Guest Access feature, providing valuable
information for KACLS to enforce additional security measures on external
users.
Some examples of how a KACLS can use this information include:
To impose additional logging requirements.
To restrict the authentication token issuer to a dedicated Guest IdP.
To require additional claims on the authentication token.
If a customer has not configured Guest Access, then all requests
where email_type is set to google-visitor or customer-idp can be
rejected. Requests with an email_type of google or with an unset
email_type should continue to be accepted.
When the authentication token contains the optional delegated_to claim,
it must also contain the resource_name claim, and these two claims must
be compared against the delegated_to and resource_name claims in the
authorization token. The delegated_to claims should be compared using a
case-insensitive approach, and the resource_name in the tokens should
match the resource_name of the operation.
Check that the role claim in the authorization token is reader or
writer .
Check that the kacls_url claim in the authorization token matches the
current KACLS URL. This allows detection of potential man-in-the-middle
servers configured by insiders or rogue domain administrators.
Decrypt the following parts using an authenticated encryption algorithm:
Data Encryption Key (DEK)
The resource_name and perimeter_id values from the authorization token
Any additional sensitive data
Check that the resource_name in the authorization token and decrypted blob
match.
Perform a perimeter check using both authentication and authorization claims.
Log the operation, including the user originating it, the resource_name and
the reason passed in the request.
Return the unwrapped DEK or a structured error
reply .
Note: To decrypt Google Takeout
requests, see privilegedunwrap .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["When users encrypt data, the KACLS must validate user authentication and authorization tokens, ensuring matching email claims and specific role and URL claims. It encrypts the Data Encryption Key (DEK), `resource_name`, `perimeter_id`, and other sensitive data, logs the operation, and returns an encrypted object. For decryption, the process mirrors encryption, validating tokens, decrypting the data, verifying `resource_name`, performing perimeter checks, logging, and returning the DEK. Guest access requires extra checks. Identity provider services must be allowlisted.\n"]]
