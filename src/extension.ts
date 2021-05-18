import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('webviewblockedother.helloWorld', () => {
		const panel = vscode.window.createWebviewPanel(
			"examplewebview",
			"Example Webview",
			vscode.ViewColumn.One
		);

		panel.webview.html = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
			</head>
			<body>
				<img src="http://localhost:3000/test"/>
			</body>
			</html>
		`;
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
