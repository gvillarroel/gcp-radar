---
title: "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview
  title: "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Overview of Event Threat Detection
Stay organized with collections
Save and categorize content based on your preferences.
Premium and Enterprise service tiers
What is Event Threat Detection?
Event Threat Detection is a built-in service for the Security Command Center Premium tier that
continuously monitors your organization or projects and identifies threats
within your systems in near-real time. Event Threat Detection is regularly updated
with new detectors to identify emerging threats at cloud scale.
How Event Threat Detection works
Event Threat Detection monitors the Cloud Logging
stream for your organization or projects. If you activate Security Command Center Premium
tier at the organization level, Event Threat Detection consumes logs for your
projects as they are created and Event Threat Detection can monitor
Google Workspace Logs .
Cloud Logging contains log entries of API calls and other actions that
create, read, or modify the configuration or metadata of your resources.
Google Workspace logs track user sign-ins to your domain and provide a
record of actions performed on your Google Workspace Admin Console.
Log entries contain status and event information that Event Threat Detection uses to
quickly detect threats. Event Threat Detection applies detection logic and
proprietary threat intelligence, including tripwire indicator matching, windowed
profiling, advanced profiling, machine learning, and anomaly detection, to
identify threats in near-real time.
When Event Threat Detection detects a threat, it writes a finding to
Security Command Center. If you activate Security Command Center Premium tier at the
organization level, Security Command Center can write findings to a Cloud Logging
project. From Cloud Logging and Google Workspace logging, you can export
findings to other systems with Pub/Sub and process them with
Cloud Run functions.
If you activate Security Command Center Premium tier at the organization level, you can
additionally use Google Security Operations to investigate
some findings. Google SecOps is a Google Cloud service that
lets you investigate threats and pivot through related entities in a unified
timeline. For instructions on sending findings to Google SecOps, see
Investigate findings in Google SecOps .
Your ability to view and edit findings and logs is determined by the
Identity and Access Management (IAM) roles you are granted. For more information on
Security Command Center IAM roles, see Access control .
Event Threat Detection rules
Rules define the type of threats that Event Threat Detection detects and the types
of logs that must be enabled for detectors to work. Admin Activity audit
logs are always written; you can't configure or disable them.
Event Threat Detection includes the following default rules:
Active Scan
Brute force
Command and Control
Credential Access
Data Destruction
Defense Evasion
Denial of Service
Discovery
Exfiltration
Impact
Impair Defenses
Inhibit System Recovery
Initial Access
Lateral Movement
Malware
Persistence
Privilege Escalation
Resource Development
Clear all
Display name
API name
Log source types
Description
Active Scan: Log4j Vulnerable to RCE
Unavailable
Cloud DNS logs
Log4j vulnerability scanners initiated and identified DNS queries for unobfuscated domains.
This vulnerability can lead to remote code execution (RCE). Findings are classified as High severity by default.
Impact: Deleted Google Cloud Backup and DR host
BACKUP_HOSTS_DELETE_HOST
Cloud Audit Logs :
Backup and DR Service Admin Activity audit logs
A host was deleted from the Backup and DR management console. Applications that are associated with
the deleted host might not be protected. Findings are classified as Low severity by default.
Impact: Google Cloud Backup and DR expire image
BACKUP_EXPIRE_IMAGE
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A user requested the deletion of a backup image from the Backup and DR management
console. The deletion of a backup image does not prevent future backups. Findings are classified as Medium severity by default.
Impact: Google Cloud Backup and DR remove plan
BACKUP_REMOVE_PLAN
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A backup plan with multiple policies for an application was deleted from
Backup and DR. The deletion of a backup plan can prevent future backups. Findings are classified as Medium severity by default.
Impact: Google Cloud Backup and DR expire all images
BACKUP_EXPIRE_IMAGES_ALL
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A user requested the deletion of all backup images for a protected application from
the Backup and DR management console. The deletion of backup images does not prevent future backups. Findings are classified as High severity by default.
Impact: Google Cloud Backup and DR delete template
BACKUP_TEMPLATES_DELETE_TEMPLATE
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A predefined backup template, which is used to set up backups for multiple applications,
was deleted from the Backup and DR management console. The ability to set up backups in the future might be impacted. Findings are classified as Medium severity by default.
Impact: Google Cloud Backup and DR delete policy
BACKUP_TEMPLATES_DELETE_POLICY
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A Backup and DR policy, which defines how a backup is taken and where it is
stored, was deleted from the Backup and DR management console. Future backups that use the policy might fail. Findings are classified as Low severity by default.
Impact: Google Cloud Backup and DR delete profile
BACKUP_PROFILES_DELETE_PROFILE
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A Backup and DR profile, which defines which storage pools should be used to
store backups, was deleted from the Backup and DR management console.
Future backups that use the profile might fail. Findings are classified as Low severity by default.
Impact: Google Cloud Backup and DR remove appliance
BACKUP_APPLIANCES_REMOVE_APPLIANCE
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A backup appliance was deleted from the Backup and DR management console. Applications that are
associated with the deleted backup appliance might not be protected. Findings are classified as Medium severity by default.
Impact: Google Cloud Backup and DR delete storage pool
BACKUP_STORAGE_POOLS_DELETE
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A storage pool, which associates a Cloud Storage bucket with Backup and DR,
was removed from the Backup and DR management console. Future backups to this storage target
will fail. Findings are classified as Low severity by default.
Impact: Google Cloud Backup and DR reduced backup expiration
BACKUP_REDUCE_BACKUP_EXPIRATION
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
The expiration date for a backup protected by Backup and DR was reduced
through the Backup and DR management console. Findings are classified as Low severity by default.
Impact: Google Cloud Backup and DR reduced backup frequency
BACKUP_REDUCE_BACKUP_FREQUENCY
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
The Backup and DR backup schedule was modified to reduce backup
frequency through the Backup and DR management console. Findings are classified as Low severity by default.
Impact: Deleted Google Cloud Backup and DR Vault
BACKUP_DELETE_VAULT
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A backup vault was deleted. Findings are classified as High severity by default.
Impact: Deleted Google Cloud Backup and DR Backup
BACKUP_DELETE_VAULT_BACKUP
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A backup stored in a backup vault was manually deleted. Findings are classified as High severity by default.
Impact: Deleted Google Cloud Backup and DR plan association
BACKUP_DELETE_BACKUP_PLAN_ASSOCIATION
Cloud Audit Logs :
Backup and DR Admin Activity audit logs
A backup plan from Backup and DR was removed from a workload. Findings are classified as High severity by default.
Brute force SSH
BRUTE_FORCE_SSH
authlog
An actor successfully gained SSH access on a host through brute force techniques. Findings are classified as High severity by default.
Cloud IDS: THREAT_IDENTIFIER
CLOUD_IDS_THREAT_ACTIVITY
Cloud IDS logs
Cloud IDS detected
threat events.
Cloud IDS detects layer 7 attacks by analyzing mirrored packets and, when a
threat event is detected, sends a threat-class finding to Security Command Center. Finding
category names start with "Cloud IDS" followed by the Cloud IDS threat
identifier.
The Cloud IDS integration with Event Threat Detection does not include
Cloud IDS vulnerability detections. Findings are classified as Low severity by default.
To learn more about Cloud IDS detections, see
Cloud IDS Logging information .
Privilege Escalation: External Member Added To Privileged Group
EXTERNAL_MEMBER_ADDED_TO_PRIVILEGED_GROUP
Google Workspace Logs :
Login Audit
Permissions :
DATA_READ
An external member was added to a privileged Google Group (a group granted sensitive roles or permissions). A finding is generated only if the group
doesn't already contain other external members from the same organization as the newly
added member. To learn more, see
Unsafe Google Group changes .
This finding isn't available for project-level activations. Findings are classified as
High or Medium severity, depending on the
sensitivity of the roles associated with the group change. For more information, see
Sensitive IAM roles and permissions .
Privilege Escalation: Privileged Group Opened To Public
PRIVILEGED_GROUP_OPENED_TO_PUBLIC
Google Workspace :
Admin Audit
Permissions :
DATA_READ
A privileged Google Group (a group granted sensitive roles or
permissions) was changed to be accessible to the general public. To learn more, see
Unsafe Google Group changes .
This finding isn't available for project-level activations. Findings are classified as
High or Medium severity, depending on the sensitivity
of the roles associated with the group change. For more information, see
Sensitive IAM roles and permissions .
Privilege Escalation: Sensitive Role Granted To Hybrid Group
SENSITIVE_ROLE_TO_GROUP_WITH_EXTERNAL_MEMBER
Cloud Audit Logs :
IAM Admin Activity audit logs
Sensitive roles were granted to a Google Group with external
members. To learn more, see
Unsafe Google Group changes .
Findings are classified as High or Medium severity,
depending on the sensitivity of the roles associated with the group change. For more
information, see Sensitive IAM roles and
permissions .
Defense Evasion: Breakglass Workload Deployment Created ( Preview )
BINARY_AUTHORIZATION_BREAKGLASS_WORKLOAD_CREATE
Cloud Audit Logs :
Admin Activity logs
Workloads were deployed by using the break-glass flag to
override Binary Authorization controls. Findings are classified as Low severity by default.
Defense Evasion: Breakglass Workload Deployment Updated ( Preview )
BINARY_AUTHORIZATION_BREAKGLASS_WORKLOAD_UPDATE
Cloud Audit Logs :
Admin Activity logs
Workloads were updated by using the break-glass flag to override
Binary Authorization controls. Findings are classified as Low severity by default.
Discovery: Evidence of Port Scanning from AI Agent ( Preview )
AGENT_ENGINE_PORT_SCANNING_EVIDENCE
Agent Engine Logs :
Agent Engine Logs
An AI agent exhibited horizontal or vertical port scanning behavior. Findings are classified as Low severity by default.
Discovery: AI Agent Unauthorized Service Account API Call ( Preview )
AGENT_ENGINE_UNAUTHORIZED_SERVICE_ACCOUNT_API_CALL
Cloud Audit Logs :
Admin Activity audit logs
A service account made an unauthorized API call to an outside project through an AI
agent. This behavior can indicate that an unauthorized user is attempting to gain
details about resources, enable or disable services, or perform other unauthorized
actions through an AI agent. Findings are classified as Low severity by
default.
Defense Evasion: GCS Bucket IP Filtering Modified
GCS_BUCKET_IP_FILTERING_MODIFIED
Cloud Audit Logs :
Admin Activity logs
A user or service account changed the IP filtering configuration for a
Cloud Storage bucket. Findings are classified as Low severity by
default.
Defense Evasion: Modify VPC Service Control
DEFENSE_EVASION_MODIFY_VPC_SERVICE_CONTROL
Cloud Audit Logs
VPC Service Controls audit logs
An existing VPC Service Controls perimeter was changed that would lead to a
reduction in the protection offered by that perimeter.
This finding isn't available for project-level activations. Findings are classified as Low severity by default.
Defense Evasion: Project HTTP Policy Block Disabled
PROJECT_HTTP_POLICY_BLOCK_DISABLED
Cloud Audit Logs :
Admin Activity logs
A user or service account successfully triggered an action to disable
storage.secureHttpTransport
on a project. This also applies when the action is taken at an org-level or folder-level
since policies applied at this level are inherited by child projects by default.
Findings are classified as Low severity by default.
Discovery: AI Agent Service Account Self-Investigation ( Preview )
AGENT_ENGINE_IAM_ANOMALOUS_BEHAVIOR_SERVICE_ACCOUNT_GETS_OWN_IAM_POLICY
Cloud Audit Logs :
IAM Data Access audit logs
Permissions :
DATA_READ
An identity associated with an AI agent was used to investigate the roles and
permissions associated with that same service account. Findings are classified as
Low severity if the request was authorized, or High
severity if the request was not authorized.
Discovery: Can get sensitive Kubernetes object check
GKE_CONTROL_PLANE_CAN_GET_SENSITIVE_OBJECT
Cloud Audit Logs :
GKE Data Access logs
A potentially malicious actor attempted to determine what sensitive objects in
GKE they can query for, by using the
kubectl auth can-i get
command. Specifically, the rule detects whether the actor checked for API access on
the following objects:
* (all)
cluster-admin
ClusterRole
Secret
Findings are classified as Low severity by default.
Discovery: Service Account Self-Investigation
SERVICE_ACCOUNT_SELF_INVESTIGATION
Cloud Audit Logs :
IAM Data Access audit logs
Permissions :
DATA_READ
An IAM service account credential was used to investigate the roles and
permissions associated with that same service account.
Sensitive roles
Findings are classified as High or Medium severity,
depending on the sensitivity of the roles granted. For more information, see
Sensitive IAM roles and permissions .
Credential Access: AI Agent Anomalous Access to Metadata Service ( Preview )
AGENT_ENGINE_ANOMALOUS_ACCESS_TO_METADATA_SERVICE
Agent Engine Logs :
Agent Engine Logs
An AI agent fetched a service account token from a metadata server. Findings are
classified as Low severity by default.
Evasion: Access from Anonymizing Proxy
ANOMALOUS_ACCESS
Cloud Audit Logs :
Admin Activity logs
Google Cloud service modifications originated from an IP address associated with
the Tor network. Findings are classified as Medium severity by default.
Exfiltration: BigQuery Data Exfiltration
DATA_EXFILTRATION_BIG_QUERY
Cloud Audit Logs :
BigQueryAuditMetadata data access logs
Permissions :
DATA_READ
Detects the following scenarios:
Resources owned by the protected organization were saved outside of the
organization, including copy or transfer operations.
This scenario is indicated by a subrule of exfil_to_external_table
and High severity.
Attempts were made to access BigQuery resources that are protected by
VPC Service Controls.
This scenario is indicated by a subrule of vpc_perimeter_violation
and Low severity.
Exfiltration: BigQuery Data Extraction
DATA_EXFILTRATION_BIG_QUERY_EXTRACTION
Cloud Audit Logs :
BigQueryAuditMetadata data access logs
Permissions :
DATA_READ
Detects the following scenarios:
A BigQuery resource owned by the organization was saved,
through extraction operations, to a Cloud Storage bucket outside the
organization.
A BigQuery resource owned by the protected organization was saved,
through extraction operations, to a publicly accessible Cloud Storage bucket
owned by that organization.
For project-level activations of the Security Command Center Premium tier,
this finding is available only if the Standard-legacy tier is enabled in the
parent organization.. Findings are classified as Low severity by default.
Exfiltration: AI Agent Initiated BigQuery VPC Perimeter Violation ( Preview )
AGENT_ENGINE_BIG_QUERY_EXFIL_VPC_PERIMETER_VIOLATION
Cloud Audit Logs :
BigQueryAuditMetadata data access logs
Permissions :
DATA_READ
Detects an attempt by an AI agent to access BigQuery resources that
are protected by VPC Service Controls. Findings are classified as Low
severity by default.
Exfiltration: AI Agent Initiated BigQuery Data Exfiltration to External Table ( Preview )
AGENT_ENGINE_BIG_QUERY_EXFIL_TO_EXTERNAL_TABLE
Cloud Audit Logs :
BigQueryAuditMetadata data access logs
Permissions :
DATA_READ
Detects when resources owned by the protected organization were saved outside of the
organization by an AI agent, including copy or transfer operations. Findings are
classified as High severity by default.
Exfiltration: AI Agent Initiated CloudSQL Exfiltration to Public Bucket ( Preview )
AGENT_ENGINE_CLOUDSQL_EXFIL_EXPORT_TO_PUBLIC_GCS
Cloud Audit Logs :
MySQL data access logs
PostgreSQL data access logs
SQL Server data access logs
Detects when live instance data was exported by an AI agent to a Cloud Storage
bucket that is owned by the organization and is publicly accessible.
For project-level activations of the Security Command Center Premium tier,
this finding is available only if the Standard-legacy tier is enabled in the
parent organization.. Findings are classified as High severity by default.
Exfiltration: AI Agent Initiated CloudSQL Exfiltration to External Bucket ( Preview )
AGENT_ENGINE_CLOUDSQL_EXFIL_EXPORT_TO_EXTERNAL_GCS
Cloud Audit Logs :
MySQL data access logs
PostgreSQL data access logs
SQL Server data access logs
Detects when live instance data was exported by an AI agent to a Cloud Storage
bucket outside of the organization.
For project-level activations of the Security Command Center Premium tier,
this finding is available only if the Standard-legacy tier is enabled in the
parent organization.. Findings are classified as High severity by default.
Exfiltration: AI Agent Initiated BigQuery Data Extraction ( Preview )
AGENT_ENGINE_BIG_QUERY_EXFIL_TO_CLOUD_STORAGE
Cloud Audit Logs :
BigQueryAuditMetadata data access logs
Permissions :
DATA_READ
Detects the following scenarios of a BigQuery data extraction
initiated by an AI agent:
A BigQuery resource owned by the protected organization was saved,
through extraction operations, to a Cloud Storage bucket outside the
organization.
A BigQuery resource owned by the protected organization was saved,
through extraction operations, to a publicly accessible Cloud Storage bucket
owned by that organization.
For project-level activations of the Security Command Center Premium tier,
this finding is available only if the Standard-legacy tier is enabled in the
parent organization.. Findings are classified as Low severity by default.
Exfiltration: BigQuery Data to Google Drive
DATA_EXFILTRATION_BIG_QUERY_TO_GOOGLE_DRIVE
Cloud Audit Logs :
BigQueryAuditMetadata data access logs
Permissions :
DATA_READ
A BigQuery resource that is owned by the protected organization was saved,
through extraction operations, to a Google Drive folder. Findings are classified as Low severity by default.
Exfiltration: Move to Public BigQuery resource
DATA_EXFILTRATION_BIG_QUERY_TO_PUBLIC_RESOURCE
Cloud Audit Logs :
BigQueryAuditMetadata data access logs
Permissions :
DATA_READ
A BigQuery resource was saved to a public resource owned by your
organization. Findings are classified as Medium severity by default.
Exfiltration: Cloud SQL Data Exfiltration
CLOUDSQL_EXFIL_EXPORT_TO_EXTERNAL_GCS
CLOUDSQL_EXFIL_EXPORT_TO_PUBLIC_GCS
Cloud Audit Logs :
MySQL data access logs
PostgreSQL data access logs
SQL Server data access logs
Detects the following scenarios:
Live instance data was exported to a Cloud Storage bucket outside of the
organization.
Live instance data was exported to a Cloud Storage bucket that is owned by the
organization and is publicly accessible.
For project-level activations of the Security Command Center Premium tier,
this finding is available only if the Standard-legacy tier is enabled in the
parent organization.. Findings are classified as High severity by default.
Exfiltration: Cloud SQL Restore Backup to External Organization
CLOUDSQL_EXFIL_RESTORE_BACKUP_TO_EXTERNAL_INSTANCE
Cloud Audit Logs :
MySQL admin activity logs
PostgreSQL admin activity logs
SQL Server admin activity logs
The backup of a Cloud SQL instance was restored to an instance
outside of the organization. Findings are classified as High severity by default.
Exfiltration: Cloud SQL Over-Privileged Grant
CLOUDSQL_EXFIL_USER_GRANTED_ALL_PERMISSIONS
Cloud Audit Logs :
PostgreSQL data access logs
Note : You must enable the pgAudit
extension to use this rule.
A Cloud SQL for PostgreSQL user or role was granted all
privileges to a database, or to all tables, procedures, or functions in a schema. Findings are classified as Low severity by default.
Initial Access: Database Superuser Writes to User Tables
CLOUDSQL_SUPERUSER_WRITES_TO_USER_TABLES
Cloud Audit Logs :
Cloud SQL for PostgreSQL data access logs
Cloud SQL for MySQL data access logs
Note : You must enable the pgAudit
extension for PostgreSQL or database auditing
for MySQL to use this rule.
A Cloud SQL superuser ( postgres for PostgreSQL
servers or root for MySQL users) wrote to non-system tables. Findings are classified as Low severity by default.
Privilege Escalation: AlloyDB Over-Privileged Grant
ALLOYDB_USER_GRANTED_ALL_PERMISSIONS
Cloud Audit Logs :
AlloyDB for PostgreSQL data access logs
Note : You must enable
the pgAudit extension to use this rule.
An AlloyDB for PostgreSQL user or role was granted all
privileges to a database, or to all tables, procedures, or functions in a schema. Findings are classified as Low severity by default.
Privilege Escalation: AlloyDB Database Superuser Writes to User Tables
ALLOYDB_SUPERUSER_WRITES_TO_USER_TABLES
Cloud Audit Logs :
AlloyDB for PostgreSQL data access logs
Note : You must enable
the pgAudit extension to use this rule.
An AlloyDB for PostgreSQL superuser ( postgres ) wrote
to non-system tables. Findings are classified as Low severity by default.
Initial Access: AI Agent Identity Excessive Permission Denied Actions ( Preview )
AGENT_ENGINE_EXCESSIVE_FAILED_ATTEMPT
Cloud Audit Logs :
Admin Activity logs
An identity associated with an AI agent repeatedly triggered permission denied
errors by attempting changes across multiple methods and services. Findings are
classified as Medium severity by default.
Initial Access: Dormant Service Account Action
DORMANT_SERVICE_ACCOUNT_USED_IN_ACTION
Cloud Audit Logs :
Admin Activity logs
A dormant
user-managed service account
triggered an action. In this context, a service account is considered dormant if it has
been inactive for more than 180 days. Findings are classified as High severity by default.
Privilege Escalation: Dormant Service Account Granted Sensitive Role
DORMANT_SERVICE_ACCOUNT_ADDED_IN_IAM_ROLE
Cloud Audit Logs :
IAM Admin Activity audit logs
A dormant
user-managed service account
was granted one or more sensitive IAM roles. In this context, a service
account is considered dormant if it has been inactive for more than 180 days.
Sensitive roles
Findings are classified as High or Medium severity,
depending on the sensitivity of the roles granted. Findings are classified as Medium severity by default. For more information, see
Sensitive IAM roles and permissions .
Privilege Escalation: Impersonation Role Granted For Dormant Service Account
DORMANT_SERVICE_ACCOUNT_IMPERSONATION_ROLE_GRANTED
Cloud Audit Logs :
IAM Admin Activity audit logs
A principal was granted
permissions to impersonate
a dormant user-managed service account. In this context, a service account is considered
dormant if it has been inactive for more than 180 days. Findings are classified as Medium severity by default.
Initial Access: Dormant Service Account Key Created
DORMANT_SERVICE_ACCOUNT_KEY_CREATED
Cloud Audit Logs :
Admin Activity logs
A key was created for a dormant
user-managed service account .
In this context, a service account is considered dormant if it has been inactive for
more than 180 days. Findings are classified as High severity by default.
Initial Access: Leaked Service Account Key Used
LEAKED_SA_KEY_USED
Cloud Audit Logs :
Admin Activity logs
Data Access logs
A leaked service account key was used to authenticate the action. In
this context, a leaked service account key is one that was posted on the public
internet. Findings are classified as High severity by default.
Initial Access: Excessive Permission Denied Actions
EXCESSIVE_FAILED_ATTEMPT
Cloud Audit Logs :
Admin Activity logs
A principal repeatedly triggered permission denied errors by
attempting changes across multiple methods and services. Findings are classified as Medium severity by default.
Persistence: Strong Authentication Disabled
ENFORCE_STRONG_AUTHENTICATION
Google Workspace :
Admin Audit
2-step verification was disabled for the organization.
This finding isn't available for project-level activations. Findings are classified as Medium severity by default.
Persistence: Two Step Verification Disabled
2SV_DISABLE
Google Workspace Logs :
Login Audit
Permissions :
DATA_READ
A user disabled 2-step verification.
This finding isn't available for project-level activations. Findings are classified as Low severity by default.
Initial Access: Account Disabled Hijacked
ACCOUNT_DISABLED_HIJACKED
Google Workspace Logs :
Login Audit
Permissions :
DATA_READ
A user's account was suspended due to suspicious activity.
This finding isn't available for project-level activations. Findings are classified as Medium severity by default.
Initial Access: Disabled Password Leak
ACCOUNT_DISABLED_PASSWORD_LEAK
Google Workspace Logs :
Login Audit
Permissions :
DATA_READ
A user's account was disabled because a password leak was detected.
This finding isn't available for project-level activations. Findings are classified as Low severity by default.
Initial Access: Government Based Attack
GOV_ATTACK_WARNING
Google Workspace Logs :
Login Audit
Permissions :
DATA_READ
Government-backed attackers might have tried to compromise a user account or computer.
This finding isn't available for project-level activations. Findings are classified as High severity by default.
Initial Access: Log4j Compromise Attempt
Unavailable
Cloud Load Balancing Logs :
Cloud HTTP Load Balancer
Note : You must enable external Application Load Balancer logging to use this rule.
Java Naming and Directory Interface (JNDI)
lookups within
headers or URL parameters were detected. These lookups might indicate attempts at Log4Shell
exploitation. These findings have low severity, because they only indicate a detection
or exploit attempt, not a vulnerability or a compromise.
This rule is always on. Findings are classified as Low severity by default.
Initial Access: Suspicious Login Blocked
SUSPICIOUS_LOGIN
Google Workspace Logs :
Login Audit
Permissions :
DATA_READ
A suspicious login to a user's account was detected and blocked.
This finding isn't available for project-level activations. Findings are classified as Low severity by default.
Log4j Malware: Bad Domain
LOG4J_BAD_DOMAIN
Cloud DNS logs
Log4j exploit traffic was detected based on a connection to, or a lookup of, a known
domain used in Log4j attacks. Findings are classified as Low severity by default.
Log4j Malware: Bad IP
LOG4J_BAD_IP
VPC flow logs
Firewall Rules logs
Cloud NAT logs
Log4j exploit traffic was detected based on a connection to a known IP address used in
Log4j attacks. Findings are classified as Low severity by default.
Malware: bad domain
MALWARE_BAD_DOMAIN
Cloud DNS logs
Malware was detected based on a connection to, or a lookup of, a known bad domain. Findings are classified as Low severity by default.
Malware: bad IP
MALWARE_BAD_IP
VPC flow logs
Firewall Rules logs
Cloud NAT logs
Malware was detected based on a connection to a known bad IP address. Findings are classified as Low severity by default.
Malware: Cryptomining Bad Domain
CRYPTOMINING_POOL_DOMAIN
Cloud DNS logs
Cryptomining was detected based on a connection to, or a lookup of, a known mining
domain. Findings are classified as Low severity by default.
Malware: Cryptomining Bad IP
CRYPTOMINING_POOL_IP
VPC flow logs
Firewall Rules logs
Cloud NAT logs
Cryptomining was detected based on a connection to a known mining IP address. Findings are classified as Low severity by default.
Persistence: GCE Admin Added SSH Key
GCE_ADMIN_ADD_SSH_KEY
Cloud Audit Logs :
Compute Engine Admin Activity audit logs
The Compute Engine instance metadata SSH key value was modified on
an established instance (older than 1 week). Findings are classified as Low severity by default.
Persistence: GCE Admin Added Startup Script
GCE_ADMIN_ADD_STARTUP_SCRIPT
Cloud Audit Logs :
Compute Engine Admin Activity audit logs
The Compute Engine instance metadata startup script
value was modified on an established instance (older than 1 week). Findings are classified as Low severity by default.
Persistence: IAM Anomalous Grant
IAM_ANOMALOUS_GRANT
Cloud Audit Logs :
IAM Admin Activity audit logs
This finding includes subrules that provide more specific information about each
instance of this finding.
The following list shows all possible subrules:
external_service_account_added_to_policy ,
external_member_added_to_policy : Privileges were granted to
IAM users and service accounts that are not members of your
organization or, if Security Command Center is activated at the project level only,
your project.
Note : If Security Command Center is activated at the organization level at any
tier, then this detector uses an organization's existing IAM
policies as context. If Security Command Center activation is only at the project
level, then the detector uses only the project's IAM policies as
context.
If a sensitive IAM grant to an external member occurs, and there
are less than three existing IAM policies that are similar to it,
this detector generates a finding.
Sensitive roles
Findings are classified as High or Medium
severity, depending on the sensitivity of the roles granted. Findings are classified as High severity by default. For more information,
see
Sensitive IAM roles and permissions .
external_member_invited_to_policy : An external member was
invited as the owner of the project through the
InsertProjectOwnershipInvite API.
custom_role_given_sensitive_permissions : The
setIAMPolicy permission was added to a custom role.
service_account_granted_sensitive_role_to_member : Privileged
roles were granted to members through a service account. This subrule is
triggered by a subset of sensitive roles that include only basic IAM
roles and certain data storage roles. For more information, see
Sensitive IAM roles and permissions .
policy_modified_by_default_compute_service_account : A
default Compute Engine service account was used to modify project
IAM settings.
Persistence: Unmanaged Account Granted Sensitive Role ( Preview )
UNMANAGED_ACCOUNT_ADDED_IN_IAM_ROLE
Cloud Audit Logs :
IAM Admin Activity audit logs
A sensitive role was granted to an
unmanaged account . Findings are classified as High severity by default.
Persistence: New API Method
ANOMALOUS_BEHAVIOR_NEW_API_METHOD
Cloud Audit Logs :
Admin Activity logs
IAM service accounts used anomalous access to Google Cloud services. Findings are classified as Low severity by default.
Persistence: New Geography
IAM_ANOMALOUS_BEHAVIOR_IP_GEOLOCATION
Cloud Audit Logs :
Admin Activity logs
IAM user and service accounts accessed Google Cloud from
anomalous locations, based on the geolocation of the requesting IP addresses.
This finding isn't available for project-level activations and they are classified as Low severity by default.
Persistence: New User Agent
IAM_ANOMALOUS_BEHAVIOR_USER_AGENT
Cloud Audit Logs :
Admin Activity logs
IAM service accounts accessed Google Cloud from
anomalous or suspicious user agents.
This finding isn't available for project-level activations. Findings are classified as Low severity by default.
Persistence: SSO Enablement Toggle
TOGGLE_SSO_ENABLED
Google Workspace :
Admin Audit
The Enable SSO (single sign-on) setting on the admin account was disabled.
This finding isn't available for project-level activations. Findings are classified as High severity by default.
Persistence: SSO Settings Changed
CHANGE_SSO_SETTINGS
Google Workspace :
Admin Audit
The SSO settings for the admin account were changed.
This finding isn't available for project-level activations. Findings are classified as High severity by default.
Privilege Escalation: Anomalous Impersonation of Service Account for Admin Activity
ANOMALOUS_SA_DELEGATION_IMPERSONATION_OF_SA_ADMIN_ACTIVITY
Cloud Audit Logs :
Admin Activity logs
A potentially anomalous
impersonated service account was
used for an administrative activity. Findings are classified as Medium severity by default.
Privilege Escalation: Anomalous Multistep Service Account Delegation for Admin Activity
ANOMALOUS_SA_DELEGATION_MULTISTEP_ADMIN_ACTIVITY
Cloud Audit Logs :
Admin Activity logs
An anomalous multistep
delegated request
was found for an administrative activity. Findings are classified as Medium severity by default.
Privilege Escalation: Anomalous Multistep Service Account Delegation for Data Access
ANOMALOUS_SA_DELEGATION_MULTISTEP_DATA_ACCESS
Cloud Audit Logs :
Data Access logs
An anomalous multistep
delegated request
was found for a data access activity. Findings are classified as Medium severity by default.
Privilege Escalation: Anomalous Service Account Impersonator for Admin Activity
ANOMALOUS_SA_DELEGATION_IMPERSONATOR_ADMIN_ACTIVITY
Cloud Audit Logs :
Admin Activity logs
A potentially anomalous
caller or impersonator in a
delegation chain was used for an administrative activity. Findings are classified as Medium severity by default.
Privilege Escalation: Anomalous Service Account Impersonator for Data Access
ANOMALOUS_SA_DELEGATION_IMPERSONATOR_DATA_ACCESS
Cloud Audit Logs :
Data Access logs
A potentially anomalous
caller or impersonator in a
delegation chain was used for a data access activity. Findings are classified as Medium severity by default.
Privilege Escalation: Changes to sensitive Kubernetes RBAC objects
GKE_CONTROL_PLANE_EDIT_SENSITIVE_RBAC_OBJECT
Cloud Audit Logs :
GKE Admin Activity logs
To escalate privilege, a potentially malicious actor attempted to modify a
ClusterRole , RoleBinding , or ClusterRoleBinding
role-based access control (RBAC) object of the sensitive
cluster-admin
role by using a PUT or PATCH request. Findings are classified as Low severity by default.
Privilege Escalation: Create Kubernetes CSR for master cert
GKE_CONTROL_PLANE_CSR_FOR_MASTER_CERT
Cloud Audit Logs :
GKE Admin Activity logs
A potentially malicious actor created a Kubernetes master
certificate signing request
(CSR), which gives them
cluster-admin
access. Findings are classified as High severity by default.
Privilege Escalation: Creation of sensitive Kubernetes bindings
GKE_CONTROL_PLANE_CREATE_SENSITIVE_BINDING
Cloud Audit Logs :
IAM Admin Activity audit logs
To escalate privilege, a potentially malicious actor attempted to create a new
RoleBinding or ClusterRoleBinding object for the
cluster-admin
role. Findings are classified as Low severity by default.
Privilege Escalation: Get Kubernetes CSR with compromised bootstrap credentials
GKE_CONTROL_PLANE_GET_CSR_WITH_COMPROMISED_BOOTSTRAP_CREDENTIALS
Cloud Audit Logs :
GKE Data Access logs
A potentially malicious actor queried for a
certificate signing request
(CSR), with the kubectl command, using compromised bootstrap credentials. Findings are classified as High severity by default.
Privilege Escalation: Launch of privileged Kubernetes container
GKE_CONTROL_PLANE_LAUNCH_PRIVILEGED_CONTAINER
Cloud Audit Logs :
GKE Admin Activity logs
A potentially malicious actor created a Pod that contains privileged containers or
containers with privilege escalation capabilities.
A privileged container has the privileged field set to true .
A container with privilege escalation capabilities has the
allowPrivilegeEscalation field set to true . For more
information, see the
SecurityContext v1 core
API reference in the Kubernetes documentation. Findings are classified as Low severity by default.
Persistence: Service Account Key Created
SERVICE_ACCOUNT_KEY_CREATION
Cloud Audit Logs :
IAM Admin Activity audit logs
A service account key was created. Service account keys are long-lived
credentials that increase the risk of unauthorized access to Google Cloud
resources. Findings are classified as Low severity by default.
Privilege Escalation: Global Shutdown Script Added
GLOBAL_SHUTDOWN_SCRIPT_ADDED
Cloud Audit Logs :
IAM Admin Activity audit logs
A global shutdown script was added to a project. Findings are classified as Low severity by default.
Persistence: Global Startup Script Added
GLOBAL_STARTUP_SCRIPT_ADDED
Cloud Audit Logs :
IAM Admin Activity audit logs
A global startup script was added to a project. Findings are classified as Low severity by default.
Defense Evasion: Organization-Level Service Account Token Creator Role Added
ORG_LEVEL_SERVICE_ACCOUNT_TOKEN_CREATOR_ROLE_ADDED
Cloud Audit Logs :
IAM Admin Activity audit logs
The
Service Account Token Creator IAM role
was granted at the organization level. Findings are classified as Low severity by default.
Defense Evasion: Project-Level Service Account Token Creator Role Added
PROJECT_LEVEL_SERVICE_ACCOUNT_TOKEN_CREATOR_ROLE_ADDED
Cloud Audit Logs :
IAM Admin Activity audit logs
The
Service Account Token Creator IAM role
was granted at the project level. Findings are classified as Low severity by default.
Lateral Movement: OS Patch Execution From Service Account
Temporarily unavailable
OS_PATCH_EXECUTION_FROM_SERVICE_ACCOUNT
Cloud Audit Logs .
VM Manager audit logs
A service account used the
Compute Engine Patch feature to
update the operating system of any currently running Compute Engine instance. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor VM Manager activity, use
VM Manager audit logs .
Lateral Movement: Modified Boot Disk Attached to Instance ( Preview )
MODIFY_BOOT_DISK_ATTACH_TO_INSTANCE
Cloud Audit Logs :
Compute Engine audit logs
A boot disk was detached from one Compute Engine instance and attached
to another, which could indicate a malicious attempt to compromise the system using a
modified boot disk. Findings are classified as Low severity by default.
Credential Access: Secrets Accessed In Kubernetes Namespace
SECRETS_ACCESSED_IN_KUBERNETES_NAMESPACE
Cloud Audit Logs :
GKE Data Access logs
Secrets or service account tokens were accessed by a service account in the
current Kubernetes namespace. Findings are classified as Low severity by default.
Resource Development: Offensive Security Distro Activity
OFFENSIVE_SECURITY_DISTRO_ACTIVITY
Cloud Audit Logs :
IAM Admin Activity audit logs
A Google Cloud resource was successfully manipulated through known penetration
testing or offensive security distros. Findings are classified as Low severity by default.
Privilege Escalation: AI Agent Suspicious Token Generation Using signJwt ( Preview )
AGENT_ENGINE_SUSPICIOUS_TOKEN_GENERATION_SIGN_JWT
Cloud Audit Logs :
IAM Data Access audit logs
A service account associated with an AI agent used the
serviceAccounts.signJwt method to generate an access token for
another service account.
Findings are classified as Low severity by default.
Privilege Escalation: AI Agent Suspicious Token Generation Using Implicit Delegation ( Preview )
AGENT_ENGINE_SUSPICIOUS_TOKEN_GENERATION_IMPLICIT_DELEGATION
Cloud Audit Logs :
IAM Data Access audit logs
The iam.serviceAccounts.implicitDelegation permission was misused to
generate access tokens from a more privileged service account through an AI agent.
Findings are classified as Low severity by default.
Privilege Escalation: AI Agent Suspicious Cross-Project OpenID Token Generation ( Preview )
AGENT_ENGINE_SUSPICIOUS_TOKEN_GENERATION_CROSS_PROJECT_OPENID
Cloud Audit Logs :
IAM Data Access audit logs
The iam.serviceAccounts.getOpenIdToken IAM permission was
used across projects through an AI agent.
This finding isn't available for project-level activations. Findings are classified
as Low severity by default.
Privilege Escalation: AI Agent Suspicious Cross-Project Access Token Generation ( Preview )
AGENT_ENGINE_SUSPICIOUS_TOKEN_GENERATION_CROSS_PROJECT_ACCESS_TOKEN
Cloud Audit Logs :
IAM Data Access audit logs
The iam.serviceAccounts.getAccessToken IAM permission was
used across projects through an AI agent.
This finding isn't available for project-level activations. Findings are classified as Low severity by default.
Privilege Escalation: New Service Account is Owner or Editor
Temporarily unavailable
SERVICE_ACCOUNT_EDITOR_OWNER
Cloud Audit Logs :
IAM Admin Activity audit logs
A new service account was created with Editor or Owner roles for a project. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor IAM changes,
IAM Admin Activity audit logs .
Discovery: Information Gathering Tool Used
INFORMATION_GATHERING_TOOL_USED
Cloud Audit Logs :
IAM Admin Activity audit logs
ScoutSuite usage was detected. ScoutSuite is a cloud security auditing tool that is known to be used
by threat actors. Findings are classified as Low severity by default.
Privilege Escalation: Suspicious Token Generation
Temporarily unavailable
SUSPICIOUS_TOKEN_GENERATION_IMPLICIT_DELEGATION
Cloud Audit Logs :
IAM audit logs
The iam.serviceAccounts.implicitDelegation permission was
misused to generate access tokens from a more privileged service account. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor IAM activity, use
IAM audit logs .
Privilege Escalation: Suspicious Token Generation
Temporarily unavailable
SUSPICIOUS_TOKEN_GENERATION_SIGN_JWT
Cloud Audit Logs :
IAM audit logs
A service account used the
serviceAccounts.signJwt
method to generate an access token for another service account. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor IAM activity, use
IAM audit logs .
Privilege Escalation: Suspicious Token Generation
Temporarily unavailable
SUSPICIOUS_TOKEN_GENERATION_CROSS_PROJECT_OPENID
Cloud Audit Logs :
IAM audit logs
The iam.serviceAccounts.getOpenIdToken
IAM permission was used across projects.
This finding isn't available for project-level activations. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor IAM activity, use
IAM audit logs .
Privilege Escalation: Suspicious Token Generation
Temporarily unavailable
SUSPICIOUS_TOKEN_GENERATION_CROSS_PROJECT_ACCESS_TOKEN
Cloud Audit Logs :
IAM audit logs
The iam.serviceAccounts.getAccessToken
IAM permission was used across projects.
This finding isn't available for project-level activations. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor IAM activity, use
IAM audit logs .
Privilege Escalation: Suspicious Cross-Project Permission Use
SUSPICIOUS_CROSS_PROJECT_PERMISSION_DATAFUSION
Cloud Audit Logs :
IAM Admin Activity audit logs
The datafusion.instances.create
IAM permission was used across projects.
This finding isn't available for project-level activations. Findings are classified as Low severity by default.
Command and Control: DNS Tunneling
Temporarily unavailable
DNS_TUNNELING_IODINE_HANDSHAKE
Cloud DNS logs
The handshake of the DNS tunneling tool Iodine was detected. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor DNS activity, use
Cloud DNS logs .
Defense Evasion: VPC Route Masquerade Attempt
VPC_ROUTE_MASQUERADE
Cloud Audit Logs :
IAM Admin Activity audit logs
VPC routes masquerading as Google Cloud default
routes were manually created, allowing egress traffic to external IP addresses. Findings are classified as High severity by default.
Impact: Billing Disabled
Temporarily unavailable
BILLING_DISABLED_SINGLE_PROJECT
Cloud Audit Logs :
Cloud Billing Admin Activity audit logs
Billing was disabled for a project. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor changes to billing, use
Cloud Billing Admin Activity audit logs .
Impact: Billing Disabled
Temporarily unavailable
BILLING_DISABLED_MULTIPLE_PROJECTS
Cloud Audit Logs :
Cloud Billing Admin Activity audit logs
Billing was disabled for multiple projects in an organization within a
short time period. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor changes to billing, use
Cloud Billing Admin Activity audit logs .
Impact: VPC Firewall High Priority Block
VPC_FIREWALL_HIGH_PRIORITY_BLOCK
Cloud Audit Logs :
IAM Admin Activity audit logs
A VPC firewall rule that blocks all egress
traffic was added at priority 0. Findings are classified as Low severity by default.
Impact: VPC Firewall Mass Rule
Deletion Temporarily unavailable
VPC_FIREWALL_MASS_RULE_DELETION
Cloud Audit Logs :
IAM Admin Activity audit logs
VPC firewall rules were mass deleted
by non-service accounts.
This rule is temporarily unavailable. To monitor updates to your firewall rules, use
the Cloud audit logs . Findings are classified as Low severity by default.
Impact: Service API Disabled
SERVICE_API_DISABLED
Cloud Audit Logs :
IAM Admin Activity audit logs
A Google Cloud service API was disabled in a production environment. Findings are classified as Low severity by default.
Impact: Managed Instance Group Autoscaling Set To Maximum
Temporarily unavailable
MIG_AUTOSCALING_SET_TO_MAX
Cloud Audit Logs :
Compute Engine Admin Activity audit logs
A managed instance group was
configured for maximum autoscaling. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor changes to Compute Engine
assets, use
Compute Engine Admin Activity audit logs .
Discovery: Unauthorized Service Account API Call
Temporarily unavailable
UNAUTHORIZED_SERVICE_ACCOUNT_API_CALL
Cloud Audit Logs :
Admin Activity audit logs
A service account made an unauthorized cross-project API call. Findings are classified as Low severity by default.
This rule is temporarily unavailable. To monitor service account usage, use
Admin Activity audit logs.
Defense Evasion: Anonymous Sessions Granted Cluster Admin Access
ANONYMOUS_SESSIONS_GRANTED_CLUSTER_ADMIN
Cloud Audit Logs :
GKE Admin Activity logs
A role-based access control (RBAC)
ClusterRoleBinding object was created, adding the
root-cluster-admin-binding behavior to anonymous users. Findings are classified as Low severity by default.
Persistence: New Geography for AI Service
AI_IAM_ANOMALOUS_BEHAVIOR_IP_GEOLOCATION
Cloud Audit Logs :
Admin Activity logs
IAM user and service accounts accessed Google Cloud AI services from
anomalous locations, based on the geolocation of the requesting IP addresses.
This finding isn't available for project-level activations and they are classified as Low severity by default.
Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity
AI_ANOMALOUS_SA_DELEGATION_MULTISTEP_ADMIN_ACTIVITY
Cloud Audit Logs :
Admin Activity logs
An anomalous multistep
delegated request
was found for an administrative activity of an AI service. Findings are classified as Medium severity by default.
Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Data Access
AI_ANOMALOUS_SA_DELEGATION_MULTISTEP_DATA_ACCESS
Cloud Audit Logs :
Data Access logs
An anomalous multistep
delegated request
was found for a data access activity of an AI service. Findings are classified as Medium severity by default.
Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity
AI_ANOMALOUS_SA_DELEGATION_IMPERSONATOR_ADMIN_ACTIVITY
Cloud Audit Logs :
Admin Activity logs
A potentially anomalous
caller or impersonator in a
delegation chain was used for an administrative activity of an AI service. Findings are classified as Medium severity by default.
Privilege Escalation: Anomalous Service Account Impersonator for AI Data Access
AI_ANOMALOUS_SA_DELEGATION_IMPERSONATOR_DATA_ACCESS
Cloud Audit Logs :
Data Access logs
A potentially anomalous
caller or impersonator in a
delegation chain was used for a data access activity of an AI service. Findings are classified as Medium severity by default.
Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity
AI_ANOMALOUS_SA_DELEGATION_IMPERSONATION_OF_SA_ADMIN_ACTIVITY
Cloud Audit Logs :
Admin Activity logs
A potentially anomalous
impersonated service account was
used for an administrative activity of an AI service. Findings are classified as Medium severity by default.
Persistence: New AI API Method
AI_ANOMALOUS_BEHAVIOR_NEW_API_METHOD
Cloud Audit Logs :
Admin Activity logs
IAM service accounts used anomalous access to Google Cloud AI services. Findings are classified as Low severity by default.
Initial Access: Dormant Service Account Activity in AI Service
AI_DORMANT_SERVICE_ACCOUNT_USED_IN_ACTION
Cloud Audit Logs :
Admin Activity logs
A dormant
user-managed service account
triggered an action in AI services. In this context, a service account is considered dormant if it has
been inactive for more than 180 days. Findings are classified as High severity by default.
Initial Access: Anonymous GKE Resource Created from the Internet ( Preview )
GKE_RESOURCE_CREATED_ANONYMOUSLY_FROM_INTERNET
Cloud Audit Logs :
GKE Admin Activity logs .
A resource was created by
an effectively anonymous internet user . Findings are classified as
High severity by default.
Initial Access: GKE Resource Modified Anonymously from the Internet ( Preview )
GKE_RESOURCE_MODIFIED_ANONYMOUSLY_FROM_INTERNET
Cloud Audit Logs :
GKE Admin Activity logs
A resource was manipulated by
an effectively anonymous internet user . Findings are classified as High severity by default.
Privilege Escalation: Effectively Anonymous Users Granted GKE Cluster Access
GKE_ANONYMOUS_USERS_GRANTED_ACCESS
Cloud Audit Logs :
GKE Admin Activity logs
Someone created an RBAC binding that references one of the following users or groups:
system:anonymous
system:unauthenticated
system:authenticated
These users and groups are effectively anonymous and should be avoided when creating
role bindings or cluster role bindings to any RBAC roles. Review the binding to ensure
that it is necessary. If the binding isn't necessary, remove it. Findings are classified as Medium severity by default.
Execution: Suspicious Exec or Attach to a System Pod ( Preview )
GKE_SUSPICIOUS_EXEC_ATTACH
Cloud Audit Logs :
GKE Admin Activity logs
Someone used the exec or attach commands to get a shell or
execute a command on a container running in the kube-system namespace.
These methods are sometimes used for legitimate debugging purposes. However, the
kube-system namespace is intended for system objects created by Kubernetes,
and unexpected command execution or shell creation should be reviewed. Findings are classified as Medium severity by default.
Privilege Escalation: Workload Created with a Sensitive Host Path Mount ( Preview )
GKE_SENSITIVE_HOSTPATH
Cloud Audit Logs :
GKE Admin Activity logs
Someone created a workload that contains a hostPath volume mount to a
sensitive path on the host node's file system. Access to these paths on the host
filesystem can be used to access privileged or sensitive information on the node and for
container escapes. If possible, don't allow any hostPath volumes in your
cluster. Findings are classified as Low severity by default.
Privilege Escalation: Workload with shareProcessNamespace enabled ( Preview )
GKE_SHAREPROCESSNAMESPACE_POD
Cloud Audit Logs :
GKE Admin Activity logs
Someone deployed a workload with the shareProcessNamespace option set to
true , allowing all containers to share the same Linux process namespace.
This could allow an untrusted or compromised container to escalate privileges by
accessing and controlling environment variables, memory, and other sensitive data from
processes running in other containers. Findings are classified as Low severity by default.
Privilege Escalation: ClusterRole with Privileged Verbs ( Preview )
GKE_CLUSTERROLE_PRIVILEGED_VERBS
Cloud Audit Logs :
GKE Admin Activity logs
Someone created an RBAC ClusterRole that contains the bind ,
escalate , or impersonate verbs. A subject that's bound to a
role with these verbs can impersonate other users with higher privileges, bind to
additional Roles or ClusterRoles that contain additional
permissions, or modify their own ClusterRole permissions. This might lead to those
subjects gaining cluster-admin privileges. Findings are classified as Low severity by default.
Privilege Escalation: ClusterRoleBinding to Privileged Role
GKE_CRB_CLUSTERROLE_AGGREGATION_CONTROLLER
Cloud Audit Logs :
GKE Admin Activity logs
Someone created an RBAC ClusterRoleBinding that references the default
system:controller:clusterrole-aggregation-controller
ClusterRole . This default ClusterRole has the
escalate verb, which allows subjects to modify the privileges of their own
roles, allowing for privilege escalation. Findings are classified as Low severity by default.
Defense Evasion: Manually Deleted Certificate Signing Request (CSR)
GKE_MANUALLY_DELETED_CSR
Cloud Audit Logs :
GKE Admin Activity logs
Someone manually deleted a certificate signing request (CSR). CSRs are automatically
removed by a garbage collection controller, but malicious actors might manually delete
them to evade detection. If the deleted CSR was for an approved and issued certificate,
the potentially malicious actor now has an additional authentication method to access
the cluster. The permissions associated with the certificate vary depending on which
subject they included, but can be highly privileged. Kubernetes does not support
certificate revocation. Findings are classified as Low severity by default.
Credential Access: Failed Attempt to Approve Kubernetes Certificate Signing Request
(CSR)
GKE_APPROVE_CSR_FORBIDDEN
Cloud Audit Logs :
GKE Admin Activity logs
Someone attempted to manually approve a certificate signing request (CSR) but the action
failed. Creating a certificate for cluster authentication is a common method for
attackers to create persistent access to a compromised cluster. The permissions
associated with the certificate vary depending on which subject they included, but can
be highly privileged. Findings are classified as Low severity by default.
Credential Access: Manually Approved Kubernetes Certificate Signing Request (CSR)
( Preview )
GKE_CSR_APPROVED
Cloud Audit Logs :
GKE Admin Activity logs
Someone manually approved a certificate signing request (CSR). Creating a certificate
for cluster authentication is a common method for attackers to create persistent access
to a compromised cluster. The permissions associated with the certificate vary depending
on which subject they included, but can be highly privileged. Findings are classified as Low severity by default.
Execution: Kubernetes Pod Created with Potential Reverse Shell Arguments
GKE_REVERSE_SHELL_POD
Cloud Audit Logs :
GKE Admin Activity logs
Someone created a Pod that contains commands or arguments that are commonly associated with a
reverse shell . Attackers use
reverse shells to expand or maintain their initial access to a cluster and to execute
arbitrary commands. Findings are classified as Medium severity by default.
Defense Evasion: Potential Kubernetes Pod Masquerading
GKE_POD_MASQUERADING
Cloud Audit Logs :
GKE Admin Activity logs
Someone deployed a Pod with a naming convention that is similar to the default workloads that
GKE creates for regular cluster operation. This technique is called
masquerading . Findings are classified as Medium severity by default.
Privilege Escalation: Suspicious Kubernetes Container Names - Exploitation and Escape
( Preview )
GKE_SUSPICIOUS_EXPLOIT_POD
Cloud Audit Logs :
GKE Admin Activity logs
Someone deployed a Pod with a naming convention that is similar to common tools used for
container escapes or to execute other attacks on the cluster. Findings are classified as Medium severity by default.
Persistence: Service Account Created in sensitive namespace
GKE_SERVICE_ACCOUNT_CREATION_SENSITIVE_NAMESPACE
Cloud Audit Logs :
GKE Admin Activity logs
Someone created a service account in a sensitive namespace. The
kube-system and kube-public namespaces are critical for
GKE cluster operations, and unauthorized service accounts could
compromise cluster stability and security. Findings are classified as Low severity by default.
Impact: Suspicious Kubernetes Container Names - Cryptocurrency Mining
Temporarily unavailable
GKE_SUSPICIOUS_CRYPTOMINING_POD
Cloud Audit Logs :
GKE Admin Activity logs
Someone deployed a Pod with a naming convention that is similar to common cryptocurrency coin
miners. This may be an attempt by an attacker who has achieved initial access to the
cluster to use the cluster's resources for cryptocurrency mining. Findings are classified as High severity by default.
This rule is temporarily unavailable. To monitor Kubernetes activity, use
GKE Admin Activity logs .
Execution: Workload triggered in sensitive namespace
GKE_SENSITIVE_NAMESPACE_WORKLOAD_TRIGGERED
Cloud Audit Logs :
GKE Admin Activity logs
Someone deployed a workload (for example, a Pod or Deployment) in
the kube-system or kube-public namespaces. These namespaces
are critical for GKE cluster operations, and unauthorized workloads could
compromise cluster stability or security. Findings are classified as Low severity by default.
Execution: GKE launch excessively capable container ( Preview )
GKE_EXCESSIVELY_CAPABLE_CONTAINER_CREATED
Cloud Audit Logs :
GKE Admin Activity logs
Someone created a container with one or more of the following capabilities in
a cluster with an elevated security context:
CAP_SYS_MODULE
CAP_SYS_RAWIO
CAP_SYS_PTRACE
CAP_SYS_BOOT
CAP_DAC_READ_SEARCH
CAP_NET_ADMIN
CAP_BPF
These capabilities can be used to escape from containers. Use caution
when provisioning these capabilities. Findings are classified as Low severity by default.
Persistence: GKE Webhook Configuration Detected
GKE_WEBHOOK_CONFIG_CREATED
Cloud Audit Logs :
GKE Admin Activity logs
A webhook configuration was detected in your GKE cluster.
Webhooks can intercept and modify Kubernetes API requests, potentially allowing
attackers to persist within your cluster or manipulate resources. Findings are classified as Low severity by default.
Defense Evasion: Static Pod Created
GKE_STATIC_POD_CREATED
Cloud Audit Logs :
GKE Admin Activity logs
Someone created a static Pod in your GKE cluster.
Static Pods run directly on the node and bypass the Kubernetes API server,
which makes them more difficult to monitor and control. Attackers can use static Pods to
evade detection or maintain persistence. Findings are classified as Low severity by default.
Initial Access: Successful API call made from a TOR proxy IP
GKE_TOR_PROXY_IP_REQUEST
Cloud Audit Logs :
GKE Admin Activity logs
A successful API call was made to your GKE cluster from an
IP address associated with the Tor network. Tor provides anonymity, which
attackers often exploit to hide their identity. Findings are classified as High severity by default.
Initial Access: GKE NodePort service created
GKE_NODEPORT_SERVICE_CREATED
Cloud Audit Logs :
GKE Admin Activity logs
Someone created a NodePort service. NodePort services expose
Pods directly on a node's IP address and static port, which make the Pods accessible
from outside the cluster. This can introduce a significant security risk because
it could allow an attacker to exploit vulnerabilities in the exposed
service to gain access to the cluster or sensitive data. Findings are classified as Medium severity by default.
Impact: GKE kube-dns modification detected ( Preview )
GKE_KUBE_DNS_MODIFICATION
Cloud Audit Logs :
GKE Admin Activity logs
Someone modified the kube-dns configuration in your GKE cluster.
GKE kube-dns is a critical component of your cluster's networking, and
its misconfiguration could lead to a security breach. Findings are classified as Medium severity by default.
Impact: Cryptomining Commands
CLOUD_RUN_JOBS_CRYPTOMINING_COMMANDS
Cloud Audit Logs :
IAM System Event audit logs
Specific cryptomining commands were attached to a
Cloud Run job during execution. Findings are classified as High severity by default.
Execution: Cryptomining Docker Image
CLOUD_RUN_CRYPTOMINING_DOCKER_IMAGES
Cloud Audit Logs :
IAM System Event audit logs
Specific known bad docker images were attached to a new or existing
Cloud Run service or job. Findings are classified as High severity by default.
Privilege Escalation: Default Compute Engine Service Account SetIAMPolicy
CLOUD_RUN_SERVICES_SET_IAM_POLICY
Cloud Audit Logs :
Admin Activity logs
The default Compute Engine service account was used to set the
IAM policy for a Cloud Run service.
This is a potential post exploit action when a Compute Engine token is compromised
from a serverless service. Findings are classified as Low severity by default.
Initial Access: CloudDB Successful login from Anonymizing Proxy IP
CLOUD_DB_LOGIN_SUCCEEDED_ANON_IP
Cloud Audit Logs :
AlloyDB for PostgreSQL data access logs
Cloud SQL for PostgreSQL data access logs
Cloud SQL for MySQL data access logs
Note : You must enable IP logging in PostgreSQL to use this rule for AlloyDB and
Postgres.
A successful login was detected in your database instance from a known
anonymizing IP address. This could indicate an attacker gaining initial
access to your instance. Findings are classified as High severity by
default.
Credential Access: CloudDB Failed login from Anonymizing Proxy IP
CLOUD_DB_LOGIN_FAILED_ANON_IP
Cloud Audit Logs :
AlloyDB for PostgreSQL data access logs
Cloud SQL for PostgreSQL data access logs
Cloud SQL for MySQL data access logs
Note : You must enable IP logging in PostgreSQL to use this rule for AlloyDB and
Postgres.
A failed login was detected in your database instance from a known anonymizing IP
address. This could indicate an attacker attempting unauthorized access to your
instance. Findings are classified as Medium severity by default.
For deprecated and shut down rules, see Deprecations .
Custom modules for Event Threat Detection
In addition to built-in detection rules, Event Threat Detection provides module
templates that you can use to create custom detection rules. For more
information, see Overview of custom modules for Event Threat Detection .
To create detection rules for which no custom module templates are available,
you can export your log data to BigQuery ,
and then run unique or recurring SQL queries that capture your threat models.
Unsafe Google Group changes
This section explains how Event Threat Detection uses Google Workspace logs,
Cloud Audit Logs, and IAM policies to detect unsafe Google Groups
changes. Detecting Google Groups changes is only supported when you activate
Security Command Center at the organization level.
Google Cloud customers can use
Google groups to manage roles
and permissions for members in their organizations, or apply access policies to
collections of users. Instead of granting roles directly to members,
administrators can grant roles and permissions to Google Groups, and then add
members to specific groups. Group members inherit all of a group's roles and
permissions, which lets members access specific resources and services.
While Google Groups are a convenient way to manage access control at scale, they
can pose a risk if external users from outside your organization or domain are
added to privileged groups—groups that are granted
sensitive roles or permissions . Sensitive roles control
access to security and network settings, logs, and personally identifiable
information (PII), and are not recommended for external group members.
In large organizations, administrators might not be aware when external members
are added to privileged groups. Cloud Audit Logs record role grants to groups,
but those log events don't contain information on group members, which can
obscure the potential impact of some group changes.
If you share your Google Workspace logs
with Google Cloud, Event Threat Detection monitors your logging streams for new
members added to your organization's Google Groups. Because the logs are at the
organization level, Event Threat Detection can scan Google Workspace logs
only when you activate Security Command Center at the organization level.
Event Threat Detection can't scan these logs when you activate Security Command Center at
the project level.
Event Threat Detection identifies external group members and, using Cloud Audit Logs,
reviews each affected group's IAM roles to check whether the
groups are granted sensitive roles. That information is used to detect the
following unsafe changes for privileged Google Groups:
External group members added to privileged groups
Sensitive roles or permissions granted to groups with external group members
Privileged groups that are changed to allow anyone in the general public to
join
Event Threat Detection writes findings to Security Command Center. Findings contain the
email addresses of newly added external members, internal group members that
initiate events, group names, and the sensitive roles associated with groups.
You can use the information to remove external members from groups or revoke
sensitive roles granted to groups.
For more information on Event Threat Detection findings, see
Event Threat Detection rules .
Sensitive IAM roles and permissions
This section explains how Event Threat Detection defines sensitive
IAM roles. Detections like IAM Anomalous Grant and Unsafe Google
Group changes generate findings only if changes involve high- or
medium-sensitivity roles. The sensitivity of roles impacts the severity rating
assigned to findings.
High-sensitivity roles control critical services in
organizations, including billing, firewall settings, and logging. Findings
that match these roles are classified as High severity.
Medium-sensitivity roles have editing permissions
that let principals make changes to Google Cloud resources; and viewing
and executing permissions on data storage services that often hold sensitive
data. The severity assigned to findings depends on the resource:
If medium-sensitivity roles are granted at the organization level,
findings are classified as High severity.
If medium-sensitivity roles are granted at lower levels in your resource
hierarchy (folders, projects, and buckets, among others), findings are
classified as Medium severity.
Granting these sensitive roles is considered dangerous if the grantee is an
External Member or an abnormal identity, like a principal that has been
inactive for a long time.
Granting sensitive roles to external members creates a potential threat because
they can be abused for account compromise and data exfiltration.
Finding categories that use these sensitive roles include:
Persistence: IAM Anomalous Grant
Subrule: external_service_account_added_to_policy
Subrule: external_member_added_to_policy
Privilege Escalation: Sensitive Role Granted To Hybrid Group
Privilege Escalation: Dormant Service Account Granted Sensitive Role
Finding categories that use a subset of the sensitive roles include:
Persistence: IAM Anomalous Grant
Subrule: service_account_granted_sensitive_role_to_member
The service_account_granted_sensitive_role_to_member subrule targets both
external and internal members generally and therefore uses only a subset of
sensitive roles, as explained in Event Threat Detection rules .
Category
Role
Description
Basic roles : contain thousands of permissions across all
Google Cloud services.
roles/owner
Basic roles
roles/editor
Security roles : control access to security settings
roles/cloudkms.*
All
Cloud Key Management Service roles
roles/cloudsecurityscanner.*
All
Web Security Scanner roles
roles/dlp.*
All Sensitive Data Protection roles
roles/iam.*
All
IAM roles
roles/secretmanager.*
All
Secret Manager roles
roles/securitycenter.*
All Security Command Center roles
Logging roles : control access to an organization's logs
roles/errorreporting.*
All
Error Reporting roles
roles/logging.*
All Cloud Logging roles
roles/stackdriver.*
All Cloud Monitoring roles
Personal information roles : control access to resources
that contain personally identifiable information, including banking and
contact information
roles/billing.*
All
Cloud Billing roles
roles/healthcare.*
All
Cloud Healthcare API roles
roles/essentialcontacts.*
All
Essential Contacts roles
Networking roles : control access to an organization's network
settings
roles/dns.*
All Cloud DNS roles
roles/domains.*
All
Cloud Domains roles
roles/networkconnectivity.*
All
Network Connectivity Center roles
roles/networkmanagement.*
All
NCC roles
roles/privateca.*
All
Certificate Authority Service roles
Service roles : control access to service resources in
Google Cloud
roles/cloudasset.*
All
Cloud Asset Inventory roles
roles/servicedirectory.*
All
Service Directory roles
roles/servicemanagement.*
All
Service Management roles
roles/servicenetworking.*
All
Service Networking roles
roles/serviceusage.*
All
Service Usage roles
Compute Engine roles : control access to Compute Engine virtual
machines, which carry long-running jobs and are associated with firewall
rules
roles/compute.admin
roles/compute.instanceAdmin
roles/compute.instanceAdmin.v1
roles/compute.loadBalancerAdmin
roles/compute.networkAdmin
roles/compute.orgFirewallPolicyAdmin
roles/compute.orgFirewallPolicyUser
roles/compute.orgSecurityPolicyAdmin
roles/compute.orgSecurityPolicyUser
roles/compute.orgSecurityResourceAdmin
roles/compute.osAdminLogin
roles/compute.publicIpAdmin
roles/compute.securityAdmin
roles/compute.storageAdmin
roles/compute.xpnAdmin
All Compute Engine Admin
and Editor roles
Category
Role
Description
Editing roles : IAM roles that include permissions
to make changes to Google Cloud resources
Examples:
roles/storage.objectAdmin
roles/file.editor
roles/source.writer
roles/container.developer
Role names usually end with titles like Admin , Owner ,
Editor , or Writer .
Expand the node in the last row of the table to see
All medium-sensitivity roles
Data storage roles : IAM roles that include
permissions to view and execute data storage services
Examples:
roles/cloudsql.viewer
roles/cloudsql.client
roles/bigquery.dataViewer
roles/bigquery.user
roles/spanner.databaseReader
roles/spanner.databaseUser
Expand the node in the last row of the table to see
All medium-sensitivity roles
All medium-sensitivity roles
Access Approval
roles/accessapproval.approver
roles/accessapproval.configEditor
Access Context Manager
roles/accesscontextmanager.gcpAccessAdmin
roles/accesscontextmanager.policyAdmin
roles/accesscontextmanager.policyEditor
Actions
roles/actions.Admin
AI Platform
roles/ml.admin
roles/ml.developer
roles/ml.jobOwner
roles/ml.modelOwner
roles/ml.modelUser
API Gateway
roles/apigateway.admin
App Engine
roles/appengine.appAdmin
roles/appengine.appCreator
roles/appengine.serviceAdmin
Artifact Analysis
roles/containeranalysis.admin
roles/containeranalysis.notes.attacher
roles/containeranalysis.notes.editor
roles/containeranalysis.occurrences.editor
AutoML
roles/automl.admin
roles/automl.editor
BigQuery
roles/bigquery.admin
roles/bigquery.dataEditor
roles/bigquery.dataOwner
roles/bigquery.dataViewer
roles/bigquery.resourceAdmin
roles/bigquery.resourceEditor
roles/bigquery.resourceViewer
roles/bigquery.user
Bigtable
roles/bigtable.admin
roles/bigtable.reader
roles/bigtable.user
Binary Authorization
roles/binaryauthorization.attestorsAdmin
roles/binaryauthorization.attestorsEditor
roles/binaryauthorization.policyAdmin
roles/binaryauthorization.policyEditor
Cloud Autoscaling
roles/autoscaling.metricsWriter
roles/autoscaling.sitesAdmin
roles/autoscaling.stateWriter
Cloud Build
roles/cloudbuild.builds.builder
roles/cloudbuild.builds.editor
Cloud Deployment Manager
roles/deploymentmanager.editor
roles/deploymentmanager.typeEditor
Cloud Endpoints
roles/endpoints.portalAdmin Beta
Cloud Monitoring
roles/monitoring.admin
roles/monitoring.alertPolicyEditor
roles/monitoring.dashboardEditor
roles/monitoring.editor
roles/monitoring.metricWriter
roles/monitoring.notificationChannelEditor
roles/monitoring.servicesEditor
roles/monitoring.uptimeCheckConfigEditor
Cloud Run
roles/run.admin
roles/run.developer
Cloud Run functions
roles/cloudfunctions.admin
roles/cloudfunctions.developer
roles/cloudfunctions.invoker
Cloud Runtime Configuration API
roles/runtimeconfig.admin
Cloud Scheduler
roles/cloudscheduler.admin
Cloud Source Repositories
roles/source.admin
roles/source.writer
Cloud SQL
roles/cloudsql.admin
roles/cloudsql.editor
roles/cloudsql.client
roles/cloudsql.instanceUser
roles/cloudsql.viewer
Cloud Storage
roles/storage.admin
roles/storage.hmacKeyAdmin
roles/storage.objectAdmin
roles/storage.objectCreator
roles/storage.objectViewer
roles/storage.legacyBucketOwner
roles/storage.legacyBucketWriter
roles/storage.legacyBucketReader
roles/storage.legacyObjectOwner
roles/storage.legacyObjectReader
Cloud Tasks
roles/cloudtasks.admin
roles/cloudtasks.enqueuer
roles/cloudtasks.queueAdmin
roles/cloudtasks.taskDeleter
Cloud TPU
tpu.admin
Cloud Trace
roles/cloudtrace.admin
roles/cloudtrace.agent
Compute Engine
roles/compute.imageUser
roles/compute.osLoginExternalUser
roles/osconfig.guestPolicyAdmin
roles/osconfig.guestPolicyEditor
roles/osconfig.osPolicyAssignmentAdmin
roles/osconfig.osPolicyAssignmentEditor
roles/osconfig.patchDeploymentAdmin
Customer Usage Data Processing
roles/dataprocessing.admin
Data Catalog
roles/datacatalog.admin
roles/datacatalog.categoryAdmin
roles/datacatalog.entryGroupCreator
roles/datacatalog.entryGroupOwner
roles/datacatalog.entryOwner
Dataflow
roles/dataflow.admin
roles/dataflow.developer
Managed Service for Apache Spark
roles/dataproc.admin
roles/dataproc.editor
Dataproc Metastore
roles/metastore.admin
roles/metastore.editor
Datastore
roles/datastore.importExportAdmin
roles/datastore.indexAdmin
roles/datastore.owner
roles/datastore.user
Eventarc
roles/eventarc.admin
roles/eventarc.developer
roles/eventarc.eventReceiver
Filestore
roles/file.editor
Firebase
roles/firebase.admin
roles/firebase.analyticsAdmin
roles/firebase.developAdmin
roles/firebase.growthAdmin
roles/firebase.qualityAdmin
roles/firebaseabt.admin
roles/firebaseappcheck.admin
roles/firebaseappdistro.admin
roles/firebaseauth.admin
roles/firebasecrash.symbolMappingsAdmin
roles/firebasecrashlytics.admin
roles/firebasedatabase.admin
roles/firebasedynamiclinks.admin
roles/firebasehosting.admin
roles/firebaseinappmessaging.admin
roles/firebaseml.admin
roles/firebasenotifications.admin
roles/firebaseperformance.admin
roles/firebasepredictions.admin
roles/firebaserules.admin
roles/firebasestorage.admin
roles/cloudconfig.admin
roles/cloudtestservice.testAdmin
Google Cloud VMware Engine
vmwareengine.vmwareengineAdmin
Google Kubernetes Engine
roles/container.admin
roles/container.clusterAdmin
roles/container.developer
Google Kubernetes Engine Hub
roles/gkehub.admin
roles/gkehub.gatewayAdmin
roles/gkehub.connect
Google Security Operations Service Management
roles/chroniclesm.admin
Google Workspace
roles/gsuiteaddons.developer
Identity-Aware Proxy
roles/iap.admin
roles/iap.settingsAdmin
Identity Platform
roles/identityplatform.admin
Identity Toolkit
roles/identitytoolkit.admin
Managed Service for Microsoft Active Directory
roles/managedidentities.admin
roles/managedidentities.domainAdmin
roles/managedidentities.viewer
Memorystore for Redis
roles/redis.admin
roles/redis.editor
OAuthConfig
roles/oauthconfig.editor
On-Demand Scanning API
roles/ondemandscanning.admin
Ops Config Monitoring
roles/opsconfigmonitoring.resourceMetadata.writer
Organization Policy Service
roles/axt.admin
roles/orgpolicy.policyAdmin
Proximity Beacon
roles/proximitybeacon.attachmentEditor
roles/proximitybeacon.beaconEditor
Pub/Sub
roles/pubsub.admin
roles/pubsub.editor
Pub/Sub Lite
roles/pubsublite.admin
roles/pubsublite.editor
roles/pubsublite.publisher
reCAPTCHA
roles/recaptchaenterprise.admin
roles/recaptchaenterprise.agent
Recommendations
roles/automlrecommendations.admin
roles/automlrecommendations.editor
Recommender
roles/recommender.billingAccountCudAdmin
roles/recommender.cloudAssetInsightsAdmin
roles/recommender.cloudsqlAdmin
roles/recommender.computeAdmin
roles/recommender.firewallAdmin
roles/recommender.iamAdmin
roles/recommender.productSuggestionAdmin
roles/recommender.projectCudAdmin
Resource Manager
roles/resourcemanager.folderAdmin
roles/resourcemanager.folderCreator
roles/resourcemanager.folderEditor
roles/resourcemanager.folderIamAdmin
roles/resourcemanager.folderMover
roles/resourcemanager.lienModifier
roles/resourcemanager.organizationAdmin
roles/resourcemanager.projectCreator
roles/resourcemanager.projectDeleter
roles/resourcemanager.projectIamAdmin
roles/resourcemanager.projectMover
roles/resourcemanager.tagAdmin
Resource Settings
roles/resourcesettings.admin
Retail API
roles/retail.admin
roles/retail.editor
Serverless VPC Access
roles/vpcaccess.admin
Service Consumer Management
roles/serviceconsumermanagement.tenancyUnitsAdmin
Spanner
roles/spanner.admin
roles/spanner.backupAdmin
roles/spanner.backupWriter
roles/spanner.databaseAdmin
roles/spanner.restoreAdmin
roles/spanner.databaseReader
roles/spanner.databaseUser
Storage Transfer Service
roles/storagetransfer.admin
roles/storagetransfer.user
Vertex AI
roles/aiplatform.admin
roles/aiplatform.featurestoreAdmin
roles/aiplatform.migrator
roles/aiplatform.user
Vertex AI Workbench user-managed notebooks
roles/notebooks.admin
roles/notebooks.legacyAdmin
Workflows
roles/workflows.admin
roles/workflows.editor
Log types and activation requirements
This section lists the logs that Event Threat Detection uses, along with the threats
that Event Threat Detection looks for in each log, and what, if anything, you need
to do to turn on each log.
You need to turn a log on for Event Threat Detection only if all of the following
are true:
You are using the product or service that writes to the log.
You need to protect the product or service against the threats that
Event Threat Detection detects in the log.
The log is a data access audit log or other log that is off by default.
Certain threats can be detected in multiple logs. If Event Threat Detection can
detect a threat in a log that is already turned on, you don't need to turn on
another log to detect that same threat.
If a log isn't listed in this section, Event Threat Detection does not scan it, even
if it is turned on. For more information, see Potentially redundant log scans .
As described in the following table , some log types are only
available at the organization level. If you activate Security Command Center at the
project level, Event Threat Detection doesn't scan these logs and doesn't produce
any findings.
Tip: To help you evaluate which logs to export and analyze to meet your security
and compliance needs, use Google Cloud's
Log Scoping Tool .
Foundational log sources
Event Threat Detection uses foundational data sources
to detect potentially malicious activities in your network.
If you enable Event Threat Detection without VPC Flow Logs,
Event Threat Detection immediately starts analyzing an independent, duplicate, and
internal stream of VPC Flow Logs. To further investigate an
existing Event Threat Detection finding, you need to enable
VPC Flow Logs and manually navigate to Logs Explorer and
Flow Analyzer. If you enable VPC Flow Logs at a
later date, only future findings will contain the relevant links for further
investigation.
If you enable Event Threat Detection with VPC Flow Logs,
Event Threat Detection immediately starts analyzing the VPC Flow Logs
in your deployment and provides links to Logs Explorer and
Flow Analyzer to help you investigate further.
Logs for network detection of malware
Event Threat Detection can provide network detection of malware by scanning any one
of the following logs:
Cloud DNS logging
Cloud NAT logging
Firewall Rules Logging
VPC Flow Logs
You don't need to enable more than one of Cloud NAT logging,
Firewall Rules Logging, or VPC Flow Logs.
If you are already using Cloud DNS logging, Event Threat Detection can detect
malware using domain resolution. For most users, the Cloud DNS logs are
sufficient for the network detection of malware.
If you need another level of visibility beyond domain resolution, you can turn
on VPC Flow Logs, but VPC Flow Logs can incur costs. To manage these
costs, we recommend increasing the aggregation interval to 15 minutes and
reducing the sample rate to between 5% and 10%, but there is a tradeoff between
recall (higher sample) and cost management (lower sample rate). For more
information, see Log sampling and processing .
If you are already using Firewall Rules Logging or Cloud NAT
logging, these logs are useful in place of VPC Flow Logs.
Supported log data and threats detected
This section lists the Cloud Logging and Google Workspace logs that you
can turn on or otherwise configure to increase the number of threats that
Event Threat Detection can detect.
Certain threats, such as threats posed by the anomalous impersonation or
delegation of a service account, can be found in most audit logs. For these
types of threats, you determine which logs you need to turn on based on the
products and services you are using.
Logging costs : Before you turn on a log for Event Threat Detection to
scan, make sure you understand how Cloud Logging charges for the log
data. After turning on a log, monitor the log for a couple of days to ensure
that the log doesn't incur any unexpected Logging costs.
Although the scanning of logs by Event Threat Detection does not incur any
additional costs, depending on the volume of log data that your
organizations and projects produce, Cloud Logging may charge you for the
ingestion and storage of the log data.
For information about how Logging charges for logging, see
Cloud Logging pricing .
The following table shows specific logs you can enable and the type of threats that can be detected.
Log type
Threats detected
Configuration required
AlloyDB for PostgreSQL Data Access audit logs
Credential Access: CloudDB Failed login from Anonymizing Proxy IP
Initial Access: CloudDB Successful login from Anonymizing Proxy IP
Privilege Escalation: AlloyDB Database Superuser Writes to User
Tables
Privilege Escalation: AlloyDB Over-Privileged Grant
Activate Logging Data Access audit logs for
AlloyDB for PostgreSQL
To detect the
Privilege Escalation: AlloyDB Database Superuser Writes to
User Tables
and Privilege Escalation: AlloyDB Over-Privileged Grant threats, you must also enable the
pgAudit extension
authlogs/authlog on virtual machines
Brute force SSH
Install the
Ops Agent or
the legacy
Logging agent on
your VM hosts
Cloud DNS logging
Log4j Malware: Bad Domain
Malware: bad domain
Malware: Cryptomining Bad Domain
Turn on Cloud DNS logging
See also Logs for network detection of malware .
Cloud SQL MySQL Data Access audit logs
Credential Access: CloudDB Failed login from Anonymizing Proxy IP
Exfiltration: Cloud SQL Data Exfiltration
Exfiltration: AI Agent Initiated Cloud SQL Exfiltration to Public Bucket ( Preview )
Exfiltration: AI Agent Initiated Cloud SQL Exfiltration to External Bucket ( Preview )
Initial Access: CloudDB Successful login from Anonymizing Proxy IP
Activate Logging Data Access audit logs for
Cloud SQL for MySQL
Cloud NAT logging
Log4j Malware: Bad IP
Malware: bad IP
Malware: Cryptomining Bad IP
Turn on Cloud NAT logging
See also Logs for network detection of malware .
Cloud SQL PostgreSQL Data Access audit logs
Credential Access: CloudDB Failed login from Anonymizing Proxy IP
Exfiltration: Cloud SQL Data Exfiltration
Exfiltration: AI Agent Initiated Cloud SQL Exfiltration to Public Bucket ( Preview )
Exfiltration: AI Agent Initiated Cloud SQL Exfiltration to External Bucket ( Preview )
Exfiltration: Cloud SQL Over-Privileged Grant
Initial Access: CloudDB Successful login from Anonymizing Proxy IP
Activate Logging Data Access audit logs for
Cloud SQL for PostgreSQL.
To detect the
Exfiltration: Cloud SQL Over-Privileged Grant threat,
you must also enable the
pgAudit extension
External Application Load Balancer backend service logs
Initial Access: Log4j Compromise Attempt
Turn on external Application Load Balancer logging
Firewall Rules Logging
Log4j Malware: Bad IP
Malware: bad IP
Malware: Cryptomining Bad IP
Turn on Firewall Rules Logging
See also Logs for network detection of malware .
Generic Data Access audit logs
Initial Access: Leaked Service Account Key Used
Privilege Escalation: Anomalous Multistep Service Account
Delegation for AI Data Access
Privilege Escalation: Anomalous Multistep Service Account
Delegation for Data Access
Privilege Escalation: Anomalous Service Account Impersonator for
AI Data Access
Privilege Escalation: Anomalous Service Account Impersonator for
Data Access
Activate Logging Data Access audit logs.
Google Kubernetes Engine (GKE) Data Access audit logs
Discovery: Can get sensitive Kubernetes object check
Privilege Escalation: Get Kubernetes CSR with compromised
bootstrap credentials
Activate Logging Data Access audit logs for
GKE
Google Workspace Admin Audit logs
Persistence: SSO Enablement Toggle
Persistence: SSO Settings Changed
Persistence: Strong Authentication Disabled
Persistence: Two Step Verification Disabled
Privilege Escalation: Privileged Group Opened To Public
Share Google Workspace Admin Audit logs with
Cloud Logging
This log type can't be scanned in project-level activations.
Google Workspace Login Audit logs
Credential Access: External Member Added To Privileged
Group
Initial Access: Account Disabled Hijacked
Initial Access: Disabled Password Leak
Initial Access: Government Based Attack
Initial Access: Suspicious Login Blocked
Persistence: Two Step Verification Disabled
Share Google Workspace Login Audit logs with
Cloud Logging
This log type can't be scanned in project-level activations.
IAM Data Access audit logs
Discovery: AI Agent Service Account Self-Investigation ( Preview )
Discovery: Service Account Self-Investigation
Privilege Escalation: AI Agent Suspicious Cross-Project Access Token Generation ( Preview )
Privilege Escalation: AI Agent Suspicious Cross-Project OpenID Token Generation ( Preview )
Privilege Escalation: AI Agent Suspicious Token Generation Using Implicit Delegation ( Preview )
Privilege Escalation: AI Agent Suspicious Token Generation Using signJwt ( Preview )
Activate Logging Data Access audit logs for
Resource Manager
SQL Server Data Access audit logs
Exfiltration: Cloud SQL Data Exfiltration
Exfiltration: AI Agent Initiated Cloud SQL Exfiltration to Public Bucket ( Preview )
Exfiltration: AI Agent Initiated Cloud SQL Exfiltration to External Bucket ( Preview )
Activate Logging Data Access audit logs for
Cloud SQL for SQL Server
VPC Flow Logs
Log4j Malware: Bad IP
Malware: bad IP
Malware: Cryptomining Bad IP
Turn on VPC Flow Logs
See also Logs for network detection of malware .
Logs that are always on
The following table lists the Cloud Logging logs that you don't need to turn
on or configure. These logs are always on and Event Threat Detection scans them
automatically.
Log type
Threats detected
Configuration required
Agent Engine Logs
Credential Access: AI Agent Anomalous Access to Metadata Service ( Preview )
Discovery: Evidence of Port Scanning from AI Agent ( Preview )
None
Backup and DR Admin Activity audit logs
Impact: Google Cloud Backup and DR expire all images
Impact: Deleted Google Cloud Backup and DR Backup
Impact: Deleted Google Cloud Backup and DR host
Impact: Deleted Google Cloud Backup and DR plan association
Impact: Deleted Google Cloud Backup and DR Vault
Impact: Google Cloud Backup and DR delete policy
Impact: Google Cloud Backup and DR delete profile
Impact: Google Cloud Backup and DR delete template
Impact: Google Cloud Backup and DR expire image
Impact: Google Cloud Backup and DR reduce backup expiration
Impact: Google Cloud Backup and DR reduce backup frequency
Impact: Google Cloud Backup and DR remove appliance
Impact: Google Cloud Backup and DR remove plan
Inhibit system recovery: Google Cloud Backup and DR delete storage
pool
None
BigQueryAuditMetadata Data Access logs
Exfiltration: AI Agent Initiated BigQuery Data Extraction ( Preview )
Exfiltration: AI Agent Initiated BigQuery Data Exfiltration to External Table ( Preview )
Exfiltration: AI Agent Initiated BigQuery VPC Perimeter Violation ( Preview )
Exfiltration: BigQuery Data Exfiltration
Exfiltration: BigQuery Data Extraction
Exfiltration: BigQuery Data to Google Drive
Exfiltration: Move to Public BigQuery resource ( Preview )
None
Generic Admin Activity audit logs
Defense Evasion: GCS Bucket IP Filtering Modified
Defense Evasion: Project HTTP Policy Block Disabled
Discovery: AI Agent Unauthorized Service Account API Call ( Preview )
Initial Access: AI Agent Identity Excessive Permission Denied Actions ( Preview )
Initial Access: Dormant Service Account Action
Initial Access: Dormant Service Account Activity in AI Service
Initial Access: Dormant Service Account Key Created
Initial Access: Excessive Permission Denied Actions
Initial Access: Leaked Service Account Key Used
Lateral Movement: Modified Boot Disk Attached to Instance
( Preview )
Persistence: GCE Admin Added SSH Key
Persistence: GCE Admin Added Startup Script
Persistence: New AI API Method
Persistence: New API Method
Persistence: New Geography
Persistence: New Geography for AI Service
Persistence: New User Agent
Privilege Escalation: Anomalous Impersonation of Service Account for
Admin Activity
Privilege Escalation: Anomalous Impersonation of Service Account for
AI Admin Activity
Privilege Escalation: Anomalous Multistep Service Account Delegation
for Admin Activity
Privilege Escalation: Anomalous Multistep Service Account Delegation
for AI Admin Activity
Privilege Escalation: Anomalous Service Account Impersonator for
Admin Activity
Privilege Escalation: Anomalous Service Account Impersonator for
AI Admin Activity
None
Google Kubernetes Engine (GKE) Admin Activity audit logs
Credential Access: Failed Attempt to Approve Kubernetes Certificate
Signing Request (CSR)
Credential Access: Manually Approved Kubernetes Certificate Signing
Request (CSR) ( Preview )
Defense Evasion: Anonymous Sessions Granted Cluster Admin Access
Defense Evasion: Manually Deleted Certificate Signing Request (CSR)
Defense Evasion: Potential Kubernetes Pod Masquerading
Defense Evasion: Static Pod Created
Execution: GKE launch excessively capable container
( Preview )
Execution: Kubernetes Pod Created with Potential Reverse Shell
Arguments
Execution: Suspicious Exec or Attach to a System Pod ( Preview )
Execution: Workload triggered in sensitive namespace
Impact: GKE kube-dns modification detected
( Preview )
Impact: Suspicious Kubernetes Container Names - Cryptocurrency Mining
Initial Access: Anonymous GKE Resource Created from the Internet
( Preview )
Initial Access: GKE NodePort service created
Initial Access: GKE Resource Modified Anonymously from the Internet
( Preview )
Initial Access: Successful API call made from a TOR proxy IP
Persistence: GKE Webhook Configuration Detected
Persistence: Service Account Created in sensitive namespace
Privilege Escalation: Changes to sensitive Kubernetes RBAC objects
Privilege Escalation: ClusterRole with Privileged Verbs
( Preview )
Privilege Escalation: ClusterRoleBinding to Privileged Role
Privilege Escalation: Create Kubernetes CSR for master cert
Privilege Escalation: Creation of sensitive Kubernetes bindings
Privilege Escalation: Effectively Anonymous Users Granted GKE Cluster
Access
Privilege Escalation: Launch of privileged Kubernetes container
Privilege Escalation: Suspicious Kubernetes Container Names -
Exploitation and Escape ( Preview )
Privilege Escalation: Workload Created with a Sensitive Host Path
Mount ( Preview )
Privilege Escalation: Workload with shareProcessNamespace enabled
( Preview )
None
IAM Admin Activity audit logs
Persistence: IAM Anomalous Grant ( Preview )
Persistence: Unmanaged Account Granted Sensitive Role
Privilege Escalation: Default Compute Engine Service Account
SetIAMPolicy
Privilege Escalation: Dormant Service Account Granted Sensitive Role
Privilege Escalation: Impersonation Role Granted For Dormant Service Account
Privilege Escalation: Sensitive Role Granted To Hybrid Group
None
IAM System Event audit logs
Execution: Cryptomining Docker Image
Impact: Cryptomining Commands
None
MySQL Admin Activity logs
Exfiltration: Cloud SQL Restore Backup to External Organization
None
PostgreSQL Admin Activity logs
Exfiltration: Cloud SQL Restore Backup to External Organization
None
SQL Server Admin Activity logs
Exfiltration: Cloud SQL Restore Backup to External Organization
None
VPC Service Controls Audit logs
Defense Evasion: Modify VPC Service Control ( Preview )
None
What's next
Learn about
using Event Threat Detection .
Learn how to
investigate and develop response plans
for threats.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
