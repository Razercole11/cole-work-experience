import * as z from "zod/v4";
const genericErrorRequired = "This is a required field";

export const formDataSchema = z.object({
  title: z.string("Not a valid title!"),
  foreName: z.string().min(1, { message: genericErrorRequired }),
  surName: z.string().min(1, { message: genericErrorRequired }),
  address1: z.string().min(1, { message: genericErrorRequired }),
  address2: z.string().optional().nullable(),
  address3: z.string().optional().nullable(),
  address4: z.string().min(1, { message: genericErrorRequired }),
  address5: z.string().optional().nullable(),
  address6: z.string().min(1, { message: genericErrorRequired }),
  DoB: z.string().min(1, { message: genericErrorRequired }),
  niNumber: z
    .string()
    .min(9, { message: genericErrorRequired })
    .max(9, { message: genericErrorRequired }),
  email: z.email(),
  completionDate: z.string().min(1, { message: genericErrorRequired }),
});

export const formQuestions = [
  {
    groupName: "Title",
    inputs: [
      {
        id: "title",
        placeholder: "Enter your preferred title",
        type: "dropdown",
        options: [
          { value: "mr", label: "Mr" },
          { value: "mrs", label: "Mrs" },
          { value: "miss", label: "Miss" },
          { value: "ms", label: "Ms" },
          { value: "mx", label: "Mx" },
          { value: "dr", label: "Dr" },
          { value: "prof", label: "Prof" },
          { value: "rev", label: "Rev" },
        ],
      },
    ],
  },
  {
    groupName: "Name",
    inputs: [
      {
        id: "foreName",
        placeholder: "Enter your ForeName:",
        type: "text",
      },
      {
        id: "surName",
        placeholder: "Enter your SurName:",
        type: "text",
      },
    ],
  },
  {
    groupName: "Address",
    inputs: [
      { id: "address1", placeholder: "Street 1:", type: "text" },
      { id: "address2", placeholder: "Street 2:", type: "text" },
      { id: "address3", placeholder: "Street 3:", type: "text" },
      { id: "address4", placeholder: "Town/City:", type: "text" },
      { id: "address5", placeholder: "County:", type: "text" },
      { id: "address6", placeholder: "Postcode:", type: "text" },
    ],
  },
  {
    groupName: "DoB",
    inputs: [{ id: "DoB", placeholder: "DD/MM/YY", type: "date" }],
  },
  {
    groupName: "National Insurance Number",
    inputs: [
      {
        id: "niNumber",
        placeholder: "Enter your National Insurance Number:",
        type: "text",
      },
    ],
  },
  {
    groupName: "Email",
    inputs: [{ id: "email", placeholder: "Enter your Email:", type: "text" }],
  },
  {
    groupName: "Date Of Completion",
    inputs: [{ id: "completionDate", placeholder: "DD/MM/YY", type: "date" }],
  },
] as const;
