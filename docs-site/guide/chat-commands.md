---
description: Bind hotkeys to common PoE2 chat commands.
---

# Chat Commands

The Chat Commands page lets you bind hotkeys to common PoE2 chat commands or trade replies.

## Defaults

Sift seeds a few useful commands on first launch:

| Command | Default |
|---|---|
| `/hideout` | <kbd>F5</kbd> |
| `/exit` | No hotkey |
| `@last ty` | No hotkey |
| `/invite @last` | No hotkey |
| `/tradewith @last` | No hotkey |
| `/hideout @last` | No hotkey |

## Available Hotkeys

Chat commands can use:

- <kbd>F5</kbd> through <kbd>F12</kbd>
- <kbd>Ctrl+F</kbd>
- <kbd>Ctrl+H</kbd>

Avoid assigning a chat command to the same key used for price check, scanner capture, or opening Sift settings.

## Variables

Use `@last` in a command to insert the last player who whispered you. For example:

```text
/invite @last
```

If Sift has not seen a recent whisper, `@last` remains unchanged.

## Auto-Send

When **Auto-send** is enabled, Sift opens chat, pastes the command, and presses Enter.

When Auto-send is disabled, Sift opens chat and pastes the command but leaves it unsent so you can review or edit it.
