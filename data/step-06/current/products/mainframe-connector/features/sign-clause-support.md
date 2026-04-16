---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.239Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "SIGN clause support"
feature_slug: "sign-clause-support"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
keywords:
  - "sign"
  - "clause"
  - "the"
  - "is"
  - "supported"
---

# SIGN clause support

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The SIGN clause is supported.

## Extended Definition

The SIGN clause is supported.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)

## Supporting Pages

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- If you use these constructs in your copybook, Mainframe Connector shows an error. dataAlignedClause dataBlankWhenZeroClause dataCommonOwnLocalClause dataIntegerStringClause dataJustifiedClause dataOccursClause dataReceivedByClause dataRecordAreaClause dataRenamesClause dataSignClause dataSynchronizedClause dataThreadLocalClause dataTypeClause dataTypeDefClause dataUsingClause Data types COBOL data types like COMP-1 and COMP-2 are supported.
- For more information about supported timezone formats, see Supported timezone formats . --omitsuffix (Optional): If this parameter is specified, -SUFFIX STRING or SUFFIX STRING is removed from the field name appearing in BigQuery.
- The following PICTURE fields are supported: Pic A, Pic, B, Pic G (DBCS), Pic N (national or DBCS), Pic U (UTF8), Pic X, and zoned decimal (max precision 38, max scale 38) IBM Hexadecimal floating point (HFP) is supported.
- The following list describes the parameters you can use with these environment variables: command : The value must be null-indicator . –null-value : The value null indicator signals that the referenced field is null.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Connector supports the following subset of the UCM format: <code set name> "<name>" <uconv class> "SBCS" <subchar> \x1A #Example CHARMAP # <U0000> \x00 0 #For the third column, only 0 is supported. <U0001> \x01 0 #etc END CHARMAP If you want to use a customized character set, define a configuration file in the UCM format.
- The native copybook parser extracts default values from the VALUE clause within a copybook, and assigns them to the corresponding columns in a newly created BigQuery table.
- The following VALUE clauses are supported: VAR1 PIC 9(5) VALUE 55. -- Set VAR1 to 55 VAR1 PIC X(5) VALUE aaaa.
- Note: This feature is not supported by the legacy parser.

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Picture symbols Picture attributes Logical type S, 9, V DISPLAY Long (signed 64-bit integer), BigInteger, Decimal64, BigDecimal Example 01 REC 02 DEC PIC S9(2)V9(8) DISPLAY Lists (OCCURS) Lists are ordered collections of elements of the same type.
- Picture symbols Picture attributes Logical type S, 9, V COMP-3 Long (signed 64-bit integer), BigInteger, Decimal64, BigDecimal Example 01 REC 02 DEC PIC S9(2)V9(8) COMP-3 Zoned decimal field (DISPLAY) Zoned decimal fields are fully supported.
- Therefore, unsigned long inputs must use only the lower 63 bits, otherwise, the transcoding process fails.
- The following table lists all the logical types supported by Mainframe Connector.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Using qsam commands (release 5.16.0 and later) Using the vsam decode command (release 5.18.0 and later) Using the gsutil cp command Advantages of qsam and vsam commands The qsam and vsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- This page discusses how you can transcode mainframe data locally on the mainframe to a supported format , and then move the content to BigQuery.
- For the complete list of environment variables supported by Mainframe Connector, see Environment variables .
- If your input dataset is a Queued Sequential Access Method (QSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME qsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / If your input dataset is a Virtual Storage Access Method (VSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME vsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.

