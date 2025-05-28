import { InputHTMLAttributes } from "react";

export function FormInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="border rounded p-2 w-full" />;
}
