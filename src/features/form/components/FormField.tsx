'use client'
import { FormControl, FormItem, FormMessage } from '@/ui/form/form'
import { Input } from '@/ui/form/input'
import { Label } from '@/ui/form/label'
import { RadioGroup, RadioGroupItem } from '@/ui/form/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/form/select'

export type FormFieldProps = {
  name: string
  label: string
  type?: 'text' | 'email' | 'select' | 'radio' | 'check'
  options?: Array<{ label: string; value: string }>
  defaultValue?: string
  validationSchema?: any
}
export function FormField({
  name,
  label,
  type,
  options,
  defaultValue,
  validationSchema,
}: FormFieldProps) {
  if (type === 'text') {
    return (
      <div>
        <Label htmlFor={name} className="text-base block mb-[.4rem]">
          {label}
        </Label>
        <Input name={name} type="text" />
      </div>
    )
  }

  if (type === 'email') {
    return (
      <div>
        <Label htmlFor={name} className="text-base block mb-[.4rem]">
          {label}
        </Label>
        <Input name={name} type="email" placeholder="example@dre.co.jp" />
      </div>
    )
  }

  if (type === 'select') {
    return (
      <div>
        <Label htmlFor={name} className="text-base block mb-[.4rem]">
          {label}
        </Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="選択してください" />
          </SelectTrigger>
          <SelectContent>
            {options?.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

  if (type === 'radio') {
    return (
      <div>
        <Label htmlFor={name} className="text-base block mb-[.4rem]">
          {label}
        </Label>
        <RadioGroup defaultValue={defaultValue}>
          {options?.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={item.value} id={item.value} />
              <Label htmlFor={item.value}>{item.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    )
  }
}
