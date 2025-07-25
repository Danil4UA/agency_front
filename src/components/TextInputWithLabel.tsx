import React, { InputHTMLAttributes } from "react";
import { Path, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type Props<S> = {
  label: string,
  nameInSchema: Path<S>,
  itemClass?: string,
  labelClass?: string,
  inputClass?: string,
  messageClass?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customChange?: (newValue?: any) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterNewValue?: (newValue: any) => string
} & InputHTMLAttributes<HTMLInputElement>

export default function TextInputWithLabel<S>({
  label,
  nameInSchema,
  itemClass,
  labelClass,
  inputClass,
  messageClass,
  customChange,
  filterNewValue,
  ...props
}: Props<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className={itemClass}>
          <FormLabel className={labelClass} htmlFor={nameInSchema}>{label}</FormLabel>
          <FormControl>
            <Input
              id={nameInSchema}
              {...props}
              {...field}
              className={inputClass}
              value={field.value || ""}
              onChange={(e) => {
                let newValue = e.target.value;
                if (filterNewValue) {
                  newValue = filterNewValue(newValue);
                }
                if (customChange) {
                  customChange(newValue);
                }
                field.onChange(newValue);
              }}
            />
          </FormControl>
          <FormMessage className={cn(messageClass, "text-red-600")} />
        </FormItem>
      )}
    />
  );
}
