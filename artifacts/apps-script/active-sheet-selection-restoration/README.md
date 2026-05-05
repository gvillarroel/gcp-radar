# Active sheet selection restoration

Product: Apps Script
Feature slug: `active-sheet-selection-restoration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apps Script Spreadsheet service adds setActiveSheet(sheet, restoreSelection) overloads to preserve selection when switching sheets.

## Lifecycle

- Latest feature date: 2018-03-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets), [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder))
- allow (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets), [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder))
- auth (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets), [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder))
- authorization (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets), [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder))
- key (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets), [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder))
- permission (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets), [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder))

## Official Evidence

- [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets)
- [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet)
- [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder)
