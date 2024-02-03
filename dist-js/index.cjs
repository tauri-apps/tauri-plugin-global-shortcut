'use strict';

var core = require('@tauri-apps/api/core');

// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * Register global shortcuts.
 *
 * @module
 */
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
    const h = new core.Channel();
    h.onmessage = handler;
    return await core.invoke("plugin:global-shortcut|register", {
        shortcut,
        handler: h,
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
    const h = new core.Channel();
    h.onmessage = handler;
    return await core.invoke("plugin:global-shortcut|register_all", {
        shortcuts,
        handler: h,
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
    return await core.invoke("plugin:global-shortcut|is_registered", {
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
    return await core.invoke("plugin:global-shortcut|unregister", {
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
    return await core.invoke("plugin:global-shortcut|unregister_all");
}

exports.isRegistered = isRegistered;
exports.register = register;
exports.registerAll = registerAll;
exports.unregister = unregister;
exports.unregisterAll = unregisterAll;
