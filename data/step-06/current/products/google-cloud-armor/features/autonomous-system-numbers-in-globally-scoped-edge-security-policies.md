---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.928Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Autonomous System Numbers in globally scoped edge security policies"
feature_slug: "autonomous-system-numbers-in-globally-scoped-edge-security-policies"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo"
  - "https://docs.cloud.google.com/armor/docs/cscc-findings"
  - "https://docs.cloud.google.com/armor/docs/example-policies"
keywords:
  - "autonomous"
  - "system"
  - "numbers"
  - "in"
  - "globally"
  - "scoped"
  - "edge"
  - "security"
---

# Autonomous System Numbers in globally scoped edge security policies

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Support for Autonomous System Numbers in globally scoped edge security policies for Media CDN edge cache services; Support for Autonomous System Numbers in globally scoped edge security policies for Media CDN edge cache services.

## Extended Definition

Support for Autonomous System Numbers in globally scoped edge security policies for Media CDN edge cache services; Support for Autonomous System Numbers in globally scoped edge security policies for Media CDN edge cache services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo)
- [https://docs.cloud.google.com/armor/docs/cscc-findings](https://docs.cloud.google.com/armor/docs/cscc-findings)
- [https://docs.cloud.google.com/armor/docs/example-policies](https://docs.cloud.google.com/armor/docs/example-policies)

## Supporting Pages

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.
- You can configure network edge security policies for the following resources: External passthrough Network Load Balancers Protocol forwarding VMs with public IP addresses Network edge security policies support filtering based on some of the same parameters as backend security policies, and are the only security policy type to support byte offset filtering .
- Edge security policies are supported for the following endpoints: Global external Application Load Balancer Classic Application Load Balancer Edge security policies can be configured to filter requests before the request is served from Google's cache.
- Edge security policies Edge security policies enable users to configure filtering and access control policies for content that is stored in cache; this includes endpoints like Cloud CDN-enabled backend services and Cloud Storage buckets.

### "Integrate Attivo with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/attivo)
- Source ID: `site-docs-root-2`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True/False is success=False JSON result { "upgradeToVersion" : null , "quarantineStatus" : 0 , "acmId" : -1 , "tostatus" : 0 , "systemtype" : "VM" , "adsErrorMessage" : "" , "accessprotection" : false , "functionalId" : { "templateName" : null , "usersid" : null , "errorCode" : 0 , "debugInfo" : "" , "userName" : "example\\Administrator" , "status" : null , "timestamp" : 1636558715000 }, "ondAssigned" : false , "usersInfo" : [ { "templateName" : "Default ThreatStrike Profile:2" , "usersid" : "S-1-5-21-2143737273-3756110848-2070699859-500" , "errorCode" : 0 , "debugInfo" : "Error:0 lsass UnInstallation\\nError:0 webftp UnInstallation\\nError:0 cookies UnInstallation\\nError:0 mstsc UnInstallation\\nError:0 SMB UnInstallation\\nError:0 Web Credential UnInstallation\\nError:0 outlook UnInstallation\\nError:0 iexplorer UnInstallation\\nError:0 Putty UnInstallation\\nError:0 Mozilla UnInstallation\\nError:0 Chrome UnInstallation\\nError:0 FileZilla UnInstallation\\nError:0 lsass UnInstallation\\nError:0 AWS UnInstallation\\nError:0 Telnet UnInstallation\\nError:0 OracleDBClient UnInstallation\\nError:0 IEFavorite UnInstallation\\nError:0 WindowsDNS UnInstallation\\nError:0 RasVPN UnInstallation" , "userName" : "exlab.local\\Administrator" , "status" : "INSTALLED" , "timestamp" : 1636558727000 } ], "id" : 101 , "epVersion" : "5.0.1.25" , "activeDirectory" : { "groups" : [ "Domain Computers" ], "organizationalUnit" : "Computers" }, "installMode" : 2 , "processor arch" : " 64-bit" , "tdDeflectMessage" : "" , "clientGroupId" : "ThreatStrike-Default-Client" , "deployMode" : 0 , "latestExecutableStatus" : "INSTALLED" , "subscriberId" : 1 , "botsinkDocumentId" : 0 , "executableStatus" : [ { "timestamp" : 1636558715000 , "status" : "INSTALLED" } ], "processor cpuSpeed" : "2300 MHz" , "guid" : "27f018b6-47c8-4b20-ab62-545c672ddf7cexample" , "ondMessage" : "" , "debugCollect" : false , "ondInActive" : false , "adsstatus" : 1 , "upgradeRequired" : false , "ondstatus" : 0 , "hostName" : "example" , "memory" : "8190 MB" , "lastModifiedTime" : "2021-11-11T15:41:16.254Z" , "arstatus" : 1 , "dnsName" : "example.example" , "botsinkDeviceId" : 0 , "endpoint os type" : 1 , "disabledInClientGroup" : false , "tddstatus" : 1 , "adsenabled" : false , "tdDeflectStatus" : 0 , "osType" : "Non-Server" , "featuresstatusforusers" : [ { "tddstatus" : 1 , "tsstatus" : 1 , "tostatus" : 0 , "usersid" : "user-id" , "adsstatus" : 1 , "logIn" : 1636558717 , "ondstatus" : 0 , "logOut" : 0 , "tpstatus" : 1 , "live" : true , "username" : "example\\Administrator" } ], "interfaces" : [ { "subnet" : "192.0.2.0/24" , "score" : 1400.133919820602 , "macAddress" : "01:23:45:AB:CD:EF" , "ipAddress" : "192.0.2.198" , "name" : "Intel(R) 82574L Gigabit Network Connection" , "type" : "Wired" , "timestamp" : 1636645218000 } ], "migrateCL" : false , "debugStatus" : false , "osName" : "Windows 10 64-bit" , "uptime" : "134836" , "tsstatus" : 1 , "processor numOfCpu" : 4 , "newClientGroup" : null , "tpstatus" : 1 , "threatPaths" : [ { "destIp" : "192.0.2.198" , "permissionId" : -1 , "reason" : null , "srcHostName" : "Unmanaged host" , "acmId" : -1 , "source" : null , "type" : "Paths" , "permScore" : "Medium" , "cancellable" : false , "targetScore" : "Medium" , "crRuleName" : "System Default: Domain Admin Pilferage" , "credOuPath" : "CN=Users,DC=example,DC=example" , "submissionId" : -1 , "credAcctStatus" : "Enabled" , "credential" : "example\\administrator" , "srcId" : "dummy-endpoint-1SUB1" } ], "vulnerabilities" : [ "More than two Administrators were found on this computer" , "Presence of local administrative privileges for domain user account" ], "credentials" : [ { "isDeceptive" : true , "service" : "putty" , "domain" : "EXAMPLE-W10H66.example\\accessDBuser" , "serverIp" : "EXAMPLE-W10H66.example" , "isShortcut" : false }, { "isDeceptive" : true , "service" : "putty" , "domain" : "EXAMPLE-W10H77.example\\accessDBadm" , "serverIp" : "EXAMPLE-W10H77.example" , "isShortcut" : false } ] } Enrichment Table Enrichment field name Logic - When to apply os When available in JSON ip When available in JSON mac When available in JSON hostname When available in JSON users When available in JSON type When available in JSON uptime When available in JSON num threatpaths When available in JSON num vulnerabilities When available in JSON num deceptive creds When available in JSON num real creds When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If data is available for one entity (is success=true): "Successfully enriched the following entities using information from Attivo: {entity.identifier}".
- Action results Script result Script result name Value options Example is success True/False is success=False JSON Result { "criticalPaths" : [ { "destIp" : "192.0.2.198" , "permissionId" : -1 , "reason" : null , "srcHostName" : "Unmanaged host" , "acmId" : -1 , "source" : null , "type" : "Paths" , "permScore" : "Medium" , "cancellable" : false , "targetScore" : "Medium" , "crRuleName" : "System Default: Domain Admin Pilferage" , "credOuPath" : "CN=Users,DC=example" , "submissionId" : -1 , "credAcctStatus" : "Enabled" , "credential" : "example\\administrator" , "srcId" : "example-endpoint-1SUB1" , "destHostName" : "example" , "cid2" : "rdp1" , "id" : "Unmanaged host192.0.2.5example192.0.2.198RDP Memory Credentialexample\\administratorPaths" , "srcIp" : "192.0.2.5" , "firstSeen" : 1636667535105 , "credDept" : null , "subscriberId" : 1 , "remediable" : false , "credLastPswResetTime" : 1620201383000 , "credLastLogonTime" : 1636729127000 , "moretarget" : false , "destId" : "27f018b6-47c8-4b20-ab62-545c672ddf7cHOST02SMIME:S-1-5-21-2143737273-3756110848-2070699859-500" , "shareName" : null , "desc" : "rdp Active logon session for exlab.local\\administrator at Unmanaged OU/192.0.2.5 (unmanaged host).
- Integrate Attivo with Google SecOps This document describes how to integrate Attivo with Google Security Operations (Google SecOps).
- Potential movement to Computers/HOST02SMIME." , "cid" : "rdp0" , "permissionName" : "" , "destOu" : "Computers" , "critical" : true , "isgrouppath" : false , "credUpn" : "Administrator@example.com" , "credCreatedTime" : 1610374114000 , "memberList" : null , "memberOf" : null , "remediateStatus" : null , "severity" : "High" , "srcOu" : "Unmanaged" , "target" : "example(192.0.2.198)" , "loggedOn" : false , "credSamAcctName" : "Administrator" , "service" : "RDP Memory Credential" , "credDisplayName" : null , "ukey" : null , "category" : "Saved credential" } ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If data is available (is success=true): "Successfully found critical ThreatPaths for the provided criteria in Attivo".

### "Security Command Center findings \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/cscc-findings](https://docs.cloud.google.com/armor/docs/cscc-findings)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security Command Center includes a risk dashboard and analytics system for surfacing, understanding, and remediating Google Cloud security and data risks across an organization.
- Increasing deny ratio finding The Increasing deny ratio finding notifies you that there is an increase in the ratio of traffic that Cloud Armor blocks because of a user-configured rule in a security policy.
- Google Cloud Armor is integrated automatically with Security Command Center and exports two findings to the Security Command Center dashboard: Allowed traffic spike and Increasing deny ratio .
- Home Documentation Networking Google Cloud Armor Guides Send feedback Security Command Center findings Stay organized with collections Save and categorize content based on your preferences.

### Example security policies \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/example-policies](https://docs.cloud.google.com/armor/docs/example-policies)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You disabled any existing globally scoped security policies in your deployment.
- The following command adds a rule to allow traffic from the IP address 1.2.3.4 and contains the string example in the user-agent header: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')" \ --action allow \ --description "Block User-Agent 'example'" The following command adds a rule to block requests if the request's cookie contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['cookie']) && request.headers['cookie'].contains('cookie name=cookie value')" \ --action "deny-403" \ --description "Cookie Block" The following command adds a rule to block requests from the region AU : gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == 'AU'" \ --action "deny-403" \ --description "AU block" The following command adds a rule to block requests from the region AU that are not in the specified IP range: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == 'AU' && !inIpRange(origin.ip, '1.2.3.0/24')" \ --action "deny-403" \ --description "country and IP block" The following command adds a rule to block requests with a URI that matches a regular expression: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "request.path.matches('/example path/')" \ --action "deny-403" \ --description "regex block" The following command adds a rule to block requests if the Base64 decoded value of the user-id header contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue')" \ --action "deny-403" \ --description "country and IP block" The following command adds a rule that uses a preconfigured expression set to mitigate SQLi attacks: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "evaluatePreconfiguredWaf('sqli-v422-stable')" \ --action "deny-403" The following command adds a rule that uses a preconfigured expression to allow access from all IP addresses on a named IP address list: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "evaluatePreconfiguredWaf('sourceiplist-fastly')" \ --action "allow" Configure security policies for regional external Application Load Balancers This section contains information about configuring regionally scoped Cloud Armor security policies for regional external Application Load Balancers.
- The type flag is optional; if no type is specified, a backend security policy is created by default: gcloud compute security-policies create NAME \ [--type=CLOUD ARMOR CLOUD ARMOR EDGE] \ [--file-format= FILE FORMAT --description= DESCRIPTION ] \ [--file-name= FILE NAME ] Replace the following: NAME : the name of the security policy FILE FORMAT : the format of the file specified in --file-name ; specify yaml or json DESCRIPTION : the description of the security policy FILE NAME : the name of a file that contains either a YAML or JSON export of the security policy The following command updates a policy that you previously created, turns JSON parsing on, and changes the log level to VERBOSE : gcloud compute security-policies update my-policy \ --json-parsing=STANDARD \ --log-level=VERBOSE To add rules to a security policy, use the gcloud compute security-policies rules create PRIORITY command. gcloud compute security-policies rules create PRIORITY \ [--security-policy POLICY NAME ] \ [--description DESCRIPTION ] \ --src-ip-ranges IP RANGE,... --expression EXPRESSION \ --action=[ allow deny-403 deny-404 deny-502 ] \ [--preview] Replace the following: PRIORITY : the priority to assign to the rule in the policy.
- Protect regionally load balanced workloads Use the following steps to configure a security policy to protect your regionally scoped backend service: Create a regionally scoped security policy. gcloud compute security-policies create POLICY NAME \ --type=CLOUD ARMOR \ --region= REGION Replace the following: POLICY NAME : the name of the security policy REGION : the region in which to create the security policy Attach the regionally scoped security policy to a regionally scoped backend service.

