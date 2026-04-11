---
title: "Certificate Manager overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/overview
  title: "Certificate Manager overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Manager
Guides
Send feedback
Certificate Manager overview
Stay organized with collections
Save and categorize content based on your preferences.
Certificate Manager simplifies the acquisition, deployment, and
management of Transport Layer Security (TLS) certificates.
Certificate Manager supports deployment of global and regional
certificates on Google Cloud load balancers, regional certificates on
Secure Web Proxy proxies, and global certificates
on Media CDN .
Supported load balancers
Google Cloud load balancers that refer to a target HTTPS proxy or a target
SSL proxy ( TargetSslProxy ) use TLS certificates to encrypt information sent
over the network.
To use Certificate Manager, your load balancer must be compatible
with the corresponding Network Service Tier . For
a comprehensive breakdown of load balancer types and their respective network
service tier support, see Summary of Google Cloud load
balancers .
Certificate Manager supports the following load balancer
resources:
Target HTTPS proxies used by Application Load Balancers
Target SSL proxies used by proxy Network Load Balancers
Global external Application Load Balancer
Classic Application Load Balancer
Regional external Application Load Balancer
Regional internal Application Load Balancer
Cross-region internal Application Load Balancer
Global external proxy Network Load Balancer
Classic proxy Network Load Balancer
For more information about the differences between target HTTPS and target SSL
proxy types, see Target proxies .
Supported TLS certificates
Certificate Manager supports the following types of TLS
certificates:
Google-managed certificates : certificates that Google Cloud
obtains and manages for you. Using Certificate Manager, you
can automatically issue and renew Google-managed certificates. If you want
to use your own trust chain rather than rely on public
certificate authorities (CAs) to issue your certificates, you can configure
Certificate Manager to use a CA
pool from the
Certificate Authority Service as the certificate issuer instead.
Self-managed certificates : certificates that you obtain, provision, and
renew yourself. You manually upload the certificates to
Certificate Manager and manage them. You can use certificates
issued by third-party CAs, or CAs you trust, or your own self-signed
certificates .
For more information about the supported certificates, see
Certificates .
Benefits
Certificate Manager offers the following benefits:
Automation
Automatically issue, renew, and manage Google-managed certificates.
Provision Google-managed certificates in advance to enable seamless,
zero-downtime migrations to Google Cloud.
Security
Securely store and deploy millions of certificates.
Secure your configurations with Google-managed certificates,
eliminating the need to manage certificate private keys.
Implement mutual TLS (mTLS) authentication on your load balancer for
enhanced security. For more information, see Mutual TLS
overview in the Cloud Load Balancing
documentation.
Flexibility
Verify ownership of domains using either DNS-based or load
balancer-based authorization methods.
Choose between Google-managed certificates (automatically handled by
Google) or self-managed certificates (obtained and managed
independently).
Use the ACME protocol to get publicly trusted certificates for endpoints
you manage from the Public Certificate Authority. For more information, see
Public CA .
Manage all certificates in a unified manner using the Google Cloud console,
Google Cloud CLI, or the Certificate Manager API.
Control certificate assignment and selection based on domain names. This
lets you manage and serve a larger number of certificates than with
Compute Engine SSL certificates .
Control the assignment and selection of certificates based on hostnames
at a granular level.
Limitations
Certificate Manager has the following limitations:
Certificate Manager only supports the Public Certificate Authority and
the Let's Encrypt CA for issuing publicly trusted Google-managed
certificates.
Certificate Manager only supports Certificate Authority Service for
issuing privately trusted Google-managed certificates.
The number of domains allowed in the Subject Alternative Names (SANs) field
for Google-managed certificates is limited to a maximum of 100 when using
DNS authorization and to a maximum of five when using load balancer
authorization.
Google-managed certificates have limitations on the length of supported
domain names. For more information, see Domain name length limitations for
Google-managed
certificates .
Certificates with the ALL_REGIONS scope don't support load balancer
authorization.
When using either a global external Application Load Balancer or an SSL-based
global external proxy Network Load Balancer, you might experience higher TLS handshake
latencies in some locations with Certificate Manager compared with
using Compute Engine SSL certificates.
What's next
Core components of Certificate Manager
How Certificate Manager works
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
