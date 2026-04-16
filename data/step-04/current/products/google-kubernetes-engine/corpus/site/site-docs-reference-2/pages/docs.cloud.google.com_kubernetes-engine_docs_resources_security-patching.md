---
title: "Security patching \_|\_ GKE security \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/resources/security-patching
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/resources/security-patching
  title: "Security patching \_|\_ GKE security \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE security
Send feedback
Security patching
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This document describes how Google manages security vulnerabilities and patches
for Google Kubernetes Engine (GKE).
This page is for Security specialists who support the resolution of security
issues or vulnerabilities which need strategic assistance, such as incidents and
issues escalated from support. To learn more about common roles and example
tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Patching shared responsibility
Patching is a shared responsibility between Google and the customer. Different
platforms have different shared responsibilities. See the following topics on
each platform for more details:
GKE
Google Distributed Cloud (on-premises)
GKE on AWS
Google Distributed Cloud for bare metal
GKE on Azure
How we discover vulnerabilities
Google has made large investments in proactive security design and hardening,
but even the best designed software systems can have vulnerabilities. To find
those vulnerabilities and patch them before they can be exploited, Google has
made significant investments on multiple fronts.
For patching purposes, GKE is an Operating System (OS) layer with
containers running on top. The operating systems, Container-Optimized OS
or Ubuntu, are hardened and contain the minimum amount of software
required to run containers. GKE features run as containers on top
of the base images. GKE consistently works to reduce the number
of dependencies that system components have, which helps to reduce the attack
surface and improve the efficiency of vulnerability management. For example,
GKE system components might use minimal base images when
possible.
Google identifies and fixes vulnerabilities and missing patches in the following
ways:
Container-Optimized OS: Google scans images to identify potential
vulnerabilities and missing patches. The Container-Optimized OS team
reviews and resolves issues.
Ubuntu: Canonical provides Google with OS builds that have all available
security patches applied.
Google scans containers using
Container Registry Artifact Analysis
to discover vulnerabilities and missing patches in Kubernetes and Google-managed
containers. If fixes are available, the scanner automatically begins the
patching and release process.
In addition to automated scanning, Google discovers and patches vulnerabilities
unknown to scanners in the following ways.
Google performs its own audits, penetration testing, and vulnerability discovery
across all platforms. For a list of platforms, see the previous section
Patching shared responsibility .
Specialized teams inside Google and
trusted third-party security vendors conduct their own attack research. Google has
also worked with the CNCF
to provide much of the organization and technical consulting expertise for the
Kubernetes security audit .
Google actively engages with the security research community through
multiple vulnerability reward programs .
A dedicated Google Cloud vulnerability rewards program provides
significant bounties,
including $133,337 for the best cloud vulnerability
found each year. For GKE, there is a program that rewards
security researchers if they are able to
break our security controls .
The program covers all GKE software dependencies.
Google collaborates with other industry and open source software partners who
share vulnerabilities, security research, and patches before the public release
of the vulnerability. The goal of this collaboration is to patch large pieces of
Internet infrastructure before the vulnerability is announced to the public. In
some cases, Google contributes vulnerabilities found to this community. For
example, Google's Project Zero discovered and publicized the
Spectre and Meltdown
vulnerabilities. The Google Cloud Security team also regularly finds and
fixes
vulnerabilities in the Kernel-based Virtual Machine (KVM) .
Google's security collaboration happens on many levels. Sometimes it occurs
formally through programs where organizations sign up to receive pre-release
notifications about software vulnerabilities for products such as
Kubernetes
and
Envoy .
Collaboration also happens informally due to our engagement
with many open source projects such as the Linux kernel, container runtimes,
virtualization technology, and others.
For Kubernetes, Google is an active and founding member of the
Security Response Committee (SRC)
and wrote much of the
Security Release Process .
Google is a member of the
Kubernetes Distributors List
that receives prior notification of vulnerabilities and has been involved in
the triage, patching, mitigation development, and communication of nearly
every serious Kubernetes security vulnerability. Google also discovered multiple
Kubernetes
vulnerabilities
ourselves .
While less severe vulnerabilities are discovered and patched outside of these
processes, most critical security vulnerabilities are reported privately through
one of the channels previously listed. Early reporting gives Google time before
the vulnerability becomes public to research how it affects GKE,
develop patches or mitigations, and prepare advice and communications for
customers. When possible, Google patches all clusters before the public release
of the vulnerability.
How vulnerabilities are classified
GKE makes large investments in security hardening the entire stack,
including the OS, container, Kubernetes, and network layers, in addition to setting
good defaults, security-hardened configurations, and managed components. Combined,
these efforts help to reduce the impact and likelihood of vulnerabilities.
The GKE security team classifies vulnerabilities according to the
Kubernetes vulnerability scoring
system. Classifications consider many factors including
GKE configuration and security hardening.
Because of these factors and the investments GKE makes in security,
GKE vulnerability classifications might
differ from other classification sources.
The following table describes vulnerability severity categories:
Severity
Description
Critical
A vulnerability easily exploitable in all clusters by an
unauthenticated remote attacker that leads to full system compromise.
High
A vulnerability easily exploitable for many clusters that leads to
loss of confidentiality, integrity, or availability.
Medium
A vulnerability exploitable for some clusters where loss of
confidentiality, integrity, or availability is limited by common
configurations, difficulty of the exploit itself, required access, or user
interaction.
Low
All other vulnerabilities. Exploitation is unlikely or consequences of
exploitation are limited.
See the
security bulletins for
example vulnerabilities, fixes and mitigations, and their ratings.
How vulnerabilities are patched for GKE clusters
Patching a vulnerability involves upgrading to a new
GKE version number. GKE
versions include versioned components for the operating system,
Kubernetes components, and other containers that make up the GKE
platform. Fixing some vulnerabilities requires only a control plane upgrade,
performed automatically by Google on GKE, while others require
both control plane and node upgrades.
To keep clusters patched and hardened against vulnerabilities of all severities,
we recommend
using node auto-upgrade on GKE
(on by default). For clusters enrolled in release channels, patch releases are
promoted as they meet each channel's qualification requirements. If you need a
GKE patch release before it reaches your cluster's channel, you
can manually upgrade to the patch version if the patch release is on the same
minor version as one available in your cluster's release channel.
On other platforms where clusters run, Google recommends upgrading
at least monthly. For a list of platforms, see the previous section
Patching shared responsibility .
Some security scanners or manual version checks might incorrectly assume that
a component like runc or containerd is missing a specific upstream security
patch. GKE regularly patches components and only performs package
version upgrades when required, which means that GKE components
are functionally similar to their upstream counterparts even if the version
number of the GKE component doesn't match the upstream version
number. For details about a specific CVE, see
GKE security bulletins .
Patching timelines
Google's goal is to mitigate detected vulnerabilities within a time period
appropriate for the risks they represent. GKE is included within
Google Cloud's FedRAMP provisional ATO
which requires that known vulnerabilities to be remediated within specific
timeframes according to their severity level as specified in control RA-5(d) of
the Risk Assessment (RA) record RA-5, "Vulnerability Scanning", in the
FedRAMP Security Controls Baseline
spreadsheet.
For every known vulnerability, GKE's goal is to release patch
versions that remediate the vulnerability within the corresponding timeframe.
The Google Cloud FedRAMP provisional ATO doesn't include
Google Distributed Cloud, GKE on AWS, GKE on Azure, or
GKE attached clusters, but
we aim for the same remediation timeframes on those products. After
GKE makes patch versions available to remediate a known
vulnerability, upgrade your clusters to those versions to meet patching
timeframes for your organization.
How vulnerabilities and patches are communicated
The best source for current information about vulnerabilities and security
patches is in the security bulletins feed
for the following products:
GKE
Google Distributed Cloud
GKE on AWS
GKE on Azure
Google Distributed Cloud
These bulletins follow a common Google Cloud vulnerability numbering scheme and are
linked from the main Google Cloud bulletins page
and the GKE Release Notes .
Each security bulletins page has an RSS feed where users can subscribe to updates.
Vulnerabilities are sometimes kept private under embargoes for a limited time.
Embargoes help prevent early publication of vulnerabilities that might lead to
widespread exploitation attempts before steps can be taken to address them. In
embargo situations, the release notes refer to "security updates" until the
embargo has been lifted. After the embargo is lifted, Google updates release
notes to include the specific vulnerabilities.
The GKE security team publishes security bulletins
for High and Critical severity vulnerabilities. When customer action is required
to address these High and Critical vulnerabilities, Google contacts customers by
email. In addition, Google might also contact customers with support contracts
through support channels.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
