---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.675Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Enrich Entities"
feature_slug: "enrich-entities"
latest_feature_date: "2025-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo"
keywords:
  - "enrich"
  - "entities"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "enriches"
---

# Enrich Entities

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that enriches entities.

## Extended Definition

Adds an action that enriches entities.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo)

## Supporting Pages

### "Integrate Active Directory with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't set any value, the action enriches entities with all available attributes.
- JSON result The following example shows the JSON result output received when using the Enrich Entities action: [ { "EntityResult" : { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ " GUID " ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example user" ], "name" : [ "user" ], "memberOf" : [ "CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ]}, "Entity" : "user@example.com" } ] Script result The following table lists the value for the script result output when using the Enrich Entities action: Script result name Value is success True or False Force Password Update Use the Force Password Update action to require a user to change their password upon the following sign-in.
- Action outputs The Update attributes of an AD Host action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Not available Output messages Available Script result Available Output messages The Update attributes of an AD Host action can return the following output messages: Output message Message description Active Directory - Following entities were updated successfully: ENTITY ID LIST .
- Action outputs The Update attributes of an AD User action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Not available Output messages Available Script result Available Output messages The Update attributes of an AD User action can return the following output messages: Output message Message description Active Directory - Following entities were updated successfully: ENTITY ID LIST .

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email Address (user entity that matches email regex) Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully reported the following entities as false positive in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fail to mark specific entities (is success=true): "Action was not able to report the following entities as false positive in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fail to enrich all entities (is success=false): "No entities were reported as false positive." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Report As False Positive".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Entity enrichment Enrichment field name Logic - When to apply id When available in JSON status When available in JSON itype When available in JSON expiration time When available in JSON ip When available in JSON feed id When available in JSON confidence When available in JSON uuid When available in JSON retina confidence When available in JSON trusted circle ids When available in JSON source When available in JSON latitude When available in JSON type When available in JSON description When available in JSON tags When available in JSON threat score When available in JSON source confidence When available in JSON modification time When available in JSON org name When available in JSON asn When available in JSON creation time When available in JSON tlp When available in JSON country When available in JSON longitude When available in JSON severity When available in JSON subtype When available in JSON report When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one of the provided entities is enriched (is success=true): "Successfully enriched the following entities using Anomali ThreatStream: \n {0}".format(entity.identifier list) If failed to enrich specific entities (is success=true): "Action was not able to enrich the following entities using Anomali ThreatStream\n: {0}".format([entity.identifier]) If failed to enrich all entities (is success=false): "No entities were enriched." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Enrich Entities".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result approved jobs = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] jobs wi t h excluded e nt i t ies = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found(is success=true): "Successfully submitted and approved the following entities in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fails to enrich some entities (rejected entities) (is success=true): "Action was not able to successfully submit and approve the following entities in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fails to enrich for all entities (is success=false): "No entities were successfully submitted to Anomali ThreatStream." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Submit Observables".
- Run on This action runs on the following entities: Hash IP Address URL Email (user entity that matches email regex) Threat Actor CVE Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "{} hashes.format(subtype)" : [ "" ], "all hashes" : [ "md5hash 1" ], "domains" : [ "" ] "urls" : [] "emails" : [] "ips" : [] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully retrieved related hashes from Anomali ThreatStream" If no hashes are found (is success=false): "No related hashes were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Hashes".

### "Integrate Armis with Google SecOps \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run on This action runs on the following entities: IP Address Mac Address Action results Script result Script result name Value options Example is success True/False is success:False JSON result { "accessSwitch" : null , "category" : "Computers" , "dataSources" : [ { "firstSeen" : "2021-03-07T04:04:22.562873+00:00" , "lastSeen" : "2021-03-07T04:04:22.562873+00:00" , "name" : "Example" , "types" : [ "Asset & System Management" , "Virtualization" ] }, { "firstSeen" : "2021-03-07T04:04:22.562873+00:00" , "lastSeen" : "2021-03-07T04:04:22.562873+00:00" , "name" : "Armis Smart Scanner" , "types" : [ "Vulnerability Management" ] } ], "firstSeen" : "2021-03-07T04:04:22.562873+00:00" , "id" : 1616 , "ipAddress" : "192.0.2.120" , "ipv6" : null , "lastSeen" : "2021-03-21T08:05:40.244960+00:00" , "macAddress" : "01:23:45:ab:cd:ef" , "manufacturer" : "VMware" , "model" : "VMware Virtual Platform" , "name" : "Example" , "operatingSystem" : "CentOS" , "operatingSystemVersion" : "6.6" , "purdueLevel" : 4.0 , "riskLevel" : 5 , "sensor" : { "name" : "North conference room" , "type" : "Physical Sensor" }, "site" : { "location" : "Palo Alto" , "name" : "Palo Alto Offices" }, "tags" : [ "Discover" , "Example" ], "type" : "Virtual Machines" , "user" : "" , "visibility" : "Full" } Entity enrichment Enrichment field name Logic - When to apply category When available in JSON id When available in JSON ipAddress When available in JSON macAddress When available in JSON name When available in JSON os When available in JSON purdue level When available in JSON risk level When available in JSON tags When available in JSON type When available in JSON user When available in JSON visibility When available in JSON site When available in JSON link When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: if enriched some(is success = true): "Successfully enriched the following entities using Armis:\n".format(entity.identifier) If didn't enrich some (is success = true): "Action wasn't able to enriche the following entities using Armis:\n".format(entity.identifier) If didn't enrich all (is success = false): "No entities were enriched".
- The action should fail and stop a playbook execution: if fatal error, like wrong credentials, no connection to server, other: "Error executing action "Enrich Entities".
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- Parameters N/A Run on The action doesn't use entities, nor has mandatory input parameters.

### "Integrate Attivo with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True/False is success=False JSON result { "upgradeToVersion" : null , "quarantineStatus" : 0 , "acmId" : -1 , "tostatus" : 0 , "systemtype" : "VM" , "adsErrorMessage" : "" , "accessprotection" : false , "functionalId" : { "templateName" : null , "usersid" : null , "errorCode" : 0 , "debugInfo" : "" , "userName" : "example\\Administrator" , "status" : null , "timestamp" : 1636558715000 }, "ondAssigned" : false , "usersInfo" : [ { "templateName" : "Default ThreatStrike Profile:2" , "usersid" : "S-1-5-21-2143737273-3756110848-2070699859-500" , "errorCode" : 0 , "debugInfo" : "Error:0 lsass UnInstallation\\nError:0 webftp UnInstallation\\nError:0 cookies UnInstallation\\nError:0 mstsc UnInstallation\\nError:0 SMB UnInstallation\\nError:0 Web Credential UnInstallation\\nError:0 outlook UnInstallation\\nError:0 iexplorer UnInstallation\\nError:0 Putty UnInstallation\\nError:0 Mozilla UnInstallation\\nError:0 Chrome UnInstallation\\nError:0 FileZilla UnInstallation\\nError:0 lsass UnInstallation\\nError:0 AWS UnInstallation\\nError:0 Telnet UnInstallation\\nError:0 OracleDBClient UnInstallation\\nError:0 IEFavorite UnInstallation\\nError:0 WindowsDNS UnInstallation\\nError:0 RasVPN UnInstallation" , "userName" : "exlab.local\\Administrator" , "status" : "INSTALLED" , "timestamp" : 1636558727000 } ], "id" : 101 , "epVersion" : "5.0.1.25" , "activeDirectory" : { "groups" : [ "Domain Computers" ], "organizationalUnit" : "Computers" }, "installMode" : 2 , "processor arch" : " 64-bit" , "tdDeflectMessage" : "" , "clientGroupId" : "ThreatStrike-Default-Client" , "deployMode" : 0 , "latestExecutableStatus" : "INSTALLED" , "subscriberId" : 1 , "botsinkDocumentId" : 0 , "executableStatus" : [ { "timestamp" : 1636558715000 , "status" : "INSTALLED" } ], "processor cpuSpeed" : "2300 MHz" , "guid" : "27f018b6-47c8-4b20-ab62-545c672ddf7cexample" , "ondMessage" : "" , "debugCollect" : false , "ondInActive" : false , "adsstatus" : 1 , "upgradeRequired" : false , "ondstatus" : 0 , "hostName" : "example" , "memory" : "8190 MB" , "lastModifiedTime" : "2021-11-11T15:41:16.254Z" , "arstatus" : 1 , "dnsName" : "example.example" , "botsinkDeviceId" : 0 , "endpoint os type" : 1 , "disabledInClientGroup" : false , "tddstatus" : 1 , "adsenabled" : false , "tdDeflectStatus" : 0 , "osType" : "Non-Server" , "featuresstatusforusers" : [ { "tddstatus" : 1 , "tsstatus" : 1 , "tostatus" : 0 , "usersid" : "user-id" , "adsstatus" : 1 , "logIn" : 1636558717 , "ondstatus" : 0 , "logOut" : 0 , "tpstatus" : 1 , "live" : true , "username" : "example\\Administrator" } ], "interfaces" : [ { "subnet" : "192.0.2.0/24" , "score" : 1400.133919820602 , "macAddress" : "01:23:45:AB:CD:EF" , "ipAddress" : "192.0.2.198" , "name" : "Intel(R) 82574L Gigabit Network Connection" , "type" : "Wired" , "timestamp" : 1636645218000 } ], "migrateCL" : false , "debugStatus" : false , "osName" : "Windows 10 64-bit" , "uptime" : "134836" , "tsstatus" : 1 , "processor numOfCpu" : 4 , "newClientGroup" : null , "tpstatus" : 1 , "threatPaths" : [ { "destIp" : "192.0.2.198" , "permissionId" : -1 , "reason" : null , "srcHostName" : "Unmanaged host" , "acmId" : -1 , "source" : null , "type" : "Paths" , "permScore" : "Medium" , "cancellable" : false , "targetScore" : "Medium" , "crRuleName" : "System Default: Domain Admin Pilferage" , "credOuPath" : "CN=Users,DC=example,DC=example" , "submissionId" : -1 , "credAcctStatus" : "Enabled" , "credential" : "example\\administrator" , "srcId" : "dummy-endpoint-1SUB1" } ], "vulnerabilities" : [ "More than two Administrators were found on this computer" , "Presence of local administrative privileges for domain user account" ], "credentials" : [ { "isDeceptive" : true , "service" : "putty" , "domain" : "EXAMPLE-W10H66.example\\accessDBuser" , "serverIp" : "EXAMPLE-W10H66.example" , "isShortcut" : false }, { "isDeceptive" : true , "service" : "putty" , "domain" : "EXAMPLE-W10H77.example\\accessDBadm" , "serverIp" : "EXAMPLE-W10H77.example" , "isShortcut" : false } ] } Enrichment Table Enrichment field name Logic - When to apply os When available in JSON ip When available in JSON mac When available in JSON hostname When available in JSON users When available in JSON type When available in JSON uptime When available in JSON num threatpaths When available in JSON num vulnerabilities When available in JSON num deceptive creds When available in JSON num real creds When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If data is available for one entity (is success=true): "Successfully enriched the following entities using information from Attivo: {entity.identifier}".
- If data is not available for all entities (is success=false): "None of the provided entities were enriched." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Enrich Entities".
- If data is not available for one entity (is success=true): "Action wasn't able to enrich the following entities using information from Attivo: {entity.identifier}".
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.

