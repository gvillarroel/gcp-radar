---
title: "Secure your app with minimum TLS (flexible environment) \_|\_ App Engine flexible\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls
  title: "Secure your app with minimum TLS (flexible environment) \_|\_ App Engine\
    \ flexible environment \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
Secure your app with minimum TLS (flexible environment)
Stay organized with collections
Save and categorize content based on your preferences.
To increase security, starting in March 2025, support for Transport Layer Security (TLS) version 1.1 and earlier is deprecated. Update your application settings in the App Engine flexible environment to use TLS version 1.2 and later, along with a corresponding secure set of cipher suites.
When you select the latest TLS version, App Engine automatically
blocks insecure traffic, without requiring you to
configure a
global external Application Load Balancer to route requests to your application.
To upgrade your existing applications to use
only TLS version 1.2 and later, follow the instructions in this
guide.
Note: If you update your application settings to enforce TLS version 1.2 and later,
App Engine automatically rejects incoming requests that attempt to use older,
less secure TLS versions 1.1 and earlier. Before March 2026, this rejection
causes a 400 Bad Request - The request was malformed error, after a successful
TLS handshake, meaning the connection is established, but the request itself is
denied. External SSL-checking sites might only verify a successful TLS
handshake, and incorrectly imply that TLS version 1.1 and earlier are still
supported. After March 2026, App Engine ensures stricter security compliance by
preventing the TLS handshake itself for connections using TLS version 1.1 and earlier.
Supported TLS versions and cipher suites
The security of TLS connections depends on the negotiated cipher suite, a
combination of cryptographic algorithms. These cipher suites are identified by
IANA values, as detailed in the following table:
TLS version
IANA value
Cipher suite
TLS v1.3
0x1301
TLS_AES_128_GCM_SHA256
0x1302
TLS_AES_256_GCM_SHA384
0x1303
TLS_CHACHA20_POLY1305_SHA256
TLS v1.2
0xCCA9
TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
0xCCA8
TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
0xC02B
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
0xC02F
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
0xC02C
TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
0xC030
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
0xC009
TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
0xC013
TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
0xC00A
TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
0xC014
TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
If you need to use a different or a less restrictive cipher suite, we recommend
that you use a global external Application Load Balancer. For more information, see Set up a classic Application Load Balancer with App Engine and SSL policies for SSL and TLS protocols in the Cloud Load Balancing documentation.
Update the TLS versions allowed for your app
You can update the TLS version using the Google Cloud console or the
gcloud CLI. For tool-specific steps, click the tab for your preferred
tool:
Console
In the Google Cloud console, go to the App Engine Settings page:
Go to Settings
In the Application settings tab, click Edit application settings .
From the SSL Policy list, select TLS 1.2+ (Modern ciphers) .
This selection only allows TLS version 1.2 and later, with modern cipher
suites. If you want to allow less secure TLS versions,
such as 1.0 and later, select TLS 1.0+ (Obsolete) . However, we
recommend that you update your applications to use the latest supported TLS version.
Click Save .
gcloud
When you create or update your application, use the --ssl-policy flag to
specify the minimum permitted TLS version.
To set a minimum TLS version while creating your app:
gcloud app create --ssl-policy= TLS_VERSION
To set a minimum TLS version while updating your app:
gcloud app update --ssl-policy= TLS_VERSION
Replace TLS_VERSION with TLS_VERSION_1_2 . This only allows TLS version
1.2 and later, with modern cipher suites. If you want to allow less secure TLS version,
such as, 1.0 and later, replace TLS_VERSION with TLS_VERSION_1_0 . However, we recommend that you update your
applications to use the latest supported TLS version.
Disable custom TLS versions and ciphers
If you update your application settings to use TLS version 1.2 and later, App Engine automatically blocks all insecure traffic using TLS version 1.1 and earlier.
If you use
Cloud Load Balancing and serverless NEGS
to route traffic to your App Engine application, you can disable a TLS
version or cipher by defining an SSL security policy . Specify the TLS versions and ciphers that HTTPS or SSL
connections can use.
What's next
To verify and manage SSL certificates, see Secure custom domains with SSL .
To enable Cloud Load Balancing to manage incoming requests to your custom domain, see
Migrate App Engine custom domain to Cloud Load Balancing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
