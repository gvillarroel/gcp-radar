---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.661Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Akamai Activate Client List action"
feature_slug: "akamai-activate-client-list-action"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo"
keywords:
  - "akamai"
  - "activate"
  - "client"
  - "list"
  - "action"
  - "adds"
  - "an"
  - "that"
---

# Akamai Activate Client List action

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that activates a client list in Akamai.

## Extended Definition

Adds an action that activates a client list in Akamai.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo)

## Supporting Pages

### "Integrate Akamai with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A comma-separated list of email addresses that receive a notification regarding the client list activation Action outputs The Activate Client List action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Output messages Available Script result Available JSON result The following example describes the JSON result output received when using the Activate Client Lists action: { "action" : "ACTIVATE" , "activations" : { "STAGING" : { "activationId" : 3797405 , "activationStatus" : "PENDING ACTIVATION" } }, "comments" : "Activating 235466" , "createDate" : "2026-02-12T15:12:07.952+00:00" , "createdBy" : "4wksaj3wyt23jt2i" , "listId" : "235466 GOOGLESECOPSCLIENTLIST1" , "notificationRecipients" : [ "12345@email.com" ], "version" : 14 } Output messages The Activate Client List action provides the following output messages: Output message Message description Successfully activated the client list in Akamai.
- Action outputs The Get Client Lists action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Script result Available JSON result The following example describes the JSON result output received when using the Get Client Lists action: [ { "contractId" : "K-0N7RAK71" , "createDate" : "2023-04-05T18:20:42.090+00:00" , "createdBy" : "jsmith" , "deprecated" : false , "groupId" : 32145 , "groupName" : "Acme IT Group" , "items" : [ { "createDate" : "2023-04-05T18:20:42.892+00:00" , "createdBy" : "jkowalski" , "description" : "Canada - North America" , "expirationDate" : "2023-12-31T23:59:19.700+00:00" , "productionStatus" : "INACTIVE" , "stagingStatus" : "INACTIVE" , "tags" : [ "allowlist1" ], "type" : "GEO" , "updateDate" : "2023-04-05T18:20:42.892+00:00" , "updatedBy" : "mrossi" , "value" : "CA" } ], "itemsCount" : 3 , "listId" : "1234 NORTHAMERICAGEOALLOWLIST" , "listType" : "CL" , "name" : "NorthAmericaGeoAllowlist" , "notes" : "GEO code allowlist" , "productionActivationStatus" : "INACTIVE" , "readOnly" : false , "shared" : false , "stagingActivationStatus" : "INACTIVE" , "tags" : [ "allowlist2" ], "type" : "GEO" , "updateDate" : "2023-04-05T18:20:42.090+00:00" , "updatedBy" : "jdupont" , "version" : 1 } ] Output messages The Get Client Lists action provides the following output messages: Output message Message description Successfully returned client lists from Akamai.
- Action outputs The Remove Items From Client List action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Script result Available JSON result The following example describes the JSON result output received when using the Remove Items From Client List action: [ { "value" : "127.0.0.1" , "status" : "doesn't exist" }, { "value" : "127.0.0.4" , "status" : "removed" }, { "value" : "127.0.0.4E" , "status" : "failed" , "error" : "Validation failed: delete[0].value: Item of type IP has an invalid value 127.0.0.4E" } ] Output messages The Remove Items From Client List action provides the following output messages: Output message Message description Successfully updated client list in Akamai.
- Script result The following table describes the values for the script result output when using the Activate Network List action: Script result name Value is success True or False Add Items To Client List Use the Add Items To Client List action to add items to the client list in Akamai.

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "rep device fqdn" : "192.0.2.30" , "sorce name" : "192.0.2.30" , "tag" : "pdate-esp-kernelmodle.sh" , "timestamp occred" : "1596541223000" , "destination address" : "198.51.100.130" , "rep dev canonical" : "192.0.2.30" , "destination name" : "198.51.100.130" , "received from" : "Centos7-001" , "timestamp occred iso8601" : "2020-08-04T11:40:23.000Z" , "id" : "f52dd545-ff14-5576-3b70-47f10f528f53" , "needs enrichment" : True , "rep device asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received" : "1596541223152" , "sorce canonical" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "destination fqdn" : "198.51.100.130" , " links" : { "self" : { "href" : " URL " } }, "has alarm" : False , "rep device address" : "192.0.2.30" , "event name" : "pdate-esp-kernelmodle.sh event" , "sed hint" : False , "transient" : False , "packet type" : "log" , "was fzzied" : True , "sppressed" : False , "log" : "<13>Ag 4 14:40:23 Centos7-001 pdate-esp-kernelmodle.sh: McAfeeESPFileAccess installed in this system is - 198.51.100.130" , "sorce asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received iso8601" : "2020-08-04T11:40:23.152Z" , "destination canonical" : "198.51.100.130" , "time offset" : "Z" } Case wall Result type Description Type Output message In case of general error: "Action didn't complete due to error: {error}", result value should be set to false and the action should fail.

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Please note, there are additional policies that match the provided filter." If no data: Print "No Policies were found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, max>1000): print "Error executing action 'List Policies.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:group/ZivGroup" , "CreateDate" : "2020-12-05 16:18:36+00:00" , "Path" : "/" , "GroupId" : "AGPAYPE7MW7AMKCWMJPMX" , "GroupName" : "ZivGroup" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available groups in AWS IAM" If no data available: Print "No Groups found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, If 'Max Groups'> 1000): print "Error executing action 'List Groups'.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:user/ziv" , "CreateDate" : "2020-12-03T12:12:20" , "Path" : "/" , "UserId" : "AIDAYPE7MW7AFMHK4WCHS" , "UserName" : "ziv" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available users in AWS IAM" If no data available: Print "No users found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, if max>10000): print "Error executing action 'List Users'.
- Create Users(Dev need to be able to create their data in the company bucket) Create Groups (Developers as a group) Create Policies (John need to assign permissions to the users/group) Attach Policies (John attaches a policy to the group that lets devs read,write,list objects in AWS S3) Add/remove users from group (One of the devs becomes a manager, access should be changed) Before you begin This integration provides native platform capabilities and doesn't require external third-party API keys or credentials for authentication.

### "Integrate Attivo with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True/False is success=False JSON result { "upgradeToVersion" : null , "quarantineStatus" : 0 , "acmId" : -1 , "tostatus" : 0 , "systemtype" : "VM" , "adsErrorMessage" : "" , "accessprotection" : false , "functionalId" : { "templateName" : null , "usersid" : null , "errorCode" : 0 , "debugInfo" : "" , "userName" : "example\\Administrator" , "status" : null , "timestamp" : 1636558715000 }, "ondAssigned" : false , "usersInfo" : [ { "templateName" : "Default ThreatStrike Profile:2" , "usersid" : "S-1-5-21-2143737273-3756110848-2070699859-500" , "errorCode" : 0 , "debugInfo" : "Error:0 lsass UnInstallation\\nError:0 webftp UnInstallation\\nError:0 cookies UnInstallation\\nError:0 mstsc UnInstallation\\nError:0 SMB UnInstallation\\nError:0 Web Credential UnInstallation\\nError:0 outlook UnInstallation\\nError:0 iexplorer UnInstallation\\nError:0 Putty UnInstallation\\nError:0 Mozilla UnInstallation\\nError:0 Chrome UnInstallation\\nError:0 FileZilla UnInstallation\\nError:0 lsass UnInstallation\\nError:0 AWS UnInstallation\\nError:0 Telnet UnInstallation\\nError:0 OracleDBClient UnInstallation\\nError:0 IEFavorite UnInstallation\\nError:0 WindowsDNS UnInstallation\\nError:0 RasVPN UnInstallation" , "userName" : "exlab.local\\Administrator" , "status" : "INSTALLED" , "timestamp" : 1636558727000 } ], "id" : 101 , "epVersion" : "5.0.1.25" , "activeDirectory" : { "groups" : [ "Domain Computers" ], "organizationalUnit" : "Computers" }, "installMode" : 2 , "processor arch" : " 64-bit" , "tdDeflectMessage" : "" , "clientGroupId" : "ThreatStrike-Default-Client" , "deployMode" : 0 , "latestExecutableStatus" : "INSTALLED" , "subscriberId" : 1 , "botsinkDocumentId" : 0 , "executableStatus" : [ { "timestamp" : 1636558715000 , "status" : "INSTALLED" } ], "processor cpuSpeed" : "2300 MHz" , "guid" : "27f018b6-47c8-4b20-ab62-545c672ddf7cexample" , "ondMessage" : "" , "debugCollect" : false , "ondInActive" : false , "adsstatus" : 1 , "upgradeRequired" : false , "ondstatus" : 0 , "hostName" : "example" , "memory" : "8190 MB" , "lastModifiedTime" : "2021-11-11T15:41:16.254Z" , "arstatus" : 1 , "dnsName" : "example.example" , "botsinkDeviceId" : 0 , "endpoint os type" : 1 , "disabledInClientGroup" : false , "tddstatus" : 1 , "adsenabled" : false , "tdDeflectStatus" : 0 , "osType" : "Non-Server" , "featuresstatusforusers" : [ { "tddstatus" : 1 , "tsstatus" : 1 , "tostatus" : 0 , "usersid" : "user-id" , "adsstatus" : 1 , "logIn" : 1636558717 , "ondstatus" : 0 , "logOut" : 0 , "tpstatus" : 1 , "live" : true , "username" : "example\\Administrator" } ], "interfaces" : [ { "subnet" : "192.0.2.0/24" , "score" : 1400.133919820602 , "macAddress" : "01:23:45:AB:CD:EF" , "ipAddress" : "192.0.2.198" , "name" : "Intel(R) 82574L Gigabit Network Connection" , "type" : "Wired" , "timestamp" : 1636645218000 } ], "migrateCL" : false , "debugStatus" : false , "osName" : "Windows 10 64-bit" , "uptime" : "134836" , "tsstatus" : 1 , "processor numOfCpu" : 4 , "newClientGroup" : null , "tpstatus" : 1 , "threatPaths" : [ { "destIp" : "192.0.2.198" , "permissionId" : -1 , "reason" : null , "srcHostName" : "Unmanaged host" , "acmId" : -1 , "source" : null , "type" : "Paths" , "permScore" : "Medium" , "cancellable" : false , "targetScore" : "Medium" , "crRuleName" : "System Default: Domain Admin Pilferage" , "credOuPath" : "CN=Users,DC=example,DC=example" , "submissionId" : -1 , "credAcctStatus" : "Enabled" , "credential" : "example\\administrator" , "srcId" : "dummy-endpoint-1SUB1" } ], "vulnerabilities" : [ "More than two Administrators were found on this computer" , "Presence of local administrative privileges for domain user account" ], "credentials" : [ { "isDeceptive" : true , "service" : "putty" , "domain" : "EXAMPLE-W10H66.example\\accessDBuser" , "serverIp" : "EXAMPLE-W10H66.example" , "isShortcut" : false }, { "isDeceptive" : true , "service" : "putty" , "domain" : "EXAMPLE-W10H77.example\\accessDBadm" , "serverIp" : "EXAMPLE-W10H77.example" , "isShortcut" : false } ] } Enrichment Table Enrichment field name Logic - When to apply os When available in JSON ip When available in JSON mac When available in JSON hostname When available in JSON users When available in JSON type When available in JSON uptime When available in JSON num threatpaths When available in JSON num vulnerabilities When available in JSON num deceptive creds When available in JSON num real creds When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If data is available for one entity (is success=true): "Successfully enriched the following entities using information from Attivo: {entity.identifier}".
- Potential movement to Computers/HOST02SMIME." , "cid" : "rdp0" , "permissionName" : "" , "destOu" : "Computers" , "critical" : true , "isgrouppath" : false , "credUpn" : "Administrator@example.com" , "credCreatedTime" : 1610374114000 , "memberList" : null , "memberOf" : null , "remediateStatus" : null , "severity" : "High" , "srcOu" : "Unmanaged" , "target" : "example(192.0.2.198)" , "loggedOn" : false , "credSamAcctName" : "Administrator" , "service" : "RDP Memory Credential" , "credDisplayName" : null , "ukey" : null , "category" : "Saved credential" } ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If data is available (is success=true): "Successfully found critical ThreatPaths for the provided criteria in Attivo".
- Parameters Parameter name Type Default value Is mandatory Description Services CSV N/A Yes Specify a comma-separated list of services for which action needs to return ThreatPaths Max ThreatPaths To Return Integer 50 No Specify the number of threat paths to return.
- Parameters Parameter name Type Default value Is mandatory Description Vulnerabilities CSV N/A Yes Specify a comma-separated list of vulnerabilities for which action needs to return hostnames.

