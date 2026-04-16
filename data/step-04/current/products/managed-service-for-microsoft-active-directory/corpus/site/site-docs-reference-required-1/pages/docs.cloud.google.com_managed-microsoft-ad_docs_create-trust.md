---
title: "Create a trust with an on-premises domain \_|\_ Managed Service for Microsoft\
  \ Active Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust
  title: "Create a trust with an on-premises domain \_|\_ Managed Service for Microsoft\
    \ Active Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Managed Microsoft AD
Guides
Send feedback
Create a trust with an on-premises domain
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create a trust relationship between on-premises
domains and a Managed Service for Microsoft Active Directory domain. This trust can be either one-way or
two-way. It can also span multiple forests. If you have already set up a trust,
learn how to manage trusts .
Managed Microsoft AD supports forest trust
type
and doesn't support external, realm, and shortcut trust types.
Note: When you create a trust with Managed Microsoft AD, SID filtering
is enabled by default.
Types of trusts
A trust relationship can be either one-way or two-way. A one-way trust is a
unidirectional authentication path created between two domains. In this topic,
the on-premises domain is the trusted or inbound side of the one-way trust
and the Managed Microsoft AD domain is the trusting or outbound side of
the relationship. A two-way trust is a bidirectional authentication path created
between two domains. Trust and access flow in both directions.
Before you begin
Before you create a trust, complete the following steps:
Verify that the on-premises domain is running a supported version of Windows .
Gather the IP addresses of DNS servers that apply to your on-premises domain.
Establish network connectivity
Establish network connectivity between your on-premises network and your
Google Cloud Virtual Private Cloud (VPC), and then verify that the
two networks can communicate. For more information about
identifying and establishing Cloud VPN connections, see Cloud VPN overview .
Note: Cloud Router doesn't learn or propagate routes for
peered VPC networks .
As a result, you must have a custom advertised route on the Cloud Router that
propagates a reserved CIDR range for Managed Microsoft AD.
Open firewall ports
Configure the ingress/egress ports on your on-premises network and your
Google Cloud VPC to allow Active Directory trust
connectivity.
The following tables list the minimal set of ports required to establish trust.
You may need to configure more ports, depending on your scenario. For more
information, see Microsoft's
Active Directory and Active Directory Domain Services Port Requirements .
Open on-premises network firewall ports
Open the ports listed in the following table on your on-premises firewall to the
CIDR IP block used
by your VPC network and Managed Microsoft AD network.
Protocol
Port
Functionality
TCP, UDP
53
DNS
TCP, UDP
88
Kerberos
TCP, UDP
464
Kerberos password change
TCP
135
RPC
TCP
49152-65535
RPC
TCP, UDP
389
LDAP
TCP, UDP
445
SMB
Open VPC network firewall ports
Open the ports listed in the following table on your VPC network
firewall to the
CIDR IP block used
by your on-premises network.
Protocol
Port
Functionality
TCP, UDP
53
DNS
Configure DNS conditional forwarders
After opening the firewall ports, configure the DNS conditional forwarders.
These settings allow you to provide hints for forwarding unresolvable requests
to different DNS servers.
Check for an inbound forwarding policy
Before creating an Cloud DNS inbound forwarding policy for your
VPC, check if one exists.
Open the Cloud DNS server policies page in the Google Cloud console.
Open the Cloud DNS page
Look for a policy in the list where the Inbound column is set to
On , and the VPC network used by your domain is listed
in the drop-down under the In use by column.
If you find a valid existing policy, you can skip to
Get DNS IP addresses .
Create an inbound forwarding policy
To create an inbound forwarding policy, complete the following steps:
Open the Cloud DNS server policies page in the Google Cloud console.
Open the Cloud DNS page
Select Create Policy .
Enter a Name .
Set Inbound query forwarding to On .
Select the VPC network for your domain from the
Networks menu.
Select Create .
Get DNS IP addresses
After creating an inbound forwarding policy, get the DNS IP addresses for your
Managed Microsoft AD domain. If you just created a new Cloud DNS
policy, the IP addresses may not appear yet. If this happens, wait a few minutes
and try again.
Open the Cloud DNS server policies page in the Google Cloud console.
Open the Cloud DNS page
Select your policy from the list, then select the In use by tab.
Take a note of any DNS IP addresses of the Managed Microsoft AD domain
that you need to configure in your on-premises domain. You need these
addresses to establish the trust with the Managed Microsoft AD domain.
Be sure the CIDR blocks containing these IP addresses are configured in
your on-premises network firewall .
Create DNS conditional forwarder
To configure the DNS conditional forwarders on your on-premises domain, use the
DNS IP addresses for your Managed Microsoft AD domain to complete the
following steps.
Log in to an on-premises domain controller with a Domain or Enterprise admin
account for the on-premises domain.
Open the DNS Manager.
Expand the DNS server of the domain you want to configure the trust for.
Right-click Conditional Forwarders and select
New conditional forwarder .
For DNS domain , enter the FQDN of the Managed Microsoft AD
domain (for example, ad.example.com ).
In the IP addresses of the master servers field, enter the DNS IP
addresses of your Managed Microsoft AD domain that you noted earlier in
the Get DNS IP
addresses step.
If the Server FQDN field shows an error, you can ignore it.
Select Store this conditional forwarder in Active Directory ,
and then select All DNS servers in this domain from the drop-down menu.
Select OK .
Verify the DNS conditional forwarder
You can verify that the forwarder is configured correctly by using nslookup or
the Resolve-DnsName PowerShell cmdlet. Run the following command:
nslookup FQDN
Replace FQDN with the fully qualified domain name of your Managed Microsoft AD domain.
If the DNS conditional forwarder is configured correctly, this command returns
the IP addresses of the domain controllers.
Verify the Local Security Policy for your on-premises domain
Creating a trust requires that the Local Security Policy for your on-premises
domain allows anonymous access to the netlogon , samr , and lsarpc named
pipes. To verify that anonymous access is enabled, complete the following steps:
Log in to an on-premises domain controller with a Domain or Enterprise admin
account for the on-premises domain.
Open the Local Security Policy console .
In the console, go to Security Settings > Local Policies
> Security Options
> Network access: Named Pipes that can
be accessed anonymously .
Verify that anonymous access to netlogon , samr , and lsarpc is enabled. Note that these need to be specified on separate lines and not comma separated.
Set up trust
After configuring your networks, you can create a trust between your on-premises
domain and your Managed Microsoft AD domain.
Configure the on-premises domain
To establish the trust on the on-premises domain, complete the following steps:
Log in to an on-premises domain controller using a Domain
or Enterprise administrator account.
Open Active Directory Domains and Trusts .
Right-click the domain and select Properties .
On the Trust tab, select New trust.
Select Next on the New Trust Wizard.
Enter the FQDN of the Managed Microsoft AD domain as the
Trust Name .
For the Trust type , select Forest trust .
Set the Direction of Trust .
To create a one-way trust, select One-way incoming .
To create a two-way trust, select Two-way .
For Sides of Trust , select This domain only .
For Outgoing Trust Authentication Level , select Forest-wide
authentication .
Enter the Trust Password .
You need this password to configure
the trust on the Managed Microsoft AD domain.
Confirm the trust settings, and then select Next .
The Trust Creation Complete window is displayed.
Select No, do not confirm the outgoing trust , then select Next .
Select No, do not confirm the incoming trust , then select Next .
In the Completing the New Trust Wizard dialog, select Finish .
Refresh Name Suffix Routing for the trust .
Configure the Managed Microsoft AD domain
To establish the trust on the Managed Microsoft AD domain, complete the
following steps:
Console
Open the Managed Microsoft AD page in the Google Cloud console.
Open the Managed Microsoft AD page
Select the domain to create a trust for, and then select
add Create Trust .
Set Trust type to Forest .
For the Target domain name , enter the FQDN of the on-premises domain.
Set the Trust direction .
To create a one-way trust, select Outbound .
To create a two-way trust, select Bidirectional .
Enter the trust password you created when configuring the trust on the
on-premises domain.
For DNS Conditional Forwarder IPs , enter the on-premises DNS IP
addresses you gathered earlier .
Select Create Trust Relationship .
You are returned to the domain page. Your new trust should show
as Creating . Wait until the state turns to Connected . It can take
up to 10 minutes for setup to complete.
gcloud
To create a one-way trust, run the following gcloud CLI command:
gcloud active-directory domains trusts create DOMAIN \
--target-dns-ip-addresses= TARGET_DNS_IP_ADDRESSES \
--target-domain-name= TARGET_DOMAIN_NAME \
--direction=OUTBOUND
Replace the following:
DOMAIN : The FQDN of the Managed Microsoft AD domain.
TARGET_DNS_IP_ADDRESSES : The on-premises DNS IP
addresses you gathered earlier .
TARGET_DOMAIN_NAME : The FQDN of the on-premises domain.
To create a two-way trust, run the following gcloud CLI command:
gcloud active-directory domains trusts create DOMAIN \
--target-dns-ip-addresses= TARGET_DNS_IP_ADDRESSES \
--target-domain-name= TARGET_DOMAIN_NAME \
--direction=BIDIRECTIONAL
For more information, see create command .
Validate two-way trust
After configuring the Managed Microsoft AD domain for a two-way trust, you
must validate the outbound trust from on-premises domain. If you are creating a
one-way trust, you can skip this step.
To verify the outbound trust, complete the following steps:
Log in to an on-premises domain controller using a Domain or Enterprise
administrator account.
Open Active Directory Domains and Trusts .
Right-click your domain, and then select Properties .
On the Trust tab, select the outbound trust for the
Managed Microsoft AD domain.
Select Properties .
On the General tab, select on Validate .
Troubleshoot
If you encounter problems while trying to create a trust, you can try our
troubleshooting tips .
What's next
Learn how to manage a trust .
Learn how to
troubleshoot accessing a trust .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
