import { NodePlopAPI } from "plop";

export default function plopfile(plop: NodePlopAPI) {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?"
      },
      {
        type: "list",
        name: "type",
        message: "What is your component type?",
        choices: [{
          name: "page",
          value: "page"
        },
        {
          name: "block",
          value: "block"
        },
        {
          name: "organism",
          value: "organism"
        },
        {
          name: "primitive",
          value: "primitive"
        },
      ]
      }
    ]
  });
}
