---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.520Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive resource key security update controls"
feature_slug: "drive-resource-key-security-update-controls"
latest_feature_date: "2021-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/cloud-platform-projects"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
keywords:
  - "drive"
  - "resource"
  - "key"
  - "security"
  - "update"
  - "controls"
  - "let"
  - "scripts"
---

# Drive resource key security update controls

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Drive resource key security update controls let scripts check and set whether shared files and folders require a resource key.

## Extended Definition

Drive resource key security update controls let scripts check and set whether shared files and folders require a resource key.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/cloud-platform-projects](https://developers.google.com/apps-script/guides/cloud-platform-projects)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- Learn more about the resource key security update for Drive .
- The Optimization service has been updated with the following batch methods: LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients) LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients) May 03, 2019 Feature The Document service has been updated to add methods to get and set the language of a document: Document.getLanguage() Document.getSupportedLanguageCodes() Document.setLanguage(languageCode) April 19, 2019 Feature The Data Studio service has been updated to add a few values to FieldType enum : HYPERLINK IMAGE IMAGE LINK April 08, 2019 Change The behavior of the Google Cloud (GCP) projects used by scripts has been altered.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Methods Method Return type Brief description new Accessory Widget() Accessory Widget Creates a new Accessory Widget . new Action() Action Creates a new Action . new Action Response Builder() Action Response Builder Creates a Action Response Builder . new Addon Compose Ui Action Response Builder() Addon Compose Ui Action Response Builder Creates a Addon Compose Ui Action Response Builder . new Attachment() Attachment Creates a Attachment . new Calendar Event Action Response Builder() Calendar Event Action Response Builder Creates a Calendar Event Action Response Builder . new Chat Data Action Builder() Chat Data Actions Response Builder Creates a Chat Data Actions Response Builder . new Chat Message() Chat Message Creates a Chat Message . new Compose Action Response Builder() Compose Action Response Builder Creates a Compose Action Response Builder . new Create Message Action() Create Message Action Creates a Create Message Action . new Drive Items Selected Action Response Builder() Drive Items Selected Action Response Builder Creates a Drive Items Selected Action Response Builder . new Editor File Scope Action Response Builder() Editor File Scope Action Response Builder Creates a Editor File Scope Action Response Builder . new Link Preview() Link Preview Creates a Link Preview . new Navigation() Navigation Creates a Navigation . new Notification() Notification Creates a Notification . new Open Link() Open Link Creates a Open Link . new Render Action Builder() Render Action Builder Creates a new Render Action Builder . new Universal Action Response Builder() Universal Action Response Builder Creates a Universal Action Response Builder . new Update Draft Action Response Builder() Update Draft Action Response Builder Creates a Update Draft Action Response Builder . new Update Draft Bcc Recipients Action() Update Draft Bcc Recipients Action Creates a Update Draft Bcc Recipients Action ; new Update Draft Body Action() Update Draft Body Action Creates a Update Draft Body Action . new Update Draft Cc Recipients Action() Update Draft Cc Recipients Action Creates a Update Draft Cc Recipients Action . new Update Draft Subject Action() Update Draft Subject Action Creates a Update Draft Subject Action . new Update Draft To Recipients Action() Update Draft To Recipients Action Creates a Update Draft To Recipients Action . new Update Inline Preview Action() Update Inline Preview Action Creates a Update Inline Preview Action . new Update Message Action() Update Message Action Creates a Update Message Action .
- UpdateDraftActionResponseBuilder Methods Method Return type Brief description build() Update Draft Action Response Builds the current update draft action response and validates it. set Send Status(sendStatus) Update Draft Action Response Builder Sets the enum field that determines whether or not the email sends after the update action. set Update Draft Bcc Recipients Action(updateDraftBccRecipientsAction) Update Draft Action Response Builder Sets an action that updates the email Bcc recipients of a draft. set Update Draft Body Action(updateDraftBodyAction) Update Draft Action Response Builder Set an action that updates the email body of a draft. set Update Draft Cc Recipients Action(updateDraftCcRecipientsAction) Update Draft Action Response Builder Sets an action that updates the Cc recipients of a draft. set Update Draft Subject Action(updateDraftSubjectAction) Update Draft Action Response Builder Sets an action that updates the subject line of a draft. set Update Draft To Recipients Action(updateDraftToRecipientsAction) Update Draft Action Response Builder Sets an action that updates the To recipients of a draft.
- VariableData Methods Method Return type Brief description add Boolean Value(value) Variable Data Adds a boolean value to the variable data. add Email Address(emailAddress) Variable Data Adds an email address to the variable data. add Float Value(value) Variable Data Adds a float value to the variable data. add Google User(googleUser) Variable Data Adds a google user to the variable data. add Integer Value(value) Variable Data Adds an integer value to the variable data. add Resource Data(resourceData) Variable Data Adds a Resource Data value to the variable data. add Resource Reference(resourceReference) Variable Data Adds a resource reference ID to the variable data. add String Value(value) Variable Data Adds a string value to the variable data. add Timestamp Value(value) Variable Data Adds a Time Stamp value to the variable data. add Workflow Text Format(workflowTextFormat) Variable Data Adds a Workflow Text Format value to the variable data.
- ModifyCard Methods Method Return type Brief description set Insert Section(insertSection) Modify Card Sets the Insert Section for this modify card object. set Insert Widget(insertWidget) Modify Card Sets the Insert Widget for this modify card object. set Remove Section(removeSection) Modify Card Sets the Remove Section for this modify card object. set Remove Widget(removeWidget) Modify Card Sets the Remove Widget for this modify card object. set Replace Section(replacementSection) Modify Card Sets the replacement Card Section for this modify card object, the replacement section should have the same id as an existing card section. set Replace Widget(replacementWidget) Modify Card Sets the replacement widget for this modify card object, the replacement widget should have the same id as an existing widget. set Update Widget(updateWidget) Modify Card Sets the Update Widget for this modify card object.

### Google Cloud projects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/cloud-platform-projects](https://developers.google.com/apps-script/guides/cloud-platform-projects)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shared drives are valuable when developing scripts, add-ons, and web apps with a team, but they place some restrictions on what you can do with older default Cloud projects.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- If your script project uses a default project that was created before April 8, 2019, the following restrictions apply while the script project resides on a shared drive: You can't access the default project using the Apps Script UI or the Google Cloud console .
- Get a list of Apps Script Cloud projects If you have the resourcemanager.projects.list permission for your organization's Apps Script project folder, you can view all of the standard and default Apps Script Cloud projects within the folder.

