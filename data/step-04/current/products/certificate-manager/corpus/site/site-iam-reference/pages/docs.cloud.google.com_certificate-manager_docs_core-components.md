---
title: "Core components of Certificate Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/core-components
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/core-components
  title: "Core components of Certificate Manager \_|\_ Google Cloud Documentation"
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
Core components of Certificate Manager
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of the core components and concepts of
Certificate Manager.
Certificates
A certificate represents a single X.509 Transport Layer Security (TLS) (SSL)
certificate that is issued for specific domain names or domain wildcards.
Certificate Manager supports the following types of certificates:
Google-managed certificates : certificates that Google Cloud
obtains and manages for you. When a new Google-managed certificate is
issued or renewed, Certificate Manager uses a freshly generated private key
for the certificate.
Self-managed certificates : certificates that you obtain, provision,
and renew yourself.
Google-managed certificates
Google-managed certificates are TLS certificates that Google Cloud obtains
and manages for you. Certificate Manager lets you create,
manage, and automatically renew your Google-managed certificates.
Certificate Manager also lets you verify domain ownership by
using either load balancer-based authorization or DNS-based authorization.
Certificate Manager supports Public Certificate Authority (CA)
and Let's Encrypt CA. By default, the Public CA issues Google-managed
certificates. If you can't obtain a certificate from the
Public CA for a particular domain, Certificate Manager
falls back to the Let's Encrypt CA. This might happen in situations when the
Public CA refuses to issue a certificate for a domain, or your Certificate Authority Authorization (CAA) record explicitly prohibits the Public CA from issuing
certificates for that domain. For more information about how to restrict the CAs
that might issue certificates for your domains, see Specify the CAs that can
issue your Google-managed
certificate .
Some important points to keep in mind when using Google-managed certificates
with Certificate Manager:
Certificate Manager supports RSA Google-managed certificates.
Regional Google-managed certificates only support DNS-based authorization
and obtain certificates from the Public CA.
Using Google-managed certificates as client certificates for mutual TLS
isn't supported.
The default validity of public Google-managed certificates is 90 days for
all scopes except EDGE_CACHE ,
which has a validity of 30 days. Changing the validity of public
Google-managed certificates isn't supported.
Public and private certificates
Certificate Manager can manage both public and private
certificates. Certificate Manager gets public certificates, which
often secure public services, from Public CA. Major browsers, operating systems,
and applications recognize Public CA as a root of trust.
Certificate Manager gets private certificates, which often secure
private services, from the CA Service.
Self-managed certificates
If you can't use Google-managed certificates because of your business
requirements, then you can upload certificates that are issued by external CAs
along with their associated keys. You must issue and renew these self-managed
certificates manually.
The Certificate resource of a self-managed certificate must include
the certificate and its chain. The certificate chain contains
intermediate certificates , which help establish trust to
the root certificate. You can add the certificate chain either as a single
PEM-encoded file or as a text block.
Make sure to specify your certificate chain in the following order:
Leaf certificate
All intermediate certificates
Supported key types
Load balancers support certificates that use private keys of different key
types. The following table shows the key type support depending on whether the
certificates are self-managed or Google managed.
SSL certificate type arrow_forward
Key type arrow_downward
Certificate Manager SSL certificates
Global and regional
Self-managed
Publicly trusted Google-managed
Privately trusted Google-managed
RSA-2048
RSA-3072
RSA-4096
ECDSA P-256
ECDSA P-384
Important: You incur charges per TLS connection when you use RSA-3072 or
RSA-4096 key types. For more information, see All networking pricing .
Domain authorizations
Certificate Manager lets you prove ownership of domains for which
you want to issue Google-managed certificates in one of the following ways:
Load balancer authorization : deploy the certificate directly to a
supported load balancer without creating a DNS record.
DNS authorization : deploy the certificate directly to a supported load
balancer after creating dedicated DNS records for verification of domain
ownership.
For more information, see Domain authorization types for Google-managed
certificates .
You don't need domain authorizations for self-managed certificates.
Certificate maps
A certificate map references one or more certificate map entries that assign
specific certificates to specific hostnames. Certificate map entries also define
the selection logic that the load balancer follows when establishing client
connections. You can associate a certificate map with multiple target proxies
for reuse across multiple load balancers.
If a client requests a hostname specified in a certificate map, the load
balancer serves the certificates mapped to that hostname. Otherwise, the load
balancer serves the primary certificate, which is the first certificate listed
for a target proxy. For more information, see How
Certificate Manager works .
The following load balancers support certificate maps:
Global external Application Load Balancer
Global external proxy Network Load Balancer
For more information about creating and managing certificate maps, see Manage
certificate maps .
Certificate map entries
A certificate map entry is a list of certificates that are served for a specific
domain name. You can define different sets of certificates for the same domain.
For example, you can upload an ECDSA and an RSA certificate, and map them to the
same domain name.
When a client connects to a domain name, the load balancer negotiates the type
of certificate to serve to the client during the handshake.
You can associate a maximum of four certificates with a single certificate map
entry.
For more information about creating and managing certificate map entries, see
Manage certificate map entries .
Trust configs
A trust config is a resource that represents your public key infrastructure
(PKI) configuration in Certificate Manager for use in mutual TLS
authentication scenarios. It encapsulates a single trust store, which in turn
encapsulates a trust anchor and, optionally, one or more intermediate
certificates.
To learn more about mutual TLS (mTLS) authentication, see Mutual TLS
overview in the Cloud Load Balancing
documentation.
For more information about trust configs and its components, see Manage trust
configs .
Trust stores
A trust store represents the trust secret configuration in
Certificate Manager for use in mutual TLS authentication
scenarios. A trust store encapsulates a single trust anchor and, optionally, one
or more intermediate certificates.
The following limitations apply to trust config resources:
A trust config resource can hold a single trust store.
A trust store can hold up to 200 trust anchors, and up to 100 intermediate
CA certificates .
Trust anchors
A trust anchor represents a single root certificate for use in mutual TLS
authentication scenarios. A trust anchor is encapsulated within a trust store.
Intermediate certificates
An intermediate certificate is a certificate that is signed by a root
certificate or another intermediate certificate in the trust store. Intermediate
certificates are used for mutual TLS authentication.
If you have any intermediate certificates, one or more intermediate certificates
can be encapsulated within a trust store, depending on your PKI configuration.
In addition to the existing intermediate certificates, the trust config includes
all intermediate certificates as part of the trust evaluation for all connection
requests.
Certificates that require an allowlist
To allow clients to authenticate with a certificate that is self-signed,
expired, or invalid, add the certificate to the
allowlistedCertificates field of the trust config. You can also add the
certificate if you don't have access to the root and intermediate certificates.
You don't need a trust store to add a certificate to an allowlist.
When you add a certificate to the allowlist, Certificate Manager
considers the certificate valid if the certificate meets the following
conditions:
The certificate is parseable.
The client proves its possession of the certificate's private key.
The constraints on the Subject Alternative Name (SAN) field are met.
Certificate issuance configurations
A certificate issuance configuration is a resource that lets
Certificate Manager use a CA pool from your own
Certificate Authority Service instance to issue
Google-managed certificates. A certificate issuance configuration lets you
specify parameters for certificate issuance and expiration, as well as the key
algorithm for certificates issued.
For more information about creating and managing certificate issuance configs,
see Manage certificate issuance
configuration resources .
What's next
How Certificate Manager works
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
