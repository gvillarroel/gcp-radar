# Step 08 Data

Step 08 stores product-level cards built from Step 06 extended feature definitions and Step 07 quality gates.

Canonical output layout:

- `current/index.json`: machine-readable product-card index
- `current/index.md`: human-readable product-card index
- `current/products/<product-slug>/card.json`: full product card and compact feature inventory
- `current/products/<product-slug>/card.md`: human-readable product card summary

The card is not yet the final published radar report. It is the first durable per-product card layer that can later feed validated artifacts and final reports.
