---
title: "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool
  title: "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
Active Directory Diagnosis tool for Cloud SQL
Stay organized with collections
Save and categorize content based on your preferences.
The Active Directory (AD) Diagnosis tool is a utility PowerShell script that
helps you to troubleshoot AD setup issues with your
on-premises domain and Cloud SQL for SQL Server instances in Google Cloud.
The tool performs various checks for issues, such as closed ports, FQDN
lookups, and DNS issues. It runs on an on-premises Windows VM that is one of the domain
controllers for your on-premises domain.
This page describes how to use the Active Directory Diagnosis tool for Cloud SQL
and explains the checks that the
tool performs.
Prerequisites
Ensure that you have the following components set up before proceeding to use the
AD Diagnosis tool:
An AD enabled on-premises domain.
A Managed AD domain in Google Cloud console.
A Cloud SQL for SQL Server instance joined to the Managed AD domain.
How to use the AD Diagnosis tool
To use the AD Diagnosis tool, perform the following steps:
Log on to any one of the on-premises domain controllers or a VM joined to the
on-premises domain.
Download the diagnose_ad.ps1
script
on the VM.
Launch Powershell as Administrator.
Run the diagnose_ad.ps1 script in the Powershell window using the following
command:
powershell - command "& { . C:\\<var>SCRIPT_PATH</var>\\diagnose_ad.ps1; Run-Tool }"
Enter the following information when prompted:
Note: Some checks require administrator privileges. If you didn't launch
Powershell as Administrator earlier, you are prompted to choose to run it
as Administrator.
On-premises domain name, such as my-onprem-domain.com
Managed AD domain name, such as my-ad-domain.com
List of SQL Server Active Directory FQDNs and private IP addresses. This
list is available in the Google Cloud console on the instance's Overview page.
The tool then performs a number of checks, as described in Checks performed by the AD Diagnosis tool .
Checks performed by the AD Diagnosis tool
Check Description
Notes and recommendation
Available domain controllers
Issues a ping to the IP address of each domain controller on the on-premises
domain to ensure they are reachable.
The remaining checks proceed on the IP addresses that were reachable. In case of failure
of this check, ensure network connectivity to the remaining on-premises domain controllers.
To learn more, see
Creating the network infrastructure .
Ports
Verifies that all the required TCP and UDP ports for AD are open on all the
on-premises domain controllers.
This check returns a warning status for the RPC port range (49152-65535) because
it does not have a consistent list of open ports. We recommend that you verify that
there is a firewall rule set for allowing this range. To learn more, see
Opening firewall ports
DNS server
Checks for a healthy and fault-tolerant AD setup.
This check returns a warning if the script is not
run on an on-premises domain controller. We recommend that you
deploy fault-tolerant
AD setup by setting primary and secondary
DNS servers.
FQDN (Managed AD domain)
Performs an nslookup for the Managed AD domain name that you provide.
This check validates if the Managed AD domain is reachable from the on-premises
domain controller. In case of failure, try establishing network connectivity
between your on-premises network and your Google Cloud Virtual Private Cloud (VPC).
To learn more, see
Establishing network connectivity .
FQDN (SQL Server)
Performs an nslookup for the SQL Server FQDNs that you provide.
This check validates if your instance is reachable from the on-premises
domain controller. In case of failure, try establishing network connectivity
between your on-premises network and your Google Cloud Virtual Private Cloud (VPC).
To learn more, see
Establishing network connectivity .
DC Replication
Looks for any AD replication failures between the on-premises domain controllers.
If the script is run on an on-premises domain joined VM, expect a failed status if
Powershell is not run as an Active Directory domain user.
In case of failure of this check, follow the steps given in
Testing the installation .
DNS Forwarding
Looks for conditional DNS forwarding setup on the on-premises
domain controllers, which is required to route requests from on-premises domain
controllers to Managed AD domain controllers.
This check can fail if the script is not run on an on-premises domain
controller. We recommend that you
configure DNS conditional forwarders .
Trust setup
Verifies that AD trust is set up between the on-premises domain
and the Managed AD domain.
This check verifies that AD trust is set up between the on-premises and Managed AD domain.
We recommend that you create a trust between your on-premises domain and your
Managed Microsoft AD domain. To learn more, see
Setting up the trust
Note: The external trust type is not supported.
Local security policy
Checks that the local security policy configuration
Network access: Named pipes that can be accessed anonymously has been set.
You need this check for creating an AD trust.
This check is expected to fail if the script is not run on an on-premises domain controller.
This check requires you to run Powershell as Administrator to check
local security policy settings. In case of failure, we recommend that you
verify the local security policy for your on-premises domain .
Name suffix routing
Checks if name suffix routing to Managed AD domain is enabled
on the on-premises domain controller. You need this check to route requests from an
on-premises forest to Managed AD forest.
This check requires you to run Powershell as Administrator to check Name Suffix
Routing settings. In case of failure, we recommend that you
refresh name suffix routing for on-premises trust .
Kerberos ticket for on-premises domain
Validates that Kerberos authentication is
enabled on the on-premises domain. It looks for an existing Kerberos ticket for
the on-premises domain. If not found, it attempts to generate a new ticket.
This check attempts to find an existing Kerberos ticket for the on-premises DC.
If that fails, it tries to generate a new ticket as a form of validation.
Errors in other checks can cause an error on this check. If you resolve
failures for the other checks, it should resolve a failure for this check.
Kerberos ticket for SQL Server
Validates that Kerberos authentication is enabled
on the on-premises domain. It looks for an existing Kerberos ticket for each SQL
Server Service Principal Name (SPN) that you provide. The SPN for SQL Server is
MSSQLSvc/{SQL Server FQDN}:1433 . If getting a ticket for the SPN fails,
Cloud SQL checks if
the Windows registry value for allowing IP in hostnames is set. If it is set, try to get a ticket with SPN
MSSQLSvc/{SQL Server IP}:1433 .
To learn more, see the
Microsoft documentation .
This check attempts to find an existing Kerberos ticket for SQL Server.
If that fails, it tries to generate a new ticket as a form of validation.
Errors in other checks can cause an error on this check. Resolving
failures for the other checks should resolve a failure for this check.
What's Next
To share your feedback, you can use
GitHub Issues .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
