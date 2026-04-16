---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.471Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Content Validator scoping"
feature_slug: "content-validator-scoping"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/create_alert"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "content"
  - "validator"
  - "scoping"
  - "option"
  - "scopes"
  - "validation"
  - "specific"
  - "lookml"
---

# Content Validator scoping

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

A Content Validator option that scopes validation to specific LookML projects and content folders; Content Validator scoping lets developers limit validation to specific LookML projects and content folders.

## Extended Definition

A Content Validator option that scopes validation to specific LookML projects and content folders; Content Validator scoping lets developers limit validation to specific LookML projects and content folders.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/create_alert](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/create_alert)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### Create an alert \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/create_alert](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/create_alert)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For dashboards, this will be the dashboard ID investigative content title lock string The title of the investigative content. lookml dashboard id string ID of the LookML dashboard associated with the alert lookml link id string ID of the LookML dashboard element associated with the alert owner id string User id of alert owner owner display name lock string Alert owner's display name threshold number Value of the alert threshold time series condition state AlertConditionState (Write-Only) (Optional) Only used when first creating time series alerts.
- For dashboards, this will be the dashboard ID investigative content title lock string The title of the investigative content. lookml dashboard id string ID of the LookML dashboard associated with the alert lookml link id string ID of the LookML dashboard element associated with the alert owner id string User id of alert owner owner display name lock string Alert owner's display name threshold number Value of the alert threshold time series condition state AlertConditionState (Write-Only) (Optional) Only used when first creating time series alerts.
- 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 405: Resource Can't Be Modified Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 409: Resource Already Exists Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 422: Validation Error Datatype Description (object) ValidationError message lock string Error details errors ValidationErrorDetail [] Expand ValidationErrorDetail definition... field lock string Field with error code lock string Error code message lock string Error info message documentation url lock string Documentation link documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Valid values are: "NONE", "STRATEGIC NARRATIVE". destinations AlertDestination [] field AlertField The field the alert threshold is compared against when determining when to send notifications followed lock boolean Whether or not the user follows this alert. followable lock boolean Whether or not the alert is followable id lock string ID of the alert is disabled boolean Whether or not the alert is disabled disabled reason string Reason for disabling alert is public boolean Whether or not the alert is public investigative content type string The type of the investigative content Valid values are: "dashboard". investigative content id string The ID of the investigative content.

### Update an alert \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For dashboards, this will be the dashboard ID investigative content title lock string The title of the investigative content. lookml dashboard id string ID of the LookML dashboard associated with the alert lookml link id string ID of the LookML dashboard element associated with the alert owner id string User id of alert owner owner display name lock string Alert owner's display name threshold number Value of the alert threshold time series condition state AlertConditionState (Write-Only) (Optional) Only used when first creating time series alerts.
- For dashboards, this will be the dashboard ID investigative content title lock string The title of the investigative content. lookml dashboard id string ID of the LookML dashboard associated with the alert lookml link id string ID of the LookML dashboard element associated with the alert owner id string User id of alert owner owner display name lock string Alert owner's display name threshold number Value of the alert threshold time series condition state AlertConditionState (Write-Only) (Optional) Only used when first creating time series alerts.
- 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 422: Validation Error Datatype Description (object) ValidationError message lock string Error details errors ValidationErrorDetail [] Expand ValidationErrorDetail definition... field lock string Field with error code lock string Error code message lock string Error info message documentation url lock string Documentation link documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Valid values are: "NONE", "STRATEGIC NARRATIVE". destinations AlertDestination [] field AlertField The field the alert threshold is compared against when determining when to send notifications followed lock boolean Whether or not the user follows this alert. followable lock boolean Whether or not the alert is followable id lock string ID of the alert is disabled boolean Whether or not the alert is disabled disabled reason string Reason for disabling alert is public boolean Whether or not the alert is public investigative content type string The type of the investigative content Valid values are: "dashboard". investigative content id string The ID of the investigative content.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Certification Process URL When a user who does not have the certify content permission wants to request certification of their content, and they select a dashboard's or LookML dashboard's three-dot dashboard menu , a Look's Explore actions gear menu , or an Explore or self-service Explore's Explore actions gear menu , they will see an option that says Want to get this dashboard/look/Explore certified? that includes a Learn how link.
- A user has the option to exclude content in personal folders by selecting the switch next to the Curated Search feature name in the search dialog modal.
- To limit content deliveries and alert notifications to email addresses with a specific domain, you can enter the domain in the format domain.suffix .
- If the User Specific Time Zones option is enabled, then an admin can set the user's default time zone or users can set their own default time zone .

