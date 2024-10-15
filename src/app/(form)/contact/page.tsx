/**
 * お問い合わせフォーム
 */

import { FormField } from '@/features/form/components/FormField'
import { contactFormFields } from '@/features/form/schema/contactFormSchema'
import { Button } from '@/ui/button/button'
import { ContentsContainer } from '@/ui/layout/container/ContentsContainer'

export default function Contact() {
  return (
    <section className="py-[4rem] px-[1.6rem]">
      <header>
        <h2 className="text-center text-3xl mb-[3.2rem] font-bold">お問い合わせ</h2>
      </header>
      <ContentsContainer size="xs">
        <form id="contact_form" className="flex flex-col space-y-[3rem]">
          <div className="mb-[2rem]">
            {contactFormFields.map(({ name, label, type, options, defaultValue }) => {
              return (
                <FormField
                  key={name}
                  name={name}
                  label={label}
                  type={type}
                  options={options}
                  defaultValue={defaultValue}
                />
              )
            })}
          </div>
          <Button type="submit" className="w-[27rem] h-[5rem] rounded-lg mx-auto bg-theme">
            送信
          </Button>
        </form>
      </ContentsContainer>
    </section>
  )
}
