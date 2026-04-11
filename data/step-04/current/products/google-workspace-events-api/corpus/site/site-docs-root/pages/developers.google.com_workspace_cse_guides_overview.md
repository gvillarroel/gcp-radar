---
title: "Build a custom key service for client-side encryption \_|\_ Google Workspace\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/workspace/cse/guides/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/cse/guides/overview
  title: "Build a custom key service for client-side encryption \_|\_ Google Workspace\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Build a custom key service for client-side encryption
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace Client-side Encryption (CSE) allows you to encrypt your organization's data with your own keys, preventing Google servers from accessing or decrypting it.
This API enables you to manage the encryption keys via an external key service, giving you control over data access.
CSE encrypts files in the user's browser before they are stored in Google Drive, ensuring only authorized users with access to your external key service can decrypt them.
When a file is encrypted, Google Workspace generates a Data Encryption Key (DEK), which is then encrypted by your external key service and stored with the encrypted data.
To get started, you can configure your external key service and learn how to encrypt and decrypt data using the provided guides.
You can use your own encryption keys to encrypt your organization's data,
instead of using the encryption that Google Workspace provides. With
Google Workspace Client-side Encryption (CSE), file encryption is
handled in the client's browser before it's stored in Google Drive's
cloud-based storage. That way, Google servers can't access your encryption keys
and, therefore, can't decrypt your data. For more details, see About client-side
encryption .
This API lets you control the top-level encryption keys that protect your data
with a custom external key service. After you create an external key service
with this API, Google Workspace administrators can connect to it and
enable CSE for their users.
Important terminology
Below is a list of common terms used in the Google Workspace Client-side Encryption API:
Client-side encryption (CSE)
Encryption that's handled in the client's browser before it's stored in
cloud-based storage. This protects the file from being read by the storage
provider. Learn
more
Key Access Control List Service (KACLS)
Your external key service that uses this API to control access to encryption
keys stored in an external system.
Identity Provider (IdP)
The service that authenticates users before they can encrypt files or access
encrypted files.
Encryption & decryption
Data Encryption Key (DEK)
The key used by Google Workspace in the browser client to encrypt the
data itself.
Key Encryption Key (KEK)
A key from your service used to encrypt a Data Encryption Key (DEK).
Access control
Access Control List (ACL)
A list of users or groups that can open or read a file.
Authentication JSON Web Token (JWT)
Bearer token ( JWT: RFC 7519 ) issued by
the identity provider (IdP) to attest a user's identity.
Authorization JSON Web Token (JWT)
Bearer token ( JWT: RFC 7519 ) issued by
Google to verify that the caller is authorized to encrypt or decrypt a
resource.
JSON Web Key Set (JWKS)
A read-only endpoint URL that points to a list of public keys used to verify
JSON Web Tokens (JWT).
Perimeter
Additional checks performed on the authentication and authorization tokens
within the KACLS for access control.
Client-side encryption process
After an administrator enables CSE for their organization, users for whom CSE is
enabled can choose to create encrypted documents using the
Google Workspace collaborative content creation tools, like
Docs and Sheets, or encrypt files they upload to
Drive, such as PDFs.
After the user encrypts a document or file:
Google Workspace generates a DEK in the client browser to encrypt the
content.
Google Workspace sends the DEK and authentication tokens to your
third-party KACLS for encryption, using a URL you provide to the
Google Workspace organization's administrator.
Your KACLS uses this API to encrypt the DEK, then sends the obfuscated,
encrypted DEK back to Google Workspace.
Google Workspace stores the obfuscated, encrypted data in the cloud.
Only users with access to your KACLS are able to access the data.
For more details, see Encrypt and decrypt
files .
Next steps
Learn how to configure your
service .
Learn how to encrypt & decrypt
data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Google Workspace Client-side Encryption (CSE) allows users to encrypt data in their browser before cloud storage. This is achieved by using your own external Key Access Control List Service (KACLS). Google Workspace generates a Data Encryption Key (DEK) and sends it to your KACLS for encryption with a Key Encryption Key (KEK). Your service then returns the encrypted DEK to Google Workspace. This ensures that only users with KACLS access can decrypt the stored data.\n"]]
