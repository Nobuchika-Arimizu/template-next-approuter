import { z } from 'zod'
import { FormFieldProps } from '../components/FormField'

// バリデーション
export const contactFormSchema = z.object({
  name: z.string().min(1, '名前は必須です'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  inquiryType: z.enum(['general', 'baibai', 'chintai']), // enumで定義を想定
  message: z.string().min(5, '5文字以上入力してください'),
})

// 型定義
export type ContactFormType = z.infer<typeof contactFormSchema>

// フォーム生成用
export const contactFormFields: FormFieldProps[] = [
  { name: 'name', label: '名前', type: 'text' },
  { name: 'email', label: 'メールアドレス', type: 'email' },
  {
    name: 'inquiryType',
    label: '問い合わせ種別',
    type: 'select',
    options: [
      { label: '一般', value: 'general' },
      { label: '売買に関するお問い合わせ', value: 'baibai' },
      { label: '賃貸に関するお問い合わせ', value: 'chintai' },
    ],
  },
]
