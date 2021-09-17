import * as vscode from 'vscode';
import { DebugConfigurationProvider } from './debugConfigProvider';
import * as targetPicker from './targetPicker';

export function activate(context: vscode.ExtensionContext) {
	console.log('Activating extension "ios-debug"');

	context.subscriptions.push(vscode.commands.registerCommand('ios-debug.pickTarget', targetPicker.pickTarget));
	context.subscriptions.push(vscode.commands.registerCommand('ios-debug._getOrPickTarget', targetPicker._getOrPickTarget));
	context.subscriptions.push(vscode.commands.registerCommand('ios-debug.targetUDID', targetPicker.targetUDID));
	context.subscriptions.push(vscode.commands.registerCommand('ios-debug.targetType', targetPicker.targetType));
	context.subscriptions.push(vscode.commands.registerCommand('ios-debug.targetName', targetPicker.targetName));
	context.subscriptions.push(vscode.commands.registerCommand('ios-debug.targetSdk', targetPicker.targetSdk));

	context.subscriptions.push(vscode.debug.registerDebugConfigurationProvider('lldb', new DebugConfigurationProvider()));

	targetPicker.activate(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}
