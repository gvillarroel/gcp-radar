---
title: "Use advanced DNSSEC \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dns/docs/dnssec-advanced
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dns/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dns/docs/dnssec-advanced
  title: "Use advanced DNSSEC \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud DNS
Guides
Send feedback
Use advanced DNSSEC
Stay organized with collections
Save and categorize content based on your preferences.
This page provides several advanced Domain Name System Security Extensions
(DNSSEC) configuration options that you can use if you enable DNSSEC for your
managed zones. These options range from different signing algorithms and
denial-of-existence to the ability to use record types that require or recommend
DNSSEC for their use.
For a conceptual overview of DNSSEC, see the DNSSEC overview .
Delegate DNSSEC-signed subdomains
You can enable DNSSEC for delegated subdomains after you have enabled DNSSEC
for your primary domain. To enable DNSSEC for delegated subdomains, first create
a DS record within a Cloud DNS zone. You must also create one or
more NS records.
To create DS records for delegated subdomains, you must obtain the DS record
for the zone. If the delegated zone is also hosted in Cloud DNS, you
can get the DS record from the Google Cloud console or from the Google Cloud CLI.
Console
In the Google Cloud console, go to the Cloud DNS page.
Go to Cloud DNS
Navigate to the managed zone for which you want to see the DS record.
To see the DS record for the zone, in the upper-right corner of the
Zone details page, click Registrar Setup .
The DS record is available on the Registrar Setup page.
To create NS records, follow the instructions in Adding a
record .
gcloud
To get the DS record information for delegated subdomains, run the
following command:
gcloud dns dns-keys list --zone SUBDOMAIN_ZONE
Replace SUBDOMAIN_ZONE with the name of the delegated
subdomain DNS zone in your project.
The output looks like the following:
ID KEY_TAG TYPE IS_ACTIVE DESCRIPTION
0 1234 KEY_SIGNING True
1 12345 ZONE_SIGNING True
To get a complete DS record and all the details of the key, you need the
ID of the KEY_SIGNING Key (KSK), which is usually zero (0). Run the
following command:
gcloud dns dns-keys describe --zone SUBDOMAIN_ZONE KSK_ID \
--format "value(ds_record())"
Replace the following:
SUBDOMAIN_ZONE : the name of the delegated subdomain
DNS zone in your project
KSK_ID : the KSK ID number, usually 0
The output looks similar to the following:
44300 8 2 92966cefacccd85b3bf00fcbcc4318b5f97a27889489b8e89b5bd56f83066ddb
Copy the output from the previous command to use it in a subsequent step.
To create the DS records for a secure subdelegation, run the following
command to start the transaction:
gcloud dns record-sets transaction start --zone PARENT_ZONE
Replace PARENT_ZONE with the name of the parent DNS
zone in your project where you are creating the records for the
delegated subdomain.
The output looks like the following:
Transaction started [transaction.yaml].
Next, run the following command to add a record set:
gcloud dns record-sets transaction add --zone PARENT_ZONE \
--ttl TIME_TO_LIVE \
--type DS \
--name subdomain.example.com \
" DS_RECORD_AND_KEY "
Replace the following:
PARENT_ZONE : the name of the parent DNS zone in
your project
TIME_TO_LIVE : time to live for the zone in seconds,
such as 3600
subdomain.example.com : a subdomain of the DNS name
of the zone
DS_RECORD_AND_KEY : the DS record and key that you
got in step 2, such as
44300 8 2 92966cefacccd85b3bf00fcbcc4318b5f97a27889489b8e89b5bd56f83066ddb
The output looks like the following:
44300 8 2 92966cefacccd85b3bf00fcbcc4318b5f97a27889489b8e89b5bd56f83066ddb
Record addition appended to transaction at [transaction.yaml].
To add NS records, use the following command:
gcloud dns record-sets transaction add --zone PARENT_ZONE \
--ttl TIME_TO_LIVE \
--type NS \
--name subdomain.example.com \
Replace the following:
PARENT_ZONE : the name of the parent DNS zone in
your project
TIME_TO_LIVE : time to live for the zone in seconds,
such as 3600
subdomain.example.com : a subdomain of the DNS name
of the zone
Enter the following RRData:
ns-cloud-e1.googledomains.com. \
ns-cloud-e2.googledomains.com. \
ns-cloud-e3.googledomains.com. \
ns-cloud-e4.googledomains.com.
Note: The choice of name servers for the NS record depends
on which name server shard the delegated subdomain was assigned to when
it was created. This information is visible in the earlier
Registrar setup dialog—the necessary DS and NS record
details appear together.
The output looks like the following:
Record addition appended to transaction at [transaction.yaml].
To execute the transaction, use the following command:
gcloud dns record-sets transaction execute --zone EXAMPLE_ZONE
Replace EXAMPLE_ZONE with the name of a DNS zone in
your project.
The output looks like the following:
Executed transaction [transaction.yaml] for managed-zone [dns-example].
Created [https://dns.googleapis.com/dns/v1/projects/example/managedZones/example_zone/changes/42].
ID START_TIME STATUS
42 2019-08-08T23:12:49.100Z PENDING
Use advanced signing options
When enabling DNSSEC for a managed zone, or creating a managed zone with DNSSEC,
you can select the DNSSEC signing algorithms and the denial-of-existence type.
You can change DNSSEC settings (for example, to the algorithm used to
crytopgraphically sign records) for a managed zone before enabling
DNSSEC. If DNSSEC is already enabled for a managed zone, to make changes, first
disable DNSSEC, make the required changes, and then use the following command
to re-enable DNSSEC:
gcloud dns managed-zones update EXAMPLE_ZONE --dnssec-state on
Replace EXAMPLE_ZONE with the name of a DNS zone in your
project.
For details, see
Enable DNSSEC for existing managed zones .
Note: If you want your domain to resolve while DNSSEC is disabled, you
must first deactivate DNSSEC for your zone at your domain registrar to ensure
that DNSSEC-validating resolvers can still resolve names in the zone.
For details, see
Disable DNSSEC for managed zones .
The following command enables DNSSEC with 256-bit ECDSA and NSEC for the
smallest DNSSEC-signed response packets possible using Cloud DNS:
gcloud dns managed-zones update EXAMPLE_ZONE \
--dnssec-state on \
--ksk-algorithm ECDSAP256SHA256 --ksk-key-length 256 \
--zsk-algorithm ECDSAP256SHA256 --zsk-key-length 256 \
--denial-of-existence NSEC
Replace EXAMPLE_ZONE with the name of a DNS zone in your
project.
If you provide any KSK or ZSK algorithms or key lengths, you must provide all
of them and their arguments in the command:
--ksk-algorithm --zsk-algorithm --ksk-key-length --zsk-key-length
You can specify denial-of-existence as NSEC or NSEC3 independent of algorithms.
The supported algorithm options and arguments are listed in the following table.
Cloud DNS does not allow use of any other algorithms or parameters.
Algorithm
KSK lengths
ZSK lengths
Comments
RSASHA256
2048
1024, 2048
RSASHA512
2048
1024, 2048
Not widely supported
ECDSAP256SHA256
256
256
ECDSAP384SHA384
384
384
Not widely supported
If no algorithm is specified, Cloud DNS uses these defaults:
Key type
Default algorithm
Default key length
Key signing key (KSK)
RSASHA256
2048
Zone signing key (ZSK)
RSASHA256
1024
The security and performance differences between RSASHA256 and RSASHA512
are minimal, and signed response sizes are identical. Key lengths do matter:
longer keys are slower and responses are larger
(see analyses of response size for the
root zone
and TLDs ,
and an analysis of server-side performance on
Windows ).
Resolver support for ECDSA is limited to fairly recent systems.
Older resolvers that cannot validate ECDSA-signed zones consider them unsigned,
which may be insecure if you
use new record types that rely on DNSSEC .
Registrar and registry support for 256-bit ECDSA is common but not universal.
Only a few registries and even fewer registrars support 384-bit ECDSA.
Using ECDSA can be effective if you do not need to support older clients;
the signatures are much smaller and faster to compute.
Avoid using different algorithms for the KSK and ZSK in your managed zones;
it reduces compatibility and may compromise security. Some DNSSEC-validating
resolvers may fail validation for zones with DNSKEY algorithms that are not
used to sign all records in the zone. This is true even though
RFC 6840
says "they must not insist that all algorithms ... in the DNSKEY RRset work."
If this is not a concern (most validating resolvers follow RFC 6840), you can use
RSASHA256 for the KSK and ECDSA for the ZSK if your domain registrar or TLD
registry does not support ECDSA and you need reduced response sizes.
NSEC3 is the default denial-of-existence type; it offers limited protection
against zone walkers trying to discover all the records in your zone.
The NSEC3PARAM settings are fixed: NSEC3 opt-out is disabled for security,
and there is one additional hash iteration (for a total of two) with a 64-bit
salt.
NSEC has slightly smaller responses, but no protection against zone walking.
Using NSEC can also reduce queries for nonexistent domains.
Google Public DNS
and several other DNSSEC-validating resolvers can
synthesize
negative responses from cached NSEC records without querying your
Cloud DNS zone.
RFC 8624
contains additional guidance on algorithm selection.
Use new DNS record types with DNSSEC-secured zones
After your domain has been fully DNSSEC-secured, you can start by using several
new DNS record types that use the authenticity and integrity guarantees of
DNSSEC-signed zones to enhance the security of other services.
SSHFP
SSHFP records contain a fingerprint of an SSH server's public key
that SSH client applications can use to validate the SSH servers.
SSH clients usually require user interaction to confirm the server's public key
on the first connection and generate warnings if the key is changed.
An SSH client configured to use SSHFP always uses the key in a server's
SSHFP record for that server; only keys for servers without an SSHFP record are
saved for reuse.
The SSHFP record format is as follows:
Algorithm number
Fingerprint type number
Server key fingerprint
The algorithm numbers for SSH are as follows:
RSA
DSA
ECDSA
ED25519
The fingerprint types are as follows:
SHA-1 ( deprecated, only for compatibility )
SHA-256
Caution: Improper use of SSHFP records can have
serious security consequences; follow these rules to avoid creating security
vulnerabilities:
Do not create SSHFP records in a zone that is not DNSSEC-secured.
Never configure SSH clients to use SSHFP for a domain that is
not DNSSEC-secured.
Never configure SSH clients to use SSHFP unless they
validate DNSSEC or use a validating resolver, such as
Google Public DNS .
Not following these rules could allow adversaries to create spoofed SSHFP
records for your servers to impersonate them, making SSH connections to the
servers insecure and vulnerable to attacks.
StackExchange has
suggestions for creating SSHFP ,
and there are tools to generate them by scanning servers, using existing
known host files or
configuration management .
For more examples and links, see SSHFP records: DNS providing public ssh host keys .
TLSA and DANE
TLSA records contain information that can be used to validate X.509 certificates
(such as certificates used by HTTPS) without depending on one of a
preconfigured set of certificate authorities (CAs) signing them.
This lets you set up your own CAs and generate certificates for HTTPS.
This also permits validation of certificates for protocols like SMTP where
there is typically no application support for preconfigured trusted CAs.
Caution: Do not create TLSA records in a zone that is not DNSSEC-secured.
Most applications that use TLSA records require DNSSEC validation,
so creating such records has no effect. However, it may create a vulnerability
in misconfigured applications.
DANE (Domain Authentication of Named Entities), as specified in
RFC 6698
and related RFCs, uses TLSA records in specific ways to secure many protocols and
applications. The IETF Journal and Internet Society has a useful introductory
article
and DANE overview .
HTTPS
DANE lets you securely configure HTTPS servers by using certificates generated
with your own CA infrastructure based on
OpenSSL
or Cloudflare's
CFSSL .
SIDNLabs' DANE validator for HTTPS servers is helpful for testing a DANE deployment
for HTTPS.
SMTP (Email) TLS certificate verification
The SMTP email protocol is vulnerable to
downgrade attacks that disable encryption ,
and DANE provides a way to prevent these attacks.
The Internet Society has a two-part tutorial about using DANE for SMTP with the
free and automated certificates available from
Let's Encrypt ,
including
advice
to avoid using certain TLSA record formats with Let's Encrypt certificates:
Part 1
Part 2
You can find excellent advice (and a DANE domain validator for HTTPS and SMTP)
at Common Mistakes .
The Test your email validator
also checks DANE.
XMPP (Jabber chat) TLS certificate verification
XMPP (and other services that use SRV records) can also take advantage of DANE.
An XMPP example
uses DANE-SRV configuration as specified in
RFC 7673 .
TXT (OpenPGP / GnuPG) public key association
TXT records can be used without DNSSEC, but DNSSEC-signed TXT records provide
greater confidence in their authenticity. This is important for DNS-based
publication of OpenPGP (GnuPG) public keys, which are not signed by well-known
parties like X.509 CAs.
For example, if Alice publishes a TXT record like the following in the
DNSSEC-signed an.example zone, and hosts a copy of the ASCII-armored public
key at the given URI, Bob can look up an OpenPGP key for alice@an.example
with reasonable security (this is not a replacement for web-of-trust validation,
but makes OpenPGP encryption possible with previously unknown parties):
alice._pka 86400 IN TXT "v=pka1;fpr=083382bac0059be3d6544c8b0dcf16f482a6;uri=https://an.example/a.asc"
You can use these
instructions
to generate these Version 1 PKA TXT records (as they are called in Publishing Keys in DNS ).
The complete guide to publishing PGP keys in DNS
explains how to create OpenPGP CERT records (but Cloud DNS does not
support CERT or OPENPGPKEY records).
If you registered your OpenPGP key at Keybase.io ,
you don't need to host the key on your own server. Instead, you can use a URL
such as https://keybase.io/ KEYBASE_USERNAME /key.asc (replace
KEYBASE_USERNAME with your Keybase.io username).
If you have uploaded your OpenPGP key to a keyserver, you can also use an
hkp: URI for that keyserver, such as hkp://subkeys.pgp.net or hkp://pgp.mit.edu ,
although users behind firewalls blocking port 11371 may not be able to reach it
(some keyservers provide port 80 HTTP URLs).
TXT (SPF, DKIM, and DMARC)
Following are three other kinds of TXT records that you can use to secure your
email services and prevent spammers and scammers from sending email that
appears to come from your domain (even though it doesn't):
SPF :
Specifies the SMTP servers (by domain name or IP address) that may send
email for a domain.
DKIM :
Publishes a set of public keys used to verify that email is sent from a domain,
and protects messages from being modified in transit.
DMARC :
Specifies domain policies and reporting for SPF and DKIM validation
and error reporting.
To verify that your domain is properly configured to use all three of these
record types, you can use the
Test your email validator .
To find useful advice about configuring SPF records, see
Common mistakes FAQ .
Use other record set types enhanced by DNSSEC
Besides TXT, there are a few other record set types that benefit from DNSSEC,
even though they do not require it.
CAA
Certification Authority Authorization (CAA) record sets let you control
which public CAs can generate TLS or other certificates for your domain.
This control is most useful (and effective) if you want to make sure that a
public CA that is issuing domain-validated (DV) certificates
(like LetsEncrypt.org) does not issue certificates for your domain.
A typical CAA record has a simple format like 0 issue "best-ca.example"
that lets the best-ca.example CA (and no other CA) issue
certificates for names in the domain where the CAA record set is located.
If you want to let multiple CAs issue certificates, create
multiple CAA records.
RFC 6844 provides further details about the use of the CAA record set type, and strongly
recommends the use of DNSSEC.
IPSECKEY
You can also enable opportunistic encryption through IPsec tunnels by publishing
IPSECKEY records .
The strongSwan
IPsec VPN implementation has a plugin that uses IPSECKEY records.
In addition to placing IPSECKEY records in the usual forward zones,
such as service.example.com ,
RFC 4025 section 1.2
requires security gateways to look for IPSECKEY records in the reverse zones
ip6.arpa and in-addr.arpa .
DNSSEC support for reverse zones is less common than for forward zones
and requires an internet service provider (ISP) that implements DNSSEC.
However, there are some ISPs that can support DNSSEC for reverse zone delegations.
Reverse zones for Compute Engine VM external IP addresses do not yet
support delegation.
What's next
To create, update, list, and delete managed zones, see
Manage zones .
To find solutions for common issues that you might encounter when using
Cloud DNS, see Troubleshooting .
To get an overview of Cloud DNS, see
Cloud DNS overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
