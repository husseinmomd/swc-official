// firelds
export enum Fields {
  TEXT = "text",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  RADIO = "radio",
  OPTIONS = "options",
}

export const formFields: IFromFields[] = [
  {
    component: "text",
    placeholder: "Full Name",
    type: "text",
    name: "name",
  },
  {
    component: "text",
    placeholder: "lcaion",
    type: "text",
    name: "locaion",
  },
  {
    component: "text",
    placeholder: "Email",
    type: "email",
    name: "email",
  },
  {
    component: "textarea",
    placeholder: "Bio",
    type: "text",
    name: "bio",
  },
  {
    component: "text",
    placeholder: "Expertise",
    type: "text",
    name: "skills",
  },
  {
    component: "text",
    placeholder: "Github",
    type: "url",
    name: "github",
  },
  {
    component: "text",
    placeholder: "Twiter",
    type: "url",
    name: "twitter",
  },
  {
    component: "text",
    placeholder: "LinkedIn",
    type: "url",
    name: "linkedin",
  },
  {
    component: "text",
    placeholder: "Portfolio",
    type: "url",
    name: "portfolio",
  },
];

export interface IFromFields {
  component: string;
  placeholder?: string;
  type?: string;
  name: string;
  fields?: {
    placeholder?: string;
    id?: string;
    value?: string;
  }[];
}
