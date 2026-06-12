# Rating

The MVP rating system uses maturity labels instead of numeric scores.

## Maturity Labels

| Maturity | Meaning |
|---|---|
| Recommended | Practical, documented, reusable, and safe enough for most teams to evaluate first. |
| Promising | Useful and directionally strong, with gaps in examples, maintenance, or portability. |
| Experimental | Interesting early-stage work. Inspect before using in serious workflows. |
| Archived | Historically useful or educational, but no longer maintained or not recommended for new usage. |

## Review Dimensions

When maintainers disagree on maturity, use these dimensions:

| Dimension | Questions |
|---|---|
| Usefulness | Does it solve a clear recurring task? |
| Documentation | Can a new user understand setup and usage? |
| Reusability | Can it work across projects without heavy rewriting? |
| Maintenance | Is it current, active, or widely used? |
| Safety | Does it avoid unsafe defaults and document trust boundaries? |

## Future Scoring

If the repository grows enough to need ranking pages, we may add a structured score:

```yaml
rating:
  overall: 4.2
  usefulness: 5
  documentation: 4
  reusability: 4
  maintenance: 4
  safety: 4
```

Until then, maturity labels are easier to maintain and less likely to create false precision.
