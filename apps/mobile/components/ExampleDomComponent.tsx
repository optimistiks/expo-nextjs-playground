"use dom";

import { ExampleComponent } from "@app/ui";

export function ExampleDOMComponent({ name }: { name: string }) {
  return (
    <div>
      <h1>Hello from ExampleDOMComponent, {name}</h1>
      <ExampleComponent />
    </div>
  );
}
