"use client";
import { useState, FormEvent, Fragment } from "react";
import { ZodError } from "zod/v4";
import { Input, Button, Title, Dropdown } from "@/components/ui/";
import { formQuestions, formDataSchema } from "@/schema";
import { parseError } from "@/utils";

const initialState = {
  title: "mr",
  foreName: "",
  surName: "",
  address1: "",
  address2: "",
  address3: "",
  address4: "",
  address5: "",
  address6: "",
  DoB: "",
  niNumber: "",
  email: "",
  completionDate: "",
};
const errorState = {
  title: undefined,
  foreName: undefined,
  surName: undefined,
  address1: undefined,
  address2: undefined,
  address3: undefined,
  address4: undefined,
  address5: undefined,
  address6: undefined,
  DoB: undefined,
  niNumber: undefined,
  email: undefined,
  completionDate: undefined,
};

type errorStateType = {
  title: undefined | string;
  foreName: undefined | string;
  surName: undefined | string;
  address1: undefined | string;
  address2: undefined | string;
  address3: undefined | string;
  address4: undefined | string;
  address5: undefined | string;
  address6: undefined | string;
  DoB: undefined | string;
  niNumber: undefined | string;
  email: undefined | string;
  completionDate: undefined | string;
};

type formDataKeysType = keyof typeof initialState;

export default function Home() {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState<errorStateType>(errorState);

  function updateForm(key: formDataKeysType, value: string) {
    setFormData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      formDataSchema.parse(formData);
      const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const text = await response.text();
      console.log(text);
    } catch (error) {
      if (error instanceof ZodError) {
        const parsed = parseError(error);
        setFormErrors((prev) => {
          return {
            ...prev,
            ...parsed,
          };
        });
      }
    }
  }

  return (
    <>
      <div className="w-full justify-items-center">
      <Title>New Client Form</Title>
      </div>  
      <form
        className="bg-[#3f3f3f] gap-2 flex flex-col p-6 rounded-[50px] text-white w-full"
        onSubmit={submitForm}
      >
        <h1 className="mb-4 text-2xl underline">
          Section 1: Help Us Learn About You!
        </h1>
        {formQuestions.map((obj, idx) => {
          return (
            <div className="flex flex-col" key={idx}>
              {obj.groupName}
              <div className="grid grid-cols-2 gap-2">
                {obj.inputs.map((inputs) => {
                  const inputsLength = obj.inputs.length;

                  if (inputs.type === "dropdown" && inputs.options) {
                    return (
                      <Fragment key={inputs.id}>
                        <Dropdown
                          options={inputs.options}
                          className={inputsLength === 1 ? "col-span-2" : ""}
                          value={formData[inputs.id]}
                          onChange={(e) => {
                            updateForm(inputs.id, e.target.value);
                          }}
                        />
                      </Fragment>
                    );
                  }

                  return (
                    <Fragment key={inputs.id}>
                      <Input
                        inputType={inputs.type}
                        value={formData[inputs.id]}
                        id={inputs.id}
                        placeholder={inputs.placeholder}
                        classname={inputsLength === 1 ? "col-span-2" : ""}
                        onChange={(e) => {
                          updateForm(inputs.id, e.target.value);
                        }}
                        customError={formErrors[inputs.id]}
                      />
                    </Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
        <Button classname="place-self-end">Enter</Button>
      </form>
    </>
  );
}
