import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  id: z
    .string()
    .min(6, { message: '아이디는 최소 6자 이상이어야 합니다.' })
    .max(12, { message: '아이디는 최대 12자 이하이어야 합니다.' })
    .regex(/^[a-z0-9]+$/, {
      message: '아이디는 영문 소문자와 숫자만 사용할 수 있습니다.',
    }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
    .max(16, { message: '비밀번호는 최대 16자 이하이어야 합니다.' })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/, {
      message: '비밀번호는 영문자와 숫자를 모두 포함해야 합니다.',
    }),
})

export const useLoginForm = () => {
  const formMethod = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  return formMethod
}
