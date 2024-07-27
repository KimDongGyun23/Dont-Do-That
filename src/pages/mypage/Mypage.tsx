import SubHeader from '@/components/SubHeader'
import { IoIosArrowForward } from 'react-icons/io'
import { TextWithProfile } from '@/components/TextWithProfile'
import { Link } from 'react-router-dom'
import { useMypage, useRemove } from '@/services/mypage/useMypageService'
import { useModal } from '@/hooks/useModal'
import ModalRemove from './components/ModalRemove'
import { useTokenActions } from '@/store/token'

const MYPAGE_LIST = [
  { text: '비밀번호 변경', link: '/mypage/password' },
  { text: '개선된 습관 목록', link: '/mypage/complete-habit' },
  { text: '친구 목록 관리', link: '/mypage/friend-list' },
  { text: '서비스 이용 약관', link: '/mypage' },
  { text: '자주 묻는 질문', link: '/mypage' },
]

const Mypage = () => {
  const { data: mypageData, status } = useMypage()
  const { mutate: remove } = useRemove()
  const { isOpen, openModal, closeModal } = useModal()
  const { resetToken } = useTokenActions()

  const handleClickRemoveButton = () => {
    resetToken()
    remove()
  }

  if (status === 'pending') return null
  if (status === 'error') return null
  const { name, image } = mypageData

  return (
    <div>
      <SubHeader hidden>마이페이지</SubHeader>

      <Link
        to={'/mypage/account-info'}
        className="flexAlign mb-7 mt-8 gap-3 rounded-2xl border border-secondary-200 px-4 py-6 shadow-small"
      >
        <TextWithProfile>
          <TextWithProfile.Image src={image} />
          <TextWithProfile.TextContainer>
            <TextWithProfile.PrimaryText>{name}</TextWithProfile.PrimaryText>
            <TextWithProfile.SecondaryText>
              프로필 수정하기
            </TextWithProfile.SecondaryText>
          </TextWithProfile.TextContainer>
        </TextWithProfile>
        <IoIosArrowForward className="ml-auto text-secondary-400" size={24} />
      </Link>

      <ul className="flexColumn gap-7 px-2">
        {MYPAGE_LIST.map((item) => (
          <Link to={item.link} key={item.text}>
            <li>{item.text}</li>
          </Link>
        ))}
        <li className="cursor-pointer text-error-primary" onClick={openModal}>
          계정 탈퇴
        </li>
      </ul>
      <ModalRemove
        isOpen={isOpen}
        closeModal={closeModal}
        handleClick={handleClickRemoveButton}
      />
    </div>
  )
}

export default Mypage
