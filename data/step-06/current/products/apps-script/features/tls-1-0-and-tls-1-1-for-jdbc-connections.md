---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.520Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "TLS 1.0 and TLS 1.1 for JDBC connections"
feature_slug: "tls-1-0-and-tls-1-1-for-jdbc-connections"
latest_feature_date: "2021-12-15"
deprecation_date: "2021-12-15"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/jdbc"
  - "https://developers.google.com/apps-script/advanced/tables"
keywords:
  - "tls"
  - "jdbc"
  - "connections"
  - "older"
  - "security"
  - "protocol"
  - "versions"
  - "previously"
---

# TLS 1.0 and TLS 1.1 for JDBC connections

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

TLS 1.0 and TLS 1.1 are older security protocol versions previously usable for Apps Script JDBC connections; deprecated on 2021-12-15.

## Extended Definition

TLS 1.0 and TLS 1.1 are older security protocol versions previously usable for Apps Script JDBC connections; deprecated on 2021-12-15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/jdbc](https://developers.google.com/apps-script/guides/jdbc)
- [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- December 15, 2021 Deprecated Versions 1.0 and 1.1 of the TLS security protocol are disabled.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- August 23, 2023 Feature You can now view previously deployed script versions and compare them to the current script version in the Apps Script IDE.
- To establish JDBC connections, use TLS 1.2 or higher.

### JDBC \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/jdbc](https://developers.google.com/apps-script/guides/jdbc)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Versions 1.0 and 1.1 of the TLS security protocol are disabled.
- Recommended for faster reads / function readFromTableUsingGetRows () { try { const conn = Jdbc . getCloudSqlConnection ( dbUrl , user , userPwd ); const start = new Date (); const stmt = conn . createStatement (); stmt . setMaxRows ( 1000 ); const results = stmt . executeQuery ( "SELECT FROM entries" ); const numCols = results . getMetaData (). getColumnCount (); const getRowArgs = []; for ( let col = 0 ; col < numCols ; col ++ ) { getRowArgs . push ( getString( ${ col + 1 } ) ); } const rows = results . getRows ( getRowArgs . join ( "," )); for ( let i = 0 ; i < rows . length ; i ++ ) { console . log ( rows [ i ]. join ( "\t" )); } results . close (); stmt . close (); const end = new Date (); console . log ( "Time elapsed: %sms" , end - start ); } catch ( err ) { // TODO(developer) - Handle exception from the API console . log ( "Failed with an error %s" , err . message ); } } Close connections JDBC connections close automatically when a script finishes executing. (Single google.script.run calls count as a complete execution, even if the HTML service page that made the call remains open.) Nonetheless, if you know you're done with a connection, statement, or result set before the end of the script, close them manually by calling JdbcConnection.close , JdbcStatement.close , or JdbcResultSet.close .
- Create Google Cloud SQL connections There are two ways of establishing a connection with a Google Cloud SQL database using Apps Script's JDBC service : (Recommended) Connecting using Jdbc.getCloudSqlConnection Connecting using Jdbc.getConnection Both are valid, but the second method requires you to authorize a set of IP ranges for access to your database.
- Create other database connections In order to create a database connection using the Apps Script JDBC service , in your database settings you must authorize IP ranges from this data source .

### Apps Script Sunset Schedule \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- JDBC connections to Google Cloud SQL databases using jdbc:google:rdbms April 3, 2018 April 2019 JDBC connections that use a jdbc:google:rdbms:subname URL connectivity path to a Google Cloud SQL database no longer function. jdbc:google:mysql:subname URL connectivity paths and connections made using the generic IP method are unaffected.
- Previously published web apps are no longer discoverable in the Chrome Web Store.
- See Creating Google Cloud SQL connections for migration instructions.

