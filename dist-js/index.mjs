// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * Register a global shortcut.
 * @example
 * ```typescript
 * import { register } from '@tauri-apps/plugin-global-shortcut';
 * await register('CommandOrControl+Shift+C', () => {
 *   console.log('Shortcut triggered');
 * });
 * ```
 *
 * @param shortcut Shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q
 * @param handler Shortcut handler callback - takes the triggered shortcut as argument
 *
 * @since 2.0.0
 */
async function register(shortcut, handler) {
    return await window.__TAURI_INVOKE__("plugin:globalShortcut|register", {
        shortcut,
        handler: window.__TAURI__.transformCallback(handler),
    });
}
/**
 * Register a collection of global shortcuts.
 * @example
 * ```typescript
 * import { registerAll } from '@tauri-apps/plugin-global-shortcut';
 * await registerAll(['CommandOrControl+Shift+C', 'Ctrl+Alt+F12'], (shortcut) => {
 *   console.log(`Shortcut ${shortcut} triggered`);
 * });
 * ```
 *
 * @param shortcuts Array of shortcut definitions, modifiers and key separated by "+" e.g. CmdOrControl+Q
 * @param handler Shortcut handler callback - takes the triggered shortcut as argument
 *
 * @since 2.0.0
 */
async function registerAll(shortcuts, handler) {
    return await window.__TAURI_INVOKE__("plugin:globalShortcut|register_all", {
        shortcuts,
        handler: window.__TAURI__.transformCallback(handler),
    });
}
/**
 * Determines whether the given shortcut is registered by this application or not.
 *
 * If the shortcut is registered by another application, it will still return `false`.
 *
 * @example
 * ```typescript
 * import { isRegistered } from '@tauri-apps/plugin-global-shortcut';
 * const isRegistered = await isRegistered('CommandOrControl+P');
 * ```
 *
 * @param shortcut shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q
 *
 * @since 2.0.0
 */
async function isRegistered(shortcut) {
    return await window.__TAURI_INVOKE__("plugin:globalShortcut|is_registered", {
        shortcut,
    });
}
/**
 * Unregister a global shortcut.
 * @example
 * ```typescript
 * import { unregister } from '@tauri-apps/plugin-global-shortcut';
 * await unregister('CmdOrControl+Space');
 * ```
 *
 * @param shortcut shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q
 *
 * @since 2.0.0
 */
async function unregister(shortcut) {
    return await window.__TAURI_INVOKE__("plugin:globalShortcut|unregister", {
        shortcut,
    });
}
/**
 * Unregisters all shortcuts registered by the application.
 * @example
 * ```typescript
 * import { unregisterAll } from '@tauri-apps/plugin-global-shortcut';
 * await unregisterAll();
 * ```
 *
 * @since 2.0.0
 */
async function unregisterAll() {
    return await window.__TAURI_INVOKE__("plugin:globalShortcut|unregister_all");
}

export { isRegistered, register, registerAll, unregister, unregisterAll };
//# sourceMappingURL=index.mjs.map
