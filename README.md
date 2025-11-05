# hidden-testing-issue
`Hidden` component in `braid-design-system` seems cannot be mocked properly using `BraidTestProvider` by manipulating `breakpoint`.

## Expectation
`pnpm test src/App/App.spec.tsx` should be successful.

## Actual
`pnpm test src/App/App.spec.tsx` failed, saying the text is not visible.

```
Received element is not visible:
      <div class="reset_base__14h31gj0 sprinkles_display_none_mobile__7n536n4w sprinkles_display_block_tablet__7n536n51" />

      14 |     );
      15 |
    > 16 |     expect(screen.getByText('Hello world (greater than tablet)')).toBeVisible();
         |                                                                   ^
      17 |   });
      18 | });
      19 |

      at Object.toBeVisible (src/App/App.spec.tsx:16:67)
```
