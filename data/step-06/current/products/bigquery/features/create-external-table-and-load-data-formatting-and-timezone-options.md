---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.422Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE EXTERNAL TABLE and LOAD DATA formatting and timezone options"
feature_slug: "create-external-table-and-load-data-formatting-and-timezone-options"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "time_zone option"
  - "timestamp_format option"
  - "time_zone"
  - "datetime_format"
  - "date_format option"
  - "CREATE EXTERNAL TABLE"
  - "timestamp_format"
  - "date_format"
---

# CREATE EXTERNAL TABLE and LOAD DATA formatting and timezone options

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

CREATE EXTERNAL TABLE and LOAD DATA now support additional preview options for date and time parsing, including time_zone, date_format, datetime_format, time_format, and timestamp_format.

## Extended Definition

In BigQuery, the CREATE EXTERNAL TABLE and LOAD DATA statements support preview options for controlling date/time parsing when loading source data: time_zone, date_format, datetime_format, time_format, and timestamp_format. These options are used for CSV and JSON ingestion to apply a default timezone for TIMESTAMP values without explicit zones and to define custom format strings for DATE, DATETIME, TIME, and TIMESTAMP fields.

## Evidence Summary

The loading CSV documentation specifies each parsing option and its behavior, while release notes confirm these options are newly supported (in preview) by CREATE EXTERNAL TABLE and LOAD DATA.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions required DATE and TIMESTAMP input formats for CSV/JSON loads, but does not describe new time_zone or *_format options in CREATE EXTERNAL TABLE or LOAD DATA.

Evidence snippets:
- At most, five errors of any type are returned regardless of the --max bad records value. --ignore unknown values : When specified, allows and ignores extra, unrecognized values in CSV or JSON data. --time zone : An optional default time zone that will apply when parsing timestamp values that have no specific time zone in CSV or JSON data. --date format : An optional custom string that defines how the DATE values are formatted in CSV or JSON data. --datetime format : An optional custom string that defines how the DATETIME values are formatted in CSV or JSON data. --time format : An optional custom string that defines how the TIME values are formatted in CSV or JSON data. --timestamp format : An optional custom string that defines how the TIMESTAMP values are formatted in CSV or JSON data. --autodetect : When specified, enable schema auto-detection for CSV and JSON data. --destination kms key : The Cloud KMS key for encryption of the table data. bq --location = location load \ -- [ no ] replace \ --source format = format \ dataset.table \ path to source \ schema where: location is your location .
- At most, five errors of any type are returned regardless of the --max bad records value. --ignore unknown values : When specified, allows and ignores extra, unrecognized values in CSV or JSON data. --time zone : An optional default time zone that will apply when parsing timestamp values that have no specific time zone in CSV or JSON data. --date format : An optional custom string that defines how the DATE values are formatted in CSV or JSON data. --datetime format : An optional custom string that defines how the DATETIME values are formatted in CSV or JSON data. --time format : An optional custom string that defines how the TIME values are formatted in CSV or JSON data. --timestamp format : An optional custom string that defines how the TIMESTAMP values are formatted in CSV or JSON data. --autodetect : When specified, enable schema auto-detection for CSV and JSON data. --time partitioning type : Enables time-based partitioning on a table and sets the partition type.
- Timestamp Format Timestamp Format --timestamp format timestampFormat ( Java , Python ) (Optional) Format elements that define how the TIMESTAMP values are formatted in the input files (for example, MM/DD/YYYY HH24:MI:SS.FF3 ).
- Datetime Format Datetime Format --datetime format datetimeFormat ( Java , Python ) (Optional) Format elements that define how the DATETIME values are formatted in the input files (for example, MM/DD/YYYY HH24:MI:SS.FF3 ).

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Feature The CREATE EXTERNAL TABLE and LOAD DATA statements now support the following options in preview : time zone : specify a time zone to use when loading data date format , datetime format , time format , and timestamp format : define how date and time values are formatted in your source files Feature In the navigation menu, you can now go to Settings and select Configuration settings to customize the BigQuery Studio experience for users within the selected project or organization.
- January 06, 2026 Feature The CREATE EXTERNAL TABLE and LOAD DATA statements now support the following options: time zone : specify a time zone to use when loading data date format , datetime format , time format , and timestamp format : define how date and time values are formatted in your source files null markers : define the strings that represent NULL values in CSV files. source column match : specify how loaded columns are matched to the schema.
- July 21, 2025 Libraries Python 3.35.0 (2025-07-15) Features Add null markers property to LoadJobConfig and CSVOptions ( #2239 ) ( 289446d ) Add total slot ms to RowIterator ( #2233 ) ( d44bf02 ) Add UpdateMode to update dataset ( #2204 ) ( eb9c2af ) Adds dataset view parameter to get dataset method ( #2198 ) ( 28a5750 ) Adds date format to load job and external config ( #2231 ) ( 7d31828 ) Adds datetime format as an option ( #2236 ) ( 54d3dc6 ) Adds source column match and associated tests ( #2227 ) ( 6d5d236 ) Adds time format and timestamp format and associated tests ( #2238 ) ( 371ad29 ) Adds time zone to external config and load job ( #2229 ) ( b2300d0 ) Bug Fixes Adds magics.context.project to eliminate issues with unit tests … ( #2228 ) ( 27ff3a8 ) Fix rows returned when both start index and page size are provided ( #2181 ) ( 45643a2 ) Make AccessEntry equality consistent with from api repr ( #2218 ) ( 4941de4 ) Update type hints for various BigQuery files ( #2206 ) ( b863291 ) Documentation Improve clarity of "Output Only" fields in Dataset class ( #2201 ) ( bd5aba8 ) Libraries Java 2.53.0 (2025-07-14) Features bigquery: Add OpenTelemetry support to BQ rpcs ( #3860 ) ( e2d23c1 ) bigquery: Add support for custom timezones and timestamps ( #3859 ) ( e5467c9 ) Next release from main branch is 2.53.0 ( #3879 ) ( c47a062 ) Bug Fixes Load jobs preserve ascii control characters configuration ( #3876 ) ( 5cfdf85 ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.69.0 ( #3870 ) ( a7f1007 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250615-2.0.0 ( #3872 ) ( f081589 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3878 ) ( 0e971b8 ) Documentation Update maven format command ( #3877 ) ( d2918da ) Java 2.53.0 (2025-07-14) Features bigquery: Add OpenTelemetry support to BQ rpcs ( #3860 ) ( e2d23c1 ) bigquery: Add support for custom timezones and timestamps ( #3859 ) ( e5467c9 ) Next release from main branch is 2.53.0 ( #3879 ) ( c47a062 ) Bug Fixes Load jobs preserve ascii control characters configuration ( #3876 ) ( 5cfdf85 ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.69.0 ( #3870 ) ( a7f1007 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250615-2.0.0 ( #3872 ) ( f081589 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3878 ) ( 0e971b8 ) Documentation Update maven format command ( #3877 ) ( d2918da ) Feature You can now use the DISTINCT pipe operator to select distinct rows from a table in your pipe syntax queries.
- Feature The CREATE EXTERNAL TABLE and LOAD DATA statements now support the following options in Preview : null markers : define the strings that represent NULL values in CSV files. source column match : specify how loaded columns are matched to the schema.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example sets the default time zone to America/Chicago and the default query job timeout to one hour for an organization in the US region: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = "America/Chicago" , region-us.default job query timeout ms = 3600000 ); The following example sets the default time zone, the default query job timeout, the default interactive and batch queue timeouts, and the default Cloud KMS key, clearing the organization level default settings: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL ); ALTER PROJECT SET OPTIONS statement Sets the options on a project.
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- Examples The following example creates an AWS Glue federated dataset: CREATE EXTERNAL SCHEMA mydataset WITH CONNECTION myproject . aws-us-east-1 . myconnection OPTIONS ( external source = 'aws-glue://arn:aws:glue:us-east-1:123456789:database/test database' , location = 'aws-us-east-1' ); CREATE EXTERNAL TABLE statement Creates a new external table.
- Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property. default time zone STRING The default time zone to use in time zone-dependent SQL functions, when a time zone is not specified as an argument.

