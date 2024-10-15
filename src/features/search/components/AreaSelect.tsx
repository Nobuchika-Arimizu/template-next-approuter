import { areas } from '@/features/search/constants/index-for-search'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/form/select'
import { SelectProps } from '@radix-ui/react-select'

type Props = {
  placeholder?: string
}
export function AreaSelectBox({ placeholder = '選択してください', ...props }: Props & SelectProps) {
  return (
    <div>
      <Select {...props}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {areas?.map((item, index) => (
            <SelectItem key={index} value={item.id}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
