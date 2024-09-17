import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface InputProps {
  control: string | any;
  name: string;
  label: string;
  placeholder: string;
  type?: any;
}

export const FormInput = ({
  name,
  control,
  label,
  placeholder,
  type = "text",
}: InputProps) => {
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">{label}</FormLabel>
            <FormControl>
              <Input type={type} {...field} placeholder={placeholder} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};