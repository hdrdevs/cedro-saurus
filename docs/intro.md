---
sidebar_position: 1
---

# Guide

Let's discover **Cedro in less than 5 minutes**.

## What is Cedro?

Cedro is a JavaScript library written in TypeScript and **based on widgets**. Each user interface created with **Cedro** consists of UI elements known as widgets.

The **Cedro** programming interface is based on Object Orientation; widgets are organized in a hierarchy of classes. For example, any widget is also a specialized container that can contain one or more child widgets.

Here is a minimal example:

```tsx title="src/main.tsx"
import { createApplication, Application, Widgets } from "cedro/src/";
import { WLabel } from "cedro/src/ui";

window.app = (() => {
    return createApplication(
        <Application title="Hello world app | Cedro" orientation="vertical">
            <Widgets>
                <WLabel id="label-id" text="Hello world!" />
            </Widgets>
        </Application>
    );
})();
```

and here is the same example using the class typing model:

```ts title="src/main.ts"
import { Application, WidgetTypes, WidgetAlignTypes } from "cedro/src/";
import { Label } from "cedro/src/ui";

class HelloWordApp extends Application {
    msg: Label;

    constructor() {
        super("Hello world app | Cedro");
        this.getRoot().setAlign(WidgetAlignTypes.VERTICAL);

        this.msg = new Label("label-id", "h1");
        this.msg.setType(WidgetTypes.FILL);
        this.msg.setText("Hello world!");

        this.getRoot().addChild(this.msg);
    }

    init() {
        super.init();
        this.root.render();
        this.theme.setTheme("dark");
    }
}

window.app = new HelloWordApp();

app.init();
```

The `this.getRoot().setAlign(WidgetAlignTypes.VERTICAL);` line indicates that the main container of the application will render the widgets vertically.

The `this.msg = new Label("label-id", "h1");` line creates a widget of type Label with the ID "label-id" and uses the h1 tag.

The `this.msg.setType(WidgetTypes.FILL);` line indicates that the label fill all available space on your parent.

The `this.getRoot().addChild(this.label);` line add the label widget into main container as a child.

## Generate a new project

Generate a new web application based on Cedro using the **vite template**.

Run this commands in your terminal client to create a new cedro application:

```bash
npm install -g degit
npx degit hdrdevs/vite-cedro#main my-app-name
npm install
npm run dev
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run **hello world cedro application**.

## Start your first application

Run the development server:

```bash
cd my-app-name
npm run dev
```

Open `src/main.ts` and edit some lines: the application **reloads automatically** and displays your changes.
