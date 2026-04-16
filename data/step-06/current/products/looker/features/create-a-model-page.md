---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.502Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Create a Model page"
feature_slug: "create-a-model-page"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-jobs"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url"
keywords:
  - "create"
  - "model"
  - "page"
  - "replaces"
  - "project"
  - "creation"
  - "looker"
---

# Create a Model page

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Create a Model page replaces the New Project page for project creation in Looker.

## Extended Definition

The Create a Model page replaces the New Project page for project creation in Looker.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)

## Supporting Pages

### JOBS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- Source ID: `site-docs-reference-required-6`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JOBS BY PROJECT WHERE job id = ' JOB ID ' -- If you know the date the job was created, add the following line to speed up the query by providing the date in UTC: -- AND DATE(creation time) = ' YYYY-MM-DD ' ), intervals AS ( SELECT TIMESTAMP ADD ( creation time , INTERVAL ( seconds offset ) SECOND ) AS ts , job type FROM job metadata , UNNEST ( GENERATE ARRAY ( 0 , IF ( TIMESTAMP DIFF ( end time , creation time , SECOND ) > 0 , TIMESTAMP DIFF ( end time , creation time , SECOND ), 1 ))) as seconds offset ), concurrent jobs AS ( SELECT int . ts , COUNT ( ) as concurrent jobs count FROM intervals int JOIN region- REGION NAME .
- JOBS BY PROJECT WHERE -- Filter for jobs created in the last 30 days creation time > = TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 DAY ) -- Filter for jobs originating from Connected Sheets AND job id LIKE 'sheets dataconnector%' -- Filter for completed jobs AND state = 'DONE' AND ( statement type IS NULL OR statement type <> 'SCRIPT' ) GROUP BY user email ORDER BY total bytes billed DESC LIMIT 10 ; Replace REGION NAME with the region for your project.
- The result looks similar to the following: +---------------------+---------------+--------------------+-----------------+ user email total queries total bytes billed total slot ms +---------------------+---------------+--------------------+-----------------+ alice@example.com 152 12000000000 3500000 bob@example.com 45 8500000000 2100000 charles@example.com 210 1100000000 1800000 +---------------------+---------------+--------------------+-----------------+ Find job logs of Connected Sheets queries at the project-level If you don't have organization-level permissions or only need to monitor a specific project, run the following query to see a detailed log of all Connected Sheets queries for the current project: SELECT job id , creation time , user email , total bytes billed , total slot ms , query FROM -- This view queries the project you are currently running the query in. region- REGION NAME .INFORMATION SCHEMA.JOBS BY PROJECT WHERE creation time > = TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 DAY ) AND job id LIKE 'sheets dataconnector%' AND state = 'DONE' AND ( statement type IS NULL OR statement type <> 'SCRIPT' ) ORDER BY creation time DESC ; Replace REGION NAME with the region for your project.
- JOBS AS job CROSS JOIN UNNEST ( job stages ) as unnest job stages CROSS JOIN UNNEST ( timeline ) AS unnest timeline WHERE DATE ( creation time ) BETWEEN DATE SUB ( CURRENT DATE (), INTERVAL 7 DAY ) AND CURRENT DATE () AND project id = 'my project' AND ( statement type != 'SCRIPT' OR statement type IS NULL ) GROUP BY 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ORDER BY job id ; The result for example is similar to the following: +-----------+-----------+----------------+---------------+----------------------+----------+-----------------+--------------------+--------------+--------------------------------+--------------------+--------------------------+ project id job id reservation id creation date job duration seconds job type user email total bytes billed job avg slots query jobstage max slots estimated runnable units +-----------+-----------+----------------+---------------+----------------------+----------+-----------------+--------------------+--------------+--------------------------------+--------------------+--------------------------+ project1 bquxjob1 reservation1 2020-10-10 160 LOAD abc@example.com 161480704 2890 SELECT ...

### Create SAML Test Configuration \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Looker email/password logins are always disabled for regular users when ldap is enabled. test slug lock string Slug to identify configurations that are created in order to run a Saml config test modified at lock string When this config was last modified modified by lock string User id of user who last modified this config default new user roles Role [] Expand Role definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of Role permission set lock PermissionSet (Read only) Permission set Expand PermissionSet definition... can lock object Operations the current user is able to perform on this object all access lock boolean built in lock boolean id lock string Unique Id name string Name of PermissionSet permissions string[] url lock string Link to get this item permission set id string (Write-Only) Id of permission set model set lock ModelSet (Read only) Model set Expand ModelSet definition... can lock object Operations the current user is able to perform on this object all access lock boolean built in lock boolean id lock string Unique Id models string[] name string Name of ModelSet url lock string Link to get this item model set id string (Write-Only) Id of model set internal lock boolean Is this a Looker internal role url lock string Link to get this item users url lock string Link to get list of users with this role default new user groups Group [] Expand Group definition... can lock object Operations the current user is able to perform on this object can add to content metadata boolean Group can be used in content access controls contains current user lock boolean Currently logged in user is group member external group id lock string External Id group if embed group externally managed lock boolean Group membership controlled outside of Looker id lock string Unique Id include by default lock boolean New users are added to this group by default name string Name of group user count lock integer Number of users included in this group default new user role ids string[] default new user group ids string[] set roles from groups boolean Set user roles in Looker based on groups from Saml groups attribute string Name of user record attributes used to indicate groups.
- Used when 'groups finder type' is set to 'grouped attribute values' groups SamlGroupRead [] Expand SamlGroupRead definition... id lock string Unique Id looker group id lock string Unique Id of group in Looker looker group name lock string Name of group in Looker name lock string Name of group in Saml roles Role [] Expand Role definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of Role permission set lock PermissionSet (Read only) Permission set permission set id string (Write-Only) Id of permission set model set lock ModelSet (Read only) Model set model set id string (Write-Only) Id of model set internal lock boolean Is this a Looker internal role url lock string Link to get this item users url lock string Link to get list of users with this role url lock string Link to saml config groups with role ids SamlGroupWrite [] Expand SamlGroupWrite definition... id string Unique Id looker group id lock string Unique Id of group in Looker looker group name string Name of group in Looker name string Name of group in Saml role ids string[] url lock string Link to saml config auth requires role boolean Users will not be allowed to login at all unless a role for them is found in Saml if set to true user attributes SamlUserAttributeRead [] Expand SamlUserAttributeRead definition... name lock string Name of User Attribute in Saml required lock boolean Required to be in Saml assertion for login to be allowed to succeed user attributes UserAttribute [] Expand UserAttribute definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of user attribute label string Human-friendly label for user attribute type string Type of user attribute ("string", "number", "datetime", "yesno", "zipcode", "advanced filter string", "advanced filter number") default value string Default value for when no value is set on the user is system lock boolean Attribute is a system default is permanent lock boolean Attribute is permanent and cannot be deleted value is hidden boolean If true, users will not be able to view values of this attribute user can view boolean Non-admin users can see the values of their attributes and use them in filters user can edit boolean Users can change the value of this attribute for themselves hidden value domain whitelist string Destinations to which a hidden attribute may be sent.
- If 'false', user will be removed from non-reflected groups on login. allow roles from normal groups boolean SAML auth'd users will inherit roles from non-reflected Looker groups. allow direct roles boolean Allows roles to be directly assigned to SAML auth'd users. url lock string Link to get this item 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 403: Permission Denied Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 422: Validation Error Datatype Description (object) ValidationError message lock string Error details errors ValidationErrorDetail [] Expand ValidationErrorDetail definition... field lock string Field with error code lock string Error code message lock string Error info message documentation url lock string Documentation link documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Looker email/password logins are always disabled for regular users when ldap is enabled. test slug lock string Slug to identify configurations that are created in order to run a Saml config test modified at lock string When this config was last modified modified by lock string User id of user who last modified this config default new user roles Role [] default new user groups Group [] default new user role ids string[] default new user group ids string[] set roles from groups boolean Set user roles in Looker based on groups from Saml groups attribute string Name of user record attributes used to indicate groups.

### Create Signed Embed Url \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Timezone values are validated against the IANA Timezone standard and can be seen in the Application Time Zone dropdown list on the Looker General Settings admin page. permissions string[] models string[] group ids string[] external group id string A unique value identifying an embed-exclusive group.
- Request POST /embed/sso url Datatype Description Request HTTP Request body HTTP Body Expand HTTP Body definition... body EmbedSsoParams Signed Embed URL parameters Expand EmbedSsoParams definition... target url string The complete URL of the Looker UI page to display in the embed context.
- The best way to obtain this target url is to navigate to the desired Looker page in your web browser and use the "Get embed URL" menu option to copy it to your clipboard and paste it into the target url property as a quoted string value in this API request.
- Home Documentation Data analytics Looker API Reference Send feedback Create Signed Embed Url Stay organized with collections Save and categorize content based on your preferences.

